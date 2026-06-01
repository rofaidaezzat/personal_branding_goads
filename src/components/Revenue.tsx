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
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-400 mb-1">
                  Inquiries (Last 30 days)
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-go-black">142</span>
                  <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded-md mb-1">
                    +48%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 mb-1">
                  Profile Visits
                </p>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-black text-go-black">
                    12.4K
                  </span>
                  <span className="text-sm font-bold text-green-500 bg-green-50 px-2 py-1 rounded-md mb-1">
                    +120%
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 relative h-48 bg-gray-50 rounded-xl border border-gray-100 flex items-end p-4 gap-2">
              {/* Fake Bar Chart */}
              {[40, 30, 50, 40, 60, 80, 100].map((height, i) => <motion.div key={i} initial={{
              height: 0
            }} whileInView={{
              height: `${height}%`
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.8,
              type: 'spring'
            }} className={`flex-1 rounded-t-md ${i === 6 ? 'bg-go-orange' : 'bg-gray-200'}`} />)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};