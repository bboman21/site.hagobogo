import React, { useState, useCallback, useRef, useEffect } from 'react';
import Sphere from './Sphere';
import SalesCounter from './SalesCounter';
import DotEngine from './DotEngine';
import DotEmptyEngine from './DotEmptyEngine';
import InquiryModal from './InquiryModal';
import logoHagobogo from '../../assets/svg/logo_haogobogo.svg';
import chatbotLeo from '../../assets/svg/btn_chatbot.svg';
import { DEFAULT_LANGUAGE, LANGUAGE_OPTIONS, TRANSLATIONS } from '../i18n/translations';

const SALES_STORAGE_KEY = 'sphere_count';
const LANGUAGE_STORAGE_KEY = 'site_language';

export default function Dashboard() {
    const homeHref = `${import.meta.env.BASE_URL || './'}app.html`;
    const [sales, setSales] = useState(() => {
        if (typeof window === 'undefined') {
            return 100000;
        }

        try {
            const savedSales = window.localStorage.getItem(SALES_STORAGE_KEY);
            const parsedSales = Number(savedSales);

            if (Number.isFinite(parsedSales) && parsedSales > 0) {
                return parsedSales;
            }
        } catch {
            // 저장소 접근이 막혀 있으면 기본 카운터 값으로 동작
        }

        return 100000;
    });
    const [language, setLanguage] = useState(() => {
        if (typeof window === 'undefined') {
            return DEFAULT_LANGUAGE;
        }

        try {
            const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
            if (savedLanguage && LANGUAGE_OPTIONS.includes(savedLanguage)) {
                return savedLanguage;
            }
        } catch {
            // 저장소 접근이 막혀 있으면 기본 언어로 동작
        }

        return DEFAULT_LANGUAGE;
    });
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);
    const [isLineHit, setIsLineHit] = useState(false);
    const [targetMetrics, setTargetMetrics] = useState({
        center: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        sphereDiameter: 400,
        collisionRadius: 100,
        sphereRadius: 200,
    });
    const pulseTimeoutRef = useRef(null);
    const lineTimeoutRef = useRef(null);
    const sphereGroupRef = useRef(null);
    const languageMenuRef = useRef(null);

    useEffect(() => {
        return () => {
            if (pulseTimeoutRef.current) {
                clearTimeout(pulseTimeoutRef.current);
            }
            if (lineTimeoutRef.current) {
                clearTimeout(lineTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem(SALES_STORAGE_KEY, String(sales));
        } catch {
            // 제한된 환경에서도 카운터 기능이 유지되도록 저장 오류는 무시
        }
    }, [sales]);

    useEffect(() => {
        try {
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        } catch {
            // 제한된 환경에서도 언어 전환이 유지되도록 저장 오류는 무시
        }
    }, [language]);

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (!languageMenuRef.current?.contains(event.target)) {
                setIsLanguageMenuOpen(false);
            }
        };

        window.addEventListener('mousedown', handlePointerDown);

        return () => {
            window.removeEventListener('mousedown', handlePointerDown);
        };
    }, []);

    useEffect(() => {
        const updateTargetMetrics = () => {
            if (!sphereGroupRef.current) return;

            const rect = sphereGroupRef.current.getBoundingClientRect();
            const sphereDiameter = rect.width;
            setTargetMetrics({
                center: {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                },
                sphereDiameter,
                collisionRadius: sphereDiameter * 0.25,
                sphereRadius: sphereDiameter * 0.5,
            });
        };

        updateTargetMetrics();

        const resizeObserver = new ResizeObserver(updateTargetMetrics);
        if (sphereGroupRef.current) {
            resizeObserver.observe(sphereGroupRef.current);
        }

        window.addEventListener('resize', updateTargetMetrics);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateTargetMetrics);
        };
    }, []);

    const handleHit = useCallback(() => {
        setSales(prev => prev + 1);
        setIsPulsing(false);
        setIsLineHit(false);
        if (pulseTimeoutRef.current) {
            clearTimeout(pulseTimeoutRef.current);
        }
        if (lineTimeoutRef.current) {
            clearTimeout(lineTimeoutRef.current);
        }
        requestAnimationFrame(() => setIsPulsing(true));
        requestAnimationFrame(() => setIsLineHit(true));
        pulseTimeoutRef.current = setTimeout(() => {
            setIsPulsing(false);
        }, 260);
        lineTimeoutRef.current = setTimeout(() => {
            setIsLineHit(false);
        }, 500);
    }, []);

    const handleCloseInquiryModal = useCallback(() => {
        setIsInquiryModalOpen(false);
    }, []);

    const copy = TRANSLATIONS[language];

    return (
        <div className={`relative w-full min-h-screen flex justify-center overflow-x-hidden bg-[#bfc5cc] text-[#bfc5cc] ${language === 'KR' ? 'lang-kr' : ''}`}>
            {isInquiryModalOpen && (
                <InquiryModal
                    copy={copy.inquiryModal}
                    language={language}
                    onClose={handleCloseInquiryModal}
                />
            )}

            {/* 실시간 파티클 배경 컨테이너 */}
            <div className="absolute inset-0 w-full h-full min-h-full pointer-events-none">
                <DotEmptyEngine
                    targetCenter={targetMetrics.center}
                    sphereRadius={targetMetrics.sphereRadius}
                />
                <DotEngine
                    onHit={handleHit}
                    targetCenter={targetMetrics.center}
                    collisionRadius={targetMetrics.collisionRadius}
                />
            </div>

            <div className="absolute top-[24px] left-[24px] right-[24px] z-40 flex items-center justify-between">
                <a href={homeHref} className="flex items-center">
                    <img
                        src={logoHagobogo}
                        alt="HAGOBOGO logo"
                        className="w-[97px] md:w-[119px] lg:w-[140px] h-auto object-contain"
                    />
                </a>

                <div className="flex items-center gap-[24px]">
                    <a
                        href="https://hagobogo.me"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-cta text-nav-cta group"
                    >
                        <span
                            aria-hidden="true"
                            className="material-symbols-outlined flex items-center justify-center text-[15px] leading-none text-[#4D545A] transition-colors duration-180 group-hover:text-white group-focus-visible:text-white"
                        >
                            local_mall
                        </span>
                    </a>
                    <div ref={languageMenuRef} className="relative">
                        <button
                            type="button"
                            className="text-cta text-nav-cta language-trigger"
                            aria-haspopup="menu"
                            aria-expanded={isLanguageMenuOpen}
                            onClick={() => setIsLanguageMenuOpen(prev => !prev)}
                        >
                            {language}
                        </button>

                        {isLanguageMenuOpen && (
                            <div className="language-dropdown absolute right-0 top-full mt-[8px] flex flex-col" role="menu">
                                {LANGUAGE_OPTIONS.filter(option => option !== language).map(option => (
                                    <button
                                        key={option}
                                        type="button"
                                        className="text-cta text-nav-cta language-dropdown-item"
                                        role="menuitem"
                                        onClick={() => {
                                            setLanguage(option);
                                            setIsLanguageMenuOpen(false);
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="news-ticker-wrap">
                <div className="news-ticker-track">
                    <div className="news-ticker-sequence">
                        {copy.ticker.map(item => (
                            <p key={item} className="news-ticker-text">
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="news-ticker-sequence" aria-hidden="true">
                        {copy.ticker.map(item => (
                            <p key={`duplicate-${item}`} className="news-ticker-text">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="main-content-stack relative z-20 flex w-full flex-col items-center gap-[40px]">
                <div ref={sphereGroupRef} className="relative flex items-center justify-center px-[20px] pt-[20px] pb-[20px] pointer-events-none">
                    <Sphere isLineHit={isLineHit} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <SalesCounter sales={sales} isPulsing={isPulsing} mode="center" />
                    </div>
                </div>

                <SalesCounter sales={sales} isPulsing={isPulsing} mode="bottom" copy={copy.salesCounter} />

                {/* 제안서 삽입 영역 (흰색 아웃라인 보드) */}
                <div className="introduction-board">
                    <iframe
                        src="/assets/data/하고보고 제품 입점 제안서_1page.html"
                        title="HAGOBOGO Introduction"
                        className="introduction-iframe"
                    />
                </div>

                <div className="mt-[20px] flex flex-col items-center gap-[42px]">
                    <button
                        type="button"
                        className="text-cta text-cta-unified"
                        onClick={() => setIsInquiryModalOpen(true)}
                    >
                        {copy.ctas.businessInquiries}
                    </button>
                </div>

                {/* 우측 하단 플로팅 챗봇 버튼 */}
                <button
                    type="button"
                    className="chatbot-fab"
                    aria-label={copy.ctas.chatbot}
                >
                    <img src={chatbotLeo} alt="Chatbot" className="chatbot-fab-icon" />
                </button>

                <footer className="site-footer mt-[200px]">
                    <p>{copy.footer[0]}</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>{copy.footer[1]}</p>
                    <p>{copy.footer[2]}</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>{copy.footer[3]}</p>
                    <p>{copy.footer[4]}</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>{copy.footer[5]}</p>
                </footer>
            </div>
        </div>
    );
}
