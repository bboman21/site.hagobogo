import React, { useState, useCallback, useRef, useEffect } from 'react';
import Sphere from './Sphere';
import SalesCounter from './SalesCounter';
import DotEngine from './DotEngine';
import DotEmptyEngine from './DotEmptyEngine';
import logoHagobogo from '../../assets/svg/logo_haogobogo.svg';

const SALES_STORAGE_KEY = 'sphere_count';
const LANGUAGE_STORAGE_KEY = 'site_language';
const LANGUAGE_OPTIONS = ['EN', 'ES', 'FR', 'KR'];
const TRANSLATIONS = {
    EN: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Cumulative Sales Volume',
            sinceText: 'Since 2025',
        },
        ctas: {
            businessInquiries: 'Business Inquiries',
            chatbot: 'Chatbot',
        },
        ticker: [
            "Service Advancement: Intin's 'HAGOBOGO' app has significantly enhanced digital healthcare accessibility by introducing its 2.0 update, featuring user-engaging contents such as a sperm encyclopedia and quiz games.",
            "Growing Market Demand: As interest in male infertility prevention and self-health management rises, the 'HAGOBOGO' self-testing kit is gaining significant attention as an essential health appliance for newlyweds and single-person households.",
            "Global Expansion: Building on its domestic success, 'HAGOBOGO' is expanding its presence as a mobile-based reproductive health monitoring solution by launching a global dedicated app for international users.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. All rights reserved.',
            'Company Name Representative: Kim Ji-hoon, CEO of INTIN Inc.',
            'Location: 52 Cheombok-ro, Dong-gu, Daegu',
            'Business Registration Number: 108-81-90649 | Mail-Order Sales Registration Number: No. 2018-Daegu Dong-gu-0025',
            'Privacy Officer: Lee Yoo-jin',
            'Contact: 070-4239-9899 | help@intin.kr',
        ],
    },
    ES: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Volumen Acumulado de Ventas',
            sinceText: 'Desde 2025',
        },
        ctas: {
            businessInquiries: 'Consultas Comerciales',
            chatbot: 'Chatbot',
        },
        ticker: [
            "Avance del servicio: La aplicación 'HAGOBOGO' de Intin ha mejorado significativamente la accesibilidad de la salud digital con su actualización 2.0, incorporando contenidos atractivos como una enciclopedia del esperma y juegos de preguntas.",
            "Crecimiento de la demanda del mercado: A medida que aumenta el interés por la prevención de la infertilidad masculina y el autocuidado, el kit de autoevaluación 'HAGOBOGO' está ganando gran atención como dispositivo de salud esencial para recién casados y hogares unipersonales.",
            "Expansión global: Basándose en su éxito nacional, 'HAGOBOGO' amplía su presencia como solución móvil de monitoreo de la salud reproductiva mediante el lanzamiento de una aplicación global dedicada para usuarios internacionales.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. Todos los derechos reservados.',
            'Nombre de la empresa y representante: Kim Ji-hoon, director ejecutivo de INTIN Inc.',
            'Ubicación: 52 Cheombok-ro, Dong-gu, Daegu',
            'Número de registro comercial: 108-81-90649 | Número de registro de venta por correo: No. 2018-Daegu Dong-gu-0025',
            'Responsable de privacidad: Lee Yoo-jin',
            'Contacto: 070-4239-9899 | help@intin.kr',
        ],
    },
    FR: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: 'Volume de Ventes Cumulées',
            sinceText: 'Depuis 2025',
        },
        ctas: {
            businessInquiries: 'Demandes Commerciales',
            chatbot: 'Chatbot',
        },
        ticker: [
            "Avancée du service : l'application 'HAGOBOGO' d'Intin a considérablement amélioré l'accessibilité aux soins de santé numériques grâce à sa mise à jour 2.0, avec des contenus engageants tels qu'une encyclopédie du sperme et des quiz.",
            "Croissance de la demande du marché : avec l'intérêt croissant pour la prévention de l'infertilité masculine et l'autogestion de la santé, le kit d'auto-test 'HAGOBOGO' attire fortement l'attention comme appareil de santé essentiel pour les jeunes mariés et les foyers d'une seule personne.",
            "Expansion mondiale : fort de son succès national, 'HAGOBOGO' étend sa présence comme solution mobile de suivi de la santé reproductive en lançant une application mondiale dédiée aux utilisateurs internationaux.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. Tous droits réservés.',
            "Nom de l'entreprise et représentant : Kim Ji-hoon, PDG d'INTIN Inc.",
            'Adresse : 52 Cheombok-ro, Dong-gu, Daegu',
            'Numéro d’immatriculation commerciale : 108-81-90649 | Numéro d’enregistrement de vente à distance : No. 2018-Daegu Dong-gu-0025',
            'Responsable de la protection des données : Lee Yoo-jin',
            'Contact : 070-4239-9899 | help@intin.kr',
        ],
    },
    KR: {
        salesCounter: {
            titleEmphasis: 'HAGOBOGO',
            titleText: '누적 판매량',
            sinceText: '2025년 부터',
        },
        ctas: {
            businessInquiries: '비즈니스 문의',
            chatbot: '챗봇',
        },
        ticker: [
            "서비스 고도화: 인틴의 'HAGOBOGO' 앱은 정자 백과사전과 퀴즈 게임 같은 참여형 콘텐츠를 포함한 2.0 업데이트를 통해 디지털 헬스케어 접근성을 크게 향상시켰습니다.",
            "시장 수요 확대: 남성 난임 예방과 자기 건강 관리에 대한 관심이 높아지면서 'HAGOBOGO' 자가 테스트 키트는 신혼부부와 1인 가구의 필수 헬스 가전으로 주목받고 있습니다.",
            "글로벌 확장: 국내 성공을 기반으로 'HAGOBOGO'는 해외 사용자를 위한 전용 글로벌 앱을 출시하며 모바일 기반 생식 건강 모니터링 솔루션으로서 입지를 넓히고 있습니다.",
        ],
        footer: [
            'ⓒ 2026 INTIN Inc. All rights reserved.',
            '회사명 대표자 : (주)인트인 대표 김지훈',
            '소재지 : 대구광역시 동구 첨복로 52',
            '사업자 등록번호 : 108-81-90649 | 통신판매신고번호 : 제2018-대구동구-0025호',
            '개인정보관리책임자 : 이유진',
            '문의 : 070-4239-9899 | help@intin.kr',
        ],
    },
};

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
            return 'EN';
        }

        try {
            const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
            if (savedLanguage === 'EP') {
                return 'ES';
            }
            if (savedLanguage && LANGUAGE_OPTIONS.includes(savedLanguage)) {
                return savedLanguage;
            }
        } catch {
            // 저장소 접근이 막혀 있으면 기본 언어로 동작
        }

        return 'EN';
    });
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
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

    const copy = TRANSLATIONS[language];

    return (
        <div className={`relative w-full min-h-screen flex justify-center overflow-x-hidden bg-[#bfc5cc] text-[#bfc5cc] ${language === 'KR' ? 'lang-kr' : ''}`}>
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

                <div className="mt-[80px] flex flex-col items-center gap-[42px]">
                    <button type="button" className="text-cta text-cta-unified">
                        {copy.ctas.businessInquiries}
                    </button>
                    <button type="button" className="text-cta text-cta-unified">
                        {copy.ctas.chatbot}
                    </button>
                </div>

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
