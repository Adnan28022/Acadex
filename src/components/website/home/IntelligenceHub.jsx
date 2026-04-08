import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3, Zap, ShieldCheck, PieChart,
    Activity, ArrowUpRight, CheckCircle2,
    Layers, TrendingUp, Cpu, Database,
    Smartphone, Globe, MousePointer2
} from 'lucide-react';

const IntelligenceHub = () => {
    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-[#F8FAFC] overflow-hidden relative">

            {/* --- DECORATIVE BACKGROUND GLOWS --- */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* 1. HEADER SECTION */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-sm"
                    >
                        <Cpu size={14} className="text-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500">Neural Infrastructure</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight"
                    >
                        The Intelligence Layer of <br />
                        <span className="text-blue-600">Your Institute.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-lg font-medium"
                    >
                        One centralized engine processing financials, academics, and operations <br className="hidden md:block" />
                        with enterprise-grade stability and zero-lag.
                    </motion.p>
                </div>

                {/* 2. BENTO INTELLIGENCE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* --- LARGE CARD: LIVE ANALYTICS ENGINE --- */}
                    <motion.div
                        variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="md:col-span-8 bg-white border border-slate-100 rounded-[48px] p-8 md:p-12 relative overflow-hidden group shadow-xl shadow-blue-900/5"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex justify-between items-start mb-16">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Real-time Data Processing</h3>
                                    <p className="text-slate-500 text-sm max-w-sm font-medium">Monitoring student velocity and financial health with automated visual insights.</p>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                                    <BarChart3 size={24} />
                                </div>
                            </div>

                            {/* Animated Graph Visual */}
                            <div className="flex items-end gap-3 md:gap-5 h-48 px-2 relative">
                                <Bar height="45%" delay={0.1} />
                                <Bar height="70%" delay={0.2} active />
                                <Bar height="55%" delay={0.3} />
                                <Bar height="90%" delay={0.4} active />
                                <Bar height="40%" delay={0.5} />
                                <Bar height="75%" delay={0.6} active />
                                <Bar height="60%" delay={0.7} />
                                {/* Moving Data Line */}
                                <motion.div
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 left-0 w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* --- SMALL CARD: DATA VAULT --- */}
                    <motion.div
                        variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="md:col-span-4 bg-slate-900 rounded-[48px] p-10 flex flex-col justify-between relative overflow-hidden text-white shadow-2xl"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
                                <Database size={28} className="text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-4 leading-tight">Isolated <br />Data Nodes</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                Every academy is housed in its own encrypted vault. Zero cross-tenant access.
                            </p>
                        </div>
                        <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                            <ShieldCheck size={18} className="text-emerald-400" />
                            <span className="text-[10px] font-black uppercase tracking-[2px] text-emerald-400">Bank-Grade AES-256</span>
                        </div>
                        {/* Background Pulse */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500 rounded-full blur-[80px]"
                        />
                    </motion.div>

                    {/* --- BOTTOM ROW: SMART METRICS --- */}
                    <MetricSmallCard
                        icon={<Zap size={20} />}
                        title="Instant Sync"
                        desc="Socket.IO technology ensures 10ms latency."
                        color="text-orange-500"
                        bg="bg-orange-50"
                        badge="Real-time"
                    />

                    <MetricSmallCard
                        icon={<Smartphone size={20} />}
                        title="PWA Native"
                        desc="Install on any device for offline classroom access."
                        color="text-indigo-500"
                        bg="bg-indigo-50"
                        badge="Hybrid"
                    />

                    <MetricSmallCard
                        icon={<TrendingUp size={20} />}
                        title="Auto-Grading"
                        desc="Automated assessment and result generation."
                        color="text-emerald-500"
                        bg="bg-emerald-50"
                        badge="Advanced"
                    />

                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[5px]">Acadex Intelligent Framework • 2025</p>
                </div>
            </div>
        </section>
    );
};

/* --- HELPER COMPONENTS --- */

const Bar = ({ height, delay, active }) => (
    <div className="flex-1 flex flex-col justify-end">
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: height }}
            transition={{ duration: 1, delay: delay, ease: "easeOut" }}
            className={`w-full rounded-t-xl transition-all duration-300 ${active ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-slate-100'}`}
        />
    </div>
);

const MetricSmallCard = ({ icon, title, desc, color, bg, badge }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        whileInView="visible"
        viewport={{ once: true }}
        className="md:col-span-4 bg-white border border-slate-100 rounded-[40px] p-8 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
    >
        <div className="flex items-center justify-between mb-6">
            <div className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                {icon}
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${bg} ${color}`}>{badge}</span>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
    </motion.div>
);

export default IntelligenceHub;