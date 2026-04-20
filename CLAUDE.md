# Forge X Lab — CLAUDE.md

## Project
- **Site**: [forgexlab.co](https://forgexlab.co)
- **Repo**: github.com/diamond83n/forge-homepage
- **Stack**: Static HTML/CSS/JS — single-page (`index.html`) + `forge-thesis.html`
- **Deploy**: Vercel (auto-deploy from `main`)

## Structure
```
index.html          # Main landing page
forge-thesis.html   # Thesis/methodology page
og-image.png/svg    # Social sharing assets
favicon-*.png       # Favicons
robots.txt
sitemap.xml
.env.example        # Environment variable reference (commit this)
env.template        # Legacy env reference (same purpose)
```

## Key Sections in index.html
| ID | Section |
|----|---------|
| `#health` | Free brand analysis / Creative Decoder |
| `#how` | How it works |
| `#pricing` | Pricing tiers |
| `#thesis-card` | Our Thesis card |

## Pricing Tiers (as of 2026-04-21)
| Tier | Label | Price | Slots |
|------|-------|-------|-------|
| Phase 0 | Pilot — Free | $0 | First 30 brands |
| Founding | Founding | $97/mo | Brands 31–100, rate locked for life |
| Standard | Standard | $147–297/mo | — |

## Forge Analysis Engine
- `Forge-AnalysisEngine-v2_8.json` — analysis engine schema/config (v2.8, added 2026-04-21)

## Environment
- Copy `.env.example` → `.env` and fill values
- `.env` is gitignored; never commit secrets

## Claude Code Notes
- No build step — edit HTML directly
- Test changes by opening `index.html` in browser or via Vercel preview
- Schema.org structured data lives in `<script type="application/ld+json">` blocks near top of `index.html`
- Update both the visible pricing UI **and** the schema.org `Offer` blocks when changing prices
