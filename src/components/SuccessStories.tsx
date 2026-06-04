import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, Users, Eye, X } from 'lucide-react';
export const SuccessStories = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const stories = [{
    name: 'د. ناجي',
    profession: 'دكتور نسا',
    videoId: '1GYNamhjp1uo-FEQsAi6gFVLqkAA0boVb',
    image: 'https://lh3.googleusercontent.com/d/1GYNamhjp1uo-FEQsAi6gFVLqkAA0boVb=w600',
    before: 'كان الظهور ضعيف، المحتوى غير منتظم، والصورة العامة مش بتعكس قوة الخدمة.',
    after: 'ظهر بشكل أوضح، المحتوى بقى احترافي، والجمهور بدأ يتفاعل ويثق أكتر.',
    metrics: [{
      icon: <Users size={16} />,
      text: '+20K Followers'
    }, {
      icon: <TrendingUp size={16} />,
      text: 'زيادة واضحة في الاستفسارات'
    }]
  }, {
    name: 'د. بسمة',
    profession: 'دكتورة نسا',
    videoId: '1yL7RaWjESQFCgXc2j2wndyrx8kWl1ImU',
    image: 'https://lh3.googleusercontent.com/d/1yL7RaWjESQFCgXc2j2wndyrx8kWl1ImU=w600',
    before: 'الظهور غير منظم، وصعوبة في إيصال المعلومة الطبية للجمهور بشكل مبسط.',
    after: 'فيديوهات ريلز منظمة واحترافية، زيادة الثقة والتفاعل، وتضاعف أعداد الحجوزات.',
    metrics: [{
      icon: <Users size={16} />,
      text: '+35K Followers'
    }, {
      icon: <TrendingUp size={16} />,
      text: 'زيادة 150% في الحجوزات'
    }]
  }, {
    name: 'د. دياب',
    profession: 'دكتور نسا',
    videoId: '1hj-qUsVzB91RMJPwuaMj7xmVs62uE-ii',
    image: 'https://lh3.googleusercontent.com/d/1hj-qUsVzB91RMJPwuaMj7xmVs62uE-ii=w600',
    before: 'صعوبة في إيصال المعلومات الطبية للمرضى بشكل مبسط.',
    after: 'فيديوهات طبية تفاعلية، بناء ثقة كبيرة، وتضاعف أعداد الحجوزات.',
    metrics: [{
      icon: <Users size={16} />,
      text: '+15K Followers'
    }, {
      icon: <TrendingUp size={16} />,
      text: 'زيادة 120% في الحجوزات'
    }]
  }, {
    name: 'المحامي حامد',
    profession: 'محامي شركات',
    videoId: '1_e2klfyMjUV963vQv5JZWOZe30V_MUA9',
    image: 'https://lh3.googleusercontent.com/d/1_e2klfyMjUV963vQv5JZWOZe30V_MUA9=w600',
    before: 'محتوى قانوني معقد ومش بيوصل للعميل المستهدف.',
    after: 'تبسيط الرسالة، بناء ثقة، واستفسارات مستمرة من شركات ناشئة.',
    metrics: [{
      icon: <TrendingUp size={16} />,
      text: '3x Revenue Growth'
    }, {
      icon: <Eye size={16} />,
      text: 'ريلز حققت انتشار قوي'
    }]
  }, {
    name: 'د. زياد',
    profession: 'أخصائي تغذية وعلاج طبيعي',
    videoId: '1znPaRCTlm9_LAQ4neg0LCBOC6JakksGc',
    image: 'https://lh3.googleusercontent.com/d/1znPaRCTlm9_LAQ4neg0LCBOC6JakksGc=w600',
    before: 'محتوى غير منظم وصعوبة في جذب عملاء للاستشارات الشخصية.',
    after: 'حضور قوي واحترافي، زيادة الوعي بالخدمة، وجدول حجوزات كامل.',
    metrics: [{
      icon: <Users size={16} />,
      text: '+30K Followers'
    }, {
      icon: <TrendingUp size={16} />,
      text: 'جدول حجوزات كامل'
    }]
  }, {
    name: 'أ. أحمد رأفت',
    profession: 'مستشار عقاري',
    videoId: '1DT0nvzMbEFsMZf4BXGEx8hQri38m9gEU',
    image: 'https://lh3.googleusercontent.com/d/1DT0nvzMbEFsMZf4BXGEx8hQri38m9gEU=w600',
    before: 'صعوبة في الوصول للمستثمرين المهتمين، ومحتوى تقليدي مش بيبني ثقة.',
    after: 'محتوى استثماري مبسط وقوي، بناء اسم موثوق في السوق، وتدفق مستمر للعملاء المهتمين.',
    metrics: [{
      icon: <TrendingUp size={16} />,
      text: 'زيادة كبيرة في المبيعات'
    }, {
      icon: <Users size={16} />,
      text: 'عملاء مستهدفين يومياً'
    }]
  }];
  return <section id="results" className="py-24 bg-go-warm">
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
          ناس بدأت مع GO ADS…{' '}
          <span className="text-go-orange">وبدأت تظهر بشكل مختلف</span>
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
          اشتغلنا مع أصحاب خدمات وبيزنس في مجالات مختلفة، والنتيجة كانت نمو في
          الظهور، الجمهور، الثقة، والاستفسارات.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
          {/* Video Thumbnail Area */}
          <div
            className="relative h-56 overflow-hidden cursor-pointer"
            onClick={() => story.videoId && setActiveVideoId(story.videoId)}
          >
            <img src={story.image} alt={story.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-go-black/30 group-hover:bg-go-black/40 transition-colors" />

            {/* Play Button */}
            {story.videoId && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-go-orange group-hover:scale-110 transition-transform shadow-lg">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-4 right-4 bg-go-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {story.profession}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            <h3 className="text-xl font-black text-go-black mb-4">
              {story.name}
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-bold text-gray-400 block mb-1">
                  قبل GO ADS:
                </span>
                <p className="text-sm text-gray-600 font-medium">
                  {story.before}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-go-orange block mb-1">
                  بعد GO ADS:
                </span>
                <p className="text-sm text-gray-800 font-bold">
                  {story.after}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-bold text-gray-400 block mb-2">
                النتائج:
              </span>
              {story.metrics.map((metric, i) => <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-50 p-2 rounded-lg">
                <div className="text-go-orange">{metric.icon}</div>
                <span>{metric.text}</span>
              </div>)}
            </div>
          </div>
        </motion.div>)}
      </div>
    </div>

    {/* Lightbox Modal */}
    <AnimatePresence>
      {activeVideoId && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-go-black rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl pointer-events-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://drive.google.com/file/d/${activeVideoId}/preview?autoplay=1`}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Success Story Video"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </section>;
};