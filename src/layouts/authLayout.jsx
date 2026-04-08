import React from 'react';
import { motion } from 'framer-motion';
import LogoImg from '../assets/logo.png';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="flex h-screen w-full bg-white font-sans text-slate-900 overflow-hidden">

            {/* LEFT PANEL: Professional Branding Node (Fixed 32%) */}
            <div className="hidden lg:flex lg:w-[32%] bg-acadex-navy flex-col justify-between p-12 shrink-0 border-r border-white/5 relative overflow-hidden">

                {/* Background Decoration: Intelligence Glow */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>
                </div>

                {/* Logo Section */}
                <div className="relative z-10">
                    <img src={LogoImg} alt="Logo" className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
                </div>

                {/* Core Message Area */}
                <div className="relative z-10 space-y-8">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-3xl font-bold text-white leading-tight mb-4 tracking-tighter">
                            Enterprise Node <br />
                            <span className="text-blue-400 italic">Access Protocol.</span>
                        </h1>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-[280px]">
                            A unified ecosystem for modern educational institutes. precision-grade management at your fingertips.
                        </p>
                    </motion.div>

                    {/* Trust Indicators in Sidebar */}
                    <div className="space-y-4 pt-6">
                        <FeaturePoint icon={<ShieldCheck size={14} />} label="AES-256 Data Isolation" />
                        <FeaturePoint icon={<Zap size={14} />} label="Real-time Node Syncing" />
                        <FeaturePoint icon={<Globe size={14} />} label="Global Access Framework" />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 flex items-center justify-between">
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-[3px]">© 2025 Acadex Systems</p>
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-blue-500/40 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: Spacious Form Interface (68%) */}
            {/* Background color of the whole section is Slate-50, no extra card background inside */}
            <div className="flex-1 h-screen bg-[#F8FAFC] flex flex-col p-8 md:p-16 lg:p-20 overflow-y-auto no-scrollbar">

                {/* Full Width Wrapper for Content */}
                <div className="w-full max-w-5xl mx-auto">

                    {/* Header Section: Left Aligned for Professional Look */}
                    <div className="mb-12 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-slate-900 tracking-tighter"
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            className="text-slate-500 text-base mt-2 font-medium leading-relaxed max-w-2xl"
                        >
                            {subtitle}
                        </motion.p>
                    </div>

                    {/* Content Area: Occupies full container width */}
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

// MINI COMPONENT for Sidebar Features
const FeaturePoint = ({ icon, label }) => (
    <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group">
        <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
            {icon}
        </div>
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none">
            {label}
        </span>
    </div>
);

export default AuthLayout;