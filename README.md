<div align="center">

<img src="svg/premium-branding.png" width="450" alt="TEG Premium Branding" />

# 💎 Thermoelectric Generator: Electricity from Heat
### A Fusion of Applied Physics & High-End Web Engineering
**B.Sc Physics | Calicut University | Mar Dionysius College, Pazhanji**

[![Engine](https://img.shields.io/badge/Render_Engine-Puppeteer_v24.37- gold?style=for-the-badge&logo=googlechrome&logoColor=white)](export-pdf.js)
[![Aesthetics](https://img.shields.io/badge/Aesthetics-Glassmorphism_&_Shaders-00f2ff?style=for-the-badge&logo=glassdoor&logoColor=white)](presentation.html)
[![Physics](https://img.shields.io/badge/Physics-Seebeck_Effect-F7DF1E?style=for-the-badge&logo=physics&logoColor=black)](https://en.wikipedia.org/wiki/Seebeck_effect)

<br>

**"A pixel-perfect synthesis of thermal thermodynamics and modern web-to-print automation."**

---

</div>

## 🔬 Core Circuitry & Logic

The system is built for reliable energy harvesting. Below is the primary circuit architecture and the operational flow of the TEG system.

<div align="center">
  <img src="svg/circuit-diagram.svg" width="600" alt="Circuit Diagram" />
  <p><i>Figure 1: High-Fidelity Circuit Architecture</i></p>
  
  <img src="svg/operational-flow.png" width="600" alt="Operational Flow" />
  <p><i>Figure 2: Logic & Power Distribution Flowchart</i></p>
</div>

---

## ✨ Engineering the "Gold Shiny" & "Liquid Glass" UI

Unlike standard PowerPoint slides, this project implements a **Custom Shader Engine** using CSS3. 

### 🪟 Liquid Glass (Glassmorphism)
The presentation cards utilize a heavy **30px Backdrop Blur** combined with semi-transparent white borders and high-intensity shadows to create depth.
```css
.glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.8);
}
```

### 🪄 The "Gold Shiny" Light Sweep
Visible on hover or slide activation, a **Metallic Shine** sweeps across the cards. This is achieved via a `::after` pseudo-element with a diagonal linear gradient, animated across the X-axis.
```css
.glass-card::after {
    content: '';
    position: absolute;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.03), transparent);
    transition: 1.5s ease;
}
```

---

## 🏗️ Technical Build & Directory Structure

The project is structured as a **Single-Source Doc Engine**, allowing for the simultaneous generation of a 25-page academic report and a premium digital presentation from the same asset pool.

```bash
.
├── 📄 index.html                # Report Engine (Times New Roman / Cinzel / A4 CSS)
├── 🎬 presentation.html          # Digital Suite (Glassmorphism / Orbitron / Animations)
├── ⚡ export-pdf.js              # Automation Engine (Puppeteer v24 / Headless Chrome)
├── 🖼️ export-4k.js               # Visual Engine (High-Resolution PNG Exports)
├── 📁 svg/                      # Asset Core (SVGs, Schematics, High-Res Photos)
│   ├── circuit-diagram.svg      # Primary Schematic
│   └── premium-branding.png     # Digital Asset
└── 📦 package.json              # System Dependencies
```

---

## �️ How to Build / Generate the Book

The report generation is completely automated using **Headless Chrome**.

1.  **Initialize**: Install the Puppeeter engine.
    ```bash
    npm install
    ```
2.  **Generate Report**: Run the PDF export script.
    ```bash
    node export-pdf.js
    ```
3.  **Visual Assets**: Generate 4K PNG visualizations.
    ```bash
    node export-4k.js
    ```

---

## 🏛️ credits & Affiliations

Developed under the academic guidelines of **Calicut University** at **Mar Dionysius (MD) College, Pazhanji**.

*   **Principal Investigator**: **Mrs. Rose Jose** (Assistant Professor)
*   **Head of Department**: **Asst. Prof. Smt. Sreeakala R**
*   **The Team**: Vipin Krishna, Muhammed Sinan, Devadath, Hana, Aparna, Kiran.

---

<div align="center">

*Academic Year 2025–2026*  
**Built with Precision. Presented with Excellence.**

</div>
