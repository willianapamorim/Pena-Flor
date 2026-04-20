import { useEffect } from 'react';

export function useParticles(containerId, count) {
    useEffect(() => {
        const container = document.getElementById(containerId);
        if (!container) return;

        const particles = [];
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = 8 + Math.random() * 12 + 's';
            p.style.animationDelay = Math.random() * 12 + 's';
            p.style.width = p.style.height = 1 + Math.random() * 2 + 'px';
            container.appendChild(p);
            particles.push(p);
        }

        return () => {
            particles.forEach((p) => p.remove());
        };
    }, [containerId, count]);
}
