const SHEET_NAME = 'Business Inquiries List';
const MAX_INQUIRY_LENGTH = 3000;
const EXPECTED_REQUEST_TOKEN = 'HGBG_INQUIRY_2026_x7Lq2mP9vK4sN8aT';
const SCRIPT_TIME_ZONE = 'Asia/Seoul';

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
    const submittedAt = parseSubmittedAt(payload.submittedAt);

    if (!sheet) {
      return createJsonResponse({
        ok: false,
        code: 'SHEET_NOT_FOUND',
        message: '대상 시트를 찾을 수 없습니다.'
      });
    }

    sheet.appendRow([
      formatDateCell(submittedAt),
      formatTimeCell(submittedAt),
      payload.name.trim(),
      payload.title ? payload.title.trim() : '',
      payload.country.trim(),
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

  if (!payload.requestToken || payload.requestToken !== EXPECTED_REQUEST_TOKEN) {
    return {
      ok: false,
      code: 'INVALID_REQUEST_TOKEN',
      message: '유효하지 않은 요청입니다.'
    };
  }

  if (!isNonEmptyString(payload.name)) {
    return {
      ok: false,
      code: 'REQUIRED_NAME',
      message: '이름은 필수입니다.'
    };
  }

  if (!isNonEmptyString(payload.country)) {
    return {
      ok: false,
      code: 'REQUIRED_COUNTRY',
      message: '국가는 필수입니다.'
    };
  }

  if (!isNonEmptyString(payload.companyName)) {
    return {
      ok: false,
      code: 'REQUIRED_COMPANY_NAME',
      message: '회사명은 필수입니다.'
    };
  }

  if (!isNonEmptyString(payload.email)) {
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

  if (!isNonEmptyString(payload.inquiry)) {
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

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

function parseSubmittedAt(value) {
  if (!value) {
    return new Date();
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date();
  }

  return parsedDate;
}

function formatDateCell(date) {
  return Utilities.formatDate(date, SCRIPT_TIME_ZONE, 'yyyy-MM-dd');
}

function formatTimeCell(date) {
  return Utilities.formatDate(date, SCRIPT_TIME_ZONE, 'HH:mm:ss');
}

function createJsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
