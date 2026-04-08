import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShieldCheck, Globe, Zap, Mail, Phone,
    MapPin, ArrowRight, CheckCircle2, Cpu,
    MessageSquare, Send, Share2
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden relative">

            {/* --- TOP CTA: PRE-FOOTER --- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-xl text-center lg:text-left space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">Ready to digitize your entire institute?</h2>
                        <p className="text-blue-100 text-lg opacity-80 font-medium">Join 150+ academies scaling with Acadex SaaS node.</p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/register" className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold uppercase text-[11px] tracking-[2px] hover:bg-blue-50 transition-all text-center shadow-xl">
                            Register Institute
                        </Link>
                        <button className="px-10 py-5 bg-blue-700/30 text-white border border-white/20 rounded-2xl font-bold uppercase text-[11px] tracking-[2px] hover:bg-blue-700/50 transition-all text-center">
                            Contact Sales
                        </button>
                    </div>
                    <Zap size={200} className="absolute -right-20 -bottom-20 text-white/10 rotate-12" />
                </div>
            </div>

            {/* --- MAIN FOOTER CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">

                    {/* Column 1: Branding */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-blue-600/20">A</div>
                                <span className="text-2xl font-bold tracking-tighter uppercase">Acadex</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                The global infrastructure for modern educational institutes.
                                Precision management at your fingertips since 2025.
                            </p>
                        </div>

                        {/* Social Icons using raw SVGs (Guaranteed to work) */}
                        <div className="flex items-center gap-4">
                            <SocialIcon>
                                <svg size="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </SocialIcon>
                            <SocialIcon>
                                <svg size="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                            </SocialIcon>
                            <SocialIcon>
                                <svg size="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </SocialIcon>
                        </div>
                    </div>

                    {/* Column 2: Platform Links */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-blue-400">The Nodes</h4>
                        <ul className="space-y-4">
                            <FooterLink label="Super Admin Portal" />
                            <FooterLink label="Institute Manager" />
                            <FooterLink label="Instructor Workspace" />
                            <FooterLink label="Student Classroom" />
                            <FooterLink label="PWA Mobile App" />
                        </ul>
                    </div>

                    {/* Column 3: Core Modules */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-blue-400">Intelligence</h4>
                        <ul className="space-y-4">
                            <FooterLink label="Fee Management" />
                            <FooterLink label="Attendance Hub" />
                            <FooterLink label="Real-time Messenger" />
                            <FooterLink label="Grade Reporting" />
                            <FooterLink label="Security & Passkeys" />
                        </ul>
                    </div>

                    {/* Column 4: Contact & Location */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[4px] text-blue-400">Global Desk</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-blue-500 shrink-0" />
                                <span className="text-sm text-slate-400 leading-tight">Sector F-10/2, Islamabad, <br />Pakistan • 44000</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <span className="text-sm text-slate-400">hello@acadex.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span className="text-sm text-slate-400">+92 300 1234567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">© 2025 Acadex Systems Inc.</p>

                    <div className="flex items-center gap-6 grayscale opacity-30 hover:opacity-100 transition-all duration-700">
                        <CertBadge icon={<ShieldCheck size={14} className="text-blue-400" />} label="ISO 27001" />
                        <CertBadge icon={<CheckCircle2 size={14} className="text-emerald-400" />} label="GDPR Ready" />
                        <CertBadge icon={<Cpu size={14} className="text-indigo-400" />} label="AES-256" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ label }) => (
    <li>
        <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-all flex items-center gap-2 group">
            <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
            {label}
        </a>
    </li>
);

const SocialIcon = ({ children }) => (
    <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all p-2.5">
        {children}
    </a>
);

const CertBadge = ({ icon, label }) => (
    <div className="flex items-center gap-2 border border-white/20 px-3 py-1 rounded-lg">
        {icon}
        <span className="text-[9px] font-black uppercase tracking-widest text-white">{label}</span>
    </div>
);

export default Footer;