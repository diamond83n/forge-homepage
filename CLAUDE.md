# Forge X Lab — CLAUDE.md
## 이 파일은 세션 시작 시 자동으로 읽힘. 수정 금지.

## Identity
- llode / llode.co  (구 Forge X Lab / forgexlab.co — 2026-06 리브랜딩)
- Data infrastructure / experiment registry
- NOT agency, NOT dashboard, NOT analytics tool

## Stack
- GitHub: diamond83n/forge-homepage
- Vercel 자동 배포 (push하면 됨)
- Domain: llode.co (신규 도메인) — 구 forgexlab.co
- Email: hello@forgexlab.co (Google Workspace) — ⚠️ llode.co 메일 미전환 (코드의 이메일 주소는 전환 전까지 forgexlab.co 유지)

## Pricing (확정 2026-04-21)
- Phase 0: Free, 30 brands/6개월, Founder Program, benchmark 참여 필수
- Founding: $197/mo, rate locked for life
- Standard: Coming soon (가격 미확정, Phase 1 이후 결정)
- Growth: Custom
- DEPRECATED: $997 / $1,500 / $2,500 / $4,500

## MVP (확정 2026-04-21)
- Method B: Registry-ready JSON schema
- Input: Meta Ad Library URL (primary), CSV (secondary)
- Output: Brief (자동 2-5분, Free) / Report (D 검증 1-2h, Founding)
- Dev: Claude Code, 4-6주

## Git 규칙
- 작업 후 항상: git add -A && git commit -m "[설명]" && git push
- .env는 절대 커밋 금지
- main 브랜치 직접 push

## 핵심 파일
- index.html: 홈페이지 (light theme)
- index-dark.html: 다크 백업 (공개 안 함)
- forge-thesis.html: thesis 페이지
- Forge-AnalysisEngine-v2_8.json: 룰 엔진 (gitignore됨)

## Visual QA Rule (확정 2026-05-02)
- 홈페이지 시각 수정은 desktop/web 최종 상태만 기준으로 확인한다.
- 중간 캡처 확인을 매번 요청하지 않는다.
- 모바일은 desktop 수정과 분리된 별도 트랙으로 진행한다.
- 모바일 CSS override는 별도 요청 전까지 건드리지 않는다.

## 작업 시작 전 체크
1. git pull 먼저
2. 수정할 파일 확인
3. 작업 후 git push

## Allowed Tools (Always)
- git (add, commit, push, pull, status, log)
- npm / npx (install, run, create)
- node (script execution)
- python / python3 (script execution)
- gh (repo create, auth status)
- cat / ls / grep / find (file reading)
- JSON validation scripts
- Bash general (non-destructive commands)

## Requires Confirmation
- External URL fetch (curl to unknown domains)
- vercel deploy (production push)
- rm -rf (deletion)
