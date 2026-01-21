/* =========================================
   1. THEME & REVEAL ANIMATIONS
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    // Toggle Logic
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcons(newTheme);
            // Refresh particles on theme change to update colors
            initParticles(); 
        });
    }

    function updateIcons(theme) {
        if(sunIcon) sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
        if(moonIcon) moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }

    // Scroll Reveal
    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                reveals[i].classList.add("active");
            }
        }
    };
    window.addEventListener("scroll", reveal);
    reveal();
});

/* =========================================
   2. PARTICLE SYSTEM (Global)
   ========================================= */
const canvas = document.getElementById('particle-canvas');
let ctx;
let particles = [];
let mouse = { x: null, y: null };
let isHovering = false;
let animationId;

if (canvas) {
    ctx = canvas.getContext('2d');
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    // Trigger resize immediately
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        if (!isHovering) {
            for (let i = 0; i < 2; i++) {
                particles.push(new Particle(mouse.x, mouse.y, false));
            }
        }
    });

    // Add interactions to all clickable elements
    const interactables = document.querySelectorAll('a, button, .card, .skill-card-large, .mobile-nav-link, .timeline-item, .gallery-item');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            if (!isHovering) createFirework(mouse.x, mouse.y);
            isHovering = true;
        });
        item.addEventListener('mouseleave', (e) => {
            const related = e.relatedTarget;
            if (!related || !item.contains(related)) isHovering = false;
        });
    });

    initParticles();
}

class Particle {
    constructor(x, y, isFirework) {
        this.x = x; this.y = y; this.isFirework = isFirework;
        const style = getComputedStyle(document.documentElement);
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const teal = style.getPropertyValue('--accent-primary').trim() || '#0d9488';
        const orange = style.getPropertyValue('--accent-comp').trim() || '#f97316';
        const neutral = (currentTheme === 'dark') ? '#ffffff' : '#064e4b';
        
        this.size = Math.random() * (isFirework ? 4 : 2) + 1;
        const colorPool = isFirework ? [orange, neutral] : [teal, neutral];
        this.color = colorPool[Math.floor(Math.random() * colorPool.length)];
        
        if (isFirework) {
            const angle = Math.random() * Math.PI * 2;
            const force = Math.random() * 8 + 3;
            this.speedX = Math.cos(angle) * force;
            this.speedY = Math.sin(angle) * force;
            this.decay = 0.015;
        } else {
            this.speedX = Math.random() * 1.5 - 0.75;
            this.speedY = Math.random() * 1.5 - 0.75;
            this.decay = 0.01;
        }
        this.life = 1.0;
    }
    update() { this.x += this.speedX; this.y += this.speedY; this.life -= this.decay; }
    draw() { 
        if(!ctx) return;
        ctx.globalAlpha = this.life; 
        ctx.fillStyle = this.color; 
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
        ctx.fill(); 
    }
}

function createFirework(x, y) { for (let i = 0; i < 30; i++) particles.push(new Particle(x, y, true)); }

function initParticles() {
    if (animationId) cancelAnimationFrame(animationId);
    animate();
}

function animate() {
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update(); 
        particles[i].draw();
        if (particles[i].life <= 0) { particles.splice(i, 1); i--; }
    }
    animationId = requestAnimationFrame(animate);
}

/* =========================================
   3. STACK PAGE LOGIC (Only runs on Stack Page)
   ========================================= */
const scrollContainer = document.getElementById('scrollContainer');
if (scrollContainer) {
    // Content Library
    const contentLibrary = {
        'unity': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Unity Project Showcase</h3><div class="project-grid"><div><div class="project-thumbnail">🏃</div><h4 style="margin-top:1rem;">Ruin Runner Reborn</h4><p style="font-size:0.9rem;">FPS parkour & puzzle solving. Solo remake project.</p></div><div><div class="project-thumbnail">💌</div><h4 style="margin-top:1rem;">Yooha's Game</h4><p style="font-size:0.9rem;">Narrative dating sim. Client work for Amsterdam University.</p></div><div><div class="project-thumbnail">✨</div><h4 style="margin-top:1rem;">Star Tale</h4><p style="font-size:0.9rem;">Co-op adventure with rune collection systems.</p></div></div>`,
        'csharp': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">C# Architecture</h3><ul style="margin-left: 1.5rem; margin-top: 1rem;"><li><strong>Tower Defense Logic:</strong> Wave spawning and economy systems.</li><li><strong>FPS Controllers:</strong> Custom movement physics and parkour mechanics.</li><li><strong>Networking:</strong> Multiplayer synchronization using Photon PUN 2.</li></ul>`,
        'blender': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">3D Art & Assets</h3><ul style="margin-left: 1.5rem; margin-top: 1rem;"><li><strong>Rendering:</strong> High-fidelity visualization using Cycles and Eevee.</li><li><strong>Pipeline:</strong> Low-poly optimization vs. high-poly sculpting.</li><li><strong>Rigging:</strong> Character skeletal setup and animation.</li></ul>`,
        'env': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Environment Art</h3><div class="project-grid"><div><div class="project-thumbnail">🏰</div><h4 style="margin-top:1rem;">Medieval Modular Pack</h4><p style="font-size:0.9rem;">A comprehensive set of custom handcrafted building assets.</p></div><div><div class="project-thumbnail">💡</div><h4 style="margin-top:1rem;">Scene Composition</h4><p style="font-size:0.9rem;">Atmospheric lighting and post-processing setup in Blender.</p></div></div>`,
        'version': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">DevOps & Workflow</h3><p>I manage complex branches using Plastic SCM for Unity and GitHub for web projects.</p>`,
        'cert': `<h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Unity Badges & Pathways</h3><div class="project-grid"><div style="background:var(--bg-primary); padding:2rem 1rem; border-radius:12px; border:1px solid var(--card-border); text-align:center;"><div style="font-size:3.5rem; margin-bottom:1rem;">🧩</div><h4 style="margin-bottom:0.5rem; font-size:1.1rem;">Learn Unity</h4><p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase;">Pathway Completed</p></div><div style="background:var(--bg-primary); padding:2rem 1rem; border-radius:12px; border:1px solid var(--card-border); text-align:center;"><div style="font-size:3.5rem; margin-bottom:1rem;">🎓</div><h4 style="margin-bottom:0.5rem; font-size:1.1rem;">Unity Essentials</h4><p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase;">Pathway Completed</p></div></div>`
    };

    const scrollWrapper = document.getElementById('scrollWrapper');
    const detailsArea = document.getElementById('detailsArea');
    const dynamicContent = document.getElementById('dynamicContent');
    const trigger = document.getElementById('scrollTrigger');
    const placeholder = document.getElementById('cardPlaceholder');

    // Horizontal Scroll
    scrollContainer.addEventListener("wheel", (evt) => {
        if (!scrollContainer.classList.contains('compact')) {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY * 0.8;
        }
    });

    // Card Click
    scrollWrapper.addEventListener('click', (e) => {
        const card = e.target.closest('.skill-card-large');
        if (card) {
            const key = card.getAttribute('data-key');
            document.querySelectorAll('.skill-card-large').forEach(c => c.classList.remove('selected-card'));
            card.classList.add('selected-card');

            if (contentLibrary[key]) {
                dynamicContent.innerHTML = contentLibrary[key];
                detailsArea.classList.add('open');
                setTimeout(() => {
                    const offset = trigger.offsetTop - 65; 
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }, 100);
            }
        }
    });

    // Compact Mode Triggerss
    window.addEventListener('scroll', () => {
        const rect = trigger.getBoundingClientRect();
        if (rect.top <= 80) {
            scrollContainer.classList.add('compact');
            placeholder.classList.add('active'); 
            detailsArea.classList.add('shifted-up');
        } else {
            scrollContainer.classList.remove('compact');
            placeholder.classList.remove('active');
            detailsArea.classList.remove('shifted-up');
        }
    });
}