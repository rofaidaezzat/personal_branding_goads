import React, { useState, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Camera, Video, LineChart, UserCheck } from 'lucide-react';
export const Method = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{
    icon: <UserCheck />,
    title: 'بنفهمك',
    desc: 'بنبني أساس قوي من خلال فهم شخصيتك، خدمتك، وأهدافك.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    icon: <Search />,
    title: 'بنحلل وضعك والمنافسين',
    desc: 'بندرس السوق ونشوف المنافسين بيعملوا إيه عشان نلاقي نقطة تميزك.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    icon: <Target />,
    title: 'بنبني استراتيجية براند شخصية',
    desc: 'بنحدد الـ Content Pillars وطريقة الظهور اللي هتبني ثقة مع جمهورك.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    icon: <Camera />,
    title: 'بنجهز التصوير والمحتوى',
    desc: 'جلسات تصوير احترافية وكتابة محتوى بيعكس خبرتك بجد.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    icon: <Video />,
    title: 'بنطلع ريلز وتصميمات',
    desc: 'إنتاج عالي الجودة بيخليك تظهر بشكل بريميوم ومختلف.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    icon: <LineChart />,
    title: 'بنراجع النمو ونطور',
    desc: 'متابعة مستمرة للأرقام عشان نحسن الاستراتيجية ونزود النتائج.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }];
  return <section id="story" className="py-24 bg-go-warm">
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
            إزاي GO ADS بتحوّل خبرتك لبراند؟
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
        }} className="text-lg text-gray-600 font-medium leading-relaxed">
            إحنا بنبدأ من قبل التصوير والتصميم. بنبدأ من فهمك: أنت مين، بتقدم
            إيه، جمهورك محتاج يسمع إيه، والمنافسين بيظهروا إزاي. بعدها بنبني
            طريقة ظهورك، ونحوّلها لمحتوى، صور، ريلز، وتصميمات تساعد الناس تشوف
            قيمتك وتثق فيك.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps List */}
          <div className="space-y-4 relative">
            {/* Vertical Line */}
            <div className="absolute right-8 top-8 bottom-8 w-px bg-gray-200 z-0" />

            {steps.map((step, index) => {
            const isActive = activeStep === index;
            return <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} onMouseEnter={() => setActiveStep(index)} onClick={() => setActiveStep(index)} className={`relative z-10 flex items-start gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300
                    ${isActive ? 'bg-white shadow-lg border border-gray-100' : 'hover:bg-white/50'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300
                    ${isActive ? 'bg-go-orange text-white shadow-glow' : 'bg-gray-100 text-gray-400'}`}>
                    {cloneElement(step.icon as React.ReactElement, {
                  size: 20
                })}
                  </div>
                  <div>
                    <h4 className={`text-xl font-black mb-2 transition-colors duration-300 ${isActive ? 'text-go-orange' : 'text-go-black'}`}>
                      {index + 1}. {step.title}
                    </h4>
                    <p className={`font-medium transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>

          {/* Visual Panel */}
          <div className="sticky top-32 h-[600px] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.img key={activeStep} initial={{
              opacity: 0,
              scale: 1.05
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.5
            }} src={steps[activeStep].image} alt={steps[activeStep].title} className="w-full h-full object-cover" />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-go-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 left-8 text-white">
              <motion.div key={`text-${activeStep}`} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }}>
                <p className="text-sm font-bold text-go-orange mb-2">
                  الخطوة {activeStep + 1}
                </p>
                <h3 className="text-2xl font-black">
                  {steps[activeStep].title}
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};