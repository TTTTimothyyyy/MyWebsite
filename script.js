/* --- 1. CONTENT LIBRARY --- */
const contentLibrary = {
    'unity': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:1rem;">Unity Project Showcase</h3>

        <!-- Filter Tags -->
        <div style="display:flex; gap:0.75rem; margin-bottom:2rem; flex-wrap:wrap;">
            <button onclick="filterProjects('all')" id="filter-all" 
                style="padding:0.4rem 1rem; border-radius:999px; border:1px solid var(--accent-primary); background:var(--accent-primary); color:#000; font-size:0.8rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                All
            </button>
            <button onclick="filterProjects('in-development')" id="filter-in-development"
                style="padding:0.4rem 1rem; border-radius:999px; border:1px solid var(--accent-comp); background:transparent; color:var(--accent-comp); font-size:0.8rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                In Development
            </button>
            <button onclick="filterProjects('paused')" id="filter-paused"
                style="padding:0.4rem 1rem; border-radius:999px; border:1px solid var(--text-secondary); background:transparent; color:var(--text-secondary); font-size:0.8rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                Paused Development
            </button>
            <button onclick="filterProjects('released')" id="filter-released"
                style="padding:0.4rem 1rem; border-radius:999px; border:1px solid var(--accent-primary); background:transparent; color:var(--accent-primary); font-size:0.8rem; font-weight:700; cursor:pointer; transition:all 0.2s;">
                Released
            </button>
        </div>

        <!-- ROW 1: Ember Express (Featured) -->
        <div class="project-row" data-status="in-development" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem; transition: opacity 0.3s ease, transform 0.3s ease;">
            <h4 style="font-size:1.4rem; margin-bottom:0.5rem;">✨ The Ember Express
                <span style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; margin-left:1rem;">(In Development)</span>
            </h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Steampunk Procedural Dungeon Crawler &nbsp;|&nbsp; Job-Based Extraction Looter &nbsp;|&nbsp; Co-op Firefighting Survival &nbsp;|&nbsp; Resource Management
            </p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
                <img src="Images/Stack/EmberExpress_1.png" alt="Ember Express Screenshot 1"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
                <img src="Images/Stack/EmberExpress_2.png" alt="Ember Express Screenshot 2"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
            </div>
            <p style="font-size:0.9rem; line-height:1.8; color:var(--text-secondary); margin-bottom:1.25rem;">
                A <strong style="color:var(--text-primary);">steampunk extraction game</strong> set in a world divided between the elite 
                <strong style="color:var(--text-primary);">"Above"</strong> and the rusted, steam-choked <strong style="color:var(--text-primary);">"Below."</strong> 
                Play as a contractor operating from a <strong style="color:var(--text-primary);">modular rail-car</strong>, balancing 
                <strong style="color:var(--text-primary);">greed against survival</strong> across 
                <strong style="color:var(--text-primary);">nine procedurally generated tunnel environments.</strong>
            </p>
            <div style="border-left:3px solid var(--accent-comp); padding:0.75rem 1rem; background:var(--bg-secondary); border-radius:0 8px 8px 0;">
                <p style="font-size:0.85rem; color:var(--text-secondary); margin:0;">
                    📺 <strong style="color:var(--accent-comp);">Devlog Coming Soon</strong> — A full YouTube devlog covering the project scope, 
                    roadmap and development journey is planned for the near future. Stay tuned!
                </p>
            </div>
        </div>

        <!-- ROW 2: Ruin Runner Reborn -->
        <div class="project-row" data-status="paused" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem; transition: opacity 0.3s ease, transform 0.3s ease;">
            <h4 style="font-size:1.4rem; margin-bottom:0.5rem;">🏃 Ruin Runner Reborn
                <span style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; margin-left:1rem;">(Paused Development)</span>
            </h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                FPS &nbsp;|&nbsp; Parkour &nbsp;|&nbsp; Time Manipulation &nbsp;|&nbsp; Metroidvania &nbsp;|&nbsp; Solo Project
            </p>

            <!-- 2 Images Side by Side -->
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
                <img src="Images/Stack/RuinRunnerReborn_1.png" alt="Ruin Runner Reborn Screenshot 1"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
                <img src="Images/Stack/RuinRunnerReborn_2.png" alt="Ruin Runner Reborn Screenshot 2"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
            </div>

            <!-- Description -->
            <p style="font-size:0.9rem; line-height:1.8; color:var(--text-secondary); margin-bottom:1.25rem;">
                A <strong style="color:var(--text-primary);">precision first-person parkour game</strong> — chain together 
                <strong style="color:var(--text-primary);">wall-runs, climbs and triple-dashes</strong> across stylized low-poly biomes. 
                Use <strong style="color:var(--text-primary);">Slow Time</strong> to solve puzzles and survive lethal hazards, 
                then return to the <strong style="color:var(--text-primary);">Metroidvania hub world</strong> to unlock new portals and track your progress.
            </p>
        </div>

        <!-- ROW 3: Yooha's Game -->
        <div class="project-row" data-status="released" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem; transition: opacity 0.3s ease, transform 0.3s ease;">
            <h4 style="font-size:1.4rem; margin-bottom:0.5rem;">💌 Yooha's Game
                <span style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; margin-left:1rem;">(Released)</span>
            </h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Narrative &nbsp;|&nbsp; Dating Sim &nbsp;|&nbsp; Client Work &nbsp;|&nbsp; Amsterdam University
            </p>

            <!-- 2 Images Side by Side -->
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
                <img src="Images/Stack/YoohasGame_1.png" alt="Yooha's Game Screenshot 1"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
                <img src="Images/Stack/YoohasGame_2.png" alt="Yooha's Game Screenshot 2"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
            </div>

            <!-- Description -->
            <p style="font-size:0.9rem; line-height:1.8; color:var(--text-secondary); margin-bottom:1.25rem;">
                A <strong style="color:var(--text-primary);">free of charge game</strong> made for a client as part of their 
                <strong style="color:var(--text-primary);">university art installation project in Amsterdam.</strong> 
                I was given instructions for design, story, flow and media — all the rest was left to my 
                <strong style="color:var(--text-primary);">creativity and programming ability.</strong>
            </p>

            <!-- GitHub Notice -->
            <div style="border-left:3px solid var(--accent-primary); padding:0.75rem 1rem; background:var(--bg-secondary); border-radius:0 8px 8px 0;">
                <p style="font-size:0.85rem; color:var(--text-secondary); margin:0;">
                    🐙 <strong style="color:var(--accent-primary);">Full Project on GitHub</strong> — The complete project code is publicly available. 
                    <a href="https://github.com/TTTTimothyyyy/unity-game-YoohaInstallationProject" target="_blank" 
                        style="color:var(--accent-primary); text-decoration:underline; font-weight:600;">
                        View Repository →
                    </a>
                </p>
            </div>
        </div>

        <!-- ROW 4: Star Tale -->
        <div class="project-row" data-status="paused" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem; transition: opacity 0.3s ease, transform 0.3s ease;">
            <h4 style="font-size:1.4rem; margin-bottom:0.5rem;">✨ Star Tale
                <span style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; margin-left:1rem;">(Paused Development)</span>
            </h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:0.75rem; text-transform:uppercase;">
                Co-op &nbsp;|&nbsp; Adventure &nbsp;|&nbsp; Rune Collection &nbsp;|&nbsp; Multiplayer
            </p>
            <p style="font-size:0.9rem; line-height:1.8; color:var(--text-secondary);">
                A co-op adventure game built around a <strong style="color:var(--text-primary);">rune collection and crafting system,</strong> 
                with multiplayer support using Photon PUN 2.
            </p>
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
                    
                    // REMOVED: The logic that forced a scroll or layout shift immediately
                    // instead, we just gently scroll the details into view if needed, 
                    // but we do NOT trigger the 'compact' class here.
                    
                    // Optional: Smooth scroll to just show the details area starts
                    // const detailsTop = detailsArea.getBoundingClientRect().top + window.scrollY - 300;
                    // window.scrollTo({ top: detailsTop, behavior: 'smooth' });
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
        // Adjust threshold: e.g., only shrink when the trigger (below cards) hits top of screen
        // This ensures users have scrolled PAST the cards to read details before shrinking occurs
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

/* --- UNITY PROJECT FILTER LOGIC --- */
function filterProjects(status) {
    const rows = document.querySelectorAll('.project-row');
    const buttons = document.querySelectorAll('[id^="filter-"]');

    // Update active button styles
    buttons.forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = btn.id === 'filter-released' || btn.id === 'filter-all' 
            ? 'var(--accent-primary)' 
            : btn.id === 'filter-in-development' 
                ? 'var(--accent-comp)' 
                : 'var(--text-secondary)';
    });

    const activeBtn = document.getElementById(`filter-${status}`);
    if (activeBtn) {
        activeBtn.style.background = status === 'in-development' 
            ? 'var(--accent-comp)' 
            : status === 'paused' 
                ? 'var(--text-secondary)' 
                : 'var(--accent-primary)';
        activeBtn.style.color = '#000';
    }

    // Show/Hide rows
    rows.forEach(row => {
        if (status === 'all' || row.getAttribute('data-status') === status) {
            row.style.display = 'block';
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        } else {
            row.style.display = 'none';
        }
    });
}

/* --- 7. MOBILE STACK LOGIC --- */
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