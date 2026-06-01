import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, PlayCircle, Award } from 'lucide-react';
export const SocialProof = () => {
  const items = [{
    icon: <Award size={20} />,
    text: '6 قصص نجاح'
  }, {
    icon: <Users size={20} />,
    text: 'نمو في الجمهور'
  }, {
    icon: <TrendingUp size={20} />,
    text: 'نمو في الإيرادات'
  }, {
    icon: <PlayCircle size={20} />,
    text: 'ريلز حققت انتشار'
  }, {
    icon: <Star size={20} />,
    text: 'فيديوهات وتجارب عملاء'
  }];
  return <section className="border-y border-gray-100 bg-white py-6 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {items.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} className="flex items-center gap-3 text-gray-600 font-bold">
              <div className="text-go-orange bg-go-orangeLight p-2 rounded-lg">
                {item.icon}
              </div>
              <span className="text-sm md:text-base">{item.text}</span>

              {/* Divider for desktop, hidden on last item */}
              {index < items.length - 1 && <div className="hidden md:block w-px h-8 bg-gray-200 mr-4" />}
            </motion.div>)}
        </div>
      </div>
    </section>;
};