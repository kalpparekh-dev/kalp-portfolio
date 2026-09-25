# Kalp Parekh — Systems & Intelligence Engineer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-kalp--portfolio.onrender.com-B3542B?style=for-the-badge&logo=render&logoColor=white)](https://kalp-portfolio.onrender.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Production-grade, architectural, 3D interactive portfolio site showcasing high-throughput systems engineering, AI pipelines, and distributed platforms.

🔗 **Live Experience**: [https://kalp-portfolio.onrender.com](https://kalp-portfolio.onrender.com)

---

## 🏛️ Systems Overview

- **Identity**: Kalp Parekh — Software Development Engineer & AI Builder
- **Focus**: High-concurrency backend scaling, RAG/LLM pipelines, predictive payment failure recovery, and fault-tolerant microservices.
- **Key Metrics**:
  - Scaled backend architecture from **0 → 50K concurrent users** (VendorBridge).
  - Maintained **99.7% production uptime** across 200K+ monthly transactions.
  - Achieved **66.78% payment failure recovery** through predictive machine learning (RECLAIM).

---

## 🛠️ Architecture & Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, TypeScript, Vite |
| **3D & Spatial Math** | Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei` |
| **Motion & Micro-interactions** | Framer Motion |
| **Styling & Design System** | Tailwind CSS (Editorial Obsidian/Terracotta aesthetic), Cinzel, Space Mono |
| **Icons & Assets** | Lucide React |

---

## 📂 Project Structure

```text
kalp-portfolio/
├── public/
│   └── profile.jpeg          # Subject profile photograph
├── src/
│   ├── components/
│   │   ├── ContactSection.tsx    # Communication channel & direct dispatches
│   │   ├── ExperienceSection.tsx # Leadership, hackathon, and academic milestones
│   │   ├── HeroCanvas.tsx        # Procedural 3D architectural artifact
│   │   ├── HeroSection.tsx       # Viewport intro & verified production metrics
│   │   ├── Navbar.tsx            # Sticky navigation with section trackers
│   │   ├── ProjectsSection.tsx   # Detailed case studies & architecture deep-dives
│   │   └── SkillsSection.tsx     # Categorized technical capability matrix
│   ├── data/
│   │   └── portfolioData.ts  # Verified source of truth for metrics & projects
│   ├── App.tsx               # Primary layout tree
│   ├── index.css             # Tailwind base layers & custom scrollbar
│   └── main.tsx              # DOM root mount
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js