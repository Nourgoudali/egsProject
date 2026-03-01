import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '#home' },
        { name: 'المنتجات', href: '#products' },
        { name: 'لماذا نحن', href: '#why-us' },
        { name: 'مراحل الإنتاج', href: '#production' },
        { name: 'تواصل معنا', href: '#contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="flex items-center gap-3 group"
                >
                    <img
                        src="/logo.png"
                        alt="OEUFS REHAMNA Logo"
                        className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                            }`}
                    />
                    <div className="hidden sm:flex flex-col">
                        <span
                            className={`font-black text-base md:text-lg leading-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                                }`}
                        >
                            OEUFS REHAMNA
                        </span>
                        <span
                            className={`text-[10px] md:text-xs font-medium transition-colors ${isScrolled ? 'text-brand-600' : 'text-brand-300'
                                }`}
                        >
                            بيض الرحامنة
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200
                                hover:bg-brand-500/10 hover:text-brand-600
                                ${isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}
                            `}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button (Desktop) */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:+212661099114"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${isScrolled
                                ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/20'
                                : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/20'
                            }`}
                    >
                        <Phone size={16} />
                        اتصل بنا
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    id="mobile-menu-toggle"
                    className={`lg:hidden p-2.5 rounded-xl transition-all ${isScrolled
                            ? 'text-gray-900 hover:bg-gray-100'
                            : 'text-white hover:bg-white/15'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-400 overflow-hidden border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col py-3 px-4">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="py-3.5 px-4 text-gray-800 font-semibold border-b border-gray-50 last:border-0 hover:text-brand-600 hover:bg-brand-50/50 transition-all rounded-lg"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+212661099114"
                        className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 text-white font-bold hover:bg-brand-600 transition-colors"
                    >
                        <Phone size={18} />
                        اتصل بنا الآن
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
