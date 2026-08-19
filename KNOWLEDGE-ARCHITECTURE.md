# Knowledge Architecture

This document explains the proposed taxonomy for this repository, why it's shaped this way, and the rules for keeping it correct as new files arrive. It is the reference to read before filing anything new — see "Future Intake Rule" at the end.

## 0. What this repository actually is

Before designing a taxonomy, it's worth being explicit about what was found, since nothing in the repo stated it:

- Single Git author (`khoahotran`), one branch, no CI/CD, no `.gitignore`/`.gitattributes`, no README, no LFS in active use, no prior indexes.
- Content mix: AI/LLM/agent research papers and courses (the largest single cluster), software-engineering/architecture/DevOps reference material, a self-contained transportation-ETA research collection, and a smaller set of personal career material (interview prep, job-application email templates, presentation-skills guides) and Vietnamese-language product-management books.
- Several files carry personal authorship markers (handwritten-style notes, "mình" first-person phrasing, a personal `.sql` export from a real system).

**Conclusion (stated with the uncertainty it deserves): this is a personal knowledge-management and reference archive**, not a team wiki, a published research corpus, or a training dataset. It supports one person's learning, interview prep, and reference lookup across a wide range of IT/AI topics, with one distinct sub-collection (transportation ETA/speed-estimation papers) that reads like it was assembled for a specific research or thesis project. The taxonomy below is designed for that use case: fast personal retrieval and long-term "where does a new file go" clarity, not multi-team governance.

## 1. Design principles (in priority order, matching the task brief)

1. **Semantic correctness** — classify by verified content, not filename or current folder.
2. **Findability** — a person should be able to find a topic without knowing the exact filename.
3. **Reference stability** — predictable paths; avoid meaningless version suffixes and generic names.
4. **Provenance** — never invent authors/dates/identifiers; preserve translations and editions rather than merging them away.
5. **Scalability** — a new file of a plausible future topic (e.g., "cloud/AWS book," "another RAG paper") has an obvious home.
6. **Maintainability** — few, well-motivated categories; no category invented for a single file unless it's a genuine distinct growth area.
7. **Naming consistency** — applied only where it doesn't fight principle 1 or 4.
8. **Aesthetics** — deliberately last. A less "tidy-looking" tree that's semantically right beats a tidy one that misfiles things.

## 2. Why subject-based, not document-type-based

The repository's original top-level folders (`AI`, `AI Agent`, `LLM`, `RAG`, `Paper`, `NN`, ...) mixed two different axes: **document type** (`Paper/` = "these are papers") and **subject** (`AI/`, `LLM/`, `RAG/`, `AI Agent/` = overlapping AI sub-topics presented as if they were separate fields). Per the task brief, overlapping AI concepts must not each get their own top-level folder — a research paper about "agentic RAG" is simultaneously AI, LLM, agents, *and* RAG, and forcing a single folder pick among four near-synonymous top levels is exactly the ambiguity this reorganization is meant to remove.

**Resolution:** one `artificial-intelligence/` tree with subject subfolders, and `content_type` (book, research-paper, cheatsheet, etc.) recorded as **metadata**, not a folder. A person browsing by subject finds everything about a topic regardless of whether it's a book, a paper, or a slide deck; `CATALOG.md` (generated post-migration) additionally lets them browse by type across all subjects when that's what they actually want.

```
artificial-intelligence/
├── foundations/          — general/cross-cutting AI reference & course material
├── deep-learning/        — CNNs, RNNs, attention, the Stanford CS230 cheatsheet set
├── llm/                  — LLM-specific books, papers, fine-tuning, courses
├── agents/               — agentic AI, agent memory, agent design patterns
├── rag/                  — retrieval-augmented generation
├── computer-vision/      — vision/detection models (currently just the YoNet pair)
├── generative-models/    — text-to-image etc. (currently one file; a real growth bucket)
└── economic-impact/      — AI policy/labor-market reports (currently one file)
```

This mirrors the task brief's own suggested shape (`foundations/machine-learning/deep-learning/llm/agents/rag/multimodal`), adapted to what this repository actually contains — there's no `machine-learning/` folder yet because no classical-ML-specific material exists; add it when it does, following the same pattern, rather than pre-creating an empty folder now.

## 3. The `Paper/` folder specifically

`Paper/` was a **document-type** folder (`content_type: research-paper`), not a subject. Its contents split two ways:

- General AI/LLM/agents research papers → merged into the relevant `artificial-intelligence/{llm,agents,foundations}/` subfolder alongside non-paper material on the same subject. Their `content_type: research-paper` is preserved in metadata so they're still identifiable as papers.
- `Paper/Transportation/` → a **self-contained, differently-themed research collection** (ETA prediction and vehicle/vessel/bus speed estimation — not general AI). Per the task brief's guidance on the `Paper/` folder, this became its own subject root, `research/transportation/`, with its two natural internal groupings preserved as subfolders (`eta-prediction/`, `speed-estimation/`) instead of the original inconsistently-cased `time of arrival/` and `speed estimated/`. A `research/` root (rather than folding this into `artificial-intelligence/`) was chosen because most of these papers are about sensors, regression models, and traffic engineering — not primarily an AI/ML research contribution — and because keeping a distinct research collection intact (rather than scattering it across AI subfolders) preserves the fact that someone assembled it deliberately for one project.

## 4. Document type vs. subject vs. document role

Every file is described along three independent axes (stored in `inventory.json`, not baked into the folder tree):

| Axis | Examples | Where it lives |
|---|---|---|
| **Subject/domain** | `artificial-intelligence/rag`, `devops/kubernetes` | The folder path |
| **Content type** | book, research-paper, survey, cheatsheet, slide-deck, interview-material, diagram, dataset, script | `content_type` field |
| **Document role** | source-material (an authoritative external work), reference-material (a guide/cheatsheet), personal-notes (this person's own study notes), derived-notes (a synthesis/translation of other sources), project-artifact (output of a real project), dataset, code | `document_role` field |

This is what lets `research-paper` and `book` and `personal-notes` about the same subject sit in the same folder without being confused for each other, and lets a future catalog answer "show me only the books" or "only the personal notes" across every subject at once.

## 5. Naming convention

**Directories:** lowercase, kebab-case, no spaces (`software-architecture/system-design/`, not `Software Architecture/System Design/`).

**Files:** *semantic clarity beats mechanical uniformity.* Concretely:

- A file whose current name already carries a clear, correct, unique title (e.g., `(Robert C. Martin Series) Robert C. Martin - Clean Architecture...-Prentice Hall (2017).pdf`, or any correctly-titled arXiv paper) is **left alone**. Renaming it to `robert-c-martin-clean-architecture-2017.pdf` would not make it more findable — it already is.
- A file is renamed only when the current name is one of: generic/meaningless (`SDD-Ebook.pdf` when "SDD" actually means "Spec Driven Development," not a design doc), truncated (`Deep Encoder Cross Network for Estimated Time.pdf`, missing "of Arrival"), OCR/typo-corrupted (`Software_Proiect_Management_F_fth_Editio.pdf`), a numeric sequence with no semantic content (`Agile/1.jpg`...`8.jpg`), carries a redundant double extension (`use_case_diagram.pptx.pdf`), or genuinely mismatches its content (`DBRelationshipsSQL.jpg`, which is a SQL cheatsheet, not an ER diagram).
- **Research papers:** `Short-Title-Year.pdf` only when the existing filename is generic/ambiguous (e.g., `Ministral 3.pdf` → `Ministral-3-Technical-Report-2026.pdf`). Most papers in this repo already carry their real title as the filename and are left as-is. IEEE citation style is **not** used as a filename convention (per the task brief) — it's a bibliographic convention, not a filesystem one; full citation data (authors, venue, DOI/arXiv ID) lives in metadata instead.
- **Books:** `Author-Title-Year.pdf` is the *ideal*, applied only where the current name is broken; a good existing name is kept.
- **Diacritics (Vietnamese filenames):** kept where they don't cause a practical problem (most files opened fine); normalized to ASCII only where diacritics + spaces + punctuation together broke tooling in practice during this inventory (confirmed by needing an 8.3 short-path workaround to open two files in this pass) or where combined with brackets/colons that are awkward across tools (`[Banking (Ngân hàng)] Danh Sách...` → `banking-exception-test-checklist.pdf`). The original Vietnamese title is preserved in the `title` metadata field in every such case — normalization is a filename-only decision, never a rewrite of the work's actual title.
- **No invented semantics:** where content genuinely can't be determined (3 files with no extractable text and no available page-rendering in this pass), the file is *not* renamed — it keeps its original name and is marked `NEEDS_REVIEW`, per the brief's "don't invent semantics" rule.

## 6. Metadata schema

Stored per-file in `inventory.json` / `inventory.csv` (see `REPOSITORY-INVENTORY` deliverable). No separate sidecar file per document — one repository-wide inventory is the minimum viable metadata architecture for ~140 files; sidecar `.yaml` files per document would be maintenance overhead this collection doesn't need yet. Revisit only if the collection grows enough that a single flat inventory becomes unwieldy (see §9).

```yaml
path:                  # current or new relative path
filename:
extension:
size_bytes:
sha256:                # for duplicate detection, re-run on demand
current_category:      # pre-migration top-level folder, kept for traceability
content_type:          # book | research-paper | survey | technical-report | lecture-note |
                       # course-material | slide-deck | cheatsheet | tutorial | documentation |
                       # interview-material | diagram | image | dataset | spreadsheet |
                       # source-code | script | project-artifact | business-document | reference | unknown
title:                 # real title from content, never the filename
author:
year:
language:
source:                # publisher / platform / conference / community event
identifier:            # DOI / arXiv ID / ISBN, when found — never invented
domain:                # dotted subject path, e.g. artificial-intelligence/rag
topics:                 # free-text tags
document_role:         # source-material | reference-material | personal-notes | derived-notes |
                       # project-artifact | dataset | code | business-document
confidence:            # HIGH | MEDIUM | LOW
duplicate_candidates:  # paths of exact/probable duplicates, or null
review_status:         # NEEDS_REVIEW | DUPLICATE_REVIEW | null — still-open items worth a second look
status:                # MIGRATED | RETIRED (RETIRED = removed as a confirmed duplicate; the surviving
                       # copy's record notes which path was retired)
original_path:         # pre-reorganization path, kept for traceability
notes:                 # what was actually found in the content, and why
```

For any *new* file added after this reorganization, only fill in the fields through `notes` — `review_status`/`status`/`original_path` are reorganization-specific bookkeeping, not part of the ongoing per-file schema (a newly-added file has no "original path" to preserve).

## 7. Research paper rules (recap)

- Inspect title page/abstract/references for real title, full author list, year, venue, and DOI/arXiv ID — never trust the filename alone (this inventory found several mismatches this way; flagged files are recorded with `confidence: MEDIUM|LOW` and an explanatory `notes` field in `inventory.json`).
- Prefer keeping the existing filename if it's already the real title; rename to `Short-Title-Year.pdf` only when the existing name is broken.
- Preserve DOI/arXiv ID in metadata (`identifier` field), not necessarily in the filename.
- Unverifiable authorship/venue → flag `NEEDS_REVIEW`, don't silently treat as equally authoritative to a confirmed arXiv/publisher paper.

## 8. Duplicates, editions, translations

- **Exact duplicate** (identical SHA-256): keep one copy, in the destination that best matches confirmed content; retire the other. Never auto-delete — a human picks which copy survives.
- **Probable duplicate** (same title/authors, different bytes/size): flag for human comparison; may be a different edition, export, or draft — do not assume identical and do not merge automatically.
- **Translations** (e.g., the Vietnamese Anthropic-report translation, the two Vietnamese product-management books translated from Chinese): kept as their own file, tagged `document_role: derived-notes`, with the original work identified in `notes`/`source` wherever known. Never treated as a duplicate of "nothing," and never merged with an original that isn't even in this repository.
- **Paired-but-different artifacts** (e.g., `YoNet_Presentation.pdf` + `.tsx`, the two Datadog-observability decks): kept side by side, cross-referenced via a `related` note — not merged, not treated as redundant.

## 9. Notes vs. source material vs. personal notes

Distinguished via `document_role`, not folder structure (folder-per-role would fragment every subject folder in two):

- **source-material** — an authoritative external work (a published book, an arXiv paper, an official spec).
- **reference-material** — a secondary guide/cheatsheet/course deck, useful but not the primary source (e.g., the Stanford CS230 cheatsheets, most DevOps tutorials of unknown authorship).
- **personal-notes** — this repository owner's own study notes (the Agile/Scrum handwritten-style deck, the API-design-patterns docx written in first person).
- **derived-notes** — a translation or synthesis of other sources (the Anthropic-report translation, the LLM-agent-memory seminar deck that synthesizes ~16 other papers).
- **project-artifact / dataset / code** — output of real work (the Terraform deployment writeup, the traffic-dataset spreadsheet, the SQL script, the YoNet `.tsx` component).

## 10. Images

Not dumped into a generic `images/` folder. Classified by what they actually depict and placed alongside the subject they document:

- Diagrams that document a specific system's data model → travel with that system's folder (`salesforce/b2c-commerce-cloud/*.png`, the `Software Architecture Styles.jpg` infographic).
- Personal handwritten/annotated study-note images → treated as a sequential note deck, renamed from `1.jpg`...`8.jpg` to `agile-scrum-notes-01-intro-philosophy.jpg` etc. (content-derived, not invented — each was individually inspected).
- Where content genuinely couldn't be determined, filenames stay generic and are flagged `NEEDS_REVIEW` rather than guessed — this repository had none that met that bar this pass (`DBRelationshipsSQL.jpg` was a content mismatch, not an unreadable image — its actual content was verified and renamed accordingly).

## 11. Datasets and code

Kept out of passive-reading folders, placed next to the research they support rather than in a separate top-level `datasets/`/`code/` (the volume here — 2 files — doesn't justify a whole new top-level split):

- `dataset_traffic_images_videos_full_with_api_extended.xlsx` → `research/transportation/` (a planning artifact for that specific research collection, not a generic dataset).
- `phan_quyen_script.sql` → stays in `databases/`, flagged `NEEDS_REVIEW` (see Ambiguity Report — it's a real application's data export, a sensitivity question, not a classification one).
- `YoNet_Presentation.tsx` → travels with its paired PDF into `artificial-intelligence/computer-vision/` — it's a presentation component, not a reusable library.

## 12. Cross-topic discovery (without duplicating files)

A single physical copy per file; multiple ways to find it:

- **`CATALOG.md`** (generated post-migration) — one row per file, sortable mentally by type, domain, or role; the "what exists, where do I start" index.
- **Domain README files** (e.g., `artificial-intelligence/README.md`) — narrative "if you're new to this topic, read X then Y" guidance and a "see also" list linking related subjects (e.g., the AI README cross-references `research/transportation/` as "a separate applied-ML research collection," and notes the RAG folder's interview-questions file shares a source/author with the LLM folder's interview file).
- **Metadata tags** (`topics` field) — support future full-text/tag search without needing a folder-per-tag.

No file is ever copied into two folders to make it appear in two places — that would violate provenance (which copy is canonical?) and bloat the repo for no retrieval benefit metadata/indexes can't already provide.

## 13. Future Intake Rule

For any new file added to this repository going forward:

```
1. Identify content type (book / paper / notes / diagram / dataset / code / ...)
2. Extract metadata (title, author, year, source, identifier — from content, not filename)
3. Identify primary subject/domain (which existing top-level tree, or does it need a new one?)
4. Check for duplicates (hash + title/author check against inventory.json)
5. Assign canonical location (existing subfolder if one fits; a genuinely new subfolder
   only if this is the first of a real, distinct future topic — not a one-off)
6. Normalize filename ONLY if the current one is broken (see §5) — otherwise keep it
7. Add one row to inventory.json/csv with full metadata
8. Update the relevant domain README and CATALOG.md
```

A new top-level category is justified only when a file doesn't fit any existing subject tree *and* represents a topic likely to grow (matching this repo's actual pattern: `artificial-intelligence/generative-models` was kept as its own bucket at 1 file because more text-to-image/diffusion material is a plausible future addition; a one-off oddball file instead gets `NEEDS_REVIEW` and stays where evidence points, rather than inventing a folder for it alone).
