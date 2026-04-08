import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, Quote, Star,
    CheckCircle2, Building2, GraduationCap, UserCircle, Zap
} from 'lucide-react';

const TestimonialsSlider = () => {
    const [index, setIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "Dr. Arshad Mehmood",
            role: "Institute Director",
            org: "Oxford International",
            content: "Acadex is not just a software; it's a digital transformation. We reduced our administrative workload by 70% within the first month of implementation. The financial reporting is pinpoint accurate.",
            stats: "70% Less Admin Work",
            icon: <Building2 className="text-blue-600" size={24} />,
            color: "from-blue-600 to-indigo-600"
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Senior Faculty",
            org: "Tech Academy",
            content: "The real-time engagement between teachers and students via the integrated messenger and assignment hub has improved our student retention rate significantly. It’s effortless and high-speed.",
            stats: "40% Higher Retention",
            icon: <GraduationCap className="text-emerald-600" size={24} />,
            color: "from-emerald-600 to-teal-600"
        },
        {
            id: 3,
            name: "Zeeshan Ali",
            role: "Full Stack Student",
            org: "Acadex Alumnus",
            content: "As a student, the PWA experience is everything. I can access my attendance and grades with a single tap. The biometric login makes it feel like I'm using a futuristic banking app.",
            stats: "98% Student App Adoption",
            icon: <UserCircle className="text-purple-600" size={24} />,
            color: "from-purple-600 to-pink-600"
        }
    ];

    const nextStep = () => setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    const prevStep = () => setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* 1. SECTION HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg">
                            <Star size={14} className="text-blue-600 fill-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-[3px] text-blue-700">Client Success</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight">
                            Loved by the new <br />
                            <span className="text-blue-600">generation</span> of educators.
                        </h2>
                    </div>

                    {/* Unique Slider Controls */}
                    <div className="flex items-center gap-3">
                        <button onClick={prevStep} className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextStep} className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* 2. MAIN SLIDER AREA */}
                <div className="relative min-h-[500px] flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        >
                            {/* Visual Side (Left) */}
                            <div className="lg:col-span-5 relative">
                                <div className={`relative z-10 w-full aspect-square rounded-[60px] bg-gradient-to-br ${reviews[index].color} p-1 shadow-2xl shadow-blue-900/20`}>
                                    <div className="w-full h-full bg-slate-900 rounded-[58px] p-12 flex flex-col justify-between items-center text-center">
                                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10 mb-6">
                                            {reviews[index].icon}
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-blue-400 text-[11px] font-black uppercase tracking-[4px]">Performance Metric</p>
                                            <h4 className="text-4xl font-black text-white tracking-tighter">{reviews[index].stats}</h4>
                                        </div>
                                        <div className="w-full pt-8 border-t border-white/10">
                                            <p className="text-white font-bold text-lg">{reviews[index].name}</p>
                                            <p className="text-white/40 text-xs uppercase tracking-widest mt-1 font-bold">{reviews[index].role} • {reviews[index].org}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Background Decorative Circle */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                            </div>

                            {/* Content Side (Right) */}
                            <div className="lg:col-span-7 space-y-10 lg:pl-12">
                                <Quote size={64} className="text-blue-600/10" strokeWidth={3} />
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl md:text-4xl font-medium text-slate-800 leading-[1.3] tracking-tight"
                                >
                                    "{reviews[index].content}"
                                </motion.p>

                                <div className="flex flex-wrap gap-6 pt-6">
                                    <TrustPoint label="Verified Node" />
                                    <TrustPoint label="2025 Standard" />
                                    <TrustPoint label="Secure Data" />
                                </div>

                                {/* Slider Progress Dots */}
                                <div className="flex gap-2 pt-8">
                                    {reviews.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-12 bg-blue-600' : 'w-3 bg-slate-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

const TrustPoint = ({ label }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
        <CheckCircle2 size={14} className="text-blue-600" />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
);

export default TestimonialsSlider;