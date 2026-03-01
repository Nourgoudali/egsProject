import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { Calendar, Building2, MapPin, TrendingUp, Star } from 'lucide-react';

const historyTimeline = [
    {
        year: '1997',
        title: 'الانتقال إلى الدار البيضاء',
        desc: 'بداية الانطلاقة الكبرى عبر هيكلة وتوسيع شبكة التوزيع، لنصبح فاعلاً رئيسياً في تجارة البيض على المستوى الوطني.',
        icon: TrendingUp,
        color: 'bg-blue-500'
    },
    {
        year: '2002',
        title: 'أول مزرعة إنتاج',
        desc: 'تحقيق الحلم بالتحول من التوزيع إلى الإنتاج الذاتي من خلال إنشاء أول مزرعة عصرية في مدينة الحاجب.',
        icon: Building2,
        color: 'bg-brand-500'
    },
    {
        year: '2003',
        title: 'توسيع الاستثمارات',
        desc: 'الاستحواذ على مزرعتين إضافيتين في ابن جرير ومزرعة في قلعة السراغنة لتلبية الطلب المتزايد.',
        icon: MapPin,
        color: 'bg-green-500'
    },
    {
        year: '2007',
        title: 'أكبر مزرعة في شمال إفريقيا',
        desc: 'تأسيس أضخم مزرعة والأكثر تطوراً تكنولوجياً في شمال إفريقيا بمنطقة نزالة العظم (15 كم عن ابن جرير).',
        icon: Star,
        color: 'bg-amber-500'
    }
];

const CompanyHistory: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="history" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <Calendar size={16} />
                        تاريخنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        محطات في <span className="gradient-text">مسيرتنا</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        عقود من التطور والنمو المستمر لتزويد السوق المغربي بأفضل جودة
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-brand-100 before:via-brand-500 before:to-brand-100">

                    {historyTimeline.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={item.year} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group fade-in-up delay-${(index + 1) * 100} mb-12 last:mb-0`}>

                                {/* Icon Marker */}
                                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white ${item.color} text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110`}>
                                    <Icon size={20} />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 relative">
                                    {/* Arrow connecting to line */}
                                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 ${isEven ? '-right-2 border-r-0 border-b-0' : '-left-2 border-t-0 border-l-0 border-b border-r'}`}></div>

                                    <span className={`inline-block px-4 py-1.5 rounded-full text-white font-black text-sm mb-4 shadow-sm ${item.color}`}>
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
