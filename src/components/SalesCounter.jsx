import React from 'react';

export default function SalesCounter({ sales, isPulsing, mode = 'center' }) {
    // 숫자에 쉼표 포맷 추가
    const formattedSales = sales.toLocaleString();

    if (mode === 'center') {
        return (
            <div className="relative z-20 flex flex-col items-center justify-center text-center animate-[fadeIn_1s_ease-out_forwards] pointer-events-none text-[#4D545A]">
                <p className={`sphere_count sales-counter-value font-['Barlow_Condensed'] font-extralight leading-none tracking-tighter tabular-nums ${isPulsing ? 'animate-[salesPulse_260ms_ease-out]' : ''}`}>
                    {formattedSales}
                </p>
            </div>
        );
    }

    return (
        <div className="z-20 flex flex-col items-center justify-center gap-[4px] text-center text-[#ffffff] pointer-events-none animate-[fadeIn_1s_ease-out_forwards]">
            <p className="font-['Barlow_Condensed'] font-normal text-2xl md:text-[28px] lg:text-[32px] leading-[1.2]">
                <span className="font-semibold tracking-wide">HAGOBOGO</span> Cumulative Sales Volume
            </p>
            <p className="font-['Barlow_Condensed'] font-normal text-base md:text-lg lg:text-[20px] leading-[1.4] opacity-90">
                Since 2025
            </p>
        </div>
    );
}
