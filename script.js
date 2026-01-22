/* --- 1. CONTENT LIBRARY --- */
const contentLibrary = {
    'unity': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Unity Project Showcase</h3>
        <div class="project-grid">
            <div>
                <div class="project-thumbnail">🏃</div>
                <h4 style="margin-top:1rem;">Ruin Runner Reborn</h4>
                <p style="font-size:0.9rem;">FPS parkour & puzzle solving. Solo remake project.</p>
            </div>
            <div>
                <div class="project-thumbnail">💌</div>
                <h4 style="margin-top:1rem;">Yooha's Game</h4>
                <p style="font-size:0.9rem;">Narrative dating sim. Client work for Amsterdam University.</p>
            </div>
            <div>
                <div class="project-thumbnail">✨</div>
                <h4 style="margin-top:1rem;">Star Tale</h4>
                <p style="font-size:0.9rem;">Co-op adventure with rune collection systems.</p>
            </div>
        </div>`,
    
    'csharp': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">C# Architecture</h3>
        <ul style="margin-left: 1.5rem; margin-top: 1rem;">
            <li><strong>Tower Defense Logic:</strong> Wave spawning and economy systems.</li>
            <li><strong>FPS Controllers:</strong> Custom movement physics and parkour mechanics.</li>
            <li><strong>Networking:</strong> Multiplayer synchronization using Photon PUN 2.</li>
        </ul>`,
    
    'blender': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">3D Art & Assets</h3>
        <ul style="margin-left: 1.5rem; margin-top: 1rem;">
            <li><strong>Rendering:</strong> High-fidelity visualization using Cycles and Eevee.</li>
            <li><strong>Pipeline:</strong> Low-poly optimization vs. high-poly sculpting.</li>
            <li><strong>Rigging:</strong> Character skeletal setup and animation.</li>
        </ul>`,

    'env': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Environment Art</h3>
        <div class="project-grid">
            <div>
                <div class="project-thumbnail">🏰</div>
                <h4 style="margin-top:1rem;">Medieval Modular Pack</h4>
                <p style="font-size:0.9rem;">A comprehensive set of custom handcrafted building assets.</p>
            </div>
            <div>
                <div class="project-thumbnail">💡</div>
                <h4 style="margin-top:1rem;">Scene Composition</h4>
                <p style="font-size:0.9rem;">Atmospheric lighting and post-processing setup in Blender.</p>
            </div>
        </div>`,
    
    'version': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">DevOps & Workflow</h3>
        <p>I manage complex branches using Plastic SCM for Unity and GitHub for web projects.</p>`,

    'cert': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Unity Badges & Pathways</h3>
        <div class="project-grid">
            <div style="background:var(--bg-primary); padding:2rem 1rem; border-radius:12px; border:1px solid var(--card-border); text-align:center;">
                <div style="font-size:3.5rem; margin-bottom:1rem;">🧩</div>
                <h4 style="margin-bottom:0.5rem; font-size:1.1rem;">Learn Unity</h4>
                <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase;">Pathway Completed</p>
            </div>
            <div style="background:var(--bg-primary); padding:2rem 1rem; border-radius:12px; border:1px solid var(--card-border); text-align:center;">
                <div style="font-size:3.5rem; margin-bottom:1rem;">🎓</div>
                <h4 style="margin-bottom:0.5rem; font-size:1.1rem;">Unity Essentials</h4>
                <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase;">Pathway Completed</p>
            </div>
        </div>`
};

// --- 2. CORE DOM REFERENCES ---
const container = document.getElementById('scrollContainer');
const scrollWrapper = document.getElementById('scrollWrapper');
const detailsArea = document.getElementById('detailsArea');
const dynamicContent = document.getElementById('dynamicContent');
const trigger = document.getElementById('scrollTrigger');
const placeholder = document.getElementById('cardPlaceholder');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// --- 3. PARTICLE SYSTEM ENGINE ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };
let isHovering = false;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.dispatchEvent(new Event('resize'));

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!isHovering) {
        for (let i = 0; i < 2; i++) {
            particles.push(new Particle(mouse.x, mouse.y, false));
        }
    }
});

class Particle {
    constructor(x, y, isFirework) {
        this.x = x; this.y = y; this.isFirework = isFirework;
        const style = getComputedStyle(document.documentElement);
        const currentTheme = html.getAttribute('data-theme');
        const teal = style.getPropertyValue('--accent-primary').trim();
        const orange = style.getPropertyValue('--accent-comp').trim();
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
    draw() { ctx.globalAlpha = this.life; ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}

function createFirework(x, y) { for (let i = 0; i < 30; i++) { particles.push(new Particle(x, y, true)); } }

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update(); particles[i].draw();
        if (particles[i].life <= 0) { particles.splice(i, 1); i--; }
    }
    requestAnimationFrame(animate);
}
animate();

// --- 4. INTERACTION LOGIC ---

// Horizontal Scroll for Large Mode
if (container) {
    container.addEventListener("wheel", (evt) => {
        // CHECK: Only run on desktop
        if (window.innerWidth > 768 && !container.classList.contains('compact')) {
            evt.preventDefault();
            container.scrollLeft += evt.deltaY * 0.8;
        }
    });
}

// Click Handler for Skills (DESKTOP ONLY)
if (scrollWrapper) {
    scrollWrapper.addEventListener('click', (e) => {
        // CHECK: Only run on desktop
        if (window.innerWidth > 768) {
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
        }
    });
}

// Persistent Hush Logic
const setupInteractions = () => {
    const interactables = document.querySelectorAll('a, button, .skill-card-large, .mobile-nav-link, .contact-btn, .gallery-item');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (!isHovering) createFirework(mouse.x, mouse.y);
            isHovering = true;
        });
        item.addEventListener('mouseleave', (e) => {
            const related = e.relatedTarget;
            if (!related || !item.contains(related)) isHovering = false;
        });
    });
};
setupInteractions();

// --- 5. COMPACT MODE TRIGGER (DESKTOP ONLY) ---
window.addEventListener('scroll', () => {
    // CHECK: Only run on desktop
    if (window.innerWidth > 768 && trigger) {
        const rect = trigger.getBoundingClientRect();
        if (rect.top <= 80) {
            container.classList.add('compact');
            placeholder.classList.add('active'); 
            detailsArea.classList.add('shifted-up');
        } else {
            container.classList.remove('compact');
            placeholder.classList.remove('active');
            detailsArea.classList.remove('shifted-up');
        }
    }
});

// --- 6. THEME LOGIC ---
const updateIcons = (theme) => {
    document.querySelector('.sun-icon').style.display = theme === 'dark' ? 'none' : 'block';
    document.querySelector('.moon-icon').style.display = theme === 'dark' ? 'block' : 'none';
};
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateIcons(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
});

// Reveal Animations
const reveal = () => document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
window.addEventListener("scroll", reveal);
reveal();

/* --- 7. MOBILE STACK LOGIC: RESTRUCTURE & FEATURES --- */
function initMobileStack() {
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.skill-card-large');
        
        cards.forEach(card => {
            const key = card.getAttribute('data-key');
            
            // Prevent running this logic twice
            if (card.classList.contains('mobile-optimized')) return;
            card.classList.add('mobile-optimized');

            // 1. Create Layout Containers
            const headerDiv = document.createElement('div');
            headerDiv.className = 'mobile-card-header';
            
            const bodyDiv = document.createElement('div');
            bodyDiv.className = 'mobile-card-body';

            // 2. Move Existing Content into Containers
            // We select specific elements to move to header
            const icon = card.querySelector('.card-icon');
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('p');
            const small = card.querySelector('small');
            const prompt = card.querySelector('div[style*="text-transform: uppercase"]');

            if (icon) headerDiv.appendChild(icon);
            if (title) headerDiv.appendChild(title);
            if (subtitle) headerDiv.appendChild(subtitle); 
            if (small) headerDiv.appendChild(small); // Added this to save your tags!

            // Inject Details into Body
            if (contentLibrary[key]) {
                const detailContent = document.createElement('div');
                detailContent.innerHTML = contentLibrary[key];
                detailContent.style.marginTop = '1rem';
                bodyDiv.appendChild(detailContent);
            }

            // Remove desktop prompt
            if (prompt) prompt.remove();

            // Clear card and append new structure
            // Note: We leave 'small' tag or others in the card, then clean up
            card.innerHTML = ''; 
            card.appendChild(headerDiv);
            card.appendChild(bodyDiv);

            // 3. Add Back to Top Button
            const topBtn = document.createElement('div');
            topBtn.className = 'back-to-top-btn';
            topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            card.appendChild(topBtn);

            // 4. Scroll Logic (Show Button + Reset)
            bodyDiv.addEventListener('scroll', () => {
                if (bodyDiv.scrollTop > 150) {
                    topBtn.classList.add('visible');
                } else {
                    topBtn.classList.remove('visible');
                }
            });

            topBtn.addEventListener('click', () => {
                bodyDiv.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // 5. Auto-Reset Scroll when out of view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Find the body div inside the card and reset it
                    const scrollBody = entry.target.querySelector('.mobile-card-body');
                    if (scrollBody) {
                        scrollBody.scrollTop = 0;
                    }
                }
            });
        }, { threshold: 0.1 }); // Trigger when 90% of card is gone

        cards.forEach(card => observer.observe(card));
    }
}

// Initialize mobile stack logic
window.addEventListener('DOMContentLoaded', initMobileStack);
window.addEventListener('resize', initMobileStack);