import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { PhoneCall, MessageCircle, UserCircle2 } from 'lucide-react';

const agents = [
    { id: 1, name: 'علي (Ali)', role: 'وكيل تجاري', phone: '212661099114' },
    { id: 2, name: 'عبد الله (Abd lah)', role: 'وكيل تجاري', phone: '212618538185' },
    { id: 3, name: 'محمد (Mohamed)', role: 'وكيل تجاري', phone: '212618538190' },
    { id: 4, name: 'أشرف (Acharf)', role: 'وكيل تجاري', phone: '212613171882' }
];

const CommercialAgents: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="agents" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <UsersIcon />
                        فريق المبيعات
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        تواصل مع <span className="gradient-text">وكلائنا التجاريين</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        فريقنا التجاري المحترف مستعد دوماً للإجابة على استفساراتكم وتلبية احتياجاتكم
                    </p>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {agents.map((agent, index) => {
                        const formattedPhone = agent.phone.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
                        return (
                            <div key={agent.id} className={`bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group fade-in-up delay-${(index + 1) * 100}`}>

                                <div className="flex flex-col items-center text-center">
                                    {/* Avatar Placeholder */}
                                    <div className="w-20 h-20 rounded-full bg-gray-50 border-4 border-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <UserCircle2 size={40} className="text-gray-300" strokeWidth={1} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
                                    <p className="text-sm font-semibold text-brand-500 mb-6">{agent.role}</p>

                                    <div className="w-full space-y-3">
                                        {/* Call Button */}
                                        <a
                                            href={`tel:+${agent.phone}`}
                                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 hover:bg-brand-50 hover:text-brand-600 text-gray-700 font-medium transition-colors text-sm"
                                            dir="ltr"
                                        >
                                            <PhoneCall size={16} />
                                            {formattedPhone}
                                        </a>

                                        {/* WhatsApp Button */}
                                        <a
                                            href={`https://wa.me/${agent.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-medium transition-colors text-sm shadow-sm hover:shadow-green-500/20"
                                        >
                                            <MessageCircle size={18} />
                                            مراسلة عبر واتساب
                                        </a>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Helper icon component
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

export default CommercialAgents;
