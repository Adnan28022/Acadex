import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, ShieldCheck, Smartphone, Users,
    Wallet, CheckCircle2, Layout, BookOpen,
    MessageSquare, ClipboardCheck, Fingerprint,
    Globe, Cpu, BarChart3, Clock, ArrowRight,
    Search, Award, Video
} from 'lucide-react';

const FeaturesPage = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden">

            {/* --- 1. DYNAMIC HERO SECTION --- */}
            <section className="relative py-24 lg:py-44 px-6 flex items-center justify-center overflow-hidden border-b border-slate-50">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px]"
                    />
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                </div>

                <motion.div
                    variants={containerVariants} initial="hidden" animate="visible"
                    className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 mb-2 shadow-xl shadow-blue-900/5">
                        <Zap size={16} fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-[3px]">The Full Spectrum</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.05] text-slate-900">
                        Institutional <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">
                            Intelligence.
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Acadex isn't just a management tool. It's a high-performance MERN engine
                        designed to automate every touchpoint of your educational ecosystem.
                    </motion.p>
                </motion.div>

                {/* Floating 3D-like Elements */}
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[5%] top-1/3 hidden xl:block p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[-10deg]">
                    <BarChart3 size={40} className="text-blue-600 opacity-20" />
                </motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute right-[5%] bottom-1/4 hidden xl:block p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[10deg]">
                    <ShieldCheck size={40} className="text-indigo-600 opacity-20" />
                </motion.div>
            </section>

            {/* --- 2. BENTO FEATURES GRID (Core Modules) --- */}
            <section className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Operating Modules</h2>
                        <p className="text-slate-500 font-medium italic uppercase tracking-widest text-[11px]">Precision Built for Every Action</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Wallet />} title="Fee Management"
                            desc="Automated recovery, partial payment tracking, and digital voucher generation with 100% financial transparency."
                            tag="Financials" color="blue"
                        />
                        <FeatureCard
                            icon={<CheckCircle2 />} title="Attendance Hub"
                            desc="Real-time marking with automatic timestamps and threshold alerts if attendance drops below 75%."
                            tag="Academic" color="emerald"
                        />
                        <FeatureCard
                            icon={<MessageSquare />} title="Messenger Hub"
                            desc="Role-isolated instant chat powered by Socket.IO for seamless tutor-student communication."
                            tag="Connectivity" color="indigo"
                        />
                        <FeatureCard
                            icon={<ClipboardCheck />} title="Assessments"
                            desc="Full assignment lifecycle management from creation to grading and student feedback delivery."
                            tag="Evaluations" color="purple"
                        />
                        <FeatureCard
                            icon={<Fingerprint />} title="Passkey Security"
                            desc="Enterprise-grade biometric login (Touch ID / Face ID) eliminating the need for weak passwords."
                            tag="Security" color="slate"
                        />
                        <FeatureCard
                            icon={<Smartphone />} title="PWA Support"
                            desc="Install Acadex as a native app on any device. Experience offline support and instant loading speeds."
                            tag="Interface" color="orange"
                        />
                    </div>
                </div>
            </section>

            {/* --- 3. THE "HIGH-TECH" SHOWCASE (Detailed Sections) --- */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Admin Feature Row */}
                    <DetailedRow
                        title="Powerful Admin Control"
                        desc="Super Admin and Admin roles get custom-tailored dashboards. From subscription management to staff onboarding, stay in control of every data node."
                        features={["Multi-Tenant Isolation", "Global Analytics", "Branch Management", "Revenue Reports"]}
                        icon={<Layout size={48} />}
                        reversed={false}
                        imgBg="bg-blue-600"
                    />

                    {/* Instructor Feature Row */}
                    <DetailedRow
                        title="Instructor Workspace"
                        desc="Empower your faculty with high-speed tools. Teachers can manage their own syllabus, materials, and student chat rooms independently."
                        features={["Resource Upload", "Video Lectures", "Gradebook Management", "Live Schedules"]}
                        icon={<BookOpen size={48} />}
                        reversed={true}
                        imgBg="bg-indigo-600"
                    />

                </div>
            </section>

            {/* --- 4. FINAL CALL TO ACTION --- */}
            <section className="py-24 px-6 text-center bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">Scale with <br /> Intelligence.</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold uppercase text-[12px] tracking-[2px] shadow-xl hover:bg-blue-500 transition-all flex items-center justify-center gap-3 group">
                            Register Academy <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
                {/* Decorative background logo */}
                <div className="absolute -bottom-20 -right-20 text-white opacity-[0.03] rotate-12">
                    <Cpu size={500} />
                </div>
            </section>
        </div>
    );
};

/* --- MINI COMPONENTS --- */

const FeatureCard = ({ icon, title, desc, tag, color }) => {
    const colors = {
        blue: "text-blue-600 bg-blue-50 border-blue-100",
        emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
        purple: "text-purple-600 bg-purple-50 border-purple-100",
        slate: "text-slate-600 bg-slate-50 border-slate-100",
        orange: "text-orange-600 bg-orange-50 border-orange-100"
    };
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="p-10 rounded-[44px] bg-white border border-slate-100 shadow-xl shadow-blue-900/5 flex flex-col justify-between group"
        >
            <div>
                <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <div className="space-y-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${colors[color]}`}>{tag}</span>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
};

const DetailedRow = ({ title, desc, features, icon, reversed, imgBg }) => (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
        <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-slate-900">{title}</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">{desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        <span className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">{f}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className={`w-full lg:w-[450px] aspect-square rounded-[60px] ${imgBg} flex items-center justify-center text-white shadow-2xl relative`}>
            {icon}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[60px] opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-[4px]">Advanced Node</span>
            </div>
        </div>
    </div>
);

export default FeaturesPage;