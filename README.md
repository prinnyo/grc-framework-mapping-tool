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

- **Search** — Find controls by ID (A.5.2), framework reference (CC6.1, CIS 5), or keyword (MFA, encryption, access)
- **Filter by ISO category** — Organizational, People, Physical, Technological
- **Filter by NIST function** — Govern, Identify, Protect, Detect, Respond, Recover
- **Expandable control cards** — View all cross-references and implementation guidance per control
- **Live stats** — Control counts update in real time as you filter
- **Zero dependencies** — Single HTML file, no backend, no API calls

## Live Demo

👉 [View the tool](https://yourusername.github.io/grc-framework-tool)

*(Replace with your actual GitHub Pages URL after deployment)*

## Who Is This For

- GRC Managers and Analysts preparing for audits
- Information Security teams managing multi-framework compliance
- Consultants mapping controls across client environments
- Anyone tired of switching between framework PDFs

## How to Use

1. Open the tool in any browser
2. Type a control ID, framework reference, or keyword into the search bar
3. Use the category and NIST function filters to narrow results
4. Click any control card to expand full cross-reference details

## Deployment

This is a single self-contained `index.html` file. No build step required.

**GitHub Pages:** Upload to a public repo → Settings → Pages → Deploy from main branch

**Any web host:** Upload the single HTML file — it works anywhere

## Built With

- React 18
- Vanilla CSS (dark theme)
- All 93 control mappings embedded in the file

## Disclaimer

This tool is intended as a practical reference to support GRC professionals. Control mappings are based on publicly available framework documentation and reflect commonly accepted alignments. Always verify mappings against the latest official framework publications for your specific compliance context.

## License

MIT — free to use, modify, and share.

---

Built by a GRC professional who got tired of tab-switching between framework PDFs.
