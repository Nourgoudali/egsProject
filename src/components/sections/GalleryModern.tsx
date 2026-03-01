import React from 'react';
import { useScrollReveal } from '../../utils/useScrollReveal';
import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
    { id: 1, src: "/farm_exterior.png", alt: "مزرعة الإنتاج الأكبر في المنطقة", span: "col-span-1 row-span-2" },
    { id: 2, src: "/egg_quality.png", alt: "جودة المنتجات الطازجة", span: "col-span-1 row-span-1" },
    { id: 3, src: "/eggs-tray-30.png", alt: "صينية بيض 30 حبة للمحترفين", span: "col-span-1 row-span-1" },
    { id: 4, src: "/packaging_modern.png", alt: "التعبئة داخل المزرعة", span: "col-span-2 row-span-1" },
    { id: 5, src: "/eggs-box-12.png", alt: "علب 12 بيضة بجودة عالية", span: "col-span-2 row-span-1" },
    { id: 6, src: "/eggs-box-6.png", alt: "علب 6 بيضات للعائلات", span: "col-span-1 row-span-1" },
];

const GalleryModern: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <ImageIcon size={16} />
                        معرض الصور
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        صور من <span className="gradient-text">الإنتاج</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        نظرة مقربة حول منشآتنا وعملية إنتاج البيض الطازج وعالي الجودة
                    </p>
                </div>

                {/* Modern Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 max-w-5xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`relative rounded-3xl overflow-hidden group fade-in-up delay-${(index + 1) * 100} ${image.span} shadow-sm hover:shadow-xl transition-all duration-500`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GalleryModern;
