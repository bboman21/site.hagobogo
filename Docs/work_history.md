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
- `Docs/work_history.md`에 금일
### 2026-03-02 15:18
- `assets/data/하고보고 제품 입점 제안서_1page.html` 파일의 푸터(footer) 영역 주석 처리 (대장님 직접 수정)
- 제안서 내 특정 카드 섹션의 배경색을 `#ffffff` (투명도 50%)로 수정 요청 반영 중
- `src/index.css` 및 제안서 HTML 스타일 확인 및 수정
항목을 시간대별로 다시 나눌 수 있도록 작업 흐름 기준으로 정리 방식 보완

## 2026-02-28 23:06 - Git 저장소 초기화 및 원격 푸시 준비
- `site_hagobogo` 폴더가 Git 저장소가 아닌 상태임을 확인하고, 별도 저장소로 초기화하는 방향으로 정리
- 커밋 대상에서 `node_modules`, `.DS_Store`를 제외하기 위한 `.gitignore`를 추가
- 원격 저장소 `bboman21/site.hagobogo`로 커밋 및 푸시할 수 있도록 로컬 저장소 구성 준비

## 2026-02-28 23:11 - GitHub 원격 푸시 및 배포 문서 보완
- 로컬 저장소를 초기화하고 `hagobogo Landing Page Production` 커밋을 생성
- 원격 저장소 `https://github.com/bboman21/site.hagobogo.git`의 기존 `Initial commit` 및 `LICENSE`를 보존하기 위해 병합 후 `main` 브랜치로 푸시
- `README.md`를 GitHub Pages 배포 기준 문서로 재정리하고, 현재 저장소 구조에서는 `main` 브랜치의 `/ (root)`를 배포 대상으로 사용하는 것이 맞음을 명시

## 2026-02-28 23:16 - README 배포 URL 추가
- `README.md` 상단에 GitHub Pages 실제 접속 주소 `https://bboman21.github.io/site.hagobogo/dist/index.html`를 추가

## 2026-03-02 16:30 - 제안서 세부 디자인 및 반응형 고도화
- `stat-number` 크기 확대(30pt) 및 `stat-unit` 비율 조정(50%)
- `stat-desc` 및 `.grid-2-item span` 행간 1.2로 최적화
- `introduction-board` 높이 축소(aspect-ratio 210/275)
- `max-width: 400px` 미디어 쿼리 추가로 통계 그리드 3x2 배열 적용
- Dashboard 상단 여백 축소(20px) 및 `benefit-box` 보더 제거
- 모든 수정 사항 GitHub 저장소 업로드 완료

## 2026-02-28 23:23 - sphere 원본 SVG 표시 방식 정리
- `sphere` 렌더에서 `imgSphere.svg` 위에 겹치던 별도 `sphere_line` 레이어를 제거
- 웹페이지에서 `assets/svg/imgSphere.svg` 원본 외형이 그대로 보이도록 `Sphere` 컴포넌트를 단일 이미지 렌더 기준으로 정리

## 2026-02-28 23:25 - sphere_line 복구
- `sphere` 위에 표시되던 추가 원형선 `sphere_line` 레이어를 다시 복구
- 충돌 시 `sphere_line` 애니메이션이 다시 동작하도록 `Dashboard`와 `Sphere` 연결을 원래 구조로 되돌림

## 2026-02-28 23:26 - 페이지 세로 스크롤 복구
- 전역 `overflow: hidden`과 고정 높이 레이아웃을 완화해 마우스 스크롤로 페이지 상하 이동이 가능하도록 수정
- `main-content-stack`을 절대 배치에서 문서 흐름 기반 레이아웃으로 바꿔 푸터까지 포함한 전체 높이가 실제 스크롤 영역이 되도록 정리

## 2026-02-28 23:29 - 푸터 하단 빈 영역 제거
- `site-footer`의 과도한 하단 패딩과 `main-content-stack`의 하단 여백을 제거해 푸터 아래에 비어 보이던 영역이 남지 않도록 수정

## 2026-02-28 23:30 - 푸터 마지막 문장 아래 여백 조정
- `Contact: 070-4239-9899 | help@intin.kr` 문장 아래에 `80px` 높이의 공간이 생기도록 `site-footer` 하단 패딩을 조정

## 2026-02-28 23:32 - sphere 크기 기준을 화면 가로 폭으로 고정
- `Sphere` 크기 계산을 `vmin`에서 `vw` 기준으로 변경해 브라우저 창의 수직 높이 변화가 `sphere` 지름에 영향을 주지 않도록 수정

## 2026-02-28 23:34 - CTA 버튼 반응형 폰트 크기 적용
- `Business Inquiries`, `Chatbot` 버튼에 사용하는 `text-cta-unified` 클래스에 반응형 폰트 크기 규칙을 추가
- 브라우저 폭이 줄어들면 카운터와 같은 브레이크포인트 기준으로 CTA 텍스트 크기도 함께 줄어들도록 정리

## 2026-02-28 23:36 - 헤더 Menu 버튼 제거
- 상단 우측 네비게이션에서 `Menu` 텍스트 버튼을 제거하고 `Store`, `Language` 두 개만 남기도록 수정

## 2026-02-28 23:38 - 헤더 Language 텍스트 변경
- 상단 우측 네비게이션의 `Language` 버튼 텍스트를 `EN`으로 변경

## 2026-02-28 23:39 - Store 아이콘 추가
- 상단 우측 네비게이션의 `Store` 텍스트 오른쪽에 소형 스토어 아이콘을 추가
- 아이콘이 텍스트와 같은 `currentColor`를 사용해 기본 상태와 호버 상태에서 함께 색상이 변하도록 정리

## 2026-02-28 23:52 - Store 아이콘을 Material Symbols로 교체
- `app.html`에 Google Material Symbols Outlined `local_mall` 아이콘 폰트 링크를 추가
- 상단 우측 네비게이션의 `Store` 오른쪽 아이콘을 inline SVG에서 Material Symbols 아이콘으로 변경

## 2026-02-28 23:53 - Store 텍스트 제거
- 상단 우측 네비게이션의 `Store` 버튼에서 텍스트를 제거하고 스토어 아이콘만 남기도록 수정

## 2026-02-28 23:55 - Store 아이콘 기본 색상 명시
- 상단 우측 네비게이션의 스토어 아이콘 기본 색상을 `#4D545A`로 명시적으로 지정

## 2026-02-28 23:55 - EN 버튼 폰트 굵기 조정
- 상단 우측 네비게이션의 `EN` 버튼 폰트 굵기를 `400`으로 조정

## 2026-02-28 23:57 - Store 아이콘 호버 색상 보정
- 상단 우측 네비게이션의 스토어 아이콘 기본 색상은 `#4D545A`로 유지하고, 마우스 오버 및 포커스 시 `#FFFFFF`로 바뀌도록 명시적으로 조정
- `EN` 버튼은 `font-weight: 400` 상태를 유지

## 2026-02-28 23:59 - 헤더 우측 버튼 수평 정렬 보정
- `Store` 아이콘 버튼과 `EN` 텍스트 버튼이 같은 기준선에 정렬되도록 `text-nav-cta`를 `inline-flex` 정렬 구조로 조정
- 스토어 아이콘도 내부에서 중앙 정렬되도록 클래스 구성을 보완

## 2026-02-28 23:59 - EN 버튼 폰트 굵기 재조정
- 상단 우측 `EN` 버튼의 폰트 굵기를 `500`으로 변경

## 2026-03-01 00:10 - EN 버튼 폰트 굵기 강화
- 상단 우측 `EN` 버튼의 폰트 굵기를 `900`으로 변경

## 2026-03-01 00:12 - Barlow Condensed 전체 웨이트 로드
- `app.html`의 Google Fonts 로드 설정을 `100`부터 `900`까지 전체 웨이트를 포함하도록 확장
- 개별 텍스트 요소에 설정한 `font-weight` 값이 실제 폰트 파일로 반영되도록 정리

## 2026-03-01 00:24 - 헤더 공통 네비게이션 굵기 조정
- `.text-nav-cta`의 `font-weight`를 `600`으로 변경
- 우상단 헤더 버튼에 적용되는 공통 기본 굵기를 상향 조정

## 2026-03-01 00:25 - 헤더 공통 네비게이션 굵기 재조정
- `.text-nav-cta`의 `font-weight`를 `400`으로 변경

## 2026-03-01 00:27 - Store 아이콘 외부 링크 연결
- 상단 우측 스토어 아이콘을 버튼에서 외부 링크로 변경
- 클릭 시 `https://hagobogo.me` 사이트가 별도 창(새 탭)으로 열리도록 `target="_blank"`와 `rel` 속성을 적용

## 2026-03-01 00:31 - sphere 중앙 숫자 명칭 부여
- `sphere` 위에 배치된 중앙 카운터 숫자 요소에 `sphere_count` 클래스명을 추가

## 2026-03-01 00:31 - sphere_count 브라우저 저장 유지
- 중앙 카운터 값(`sphere_count`)이 새로고침 후에도 유지되도록 `localStorage` 기반 저장/복원 로직을 `Dashboard`에 추가
- 저장소 접근이 제한된 환경에서도 기본 카운터가 동작하도록 예외 처리 포함

## 2026-03-01 00:44 - 다국어 전환 드롭다운 및 번역 구조 추가
- 우상단 `EN` 버튼을 드롭다운 트리거로 변경하고 `ES`, `FR` 선택 메뉴를 추가
- 선택한 언어가 `localStorage`에 저장되어 새로고침 후에도 유지되도록 구성
- 뉴스 티커, `HAGOBOGO Cumulative Sales Volume`, `Since 2025`, CTA 버튼, 푸터 문구를 번역 사전 기반으로 전환되도록 정리

## 2026-03-01 00:49 - 한국어 번역 옵션 추가
- 언어 드롭다운 옵션에 `KR`을 추가
- 카운터 보조 문구, 뉴스 티커, CTA 버튼, 푸터 문구의 한국어 번역 세트를 추가

## 2026-03-01 00:51 - 한국어 전용 Pretendard 폰트 적용
- `app.html`에 Pretendard 웹폰트 링크를 추가
- `KR` 언어 선택 시 루트에 `lang-kr` 클래스를 적용하고, 카운터/보조문구/CTA/뉴스/푸터가 Pretendard로 렌더되도록 스타일을 정리

## 2026-03-01 00:54 - 스페인어 언어 코드 정정
- 스페인어 언어 선택 코드를 `ES` 기준으로 정리
- 브라우저 저장값도 `ES` 기준으로 일관되게 동작하도록 언어 코드를 정리

## 2026-03-01 00:56 - 언어 드롭다운 배경 및 라운드 조정
- 언어 선택 드롭다운 메뉴 배경색을 `#D0D4DA`로 변경
- 드롭다운 메뉴 코너 라운드를 `16px`로 조정

## 2026-03-01 00:58 - 한국어 모드 언어 드롭다운 폰트 예외 처리
- `KR` 언어 선택 시에도 언어 드롭다운 메뉴와 항목 폰트는 `Barlow Condensed`를 유지하도록 오버라이드 규칙 추가

## 2026-03-01 00:59 - 한국어 모드 sphere_count 폰트 예외 처리
- `KR` 언어 선택 시에도 중앙 카운터 숫자(`sphere_count`)는 `Barlow Condensed`를 유지하도록 예외 규칙 추가

## 2026-03-01 01:00 - 한국어 모드 현재 언어 버튼 폰트 예외 처리
- 현재 선택 언어를 표시하는 상단 버튼에도 식별 클래스를 추가
- `KR` 언어 선택 시 상단 `KR` 버튼 폰트 역시 `Barlow Condensed`를 유지하도록 예외 규칙 보완

## 2026-03-01 08:32 - AGENTS 기준 문서 언어 및 코드 주석 언어 정리
- `README.md`의 배포 및 실행 설명을 모두 한국어 문서로 재작성
- `useDotEngine.js`, `Dashboard.jsx`, `vite.config.js`에 남아 있던 영어 주석을 모두 한국어 주석으로 정리
- 동작 로직은 바꾸지 않고 문서 표현과 주석 언어만 전역 `AGENTS.md` 기준에 맞춰 정리

## 2026-03-01 08:36 - 번역 데이터 전용 파일 분리
- `Dashboard.jsx` 안에 있던 언어 옵션과 번역 사전을 `src/i18n/translations.js` 파일로 분리
- `Dashboard`는 번역 데이터를 직접 선언하지 않고 가져다 쓰도록 정리해 컴포넌트 책임을 단순화
- 기본 언어 값도 번역 전용 파일에서 함께 관리하도록 구조를 정리

## 2026-03-01 09:10 - 스페인어 언어 코드 흔적 정리
- 코드와 작업 기록에 남아 있던 이전 스페인어 언어 코드 표기를 모두 `ES` 기준으로 정리
- `Dashboard`의 과거 언어 코드 호환 처리도 제거해 현재 언어 저장 로직을 단순화

## 2026-03-01 14:26 - Business Inquiries 팝업 구현 계획서 작성
- 현재 세션에는 Figma MCP가 연결되어 있지 않아 실제 프레임 원본 분석은 하지 못함
- 대장님이 설명한 팝업 특성과 현재 랜딩 페이지 구조를 기준으로 `Business Inquiries` 모달 구현 계획서를 `Docs/business_inquiries_popup_plan.md`에 작성
- 오버레이, 입력 항목, 상태 흐름, 접근성, 구현 단계, 후속 확인 항목까지 포함해 실제 구현 전 기준 문서로 정리

## 2026-03-01 14:48 - 첨부 이미지 기준 팝업 계획서 보정
- Figma MCP를 사용하지 않고 첨부된 `Business Inquiries` 팝업 이미지를 직접 기준으로 계획서를 다시 정리
- 입력 필드 순서, 카드 크기감, `0/3000` 글자 수 표시, `Cancel`/`Save` 버튼 배치 등 이미지에 보이는 구조를 구현 기준으로 구체화
- 기존 추상 계획을 이미지 중심의 실제 구현 계획서로 교체

## 2026-03-01 14:58 - 1차 구현 범위와 실제 작업 계획 세분화
- `Business Inquiries` 팝업 계획서에 `1차 구현 범위`와 `2차 고도화 범위`를 구분해 추가
- `Dashboard`, `InquiryModal`, `translations`, `index.css` 기준으로 실제 코드 작업 순서를 단계별로 세분화
- 바로 구현에 착수할 수 있도록 1차 구현용 체크리스트까지 문서에 포함

## 2026-03-01 15:00 - Business Inquiries 팝업 1차 구현
- `InquiryModal.jsx`를 추가해 오버레이, 중앙 카드, 입력 필드 6개, `0/3000` 카운터, `Cancel`/`Save` 버튼을 포함한 1차 팝업 UI를 구현
- `Dashboard.jsx`에서 `Business Inquiries` 버튼과 팝업 열기/닫기를 연결하고 현재 언어 번역 데이터를 팝업에 전달
- `translations.js`에 팝업 제목, 필드 라벨, 버튼 문구, 기본 오류 문구를 각 언어별로 추가
- `index.css`에 팝업 전용 스타일, 오류 스타일, 반응형 스타일을 추가해 첨부 이미지와 유사한 시각 구조를 구현

## 2026-03-01 15:03 - Business Inquiries 팝업 시각 보정
- 팝업 오버레이의 어두움과 블러 강도를 조정해 배경이 더 눌려 보이도록 보정
- 카드 라운드, 내부 여백, 제목 크기, 라벨 크기, 입력창 높이와 배경 톤을 첨부 이미지에 더 가깝게 조정
- `Cancel`과 `Save` 버튼의 크기, 간격, 외곽선/배경 톤을 정리해 이미지와 유사한 무게감으로 보정
- 팝업이 열렸을 때 배경 스크롤이 잠기도록 처리

## 2026-03-01 15:04 - Business Inquiries 팝업 비례 미세 조정
- 첨부 이미지 비율에 맞춰 카드 폭, 내부 패딩, 제목 크기, 라벨 크기, 입력창 높이를 한 단계 더 정리
- textarea 높이와 버튼 크기를 줄여 전체 화면 비례가 실제 레퍼런스와 더 가깝게 보이도록 보정
- 작은 화면에서도 같은 비례감을 유지하도록 반응형 값도 함께 조정

## 2026-03-01 15:07 - 팝업 제목 폰트 굵기 조정
- `Business Inquiries` 팝업 제목의 폰트 굵기를 `600`에서 `400`으로 조정

## 2026-03-01 15:08 - 팝업 필드 라벨 폰트 조정
- `Name`, `Position`, `Title`, `Company Name`, `Email`, `Inquiry` 라벨의 폰트 크기를 `24px`로 조정
- 같은 라벨의 폰트 굵기를 `400`으로 조정

## 2026-03-01 15:11 - 팝업 입력창 치수 조정
- 일반 입력창의 최소 높이를 `48px`로 조정
- 일반 입력창 내부 패딩을 `12px 12px`로 조정
- 입력창 코너 라운드를 `12px`로 조정

## 2026-03-01 15:13 - 팝업 입력 포커스 이동 문제 보정
- 입력 필드 전체를 감싸던 `label` 구조를 `label htmlFor + input id` 구조로 정리
- 일반 입력창에서 `Enter` 키가 폼 제출로 해석되지 않도록 막아 입력 중 포커스가 튀는 현상을 줄이도록 보정

## 2026-03-01 15:16 - 팝업 입력 포커스 재이동 원인 수정
- 배경 카운터 갱신으로 `Dashboard`가 다시 렌더될 때 모달에 전달하는 `onClose` 함수가 매번 새로 만들어지던 구조를 수정
- `Dashboard`의 팝업 닫기 함수를 `useCallback`으로 안정화해 모달 효과가 불필요하게 다시 실행되지 않도록 보정
- `InquiryModal`의 초기 포커스/스크롤 잠금 효과와 `Esc` 키 이벤트 효과를 분리해 `Name` 입력창으로 재포커스되는 경로를 차단

## 2026-03-01 15:20 - 팝업 최대 가로폭 축소
- `Business Inquiries` 팝업 카드의 최대 가로폭을 `760px`에서 `640px`로 조정

## 2026-03-01 15:21 - 팝업 입력창 높이 축소
- 일반 입력창 높이를 기존 대비 약 20% 줄이기 위해 최소 높이를 `48px`에서 `38px`로 조정

## 2026-03-01 20:43 - 팝업 일반 입력창 최소 높이 재조정
- 일반 입력창의 `min-height`를 `38px`에서 `32px`로 조정

## 2026-03-01 20:46 - Inquiry 입력창 치수 재조정
- `Inquiry` textarea의 `min-height`를 `270px`에서 `220px`로 조정
- `Inquiry` textarea의 내부 패딩을 `12px 12px`로 조정

## 2026-03-01 20:50 - 엔터키 입력창 이동 기능 추가
- 일반 입력창에서 `Enter`를 누르면 아래 입력창으로 포커스가 이동하도록 필드 순서 기반 로직 추가
- 마지막 `Inquiry` 입력창은 다음 필드가 없으므로 기존 위치를 유지하도록 구성

## 2026-03-01 22:00 - Vercel + Resend 구현 구조도 문서 작성
- `Business Inquiries` 메일 발송 기능을 `GitHub Pages + Vercel 서버리스 함수 + Resend` 조합으로 구현하는 구조도를 `Docs/business_inquiries_resend_vercel_plan.md`에 작성
- 프론트엔드, 서버리스 API, Resend의 역할과 데이터 흐름을 실제 프로젝트 기준 파일 구조로 정리
- 환경 변수, CORS, 1차 구현 범위와 2차 고도화 범위까지 포함해 운영 가능한 구조를 문서화

## 2026-03-01 22:03 - Vercel 서버리스 1차 구현 계획서 작성
- `Business Inquiries` 메일 발송 기능의 1차 구현 범위를 실제 파일 단위와 구현 순서 기준으로 세분화한 `Docs/business_inquiries_vercel_implementation_plan.md` 문서를 작성
- `InquiryModal`, `inquiryApi`, `api/business-inquiry.js`, `translations.js`가 각각 어떤 책임을 가지는지 정리
- Vercel 배포 준비 항목, 운영 테스트 체크리스트, 구현 중 자주 막히는 지점까지 포함해 바로 착수 가능한 계획서로 구체화

## 2026-03-01 22:07 - Business Inquiries 메일 전송 1차 구현
- `src/lib/inquiryApi.js`를 추가해 `Business Inquiries` 팝업이 서버리스 메일 API를 호출할 수 있는 프론트 전송 유틸을 분리
- `api/business-inquiry.js`를 추가해 Vercel 서버리스 함수에서 입력값 검증 후 Resend HTTP API를 호출하는 메일 발송 구조를 구현
- 수신 이메일은 `BUSINESS_INQUIRY_TO_EMAIL` 환경 변수가 없을 경우 `bboman21@gmail.com`을 기본값으로 사용하도록 구성
- `InquiryModal.jsx`에 제출 중 상태, 성공/실패 메시지, 자동 닫기 흐름을 추가하고 `translations.js`에 전송 상태 문구를 각 언어별로 정리

## 2026-03-01 20:54 - Inquiry 글자 수 위치 보정
- `Inquiry` 글자 수 카운터를 아래로 `4px` 이동해 시각 정렬을 보정

## 2026-03-01 20:59 - 필수 입력창 내부 오류 문구 적용
- `name`, `companyName`, `email`, `inquiry`가 비어 있는 상태에서 `Save`를 누르면 입력창 내부에 `Required field` 문구가 보이도록 변경
- 해당 문구 색상을 `#FF444F`로 지정하고 `Pretendard Regular` 계열로 표시되도록 스타일 조정
- 요청 목록에 없는 `title`은 필수 입력 대상에서 제외하고, 이메일 형식 오류는 기존 아래 오류 문구 방식으로 유지

## 2026-03-01 21:03 - 입력창 본문 폰트 조정
- 일반 입력창과 `Inquiry` textarea의 본문 입력 폰트를 `Pretendard`로 변경
- 입력창 본문 폰트 크기를 `16pt` 기준인 `21.333px`로 조정

## 2026-03-01 21:08 - 입력창 경고 메시지 위치 및 문구 방식 변경
- 필수 입력 오류와 이메일 형식 오류를 입력창 내부 placeholder 대신 라벨 우측 끝 경고 메시지 방식으로 변경
- `Name`, `Company Name`, `Email`, `Inquiry`의 비어 있는 상태는 `Required field`로 표시하고, `Email` 형식 오류는 `Not an email format`으로 표시
- 경고 메시지 스타일을 `#FF444F`, `Pretendard Regular`, `14pt` 기준으로 정리

## 2026-03-01 21:12 - 경고 메시지 크기 및 Inquiry 카운터 위치 조정
- 라벨 우측 경고 메시지 폰트 크기를 `12pt` 기준인 `16px`로 조정
- `Inquiry` 글자 수 카운터를 라벨 줄에서 textarea 하단 우측으로 이동

## 2026-03-01 21:14 - 경고 문구 수직 위치 보정
- 라벨 우측 경고 문구를 아래로 `6px` 이동해 시각 정렬을 보정

## 2026-03-01 21:21 - Job Title 문구 변경 및 Position 항목 제거
- 팝업 입력 항목의 `Title` 라벨을 `Job Title` 기준으로 정리
- `Position` 입력 항목을 제거하고 상태 구조와 엔터 이동 순서도 함께 정리

## 2026-03-01 21:43 - Business Inquiries 메일 발송 API 구조 설계 문서 작성
- `Business Inquiries` 팝업 데이터를 특정 이메일 주소로 보내기 위한 백엔드 API 구조 설계를 `Docs/business_inquiries_mail_api_plan.md`에 문서화
- 프론트엔드 역할, 백엔드 역할, API 명세, 보안, 메일 서비스 선택, 단계별 구현 계획까지 포함해 설계 문서로 정리

## 2026-03-01 22:15 - 기술 용어 및 장애 상황 설명
- 샌드박스 제한, Git 인덱스 잠금, 네트워크 제한 등 어려운 기술 용어를 대장님이 이해하기 쉽게 비유를 들어 설명함

## 2026-03-01 22:18 - Vercel 배포 설정 문서 작성
- `Business Inquiries` 메일 전송 기능을 실제 운영 환경에 올리기 위한 `Docs/business_inquiries_vercel_deployment_setup.md` 문서를 작성
- Vercel 프로젝트 생성 절차, `RESEND_API_KEY`, `BUSINESS_INQUIRY_TO_EMAIL`, `BUSINESS_INQUIRY_FROM_EMAIL` 설정값을 정리
- `VITE_BUSINESS_INQUIRY_API_URL`이 Vercel 비밀 환경 변수가 아니라 GitHub Pages 프론트 빌드 시점에 주입해야 하는 공개 API 주소라는 점을 분리해서 설명

## 2026-03-01 22:21 - README 메일 전송 배포 요약 추가
- `README.md`에 `Business Inquiries` 메일 전송용 `GitHub Pages + Vercel + Resend` 배포 요약 섹션을 추가
- Vercel 환경 변수와 `VITE_BUSINESS_INQUIRY_API_URL`의 역할 차이를 짧게 정리하고 운영 빌드 예시 명령을 함께 기록

## 2026-03-01 22:28 - 이메일 전송 구현 마무리 보강
- `InquiryModal.jsx`에서 메일 전송 시 `submittedAt` 값을 함께 보내도록 보강
- `api/business-inquiry.js` 메일 본문에 제출 시각을 포함해 운영자가 문의 접수 시점을 바로 확인할 수 있도록 정리
- 루트 `.env.example` 파일을 추가해 Resend, 수신 주소, 발신 주소, `VITE_BUSINESS_INQUIRY_API_URL` 설정 예시를 한 곳에 정리

## 2026-03-01 22:32 - 배포 설정 파일 추가
- `vercel.json`을 추가해 `api/business-inquiry.js` 서버리스 함수의 실행 시간을 명시적으로 관리하도록 정리
- `.env.production.example` 파일을 추가해 GitHub Pages 운영 빌드 시 필요한 `VITE_BUSINESS_INQUIRY_API_URL` 예시 값을 분리

## 2026-03-01 22:40 - 메일 전송 한 장 체크리스트 작성
- `Docs/business_inquiries_launch_checklist.md` 문서를 추가해 Vercel 클릭 순서, 환경 변수 최종값, Resend 도메인 인증 순서, 운영 테스트 절차를 한 장짜리로 정리
- 초보자 기준으로 `Add New... > Project`, `Import`, `Settings > Environment Variables` 등 실제 Vercel 웹 화면에서 눌러야 할 흐름을 포함해 설명

## 2026-03-02 02:03 - 공개 토큰 검증 제거로 문의 저장 경로 단순화
- 프런트 번들에 포함되는 `requestToken`은 비밀값 역할을 하지 못하고 운영 장애만 만들고 있어 `src/lib/inquiryApi.js`에서 요청 토큰 전송과 필수 검사를 제거
- `apps-script/business-inquiry/Code.gs`에서도 `requestToken` 비교 검증을 제거해 문의 데이터가 URL만 맞으면 바로 시트에 저장되도록 단순화
- `.env.local`, `.env.production`, `.env.example`, `.env.production.example`에서 `VITE_BUSINESS_INQUIRY_REQUEST_TOKEN` 항목을 제거하고 `npm run build`로 새 번들에 토큰 관련 문자열이 남지 않는 것을 확인

## 2026-03-02 02:15 - 새 웹앱 URL 기준 로컬 서버 재시작 및 운영 번들 갱신
- `.env.local`, `.env.production`에 새 Apps Script 웹앱 URL `AKfycbwK1C4Ps8LWZuaLs7qJDwfQ4eqCI88BIGP4WatdWMkqM0BL_kOl0ycPXfyFraQH8vvS`가 정확히 반영된 것을 확인
- 기존 Vite 개발 서버를 종료하고 `npm run dev -- --host 127.0.0.1`로 다시 시작해 `http://127.0.0.1:5173/`에서 새 환경값 기준으로 로컬 확인이 가능하도록 정리
- `npm run build`를 다시 실행해 `dist/assets/app-De1ia2SL.js` 운영 번들에 새 웹앱 URL이 포함되고 직전 URL 문자열은 제거된 것을 확인

## 2026-03-02 14:04 - Figma MCP 플러그인 연결 설정
- Bun 런타임 `1.3.10`을 `~/.bun/bin/bun`에 설치하고 `~/.zshrc` PATH에 등록
- `~/.gemini/antigravity/mcp_config.json`의 기존 `figma` SSE 설정(`http://127.0.0.1:3845/mcp`)을 `bunx cursor-talk-to-figma-mcp@latest` 기반 MCP 서버 설정(`TalkToFigma`)으로 교체
- `bunx cursor-talk-to-figma-socket` 명령으로 WebSocket 서버를 포트 `3055`에서 실행해 Figma 플러그인 연결 준비 완료

## 2026-03-02 14:20 - 로컬 개발 서버 실행
- 프로젝트 실행 스크립트를 확인해 `npm run dev`로 개발 서버를 시작하는 구조임을 점검
- 현재 실행 환경에서 바로 확인할 수 있도록 로컬 개발 서버를 실행하고 접속 주소를 확인

## 2026-03-02 16:28 - 현재 작업본 커밋 및 푸시 준비
- `src/components/Dashboard.jsx`, `src/index.css` 수정 사항과 신규 제안서 자료 파일, 챗봇 버튼 SVG 파일이 커밋 대상인지 점검
- 저장소가 `main` 브랜치와 `origin` 원격을 사용 중인 것을 확인하고 현재 작업본 전체를 커밋해 푸시하는 작업을 준비

## 2026-03-02 14:22 - 챗봇 플로팅 버튼 우측 하단 배치
- 피그마 `btn_chatbot` 프레임에서 레오 캐릭터를 SVG로 추출해 `assets/svg/btn_chatbot_leo.svg`에 저장
- `Dashboard.jsx`에서 기존 중앙 CTA 영역의 `Chatbot` 텍스트 버튼을 제거하고, 화면 우측 하단 고정 플로팅 원형 버튼(`chatbot-fab`)으로 교체
- `index.css`에 `.chatbot-fab` 스타일 추가: `position: fixed`, 72px 원형, 흰색 배경, 호버 시 확대 및 시안 그림자, 모바일 대응(60px)
- 브라우저에서 확인 결과 우측 하단에 레오 캐릭터 아이콘이 정상 배치됨

## 2026-03-02 14:33 - 챗봇 버튼 아이콘 교체
- 직접 작성한 `btn_chatbot_leo.svg`에서 대장님이 준비한 `btn_chatbot.svg`로 챗봇 버튼 아이콘을 교체

## 2026-03-02 14:36 - 챗봇 버튼 스타일 보정
- 버튼 크기를 72px → 90px로 확대
- SVG 자체에 흰 원이 포함되어 이중 테두리가 보이는 문제를 해결하기 위해 버튼 배경을 `transparent`로 변경
- 아이콘 원형 클리핑(`border-radius: 50%`)을 제거하고, `drop-shadow`로 자연스러운 그림자만 유지

## 2026-03-02 14:42 - Business Inquiries 버튼 크기 및 아웃라인 스타일 변경
- `text-cta-unified` 폰트 크기를 기본 48px / ≤900px 32px / ≤400px 24px로 축소
- 1px 아웃라인, `border-radius: 999px` 라운드, 내부 패딩 12px/40px 적용
- 보더 색상이 텍스트 색상과 동일하게 기본 `#4d545a`, 호버 시 `#ffffff`로 전환

## 2026-03-02 14:46 - 하고보고 입점 제안서 그래픽 스타일 통일
- `assets/data/하고보고 제품 입점 제안서_1page.html`의 스타일을 메인 페이지(app.html)와 동일한 디자인 언어로 전면 리디자인
- 폰트를 Noto Sans KR → Barlow Condensed(제목) + Pretendard(본문)으로 변경
- 색상을 진한 파랑 #1e3a8a → 회색 #4d545a(주) + 시안 #2BC4E5(포인트)로 변경
- 카드/테이블에 라운드 8-12px, 반투명 배경, 깔끔한 보더 적용
- 인라인 스타일을 모두 제거하고 정돈된 CSS 클래스 구조로 정리

## 2026-03-02 15:15 - 제안서 타이틀 번호 및 제목 색상 수정
- 제안서 HTML(`assets/data/하고보고 제품 입점 제안서_1page.html`)의 섹션 번호 및 'Stage 1, 2, 3' 라벨 색상을 시안(#2BC4E5)에서 메인 텍스트 색상(#4D545A)으로 수정
- 수정된 HTML을 `public` 폴더에 반영하여 웹페이지에 즉시 적용
- 사용자의 요청에 따라 피그마 UI 작업(콘텐츠 재삽입)은 중단하고 코드 수정 사항만 최종 반영 완료

## 2026-03-02 16:32 - Business Inquiries 이메일 알림 구조 재분석
- 현재 프런트의 `VITE_BUSINESS_INQUIRY_API_URL`이 Google Apps Script 웹앱 URL을 가리키는지 확인하고 실제 요청 경로를 점검
- `apps-script/business-inquiry/Code.gs`를 다시 읽어 시트 저장 뒤 `MailApp.sendEmail()`이 이미 들어가 있는 상태인지 검토
- 단순히 “한 줄 추가” 수준이 아니라 현재 배포 경로, 메일 실패 처리, 운영상 한계를 함께 설명할 수 있도록 분석 정리

## 2026-03-02 17:35 - Business Inquiries 간단 운영형 보강
- `apps-script/business-inquiry/Code.gs`에서 수신 이메일을 코드 상수 대신 Script Properties의 `BUSINESS_INQUIRY_NOTIFICATION_EMAIL` 설정값으로 읽도록 변경
- `Business Inquiries List` 시트의 `Status` 열을 찾아 메일 발송 성공 또는 실패 사유를 기록하도록 정리
- Apps Script 응답값을 시트 저장 성공 여부와 메일 발송 성공 여부로 나눠 돌려주도록 변경
- 같은 이메일의 짧은 시간 내 반복 접수를 120초 동안 제한하는 간단한 스팸 방어를 추가

## 2026-03-02 17:40 - Apps Script 메일 배포 가이드 문서 작성
- `Docs/business_inquiries_apps_script_mail_deployment_guide.md` 문서를 추가해 초보자 기준으로 최종 `Code.gs` 붙여넣기, `BUSINESS_INQUIRY_NOTIFICATION_EMAIL` 설정, `Status` 열 확인, 웹앱 재배포, 테스트 순서를 한 장으로 정리

## 2026-03-02 17:50 - Apps Script 웹앱 URL 교체
- `.env.local`, `.env.production`의 `VITE_BUSINESS_INQUIRY_API_URL` 값을 새 Apps Script 웹앱 `/exec` 주소 `AKfycbwlGEs4mvAGsWteL9tw1Xsy5hDMOqubBJF5UAYvizy6cX2W1y3tbMSL3PbB1R5n-_T6` 기준으로 변경

## 2026-03-02 17:53 - Business Inquiries 메일 전송 확인 후 업로드 준비
- Apps Script 기반 `Business Inquiries` 문의가 실제로 메일 전송까지 정상 동작하는 것을 확인
- 현재까지의 Apps Script 보강 코드와 배포 가이드를 GitHub에 업로드하기 위한 커밋 및 푸시 작업을 준비

## 2026-03-02 17:58 - 제안서 HTML 하단 PDF 다운로드 버튼 추가
- `assets/data/하고보고 제품 입점 제안서_1page.html` 하단 푸터를 복원하고 `Download PDF` 버튼을 추가
- 버튼 클릭 시 같은 폴더의 `하고보고 제품 입점 제안서_1page.pdf` 파일이 바로 다운로드되도록 `download` 속성으로 연결
- 인쇄 시 버튼이 보이지 않도록 `@media print`에서 숨김 처리

## 2026-03-02 17:59 - 제안서 하단 다운로드 버튼 중앙 정렬
- 기존 푸터 연락처와 안내 문구는 숨기고 `Download PDF` 버튼만 하단 중앙에 배치되도록 `footer` 정렬과 표시 규칙을 수정

## 2026-03-02 18:00 - 다운로드 버튼 대소문자 및 테두리 조정
- `Download PDF` 버튼의 CSS `text-transform`을 제거해 문구가 정확히 `Download PDF`로 표시되도록 수정
- 버튼 외곽선이 보이지 않도록 `border: none`으로 정리

## 2026-03-02 18:01 - 다운로드 버튼 높이 축소
- `Download PDF` 버튼의 상하 폭이 각각 4px씩 줄어들도록 `min-height`를 `40px`에서 `32px`로 조정

## 2026-03-02 18:01 - 다운로드 버튼 위 가로선 제거
- `assets/data/하고보고 제품 입점 제안서_1page.html`의 `footer` 상단 보더를 제거해 `Download PDF` 버튼 위 가로 라인이 보이지 않도록 정리

## 2026-03-02 18:02 - 다운로드 버튼 위치 하향 조정
- `assets/data/하고보고 제품 입점 제안서_1page.html`의 `.footer-actions`에 `margin-top: 16px`를 추가해 `Download PDF` 버튼 위치를 16px 아래로 이동

## 2026-03-02 18:03 - 챗봇 버튼 크기 30% 축소
- `src/index.css`의 플로팅 챗봇 버튼 크기를 데스크톱 `90px`에서 `63px`로, 모바일 `72px`에서 `50px`로 축소
- 챗봇 아이콘 크기도 함께 줄여 데스크톱 `63px`, 모바일 `43px`로 맞춤

## 2026-03-02 18:04 - 제안서 상단 통계 숫자 색상 변경
- `assets/data/하고보고 제품 입점 제안서_1page.html`의 상단 통계 숫자 색상을 `#01B2CF`로 조정

## 2026-03-02 18:07 - 제안서 버튼 및 챗봇 크기 수정 업로드 준비
- 제안서 HTML의 `Download PDF` 버튼 배치 및 스타일 수정 사항과 챗봇 버튼 30% 축소 내용을 GitHub에 업로드하기 위한 커밋 및 푸시 작업을 준비

## 2026-03-02 18:09 - 누적 판매량 안내 문구 위치 상향
- `src/components/SalesCounter.jsx`에 하단 카피 블록용 클래스를 추가하고 `src/index.css`에서 `transform: translateY(-20px)`를 적용해 `HAGOBOGO Cumulative Sales Volume` 문구를 20px 위로 이동

## 2026-03-02 18:13 - 누적 판매량 안내 문구 위치 보정 방식 수정
- `fadeIn` 애니메이션의 `transform` 값과 충돌해 이전 이동값이 보이지 않는 문제를 확인
- `src/index.css`의 `.sales-counter-copy-group` 이동 방식을 `transform`에서 `position: relative; top: -20px;`로 바꿔 실제로 20px 위로 적용되도록 수정

## 2026-03-02 18:18 - 메인 dot 발생 빈도 대폭 축소
- `src/hooks/useDotEngine.js`의 메인 dot 다음 생성 간격을 `3000 + Math.random() * 3000`에서 `225000 + Math.random() * 75000`으로 변경
- 첫 생성은 기존처럼 약 1초 뒤에 시작되지만, 이후 생성은 1시간 기준 약 12~16개 수준으로 줄어들도록 조정

## 2026-03-02 18:19 - 배경 빈 dot 발생 빈도 2배 증가
- `src/hooks/useDotEmptyEngine.js`의 `MIN_SPAWN_DELAY_MS`, `MAX_SPAWN_DELAY_MS`를 `1200/2000`에서 `600/1000`으로 변경해 배경 빈 dot 생성 간격을 절반으로 축소

## 2026-03-02 18:20 - dot 발생 빈도 설정 주석 보강
- `src/hooks/useDotEngine.js`, `src/hooks/useDotEmptyEngine.js`의 수정된 생성 간격 값 옆에 의도를 설명하는 한국어 주석을 추가

## 2026-03-02 18:21 - dot 빈도 및 판매량 문구 위치 수정 업로드 준비
- 메인 dot, 배경 dot 발생 빈도 조정과 `HAGOBOGO Cumulative Sales Volume` 문구 위치 보정 내용을 GitHub에 업로드하기 위한 커밋 및 푸시 작업을 준비

## 2026-03-02 18:24 - 영문 제안서 HTML 파일명 변경
- `assets/data/하고보고 제품 입점 제안서_1page.html` 파일명을 `assets/data/Hagobogo_Proposal_en_v01.html`로 변경
- `src/components/Dashboard.jsx`의 iframe 경로도 새 파일명으로 함께 수정

## 2026-03-02 18:27 - 스페인어 제안서 텍스트 번역 반영
- `assets/data/Hagobogo_Proposal_es_v01.html`의 제목, 본문, 표 헤더, 단계 설명, 다운로드 버튼 문구를 스페인어로 번역

## 2026-03-02 18:29 - 프랑스어 제안서 텍스트 번역 반영
- `assets/data/Hagobogo_Proposal_fr_v01.html`의 제목, 본문, 표 헤더, 단계 설명, 다운로드 버튼 문구를 프랑스어로 번역

## 2026-03-02 18:30 - 한국어 제안서 텍스트 번역 반영
- `assets/data/Hagobogo_Proposal_kr_v01.html`의 제목, 본문, 표 헤더, 단계 설명, 다운로드 버튼 문구를 한국어로 번역

## 2026-03-02 18:36 - 언어별 제안서 PDF 다운로드 경로 분리
- `Hagobogo_Proposal_en_v01.html`, `Hagobogo_Proposal_es_v01.html`, `Hagobogo_Proposal_fr_v01.html`, `Hagobogo_Proposal_kr_v01.html`의 `Download PDF` 버튼이 각 언어별 PDF 파일을 가리키도록 링크와 다운로드 파일명을 개별 설정

## 2026-03-02 18:38 - 언어 전환 시 제안서 파일 자동 매칭
- `src/components/Dashboard.jsx`에 언어 코드별 제안서 파일명 매핑을 추가
- 언어 전환 시 iframe이 `EN`, `ES`, `FR`, `KR`에 맞는 `Hagobogo_Proposal_*_v01.html` 파일을 자동으로 열도록 수정

## 2026-03-02 18:40 - 다국어 제안서 파일 분리 업로드 준비
- 기존 단일 제안서 파일 대신 언어별 HTML/PDF 파일 세트를 사용하는 구조로 정리된 현재 변경사항을 GitHub에 업로드하기 위한 커밋 및 푸시 작업을 준비

## 2026-03-02 18:44 - FAQ형 챗봇 도입 기획안 작성
- `Docs/chatbot_faq_introduction_plan.md` 문서를 추가해 현재 챗봇 버튼을 유지한 채 FAQ형 패널을 열고 `Business Inquiries`로 연결하는 1차 도입 방향을 초보자 기준으로 정리
- 자유 입력형 AI 챗봇 대신 안내형 FAQ 챗봇을 먼저 도입하는 이유, 화면 구조, 질문 추천안, 동작 흐름, 1차 제외 범위를 함께 설명

## 2026-03-02 18:47 - FAQ형 챗봇 실행 계획서 작성
- `Docs/chatbot_faq_execution_plan.md` 문서를 추가해 FAQ 7개 초안, 답변 원칙, 패널 구조, 파일 수정 범위, 구현 순서, 주의사항을 실제 개발 직전 수준으로 정리

## 2026-03-02 18:51 - FAQ형 챗봇 1차 구현
- `src/components/ChatbotPanel.jsx`를 추가해 FAQ 질문 목록, 답변 카드, 닫기 버튼, `Business Inquiries` 연결 버튼, 제안서 이동 버튼이 있는 소형 챗봇 패널을 구현
- `src/components/Dashboard.jsx`에서 챗봇 열기/닫기 상태와 언어별 제안서 이동, 문의 모달 연결 흐름을 연결
- `src/i18n/translations.js`에 `EN`, `ES`, `FR`, `KR` 기준 챗봇 제목, 안내 문구, FAQ 질문 7개, 답변, 버튼 문구를 추가
- `src/index.css`에 챗봇 패널 레이아웃과 모바일 대응 스타일을 추가하고 `npm run build`로 번들링이 정상 완료되는 것을 확인

## 2026-03-02 14:52 - 피그마 introduction 프레임에 제안서 콘텐츠 삽입
- 피그마 채널 o9jh5c1k에 접속하여 `hagobogo_csv_introduction` 프레임(23:210)의 흰색 아웃라인 보드 `introduction`(23:243, 1199x1600) 확인
- 수정된 제안서의 모든 콘텐츠를 17개 텍스트 노드로 삽입: 제목, 5개 통계 숫자(시안 색상), 5개 통계 설명, 5개 섹션(Problem/Solution/Global Success/Benefits/Strategy), 연락처 푸터
- 메인 페이지와 동일한 색상 팔레트(회색 #4d545a, 시안 #2BC4E5) 적용

## 2026-03-02 19:02 - GitHub Actions CI/CD 자동 배포 구성
- GitHub Pages 배포가 이전 내용만 노출되는 문제를 진단: 로컬 `dist/` 빌드 해시(`app-BcXhplzy.js`)와 원격 해시(`app-De1ia2SL.js`)가 불일치하여 최신 빌드가 push되지 않은 것이 원인
- `.github/workflows/deploy.yml` 워크플로우 파일 생성: `main` 브랜치 push 시 자동으로 `npm ci` → `.env.production` 생성(GitHub Secrets 기반) → `npm run build` → GitHub Pages 배포
- `.gitignore`에 `dist/` 추가: CI/CD가 자동 빌드하므로 빌드 산출물을 Git 추적에서 제외
- 대장님이 GitHub 웹에서 해야 할 작업: ① Settings → Pages → Source를 "GitHub Actions"으로 변경 ② Settings → Secrets → `VITE_BUSINESS_INQUIRY_API_URL` 등록
