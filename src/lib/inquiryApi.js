const DEFAULT_INQUIRY_API_URL = '/api/business-inquiry';

function getInquiryApiUrl() {
    const configuredApiUrl = import.meta.env.VITE_BUSINESS_INQUIRY_API_URL?.trim();

    if (configuredApiUrl) {
        return configuredApiUrl;
    }

    return DEFAULT_INQUIRY_API_URL;
}

function getInquiryRequestToken() {
    return import.meta.env.VITE_BUSINESS_INQUIRY_REQUEST_TOKEN?.trim() || '';
}

export async function submitBusinessInquiry(payload) {
    const requestToken = getInquiryRequestToken();

    if (!requestToken) {
        const error = new Error('문의 저장용 요청 토큰이 설정되지 않았습니다.');
        error.code = 'MISSING_REQUEST_TOKEN';
        throw error;
    }

    const response = await fetch(getInquiryApiUrl(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...payload,
            requestToken,
        }),
    });

    const data = await response.json().catch(() => ({
        ok: false,
        code: 'UNKNOWN_RESPONSE',
        message: '알 수 없는 응답입니다.',
    }));

    if (!response.ok || !data.ok) {
        const error = new Error(data.message || '문의 전송에 실패했습니다.');
        error.code = data.code || 'UNKNOWN_ERROR';
        throw error;
    }

    return data;
}
