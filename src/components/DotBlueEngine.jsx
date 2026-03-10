import React from 'react';
import dotHeadBlue from '../../assets/svg/dot_head_blue.svg';
import useDotEngine from '../hooks/useDotEngine';
import DotItem from './DotItem';

const COLLISION_FADE_DURATION_MS = 1000;

export default function DotBlueEngine({ onHit, targetCenter, collisionRadius }) {
    const dots = useDotEngine(onHit, collisionRadius);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {dots.map(dot => {
                const startX = targetCenter.x + Math.cos(dot.angle) * dot.distance;
                const startY = targetCenter.y + Math.sin(dot.angle) * dot.distance;

                // Dot이 중심을 향하도록 기존 회전 계산을 그대로 유지합니다.
                const rotation = (dot.angle * 180) / Math.PI + 180;
                const progress = (dot.distance - collisionRadius) / (dot.initialDistance - collisionRadius);
                const currentScale = 0.3 + 0.7 * Math.max(0, progress);
                const opacity = dot.collidedAt == null
                    ? 1
                    : Math.max(0, 1 - (performance.now() - dot.collidedAt) / COLLISION_FADE_DURATION_MS);

                return (
                    <DotItem
                        key={dot.id}
                        x={startX}
                        y={startY}
                        rotation={rotation}
                        scale={currentScale}
                        tailLength={dot.tailLength}
                        opacity={opacity}
                        headImage={dotHeadBlue}
                        alt="blue dot"
                        headSize={88}
                    />
                );
            })}
        </div>
    );
}
