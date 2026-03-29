# InfoSec Controls Cross-Reference Tool

A free, interactive tool mapping **118 ISO 27001:2022 controls**: all 93 Annex A controls plus 25 Management System clauses (Clause 4-10) to five major cybersecurity frameworks. Features a dynamic reverse-mapping engine, compliance scoring, and detailed implementation guidance.
 
Built for GRC professionals who are tired of tab-switching between framework PDFs

## Live Demo

👉 [View the tool](https://prinnyo.github.io/grc-framework-mapping-tool)

## What's Inside
 
### 118 ISO 27001:2022 Controls
- **93 Annex A controls** across Organizational, People, Physical, and Technological categories
- **25 Management System clauses** (Clauses 4–10) covering context, leadership, planning, support, operation, performance evaluation, and improvement
- **Official ISO 27002:2022 control statements** displayed for every control
 
### 5 Mapped Frameworks
- **NIST CSF 2.0** — 48 subcategory descriptions across Govern, Identify, Protect, Detect, Respond, and Recover
- **SOC 2** — 30 Trust Services Criteria descriptions (CC1–CC9, A1, P1)
- **CIS Controls v8** — All 18 control descriptions with full titles
- **PCI DSS 4.0** — 18 requirement descriptions including sub-requirements
- **Cyber Essentials** — All 5 technical control area descriptions
 
Every framework reference shows the **full control statement** — not just an ID.
 
## Features
 
### Transitive Reverse Mapping
The standout feature. Switch the primary lens to **any** framework using the navigation tabs at the top.
 
Select NIST CSF 2.0 as your primary view, and the tool automatically calculates transitive cross-mappings to SOC 2, CIS v8, PCI DSS, and Cyber Essentials through the shared ISO 27001 controls underneath. This means you can start from a SOC 2 criteria, a CIS control, or a PCI DSS requirement and instantly see how it maps to every other framework — without building the mapping yourself.
 
### Compliance Scoring
Track implementation status for each control with a three-state toggle: **Not Implemented** (🔴), **In Progress** (🟡), **Implemented** (🟢). Scores persist in your browser between sessions.
 
An **Audit Readiness** progress bar at the top shows your overall compliance percentage for the current filtered scope — so you can see your readiness per framework, per category, or across the full ISMS.
 
### Filtering Across All 6 Frameworks
Six rows of stackable filter pills:
- **ISO Category** — Management System (Mandatory ISO 27001 Clauses), Organizational, People, Physical, Technological
- **NIST Function** — Govern, Identify, Protect, Detect, Respond, Recover
- **SOC 2** — CC1–CC9, A1, P1
- **CIS Controls v8** — Controls 1–18
- **PCI DSS 4.0** — Requirements 1–12
- **Cyber Essentials** — Access Control, Secure Config, Firewalls, Malware Protection, Security Updates
 
All filters stack for precise cross-framework queries. One-click reset clears everything.
 
### Smart Search
- Autocomplete suggestions as you type
- Search by control ID (A.5.17, 6.1.2), framework reference (CC6.1, CIS 5), or keyword (MFA, encryption, access)
- Example search shortcuts for quick exploration
 
### Detailed Implementation Guidance
Each control includes comprehensive, actionable guidance covering specific steps, recommended tools, best practice standards (NIST 800-88, CIS Benchmarks, OWASP, MITRE ATT&CK), suggested SLAs, and practical implementation patterns from real-world GRC work.
 
## Who Is This For
 
- GRC Managers and Analysts preparing for audits or gap assessments
- Information Security teams managing multi-framework compliance
- Consultants mapping controls across client environments
- Security architects aligning controls to implementation standards
- Anyone building, maintaining, or certifying an ISMS
 
## Quick Start
 
1. Open the tool in any browser
2. First visit shows an interactive tutorial
3. Use the **framework tabs** to switch perspective (ISO 27001, NIST CSF, SOC 2, CIS, PCI DSS, Cyber Essentials)
4. Search or filter to find relevant controls
5. Expand any card for full cross-references, ISO 27002 descriptions, and implementation guidance
6. Toggle compliance status per control to track your audit readiness
 
### Example Queries
- `MFA` → Find all multi-factor authentication controls
- `A.5.17` → Jump to a specific Annex A control
- `6.1.2` → Find the risk assessment Management System clause
- `CC6.1` → Find everything mapped to SOC 2 logical access
- `CIS 5` → Filter by CIS Account Management control
- `encryption` → Surface all cryptography-related controls
- Switch to **SOC 2** tab → See all SOC 2 criteria with transitive mappings to NIST, CIS, PCI DSS, and CE
- Filter **PCI DSS Req 8** + **Technological** → See all tech controls mapped to PCI authentication requirements
 
## Deployment
 
Single self-contained `index.html` file. No build step, no dependencies, no backend.
 
**GitHub Pages:** Upload to a public repo → Settings → Pages → Deploy from main branch
 
**Any web host:** Upload the single HTML file — works anywhere
 
## Built With
 
- React 18 (CDN)
- Vanilla CSS with CSS custom properties (dark theme)
- DM Sans + JetBrains Mono typography
- localStorage for compliance score persistence
- All data embedded — no external API calls
 
## Disclaimer
 
This tool is intended as a practical reference to support GRC professionals. Control mappings, ISO 27002 descriptions, and implementation guidance are based on publicly available framework documentation and reflect commonly accepted alignments and best practices. Always verify mappings against the latest official framework publications for your specific compliance context. This tool does not constitute professional advice.
 
## License
 
MIT — free to use, modify, and share.
 
## Why This Tool?
 
**The Problem:** GRC professionals waste hours jumping between framework PDFs to find equivalent controls. Mapping across frameworks manually is tedious, error-prone, and has to be done differently depending on which framework you start from.
 
**The Solution:** 118 ISO 27001:2022 controls mapped to 5 frameworks in one searchable, filterable interface — with reverse mapping from any framework's perspective, full control descriptions, compliance tracking, and implementation guidance baked in.
 
**The Impact:** What used to take hours now takes seconds. One tool for audit prep, gap assessments, implementation planning, and multi-framework compliance.
 
---
 
Built by a GRC professional who got tired of tab-switching between framework PDFs.
 
💼 [Connect on LinkedIn](https://www.linkedin.com/in/princessdavidokoro/)
