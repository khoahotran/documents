# Artificial Intelligence

One subject tree for everything AI/LLM/agents/RAG-related, deliberately *not* split into separate top-level `AI/`, `LLM/`, `Agents/`, `RAG/` folders — those concepts overlap too much (an agentic-RAG paper is simultaneously all four). Subject lives in the folder; document type (book, paper, cheatsheet, course) lives in metadata (`inventory.json`) — see the root `KNOWLEDGE-ARCHITECTURE.md` for the reasoning.

## Subfolders

| Folder | Contents |
|---|---|
| `foundations/` | General/cross-cutting AI reference and course material (AIO2025 exercise book, an LLM/foundation-model encyclopedia, cross-cutting architecture papers). |
| `deep-learning/` | CNNs, RNNs, attention, and the Stanford CS230 "VIP Cheatsheet" set (Vietnamese translation, 4 files that form one coherent series — read `super-cheatsheet-deep-learning.pdf` first, it's the combined version). |
| `llm/` | LLM-specific books, fine-tuning, courses, and interview prep. |
| `agents/` | Agentic AI design patterns, agent memory, agent surveys. |
| `rag/` | Retrieval-augmented generation books, architecture diagrams, interview prep. |
| `computer-vision/` | Currently just the `YoNet_Presentation.pdf` + `.tsx` pair — a custom YOLO-derived detector and its paired teaching component. |
| `generative-models/` | Currently one file (text-to-image); kept as its own bucket because it's a real, distinct future-growth topic, not because it needs a folder today. |
| `economic-impact/` | AI labor-market/policy reports (currently the Vietnamese translation of an Anthropic economic report) — a different dimension from the technical material above. |

## If you're new to a topic, start here

- **LLM engineering overall:** `llm/AI Engineering - System Design Patterns for LLMs, RAG and Agents.pdf` (2025 edition, covers prompting → fine-tuning → RAG → agents in one book).
- **Agents specifically:** `agents/AI Agents - The Illustrated Guidebook.pdf` (same author pair, illustrated, agent-pattern-focused) before the denser `agents/Toward Efficient Agents...` survey.
- **RAG specifically:** `rag/Retrieval-Augmented Generation Slides.pdf` (course-style intro) before `rag/Master RAG.pdf` or `rag/RAG Architectures for AI Engineers.pdf`.
- **Deep learning fundamentals:** the Stanford CS230 cheatsheet set in `deep-learning/`.

## Cross-references worth knowing

- `llm/AIxFunda_KalyanKS_LLM-Interview-QA.pdf` and `rag/RAG interview questions.pdf` are from the **same newsletter/author** (AIxFunda, Kalyan KS) — same interview-prep series, different topic.
- `agents/AI Agents - The Illustrated Guidebook.pdf` and `llm/AI Engineering - System Design Patterns for LLMs, RAG and Agents.pdf` are from the **same author pair and publisher** (Akshay Pachaar & Avi Chawla, DailyDoseofDS.com) — a two-book series.
- `agents/SoICT-HUST_NgoVanLinh_Advances-in-Memory-Architectures-for-LLM-Agents_2025.pdf` is a seminar deck that *synthesizes* ~16 other arXiv papers on agent memory — useful as a literature-review starting point before reading primary sources.
- A separate, unrelated applied-research collection on transportation ETA/speed-estimation lives at `../research/transportation/` — it uses AI/deep-learning techniques but is organized by transportation-engineering subject, not filed here.

## Flagged for review (`review_status: NEEDS_REVIEW` in root `inventory.json`/`inventory.csv` — see each file's `notes` there for why)

- `agents/Agentic AI.pdf`, `agents/Master All 20 Agentic AI Design Patterns.pdf`, `foundations/Encyclopedia of LLMs and Foundation Models.pdf`, `foundations/Manifold-Constrained Hyper-Connections - mHC.pdf`, `deep-learning/Attention Mechanisms in Neural Networks.pdf` — unverifiable authorship/provenance, not confirmed peer-reviewed or independently published.
- `generative-models/TextToImage - AI Viet Nam.pdf` — no extractable text, content unverified beyond the filename.
- `rag/Master RAG.pdf` — pdftotext output was garbled (font-encoding issue in the PDF itself); title confirmed, author/date not yet.
- The former repo-root file `2025_IT_AI Engineering Guidebook_Akshay Pachaar.pdf` (95.4 MB) was a probable duplicate of `llm/AI Engineering - System Design Patterns for LLMs, RAG and Agents.pdf` (same book, same authors, 14.5 MB) — the smaller copy was kept, the larger one retired, per repository-owner decision.
