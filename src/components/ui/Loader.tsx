import { useState, useEffect } from 'react';
import { useLoader } from '../../hooks/useLoader';
import { useComponyDetail } from '../../context/componyContext';

export function Loader() {
    const { isLoading } = useLoader();
    const { componyProfile } = useComponyDetail();

    const [isVisible, setIsVisible] = useState(true);
    const { profile } = componyProfile
    const logoImage = profile?.logo || null
    const slogan = profile?.slogan || 'Dil Se, Tech Tak.';
    const sloganComma = slogan.indexOf(',');

    useEffect(() => {
        if (!isLoading) {
            // Fade out animation
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(true);
        }
    }, [isLoading]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg-main transition-opacity duration-300 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center gap-6">
                {/* Logo Image */}
                <div className="relative">
                    <div className="relative w-50 h-20">
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Company slogan */}
                <div className="text-sm font-semibold tracking-wide md:text-base">
                    <span className="text-primary">
                        {sloganComma >= 0 ? `${slogan.slice(0, sloganComma)},` : slogan}
                    </span>
                    {sloganComma >= 0 && (
                        <span className="text-secondary">{slogan.slice(sloganComma + 1)}</span>
                    )}
                </div>

                {/* Loading dots animation */}
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    );
}
