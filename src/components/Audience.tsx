import React, { cloneElement, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Scale, Lightbulb, Briefcase, Laptop, Play, X, Coins, Home } from 'lucide-react';

export const Audience = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const driveThumbnail = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w800`;

  const audiences = [{
    title: 'الدكاترة والعيادات',
    icon: <Stethoscope />,
    desc: 'لو أنت دكتور أو عندك عيادة، البراند الشخصي بيساعد المرضى يعرفوك، يفهموا خبرتك، ويثقوا فيك قبل ما يحجزوا.',
    examples: 'دكاترة جلدية، أسنان، تغذية، تجميل، علاج طبيعي، عيادات متخصصة.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'المحامين والمستشارين',
    icon: <Scale />,
    desc: 'لو أنت محامي، محتواك وطريقة ظهورك ممكن يخلّوا العميل يحس إنك فاهم مشكلته قبل ما يتواصل معاك.',
    examples: 'محامين شركات، قضايا أسرية، عقارات، تأسيس شركات، استشارات قانونية.',
    image: driveThumbnail('1Hgb_SnzJWU1DIpyjmM9mI8nJmwe1OWPj'),
    videoId: '1Hgb_SnzJWU1DIpyjmM9mI8nJmwe1OWPj'
  }, {
    title: 'الكوتشز والمدربين',
    icon: <Lightbulb />,
    desc: 'لو بتبيع معرفة أو استشارات، الناس لازم تشوف طريقة تفكيرك وتقتنع بيك قبل ما تشتري منك.',
    examples: 'Business coaches، career coaches، life coaches، fitness coaches.',
    image: driveThumbnail('1XBj-YHRyexSb-h1pdCUY0LxToGmGodlj'),
    videoId: '1XBj-YHRyexSb-h1pdCUY0LxToGmGodlj'
  }, {
    title: 'المستشارين الماليين',
    icon: <Coins />,
    desc: 'لو أنت مستشار مالي أو شغال في مجال التمويل والاستثمار، البراند الشخصي بيساعدك تبني مصداقية وثقة عالية مع العملاء.',
    examples: 'مستشارين ماليين، خبراء تمويل، مخططين ماليين، مستشاري استثمار، محاسبين قانونيين.',
    image: driveThumbnail('1V7m0_4oioehZ4YK6pJL7e01Z5eQQQRqh'),
    videoId: '1V7m0_4oioehZ4YK6pJL7e01Z5eQQQRqh'
  }, {
    title: 'المستشارين العقاريين',
    icon: <Home />,
    desc: 'لو أنت شغال في العقارات أو التسويق العقاري، البراند الشخصي بيساعدك تبني اسم قوي وتجذب مستثمرين وملاك يثقوا فيك.',
    examples: 'مسوقين عقاريين، مستشاري عقارات، مطورين عقاريين، أصحاب شركات تسويق عقاري.',
    image: driveThumbnail('1GSjej0Z9kcV0kQSNE6ts4WgKiSxcfMU4'),
    videoId: '1GSjej0Z9kcV0kQSNE6ts4WgKiSxcfMU4'
  }, {
    title: 'أي شخص عايز يبقى معروف',
    icon: <div />,
    desc: 'لو هدفك إن الناس تفتكرك لما يحتاجوا خدمتك، يبقى أنت محتاج براند شخصي واضح ومبني صح.',
    examples: 'أي مجال بيعتمد على الثقة والخبرة الشخصية.',
    image: driveThumbnail('1Iq4YojbQe5VDHruevj4cxbhkv94pXXIz'),
    videoId: '1Iq4YojbQe5VDHruevj4cxbhkv94pXXIz'
  }];

  return <section id="audience" className="py-24 bg-white">
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
            مين يقدر يستفيد من خدمة البراند الشخصي؟
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
            لو عندك خبرة، خدمة، أو بيزنس وعايز الناس تشوفك بشكل أوضح وتثق فيك
            أسرع، الخدمة دي معمولة ليك.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((item, index) => {
            const hasVideo = !!item.videoId;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  if (hasVideo) {
                    setActiveVideoId(item.videoId);
                  }
                }}
                className={`group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  hasVideo ? 'cursor-pointer' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    key={item.image}
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-go-black/80 via-go-black/20 to-transparent" />
                  
                  {hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-go-black/10 group-hover:bg-go-black/30 transition-colors duration-300">
                      <div className="w-12 h-12 bg-go-orange text-white rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <Play size={20} fill="currentColor" className="ml-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 left-4 flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-go-orange rounded-full flex items-center justify-center shrink-0">
                      {cloneElement(item.icon as React.ReactElement, {
                        size: 20
                      })}
                    </div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 left-0 h-1 bg-go-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                  <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="text-xs font-bold text-gray-400 block mb-1">
                      أمثلة:
                    </span>
                    <p className="text-sm text-gray-700 font-bold">
                      {item.examples}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-16 text-center">
          <div className="inline-block bg-go-orangeLight text-go-orange px-8 py-4 rounded-2xl font-black text-xl">
            ببساطة: لو الناس لازم تثق فيك قبل ما تشتري منك، فالبراند الشخصي مهم
            ليك.
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal Layer */}
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
                    title="Audience Video"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>;
};