import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, CheckCircle2, ShieldCheck,
    Zap, Building2, GraduationCap, Users,
    Wallet, Layout, ArrowRight, Cpu, Sparkles, Globe
} from 'lucide-react';

const SolutionsPage = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden">

            {/* --- HERO SECTION: Dynamic & Animated --- */}
            <section className="relative py-24 lg:py-40 px-6 overflow-hidden flex items-center justify-center">

                {/* 1. ANIMATED BACKGROUND ELEMENTS */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Glowing Orbs */}
                    <motion.div
                        animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/80 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-[120px]"
                    />
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                {/* 2. HERO CONTENT */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative max-w-5xl mx-auto text-center space-y-8 z-10"
                >
                    {/* Floating Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-blue-900/5 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500">The Ultimate Node</span>
                    </motion.div>

                    {/* Explosive Headline */}
                    <div className="space-y-4">
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.1]">
                            Modern Problems. <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">
                                Precision Solved.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Acadex transforms chaotic paperwork into a high-performance digital engine.
                            Explore our modular ecosystem built for scale.
                        </motion.p>
                    </div>

                    {/* Decorative Icons Row */}
                    <motion.div variants={itemVariants} className="flex justify-center items-center gap-6 pt-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100"><Building2 size={20} /></div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100"><GraduationCap size={20} /></div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100"><Users size={20} /></div>
                    </motion.div>
                </motion.div>

                {/* Perspective Elements */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 left-10 hidden xl:block p-4 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[-6deg]"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"><Cpu size={20} /></div>
                        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Neural Sync</span>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-10 hidden xl:block p-4 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[6deg]"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg"><ShieldCheck size={20} /></div>
                        <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Isolated Node</span>
                    </div>
                </motion.div>
            </section>

            {/* --- ACCORDION SECTION (Pichla code same rahega) --- */}
            <section className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Platform Capabilities</h2>
                        <p className="text-slate-500 font-medium">Explore how we handle the complex needs of modern academies.</p>
                    </div>

                    <div className="space-y-4">
                        <SolutionAccordion
                            id="01"
                            title="Administrative & Financial Core"
                            desc="Automate the most stressful part of your business. Our financial engine handles complex fee structures, partial payments, and automated recovery."
                            features={["Automated Fee Vouchers", "Expense Tracking", "Staff Payroll Management", "Admission CRM"]}
                            icon={<Wallet size={20} />}
                            defaultOpen={true}
                        />
                        <SolutionAccordion
                            id="02"
                            title="Academic Operations & Attendance"
                            desc="Move beyond manual registers. Track every student's presence and performance in real-time with zero-lag data syncing."
                            features={["Live Attendance Hub", "Automated Timetables", "Syllabus Progress Tracking", "Exam & Result Management"]}
                            icon={<Layout size={20} />}
                        />
                        <SolutionAccordion
                            id="03"
                            title="Communication & Engagement"
                            desc="Bridge the gap between instructors and learners. High-speed, role-isolated chat environments powered by Socket.IO."
                            features={["Tutor-Student Chat", "Global Notice Board", "Assignment Hub", "Real-time Notifications"]}
                            icon={<Users size={20} />}
                        />
                        <SolutionAccordion
                            id="04"
                            title="Enterprise Security & Infrastructure"
                            desc="Your data is your asset. We protect it with biometric passkeys and isolated database architectures for every institute."
                            features={["Passkey/Biometric Login", "Multi-Tenant Isolation", "PWA (Installable App)", "Offline Support"]}
                            icon={<ShieldCheck size={20} />}
                        />
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ready for the transformation?</h2>
                        <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold uppercase text-[12px] tracking-[2px] shadow-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3 mx-auto group">
                            Register Your Institute <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                </div>
            </section>
        </div>
    );
};

/* --- RE-USABLE ANIMATED ACCORDION COMPONENT --- */
const SolutionAccordion = ({ id, title, desc, features, icon, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`border transition-all duration-500 rounded-[32px] overflow-hidden ${isOpen ? 'bg-white border-blue-200 shadow-xl shadow-blue-900/5' : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-8 text-left">
                <div className="flex items-center gap-6">
                    <span className="text-[12px] font-black text-blue-600/30 font-mono">{id}</span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white' : 'bg-white text-slate-400 border border-slate-200'}`}>
                        {icon}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>{title}</h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-white text-slate-300 border border-slate-100'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                        <div className="px-8 pb-10 md:pl-32 pr-12 space-y-8">
                            <p className="text-slate-500 text-base leading-relaxed max-w-2xl font-medium">{desc}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0"><CheckCircle2 size={12} className="text-emerald-600" /></div>
                                        <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <button className="flex items-center gap-2 text-blue-600 font-bold text-[11px] uppercase tracking-[2px] group">Deep Dive into Module <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SolutionsPage;