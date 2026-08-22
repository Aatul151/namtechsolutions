import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useComponyDetail } from '../../context/componyContext';

const ScrollToTop = () => {
    const { componyProfile } = useComponyDetail();
    const { profile } = componyProfile;

    const { pathname, search, hash } = useLocation();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (pathname.length > 1 && pathname.endsWith('/')) {
            navigate(`${pathname.replace(/\/+$/, '')}${search}${hash}`, { replace: true });
            return;
        }
        window.scrollTo(0, 0);
    }, [pathname, search, hash, navigate]);

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

    // Formats strings securely for browser anchors
    const whatsappLink = profile?.mobile_number
        ? `https://wa.me/${profile.mobile_number}?text=${encodeURIComponent(profile?.whatsApp_message || '')}`
        : '#';

    const emailLink = profile?.email
        ? `mailto:${profile.email}`
        : '#';

    return (
        <div
            className={`fixed bottom-0 right-0 z-[100] p-8 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) 
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Dock Container - Expands width to accommodate three action nodes on hover */}
            <div className={`relative flex items-center gap-2 p-2 rounded-[2rem] 
                bg-white/70 dark:bg-zinc-900/80 backdrop-blur-3xl
                border border-white/40 dark:border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isHovered ? 'w-[23rem]' : 'w-16'} h-16 overflow-hidden`}
            >

                {/* DEFAULT ICON: Connect Link Badge (Fades out smoothly when hovered) */}
                <div className={`absolute left-2 top-2 flex h-12 w-12 items-center justify-center rounded-full 
                    bg-primary text-white transition-all duration-500 ease-in-out
                    ${isHovered ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'}`}
                >
                    {/* Minimalist modern 'Connect' Link Path Icon */}
                    <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </div>

                {/* REVEALED GROUP ACTIONS (Fades and slides forward when container is hovered) */}
                <div className={`flex items-center gap-2 transition-all duration-500
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
                >
                    {/* ACTION 1: WHATSAPP BUTTON */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full 
                                   bg-emerald-500 text-white shadow-lg shadow-emerald-500/20
                                   hover:scale-110 active:scale-95 transition-transform duration-300"
                    >
                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>

                    {/* ACTION 2: EMAIL BUTTON */}
                    <a
                        href={emailLink}
                        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full 
                                   bg-blue-500 text-white shadow-lg shadow-blue-500/20
                                   hover:scale-110 active:scale-95 transition-transform duration-300"
                    >
                        <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>

                    {/* ACTION 3: SCROLL UP BUTTON */}
                    <button
                        onClick={scrollToTop}
                        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full 
                                   bg-primary text-white shadow-lg shadow-primary/20
                                   hover:scale-110 active:scale-95 transition-transform duration-300"
                    >
                        <KeyboardArrowUpIcon sx={{ fontSize: 26 }} />
                    </button>
                </div>

                {/* 4. Notice / Meta Text Fields (Revealed on Hover) */}
                <div className={`flex items-center gap-3 transition-all duration-500 delay-100
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6 pointer-events-none'}`}
                >
                    <div className="h-10 w-[1px] bg-zinc-200 dark:bg-white/10" />

                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                            {profile?.scroller?.title || "Connect"}
                        </span>
                        <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                            {profile?.scroller?.subTitle || "Get In Touch"}
                        </span>
                    </div>

                    {/* Connected Status Pulse */}
                    <div className="relative flex h-2 w-2 flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </div>
                </div>

                {/* Ambient Glass Overlay Accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
            </div>

            {/* Ambient Shadow Box Backdrop Glow */}
            <div className={`absolute bottom-10 right-10 -z-10 h-20 w-20 rounded-full transition-all duration-1000
                ${isHovered ? 'bg-primary/20 scale-[2.8] opacity-60 blur-[60px]' : 'bg-primary/10 scale-100 opacity-30 blur-[40px]'}`}
            />
        </div>
    );
};

export default ScrollToTop;