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
    const dotsRef = useRef([]); // To avoid stale closures in RAF
    const lastTimeRef = useRef();
    const spawnTimerRef = useRef(0);
    const onHitRef = useRef(onHit);

    // Keep onHit ref updated
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

            // Spawning logic
            spawnTimerRef.current -= deltaTime;
            if (spawnTimerRef.current <= 0) {
                const windowRadius = Math.max(window.innerWidth, window.innerHeight) / 2;
                const spawnDistance = windowRadius + 300; // start well outside
                const speed = 100 + Math.random() * 100; // 100 to 200 px/sec
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

                // Next spawn in 3 to 6 seconds -> 10~20 per min
                spawnTimerRef.current = 3000 + Math.random() * 3000;
            }

            dotsRef.current = nextDots;
            setDots(nextDots); // trigger React render
        }

        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(updateDots);
    }, [collisionRadius]);

    useEffect(() => {
        spawnTimerRef.current = 1000; // first spawn lightly delayed
        requestRef.current = requestAnimationFrame(updateDots);
        return () => cancelAnimationFrame(requestRef.current);
    }, [updateDots]);

    return dots;
}
