import React from 'react';
import { Award, Truck, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

const features = [
    {
        id: 'quality',
        icon: Award,
        title: 'جودة بريميوم',
        titleFr: 'Qualité Premium',
        description: 'بيض طازج عالي الجودة من مزارعنا مع الالتزام بأعلى المعايير الصحية والغذائية',
        color: 'from-amber-400 to-orange-500',
        bgColor: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        id: 'delivery',
        icon: Truck,
        title: 'توصيل سريع',
        titleFr: 'Livraison Rapide',
        description: 'أسطول نقل مجهز يضمن وصول البيض طازجاً إلى جميع أنحاء المملكة في أسرع وقت',
        color: 'from-blue-400 to-indigo-500',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        id: 'hygiene',
        icon: ShieldCheck,
        title: 'معايير صحية',
        titleFr: 'Normes Sanitaires',
        description: 'نلتزم بجميع المعايير الصحية المعتمدة لضمان سلامة المنتوج من المزرعة إلى مائدتكم',
        color: 'from-emerald-400 to-green-500',
        bgColor: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
    },
    {
        id: 'service',
        icon: HeadphonesIcon,
        title: 'خدمة احترافية',
        titleFr: 'Service Professionnel',
        description: 'فريق تجاري متخصص ومتوفر على مدار الساعة لخدمتكم وتلبية طلباتكم بكفاءة عالية',
        color: 'from-purple-400 to-violet-500',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
];

const WhyChooseUs: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="why-us" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-bl-[200px] opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50 rounded-tr-[200px] opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        مميزاتنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        لماذا تختار <span className="gradient-text">بيض الرحامنة؟</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        لسنا الوحيدين، لكننا الأفضل — أكثر من 30 سنة من الجودة والثقة والأمانة
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className={`fade-in-up delay-${(idx + 1) * 100} group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gray-900/10 overflow-hidden`}
                            >
                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon size={30} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-black text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">{feature.titleFr}</p>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {feature.description}
                                </p>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
