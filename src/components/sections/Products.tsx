import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useScrollReveal } from '../../utils/useScrollReveal';

interface ProductCard {
    id: number;
    name: string;
    nameFr: string;
    image: string;
    badge: string;
}

const productCards: ProductCard[] = [
    {
        id: 1,
        name: 'بلاطو 30 بيضة',
        nameFr: 'Plateau 30 œufs',
        image: '/eggs-tray-30.png',
        badge: 'الأكثر طلباً',
    },
    {
        id: 2,
        name: 'علبة 12 بيضة',
        nameFr: 'Boîte 12 œufs',
        image: '/eggs-box-12.png',
        badge: 'للعائلات',
    },
    {
        id: 3,
        name: 'علبة 6 بيضات',
        nameFr: 'Boîte 6 œufs',
        image: '/eggs-box-6.png',
        badge: 'عملي',
    },
];

const Products: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="products" className="py-24 bg-white relative" ref={sectionRef}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        منتجاتنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        تشكيلة بيض <span className="gradient-text">طازج وعالي الجودة</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        نقدم تشكيلة متنوعة من البيض الطازج لتلبية كافة الاحتياجات — من العائلات إلى المطاعم والفنادق الكبرى
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {productCards.map((product, idx) => (
                        <div
                            key={product.id}
                            className={`fade-in-up delay-${(idx + 1) * 100} group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-brand-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-brand-500/10`}
                        >
                            {/* Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                {product.badge}
                            </div>

                            {/* Image */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-b from-gray-50 to-white p-6 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Decorative circle */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-48 h-48 rounded-full border-2 border-brand-100 group-hover:border-brand-300 group-hover:scale-110 transition-all duration-700"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-4 text-center border-t border-gray-50">
                                <h3 className="text-xl font-black text-gray-900 mb-1">{product.name}</h3>
                                <p className="text-sm text-gray-400 font-medium mb-5">{product.nameFr}</p>

                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-brand-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 group-hover:shadow-lg text-sm"
                                >
                                    <ShoppingCart size={18} />
                                    طلب تسعيرة
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* B2B Banner */}
                <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden fade-in-up">
                    <div className="absolute -left-20 -top-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-right md:w-2/3">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                                هل أنت موزع أو صاحب مشروع كبير؟
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg">
                                نقدم عقود توريد سنوية بأسعار تفضيلية مع ضمان الجودة والتوصيل المنتظم
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-end w-full">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-full md:w-auto inline-flex items-center justify-center bg-brand-500 hover:bg-brand-400 text-gray-900 font-black text-lg px-8 py-4 rounded-xl shadow-lg shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-95"
                            >
                                تواصل مع الإدارة
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
