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

            <!-- GitHub Request Notice -->
            <div style="border-left:3px solid var(--text-secondary); padding:0.75rem 1rem; background:var(--bg-secondary); border-radius:0 8px 8px 0;">
                <p style="font-size:0.85rem; color:var(--text-secondary); margin:0;">
                    🐙 <strong style="color:var(--text-secondary);">Project Files Available on Request</strong> — 
                    The source files for this project are available via GitHub upon request. 
                    <a href="contact.html" style="color:var(--accent-primary); text-decoration:underline; font-weight:600;">
                        Get in Touch →
                    </a>
                </p>
            </div>
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
                <img src="Images/Stack/YoohasGame_2.avif" alt="Yooha's Game Screenshot 2"
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
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Co-op &nbsp;|&nbsp; Adventure &nbsp;|&nbsp; Rune Collection &nbsp;|&nbsp; Village Rebuilding &nbsp;|&nbsp; Multiplayer
            </p>

            <!-- 2 Images Side by Side -->
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
                <img src="Images/Stack/StarTale_1.avif" alt="Star Tale Screenshot 1"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
                <img src="Images/Stack/StarTale_2.avif" alt="Star Tale Screenshot 2"
                    style="width:100%; border-radius:8px; object-fit:cover; aspect-ratio:16/9; border:1px solid var(--card-border);">
            </div>

            <!-- Description -->
            <p style="font-size:0.9rem; line-height:1.8; color:var(--text-secondary); margin-bottom:1.25rem;">
                A <strong style="color:var(--text-primary);">co-op adventure game</strong> where you journey through peaceful landscapes to recover 
                <strong style="color:var(--text-primary);">8 lost Relics</strong> and rebuild your village. 
                Trade <strong style="color:var(--text-primary);">Essence of Wonder & Nature</strong> to upgrade your 
                <strong style="color:var(--text-primary);">Glider and Grappling Hook</strong>, while navigating a 
                <strong style="color:var(--text-primary);">dynamic economy</strong> where locals charge tax based on the time of day and your relationship with them.
            </p>

            <!-- GitHub Request Notice -->
            <div style="border-left:3px solid var(--text-secondary); padding:0.75rem 1rem; background:var(--bg-secondary); border-radius:0 8px 8px 0;">
                <p style="font-size:0.85rem; color:var(--text-secondary); margin:0;">
                    🐙 <strong style="color:var(--text-secondary);">Project Files Available on Request</strong> — 
                    The source files for this project are available via GitHub upon request. 
                    <a href="contact.html" style="color:var(--accent-primary); text-decoration:underline; font-weight:600;">
                        Get in Touch →
                    </a>
                </p>
            </div>
        </div>`,
    
    'csharp': `
        <h3 style="color:var(--accent-primary); font-size:2rem; margin-bottom:0.5rem;">C# Scripting & Architecture</h3>
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.8; margin-bottom:1.5rem;">
            Specializing in Unity C# Game Development, I engineer scalable architectures, custom performance tools, and dynamic gameplay systems. 
            My focus is on writing clean, object-oriented code that brings complex mechanics to life while maintaining strict memory and thread optimization.
        </p>

        <!-- Core Competency Pills -->
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:2.5rem;">
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Object-Oriented Programming</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Performance Optimization</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Procedural Generation</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Multiplayer Networking</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Custom Editor Tools</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Resource Pooling</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Custom Shaders</span>
            <span style="padding:0.35rem 0.9rem; border-radius:999px; border:1px solid var(--accent-primary); color:var(--accent-primary); font-size:0.78rem; font-weight:700;">Event-Driven Architecture</span>
        </div>

        <!-- BLOCK 1: Performance & Optimization -->
        <div class="project-row" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">⚡ Performance & Optimization</h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Memory Management &nbsp;|&nbsp; CPU Threading &nbsp;|&nbsp; Object Pooling &nbsp;|&nbsp; Global Tick Systems
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Memory & CPU-Thread Tools</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Developed custom profiling and optimization tools to manage thread loads and streamline memory allocation across complex scenes.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Resource Pooling Systems</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Implemented robust object pooling architectures to reuse game assets dynamically, drastically reducing garbage collection spikes during heavy gameplay.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Global Update Management</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Designed centralized tick-based managers — separating 1-second job stat ticks from 0.5-second life support ticks — to avoid MonoBehaviour Update() overhead.</p>
                </div>
            </div>
        </div>

        <!-- BLOCK 2: Procedural & Dynamic Systems -->
        <div class="project-row" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">🌐 Procedural & Dynamic Systems</h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Procedural Generation &nbsp;|&nbsp; State Machines &nbsp;|&nbsp; Dynamic Spread Mechanics
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Advanced Procedural Environment Generation</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Built algorithm-driven systems to dynamically generate complex environments — including networked, branching underground industrial complexes with modular room logic.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">The Blaze System</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Engineered a dynamic, organic fire-spreading mechanic that tracks room states, manages connected door paths, and calculates real-time resource drains (oxygen/steam) across the grid.</p>
                </div>
            </div>
        </div>

        <!-- BLOCK 3: Core Gameplay Logic -->
        <div class="project-row" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">🎮 Core Gameplay Logic</h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                FPS Controllers &nbsp;|&nbsp; Wave Systems &nbsp;|&nbsp; State Machines &nbsp;|&nbsp; Gadget Frameworks
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Enemy Wave & Economy Systems</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Coded robust tower-defense logic handling continuous enemy wave spawning, pathfinding, and dynamic in-game currency and upgrade economies.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">FPS Controllers & Custom Physics</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Developed custom first-person movement physics featuring advanced parkour mechanics including wall-runs, triple-dashes, and responsive player traversal.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Gadget & Tool State Machines</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Scripted modular frameworks for diverse item interactions — ranging from consumable area-of-effect tools to active physics-manipulation gadgets.</p>
                </div>
            </div>
        </div>

        <!-- BLOCK 4: Multiplayer & Graphics -->
        <div class="project-row" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">🌐 Multiplayer Networking & Graphics</h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Unity Netcode &nbsp;|&nbsp; Photon PUN 2 &nbsp;|&nbsp; HLSL Shaders &nbsp;|&nbsp; Rendering Optimization
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Network Synchronization</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Integrated multiplayer logic using <strong style="color:var(--text-primary);">Unity Netcode</strong> and <strong style="color:var(--text-primary);">Photon PUN 2</strong> for co-op mechanics, state synchronization, and procedural level matching across clients.</p>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.8rem; color:var(--accent-primary); font-weight:700; text-transform:uppercase; margin-bottom:0.5rem;">Custom Shaders</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">Wrote custom <strong style="color:var(--text-primary);">HLSL shaders</strong> to achieve specific visual targets and improve rendering performance for specialized environments.</p>
                </div>
            </div>
        </div>

        <!-- BLOCK 5: Featured Projects -->
        <div class="project-row" style="background:var(--bg-primary); border-radius:12px; border:1px solid var(--card-border); padding:1.5rem; margin-bottom:1.5rem;">
            <h4 style="font-size:1.3rem; margin-bottom:0.4rem; color:var(--text-primary);">📁 C# Featured Projects</h4>
            <p style="font-size:0.85rem; color:var(--accent-comp); font-weight:600; letter-spacing:0.05em; margin-bottom:1.25rem; text-transform:uppercase;">
                Projects Highlighting Heavy Scripting & Architecture
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">✨ The Ember Express</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7; margin-bottom:0.75rem;">Advanced procedural generation, Unity Netcode multiplayer integration, and highly complex resource and environmental hazard managers.</p>
                    <a href="stack.html?filter=unity&status=in-development" style="color:var(--accent-primary); font-size:0.85rem; font-weight:700; text-decoration:none;">View in Unity Stack →</a>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">🏃 Ruin Runner Reborn</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7; margin-bottom:0.75rem;">Custom FPS movement physics, HLSL shaders, and event-driven puzzle mechanics with a Metroidvania hub world system.</p>
                    <a href="stack.html?filter=unity&status=paused" style="color:var(--accent-primary); font-size:0.85rem; font-weight:700; text-decoration:none;">View in Unity Stack →</a>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">✨ Star Tale</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7; margin-bottom:0.75rem;">Network synchronization and co-op architecture built using Photon PUN 2 with a dynamic economy system.</p>
                    <a href="stack.html?filter=unity&status=paused" style="color:var(--accent-primary); font-size:0.85rem; font-weight:700; text-decoration:none;">View in Unity Stack →</a>
                </div>
                <div style="background:var(--bg-secondary); border-radius:8px; border:1px solid var(--card-border); padding:1.25rem;">
                    <p style="font-size:0.9rem; font-weight:700; color:var(--text-primary); margin-bottom:0.4rem;">🏰 Electro Bunker</p>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.7; margin-bottom:0.75rem;">Wave-spawning algorithms, tower defense logic, economy management, and custom pathfinding systems.</p>
                    <a href="stack.html?filter=unity" style="color:var(--accent-primary); font-size:0.85rem; font-weight:700; text-decoration:none;">View in Unity Stack →</a>
                </div>
            </div>
        </div>`,
    
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

// --- 5. THEME LOGIC ---
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

/* --- STACK PAGE LIGHTBOX --- */
function initStackLightbox() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'stack-lightbox';
    lightbox.style.cssText = `
        display:none; position:fixed; top:0; left:0; width:100%; height:100%;
        background:rgba(0,0,0,0.9); z-index:9999; justify-content:center;
        align-items:center; cursor:pointer;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
        max-width:90%; max-height:90vh; border-radius:12px;
        box-shadow:0 0 40px rgba(0,0,0,0.8); object-fit:contain;
        transition: transform 0.3s ease;
    `;

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position:fixed; top:1.5rem; right:1.5rem; color:#fff;
        font-size:1.5rem; font-weight:700; cursor:pointer;
        background:rgba(255,255,255,0.1); border-radius:50%;
        width:40px; height:40px; display:flex;
        align-items:center; justify-content:center;
        transition: background 0.2s ease;
    `;
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = 'rgba(255,255,255,0.25)');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = 'rgba(255,255,255,0.1)');

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Open lightbox on image click
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.project-row')) {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });

    // Close lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    closeBtn.addEventListener('click', closeLightbox);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

// Initialize lightbox
document.addEventListener('DOMContentLoaded', () => {
    initStackLightbox();
    initStackPage();
});

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

/* --- AUTO-SELECT DEFAULT CARD ON STACK PAGE --- */
function initStackPage() {
    if (!detailsArea) return;

    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter') || 'unity';
    const statusParam = params.get('status') || null;

    const targetCard = document.querySelector(`.skill-card-large[data-key="${filterParam}"]`);

    if (targetCard && contentLibrary[filterParam]) {
        document.querySelectorAll('.skill-card-large').forEach(c => c.classList.remove('selected-card'));
        targetCard.classList.add('selected-card');

        dynamicContent.innerHTML = contentLibrary[filterParam];
        detailsArea.classList.add('open');

        // If a status filter was passed, apply it after content is rendered
        if (statusParam) {
            // Small delay to ensure DOM is ready
            setTimeout(() => filterProjects(statusParam), 50);
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initStackLightbox();
    initStackPage();
});