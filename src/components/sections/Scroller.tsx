import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useComponyDetail } from '../../context/componyContext';

const ScrollToTop = () => {
    const { componyProfile } = useComponyDetail();
    const { profile } = componyProfile

    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed bottom-0 right-0 z-[100] p-8 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Main Dashboard Notch */}
            <div className={`relative flex items-center gap-2 p-2 rounded-[2rem] 
                bg-white/70 dark:bg-zinc-900/80 backdrop-blur-3xl
                border border-white/40 dark:border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isHovered ? 'w-48' : 'w-16'} h-16 overflow-hidden`}
            >
                {/* 1. Scroll Up Action (Primary) */}
                <button
                    onClick={scrollToTop}
                    className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full 
                               bg-primary text-white shadow-lg shadow-primary/20
                               hover:scale-110 active:scale-95 transition-transform duration-300"
                >
                    <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
                </button>

                {/* 2. Notice/Status Indicator (Revealed on Hover) */}
                <div className={`flex items-center gap-3 transition-all duration-500 delay-100
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}
                >
                    <div className="h-10 w-[1px] bg-zinc-200 dark:bg-white/10" />

                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{profile?.scroller?.title}</span>
                        <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                            {profile?.scroller?.subTitle}
                        </span>
                    </div>

                    {/* Notification Pulse */}
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </div>
                </div>

                {/* Subtle Glass Glow Inside */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            </div>

            {/* External Ambient Glow */}
            <div className={`absolute bottom-10 right-10 -z-10 h-20 w-20 bg-primary/20 blur-[60px] rounded-full 
                transition-all duration-1000 ${isHovered ? 'scale-[2.5] opacity-60' : 'scale-100 opacity-30'}`}
            />
        </div>
    );
};

export default ScrollToTop;