import React from 'react';
import dotHead from '../../assets/svg/dot_head.svg';

// DotItem은 전달받은 x, y 와 회전 각도, scale, 꼬리 길이에 따라 위치와 크기가 결정됩니다.
export default function DotItem({ x, y, rotation, scale, tailLength, opacity }) {
    return (
        <div
            className="absolute top-0 left-0"
            style={{
                transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
                opacity,
                // 성능 최적화 (하드웨어 가속)
                willChange: 'transform, opacity',
                transformOrigin: '0 0',
            }}
        >
            <div
                className="absolute top-0 left-0"
                style={{
                    width: `${tailLength}px`,
                    height: '4px',
                    transform: `translate(${-tailLength}px, -2px)`,
                    background: 'linear-gradient(to left, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0) 65%)',
                    transformOrigin: '100% 50%',
                    filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.28))',
                }}
            />

            <div className="absolute top-0 left-0 w-[44px] h-[44px]" style={{ transform: 'translate(-22px, -22px)' }}>
                <img
                    src={dotHead}
                    alt="dot"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}
