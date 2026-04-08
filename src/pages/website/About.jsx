import React from 'react';
import { motion } from 'framer-motion';
import {
    Target, Sparkles, ShieldCheck, Globe,
    Zap, Rocket, Users, Heart, ArrowRight, CheckCircle2,
    Cpu, Code, Layout, Microscope, ChevronRight,
    Fingerprint, Smartphone, Database, Award
} from 'lucide-react';

const AboutPage = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden">

            {/* --- 1. EXPLOSIVE HERO SECTION --- */}
            {/* FIX: Added pt-32 for Mobile and lg:pt-52 for Desktop to clear the fixed Navbar */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 lg:pt-52 lg:pb-40 overflow-hidden">

                {/* Background Dynamic Layer */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full blur-[120px]"
                    />
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
                    {/* Mission Badge with Pulse */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 text-white rounded-2xl shadow-2xl"
                    >
                        <Sparkles size={16} className="text-blue-400" />
                        <span className="text-[10px] font-black uppercase tracking-[3px]">The Vision of 2025</span>
                    </motion.div>

                    {/* Explosive Headline */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.05]"
                        >
                            Redefining the <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">
                                Academic Backbone.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed"
                        >
                            Acadex is a high-precision SaaS ecosystem engineered to bridge the gap
                            between traditional education and the digital future.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="px-10 py-5 bg-acadex-navy text-white rounded-[20px] font-bold uppercase text-[12px] tracking-[2px] shadow-2xl shadow-acadex-navy/10 hover:bg-acadex-blue transition-all flex items-center gap-3 group">
                            Start Your Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Action & Stats Preview */}
                    <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg"><Globe size={20} /></div>
                            <div className="text-left">
                                <p className="text-[14px] font-bold text-slate-900 leading-none">Global Standard</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Multi-Node Network</p>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg"><ShieldCheck size={20} /></div>
                            <div className="text-left">
                                <p className="text-[14px] font-bold text-slate-900 leading-none">Bank-Grade</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Data Isolation</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating 3D Nodes */}
                <FloatingNode icon={<Database />} pos="top-40 left-[8%]" delay={0} color="text-blue-500" />
                <FloatingNode icon={<ShieldCheck />} pos="bottom-20 left-[15%]" delay={1} color="text-emerald-500" />
                <FloatingNode icon={<Fingerprint />} pos="top-60 right-[10%]" delay={2} color="text-indigo-500" />
                <FloatingNode icon={<Cpu />} pos="bottom-40 right-[8%]" delay={3} color="text-blue-600" />
            </section>

            {/* --- 2. IMPACT STATISTICS (Dark Bar) --- */}
            <div className="bg-slate-900 py-16 relative z-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <StatItem label="Active Institutes" value="150+" />
                    <StatItem label="Global Students" value="50K+" />
                    <StatItem label="Security Standard" value="ISO" />
                    <StatItem label="Uptime Sync" value="99.9%" />
                </div>
            </div>

            {/* --- 3. THE "WHY" SECTION: Split Logic --- */}
            <section className="py-24 px-6 lg:py-40">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        whileInView="visible" initial="hidden" variants={fadeUp} viewport={{ once: true }}
                        className="flex-1 space-y-8"
                    >
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-[4px]">Our Identity</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                            Built for scale, <br /> designed for <span className="text-blue-600">people.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            Paperwork shouldn't hold back education. We realized that most institutes spend 80% of their time on admin work instead of teaching. Acadex was built to flip that ratio.
                        </p>
                        <div className="space-y-4">
                            <FeatureCheck text="Automated admissions & fee recovery" />
                            <FeatureCheck text="Real-time staff & student performance logs" />
                            <FeatureCheck text="Bank-grade data isolation protocols" />
                        </div>
                    </motion.div>
                    <div className="flex-1 w-full relative">
                        <div className="aspect-square bg-slate-50 rounded-[60px] border border-slate-100 relative overflow-hidden group shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 group-hover:opacity-0 transition-opacity"></div>
                            <div className="h-full w-full flex items-center justify-center">
                                <Microscope size={120} strokeWidth={1} className="text-slate-200" />
                            </div>
                            <div className="absolute bottom-10 left-10 p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
                                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Our Goal</p>
                                <h4 className="text-lg font-bold text-slate-900">Zero Error Admin</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. CORE VALUES: The Pillars --- */}
            <section className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">The Acadex Pillars</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard icon={<Award />} title="Excellence" desc="We don't settle for 'good enough'. Our code and UI are polished for the best user experience." />
                        <ValueCard icon={<ShieldCheck />} title="Privacy" desc="Data isolation is our core. Every institute resides in its own encrypted digital vault." />
                        <ValueCard icon={<Zap />} title="Velocity" desc="Speed matters. From login to chat, every action in Acadex happens in milliseconds." />
                    </div>
                </div>
            </section>

            {/* --- 5. TECH CORE SECTION --- */}
            <section className="py-24 px-6 lg:py-40">
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-[50px] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                    <div className="flex-1 space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">The Tech behind the Node.</h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed">
                            Acadex is built using the MERN Stack, integrated with Socket.IO for real-time syncing and WebAuthn for biometric security.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <Badge label="MongoDB" /> <Badge label="Node.js" /> <Badge label="React" /> <Badge label="PWA" />
                        </div>
                    </div>
                    <div className="relative z-10 shrink-0">
                        <div className="w-48 h-48 rounded-[40px] bg-blue-600 flex items-center justify-center shadow-2xl rotate-12 group hover:rotate-0 transition-transform duration-500">
                            <Code size={64} />
                        </div>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
            </section>

            {/* --- 6. FINAL CTA --- */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900">Ready to Evolve?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold uppercase text-[12px] tracking-[2px] shadow-xl hover:bg-blue-500 transition-all flex items-center gap-3">
                            Launch Academy <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- MINI COMPONENTS ---

const FloatingNode = ({ icon, pos, delay, color }) => (
    <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute ${pos} hidden xl:block p-5 bg-white rounded-3xl shadow-2xl border border-slate-100 ${color}`}
    >
        {React.cloneElement(icon, { size: 32 })}
    </motion.div>
);

const StatItem = ({ label, value }) => (
    <div className="space-y-1">
        <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
        <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[3px]">{label}</p>
    </div>
);

const FeatureCheck = ({ text }) => (
    <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
            <CheckCircle2 size={14} className="text-blue-600" />
        </div>
        <span className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">{text}</span>
    </div>
);

const ValueCard = ({ icon, title, desc }) => (
    <div className="p-12 bg-white border border-slate-100 rounded-[40px] hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
);

const Badge = ({ label }) => (
    <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">{label}</span>
);

export default AboutPage;