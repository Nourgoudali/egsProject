import React from 'react';
import { ArrowLeft, Phone, Shield, Truck, Award } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900 text-white"
        >
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1587486913049-53fc88980cfc?q=80&w=2000&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/40 via-gray-900/80 to-gray-900/95"></div>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-400/8 rounded-full blur-[80px] animate-float pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Logo badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 animate-fade-in">
                        <img src="/logo.png" alt="OEUFS REHAMNA" className="h-8 w-auto" />
                        <span className="text-brand-300 font-semibold text-sm">
                            أكثر من 30 سنة من الجودة والامتياز
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-6 animate-slide-up">
                        <span className="block text-white">OEUFS</span>
                        <span className="block gradient-text">REHAMNA</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 max-w-2xl text-balance leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Production et distribution d'œufs frais de haute qualité au Maroc
                    </p>
                    <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        إنتاج وتوزيع بيض طازج عالي الجودة — جودة، سرعة، أمانة
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-gray-900 font-black text-lg transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-brand-500/30 hover:shadow-brand-400/40"
                        >
                            <Phone size={20} />
                            Contacter un commercial
                            <ArrowLeft size={20} className="animate-bounce-x" />
                        </a>
                        <a
                            href="#products"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md transition-all border border-white/15 hover:border-white/30"
                        >
                            Nos produits
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center gap-6 md:gap-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-center gap-2.5 text-gray-400">
                            <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center">
                                <Shield size={18} className="text-brand-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">جودة معتمدة</p>
                                <p className="text-xs">Qualité certifiée</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-400">
                            <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center">
                                <Truck size={18} className="text-brand-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">توصيل سريع</p>
                                <p className="text-xs">Livraison rapide</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-400">
                            <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center">
                                <Award size={18} className="text-brand-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">+30 سنة خبرة</p>
                                <p className="text-xs">+30 ans d'expérience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
