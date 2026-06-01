import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Shared';
import { TrendingUp, Users } from 'lucide-react';
export const Hero = ({ onOpenPopup }: {onOpenPopup: () => void;}) => {
  const { scrollY } = useScroll();
  const yUp = useTransform(scrollY, [0, 500], [0, -30]);
  const yDown = useTransform(scrollY, [0, 500], [0, 40]);
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-go-warm">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-go-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center gap-16 lg:gap-20">
          {/* Content */}
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                ease: 'easeOut'
              }}>
              
              <h1 className="text-5xl md:text-6xl lg:text-[70px] font-black leading-[1.1] tracking-tight mb-6 text-go-black">
                مش محتاج تظهر أكتر بس… <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">محتاج تظهر صح</span>
                  <motion.span
                    initial={{
                      scaleX: 0
                    }}
                    animate={{
                      scaleX: 1
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.6,
                      ease: 'circOut'
                    }}
                    className="absolute bottom-2 right-0 left-0 h-4 bg-go-orange/20 -z-10 origin-right" />
                  
                </span>
              </h1>

              <p className="md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-[16px] font-[400]">
                مع GO ADS، بنساعد أصحاب الخدمات والبيزنس يبنوا براند شخصي يخلي
                الناس تعرفهم، تثق فيهم، وتختارهم — من خلال استراتيجية واضحة،
                تصوير احترافي، ريلز، وتصميمات بتخدم النمو مش الشكل بس.
              </p>

              <div className="flex justify-center">
                <Button onClick={onOpenPopup} className="text-lg px-8 py-4">
                  احجز اجتماع مجاني
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Visuals */}
          <div className="relative w-full max-w-5xl h-[420px] md:h-[520px] flex items-center justify-center">
            {/* Main Image */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: 'easeOut'
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl z-10">
              
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Professional Business Owner"
                className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-go-black/40 to-transparent" />
            </motion.div>

            {/* Floating Card 1: Revenue */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.6,
                duration: 0.6
              }}
              className="absolute top-6 -right-2 md:top-10 md:-right-6 lg:-right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              style={{
                y: yUp
              }}>
              
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold">
                  نمو في الإيرادات
                </p>
                <p className="text-xl font-black text-go-black">3x Revenue</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Audience */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.8,
                duration: 0.6
              }}
              className="absolute bottom-8 -left-2 md:bottom-12 md:-left-6 lg:-left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              style={{
                y: yDown
              }}>
              
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold">
                  نمو في الجمهور
                </p>
                <p className="text-xl font-black text-go-black">
                  +45K Followers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

};