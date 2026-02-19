import React from 'react';

const ErrorComponent: React.FC = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 selection:bg-indigo-100">
                {/* Background Ambient Blurs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-200/20 rounded-full blur-[80px] animate-pulse delay-1000" />
                </div>

                {/* Main Container */}
                <div className="relative z-10 w-full max-w-sm bg-white border border-slate-200 rounded-md p-8 flex flex-col items-center text-center">

                    {/* Signal Icon Card - Reduced Size */}
                    <div className="relative mb-1 group">
                        <div className="relative p-6">
                            <svg
                                viewBox="0 0 24 36"
                                className="w-12 h-18 overflow-visible"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* Bar 1: x=0 */}
                                <rect x="0" y="26" width="3" height="4" rx="1"
                                    className="fill-primary stroke-primary animate-bounce [animation-duration:1.2s]" />

                                {/* Bar 2: x=7 (4px gap) */}
                                <rect x="7" y="22" width="3" height="8" rx="1"
                                    className="fill-primary stroke-primary animate-bounce [animation-delay:0.2s] [animation-duration:1.2s]" />

                                {/* Bar 3: x=14 (4px gap) */}
                                <rect x="14" y="18" width="3" height="12" rx="1"
                                    className="fill-primary stroke-primary animate-bounce [animation-delay:0.4s] [animation-duration:1.2s]" />

                                {/* Bar 4: x=21 (4px gap) */}
                                <rect x="21" y="14" width="3" height="16" rx="1"
                                    className="fill-primary stroke-primary animate-bounce [animation-delay:0.6s] [animation-duration:1.2s]" />
                            </svg>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-4 space-y-3 text-center">
                        <h2 className="text-2xl font-semibold text-slate-900 tracking-tight leading-snug">
                            Unable to Complete Request
                        </h2>

                        <p className="text-slate-500 text-sm leading-relaxed text-center">
                            We are currently unable to process your request. Please try again shortly.
                            If the issue persists, contact support for further assistance.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorComponent;
