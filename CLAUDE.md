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
- Email: hello@llode.co (Google Workspace + Resend — 2026-06 전환 완료)

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
- index.html: 홈페이지 (현재 라이브)
- preview.html: ⚠️ 홈페이지 리디자인 WIP (Pencil 레퍼런스 기반, 다크 테마) — 배포 전 확정 필요
- forge-thesis.html: thesis 페이지
- Forge-AnalysisEngine-v2_8.json: 룰 엔진 (gitignore됨)

## 홈페이지 리디자인 (나중 작업)
- 레퍼런스: trypencil.com
- 방향: 다크 hero + 크림/다크 섹션 교차 + 모노스페이스 텍스트 + 숫자 메트릭 카드
- WIP: preview.html (canvas 데이터 시스템 + 7 섹션 구조)
- 확정 후 index.html 교체 → 배포

## Visual QA Rule (확정 2026-05-02)
- 홈페이지 시각 수정은 desktop/web 최종 상태만 기준으로 확인한다.
- 중간 캡처 확인을 매번 요청하지 않는다.
- 모바일은 desktop 수정과 분리된 별도 트랙으로 진행한다.
- 모바일 CSS override는 별도 요청 전까지 건드리지 않는다.

## ★ 전략 논의 시 반드시 먼저 읽을 것
- **Live Canvas (단일 진실 소스):** `/Users/diamond/forge-app/docs/llode-live-canvas.md`
  - 핵심 테제, 오픈 이슈, 확정 결정, 마케팅 참조 전부 여기
- **마케팅 콘텐츠 누적:** `/Users/diamond/forge-app/docs/llode-marketing-content.md`
  - 캐러셀/인스타 소재 전부 여기에 추가
- 전략 논의 후 반드시 live-canvas.md 업데이트

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
