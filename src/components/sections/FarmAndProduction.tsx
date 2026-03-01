import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { ShieldCheck, Award } from 'lucide-react';

const partners = [
    { name: "FISA MAROC" },
    { name: "HY-LINE" },
    { name: "LE MAROC VERT" },
    { name: "ALF SAHEL" },
    { name: "Crédit Agricole" }
];

const FarmAndProduction: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="farm" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

                    {/* Content Side */}
                    <div className="lg:w-1/2 fade-in-up">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                            <Award size={16} />
                            الأكبر في شمال إفريقيا
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            مزرعة <span className="gradient-text">الإنتاج</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
                            <p>
                                نفخر بتأسيس <strong>أكبر مزرعة والأكثر تطوراً تكنولوجياً في شمال إفريقيا</strong>، تقع في منطقة نزالة العظم (15 كيلومتراً عن مدينة ابن جرير).
                            </p>
                            <p className="border-r-4 border-brand-500 pr-5 text-gray-900 font-bold text-2xl py-2 my-8 bg-gray-50 rounded-lg">
                                " لسنا الوحيدين، لكننا الأفضل "
                            </p>
                            <p>
                                نلتزم بأعلى معايير السلامة والجودة الصحية، باستخدام أفضل الأعلاف وأحدث التقنيات الأوروبية لضمان منتج طازج وصحي يلبي احتياجات الأسرة المغربية.
                            </p>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4">
                            {['تكنولوجيا إنتاج أوتوماتيكية بالكامل', 'أعلاف مختارة بعناية وطبيعية 100%', 'رعاية صحية بيطرية مستمرة'].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="font-bold text-gray-800">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image / Stats Side */}
                    <div className="lg:w-1/2 relative fade-in-up delay-200">
                        {/* Main farm placeholder image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                            <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply z-10"></div>
                            {/* Abstract farm/agriculture representation or specific placeholder */}
                            <img
                                src="/farm_exterior.png"
                                alt="Farm Production"
                                className="w-full object-cover h-[500px]"
                            />

                            {/* Floating Stats Badge */}
                            <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-white/50 animate-float">
                                <div className="text-center">
                                    <p className="text-3xl font-black text-brand-500 mb-1">+30</p>
                                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">سنة من الجودة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partners / Credibility Bar */}
                <div className="mt-24 pt-12 border-t border-gray-100 fade-in-up delay-300">
                    <p className="text-center text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                        شركاؤنا في الجودة والمصداقية
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="font-black text-xl text-gray-400 hover:text-brand-600 transition-colors cursor-default select-none">
                                {partner.name}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FarmAndProduction;
