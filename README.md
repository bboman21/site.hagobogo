# HAGOBOGO 랜딩 페이지

페이지 주소: `https://bboman21.github.io/site.hagobogo/dist/index.html`

## 권장 GitHub Pages 배포 대상

다음 설정을 사용합니다.

- 브랜치: `main`
- 폴더: `/ (root)`

현재 저장소는 위 설정에 맞춰 이미 구성되어 있습니다.

- 루트의 [index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/index.html)은 [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html)로 이동합니다.
- 실제 배포 파일은 [dist](/Users/chris/development/AntigravityWorks/site_hagobogo/dist) 폴더 안에 함께 커밋되어 있습니다.
- `public/.nojekyll` 파일이 포함되어 있어 이후 밑줄로 시작하는 파일이 생겨도 GitHub Pages에서 제거되지 않습니다.

GitHub Pages는 `dist/` 폴더를 직접 배포 대상으로 선택할 수 없으므로, 현재 저장소 구조에서는 `/ (root)`가 맞습니다.

## Business Inquiries 메일 전송 배포 설정

`Business Inquiries` 팝업 메일 전송은 아래 구조를 사용합니다.

- 프론트엔드: GitHub Pages
- 메일 API: Vercel 서버리스 함수
- 메일 발송: Resend

즉, 현재 사이트 화면은 GitHub Pages에서 열리고, 문의 메일 전송은 Vercel의 `/api/business-inquiry`가 처리합니다.

### Vercel 환경 변수

Vercel에는 아래 값을 등록합니다.

```text
RESEND_API_KEY=실제_리샌드_API_키
BUSINESS_INQUIRY_TO_EMAIL=bboman21@gmail.com
BUSINESS_INQUIRY_FROM_EMAIL=인증된_발신_주소
```

### GitHub Pages 프론트 빌드 시 필요한 값

GitHub Pages에 올릴 프론트는 빌드할 때 아래 값을 함께 넣어야 합니다.

```text
VITE_BUSINESS_INQUIRY_API_URL=https://your-project-name.vercel.app/api/business-inquiry
```

이 값은 비밀키가 아니라, 프론트가 호출할 공개 API 주소입니다.

### 운영 빌드 예시

```bash
VITE_BUSINESS_INQUIRY_API_URL=https://your-project-name.vercel.app/api/business-inquiry npm run build
```

자세한 설정 절차는 아래 문서를 참고합니다.

- [business_inquiries_vercel_deployment_setup.md](/Users/chris/development/AntigravityWorks/site_hagobogo/Docs/business_inquiries_vercel_deployment_setup.md)
- [business_inquiries_resend_vercel_plan.md](/Users/chris/development/AntigravityWorks/site_hagobogo/Docs/business_inquiries_resend_vercel_plan.md)
- [business_inquiries_vercel_implementation_plan.md](/Users/chris/development/AntigravityWorks/site_hagobogo/Docs/business_inquiries_vercel_implementation_plan.md)

## GitHub Pages 설정 방법

1. GitHub에서 저장소를 엽니다.
2. `Settings > Pages`로 이동합니다.
3. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
4. 브랜치는 `main`을 선택합니다.
5. 폴더는 `/ (root)`를 선택합니다.
6. 설정을 저장합니다.
7. GitHub Pages 주소가 배포될 때까지 기다립니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 [dist](/Users/chris/development/AntigravityWorks/site_hagobogo/dist) 폴더에 생성됩니다.

- [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html): 루트 이동용 프로덕션 진입 파일
- [dist/app.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/app.html): 로컬 이동 흐름을 위해 함께 유지하는 앱 진입 파일

## 로컬 개발 실행

```bash
npm install
npm run dev
```

개발 서버는 [app.html](/Users/chris/development/AntigravityWorks/site_hagobogo/app.html)을 기준으로 실행됩니다.

## 로컬 프로덕션 미리보기

다음 명령을 실행합니다.

```bash
npm run local
```

이 명령은 사이트를 빌드한 뒤 [dist/index.html](/Users/chris/development/AntigravityWorks/site_hagobogo/dist/index.html)을 HTTP 서버로 열어줍니다.

macOS에서 더블클릭으로 실행하고 싶다면 [preview.command](/Users/chris/development/AntigravityWorks/site_hagobogo/preview.command)를 사용할 수 있습니다.
