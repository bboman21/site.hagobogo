import { useState, useRef, useEffect, useCallback } from 'react';

const INITIAL_TAIL_LENGTH = 320;
const TAIL_GROWTH_PER_SECOND = 1000;
const COLLISION_FADE_DURATION_MS = 1000;
const ACCELERATION_THRESHOLD_MULTIPLIER = 1.5;
const ACCELERATION_STEP_MS = 200;
const ACCELERATION_GAIN_PER_STEP = 1.1;

export default function useDotEngine(onHit, collisionRadius) {
    const [dots, setDots] = useState([]);
    const requestRef = useRef();
    const dotsRef = useRef([]); // RAF 내부에서 오래된 상태를 참조하지 않도록 유지
    const lastTimeRef = useRef();
    const spawnTimerRef = useRef(0);
    const onHitRef = useRef(onHit);

    // 최신 onHit 함수를 항상 참조하도록 동기화
    useEffect(() => {
        onHitRef.current = onHit;
    }, [onHit]);

    const updateDots = useCallback((time) => {
        if (lastTimeRef.current != null) {
            const deltaTime = time - lastTimeRef.current;

            let nextDots = [];
            let didHit = false;
            const sphereDiameter = collisionRadius * 4;
            const accelerationThreshold = sphereDiameter * ACCELERATION_THRESHOLD_MULTIPLIER;

            for (let dot of dotsRef.current) {
                if (dot.collidedAt != null) {
                    if (time - dot.collidedAt < COLLISION_FADE_DURATION_MS) {
                        nextDots.push(dot);
                    }
                    continue;
                }

                const timeInAccelerationZone = dot.distance <= accelerationThreshold
                    ? dot.timeInAccelerationZone + deltaTime
                    : 0;
                const accelerationMultiplier = Math.pow(
                    ACCELERATION_GAIN_PER_STEP,
                    timeInAccelerationZone / ACCELERATION_STEP_MS
                );
                const currentSpeed = dot.speed * accelerationMultiplier;
                const moveDist = currentSpeed * (deltaTime / 1000);
                const newDistance = dot.distance - moveDist;

                if (newDistance <= collisionRadius) {
                    didHit = true;
                    nextDots.push({
                        ...dot,
                        distance: collisionRadius,
                        collidedAt: time,
                    });
                } else {
                    nextDots.push({
                        ...dot,
                        distance: newDistance,
                        tailLength: dot.tailLength + (deltaTime / 1000) * TAIL_GROWTH_PER_SECOND,
                        timeInAccelerationZone,
                    });
                }
            }

            if (didHit && onHitRef.current) {
                onHitRef.current();
            }

            // 점 생성 타이밍 계산
            spawnTimerRef.current -= deltaTime;
            if (spawnTimerRef.current <= 0) {
                const windowRadius = Math.max(window.innerWidth, window.innerHeight) / 2;
                const spawnDistance = windowRadius + 300; // 화면 바깥 충분한 거리에서 시작
                const speed = 100 + Math.random() * 100; // 초당 100~200px 속도
                const angle = Math.random() * Math.PI * 2;

                nextDots.push({
                    id: Date.now() + Math.random(),
                    distance: spawnDistance,
                    initialDistance: spawnDistance,
                    speed,
                    angle,
                    tailLength: INITIAL_TAIL_LENGTH,
                    timeInAccelerationZone: 0,
                });

                // 다음 생성은 3~6초 뒤로 설정
                spawnTimerRef.current = 3000 + Math.random() * 3000;
            }

            dotsRef.current = nextDots;
            setDots(nextDots); // 갱신된 점 목록으로 화면을 다시 그림
        }

        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(updateDots);
    }, [collisionRadius]);

    useEffect(() => {
        spawnTimerRef.current = 1000; // 첫 생성은 약간 지연해서 시작
        requestRef.current = requestAnimationFrame(updateDots);
        return () => cancelAnimationFrame(requestRef.current);
    }, [updateDots]);

    return dots;
}
