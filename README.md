# CtrlMap — GRC Framework Cross-Reference Atlas

A free, single-file tool that maps **118 ISO 27001:2022 controls** (93 Annex A + 25 Management System clauses) to **10 major cybersecurity frameworks** simultaneously. Built for GRC professionals who are tired of tab-switching between framework PDFs.

## Live Demo

👉 [View the tool](https://prinnyo.github.io/grc-framework-mapping-tool)

---

## What's Inside

### 118 ISO 27001:2022 Controls
- **93 Annex A controls** across Organizational, People, Physical, and Technological categories — each with its full **ISO 27002:2022 control statement**, **ISO 27002 Control Type** (Preventive / Detective / Corrective), and **Security Domain** (Governance and Ecosystem / Protection / Defence / Resilience)
- **25 Management System clauses** (Clauses 4–10) covering context, leadership, planning, support, operation, performance evaluation, and improvement

### 10 Mapped Frameworks

| Framework | Scope |
|-----------|-------|
| **NIST CSF 2.0** | 106 subcategories across 6 Functions and 22 Categories |
| **SOC 2 TSC** | 61 Trust Services Criteria (CC1–CC9, A1, PI1) |
| **CIS Controls v8** | 18 Controls and 153 Safeguards with IG1/IG2/IG3 tiers |
| **PCI DSS 4.0.1** | 12 Requirements with sub-requirement detail |
| **Cyber Essentials v3.1** | 5 technical control themes |
| **NIST SP 800-53 Rev 5** | 20 control families |
| **NIS 2 Directive** | 10 Article 21 security measures |
| **ISO 22301:2019** | 12 business continuity clause sections |
| **ISO 27017:2015** | 21 cloud security control sections |
| **NCSC CAF** | 4 Objectives / 14 Principles / 41 Contributing Outcomes with official IGP criteria |

Every framework reference shows the **full control statement** — not just an ID.

---

## Features

### Home Page — Readiness at a Glance
An overview page shows all 11 frameworks as donut charts, each reflecting your current audit readiness in real time (green = Implemented, amber = In Progress). Click any framework card to dive straight into its control list.

### Transitive Reverse Mapping
Switch the primary lens to **any** framework using the navigation tabs at the top. Select NIST CSF 2.0 as your primary view, and the tool automatically calculates transitive cross-mappings to SOC 2, CIS v8, PCI DSS, NIS 2, NCSC CAF, and every other framework — through the shared ISO 27001 controls underneath. No separate lookup table required; the mappings are computed on the fly.

**In-product disclaimer:** reverse views show a banner that these links are derived via ISO anchors and must not be over-trusted for audit-grade equivalence — always verify against official mappings.

### Full Hierarchy Views
Every framework is rendered in its native hierarchy structure:
- **NCSC CAF** — Objective → Principle → Contributing Outcome, with official Indicators of Good Practice (IGP) criteria per outcome
- **NIST CSF 2.0** — Function → Category → Subcategory
- **SOC 2** — Trust Services Category → Criteria Group → Criterion
- **CIS v8** — Control Group → Safeguard (with IG1/2/3 breakdown)
- **PCI DSS** — Goal → Requirement → Sub-requirement
- **Cyber Essentials** — Theme → Requirement

Framework items with no current ISO mapping are still shown so you can score and track them.

### Compliance Scoring
Track implementation status for each control with a four-state selector:
- **Not started** (red) — work has not begun
- **In progress** (amber) — partially implemented
- **Implemented** (green) — fully in place
- **Not Applicable** (grey) — excluded from your ISMS scope (Annex A only)

Scores persist in your browser between sessions. Each framework tracks its own scores independently.

### Statement of Applicability (SoA)
For ISO 27001 Annex A controls, selecting **Not Applicable** reveals a justification text field to record the exclusion reason. The **SoA export button** in the toolbar generates a formal Statement of Applicability CSV covering all 93 Annex A controls — regardless of any active filters — including:
- Applicable (Yes / No)
- Justification text
- ISO 27002:2022 control statement
- Control Type and Security Domain
- Implementation status

### Evidence Tracking
Each expanded control includes a pre-populated **Typical Evidence to Collect** checklist. For every evidence type:
- Tick items as you gather them
- Add a document reference (name, SharePoint link, Jira ticket, etc.)
- Leave free-text notes in an Additional Notes field

All evidence data is saved locally and included in Excel exports.

### Assessment backup
Use **Export assessment JSON** / **Import assessment JSON** in the sidebar to back up or restore scores, evidence checklists, and SoA justifications (the same data held in `localStorage`). Handy when switching browsers or sharing a personal assessment file with a colleague.

### Sidebar Filters
Stackable filter pills across all frameworks. ISO 27001–specific filters include:
- **ISO Category** — Management System, Organizational, People, Physical, Technological
- **NIST CSF Function** — Govern, Identify, Protect, Detect, Respond, Recover
- **SOC 2** — CC1–CC9, A1, P1
- **CIS Controls v8** — Controls 1–18
- **PCI DSS** — Requirements 1–12
- **Cyber Essentials** — Access Control, Secure Config, Firewalls, Malware Protection, Security Updates
- **NIST 800-53** — All 20 families
- **NIS 2** — Article 21 measures (a)–(j)
- **ISO 22301** — Clause sections
- **ISO 27017** — Section references
- **NCSC CAF** — Objectives A–D
- **Status** — Not started / In progress / Implemented / Not Applicable
- **ISO 27002 Control Type** — Preventive / Detective / Corrective *(ISO 27001 view only)*
- **ISO 27002 Security Domain** — Governance and Ecosystem / Protection / Defence / Resilience *(ISO 27001 view only)*

All filters stack for precise cross-framework queries. One-click "Clear all" resets everything.

### Smart Search
- **In-framework search** — filters controls within the active framework view
- **Global search mode** — toggle the "All frameworks" button to search across every framework simultaneously; results show coloured framework badges; click any badge to jump to that framework view
- Autocomplete suggestions as you type
- Search by control ID (A.5.17), framework reference (CC6.1, CIS 5), or keyword (MFA, encryption, access control)

### Hierarchy-Aware Exports
**CSV export** and **Excel (XLSX) export** include hierarchical parent columns matched to each framework (Objective + Principle for NCSC CAF; Function + Category for NIST CSF 2.0; etc.). The export never includes a column mapping the framework back to itself.

Excel exports additionally include:
- Colour-coded rows by implementation status
- Control Type and Security Domain columns for ISO 27001
- SoA Justification column
- All evidence, assessor notes, and implementation guidance
- A **Charts Guide** sheet with ready-made COUNTIF formulas for readiness pie and bar charts

---

## Who Is This For

- GRC Managers and Analysts preparing for audits or gap assessments
- Information Security teams managing multi-framework compliance
- ISO 27001 lead implementers building a Statement of Applicability
- Consultants mapping controls across client environments
- Security architects aligning controls to implementation standards
- Anyone building, maintaining, or certifying an ISMS

---

## Quick Start

1. Open the tool in any browser — the **home page** shows your current readiness across all 11 frameworks
2. First visit shows an interactive Quick Tour (10 items)
3. Click any **framework card** on the home page, or use the **framework tabs** to switch perspective
4. Search or filter to find relevant controls
5. Expand any card for full cross-references, ISO 27002 descriptions, achieved-criteria guidance, and evidence checklists
6. Score each control (Not started / In progress / Implemented / Not Applicable)
7. Use the **SoA** button to export your Statement of Applicability, or **CSV/XLSX** for the full control set

### Example Queries
- `MFA` → all multi-factor authentication controls across every framework
- `A.5.17` → jump to a specific Annex A control
- `CC6.1` → everything mapped to SOC 2 logical access
- `CIS 5` → filter by CIS Account Management control
- Switch to **NCSC CAF** → see all 41 Contributing Outcomes with IGP criteria and evidence checklists
- Filter **Detective** + **Defence** → ISO 27002 attribute filters surface all detective controls in the Defence security domain
- Filter **Status: Not Applicable** → review all controls excluded from your ISMS scope

---

## Deployment

Canonical entrypoint: **`index.html`** (GitHub Pages serves this from the repo root). Legacy `grc_framework_mapping.html` redirects to it. No build step, no backend.

**GitHub Pages:** Push to `main` → Settings → Pages → Deploy from main branch / root

**Any web host:** Upload `index.html` — works anywhere, even opened directly in a browser

---

## Built With

- React 18 (CDN, no build step)
- Vanilla CSS with CSS custom properties (dark/light theme)
- DM Sans + JetBrains Mono typography
- localStorage for score, evidence, and justification persistence
- All data embedded — no external API calls, no backend

---

## Data Sources and Accuracy

Control mappings, ISO 27002 descriptions, and implementation guidance are based on publicly available framework documentation and reflect commonly accepted alignments and best practices. Always verify mappings against the latest official framework publications for your specific compliance context. This tool does not constitute professional advice.

---

## License

MIT — free to use, modify, and share.

---

## Why This Tool?

**The Problem:** GRC professionals waste hours jumping between framework PDFs to find equivalent controls. Mapping across frameworks manually is tedious, error-prone, and has to be done differently depending on which framework you start from.

**The Solution:** 118 ISO 27001:2022 controls mapped to 10 frameworks in one searchable, filterable interface — with transitive reverse mapping from any framework's perspective, full control hierarchies, compliance tracking, evidence checklists, and a formal SoA export.

**The Impact:** What used to take hours now takes seconds. One tool for audit prep, gap assessments, implementation planning, Statement of Applicability generation, and multi-framework compliance.

---

Built by a GRC professional who got tired of tab-switching between framework PDFs.

💼 [Connect on LinkedIn](https://www.linkedin.com/in/princessdavidokoro/)
