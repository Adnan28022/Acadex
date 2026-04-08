import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Play, ShieldCheck, Zap,
    MousePointer2, CheckCircle, ChevronRight,
    Sparkles, Globe, Laptop
} from 'lucide-react';

const HeroSection = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="relative w-full bg-white font-sans overflow-hidden min-h-screen flex items-center">

            {/* 1. DYNAMIC BACKGROUND ANIMATION */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Moving Glowing Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -150, 0],
                        y: [0, -80, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[130px]"
                />
                {/* Static Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM9 48c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM34 28c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM9 8c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM54 8c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
            </div>

            {/* 2. MAIN CONTENT CONTAINER */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >

                {/* LEFT SIDE: Animated Typography */}
                <div className="text-center lg:text-left space-y-8">

                    {/* Pulsing Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[2px]">Systems Active v1.0</span>
                    </motion.div>

                    {/* Explosive Headline */}
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                        The New Era of <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                            Institute Intelligence.
                        </span>
                    </motion.h1>

                    {/* Smooth Description */}
                    <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Acadex is a high-performance SaaS engine built to digitize coaching centers
                        and academies with precision-grade automation.
                    </motion.p>

                    {/* Interactive CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                        <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-acadex-navy text-white rounded-2xl font-bold uppercase text-[12px] tracking-[2px] shadow-[0_20px_50px_-15px_rgba(30,41,59,0.4)] hover:shadow-blue-900/40 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group">
                            Start Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-600 border border-slate-200 rounded-2xl font-bold uppercase text-[12px] tracking-[2px] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                            <Play size={18} fill="currentColor" className="text-blue-600" /> Watch Demo
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: 3D Floating Dashboard Mockup */}
                <motion.div
                    variants={itemVariants}
                    className="relative group perspective-1000"
                >
                    {/* Shadow Glow behind App */}
                    <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[60px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Animated Main App Window */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotateX: [0, 2, 0],
                            rotateY: [0, -2, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative bg-white border border-slate-200 rounded-[48px] p-2.5 shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        <div className="bg-slate-50 rounded-[38px] border border-slate-100 overflow-hidden aspect-[4/3] flex flex-col">
                            {/* Browser Mockup Header */}
                            <div className="h-12 bg-white border-b border-slate-100 flex items-center px-8 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                <div className="ml-4 w-48 h-4 bg-slate-50 rounded-full border border-slate-100"></div>
                            </div>

                            {/* Dashboard Visual Mockup Content */}
                            <div className="p-8 space-y-6 flex-1">
                                <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 flex justify-between items-center shadow-lg">
                                    <div className="space-y-2">
                                        <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
                                        <div className="w-24 h-4 bg-white/40 rounded-lg"></div>
                                    </div>
                                    <Zap size={24} className="text-white/40 animate-pulse" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="h-32 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500"><CheckCircle size={20} /></div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                                        <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
                                    </div>
                                    <div className="h-32 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                                        <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500"><Globe size={20} /></div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                                        <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 1: Biometrics */}
                    <motion.div
                        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 group/badge cursor-default"
                    >
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover/badge:scale-110 transition-transform">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Security</p>
                            <p className="text-[14px] font-bold text-slate-900 mt-1">Passkey On</p>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2: Real-time */}
                    <motion.div
                        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-8 -left-8 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 group/badge cursor-default"
                    >
                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover/badge:scale-110 transition-transform">
                            <MousePointer2 size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status</p>
                            <p className="text-[14px] font-bold text-slate-900 mt-1">Live Syncing</p>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default HeroSection;