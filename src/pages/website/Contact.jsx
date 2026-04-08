import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail, Phone, MapPin, Send, MessageSquare,
    Globe, Clock, CheckCircle2, ShieldCheck,
    ArrowRight, Zap, Headset, Sparkles,
     MessagesSquare, MousePointer2
} from 'lucide-react';

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-white font-sans text-slate-900 overflow-hidden">

            {/* --- 1. NEW CINEMATIC HERO SECTION --- */}
            <section className="relative pt-24 pb-20 lg:pt-48 lg:pb-40 px-6 overflow-hidden flex flex-col items-center text-center">

                {/* Dynamic Background Layer */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Floating Glow Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 40, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[130px] opacity-50"
                    />
                    {/* Subtle Dot Grid */}
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-5xl mx-auto space-y-10"
                >
                    {/* Floating Status Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-blue-900/5 mb-4">
                        <Sparkles size={16} className="text-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[3px] text-slate-500">Global Connectivity Node</span>
                    </motion.div>

                    {/* Main Explosive Headline */}
                    <div className="space-y-4">
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.05] text-slate-900">
                            Build your <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">
                                Digital Future.
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                            Have questions about our enterprise node? Our architecture team is standing by to provide real-time guidance for your institute.
                        </motion.p>
                    </div>

                    {/* Action Stats Preview */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg"><Globe size={24} /></div>
                            <div className="text-left">
                                <p className="text-[15px] font-bold text-slate-900 leading-none">Global Access</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">24/7 Availability</p>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg"><ShieldCheck size={24} /></div>
                            <div className="text-left">
                                <p className="text-[15px] font-bold text-slate-900 leading-none">Encrypted Node</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">ISO Standards</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[10%] hidden xl:block p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[-12deg]"
                >
                    <Headset size={40} className="text-blue-500 opacity-20" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 right-[10%] hidden xl:block p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 rotate-[12deg]"
                >
                    <MessagesSquare size={40} className="text-indigo-500 opacity-20" />
                </motion.div>
            </section>

            {/* --- 2. CONTACT GRID: Forms & Info --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT: Contact Information */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <h2 className="text-[11px] font-black text-blue-600 uppercase tracking-[4px] mb-4">Direct Channels</h2>
                            <p className="text-slate-500 font-medium">Choose your preferred method of communication.</p>
                        </div>

                        <div className="space-y-4">
                            <ContactMethod icon={<Mail size={24} />} label="Official Support" value="hello@acadex.com" color="blue" />
                            <ContactMethod icon={<Phone size={24} />} label="Hotline Access" value="+92 300 1234567" color="indigo" />
                            <ContactMethod icon={<MapPin size={24} />} label="HQ Headquarters" value="Sector F-10, Islamabad, PK" color="slate" />
                        </div>

                        {/* Security Assurance */}
                        <div className="bg-slate-900 rounded-[44px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                            <div className="relative z-10 space-y-6">
                                <ShieldCheck size={48} className="text-blue-400" />
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold tracking-tight">Multi-Tenant Isolation</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">Your inquiries are processed via isolated encrypted node points for absolute privacy.</p>
                                </div>
                                <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                    <CheckCircle2 size={16} /> 256-Bit SSL Secured
                                </div>
                            </div>
                            <Zap size={200} className="absolute -right-16 -bottom-16 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* RIGHT: High-Level Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#F8FAFC] border border-slate-100 rounded-[56px] p-8 md:p-14 shadow-xl shadow-blue-900/5">
                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <FormInput label="Full Identity" placeholder="Zeeshan Ali" />
                                    <FormInput label="Network Email" placeholder="zeeshan@acadex.com" type="email" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <FormInput label="Institution" placeholder="Oxford Academy" />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Inquiry Node</label>
                                        <select className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-blue-600 transition-all text-[13px] font-semibold">
                                            <option>General Support</option>
                                            <option>Commercial Demo</option>
                                            <option>Enterprise Plans</option>
                                            <option>Technical Issue</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Transmission Message</label>
                                    <textarea
                                        required rows={5}
                                        className="w-full px-6 py-5 bg-white border border-slate-200 rounded-[32px] outline-none focus:border-blue-600 transition-all text-[14px] font-medium resize-none"
                                        placeholder="Describe your requirement deeply..."
                                    />
                                </div>

                                <button
                                    disabled={formStatus === 'sending' || formStatus === 'success'}
                                    className={`w-full py-5 rounded-2xl font-bold uppercase text-[12px] tracking-[3px] transition-all flex items-center justify-center gap-3 shadow-2xl ${formStatus === 'success' ? 'bg-emerald-600 text-white' : 'bg-acadex-navy text-white hover:bg-acadex-blue shadow-blue-900/20'
                                        }`}
                                >
                                    {formStatus === 'sending' ? 'Transmitting...' :
                                        formStatus === 'success' ? <><CheckCircle2 size={18} /> Transmission Successful</> :
                                            <><Send size={18} /> Push Message to Node</>}
                                </button>

                                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                    Transmission Latency: <span className="text-blue-600"> &lt; 2.5ms</span> • Responding in 2 hours
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

/* --- MINI COMPONENTS --- */

const ContactMethod = ({ icon, label, value, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        indigo: "bg-indigo-50 text-indigo-600",
        slate: "bg-slate-50 text-slate-600"
    };
    return (
        <div className="flex items-center gap-6 p-6 rounded-[32px] border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all group">
            <div className={`w-14 h-14 rounded-2xl ${colors[color]} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{label}</p>
                <p className="text-[15px] font-bold text-slate-900 leading-none">{value}</p>
            </div>
        </div>
    );
};

const FormInput = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
        <input
            required type={type}
            className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-blue-600 transition-all text-[13px] font-semibold"
            placeholder={placeholder}
        />
    </div>
);

export default ContactPage;