import React, { useState, useCallback, useRef, useEffect } from 'react';
import Sphere from './Sphere';
import SalesCounter from './SalesCounter';
import DotEngine from './DotEngine';
import DotEmptyEngine from './DotEmptyEngine';
import logoHagobogo from '../../assets/svg/logo_haogobogo.svg';

export default function Dashboard() {
    const homeHref = `${import.meta.env.BASE_URL || './'}app.html`;
    const [sales, setSales] = useState(100000);
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

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#bfc5cc] text-[#bfc5cc]">
            {/* 실시간 파티클 배경 컨테이너 */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
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
                    <button type="button" className="text-cta text-nav-cta">
                        Store
                    </button>
                    <button type="button" className="text-cta text-nav-cta">
                        Language
                    </button>
                    <button type="button" className="text-cta text-nav-cta">
                        Menu
                    </button>
                </div>
            </div>

            <div className="news-ticker-wrap">
                <div className="news-ticker-track">
                    <div className="news-ticker-sequence">
                        <p className="news-ticker-text">
                            Service Advancement: Intin&apos;s &apos;HAGOBOGO&apos; app has significantly enhanced digital healthcare accessibility by introducing its 2.0 update, featuring user-engaging contents such as a sperm encyclopedia and quiz games.
                        </p>
                        <p className="news-ticker-text">
                            Growing Market Demand: As interest in male infertility prevention and self-health management rises, the &apos;HAGOBOGO&apos; self-testing kit is gaining significant attention as an essential health appliance for newlyweds and single-person households.
                        </p>
                        <p className="news-ticker-text">
                            Global Expansion: Building on its domestic success, &apos;HAGOBOGO&apos; is expanding its presence as a mobile-based reproductive health monitoring solution by launching a global dedicated app for international users.
                        </p>
                    </div>
                    <div className="news-ticker-sequence" aria-hidden="true">
                        <p className="news-ticker-text">
                            Service Advancement: Intin&apos;s &apos;HAGOBOGO&apos; app has significantly enhanced digital healthcare accessibility by introducing its 2.0 update, featuring user-engaging contents such as a sperm encyclopedia and quiz games.
                        </p>
                        <p className="news-ticker-text">
                            Growing Market Demand: As interest in male infertility prevention and self-health management rises, the &apos;HAGOBOGO&apos; self-testing kit is gaining significant attention as an essential health appliance for newlyweds and single-person households.
                        </p>
                        <p className="news-ticker-text">
                            Global Expansion: Building on its domestic success, &apos;HAGOBOGO&apos; is expanding its presence as a mobile-based reproductive health monitoring solution by launching a global dedicated app for international users.
                        </p>
                    </div>
                </div>
            </div>

            <div className="main-content-stack absolute left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-[40px]">
                <div ref={sphereGroupRef} className="relative flex items-center justify-center px-[20px] pt-[20px] pb-[20px] pointer-events-none">
                    <Sphere isLineHit={isLineHit} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <SalesCounter sales={sales} isPulsing={isPulsing} mode="center" />
                    </div>
                </div>

                <SalesCounter sales={sales} isPulsing={isPulsing} mode="bottom" />

                <div className="mt-[80px] flex flex-col items-center gap-[42px]">
                    <button type="button" className="text-cta text-cta-unified">
                        Business Inquiries
                    </button>
                    <button type="button" className="text-cta text-cta-unified">
                        Chatbot
                    </button>
                </div>

                <footer className="site-footer mt-[200px]">
                    <p>ⓒ 2026 INTIN Inc. All rights reserved.</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>Company Name Representative: Kim Ji-hoon, CEO of INTIN Inc.</p>
                    <p>Location: 52 Cheombok-ro, Dong-gu, Daegu</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>Business Registration Number: 108-81-90649 | Mail-Order Sales Registration Number: No. 2018-Daegu Dong-gu-0025</p>
                    <p>Privacy Officer: Lee Yoo-jin</p>
                    <p className="site-footer-spacer" aria-hidden="true"></p>
                    <p>Contact: 070-4239-9899 | help@intin.kr</p>
                </footer>
            </div>
        </div>
    );
}
