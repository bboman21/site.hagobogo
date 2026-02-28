# 작업 이력

## 2026-02-28 15:20 - Figma MCP 서버 설정 추가
- `~/.gemini/antigravity/mcp_config.json`에 Figma Desktop MCP 서버 추가
- SSE(serverUrl) 방식으로 `http://127.0.0.1:3845/mcp` 연결 설정
- Figma Desktop 앱이 실행 중일 때 Antigravity에서 Figma 디자인 데이터에 접근 가능

## 2026-02-28 17:00 - HAGOBOGO 초기 웹페이지 구성
- `site_hagobogo` 프로젝트에 초기 웹페이지를 구성하고 `sphere`, 판매 카운터, 실시간 배경 애니메이션의 기본 구조를 구현
- 브라우저에서 확인 가능한 개발 서버 실행 흐름을 정리하고, 반복적으로 수정 사항을 즉시 확인할 수 있는 작업 환경을 마련

## 2026-02-28 18:00 - sphere, 카운터, 메인 dot 애니메이션 조정
- `sphere`를 완전 불투명 상태로 고정하고, 기존 충돌 아웃라인 효과 및 불필요한 투명도/펄스 애니메이션을 제거
- 메인 `dot`의 head/tail 정렬을 수정하고, tail이 `dot_head` 중심에서 시작해 반대 방향으로 길어지도록 조정
- `dot` 생성 속도, 이동 속도, 충돌 반경, 충돌 후 숫자 증가 로직을 반복 조정
- 카운터 숫자에 하트비트 애니메이션을 적용하고, 확대 비율을 세부 조정

## 2026-02-28 19:00 - sphere_line, 반응형 크기, 충돌 시각 효과 정리
- `sphere` 주변 외곽 원형 라인을 `sphere_line`으로 명명하고, 지름 비율 및 투명도를 세부 조정
- `sphere_line`이 충돌 시 더 하얗게 보이도록 `border-color` 애니메이션으로 수정하고, 크기 펄스도 함께 적용
- `sphere` 지름이 화면 비율에 따라 달라지도록 반응형 크기 계산을 적용
- `dot`과 `sphere` 충돌 시 `sphere_line` 밝기 변화 및 카운터 반응이 자연스럽게 연결되도록 정리

## 2026-02-28 20:00 - dot_empty 전용 애니메이션 분리 및 반사 로직 구현
- 기존 `dot` 애니메이션은 복구하고, `dot_head_line.svg` 기반의 별도 `dot_empty` 애니메이션 엔진을 추가
- `dot_empty` 생성 빈도, 이동 속도, 생성 크기, 크기별 투명도 규칙을 반복 조정
- `dot_empty`가 `sphere` 표시 크기 기준 특정 구간에서 충돌 판정을 받고 반사되도록 구현
- 충돌 후 일시 가속, 이후 3초 자연 감속, 프레임 이탈 후 1초 뒤 삭제 로직을 반영
- `dot_empty`의 색상, z-index, `sphere` 앞/뒤 배치 상태를 반복 수정

## 2026-02-28 21:00 - 레이아웃, 텍스트, CTA, 헤더/푸터 구성
- `sphere`와 하단 텍스트를 하나의 상단 고정 그룹으로 묶고, 화면 수직 변화에 덜 영향을 받는 구조로 재정렬
- `logo_haogobogo.svg`, 우측 상단 `Store`, `Language`, `Menu` 버튼을 추가하고 위치, 크기, 정렬, 호버 색상을 조정
- `HAGOBOGO Cumulative Sales Volume`, `Since 2025`, `Business Inquiries`, `Chatbot`의 위치, 폰트, 색상, 간격을 반복 수정
- 헤더와 `sphere` 사이에 3개 기사 내용이 반복 흐르는 뉴스 티커를 추가하고, 폰트 크기와 기사 간 간격을 조정
- 푸터 문구를 영문 기준 정보로 정리하고, 배경색, 투명도, 높이, 하단 여백, 화면 내 고정 배치를 수정

## 2026-02-28 22:00 - GitHub Pages 및 로컬 실행 구조 정리
- 자산 경로를 절대경로(`/assets/...`)에서 번들 import 기반 상대 경로 구조로 변경해 GitHub Pages 하위 경로에서 깨지지 않도록 수정
- `vite.config.js`에 상대 경로 기반 빌드 설정을 적용하고, 개발용 엔트리 `app.html`과 배포용 `dist/index.html` 생성 흐름으로 분리
- 루트 `index.html`은 빌드 결과 페이지로 리다이렉트되도록 정리
- `package.json`에 `local`, `preview` 스크립트를 추가하고, macOS 더블클릭 실행용 `preview.command`를 추가
- GitHub Pages 업로드용 `public/.nojekyll` 및 실행/배포 안내용 `README.md`를 정리

## 2026-02-28 23:01 - 작업 이력 문서화
- `Docs/work_history.md`에 금일 작업 내용을 요약 기록
- 이후 항목을 시간대별로 다시 나눌 수 있도록 작업 흐름 기준으로 정리 방식 보완

## 2026-02-28 23:06 - Git 저장소 초기화 및 원격 푸시 준비
- `site_hagobogo` 폴더가 Git 저장소가 아닌 상태임을 확인하고, 별도 저장소로 초기화하는 방향으로 정리
- 커밋 대상에서 `node_modules`, `.DS_Store`를 제외하기 위한 `.gitignore`를 추가
- 원격 저장소 `bboman21/site.hagobogo`로 커밋 및 푸시할 수 있도록 로컬 저장소 구성 준비
