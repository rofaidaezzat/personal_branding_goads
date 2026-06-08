import React, { cloneElement } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Users, MessageCircle, DollarSign, BarChart3 } from 'lucide-react';
export const Revenue = () => {
  const chain = [{
    icon: <Eye />,
    label: 'ظهور أقوى'
  }, {
    icon: <ShieldCheck />,
    label: 'ثقة أعلى'
  }, {
    icon: <Users />,
    label: 'جمهور مناسب'
  }, {
    icon: <MessageCircle />,
    label: 'استفسارات أكتر'
  }, {
    icon: <DollarSign />,
    label: 'إيرادات أعلى',
    highlight: true
  }];
  return <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-black mb-6">
            البراند الشخصي مش شهرة… <br className="hidden md:block" />
            <span className="text-go-orange">
              البراند الشخصي ثقة بتتحول لفلوس
            </span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
            قبل ما العميل يشتري، هو بيقارن. قبل ما يحجز، هو بيدور. وقبل ما يثق،
            هو بيشوف محتواك، شكلك، كلامك، وتجارب الناس معاك. لما ظهورك يبقى واضح
            ومتكرر ومبني على استراتيجية، الناس بتبدأ تفهم قيمتك أسرع. وده بيزوّد
            فرص الاستفسارات، الحجوزات، والمبيعات.
          </motion.p>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="text-xl font-black text-go-black">
            إحنا بنحوّل وجودك على السوشيال ميديا من بوستات عشوائية لنظام بيبني
            ثقة وبيفتح فرص بيع.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            {/* Chart Card */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden">
              {/* Card Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-go-orange animate-ping" />
                  <span className="font-bold text-gray-700 text-sm">فرصة السوق والنمو 📈</span>
                </div>
                <span className="text-xs text-gray-400 font-bold">Source: eMarketer 2025</span>
              </div>

              <div className="p-6 space-y-6">
                {/* Stat 1: Creator Economy Growth */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-600">اقتصاد صناع المحتوى</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-400 line-through">$250B</span>
                      <span className="text-sm font-black text-go-orange">$480B</span>
                      <span className="text-xs bg-green-50 text-green-600 font-bold px-2 py-0.5 rounded-full">+92% بحلول 2027</span>
                    </div>
                  </div>
                  <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '52%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gray-300 rounded-full relative"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 1.0, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-go-orange/70 to-go-orange rounded-full absolute inset-0"
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">الآن</span>
                    <span className="text-xs text-go-orange font-bold">2027</span>
                  </div>
                </div>

                {/* Stat 2: US Creator Spend */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-600">إنفاق الشركات على محتوى الكرياتورز (أمريكا 2025)</span>
                    <span className="text-sm font-black text-go-black">$37B</span>
                  </div>
                  <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '77%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Stat 3: Micro/Nano Influencer Share */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-600">حصة Micro &amp; Nano Influencers من ميزانيات التسويق</span>
                    <span className="text-sm font-black text-go-orange">45.5%</span>
                  </div>
                  <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '45.5%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-go-orange to-amber-400 rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 font-medium text-right">
                    أصحاب الجمهور الصغير بس الواثق فيهم — ده أنت!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Chain */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 right-10 left-10 h-1 bg-gray-100 -z-10 transform -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }} className="h-full bg-go-orange origin-right" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
            {chain.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className={`flex flex-col items-center text-center relative ${index === chain.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
                <motion.div whileHover={{
              scale: 1.1
            }} className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg z-10 transition-colors duration-500
                    ${item.highlight ? 'bg-go-orange text-white shadow-glow' : 'bg-white text-gray-400 border-2 border-gray-100 hover:border-go-orange hover:text-go-orange'}`}>
                  {cloneElement(item.icon as React.ReactElement, {
                size: 28
              })}
                </motion.div>
                <span className={`font-bold ${item.highlight ? 'text-go-orange text-lg' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              </motion.div>)}
          </div>
        </div>

        {/* Mini Analytics Dashboard Mockup */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Top bar */}
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="text-gray-400" size={20} />
              <span className="font-bold text-gray-600">Growth Overview</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-3 gap-8">
            {/* Right stats panel */}
            <div className="space-y-6 order-last md:order-first">
              <div>
                <p className="text-xs font-bold text-gray-400 mb-1">اقتصاد الكرياتورز</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-go-black">$480B</span>
                  <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded-md mb-1">+92%</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">بحلول 2027</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">Micro &amp; Nano Influencers</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-go-orange">45.5%</span>
                </div>
                <p className="text-xs text-gray-400 font-medium">من ميزانيات التسويق</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="md:col-span-2 relative bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-8 w-10 flex flex-col justify-between items-end pr-2 py-3 text-[10px] font-bold text-gray-300">
                <span>500B</span>
                <span>375B</span>
                <span>250B</span>
                <span>125B</span>
                <span>0</span>
              </div>
              {/* Bars area */}
              <div className="ml-10 h-52 flex items-end gap-3 px-4 pb-8 pt-4">
                {/* Bar 1: $250B (current) */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-black text-gray-500">$250B</span>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '52%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.9, type: 'spring', bounce: 0.3 }}
                    className="w-full bg-gray-200 rounded-t-md"
                  />
                </div>
                {/* Bar 2: $37B (US creator spend) */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-black text-blue-500">$37B</span>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '28%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.9, type: 'spring', bounce: 0.3 }}
                    className="w-full bg-blue-300 rounded-t-md"
                  />
                </div>
                {/* Spacer bars representing growth trend */}
                {[35, 45, 58, 72].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className="text-[10px] font-bold text-gray-300 opacity-0">.</span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.9, type: 'spring', bounce: 0.3 }}
                      className="w-full bg-gray-200 rounded-t-md"
                    />
                  </div>
                ))}
                {/* Bar: $480B (2027 target) */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-black text-go-orange">$480B</span>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0, duration: 0.9, type: 'spring', bounce: 0.3 }}
                    className="w-full bg-go-orange rounded-t-md shadow-sm"
                  />
                </div>
              </div>
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-10 right-0 flex items-center px-4 pb-2 gap-3">
                <span className="flex-1 text-center text-[10px] font-bold text-gray-400">الآن</span>
                <span className="flex-1 text-center text-[10px] font-bold text-blue-400">أمريكا</span>
                <span className="flex-[4] text-center text-[10px] font-bold text-gray-300">نمو متوقع</span>
                <span className="flex-1 text-center text-[10px] font-bold text-go-orange">2027</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};