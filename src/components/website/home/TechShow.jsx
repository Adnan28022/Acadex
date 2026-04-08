import React from 'react';
import { motion } from 'framer-motion';
import {
    Fingerprint, Smartphone, Zap, ShieldCheck, CheckCircle2,
    WifiOff, BellRing, Lock, Cpu, Globe
} from 'lucide-react';

const TechShowcase = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* 1. SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full mb-6 border border-indigo-100"
                    >
                        <Cpu size={14} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[3px]">The Intelligence Layer</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight">
                        Security that feels <br />
                        <span className="text-blue-600 italic">Invisible.</span>
                    </h2>
                    <p className="text-slate-500 text-lg mt-6 font-medium">
                        Leveraging WebAuthn and Service Workers to provide a native-app experience
                        with bank-grade biometric security.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* --- FEATURE 1: BIOMETRIC PASSKEYS --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group p-10 rounded-[48px] bg-slate-900 text-white overflow-hidden h-[500px] flex flex-col justify-between"
                    >
                        {/* Visual Animation: Scanning Effect */}
                        <div className="absolute top-0 right-0 w-full h-1/2 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0]
                                }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="relative w-64 h-64 border-2 border-blue-500 rounded-full flex items-center justify-center"
                            >
                                <Fingerprint size={120} className="text-blue-400" />
                                {/* Scanning Bar */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
                                />
                            </motion.div>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight">Passwordless <br />Authentication</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Log in instantly with Touch ID or Face ID. No passwords to remember,
                                no phishing risks. Just absolute precision.
                            </p>
                        </div>

                        <div className="relative z-10 flex gap-4">
                            <Badge label="FIDO2 Protocol" />
                            <Badge label="WebAuthn API" />
                        </div>

                        {/* Background subtle glow */}
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
                    </motion.div>

                    {/* --- FEATURE 2: PROGRESSIVE WEB APP --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group p-10 rounded-[48px] bg-[#F1F5F9] border border-slate-200 overflow-hidden h-[500px] flex flex-col justify-between"
                    >
                        {/* Visual Animation: Floating Device */}
                        <div className="absolute top-10 right-[-20px] w-1/2 h-full hidden md:block">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-80 bg-white rounded-t-[32px] border-t-8 border-x-8 border-slate-900 shadow-2xl p-4"
                            >
                                <div className="space-y-4">
                                    <div className="h-6 w-1/2 bg-slate-100 rounded-lg"></div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-20 bg-blue-50 rounded-xl"></div>
                                        <div className="h-20 bg-indigo-50 rounded-xl"></div>
                                    </div>
                                    <div className="h-32 bg-slate-50 rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="text-blue-500" size={32} />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Desktop & Mobile <br />Installation</h3>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                Install Acadex directly from your browser. Works offline, supports
                                push notifications, and updates automatically.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <PwaFeature icon={<WifiOff size={14} />} label="Offline Access" />
                                <PwaFeature icon={<BellRing size={14} />} label="Push Alerts" />
                                <PwaFeature icon={<Globe size={14} />} label="Fast Load" />
                            </div>
                            <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 hover:shadow-lg transition-all">
                                Add to Home Screen
                            </button>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

// MINI COMPONENTS
const Badge = ({ label }) => (
    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest text-blue-400">
        {label}
    </span>
);

const PwaFeature = ({ icon, label }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span className="text-blue-600">{icon}</span>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{label}</span>
    </div>
);

export default TechShowcase;