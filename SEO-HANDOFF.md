# LLODE 홈페이지 SEO·GEO 수정본 — 2026-10-29

## 상태

후속 배포 요청: 사용자가 이 수정본 배포를 명시적으로 승인했다. 배포 전 `list_project_domains`의 실제 목록을 재확인한 결과 `llode.co`, `www.llode.co`, `forge-homepage.vercel.app`만 포함되며, `forgexlab.co` alias는 이 Vercel 계정에서 404다. 이전 get_project의 확장 domain 목록만으로 공유 배포라고 추정했던 부분은 이 실조회로 좁혔다. www apex 308 설정과 별도 `llode-app` 프로젝트는 변경하지 않는다. 실제 배포 결과는 완료 후 별도 영수증에 기록한다.

로컬 수정·검증 완료. 커밋/푸시/배포/도메인 변경/검색 재색인 요청은 하지 않았다.

홈페이지는 `llode.co`, 비공개 앱은 `app.llode.co`로 분리하는 기존 구조가 맞다. 문제는 홈페이지 안에서만 apex가 www로 리디렉션되는 반면 canonical은 apex를 가리키던 표기 불일치였다. 현재 운영 200 목적지에 맞춰 검색용 URL을 `https://www.llode.co/`로 정리한 수정본이다. 새 홈페이지 주소를 만들거나 앱을 옮기는 작업이 아니다.

## 정확한 소스와 보존 경계

- Vercel `www.llode.co` alias의 deployment: `dpl_ECW8TBVZubgjMTRgnK2uB7KML5Pj`, `forge-homepage` 프로젝트, production `main` SHA `aef9148d95c5cb5f977a1b00a2ceb6e35c4d69a0`.
- 배포본 index/llms/robots/sitemap과 Git `aef9148` 파일의 SHA-256 일치 확인. 반면 `/Users/diamond/forge-homepage`의 현재 디자인 브랜치 index는 실제 운영 파일과 달랐다.
- 이전 디자인 브랜치와 미추적 자료는 그대로 보존했다. 별도 로컬 Git worktree `/private/tmp/llode-homepage-seo-20261029`, `codex/llode-homepage-seo-20261029`를 실제 배포 SHA에서 만들었다. 앱의 role 작업 및 Integration에는 소스 변경 없음.
- 현재 Vercel 프로젝트 등록 목록에는 암호화폐 도메인도 있으므로, **향후 배포 전에 호스트별 라우팅/배포 영향 확인은 여전히 필수**. 이번 소스는 LLODE만 위한 것이며 `forgexlab.co`에 게시할 권한을 뜻하지 않는다.

## 변경

- 3개 공개 페이지의 canonical/OG/기계용 URL을 현재 www 목적지로 통일. app 진입 링크는 동일하게 유지.
- 홈페이지 title/description/OG/Twitter와 실제 보이는 설명을 맞췄다. H1, CSS, 주요 CTA 개수·연결은 유지.
- 홈페이지 JSON-LD를 Organization/WebSite/SoftwareApplication graph로 단순화. 근거 미확인 별점 5/리뷰 1, 가격, 고정 14일, expected-lift 약속, 화면과 대응하지 않는 FAQ/HowTo/Breadcrumb 제거.
- 화면에도 남아 있던 미확정 $97–297을 “To be confirmed”로 변경. 새 가격이나 요금제를 결정하지 않음. 기존 first-loop 무료 안내는 새로 만든 것이 아니라 그대로 유지.
- 변수별 ROAS 원인을 자동으로 입증한다는 소개를 한 변수·고정 조건·관측 결과 범위의 결정으로 조정. Brief → Run → Record → Decision Router → 다음 실험을 실제 본문에 설명. Adopt/Retain/Continue/Rerun과 “lift alone does not establish a winner”를 명시.
- Benchmark는 비교/동의/개인정보 게이트에 따름을 설명. 미래 예측은 thesis와 llms에서 미래 방향으로 분리. thesis의 누적 수치는 illustrative roadmap으로 표시. 샘플/시뮬레이션을 live peer 데이터로 표현하지 않음.
- llms.txt와 sitemap을 확인된 공개 3개 페이지에 맞춤. sitemap lastmod는 실제 본문 변경일을 추정해서 넣지 않음.
- robots는 기존 공개 Allow를 유지하되 하나의 공통 그룹으로 묶어 사설 경로 제외가 named AI crawler에도 무시되지 않도록 정리. 모델 학습 허용을 확대하는 별도 승인은 아니다. robots는 보안/인증이 아님.
- 기존 OG 이미지 실제 1200×630 확인 및 시각 검토: 제품 목적 문구와 일치하며 성능 수치 없음. 오래된 홈페이지 wordmark를 사용하지만 이번 작업에서 브랜드 디자인을 교체하지 않음.
- 새 검사 스크립트/인계 문서/환경파일은 `.vercelignore`로 배포 대상에서 제외 준비. 운영 인증·앱 noindex·API·브랜드 저장·비밀키는 변경하지 않음.

## 검증 영수증

- `node scripts/check-seo.mjs`: 3페이지 canonical/description/본문/JSON-LD 일치, 총 4개 JSON-LD block 파싱, inline JS 문법, 기존 CSS/H1/CTA·앱 href 보존, private app sitemap 배제, four-action/미래 분리, OG 치수 PASS.
- Python `xml.etree.ElementTree` sitemap XML 파싱 PASS, `git diff --check` PASS.
- localhost 정적 서버 3112, PID 95483, 명시적 document root가 이 worktree. 모델/Airtable/앱 데이터 API 호출 없음.
- 실제 브라우저: 홈페이지 데스크톱, 3페이지 모바일 390×844 확인. 각 모바일 document scrollWidth 375 / innerWidth 390, 수평 넘침 없음. 홈페이지 console error 없음. viewport 원복.
- 기존 디자인 CSS를 바꾸지 않았으며 실제 기본 글자 크기를 유지했다. 모든 오래된 마케팅 도식/모션을 새 제품 설계로 재제작한 것은 아니다. Search Console 검사·AI 인용·Google rich-result test는 수행하지 않았고 자동 단위 검사로 대신했다고 주장하지 않는다.
- 캡처: `/private/tmp/llode-seo-before-20261029.png`, `/private/tmp/llode-seo-after-desktop-20261029.png`, `/private/tmp/llode-seo-after-mobile-20261029.png`, `/private/tmp/llode-seo-what-to-test-next.html-mobile-20261029.png`, `/private/tmp/llode-seo-forge-thesis.html-mobile-20261029.png`.

## 다음 시작점

이 소스의 변경 범위 재확인 → 사용자 요청 시 commit/push → LLODE 도메인만 대상으로 하는 preview/production 경계 확인 → 별도 배포 승인 → 운영 www/apex/하위 페이지/robots/sitemap/llms 응답 확인 → 소유자가 Search Console 재크롤 요청. 새 DB, 결제, 모델 연결은 이 SEO 변경의 전제 조건이 아니다.

공식 근거: https://developers.google.com/search/docs/appearance/ai-features , https://developers.google.com/search/docs/crawling-indexing/block-indexing , https://developers.google.com/search/docs/appearance/structured-data/sd-policies . llms/structured data는 검색·AI 인용을 보장하지 않는다.
