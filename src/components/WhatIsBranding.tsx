import React, { cloneElement } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, MessageCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';
export const WhatIsBranding = () => {
  const steps = [{
    icon: <LayoutGrid />,
    title: 'بوستات عشوائية',
    desc: 'وجود غير منظم',
    color: 'text-gray-400',
    bg: 'bg-gray-100'
  }, {
    icon: <MessageCircle />,
    title: 'رسالة واضحة',
    desc: 'استراتيجية ومحتوى',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  }, {
    icon: <ShieldCheck />,
    title: 'ثقة',
    desc: 'الناس بتفهم قيمتك',
    color: 'text-green-500',
    bg: 'bg-green-50'
  }, {
    icon: <ArrowUpRight />,
    title: 'استفسارات أكتر',
    desc: 'نمو في الإيرادات',
    color: 'text-white',
    bg: 'bg-go-orange',
    isFinal: true
  }];
  return <section id="what-is" className="py-24 bg-go-gray overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5">
            <motion.h2 initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="text-3xl md:text-4xl font-black mb-6">
              يعني إيه Personal Branding؟
            </motion.h2>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="space-y-4 text-lg text-gray-600 font-medium leading-relaxed mb-8">
              <p>
                البراند الشخصي ببساطة هو الصورة اللي الناس بتاخدها عنك لما تشوفك
                أونلاين.
              </p>
              <p>
                يعني الناس تعرف أنت مين، بتقدم إيه، شاطر في إيه، وليه يثقوا فيك
                بدل أي حد تاني.
              </p>
              <p>
                هو مش إنك تبقى مشهور وخلاص. هو إنك تبقى واضح، مقنع، وموجود في
                دماغ العميل وقت ما يحتاج خدمتك.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="p-6 bg-white rounded-2xl border-l-4 border-go-orange shadow-sm">
              <p className="text-xl font-black text-go-black">
                البراند الشخصي هو إن الناس تثق فيك قبل ما تكلمك.
              </p>
            </motion.div>
          </div>

          {/* Visual Transformation */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.2
            }} className={`relative p-5 rounded-2xl flex flex-col items-center text-center ${step.isFinal ? 'bg-go-orange shadow-glow' : 'bg-white shadow-sm border border-gray-100'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.isFinal ? 'bg-white/20 text-white' : `${step.bg} ${step.color}`}`}>
                    {cloneElement(step.icon as React.ReactElement, {
                  size: 24
                })}
                  </div>
                  <h4 className={`font-black mb-1 ${step.isFinal ? 'text-white' : 'text-gray-800'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs font-bold ${step.isFinal ? 'text-white/80' : 'text-gray-400'}`}>
                    {step.desc}
                  </p>

                  {/* Connecting Arrow (Desktop) */}
                  {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -left-4 w-4 h-px bg-gray-300 z-0" />}
                </motion.div>)}
            </div>

            {/* Connecting Line Background */}
            <div className="hidden md:block absolute top-1/2 right-10 left-10 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2">
              <motion.div initial={{
              scaleX: 0
            }} whileInView={{
              scaleX: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }} className="h-full bg-go-orange origin-right" />
            </div>

            {/* Supporting Image */}
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.8
          }} className="mt-12 relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Professional looking at phone" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-go-black/60 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle fill="currentColor" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">رسالة جديدة</p>
                    <p className="text-xs text-white/80">
                      "شفت محتواك وحابب أحجز استشارة..."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};