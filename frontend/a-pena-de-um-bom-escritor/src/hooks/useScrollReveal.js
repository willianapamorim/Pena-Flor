import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );

        // Pequeno delay para garantir que os componentes da nova rota já renderizaram
        const timer = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach((el) => {
                if (!el.classList.contains('visible')) {
                    observer.observe(el);
                }
            });
        }, 50);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [location.pathname]);
}
