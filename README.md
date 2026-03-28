# InfoSec Controls Cross-Reference Tool

A free, interactive tool that maps all 93 ISO 27001:2022 Annex A controls to five major cybersecurity frameworks — helping GRC professionals cross-reference controls instantly instead of digging through PDFs.

## Frameworks Covered

- **ISO 27001:2022** — All 93 Annex A controls
- **NIST CSF 2.0** — Functions, Categories & Subcategories
- **SOC 2** — Trust Services Criteria
- **CIS Controls v8** — Safeguards
- **PCI DSS 4.0** — Requirements
- **Cyber Essentials** — Technical Controls

## Features

### 🔍 **Enhanced Search**
- **Smart autocomplete** — Get intelligent suggestions as you type
- **Example searches** — Click to try common searches (MFA, A.5.17, CC6.1, CIS 5)
- **Multi-format search** — Control IDs, framework references, or keywords
- **Real-time results** — Instant filtering as you search

### 🎯 **User-Friendly Design**
- **Interactive tutorial** — Automatic walkthrough for new users
- **Help system** — Always-accessible help button
- **Visual feedback** — Hover effects and smooth animations
- **Mobile-responsive** — Works perfectly on all devices

### 📊 **Powerful Filtering**
- **Filter by ISO category** — Organizational, People, Physical, Technological
- **Filter by NIST function** — Govern, Identify, Protect, Detect, Respond, Recover
- **Live stats** — Control counts update in real time as you filter
- **Combined filters** — Stack multiple filters for precise results

### 📋 **Comprehensive Data**
- **Expandable control cards** — View all cross-references and implementation guidance per control
- **Framework mappings** — See exact mappings across all 5 frameworks
- **Implementation notes** — Practical guidance for each control
- **Zero dependencies** — Single HTML file, no backend, no API calls

## Live Demo

👉 [View the tool](https://prinnyo.github.io/grc-framework-mapping-tool)

## Who Is This For

- GRC Managers and Analysts preparing for audits
- Information Security teams managing multi-framework compliance
- Consultants mapping controls across client environments
- Anyone tired of switching between framework PDFs

## How to Use

1. **First visit** — Interactive tutorial guides you through all features
2. **Search anything** — Use autocomplete suggestions or try the example searches
3. **Filter results** — Combine ISO category and NIST function filters
4. **Explore controls** — Click any control card to expand full cross-reference details
5. **Get help** — Click the "? Help" button anytime to reopen the tutorial

### Quick Examples
- Search `MFA` to find multi-factor authentication controls
- Search `A.5.17` for a specific ISO control
- Search `CC6.1` to find SOC 2 mappings
- Search `CIS 5` for CIS Controls references
- Search `encryption` for crypto-related controls

## Deployment

This is a single self-contained `index.html` file. No build step required.

**GitHub Pages:** Upload to a public repo → Settings → Pages → Deploy from main branch

**Any web host:** Upload the single HTML file — it works anywhere

## Built With

- **React 18** — Modern, fast UI framework
- **Vanilla CSS** — Professional dark theme with smooth animations
- **Local storage** — Remembers tutorial completion
- **Progressive enhancement** — Works without JavaScript for basic functionality
- **All 93 control mappings** — Comprehensive data embedded in the file

## Disclaimer

This tool is intended as a practical reference to support GRC professionals. Control mappings are based on publicly available framework documentation and reflect commonly accepted alignments. Always verify mappings against the latest official framework publications for your specific compliance context.

## License

MIT — free to use, modify, and share.

## Why This Tool?

**The Problem:** GRC professionals waste hours jumping between framework PDFs to find equivalent controls. Mapping ISO 27001 to NIST CSF, SOC 2, CIS, and PCI DSS manually is tedious and error-prone.

**The Solution:** All 93 ISO 27001:2022 controls mapped to 5 frameworks in one searchable interface. No more PDF tab-switching, no more manual cross-referencing.

**The Impact:** What used to take hours now takes seconds. Perfect for audit prep, gap assessments, and multi-framework compliance.

---

Built by a GRC professional who got tired of tab-switching between framework PDFs. 

🐦 Follow progress [@in_herspace](https://twitter.com/in_herspace)
