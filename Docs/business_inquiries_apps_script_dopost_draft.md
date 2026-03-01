# Business Inquiries Apps Script doPost(e) 코드 초안

## 1. 문서 목적

이 문서는 `Business Inquiries` 팝업에서 보낸 데이터를 Google Apps Script 웹앱이 받아서 Google Sheets에 저장할 수 있도록,
`Code.gs`에 넣을 수 있는 `doPost(e)` 코드 초안을 정리한 문서입니다.

즉, 대장님이 Google Sheets에서 `확장 프로그램 > Apps Script`로 들어갔을 때
실제로 붙여 넣어 시작할 수 있는 기준 코드 문서입니다.

## 2. 이 코드가 하는 일

이 초안 코드는 아래 흐름으로 동작합니다.

1. 프론트에서 보낸 `POST` 요청을 받습니다.
2. JSON 본문을 읽습니다.
3. 필수값을 검증합니다.
4. 이메일 형식을 확인합니다.
5. Google Sheets 마지막 줄 아래에 한 줄을 추가합니다.
6. 성공/실패 JSON을 반환합니다.

즉, 메일 전송 대신 `appendRow()`로 시트 저장을 하는 구조입니다.

## 3. 먼저 대장님이 정해야 할 것

코드를 붙이기 전에 아래 두 가지를 먼저 확정해야 합니다.

1. 어떤 스프레드시트에 저장할지
2. 어떤 시트 탭 이름에 저장할지

예시:

- 스프레드시트: `HAGOBOGO Business Inquiries`
- 시트 탭 이름: `Inquiries`

## 4. 권장 시트 헤더 구조

첫 행에는 아래 헤더를 넣는 것을 권장합니다.

```text
Submitted At | Language | Name | Job Title | Company Name | Email | Inquiry
```

코드는 이 순서에 맞춰 한 줄을 저장하도록 작성하는 편이 가장 명확합니다.

## 5. Code.gs 초안 코드

아래 코드는 Apps Script의 `Code.gs`에 넣는 기준 초안입니다.

```javascript
const SHEET_NAME = 'Inquiries';
const MAX_INQUIRY_LENGTH = 3000;

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      ok: true,
      message: 'Business Inquiries Apps Script is running.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        ok: false,
        code: 'EMPTY_BODY',
        message: '요청 본문이 비어 있습니다.'
      });
    }

    const payload = JSON.parse(e.postData.contents);
    const validationError = validatePayload(payload);

    if (validationError) {
      return createJsonResponse(validationError);
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      return createJsonResponse({
        ok: false,
        code: 'SHEET_NOT_FOUND',
        message: '대상 시트를 찾을 수 없습니다.'
      });
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.language || 'EN',
      payload.name.trim(),
      payload.title ? payload.title.trim() : '',
      payload.companyName.trim(),
      payload.email.trim(),
      payload.inquiry.trim()
    ]);

    return createJsonResponse({
      ok: true,
      code: 'INQUIRY_SAVED',
      message: '문의가 정상적으로 저장되었습니다.'
    });
  } catch (error) {
    return createJsonResponse({
      ok: false,
      code: 'UNEXPECTED_ERROR',
      message: error && error.message ? error.message : '알 수 없는 오류가 발생했습니다.'
    });
  }
}

function validatePayload(payload) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!payload || typeof payload !== 'object') {
    return {
      ok: false,
      code: 'INVALID_PAYLOAD',
      message: '잘못된 요청 형식입니다.'
    };
  }

  if (!payload.name || !payload.name.trim()) {
    return {
      ok: false,
      code: 'REQUIRED_NAME',
      message: '이름은 필수입니다.'
    };
  }

  if (!payload.companyName || !payload.companyName.trim()) {
    return {
      ok: false,
      code: 'REQUIRED_COMPANY_NAME',
      message: '회사명은 필수입니다.'
    };
  }

  if (!payload.email || !payload.email.trim()) {
    return {
      ok: false,
      code: 'REQUIRED_EMAIL',
      message: '이메일은 필수입니다.'
    };
  }

  if (!emailPattern.test(payload.email.trim())) {
    return {
      ok: false,
      code: 'INVALID_EMAIL',
      message: '이메일 형식이 올바르지 않습니다.'
    };
  }

  if (!payload.inquiry || !payload.inquiry.trim()) {
    return {
      ok: false,
      code: 'REQUIRED_INQUIRY',
      message: '문의 내용은 필수입니다.'
    };
  }

  if (payload.inquiry.length > MAX_INQUIRY_LENGTH) {
    return {
      ok: false,
      code: 'INQUIRY_TOO_LONG',
      message: '문의 내용이 최대 길이를 초과했습니다.'
    };
  }

  return null;
}

function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 6. 코드에서 대장님이 꼭 수정해야 하는 부분

### 6-1. `SHEET_NAME`

```javascript
const SHEET_NAME = 'Inquiries';
```

이 값은 실제 시트 탭 이름과 같아야 합니다.

예를 들어 시트 탭 이름이 `문의내역`이면 아래처럼 바꿔야 합니다.

```javascript
const SHEET_NAME = '문의내역';
```

### 6-2. 시트 헤더 순서

`appendRow([...])` 안의 값 순서는
대장님이 시트 첫 줄에 만든 헤더 순서와 같아야 합니다.

즉, 헤더를 바꾸면 `appendRow()` 순서도 함께 바꿔야 합니다.

## 7. 왜 `SpreadsheetApp.getActiveSpreadsheet()`를 쓰는가

이 Apps Script는 Google Sheets에서 직접 `확장 프로그램 > Apps Script`로 생성한 연결 스크립트라는 전제를 둡니다.

이 경우:

- 현재 연결된 스프레드시트를 바로 가져올 수 있습니다.
- 별도 스프레드시트 ID를 코드에 넣지 않아도 됩니다.

즉, 초보자 기준으로 가장 단순한 방식입니다.

## 8. `doGet()`를 같이 넣는 이유

`doGet()`는 필수는 아니지만 넣어두는 편이 좋습니다.

이유:

- 웹앱 URL이 살아 있는지 간단히 확인할 수 있습니다.
- 브라우저로 열었을 때 최소한 응답이 오는지 빠르게 볼 수 있습니다.

즉, 디버깅용 건강 체크 역할입니다.

## 9. 배포 전 체크리스트

1. 시트 파일 생성 완료
2. 헤더 행 생성 완료
3. `SHEET_NAME` 값 확인 완료
4. `Code.gs`에 코드 붙여넣기 완료
5. 저장 완료
6. `배포 > 새 배포 > 웹 앱`으로 배포 완료
7. `/exec` URL 확보 완료

## 10. 배포 후 테스트 방법

### 10-1. 간단 확인

1. `/exec` URL을 브라우저에서 열어봅니다.
2. 아래 같은 JSON이 보이면 최소 응답은 살아 있습니다.

```json
{
  "ok": true,
  "message": "Business Inquiries Apps Script is running."
}
```

### 10-2. 실제 저장 확인

1. 프론트에서 팝업을 열고 테스트 데이터를 입력합니다.
2. `Save`를 누릅니다.
3. Google Sheets에 새 행이 추가됐는지 확인합니다.

## 11. 가장 자주 하는 실수

### 실수 1. 시트 탭 이름과 `SHEET_NAME`이 다른 것

이 경우 `대상 시트를 찾을 수 없습니다.`가 나옵니다.

### 실수 2. 헤더 순서와 `appendRow()` 순서가 다른 것

이 경우 데이터가 엉뚱한 열에 들어갑니다.

### 실수 3. `/dev` 주소를 운영에 쓰는 것

운영은 `/exec` 주소를 사용해야 합니다.

## 12. 다음 단계

이 초안을 기준으로 다음 중 하나로 이어가는 것이 좋습니다.

1. 프론트 `inquiryApi.js`를 Apps Script `/exec` URL 기준으로 바꾸기
2. Apps Script 코드에 간단한 요청 토큰 검증 추가하기
3. 운영용 시트 열 구조를 최종 확정하기
