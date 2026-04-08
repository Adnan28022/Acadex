import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // useLocation add kiya

// Logo import from assets folder
import LogoImg from '../../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Current path track karne ke liye

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' } // Contact Page add kiya
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 md:px-8 ${scrolled ? "py-3" : "py-6"}`}>
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-2 transition-all duration-500 rounded-[20px] ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/50"
                : "bg-transparent border border-transparent"
                }`}>

                {/* LOGO SECTION */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="relative overflow-hidden">
                        <img
                            src={LogoImg}
                            alt="Acadex Logo"
                            className="h-9 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col border-l border-slate-200 pl-2.5">
                        <span className="text-[17px] font-black tracking-tighter text-acadex-navy leading-none">
                            ACADEX
                        </span>
                        <span className="text-[9px] font-extrabold text-acadex-blue tracking-[0.15em] uppercase opacity-80">
                            Intelligence
                        </span>
                    </div>
                </Link>

                {/* NAV LINKS (CENTER) - Updated with Active Logic */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative text-[10px] font-bold tracking-[0.12em] uppercase transition-colors group ${isActive ? "text-acadex-navy" : "text-slate-500 hover:text-acadex-navy"
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-acadex-blue transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`}></span>
                            </Link>
                        );
                    })}
                </div>

                {/* ACTION BUTTONS (RIGHT) */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="hidden sm:block text-[10px] font-bold text-slate-600 px-4 py-2 hover:text-acadex-navy uppercase tracking-widest transition-all"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/register"
                        className="bg-acadex-navy text-white text-[10px] font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-acadex-navy/10 hover:bg-acadex-blue transition-all duration-300 flex items-center gap-2 uppercase tracking-[0.1em]"
                    >
                        Join Now <ArrowRight size={13} strokeWidth={3} />
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button className="md:hidden p-2 text-acadex-navy">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;