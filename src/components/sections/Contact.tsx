import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { contactInfo } from '../../data/contacts';
import { MapPin, Mail, Send, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { generateEmailTemplate } from '../../utils/emailTemplate';
import { useScrollReveal } from '../../utils/useScrollReveal';

const schema = yup.object().shape({
    name: yup.string().required('الاسم مطلوب').min(2, 'الاسم يجب أن يكون أكثر من حرفين'),
    phone: yup.string().required('رقم الهاتف مطلوب').matches(/^[0-9+ ]+$/, 'رقم هاتف غير صالح'),
    message: yup.string().required('الرسالة مطلوبة').min(10, 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل'),
});

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const sectionRef = useScrollReveal<HTMLElement>();
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });

    const onSubmit = async (data: FormData) => {
        try {
            setSubmitStatus('idle');

            const messageContent = generateEmailTemplate({
                ...data,
                email: '',
                subject: 'طلب تواصل من الموقع',
            });

            const accessKey = "c20e0ac9-b527-4fc6-a51c-a8d03d7f11df";

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `🚨 رسالة جديدة من الموقع - ${data.name}`,
                    from_name: data.name,
                    message: messageContent,
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative" ref={sectionRef}>
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-bold mb-6 text-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        تواصل معنا
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                        نحن هنا <span className="gradient-text">لخدمتكم</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        سواء كنت تبحث عن توريد بيض لمشروعك أو لديك استفسار، فريقنا التجاري جاهز لمساعدتك
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
                    {/* Contact Info Side */}
                    <div className="lg:w-5/12 flex flex-col gap-6 fade-in-up">
                        {/* Phone Numbers Card */}
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl"></div>

                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                                    <Phone size={20} className="text-brand-400" />
                                </div>
                                أرقام الهواتف
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {contactInfo.phones.map((phone, idx) => (
                                    <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-700/50 pb-3 last:border-0 last:pb-0 gap-1">
                                        <span className="font-semibold text-gray-400 text-sm">{phone.name}</span>
                                        <a href={`tel:${phone.number.replace(/\s+/g, '')}`} className="font-black text-lg hover:text-brand-400 transition-colors" dir="ltr">{phone.number}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WhatsApp + Contact Details */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/212661099114"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-100 transition-colors mb-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <MessageCircle size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-green-800 text-sm">WhatsApp</p>
                                    <p className="text-green-600 text-xs">تواصل معنا مباشرة عبر واتساب</p>
                                </div>
                            </a>

                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                                    <Mail size={18} className="text-brand-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">البريد الإلكتروني</p>
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-500 text-sm hover:text-brand-600 transition-colors" dir="ltr">{contactInfo.email}</a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                                    <MapPin size={18} className="text-brand-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-sm">العنوان</p>
                                    <p className="text-gray-500 text-sm">{contactInfo.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-7/12 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 fade-in-up delay-200">
                        <h3 className="text-2xl font-black text-gray-900 mb-1">أرسل لنا رسالتك</h3>
                        <p className="text-gray-400 mb-8 text-sm">سنتواصل معك في أقرب وقت</p>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-5 bg-green-50 rounded-2xl border border-green-200 flex items-center gap-4 text-green-700">
                                <div className="bg-green-100 p-2 rounded-full shrink-0">
                                    <CheckCircle2 size={24} className="text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold">تم الإرسال بنجاح!</p>
                                    <p className="text-green-600 text-sm">سيتواصل معك فريقنا قريباً</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-5 bg-red-50 rounded-2xl border border-red-200 flex items-center gap-4 text-red-700">
                                <div className="bg-red-100 p-2 rounded-full shrink-0">
                                    <AlertCircle size={24} className="text-red-600" />
                                </div>
                                <div>
                                    <p className="font-bold">عذراً، حدث خطأ!</p>
                                    <p className="text-red-600 text-sm">يرجى المحاولة مرة أخرى</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-bold text-gray-700 mb-2">
                                        الاسم <span className="text-brand-500">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        {...register('name')}
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white ${errors.name ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-brand-300 focus:border-brand-500'
                                            } focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-800 placeholder-gray-400`}
                                        placeholder="اسمك الكامل أو اسم الشركة"
                                    />
                                    {errors.name && <p className="mt-1.5 text-xs text-red-500 font-bold">{errors.name.message}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="contact-phone" className="block text-sm font-bold text-gray-700 mb-2">
                                        رقم الهاتف <span className="text-brand-500">*</span>
                                    </label>
                                    <input
                                        id="contact-phone"
                                        type="text"
                                        {...register('phone')}
                                        className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white ${errors.phone ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-brand-300 focus:border-brand-500'
                                            } focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-gray-800 placeholder-gray-400`}
                                        placeholder="+212 6XX XXX XXX"
                                        dir="ltr"
                                    />
                                    {errors.phone && <p className="mt-1.5 text-xs text-red-500 font-bold">{errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-bold text-gray-700 mb-2">
                                    الرسالة <span className="text-brand-500">*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    {...register('message')}
                                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-white ${errors.message ? 'border-red-300 bg-red-50/50' : 'border-gray-200 hover:border-brand-300 focus:border-brand-500'
                                        } focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all resize-none text-gray-800 placeholder-gray-400`}
                                    placeholder="اكتب رسالتك هنا... (الكميات المطلوبة، الاستفسار...)"
                                ></textarea>
                                {errors.message && <p className="mt-1.5 text-xs text-red-500 font-bold">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-black text-lg px-8 py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] shadow-lg shadow-brand-500/20"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        إرسال الرسالة
                                        <Send size={20} className="rotate-180" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
