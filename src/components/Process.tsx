import React, { cloneElement } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Target, Video, Layout, LineChart } from 'lucide-react';
export const Process = () => {
  const steps = [{
    icon: <Calendar />,
    title: 'Free Meeting',
    desc: 'نفهم هدفك، خدمتك، جمهورك، وتحدياتك.'
  }, {
    icon: <Search />,
    title: 'Analysis',
    desc: 'نعمل SWOT analysis ليك وتحليل للمنافسين.'
  }, {
    icon: <Target />,
    title: 'Strategy',
    desc: 'نبني positioning، content pillars، وطريقة ظهور مناسبة.'
  }, {
    icon: <Video />,
    title: 'Production',
    desc: 'نجهز التصوير، الريلز، والتصميمات.'
  }, {
    icon: <Layout />,
    title: 'Publishing Direction',
    desc: 'نرتب المحتوى بطريقة تخدم أهدافك.'
  }, {
    icon: <LineChart />,
    title: 'Growth Review',
    desc: 'نراجع النتائج ونحدد فرص النمو القادمة.'
  }];
  return <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-black mb-6">
            رحلتك معانا خطوة بخطوة
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Journey Line */}
          <div className="hidden md:block absolute top-1/2 right-0 left-0 h-1 bg-gray-100 -z-10 transform -translate-y-1/2">
            <motion.div initial={{
            scaleX: 0
          }} whileInView={{
            scaleX: 1
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 2,
            ease: 'easeInOut'
          }} className="h-full bg-go-orange origin-right" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
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
          }} className="flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-4 group">
                {/* Mobile Line Connector */}
                <div className="md:hidden absolute left-10 top-0 bottom-0 w-px bg-gray-100 -z-10" />

                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-go-orange group-hover:text-go-orange group-hover:shadow-glow transition-all duration-300 shrink-0 relative bg-white z-10">
                  {cloneElement(step.icon as React.ReactElement, {
                size: 24
              })}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-go-black text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-go-black mb-1 text-lg md:text-base">
                    {step.title}
                  </h4>
                  <p className="text-sm font-bold text-gray-500">{step.desc}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};