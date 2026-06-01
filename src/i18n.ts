import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      contactus_page: {
        header: {
          title: "ابني براندك الشخصي الآن",
          desc: "سواء كنت صاحب عمل، مستشار، أو صانع محتوى، فريقنا جاهز يساعدك تظهر للجمهور الصح بالرسالة الصح."
        },
        what_happens: {
          title: "إيه اللي بيحصل بعد ما تبعت؟",
          step1: "بنراجع حساباتك الحالية ونقاط القوة والضعف في تواجدك الرقمي.",
          step2: "بنحدد استراتيجية واضحة ومناسبة لمجالك وأهدافك التسويقية.",
          step3: "بنتواصل معاك لعرض خطة العمل والبدء في التنفيذ مباشرة."
        },
        form: {
          labels: {
            service: "الخدمة المهتم بيها",
            iam: "أنت فرد ولا شركة؟",
            fullname: "الاسم بالكامل",
            phone: "رقم الموبايل / واتساب",
            description: "تفاصيل إضافية عن طلبك",
            website_type: "نوع الموقع المطلوب",
            pages_count: "عدد الصفحات المتوقع",
            budget: "الميزانية المرصودة للموقع",
            additional_services: "خدمات إضافية مطلوبة مع الموقع",
            business_type: "مجال العمل / النشاط",
            videos_count: "عدد الفيديوهات المطلوبة",
            business_name: "اسم البيزنس / البراند",
            activity_type: "نوع النشاط",
            platforms: "المنصات المستهدفة",
            marketing_budget: "الميزانية التسويقية الشهرية",
            design_type: "نوع التصاميم المطلوبة",
            designs_count: "عدد التصاميم المطلوبة",
            hasVisualIdentity: "هل لديك هوية بصرية؟",
            goal: "الهدف الرئيسي من الاستشارة",
            additional_details: "تفاصيل إضافية"
          },
          placeholders: {
            description: "احكي لنا باختصار عن مجالك واللي حابب تحققه..."
          },
          services: {
            choose: "اختر الخدمة",
            general: "استفسار عام",
            web: "تصميم وتطوير مواقع",
            media: "إنتاج ميديا وتصوير",
            social: "إدارة منصات التواصل",
            ads: "حملات إعلانية ممولة",
            design: "تصميمات جرافيك وهوية",
            consultation: "استشارة تسويقية"
          },
          user_types: {
            individual: "فرد",
            company: "شركة"
          },
          buttons: {
            submit: "احجز اجتماع مجاني",
            submitting: "جاري الإرسال..."
          },
          status: {
            success: "تم الإرسال بنجاح! سنتواصل معك قريباً.",
            error: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
          }
        }
      }
    }
  },
  en: {
    translation: {
      contactus_page: {
        header: {
          title: "Build your personal brand now",
          desc: "Whether you are a business owner, consultant, or content creator, our team is ready to help you appear to the right audience with the right message."
        },
        what_happens: {
          title: "What happens after you submit?",
          step1: "We review your current accounts, identifying the strengths and weaknesses of your digital presence.",
          step2: "We define a clear, custom strategy tailored to your industry and marketing goals.",
          step3: "We reach out to present the implementation plan and kick off the workflow immediately."
        },
        form: {
          labels: {
            service: "Service of Interest",
            iam: "Are you an individual or a company?",
            fullname: "Full Name",
            phone: "Phone Number / WhatsApp",
            description: "Additional details about your request",
            website_type: "Website Type",
            pages_count: "Pages Count",
            budget: "Website Budget",
            additional_services: "Additional Services",
            business_type: "Business Type",
            videos_count: "Videos Count",
            business_name: "Business Name",
            activity_type: "Activity Type",
            platforms: "Target Platforms",
            marketing_budget: "Monthly Marketing Budget",
            design_type: "Design Type",
            designs_count: "Designs Count",
            hasVisualIdentity: "Do you have a visual identity?",
            goal: "Goal",
            additional_details: "Additional Details"
          },
          placeholders: {
            description: "Briefly describe your field and what you want to achieve..."
          },
          services: {
            choose: "Choose service",
            general: "General Inquiry",
            web: "Web Design & Development",
            media: "Media Production & Shooting",
            social: "Social Media Management",
            ads: "Sponsored Ads Campaigns",
            design: "Graphic Design & Branding",
            consultation: "Marketing Consultation"
          },
          user_types: {
            individual: "An Individual",
            company: "A Company"
          },
          buttons: {
            submit: "Book a Free Meeting",
            submitting: "Submitting..."
          },
          status: {
            success: "Submitted successfully! We'll get back to you soon.",
            error: "Submission failed. Please try again."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
