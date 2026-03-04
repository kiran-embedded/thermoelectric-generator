<![CDATA[<div align="center">

# ⚡ Thermoelectric Generator: Electricity from Heat

### A B.Sc Physics Project — Mar Dionysius College, Pazhanji

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<br>

*Converting waste heat into usable electric power using the Seebeck Effect.*

---

</div>

## 📖 About

This project demonstrates the generation of electricity from waste heat using a **Thermoelectric Generator (TEG)** based on the **Seebeck Effect**. A temperature difference across a Peltier module (TEC1-12715) generates an EMF, which is then regulated to power USB devices — including charging a smartphone from a candle flame.

The project was submitted to the **University of Calicut** in partial fulfillment of the requirements for the degree of **B.Sc Physics** during the academic year **2025–2026**.

## 👥 Team

| Role | Name |
|---|---|
| **Team Members** | Vipin Krishna T.P, Muhammed Sinan P.S, Devadath C.M, Hana, Aparna T.M, Kiran |
| **Project Guide** | Mrs. Rose Jose *(Assistant Professor, Dept. of Physics)* |
| **Head of Department** | Asst. Prof. Smt. Sreekala R |
| **Institution** | Mar Dionysius College, Pazhanji, Thrissur |

## 🔬 How It Works

```
Heat Source → Peltier Module → Raw DC Voltage → XL6009 Boost Converter → 12V Fan (Active Cooling)
                                             → USB 5V Regulator → Smartphone Charging
```

1. **Seebeck Effect** — When two dissimilar semiconductors are subjected to a temperature difference, charge carriers (electrons in N-type, holes in P-type) drift from hot to cold, creating an electric potential.
2. **Thermal Gradient Maintenance** — A 12V cooling fan powered by the XL6009 boost converter keeps the cold side cool, maintaining the crucial temperature difference.
3. **Power Regulation** — A two-stage regulation system outputs both 12V (for the fan) and 5V USB (for device charging).
4. **Self-Sustaining Loop** — The system powers its own cooling fan, creating a self-sustaining active cooling loop.

## 🔩 Components Used

| Component | Specification | Purpose |
|---|---|---|
| Peltier Module | TEC1-12715 (Bismuth Telluride) | Thermoelectric conversion via 127 thermocouple pairs |
| Boost Converter | XL6009 DC-DC Step-Up | Boosts raw voltage to 12V for the cooling fan |
| USB Regulator | 5V USB Output Module | Provides stable 5V for smartphone charging |
| Cooling Fan | 12V DC Fan + Aluminum Heatsink | Maintains cold-side temperature for thermal gradient |
| Chassis | Ceramic tiles, PVC, aluminum fins | Fireproof and heat-resistant structural build |

## 📁 Project Structure

```
thermoelectric-generator/
├── index.html                    # 📄 Full project report (25-page, print-ready A4)
├── presentation.html             # 🎬 12-slide premium dark-mode presentation
├── circuit-diagram-slide.html    # ⚡ Circuit diagram visualization
├── observation-results.html      # 📊 Observation & results slide
├── project-photos.html           # 📸 Project photo gallery slide
├── unified-project-slide.html    # 🖼️  Unified project visualization
├── export-pdf.js                 # 🖨️  Puppeteer script to export report as PDF
├── export-4k.js                  # 🖼️  Puppeteer script for 4K PNG export
├── generate-all-pdfs.js          # 📦 Batch PDF generator for all team members
├── export-docx.py                # 📝 DOCX export helper
├── export-pptx.py                # 📊 PPTX export helper
├── package.json                  # 📦 Node.js dependencies (Puppeteer)
├── svg/                          # 🎨 Assets directory
│   ├── college-logo-v3.png       #    College logo
│   ├── circuit-diagram.svg       #    Circuit diagram (SVG)
│   ├── seebeck-effect.png        #    Seebeck effect illustration
│   ├── operational-flow.png      #    Operational flow diagram
│   ├── candle-08.png             #    Experimental observation photo
│   ├── project-setup.jpg         #    Project setup photograph
│   ├── peltier.jpg               #    Peltier module image
│   ├── buck booster.jpg          #    XL6009 boost converter image
│   ├── fan.jpg                   #    Cooling fan image
│   ├── usbmodule.jpg             #    USB module image
│   └── ...                       #    Other project assets
└── README.md                     # 📖 This file
```

## 🖨️ Generate the Report PDF

The report can be exported as a high-quality A4 PDF using Puppeteer:

```bash
# Install dependencies
npm install

# Generate the project report PDF
node export-pdf.js

# Generate 4K PNG visualizations
node export-4k.js

# Generate PDFs for all team members
node generate-all-pdfs.js
```

> **Note:** Puppeteer requires Chromium. The `npm install` command will automatically download it.

## 🎬 Presentation

Open `presentation.html` in any modern browser for a **premium dark-mode presentation** with:
- 🌊 Glassmorphism design with dynamic backgrounds
- ⌨️ Arrow key / scroll / swipe navigation
- ✨ Staggered reveal animations
- 📊 Interactive SVG diagrams
- 📱 Responsive layout

## 📊 Key Results

- ✅ Successfully generated electricity from a candle flame
- ✅ Achieved stable 5V USB output for smartphone charging
- ✅ Self-sustaining cooling loop maintained thermal gradient
- ✅ 100% reliable boot and charging across multiple tests
- ✅ Series connection of modules can increase output voltage

## 🌍 Real-World Applications

- 🚀 **Space Exploration** — Radioisotope Thermoelectric Generators (RTGs) for deep-space missions
- 🏭 **Industrial Waste Heat Recovery** — Harvesting energy from factories and power plants
- 🏕️ **Remote & Emergency Power** — Off-grid electricity for camping, disaster relief, and rural areas
- 🚗 **Automotive** — Recovering waste heat from vehicle exhausts

## 📜 License

This project is part of an academic submission to the University of Calicut. All rights reserved by the project team members.

---

<div align="center">

**Department of Physics — Mar Dionysius College, Pazhanji, Thrissur**

*Academic Year 2025–2026*

</div>
]]>
