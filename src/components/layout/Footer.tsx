import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../../data/contacts';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"></div>

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="OEUFS REHAMNA" className="h-12 w-auto" />
                            <div>
                                <span className="font-black text-lg text-white block leading-tight">
                                    OEUFS REHAMNA
                                </span>
                                <span className="text-brand-400 text-xs font-semibold">
                                    بيض الرحامنة
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm mb-6">
                            أكثر من 30 سنة في إنتاج وتوزيع البيض. الجودة، السرعة والأمانة شعارنا. لسنا الوحيدين لكننا الأفضل.
                        </p>
                        <p className="text-sm text-gray-500">
                            Production et distribution d'œufs frais de haute qualité au Maroc
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                            روابط سريعة
                            <span className="absolute -bottom-2 right-0 w-10 h-0.5 bg-brand-500 rounded"></span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'الرئيسية', href: '#home' },
                                { name: 'من نحن', href: '#founder' },
                                { name: 'المنتجات', href: '#products' },
                                { name: 'مزرعتنا', href: '#farm' },
                                { name: 'تواصل معنا', href: '#contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-brand-400 transition-colors text-sm flex items-center gap-2 group"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-brand-400 transition-colors"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                            معلومات الاتصال
                            <span className="absolute -bottom-2 right-0 w-10 h-0.5 bg-brand-500 rounded"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-brand-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-400">{contactInfo.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-brand-500 shrink-0 mt-0.5" />
                                <a href={`tel:${contactInfo.phones[0]?.number.replace(/\s+/g, '')}`} className="text-sm text-gray-400 hover:text-brand-400 transition-colors" dir="ltr">
                                    {contactInfo.phones[0]?.number}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-brand-500 shrink-0 mt-0.5" />
                                <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-400 hover:text-brand-400 transition-colors" dir="ltr">
                                    {contactInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                            ساعات العمل
                            <span className="absolute -bottom-2 right-0 w-10 h-0.5 bg-brand-500 rounded"></span>
                        </h3>
                        <div className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700/50 text-center">
                            <p className="text-brand-400 font-black text-2xl mb-1">{contactInfo.hours}</p>
                            <p className="text-gray-500 text-xs">نحن في خدمتكم على مدار الساعة</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs">
                        &copy; {currentYear} OEUFS REHAMNA — جميع الحقوق محفوظة
                    </p>
                    <span className="text-[10px] text-brand-600 font-medium px-3 py-1 bg-brand-900/30 rounded-full border border-brand-700/20">
                        بيض الرحامنة
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
