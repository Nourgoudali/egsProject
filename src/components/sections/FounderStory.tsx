import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { Quote } from 'lucide-react';

const FounderStory: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="founder" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
            <div className="absolute -left-40 top-20 w-80 h-80 bg-brand-100 rounded-full blur-[100px] opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden fade-in-up">
                    <div className="flex flex-col lg:flex-row">

                        {/* Image Side */}
                        <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-[auto] bg-gray-900">
                            <img
                                src="/founder.jpg"
                                alt="Founder"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-95 transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                            <div className="absolute bottom-6 right-6 left-6 text-white text-right">
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-brand-500/20 backdrop-blur-md border border-brand-500/30 rounded-full text-brand-300 text-sm font-bold">
                                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                                    المؤسس والمدير العام
                                </div>
                                <h3 className="text-3xl font-black mb-1">السيد عبد اللطيف زعيم</h3>
                                <p className="text-gray-300 font-medium tracking-wide">M. Abdellatif Zaim</p>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 relative">
                            <Quote size={120} className="absolute top-10 right-10 text-gray-50 opacity-50 rotate-180 pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 inline-block">
                                    قصة <span className="gradient-text">النجاح</span>
                                    <span className="block h-1 w-1/3 bg-brand-500 mt-2 rounded-full"></span>
                                </h2>

                                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                    <p className="font-medium text-gray-900 text-xl border-r-4 border-brand-500 pr-4">
                                        "مسيرة من العمل الجاد والشغف المستمر لبناء منظومة متكاملة لإنتاج البيض في المغرب."
                                    </p>

                                    <p>
                                        ولد السيد عبد اللطيف زعيم عام 1961 في مدينة فاس، وهو من أصول أمازيغية من منطقة طاطا التي انتقل منها والده إلى فاس سنة 1927. نشأ في بيئة تقدر العمل التجاري والالتزام.
                                    </p>

                                    <p>
                                        بعد حصوله على شهادة البكالوريا عام 1982 ومتابعته لدراسة الهندسة المدنية، اختار الانضمام إلى أعمال والده في مجال توزيع البيض، مقدماً رؤية عصرية لتطوير هذا القطاع.
                                    </p>

                                    <p>
                                        بدأ بمسار متواضع عبر توزيع كميات صغيرة، ولكن بفضل المثابرة واكتساب خبرة عميقة في السوق، تمكن من تحويل هذا المشروع العائلي إلى واحدة من أكبر المؤسسات الوطنية لإنتاج وتوزيع البيض عالي الجودة في المملكة.
                                    </p>
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">تأسست لتكون الأفضل</p>
                                        <p className="text-brand-600 font-black text-xl">OEUFS REHAMNA</p>
                                    </div>
                                    <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center">
                                        <span className="text-brand-600 font-black text-2xl">AZ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
