# Research

A single, distinct applied-research collection, not a general "papers" dump — every file here concerns transportation: ETA (estimated time of arrival) prediction or vehicle/vessel/bus speed estimation from sensors and video. It reads like it was assembled for one specific research or thesis project. General AI/LLM/agents research papers live in `../artificial-intelligence/`, not here — see the root `KNOWLEDGE-ARCHITECTURE.md` §3 for why this folder was split out from the old `Paper/` document-type bucket instead of being folded into the AI tree.

## `transportation/`

- **`eta-prediction/`** (13 files) — predicting arrival time for flights, buses, vessels, and shipments using regression, deep neural networks, transformers, and boosting models.
- **`speed-estimation/`** (19 files) — estimating vehicle speed from camera/video using homography, optical flow, and detection+tracking pipelines (YOLO, DeepSORT, R-CNN). Includes one survey (`Vision-based vehicle speed estimation_ A survey.pdf`) — read that first for a taxonomy of the field before the primary papers.
- **`dataset_traffic_images_videos_full_with_api_extended.xlsx`** — a curated list of public traffic datasets/APIs (BDD100K, KITTI, UA-DETRAC, AI City Challenge, and several traffic-data APIs) with links and licensing notes. A planning artifact for this collection, not a paper.

## Known issues in this collection (`review_status: NEEDS_REVIEW` in root `inventory.json`/`inventory.csv` — see each file's `notes` there for full detail)

Five papers were originally filed under the old `time of arrival/` folder purely by keyword overlap on "arrival" — they're real, well-attributed papers, just not about vehicle/traffic ETA:

- `transportation/eta-prediction/Location Estimation via the Direction of Arrival Techniques Based on the IEEE 802.11n WLANs.pdf` — WLAN indoor localization.
- `transportation/eta-prediction/Super-Resolution Time-of-Arrival Estimation using Neural Networks.pdf` — RF/wireless localization.
- `transportation/eta-prediction/The Impact of Multipath Information on Time-of-Arrival Estimation.pdf` — UWB ranging theory.
- `transportation/speed-estimation/A Novel Approach for On-road Vehicle Detection and Tracking.pdf` and `transportation/speed-estimation/Vehicle detection and tracking using homography-based plane rectification and particle filtering.pdf` — vehicle detection/tracking supporting references, not ETA-specific themselves.

They're left in place (moving 5 papers for a new one-off "RF localization" top-level category isn't worth it) but are worth knowing about if you're citing this collection as "transportation ETA papers" specifically.

Two filename corrections were made during migration after content inspection caught real mismatches:
- `transportation/eta-prediction/Estimated Time of Arrival (ETA) Performance System Comparative Evaluation.pdf` — was misfiled as "...Real-Time Path-Level Speed Computation.pdf"; that title doesn't appear anywhere in the actual content (a 2015 MITRE aviation FMS presentation).
- `transportation/eta-prediction/Deep Encoder Cross Network for Estimated Time of Arrival.pdf` — filename was truncated (missing "of Arrival").

One duplicate was resolved during migration: a vehicle-speed paper existed twice under two different filenames (byte-identical). The mislabeled copy was removed; `transportation/speed-estimation/Video-Based Vehicle Speed Estimation Using Speed Measurement Metrics.pdf` (the filename that actually matches the content) was kept.
