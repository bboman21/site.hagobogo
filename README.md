# HAGOBOGO 랜딩 페이지

페이지 주소: `https://bboman21.github.io/site.hagobogo/`

## 배포

GitHub Actions를 통해 `main` 브랜치에 push하면 자동으로 빌드 → GitHub Pages 배포됩니다.

- 워크플로우: `.github/workflows/deploy.yml`
- 빌드 도구: Vite
- 배포 대상: GitHub Pages (GitHub Actions 소스)

### 환경 변수

빌드 시 필요한 환경 변수는 GitHub Secrets에 등록합니다.

```text
VITE_BUSINESS_INQUIRY_API_URL=Apps Script 웹앱 URL
```

## Business Inquiries 메일 전송

`Business Inquiries` 팝업 문의는 Google Apps Script 웹앱을 통해 처리됩니다.

- 프론트엔드: GitHub Pages
- 데이터 저장: Google Sheets
- 메일 알림: Apps Script MailApp

자세한 설정 절차는 아래 문서를 참고합니다.

- `Docs/business_inquiries_apps_script_mail_deployment_guide.md`

## 로컬 개발 실행

```bash
npm install
npm run dev
```

개발 서버는 `app.html`을 기준으로 실행됩니다.

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다 (`.gitignore`에 포함, CI/CD가 자동 처리).

## 로컬 프로덕션 미리보기

```bash
npm run local
```

macOS에서 더블클릭으로 실행하고 싶다면 `preview.command`를 사용할 수 있습니다.
