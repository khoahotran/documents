# Knowledge Repository

A personal knowledge-management and reference archive covering AI/LLM/agents research and courses, software engineering and architecture, DevOps, databases, networking, and a smaller set of career and product-management material — reorganized in August 2026 from 21 mixed document-type/ad-hoc folders into a subject-based taxonomy.

## Where do I start?

- **Looking for something specific?** Check `CATALOG.md` — one row per file with title, type, and role.
- **Not sure which folder a topic lives in?** Read `KNOWLEDGE-ARCHITECTURE.md` — explains the taxonomy and why it's shaped this way.
- **Adding a new file?** Follow the "Future Intake Rule" at the end of `KNOWLEDGE-ARCHITECTURE.md`.
- **Wondering why a file ended up where it did, or whether something needs a second look?** Check its `notes`, `confidence`, and `review_status` fields in `inventory.json`/`inventory.csv` — every classification decision, rename reason, and open question from the August 2026 reorganization is recorded there per file. `review_status: NEEDS_REVIEW` or `DUPLICATE_REVIEW` marks the ~25 files still worth a second look.

## Top-level map

| Folder | What's there |
|---|---|
| `artificial-intelligence/` | AI/LLM/agents/RAG/deep-learning books, papers, courses, and cheatsheets — one tree, subject subfolders, not split by document type. See `artificial-intelligence/README.md`. |
| `research/transportation/` | A self-contained applied-research collection on ETA prediction and vehicle/vessel/bus speed estimation. See `research/README.md`. |
| `software-architecture/` | System-design and architecture books, playbooks, and diagrams. |
| `software-engineering/` | API design, performance, Agile notes/course material, UML/diagramming guides. See `software-engineering/README.md`. |
| `devops/` | Kubernetes, Terraform, observability, security, project management, version control. See `devops/README.md`. |
| `data-engineering/etl/` | Pentaho ETL books. |
| `databases/` | Indexing, SQL reference, and one real application's RBAC script (flagged — see Ambiguity Report). |
| `networking/` | Cisco CCNA exam-prep book. |
| `programming/` | Python and Go reference material. |
| `testing/domain-specific/` | Healthcare and banking domain test-case checklists. |
| `product-management/` | Vietnamese-translated product-management books. |
| `business-analysis/` | Business-analyst-focused AI cheatsheet. |
| `salesforce/b2c-commerce-cloud/` | SFCC data-model ERD diagrams. |
| `career/` | Interview prep, job-search email templates, IT-career guidance, presentation/communication-skills guides. See `career/README.md`. |

## Naming and metadata rules

Summarized in `KNOWLEDGE-ARCHITECTURE.md` §5–6. Short version: directories are lowercase kebab-case; filenames are only changed when the existing one is broken (typo, truncation, generic, double-extension, or content-mismatched) — a good existing name is never touched just for uniformity. Every file's real title, author, year, and source are recorded in `inventory.json`/`inventory.csv` regardless of what the filename itself says.

## Known open items

A handful of files still have an open question attached — unreadable PDFs, unverifiable authorship, a couple of papers that landed in `research/transportation/` by keyword overlap rather than actual topic match, and a `.sql` script that may contain real application data worth a second look before this repo is ever shared. None of it blocks using the repository as-is; each is noted in that file's `notes` field in `inventory.json`/`inventory.csv`, and in the relevant domain `README.md` where one exists.
