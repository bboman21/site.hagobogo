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

## 2026-02-28 23:11 - GitHub 원격 푸시 및 배포 문서 보완
- 로컬 저장소를 초기화하고 `hagobogo Landing Page Production` 커밋을 생성
- 원격 저장소 `https://github.com/bboman21/site.hagobogo.git`의 기존 `Initial commit` 및 `LICENSE`를 보존하기 위해 병합 후 `main` 브랜치로 푸시
- `README.md`를 GitHub Pages 배포 기준 문서로 재정리하고, 현재 저장소 구조에서는 `main` 브랜치의 `/ (root)`를 배포 대상으로 사용하는 것이 맞음을 명시

## 2026-02-28 23:16 - README 배포 URL 추가
- `README.md` 상단에 GitHub Pages 실제 접속 주소 `https://bboman21.github.io/site.hagobogo/dist/index.html`를 추가

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

## 2026-03-01 23:13 - Google Sheets 저장 구조 설계 전환
- `Business Inquiries` 내용을 메일 대신 Google Sheets에 저장하는 방향이 가능한지 공식 Google Apps Script 문서를 기준으로 검토
- `Docs/business_inquiries_google_sheets_plan.md`에 `GitHub Pages -> Apps Script 웹앱 -> Google Sheets` 구조와 `appendRow()` 기반 저장 방식을 설계 문서로 정리
- `Docs/business_inquiries_google_sheets_checklist.md`에 Google Sheets 생성, `확장 프로그램 > Apps Script`, `배포 > 새 배포 > 웹 앱` 클릭 순서, `/exec` URL 사용, 운영 테스트 절차를 한 장짜리 체크리스트로 정리

## 2026-03-01 23:16 - Google Sheets 저장 방식 구현 작업안 작성
- `Docs/business_inquiries_google_sheets_implementation_plan.md` 문서를 추가해 현재 메일 전송 구조를 Google Sheets 저장 구조로 전환할 때의 실제 코드 작업 순서를 정리
- `InquiryModal.jsx`, `inquiryApi.js`, `.env.production.example`, `api/business-inquiry.js`, `vercel.json`이 각각 유지/수정/보류 중 어디에 해당하는지 파일별 역할 기준으로 정리
- 바로 삭제보다 우선 전환 후 안정화, 그 다음 정리라는 원칙을 문서에 명시해 롤백 가능성을 남기도록 구조화

## 2026-03-01 23:20 - Apps Script doPost 초안 문서 작성
- `Docs/business_inquiries_apps_script_dopost_draft.md` 문서를 추가해 Google Apps Script `Code.gs`에 붙여 넣을 수 있는 `doPost(e)` 기준 초안 코드를 작성
- `SHEET_NAME`, `appendRow()` 열 순서, `doGet()` 건강 체크, 필수값 검증, 배포 전 체크리스트와 테스트 방법까지 함께 정리

## 2026-03-01 23:22 - Apps Script 토큰 검증 2차 초안 문서 작성
- `Docs/business_inquiries_apps_script_dopost_token_draft.md` 문서를 추가해 `requestToken` 기반의 간단한 요청 검증을 포함한 `doPost(e)` 2차 초안 코드를 작성
- `EXPECTED_REQUEST_TOKEN`, 프론트가 같이 보내야 하는 `requestToken`, 이 방식의 한계와 테스트 방법까지 함께 정리

## 2026-03-01 23:25 - 프론트 requestToken 전송 코드 반영
- `src/lib/inquiryApi.js`에서 `VITE_BUSINESS_INQUIRY_REQUEST_TOKEN` 환경 변수를 읽어 `requestToken`을 요청 본문에 자동 포함하도록 수정
- 요청 토큰이 비어 있으면 전송 전에 `MISSING_REQUEST_TOKEN` 오류를 발생시키도록 보강
- `.env.example`, `.env.production.example`에 `VITE_BUSINESS_INQUIRY_REQUEST_TOKEN` 예시 값을 추가하고 `InquiryModal.jsx`에서 해당 오류를 사용자 메시지로 구분해 표시하도록 정리

## 2026-03-01 23:34 - inquiryApi Google Apps Script 기준 전환
- `src/lib/inquiryApi.js`가 더 이상 Vercel 상대경로를 기본값으로 쓰지 않고 `VITE_BUSINESS_INQUIRY_API_URL`이 반드시 필요하도록 수정
- Google Apps Script 웹앱이 받기 쉬운 형태로 요청 `Content-Type`을 `text/plain;charset=utf-8`로 조정하고 JSON 본문은 그대로 유지
- `.env.example`, `.env.production.example`의 `VITE_BUSINESS_INQUIRY_API_URL` 예시를 Apps Script `/exec` URL 기준으로 변경하고 `InquiryModal.jsx`에서 URL 누락 오류를 별도 메시지로 표시하도록 보강

## 2026-03-01 23:39 - Google Sheets 요청 토큰 최종값 고정
- Apps Script 2차 초안 문서와 환경 변수 예시 파일의 `requestToken` 값을 `HGBG_INQUIRY_2026_x7Lq2mP9vK4sN8aT`로 통일
- 프론트 `.env` 예시와 Apps Script `EXPECTED_REQUEST_TOKEN` 예시가 서로 어긋나지 않도록 최종 기준값을 하나로 정리

## 2026-03-01 23:51 - Business Inquiries Country 드롭다운 추가
- `Business Inquiries` 팝업에 `Company Name` 위 `Country` 드롭다운 입력 항목을 추가
- 국가 목록은 `src/constants/countries.js`로 분리해 관리하고, `InquiryModal.jsx`의 필드 순서와 제출 payload에 `country` 값을 포함하도록 정리
- `translations.js`에 `County` 라벨 번역을 추가하고 `index.css`에서 `select`가 기존 입력창과 같은 시각 스타일을 사용하도록 확장

## 2026-03-02 00:06 - Business Inquiries 국가 입력창 커스텀 드롭다운 전환
- `src/components/InquiryModal.jsx`에서 기본 `select`를 버튼 기반 커스텀 드롭다운으로 교체해 닫힌 상태에서 `Select Country` 문구와 아래쪽 화살표가 보이도록 수정
- 펼쳐진 목록은 `src/index.css`에서 최대 높이 `300px`와 내부 스크롤이 적용되도록 스타일을 추가하고, 선택 후에도 기존 입력창과 같은 톤을 유지하도록 정리
- 키보드 화살표 이동, Enter 선택, 바깥 영역 클릭 시 닫힘 동작까지 함께 반영한 뒤 `npm run build`로 빌드 확인

## 2026-03-02 00:09 - Country 라벨 문구 및 드롭다운 간격 미세 조정
- `src/i18n/translations.js`의 영어 라벨 문구를 `County`에서 `Country`로 바로잡아 표시 오타를 정리
- `src/index.css`에서 드롭다운 열림 위치 간격을 줄여 입력창과 목록이 더 자연스럽게 이어지도록 조정
- 모바일 구간에서는 드롭다운 최대 높이와 내부 패딩, 그림자를 별도로 조정해 작은 화면에서도 답답하지 않게 보이도록 다듬고 `npm run build`로 다시 확인

## 2026-03-02 00:11 - Country 플레이스홀더 다국어 번역 적용
- `src/i18n/translations.js`의 각 언어 `inquiryModal.fields`에 국가 선택 안내 문구를 별도 키로 추가
- `src/components/InquiryModal.jsx`에서 `Select Country` 하드코딩을 제거하고 현재 언어 번역값을 표시하도록 연결
- `npm run build`로 다국어 문구 분리 후에도 빌드가 정상 동작하는지 확인

## 2026-03-02 00:14 - 필수값 오류 문구 다국어 번역 적용
- `src/i18n/translations.js`에서 필수 입력 오류 문구를 스페인어, 프랑스어, 한국어에 맞게 각각 번역
- 기존 검증 로직은 이미 번역 키를 참조하고 있어 추가 코드 변경 없이 각 언어 화면에 바로 반영되도록 정리
- `npm run build`로 문구 변경 후에도 빌드가 정상인지 확인

## 2026-03-02 00:15 - 이메일 형식 오류 문구 다국어 번역 적용
- `src/i18n/translations.js`에서 이메일 형식 오류 문구를 스페인어, 프랑스어, 한국어에 맞게 각각 번역
- 기존 이메일 검증 로직은 번역 키를 그대로 사용하고 있어 문자열 수정만으로 각 언어 화면에 반영되도록 정리
- `npm run build`로 문구 변경 이후에도 빌드가 정상 동작하는지 확인

## 2026-03-02 00:17 - 영어 기준 번역 문구 잔여 항목 정리
- `src/i18n/translations.js`를 영어 기준으로 다시 점검해 비영어권에 남아 있던 영어성 표기를 정리
- 스페인어와 프랑스어의 `Chatbot` 버튼 문구를 각 언어 표현으로 조정하고, 한국어 팝업 제목과 권리 표기 문구도 한국어로 통일
- 한국어 판매 카운터의 `2025년 부터` 띄어쓰기까지 함께 바로잡은 뒤 `npm run build`로 확인

## 2026-03-02 00:19 - county 내부 키를 country로 리팩터링
- `src/components/InquiryModal.jsx`의 폼 상태, 필드 순서, 에러 키, 드롭다운 선택 처리, DOM 식별자에서 `county`를 `country`로 일괄 변경
- `src/i18n/translations.js`의 필드 키와 플레이스홀더 키도 `country`, `countryPlaceholder`로 맞춰 코드 의미가 실제 국가 선택과 일치하도록 정리
- 과거 작업 이력 문구까지 함께 보정하고 `npm run build`로 리팩터링 이후 동작을 확인

## 2026-03-02 00:22 - country 필수 정책 및 Apps Script 저장 기준 정리
- `src/components/InquiryModal.jsx`의 필수값 검증에 `country`를 추가해 프론트와 저장 정책이 서로 다르지 않도록 정리
- `Docs/business_inquiries_apps_script_dopost_draft.md`, `Docs/business_inquiries_apps_script_dopost_token_draft.md`에서 시트 헤더, `appendRow()` 순서, `validatePayload()` 기준을 모두 `country` 포함 구조로 수정
- `Docs/business_inquiries_google_sheets_checklist.md`, `Docs/business_inquiries_google_sheets_plan.md`, `Docs/business_inquiries_launch_checklist.md`에도 `Country` 필수 입력 정책과 테스트 기준을 반영하고 `npm run build`로 확인

## 2026-03-02 00:25 - 실제 운영 시트 헤더 기준으로 Apps Script 문서 구체화
- `Docs/business_inquiries_apps_script_dopost_draft.md`, `Docs/business_inquiries_apps_script_dopost_token_draft.md`의 예시 시트 헤더를 실제 운영 기준인 `Date | Time | Name | Job Title | County | Company Name | Email | Inquiry`로 구체화
- 두 문서의 `appendRow()` 예시도 `submittedAt`을 날짜와 시간으로 나눠 저장하는 형태로 조정하고, 프론트 payload 키 `country`와 시트 헤더 `County`가 서로 다를 수 있다는 점을 설명
- `Docs/business_inquiries_google_sheets_checklist.md`, `Docs/business_inquiries_google_sheets_plan.md`에도 같은 헤더 기준과 예시 행 구조를 반영

## 2026-03-02 00:27 - Apps Script 날짜/시간 포맷을 한국 시간대로 명확히 고정
- `Docs/business_inquiries_apps_script_dopost_draft.md`, `Docs/business_inquiries_apps_script_dopost_token_draft.md`의 코드 예시에 `SCRIPT_TIME_ZONE = 'Asia/Seoul'` 상수를 추가
- `formatDateCell()`, `formatTimeCell()`가 더 이상 프로젝트 기본 시간대에 의존하지 않고 한국 시간대 기준 `yyyy-MM-dd`, `HH:mm:ss`로 저장되도록 문서 기준을 명확히 정리
- 두 문서에 날짜/시간 저장 기준 설명과 Apps Script 프로젝트 시간대도 `Asia/Seoul`로 맞추는 권장 사항을 추가

## 2026-03-02 00:29 - 운영 시트 헤더 Country 기준 재정리 및 submittedAt 예외 처리 보강
- `Docs/business_inquiries_apps_script_dopost_draft.md`, `Docs/business_inquiries_apps_script_dopost_token_draft.md`, `Docs/business_inquiries_google_sheets_checklist.md`, `Docs/business_inquiries_google_sheets_plan.md`의 운영 시트 헤더 표기를 `Country` 기준으로 다시 통일
- Apps Script 예시 코드에서 `new Date(payload.submittedAt)`를 직접 쓰지 않고 `parseSubmittedAt()` 헬퍼로 감싸 비어 있거나 잘못된 날짜 문자열이면 현재 시각으로 안전하게 대체하도록 보강
- 날짜/시간 저장 예시와 체크 문구도 새 운영 시트 기준에 맞게 함께 정리

## 2026-03-02 00:34 - Google Sheets 저장용 Apps Script 실제 코드 파일 추가
- 저장소 안에 `apps-script/business-inquiry/Code.gs` 파일을 새로 추가해 Google Sheets 저장용 Apps Script 실행 코드를 실제 소스 형태로 정리
- 이 파일에는 `Country` 필수 검증, 요청 토큰 검증, 한국 시간대 날짜/시간 분리 저장, `submittedAt` 예외 처리까지 반영
- `api/business-inquiry.js`의 보조 메일 API도 `country` 필수 검증과 메일 본문 포함 기준으로 맞추고, Apps Script 초안 문서 두 곳에 실제 코드 파일 경로를 명시

## 2026-03-02 00:38 - 실제 시트 탭 이름 Business Inquiries List로 최종 확정
- 대장님이 알려주신 실제 구글 시트 탭 이름 `Business Inquiries List`를 기준으로 `apps-script/business-inquiry/Code.gs`의 `SHEET_NAME`을 최종 확정
- `Docs/business_inquiries_apps_script_dopost_draft.md`, `Docs/business_inquiries_apps_script_dopost_token_draft.md` 안의 `SHEET_NAME` 예시와 시트 탭 이름 설명도 같은 값으로 통일

## 2026-03-02 00:47 - 실제 Apps Script 웹앱 URL을 운영 환경 변수에 반영
- 대장님이 전달한 Apps Script 웹앱 `/exec` URL을 기준으로 루트 `.env.production` 파일을 생성
- `VITE_BUSINESS_INQUIRY_API_URL`에 실제 배포 URL을 넣고 `VITE_BUSINESS_INQUIRY_REQUEST_TOKEN`도 함께 반영해 운영 빌드가 바로 Apps Script를 호출하도록 정리
- `npm run build`로 운영 환경 변수 반영 후에도 프론트 빌드가 정상 동작하는지 확인

## 2026-03-02 00:54 - 로컬 개발 서버용 Apps Script 환경 변수 반영
- `npm run dev`에서는 `.env.production`이 아니라 개발용 환경 파일이 필요하므로 루트 `.env.local` 파일을 새로 생성
- `.env.local`에 실제 Apps Script `/exec` URL과 요청 토큰을 넣어 로컬 개발 화면에서도 Google Sheets 저장 API를 바로 호출할 수 있게 정리
- Vite 개발 서버를 다시 시작해 `http://127.0.0.1:5173/`에서 새 환경 변수가 반영되도록 맞춤

## 2026-03-02 00:59 - Business Inquiries 저장 결과 메시지 영역 높이 고정
- `src/components/InquiryModal.jsx`에서 저장 결과 메시지 요소를 항상 렌더링하도록 바꿔 성공/실패 문구가 나오기 전에도 자리 높이가 유지되게 수정
- `src/index.css`에서 메시지 영역 높이를 `24px`로 고정하고 폰트를 `14px Pretendard` 기준으로 정리
- 메시지가 없을 때는 투명 텍스트로 공간만 유지하도록 처리한 뒤 `npm run build`로 확인

## 2026-03-02 01:01 - 저장 결과 메시지와 버튼 영역 간격 8px 조정
- `src/index.css`에서 저장 결과 메시지 하단 여백을 `8px`로 조정
- 버튼 영역의 상단 간격도 함께 줄여 메시지와 다른 오브젝트 사이 실제 간격이 `8px` 기준으로 보이도록 정리
- `npm run build`로 스타일 조정 후 빌드가 정상인지 확인

## 2026-03-02 01:04 - Business Inquiries 입력창 배경색 흰색으로 통일
- `src/index.css`의 입력 공통 스타일에서 팝업 입력창, 국가 선택창, 문의 내용 입력창 배경색을 `#ffffff`로 변경
- 드롭다운 펼침 목록 패널은 별도 요소라 그대로 두고, 입력 본체만 흰색으로 맞춤
- `npm run build`로 스타일 변경 후 빌드가 정상인지 확인

## 2026-03-02 01:07 - 흰 배경 기준 입력창 테두리와 placeholder 대비 보강
- `src/index.css`에서 입력창 기본 테두리를 옅은 회색으로 보이게 조정해 흰 배경 위에서도 윤곽이 흐려지지 않도록 정리
- 일반 입력창과 문의 내용 입력창의 placeholder 색, 국가 선택창 placeholder 색을 실제 입력값과 구분되도록 같은 톤으로 맞춤
- `npm run build`로 스타일 보정 후 빌드가 정상인지 확인

## 2026-03-02 01:09 - 팝업 하단 버튼 영역 위치 16px 상향 조정
- `src/index.css`의 `inquiry-modal-actions` 상단 여백을 조정해 하단 버튼 그룹이 기존보다 위로 `16px` 올라오도록 수정
- `npm run build`로 버튼 위치 조정 후 빌드가 정상인지 확인

## 2026-03-02 01:11 - 저장 결과 메시지 텍스트 위치만 8px 하향 조정
- `src/index.css`의 저장 결과 메시지 요소에 시각적 하향 오프셋을 적용해 메시지 텍스트만 아래로 `8px` 내려오도록 수정
- 버튼 그룹 레이아웃 간격은 건드리지 않아 버튼 위치는 그대로 유지되도록 정리
- `npm run build`로 스타일 조정 후 빌드가 정상인지 확인

## 2026-03-01 22:52 - Vercel 환경 변수 설정 방법 설명
- Vercel에 메일 전송에 필요한 '비밀 열쇠(API Key)'와 '연락처(Email)'를 등록하는 과정을 대장님이 이해하기 쉽게 비유를 들어 설명함

## 2026-03-01 22:54 - 대장님 환경 변수 입력 확인
- 대장님이 보내주신 Vercel 환경 변수 입력 화면 스크린샷을 확인하고, 올바른 입력 방식임을 피드백함
- 나머지 필요한 환경 변수(`BUSINESS_INQUIRY_TO_EMAIL`, `BUSINESS_INQUIRY_FROM_EMAIL`)에 대해서도 추가 안내함

## 2026-03-01 22:58 - Resend 도메인 인증 개념 설명
- '인증된 도메인 기반 주소'라는 어려운 표현을 '공인된 신분증' 비유를 들어 대장님이 이해하기 쉽게 설명함
