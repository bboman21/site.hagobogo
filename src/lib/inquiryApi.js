const DEFAULT_INQUIRY_API_URL = '/api/business-inquiry';

function getInquiryApiUrl() {
    const configuredApiUrl = import.meta.env.VITE_BUSINESS_INQUIRY_API_URL?.trim();

    if (configuredApiUrl) {
        return configuredApiUrl;
    }

    return DEFAULT_INQUIRY_API_URL;
}

export async function submitBusinessInquiry(payload) {
    const response = await fetch(getInquiryApiUrl(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
