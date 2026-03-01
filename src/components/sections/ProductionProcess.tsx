import React from 'react';
import { productionSteps } from '../../data/production';
import { useScrollReveal } from '../../utils/useScrollReveal';

const ProductionProcess: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="production" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-bl-[200px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-tr-[200px] opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        رحلة البيضة من المزرعة
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        مراحل <span className="gradient-text">الإنتاج</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        نلتزم بأعلى معايير الجودة والسلامة الغذائية في كل مرحلة لضمان وصول أفضل منتج إلى مائدتكم
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
                        {productionSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.id} className={`fade-in-up delay-${(idx + 1) * 100} relative group`}>
                                    <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-3">
                                        {/* Step Number */}
                                        <div className="absolute -top-4 -right-2 w-9 h-9 bg-gray-900 text-white font-black text-sm rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20 group-hover:bg-brand-500 transition-colors duration-300">
                                            {step.id}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-18 h-18 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 p-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500">
                                            <Icon size={36} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductionProcess;
