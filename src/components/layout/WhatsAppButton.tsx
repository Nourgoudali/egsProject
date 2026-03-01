import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button after user scrolls a bit
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);

        // Show tooltip after a delay
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
            // Hide tooltip after 5 seconds
            setTimeout(() => setShowTooltip(false), 5000);
        }, 3000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(tooltipTimer);
        };
    }, []);

    const phoneNumber = '212661099114';
    const message = encodeURIComponent('مرحباً، أريد الاستفسار عن منتجاتكم ');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div
            id="whatsapp-button"
            className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
        >
            {/* Tooltip */}
            {showTooltip && (
                <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 p-4 max-w-[220px] border border-gray-100 animate-fade-in">
                    <button
                        onClick={() => setShowTooltip(false)}
                        className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        <X size={12} />
                    </button>
                    <p className="text-sm font-semibold text-gray-800 mb-1">هل تحتاج مساعدة؟</p>
                    <p className="text-xs text-gray-500">تواصل معنا مباشرة عبر واتساب</p>
                    {/* Arrow */}
                    <div className="absolute bottom-4 -right-2 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-[-45deg]"></div>
                </div>
            )}

            {/* WhatsApp FAB */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-green-500/30 hover:shadow-green-500/40 transition-all hover:scale-110 active:scale-95 whatsapp-pulse"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
            </a>
        </div>
    );
};

export default WhatsAppButton;
