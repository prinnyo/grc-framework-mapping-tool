# InfoSec Controls Cross-Reference Tool

A free, interactive tool that maps all 93 ISO 27001:2022 Annex A controls to five major cybersecurity frameworks — with full control descriptions and detailed implementation guidance for every mapping.

Built for GRC professionals who are tired of tab-switching between framework PDFs.

## Live Demo

👉 [View the tool](https://prinnyo.github.io/grc-framework-mapping-tool)

## Frameworks Covered

- **ISO 27001:2022** — All 93 Annex A controls across Organizational, People, Physical, and Technological categories
- **NIST CSF 2.0** — 48 subcategory descriptions across Govern, Identify, Protect, Detect, Respond, and Recover functions
- **SOC 2** — 30 Trust Services Criteria descriptions (CC1–CC9, A1, P1)
- **CIS Controls v8** — All 18 control descriptions with full titles
- **PCI DSS 4.0** — 18 requirement descriptions including sub-requirements
- **Cyber Essentials** — All 5 technical control area descriptions

## Features

### Search
- Smart autocomplete with suggestions as you type
- Search by control ID (A.5.17), framework reference (CC6.1, CIS 5), or keyword (MFA, encryption, access)
- Example search shortcuts for quick exploration

### Filtering Across All 6 Frameworks
- **ISO Category** — Organizational, People, Physical, Technological
- **NIST Function** — Govern, Identify, Protect, Detect, Respond, Recover
- **SOC 2** — Filter by Trust Services Criteria series (CC1–CC9, A1, P1)
- **CIS Controls v8** — Filter by individual control (1–18)
- **PCI DSS 4.0** — Filter by requirement (1–12)
- **Cyber Essentials** — Filter by technical control area
- All filters stack for precise cross-framework queries
- One-click "Clear all filters" reset

### Full Control Descriptions
Every framework reference shows the complete control statement — not just an ID. Expand any control card to see:
- **Official ISO 27002:2022 control statements**
- NIST CSF 2.0 subcategory descriptions
- SOC 2 Trust Services Criteria text
- CIS Controls v8 safeguard descriptions
- PCI DSS 4.0 requirement statements
- Cyber Essentials control area descriptions

### Detailed Implementation Guidance
Each of the 93 controls includes comprehensive, actionable implementation guidance covering:
- Specific steps and procedures
- Recommended tools and technologies
- Best practice standards (NIST 800-88, CIS Benchmarks, OWASP, MITRE ATT&CK)
- Suggested SLAs and review frequencies
- Practical tips from real-world GRC experience

### User Experience
- Interactive tutorial for first-time visitors
- Help button always accessible
- Live stats updating as you filter
- Mobile-responsive design
- Dark theme optimised for readability
- Zero dependencies — single HTML file, no backend, no API calls

## Who Is This For

- GRC Managers and Analysts preparing for audits or gap assessments
- Information Security teams managing multi-framework compliance
- Consultants mapping controls across client environments
- Security architects aligning controls to implementation standards
- Anyone building or maintaining an ISMS

## Quick Start

1. Open the tool in any browser
2. First visit shows an interactive tutorial
3. Search or filter to find relevant controls
4. Click any control card to expand full cross-references and implementation guidance
5. Stack multiple filters to drill down across frameworks

### Example Queries
- `MFA` → Find all multi-factor authentication controls
- `A.5.17` → Jump to a specific ISO control
- `CC6.1` → Find everything mapped to SOC 2 logical access
- `CIS 5` → Filter by CIS Account Management control
- `encryption` → Surface all cryptography-related controls
- Filter **PCI DSS Req 8** + **Technological** → See all tech controls mapped to PCI authentication requirements

## Deployment

Single self-contained `index.html` file. No build step, no dependencies, no backend.

**GitHub Pages:** Upload to a public repo → Settings → Pages → Deploy from main branch

**Any web host:** Upload the single HTML file — works anywhere

## Built With

- React 18 (CDN)
- Vanilla CSS with dark theme
- DM Sans + JetBrains Mono typography
- All data embedded — no external API calls

## Disclaimer

This tool is intended as a practical reference to support GRC professionals. Control mappings and implementation guidance are based on publicly available framework documentation and reflect commonly accepted alignments and best practices. Always verify mappings against the latest official framework publications for your specific compliance context. This tool does not constitute professional advice.

## License

MIT — free to use, modify, and share.

## Why This Tool?

**The Problem:** GRC professionals waste hours jumping between framework PDFs to find equivalent controls. Understanding what each control actually requires means opening yet another document.

**The Solution:** All 93 ISO 27001:2022 controls mapped to 5 frameworks in one searchable, filterable interface — with the exact ISO 27002 standards, full cross-framework control descriptions, and detailed implementation guidance baked in.

**The Impact:** What used to take hours now takes seconds. One tool for audit prep, gap assessments, implementation planning, and multi-framework compliance.

---

Built by a GRC professional who got tired of tab-switching between framework PDFs.

💼 [Connect on LinkedIn](https://www.linkedin.com/in/princessdavidokoro/)
