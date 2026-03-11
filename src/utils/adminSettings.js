export const ADMIN_PASSWORD = '0000';
export const ADMIN_AUTH_STORAGE_KEY = 'admin_authenticated';
export const ADMIN_TICKER_STORAGE_KEY = 'admin_news_ticker_items';
export const ADMIN_DOT_BLUE_FREQUENCY_STORAGE_KEY = 'admin_dot_blue_spawn_frequency_per_hour';
export const SALES_STORAGE_KEY = 'sphere_count';
export const DEFAULT_SALES_COUNT = 100000;
export const DEFAULT_DOT_BLUE_SPAWN_FREQUENCY_RANGE = {
    min: 900,
    max: 1440,
};
export const TICKER_SPACE_TOKEN = '/Space';
export const TICKER_EDITOR_EMPTY_ITEM = '__TICKER_EDITOR_EMPTY__';

export function isAdminAuthenticated() {
    if (typeof window === 'undefined') {
        return false;
    }

    try {
        return window.sessionStorage.getItem(ADMIN_AUTH_STORAGE_KEY) === 'true';
    } catch {
        return false;
    }
}

export function setAdminAuthenticated(isAuthenticated) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        if (isAuthenticated) {
            window.sessionStorage.setItem(ADMIN_AUTH_STORAGE_KEY, 'true');
            return;
        }

        window.sessionStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
    } catch {
        // 저장소 접근이 막혀도 화면 흐름은 유지합니다.
    }
}

export function getTickerOverrideItems() {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const rawValue = window.localStorage.getItem(ADMIN_TICKER_STORAGE_KEY);
        if (!rawValue) {
            return [];
        }

        const parsedValue = JSON.parse(rawValue);
        if (!Array.isArray(parsedValue)) {
            return [];
        }

        return parsedValue.filter((item) => typeof item === 'string');
    } catch {
        return [];
    }
}

export function getTickerOverrideItemsByLanguage(language) {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const rawValue = window.localStorage.getItem(ADMIN_TICKER_STORAGE_KEY);
        if (!rawValue) {
            return [];
        }

        const parsedValue = JSON.parse(rawValue);

        if (Array.isArray(parsedValue)) {
            return parsedValue.filter((item) => typeof item === 'string');
        }

        if (!parsedValue || typeof parsedValue !== 'object') {
            return [];
        }

        const languageItems = parsedValue[language];
        if (!Array.isArray(languageItems)) {
            return [];
        }

        return languageItems.filter((item) => typeof item === 'string');
    } catch {
        return [];
    }
}

export function setTickerOverrideItems(items) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(ADMIN_TICKER_STORAGE_KEY, JSON.stringify(items));
    } catch {
        // 저장소 접근이 막혀도 화면 흐름은 유지합니다.
    }
}

export function setTickerOverrideItemsByLanguageMap(itemsByLanguage) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(ADMIN_TICKER_STORAGE_KEY, JSON.stringify(itemsByLanguage));
    } catch {
        // 저장소 접근이 막혀도 화면 흐름은 유지합니다.
    }
}

export function formatTickerTextarea(items) {
    return items
        .filter((item) => item !== TICKER_EDITOR_EMPTY_ITEM)
        .map((item) => item === '' ? TICKER_SPACE_TOKEN : item)
        .join('\n');
}

export function parseTickerTextarea(value) {
    return value
        .split('\n')
        .map((item) => {
            const trimmedValue = item.trim();
            return trimmedValue === TICKER_SPACE_TOKEN ? '' : trimmedValue;
        });
}

export function getStoredSalesCount() {
    if (typeof window === 'undefined') {
        return DEFAULT_SALES_COUNT;
    }

    try {
        const rawValue = window.localStorage.getItem(SALES_STORAGE_KEY);
        const parsedValue = Number(rawValue);

        if (Number.isFinite(parsedValue) && parsedValue >= 0) {
            return parsedValue;
        }
    } catch {
        // 저장소 접근이 막혀도 기본값으로 동작합니다.
    }

    return DEFAULT_SALES_COUNT;
}

export function setStoredSalesCount(value) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(SALES_STORAGE_KEY, String(value));
    } catch {
        // 저장소 접근이 막혀도 화면 흐름은 유지합니다.
    }
}

export function getDotBlueSpawnFrequencyRange() {
    if (typeof window === 'undefined') {
        return DEFAULT_DOT_BLUE_SPAWN_FREQUENCY_RANGE;
    }

    try {
        const rawValue = window.localStorage.getItem(ADMIN_DOT_BLUE_FREQUENCY_STORAGE_KEY);
        if (!rawValue) {
            return DEFAULT_DOT_BLUE_SPAWN_FREQUENCY_RANGE;
        }

        const parsedValue = JSON.parse(rawValue);
        const min = Number(parsedValue?.min);
        const max = Number(parsedValue?.max);

        if (Number.isFinite(min) && Number.isFinite(max) && min > 0 && max > 0) {
            return {
                min: Math.min(min, max),
                max: Math.max(min, max),
            };
        }
    } catch {
        // 저장소 접근이 막혀도 기본값으로 동작합니다.
    }

    return DEFAULT_DOT_BLUE_SPAWN_FREQUENCY_RANGE;
}

export function setDotBlueSpawnFrequencyRange(value) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(ADMIN_DOT_BLUE_FREQUENCY_STORAGE_KEY, JSON.stringify({
            min: value.min,
            max: value.max,
        }));
    } catch {
        // 저장소 접근이 막혀도 화면 흐름은 유지합니다.
    }
}
