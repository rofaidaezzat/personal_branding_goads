import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from './Shared';
export const FinalCTA = () => {
  const [type, setType] = useState<'individual' | 'company'>('individual');
  return <section className="py-24 bg-go-warm relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-go-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-go-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-go-black">
                جاهز تبني براند شخصي{' '}
                <span className="text-go-orange">يجيب نتائج؟</span>
              </h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                سيب بياناتك، وفريق GO ADS هيتواصل معاك عشان نفهم وضعك الحالي
                ونوضح لك فرص النمو المناسبة ليك.
              </p>

              <div className="space-y-4 mb-10">
                {['هنراجع وجودك الحالي', 'هنحدد فرص نموك', 'هنقولك أنسب بداية لبراندك'].map((item, index) => <div key={index} className="flex items-center gap-3 text-go-black font-bold">
                    <CheckCircle2 className="text-go-orange" size={20} />
                    <span>{item}</span>
                  </div>)}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 inline-flex">
                <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-black text-go-black">بياناتك في أمان</p>
                  <p className="text-xs font-bold text-gray-400">
                    الاجتماع مجاني وبدون أي التزام
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form Card */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-go-orange to-[#ff7a50]" />

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  الاسم
                </label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="اسمك بالكامل" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  أنت فرد ولا شركة؟
                </label>
                <div className="flex p-1 bg-gray-100 rounded-xl relative">
                  <motion.div className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm" animate={{
                  left: type === 'company' ? '4px' : 'calc(50% + 2px)'
                }} transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />
                  <button type="button" onClick={() => setType('individual')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors relative z-10 ${type === 'individual' ? 'text-go-black' : 'text-gray-500 hover:text-go-black'}`}>
                    فرد
                  </button>
                  <button type="button" onClick={() => setType('company')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors relative z-10 ${type === 'company' ? 'text-go-black' : 'text-gray-500 hover:text-go-black'}`}>
                    شركة
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    رقم الموبايل / واتساب
                  </label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white text-left" dir="ltr" placeholder="+20 100 000 0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    رقم إضافي (اختياري)
                  </label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white text-left" dir="ltr" placeholder="+20 100 000 0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  تفاصيل أكتر عن نشاطك أو هدفك
                </label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-go-orange focus:ring-2 focus:ring-go-orange/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none h-24" placeholder="احكي لنا باختصار عن مجالك واللي حابب تحققه..."></textarea>
              </div>

              <Button type="submit" className="w-full py-4 text-lg mt-4 group">
                احجز الاجتماع المجاني
                <ArrowLeft className="ml-2 group-hover:-translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};