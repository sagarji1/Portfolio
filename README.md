<div align="center">

# Yash Sagar — Personal Developer Portfolio

<p align="center">
  <strong>Computer Engineering Student · Full-Stack Web Developer</strong>
</p>

<p align="center">
  A polished, editorial, developer-focused portfolio website inspired by modern SaaS aesthetics.<br/>
  Built with React, Vite, Tailwind CSS v4, and Framer Motion.
</p>

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.x-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

<br/>

[Live Demo](https://elaborate-fox-a1d2bb.netlify.app/) · [Report Bug](https://github.com/sagarji1/Portfolio/issues) · [Request Feature](https://github.com/sagarji1/Portfolio/issues)

</div>

---

## 🎯 Overview

This portfolio is hand-crafted to reflect the authentic work, technical curiosity, and design sensibilities of **Yash Sagar**, a Computer Engineering undergraduate at **Delhi Skill and Entrepreneurship University (DSEU)**.

Rather than generic templates or exaggerated AI cards, the site embraces a restrained, human-centric SaaS editorial style:
* **Color Palette**: Warm off-white background (`#FBFBF9`), near-black typography (`#121316`), ultra-fine borders (`#E8E8E2`), and electric lime accents (`#84CC16` / `#22C55E`).
* **Typography**: Clean contemporary sans-serif (**Manrope** & **Plus Jakarta Sans**) paired with **JetBrains Mono** for technical labels and code windows.
* **Authenticity**: Honest representations of internship contributions, coursework, verified links, and realistic technical capabilities without marketing fluff.

---

## ⚡ Key Highlights & Features

### 1. Developer Manifest Hero
- Live status indicator: `Open to internships & select projects`.
- Interactive code window mockup (`developer-manifest.ts`) showcasing core stack, current studies, and engineering focus with syntax highlighting and Git branch status.
- Core tools ribbon featuring React, Node.js, Express, MongoDB, TypeScript, Tailwind CSS, C++, and Git.

### 2. Tailored Developer Services
- Four structured capabilities with line icons and technical chips:
  1. **Frontend Development** (React, Tailwind CSS, Component Systems, Responsive Layouts)
  2. **Full-Stack Web Development** (MERN, Next.js, API Integration, Authenticated Flows)
  3. **Backend & API Development** (REST APIs, Express, MongoDB, JWT Security)
  4. **Website UI Implementation** (Design-to-code, Accessibility, Performance)

### 3. Interactive Project Previews (No Generic Stock Images)
Each project showcase includes a custom, interactive UI mockup created with CSS/JSX:
* **01 — DailyMart**: Grocery e-commerce interface with category filtering, real-time product search mockup, and a live working cart counter.
  * [Live Site](https://elaborate-fox-a1d2bb.netlify.app/) · [Source Code](https://github.com/sagarji1/Dailymart)
* **02 — AgentHub**: AI-agent workflow builder preview featuring node-based execution steps (`Auth Gateway [JWT]` → `Agent Dispatch` → `MongoDB Audit Log`) and interactive pipeline simulation.
  * [Source Code](https://github.com/Mithlancal/agenthub)
* **03 — BankEngine**: Financial ledger and account lifecycle management mockup with real-time state transitions (`ACTIVE`, `FROZEN`, `CLOSED`) and atomic transaction logs.

### 4. Experience, Education & Skills (Resume Section)
* **Internship**: Webinex — Full-Stack Developer Intern (MERN stack, school CRM dashboard, e-commerce platform).
* **Education**: B.Tech in Computer Engineering at DSEU Okhla 2 (2023–2027) & Class XII at Kendriya Vidyalaya (80%).
* **Technical Skills**: Grouped by Frontend, Backend, Databases, Core Programming, and Developer Tools.
* **Smart Resume Handler**: Graceful fallback modal allowing instant email requests when a local PDF is being updated, avoiding broken links.

### 5. Verified & Working Contact Section
* **1-Click Copy**: Instant clipboard copy for direct email address with animated feedback.
* **Safe Mailto Form**: Validates inputs (with honeypot anti-spam protection) and launches the visitor's mail client with a cleanly formatted draft, ensuring messages are genuinely delivered directly to Yash.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture and state management |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Next-generation frontend tooling with instant HMR |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS via `@tailwindcss/vite` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth entrance reveals with `prefers-reduced-motion` support |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVGs | Consistent iconography throughout all sections |
| **Linting** | [Oxlint](https://oxc.rs/) | High-performance linter for error-free JavaScript |

---

## 📂 Project Structure

```text
Portfolio/
├── public/                    # Static assets & favicon
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── data/
│   │   └── portfolioData.js   # ⚡ Central configuration for all content & links
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation with scroll-spy & mobile drawer
│   │   ├── Button.jsx         # Reusable design system button variants
│   │   ├── SectionHeading.jsx # Eyebrow chip, title, subtitle & description
│   │   ├── Icons.jsx          # GitHub & LinkedIn SVGs
│   │   ├── ProjectCard.jsx    # Card wrapper with contribution callouts
│   │   ├── ProjectPreviewDailyMart.jsx  # Interactive DailyMart preview
│   │   ├── ProjectPreviewAgentHub.jsx   # Interactive AgentHub workflow preview
│   │   ├── ProjectPreviewBankEngine.jsx # Interactive BankEngine ledger preview
│   │   ├── SkillGroup.jsx     # Categorized skill badges
│   │   └── Footer.jsx         # Minimalist developer footer
│   ├── sections/
│   │   ├── Home.jsx           # Hero with developer manifest window
│   │   ├── Services.jsx       # 4 core service cards
│   │   ├── Resume.jsx         # Experience, education & skills
│   │   ├── Work.jsx           # Featured project showcase
│   │   └── Contact.jsx        # Direct copy & working contact form
│   ├── App.jsx                # Main layout assembler
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind v4 import & custom styles
├── index.html                 # SEO meta tags, OpenGraph & Google Fonts
├── package.json
└── vite.config.js             # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sagarji1/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Run lint checks:
   ```bash
   npm run lint
   ```

---

## ⚙️ Customization Guide

All personal data, projects, educational background, and links are decoupled and managed centrally in **[`src/data/portfolioData.js`](src/data/portfolioData.js)**.

### Update Profile Info & Socials
```javascript
export const personalInfo = {
  name: "Yash Sagar",
  shortName: "YS.",
  email: "your-verified-email@domain.com",
  github: "https://github.com/sagarji1",
  linkedin: "https://linkedin.com/in/yash-sagar",
  // ...
};
```

### Add a Downloadable Resume PDF
1. Place your resume PDF in the `public/` directory (e.g. `public/yash_sagar_resume.pdf`).
2. Update `resumeUrl` in `src/data/portfolioData.js`:
   ```javascript
   resumeUrl: "/yash_sagar_resume.pdf",
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Designed &amp; Built with precision by <a href="https://github.com/sagarji1">Yash Sagar</a> · 2026</sub>
</div>
