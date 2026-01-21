# Timothy Dunn | Interactive Portfolio Website

This is the source code for my professional portfolio website, hosted at [timothydunnportfolio.com](https://timothydunnportfolio.com). The site is designed to showcase my dual expertise in **Interactive Software Development** and **Indie Game Creation**.

## 🎨 Design Philosophy
The site uses a "Clean-Tech" aesthetic, bridging the gap between a professional software developer resume and a creative game design showcase. It features a custom-built, lightweight particle system to provide a high level of user engagement without sacrificing performance.

## 🛠️ Built With
- **Frontend:** HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript.
- **Visual FX:** Custom `<canvas>` based Particle Engine.
- **Styling:** CSS Custom Properties (Variables) for dynamic Dark/Light theme switching.
- **Deployment:** Continuous Deployment via **Netlify**.
- **Icons:** FontAwesome & custom generated SVG branding.

## ✨ Key Features
- **Dynamic Particle Engine:** A high-performance background layer that responds to mouse movement and interactive events.
- **"Silence on Hover" Logic:** Advanced JavaScript event handling that pauses background animations when interacting with cards to improve readability and focus.
- **Theme Sync:** A persistent Dark/Light mode toggle that saves user preference via `localStorage`.
- **Responsive Architecture:** Fully mobile-optimized layouts using CSS Media Queries and fluid typography.
- **"Yu-Gi-Oh" Skill Cards:** An interactive horizontal-scroll component on the Stack page that transforms into a compact navigation menu upon scrolling.

## 🚀 Technical Highlights: The Particle System
Instead of using heavy libraries like Particles.js, I developed a lightweight **Vanilla JS Particle System**.



**Features of the engine include:**
- **Theme-Aware Colors:** Automatically flips particle accents (White for Dark Mode / Dark Teal for Light Mode) to maintain contrast.
- **Event-Driven Explosions:** Triggering 30-particle "firework" bursts on button and card interactions using standard DOM event listeners.
- **Persistent State Logic:** Uses `relatedTarget` validation to ensure interaction states aren't interrupted by nested DOM elements.

## 📁 Repository Structure
- `/Images`: High-resolution renders, assets, and site branding.
- `index.html`: Main landing and hero section.
- `stack.html`: Technical skill showcase with interactive project detailing.
- `style.css`: Unified global styling with responsive breakpoints.

## 👤 Author
**Timothy Dunn** *Interactive Software Developer & Asset Creator* [LinkedIn](https://www.linkedin.com/in/timothy-dunn-055657199/) | [ArtStation](https://www.artstation.com/timothydunn)

---
*Last Updated: January 2026*