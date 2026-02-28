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
