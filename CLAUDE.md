# llode — CLAUDE.md
## 세션 시작 시 자동 로드. 사용자 요청 시에만 갱신. (마지막 정리: 2026-07-07)

## 저장소 범위 (혼동 방지)
- **이 repo = forge-homepage = 마케팅 사이트** (index.html, Vercel 자동배포). 제품 앱 아님.
- **제품 앱 = /Users/diamond/forge-app** (Next.js LLODE, 활성 브랜치 `codex/result-comparison-clarity`).
- 앱/Record/Benchmark/배포 작업은 forge-app에서. 이 repo AGENTS.md의 checkout-lock 참조.

## Identity
- llode / llode.co (구 Forge X Lab / forgexlab.co — 2026-06 리브랜딩)
- Data infrastructure / experiment registry
- NOT agency, NOT dashboard, NOT analytics tool

## Stack
- GitHub: diamond83n/forge-homepage
- Domain: llode.co (구 forgexlab.co)
- Email: hello@llode.co (Google Workspace + Resend, 2026-06 전환 완료)
- 배포: main push = Vercel 프로덕션 자동배포 (아래 Git 규칙의 ⚠️ 참조)

## Pricing (확정 2026-04-21)
- Phase 0: Free, 30 brands/6개월, Founder Program, benchmark 참여 필수
- Founding: $197/mo, rate locked for life
- Standard: Coming soon (Phase 1 이후 가격 결정)
- Growth: Custom
- (역사·비활성) DEPRECATED tiers: $997 / $1,500 / $2,500 / $4,500

## MVP (확정 2026-04-21)
- Method B: Registry-ready JSON schema
- Input: Meta Ad Library URL (primary), CSV (secondary)
- Output: Brief (자동 2-5분, Free) / Report (D 검증 1-2h, Founding)
- (역사) 최초 개발 견적 4-6주 — 앱은 forge-app에 구축됨, 현재 진행 중

## Git 규칙 (통합)
- 작업 시작: `git pull` 먼저 → 수정할 파일 확인
- 작업 후: 리뷰한 파일만 스테이징해 커밋·푸시 (`git add -A` 지양 — 의도치 않은 파일 섞임 방지)
- main 브랜치 직접 push
- .env는 절대 커밋 금지
- ⚠️ main push = 프로덕션 자동배포다. 즉 push 자체가 배포 행위 → 글로벌 규칙의 "배포 전 확인"이 여기에 적용됨. 라이브에 나가는 push는 사용자 확인 후.

## 핵심 파일
- index.html: 홈페이지 (현재 라이브)
- preview.html: ⚠️ 홈페이지 리디자인 WIP (Pencil 레퍼런스, 다크 테마) — 배포 전 확정 필요
- forge-thesis.html: thesis 페이지
- Forge-AnalysisEngine-v2_8.json: 룰 엔진 (gitignore됨)

## 홈페이지 리디자인 (나중 작업)
- 레퍼런스: trypencil.com
- 방향: 다크 hero + 크림/다크 섹션 교차 + 모노스페이스 텍스트 + 숫자 메트릭 카드
- WIP: preview.html (canvas 데이터 시스템 + 7 섹션 구조)
- 확정 후 index.html 교체 → 배포

## Visual QA Rule (확정 2026-05-02)
- 시각 수정은 desktop/web 최종 상태만 기준으로 확인. 중간 캡처를 매번 요청하지 않음.
- 모바일은 desktop과 분리된 별도 트랙. 모바일 CSS override는 별도 요청 전까지 안 건드림.

## ★ 전략 논의 시 반드시 먼저 읽을 것
- **Live Canvas (단일 진실 소스):** `/Users/diamond/forge-app/docs/llode-live-canvas.md`
  - 핵심 테제, 오픈 이슈, 확정 결정(vs 미확정 제안 구분), 마케팅 참조 전부 여기
- **마케팅 콘텐츠 누적:** `/Users/diamond/forge-app/docs/llode-marketing-content.md`
- **작업 방식 교훈:** `/Users/diamond/forge-app/HANDOFF.md`
- 전략 논의 후 반드시 live-canvas.md 업데이트

## Allowed Tools (확인 없이 실행)
- git (add, commit, push, pull, status, log) · npm / npx · node · python3 · gh
- 파일 읽기(cat / ls / grep / find) · JSON 검증 · 비파괴 Bash 일반

## Requires Confirmation
- 프로덕션 배포 = main push(위 ⚠️) · vercel deploy
- 외부 URL fetch(미지 도메인 curl) · rm -rf 등 삭제
