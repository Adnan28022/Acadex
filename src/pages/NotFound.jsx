import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass, RotateCcw } from 'lucide-react';
import LogoImg from '../assets/logo.png';

const NotFound = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);

    // Auto-navigation logic after 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        if (seconds === 0) {
            navigate(-1); // Automatically goes back to previous page
        }

        return () => clearInterval(timer);
    }, [seconds, navigate]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 font-sans">

            {/* Background Subtle Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-acadex-navy/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-acadex-accent/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo */}
                <motion.img
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    src={LogoImg} alt="Acadex" className="h-8 w-auto mb-16 grayscale opacity-50"
                />

                {/* Main Illustration / Icon */}
                <div className="relative mb-8">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-acadex-navy/10"
                    >
                        <Compass size={160} strokeWidth={0.5} />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-7xl font-bold text-acadex-navy tracking-tighter">404</h1>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-2xl font-bold text-acadex-navy uppercase tracking-[4px]">Sector Not Found</h2>
                    <p className="text-slate-400 text-sm font-medium max-w-xs mx-auto leading-relaxed uppercase tracking-wider">
                        You've reached a coordinate that doesn't exist in our ecosystem.
                    </p>
                </div>

                {/* Countdown & Auto-Redirect UI */}
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Animated Progress Circle */}
                        <svg className="absolute w-full h-full -rotate-90">
                            <circle
                                cx="40" cy="40" r="38"
                                fill="none" stroke="#E2E8F0" strokeWidth="4"
                            />
                            <motion.circle
                                cx="40" cy="40" r="38"
                                fill="none" stroke="#002147" strokeWidth="4"
                                strokeDasharray="239"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: 239 }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </svg>
                        <span className="text-xl font-bold text-acadex-navy">{seconds}</span>
                    </div>

                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[3px] animate-pulse">
                        Redirecting to safety...
                    </p>
                </div>

                {/* Manual Controls */}
                <div className="flex items-center gap-8 mt-16">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-acadex-navy uppercase tracking-widest transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back Now
                    </button>

                    <div className="w-px h-4 bg-slate-200"></div>

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-acadex-navy uppercase tracking-widest transition-all group"
                    >
                        <RotateCcw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                        Reset Path
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;