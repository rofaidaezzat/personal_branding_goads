import { motion } from 'framer-motion';
import { Check, Gift, Camera, Video, Layout, Target, Search } from 'lucide-react';
import { Button } from './Shared';
export const Package = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const features = [{
    icon: <Search size={18} />,
    text: 'SWOT Analysis ليك ولبراندك'
  }, {
    icon: <Target size={18} />,
    text: 'تحليل المنافسين'
  }, {
    icon: <Target size={18} />,
    text: 'استراتيجية براند شخصية مخصصة'
  }, {
    icon: <Camera size={18} />,
    text: 'جلسة تصوير احترافية'
  }, {
    icon: <Video size={18} />,
    text: '4 Reels في الشهر'
  }, {
    icon: <Layout size={18} />,
    text: '10 Social Media Designs في الشهر'
  }, {
    icon: <Check size={18} />,
    text: 'أفكار محتوى مناسبة لشخصيتك وخدمتك'
  }, {
    icon: <Check size={18} />,
    text: 'توجيه واضح لطريقة ظهورك'
  }, {
    icon: <Check size={18} />,
    text: 'متابعة وتحسين على حسب النتائج'
  }];
  const bonuses = ['بنعلّمك فلسفة البراند الشخصي المناسبة ليك', 'بنشرح لك إزاي تكمل رحلتك حتى لو مجددتش', 'Content pillars مخصصة ليك', 'Direction واضح لشكل ظهورك', 'توصيات تساعدك تعمل Scale بعد كده'];
  return <section id="package" className="py-24 bg-white">
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
            باكدج كاملة تبني براندك الشخصي من أول شهر
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
            كل اللي محتاجه عشان تبدأ تظهر بشكل احترافي ومبني على استراتيجية، مش
            مجرد محتوى بيتنشر وخلاص.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            {/* Left/Top: Main Features */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-go-orangeLight rounded-xl flex items-center justify-center text-go-orange">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-go-black">
                    Personal Branding Growth Bundle
                  </h3>
                  <p className="text-gray-500 font-bold text-sm">
                    نظام متكامل لنمو براندك
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {features.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + index * 0.05
              }} className="flex items-start gap-3">
                    <div className="text-go-orange mt-1 shrink-0 bg-go-orangeLight p-1 rounded-md">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-bold text-sm leading-relaxed">
                      {feature.text}
                    </span>
                  </motion.div>)}
              </div>

              {/* Mini Mockups */}
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-500">
                    <Video size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold">
                      إنتاج شهري
                    </p>
                    <p className="text-sm font-black text-go-black">4 Reels</p>
                  </div>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-purple-500">
                    <Layout size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold">تصميمات</p>
                    <p className="text-sm font-black text-go-black">
                      10 Designs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Pricing & Bonuses */}
            <div className="lg:w-2/5 bg-go-warm p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-gray-100">
              <div>
                <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.4
              }} className="bg-white p-6 rounded-2xl shadow-sm border border-go-orange/20 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-go-orange/10 rounded-bl-full -z-10" />
                  <div className="flex items-center gap-2 text-go-orange font-black mb-4">
                    <Gift size={20} />
                    <span>ومجانًا مع الباكدج:</span>
                  </div>
                  <ul className="space-y-3">
                    {bonuses.map((bonus, index) => <li key={index} className="flex items-start gap-2 text-sm text-gray-700 font-bold">
                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{bonus}</span>
                      </li>)}
                  </ul>
                </motion.div>

                <div className="mb-8">
                  <p className="text-gray-400 font-bold text-sm mb-1 line-through decoration-red-400 decoration-2">
                    بدل 12000 جنيه
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-500 font-bold">تبدأ من</span>
                    <span className="text-5xl font-black text-go-black">
                      6000
                    </span>
                    <span className="text-xl font-bold text-gray-500">
                      جنيه
                    </span>
                  </div>
                </div>
              </div>

              <Button onClick={handleScrollToContact} className="w-full py-4 text-lg shadow-lg shadow-go-orange/20">
                احجز اجتماع مجاني
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};