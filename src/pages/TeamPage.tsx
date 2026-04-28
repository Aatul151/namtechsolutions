import { useState } from "react";
import { MarkedText } from "../components/ui/MarkedText";
import { useComponyDetail } from "../context/componyContext";

import { Modal, Backdrop, Box, IconButton, Fade } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function TeamPage() {
    const { componyProfile } = useComponyDetail();
    const { teamCertificates } = componyProfile;

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const handleViewImage = (imgUrl: string) => setSelectedImage(imgUrl);
    const handleCloseImage = () => setSelectedImage(null);

    return (
        <div className="bg-zinc-50 py-16 dark:bg-zinc-950/40 md:py-24">

            {/* Header */}
            <div className="mb-14 text-center">
                <MarkedText as="h2" text="Team [[Achievements]]" />
                <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
                    Certifications and milestones achieved by our team
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamCertificates?.map((item: any) => (
                        <div key={item.id} className="group relative flex flex-col p-4 transition-all duration-700">

                            {/* Image Container - Now the Clickable Trigger */}
                            <div
                                onClick={() => handleViewImage(item.image)} // Replace with your actual view function
                                className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[2rem] 
                 bg-slate-100 dark:bg-slate-900 
                 border border-slate-200/60 dark:border-white/10 
                 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >

                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 
                   group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                                />

                                {/* Modern Interaction Overlay */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 
                      dark:group-hover:bg-black/40 transition-all duration-500 
                      flex items-center justify-center opacity-0 group-hover:opacity-100">

                                    {/* Subtle Icon or Minimal Text instead of a bulky button */}
                                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="mt-6 px-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[10px] tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 uppercase">
                                        {item?.type}
                                    </span>
                                    <div className="h-[1px] flex-grow bg-slate-200 dark:bg-white/10 group-hover:bg-blue-500/30 transition-all duration-700" />
                                </div>

                                <h3 className="text-lg font-light tracking-tight text-slate-800 dark:text-slate-100 
                     group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                                    {item?.title}
                                </h3>

                                <p className="text-[11px] font-mono mt-2 text-slate-400 dark:text-slate-500 uppercase">
                                    {new Date(item?.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {selectedImage && (
                <Modal
                    open={!!selectedImage}
                    onClose={handleCloseImage}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            sx: {
                                backgroundColor: 'rgba(2, 6, 23, 0.9)', // Deep slate-dark background
                                backdropFilter: 'blur(12px)'
                            },
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={!!selectedImage} timeout={500}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            width: '100vw',
                            outline: 'none',
                            p: { xs: 2, md: 4 }
                        }}>
                            <div className="relative max-w-5xl w-full flex flex-col items-center">

                                {/* Minimal Close Button */}
                                <IconButton
                                    onClick={handleCloseImage}
                                    sx={{
                                        alignSelf: 'flex-end',
                                        mb: 2,
                                        color: 'white',
                                        bgcolor: 'rgba(255,255,255,0.05)',
                                        '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' }
                                    }}
                                >
                                    <CloseIcon fontSize="large" />
                                </IconButton>

                                {/* The Certificate Image */}
                                <img
                                    src={selectedImage || ''}
                                    alt="Certificate Preview"
                                    className="rounded-2xl shadow-2xl border border-white/10"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '80vh',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            )}
        </div>
    );
}