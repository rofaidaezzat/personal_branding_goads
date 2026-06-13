import { useState } from 'react'
import slotSvg from '../assets/Slot.svg'
import strategySvg from '../assets/Strategy.svg'
import slot2Svg from '../assets/Slot (2).svg'
import group15Png from '../assets/Group 16.svg'
import { useTranslation } from 'react-i18next'

interface FormData {
  name: string;
  phone: string;
  countryCode: string;
  userType: 'An Individual' | 'A company';
  service: string;
  message: string;
  websiteType: string;
  pagesCount: string;
  budget: string;
  additionalServices: string[];
  businessType: string;
  videosCount: string;
  businessName: string;
  activityType: string;
  platforms: string[];
  marketingBudget: string;
  designType: string;
  designsCount: string;
  hasVisualIdentity: string;
  goal: string;
  additionalDetails: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  message?: string;
  websiteType?: string;
  pagesCount?: string;
  budget?: string;
  businessType?: string;
  videosCount?: string;
  businessName?: string;
  activityType?: string;
  marketingBudget?: string;
  designType?: string;
  designsCount?: string;
  hasVisualIdentity?: string;
  goal?: string;
}

export const Contactus = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    countryCode: '+20',
    userType: 'An Individual',
    service: 'General Inquiry',
    message: '',
    websiteType: '',
    pagesCount: '',
    budget: '',
    additionalServices: [],
    businessType: '',
    videosCount: '',
    businessName: '',
    activityType: '',
    platforms: [],
    marketingBudget: '',
    designType: '',
    designsCount: '',
    hasVisualIdentity: '',
    goal: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return i18n.language === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    } else if (name.trim().length < 2) {
      return i18n.language === 'ar' ? 'الاسم يجب أن يكون حرفين على الأقل' : 'Name must be at least 2 characters';
    } else if (!/^[\p{L}\s\-']+$/u.test(name.trim())) {
      return i18n.language === 'ar' ? 'الاسم يجب أن يحتوي على حروف فقط' : 'Name must contain letters only';
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return i18n.language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!/^\d+$/.test(phone.trim())) {
      return i18n.language === 'ar' ? 'رقم الهاتف يجب أن يحتوي على أرقام فقط' : 'Phone number must contain digits only';
    } else if (phone.trim().length < 8 || phone.trim().length > 15) {
      return i18n.language === 'ar' ? 'رقم الهاتف يجب أن يكون بين 8 و 15 رقماً' : 'Phone number must be between 8 and 15 digits';
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const nameError = validateName(formData.name);
    if (nameError) { newErrors.name = nameError; isValid = false; }

    const phoneError = validatePhone(formData.phone);
    if (phoneError) { newErrors.phone = phoneError; isValid = false; }

    if (!formData.service || formData.service === 'Choose service') {
      newErrors.service = i18n.language === 'ar' ? 'يرجى اختيار الخدمة' : 'Please select a service';
      isValid = false;
    }

    if (formData.service === 'web_design') {
      if (!formData.websiteType) {
        newErrors.websiteType = i18n.language === 'ar' ? 'نوع الموقع مطلوب' : 'Website type is required';
        isValid = false;
      }
      if (!formData.pagesCount) {
        newErrors.pagesCount = i18n.language === 'ar' ? 'عدد الصفحات مطلوب' : 'Pages count is required';
        isValid = false;
      }
      if (!formData.budget) {
        newErrors.budget = i18n.language === 'ar' ? 'الميزانية مطلوبة' : 'Budget is required';
        isValid = false;
      }
    } else if (formData.service === 'media_production') {
      if (!formData.businessType) {
        newErrors.businessType = i18n.language === 'ar' ? 'نوع النشاط مطلوب' : 'Business type is required';
        isValid = false;
      }
      if (!formData.videosCount) {
        newErrors.videosCount = i18n.language === 'ar' ? 'عدد الفيديوهات مطلوب' : 'Videos count is required';
        isValid = false;
      }
    } else if (formData.service === 'social_media') {
      if (!formData.businessName.trim()) {
        newErrors.businessName = i18n.language === 'ar' ? 'اسم البيزنس مطلوب' : 'Business name is required';
        isValid = false;
      }
      if (!formData.activityType) {
        newErrors.activityType = i18n.language === 'ar' ? 'نوع النشاط مطلوب' : 'Activity type is required';
        isValid = false;
      }
    } else if (formData.service === 'advertising') {
      if (!formData.businessType) {
        newErrors.businessType = i18n.language === 'ar' ? 'نوع النشاط مطلوب' : 'Business type is required';
        isValid = false;
      }
      if (!formData.marketingBudget) {
        newErrors.marketingBudget = i18n.language === 'ar' ? 'الميزانية التسويقية مطلوبة' : 'Marketing budget is required';
        isValid = false;
      }
    } else if (formData.service === 'design') {
      if (!formData.businessName.trim()) {
        newErrors.businessName = i18n.language === 'ar' ? 'اسم البيزنس مطلوب' : 'Business name is required';
        isValid = false;
      }
      if (!formData.designType) {
        newErrors.designType = i18n.language === 'ar' ? 'نوع التصميم مطلوب' : 'Design type is required';
        isValid = false;
      }
      if (!formData.designsCount) {
        newErrors.designsCount = i18n.language === 'ar' ? 'عدد التصاميم مطلوب' : 'Designs count is required';
        isValid = false;
      }
      if (!formData.hasVisualIdentity) {
        newErrors.hasVisualIdentity = i18n.language === 'ar' ? 'الهوية البصرية مطلوبة' : 'Visual identity is required';
        isValid = false;
      }
    } else if (formData.service === 'consultation') {
      if (!formData.businessType.trim()) {
        newErrors.businessType = i18n.language === 'ar' ? 'نوع النشاط مطلوب' : 'Business type is required';
        isValid = false;
      }
      if (!formData.goal.trim()) {
        newErrors.goal = i18n.language === 'ar' ? 'الهدف مطلوب' : 'Goal is required';
        isValid = false;
      }
    } else {
      if (!formData.message.trim()) {
        newErrors.message = i18n.language === 'ar' ? 'الوصف مطلوب' : 'Description is required';
        isValid = false;
      } else if (formData.message.length < 10) {
        newErrors.message = i18n.language === 'ar' ? 'الوصف يجب أن يكون 10 أحرف على الأقل' : 'Description must be at least 10 characters';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      let apiPayload: any = {
        name: formData.name,
        phone: `${formData.countryCode}${formData.phone}`,
        service: formData.service,
      };

      if (formData.service === 'web_design') {
        apiPayload = {
          ...apiPayload,
          websiteType: formData.websiteType,
          pagesCount: formData.pagesCount,
          budget: formData.budget,
          additionalServices: formData.additionalServices
        };
      } else if (formData.service === 'media_production') {
        apiPayload = {
          ...apiPayload,
          businessType: formData.businessType,
          videosCount: formData.videosCount
        };
      } else if (formData.service === 'social_media') {
        apiPayload = {
          ...apiPayload,
          businessName: formData.businessName,
          activityType: formData.activityType,
          platforms: formData.platforms
        };
      } else if (formData.service === 'advertising') {
        apiPayload = {
          ...apiPayload,
          businessType: formData.businessType,
          marketingBudget: formData.marketingBudget,
          additionalDetails: formData.additionalDetails
        };
      } else if (formData.service === 'design') {
        apiPayload = {
          ...apiPayload,
          businessName: formData.businessName,
          designType: formData.designType,
          designsCount: formData.designsCount,
          hasVisualIdentity: formData.hasVisualIdentity
        };
      } else if (formData.service === 'consultation') {
        apiPayload = {
          ...apiPayload,
          businessType: formData.businessType,
          goal: formData.goal,
          additionalDetails: formData.additionalDetails
        };
      } else {
        apiPayload = {
          ...apiPayload,
          message: formData.message,
          userType: formData.userType === 'An Individual' ? 'Individual' : 'Company'
        };
      }

      try {
        const response = await fetch('https://api.el-shayeb.cloud/api/v1/customers/lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiPayload),
        });

        if (response.ok) {
          setSubmitStatus('success');
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead');
            (window as any).fbq('trackCustom', 'احجز اجتماع مجاني');
          }
          setFormData({
            name: '',
            phone: '',
            countryCode: '+20',
            userType: 'An Individual',
            service: 'General Inquiry',
            message: '',
            websiteType: '',
            pagesCount: '',
            budget: '',
            additionalServices: [],
            businessType: '',
            videosCount: '',
            businessName: '',
            activityType: '',
            platforms: [],
            marketingBudget: '',
            designType: '',
            designsCount: '',
            hasVisualIdentity: '',
            goal: '',
            additionalDetails: '',
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Failed to submit to API:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  const isRtl = i18n.language === 'ar';

  return (
    <section id="contact" className="w-full relative min-h-screen bg-[#FAF2F0] overflow-hidden py-12 lg:py-24">
      {/* Decorative Image Top Right */}
      <img
        src={group15Png}
        className={`absolute pointer-events-none z-0 hidden lg:block ${isRtl ? '-scale-x-100 left-[-40px]' : 'right-[-40px]'}`}
        alt=""
        style={{
          width: '225px',
          height: '149px',
          top: '71px',
          opacity: 1
        }}
      />

      {/* Main Container */}
      <div
        className="mx-auto flex flex-col lg:flex-row relative z-10 w-full max-w-[1081px] gap-[48px] px-4 lg:px-[20px]"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Left Column: Text & Features */}
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="text-[32px] lg:text-[40px] text-[#141414] leading-tight font-black"
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Poppins', sans-serif",
            }}
          >
            {t('contactus_page.header.title')}
          </h1>

          <p
            className="text-[16px] text-[#464646] leading-relaxed mt-[24px] max-w-[509px]"
            style={{
              fontFamily: "'Cairo', 'Poppins', sans-serif",
            }}
          >
            {t('contactus_page.header.desc')}
          </p>

          <div className="flex flex-col w-full max-w-[531px] mt-[48px] gap-[32px]">
            <h2
              className="text-[24px] lg:text-[28px] text-[#141414] leading-tight font-bold"
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Poppins', sans-serif",
              }}
            >
              {t('contactus_page.what_happens.title')}
            </h2>

            <div className="flex flex-col w-full gap-[24px]">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <img src={slotSvg} alt="" className="w-[48px] h-[48px] object-contain flex-shrink-0" />
                <p className="text-[14px] text-[#555555] leading-relaxed pt-2 max-w-[380px]" style={{ fontFamily: "'Cairo', 'Poppins', sans-serif" }}>
                  {t('contactus_page.what_happens.step1')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <img src={strategySvg} alt="" className="w-[48px] h-[48px] object-contain flex-shrink-0" />
                <p className="text-[14px] text-[#555555] leading-relaxed pt-2 max-w-[380px]" style={{ fontFamily: "'Cairo', 'Poppins', sans-serif" }}>
                  {t('contactus_page.what_happens.step2')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <img src={slot2Svg} alt="" className="w-[48px] h-[48px] object-contain flex-shrink-0" />
                <p className="text-[14px] text-[#555555] leading-relaxed pt-2 max-w-[380px]" style={{ fontFamily: "'Cairo', 'Poppins', sans-serif" }}>
                  {t('contactus_page.what_happens.step3')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div
          className="flex flex-col flex-shrink-0 w-full lg:w-[502px] h-auto p-[24px] rounded-[24px] bg-white border border-[#F1592A]/10 shadow-soft"
          style={{
            fontFamily: isRtl ? "'Cairo', sans-serif" : "'Poppins', sans-serif"
          }}
        >
          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-[20px]"
          >

            {formData.service && (
              <>
                {/* Radio toggle */}
                {!['web_design', 'media_production', 'social_media', 'advertising', 'design', 'consultation'].includes(formData.service) && (
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.iam')}</label>
                    <div className="flex items-center w-full h-[44px] rounded-xl border border-[#EEEEEE] p-1 bg-gray-50">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'An Individual' })}
                        className={`flex-1 h-full rounded-lg text-[13px] font-bold transition-all ${formData.userType === 'An Individual' ? 'bg-[#FFF0EC] text-[#F1592A] shadow-sm' : 'bg-transparent text-[#888888] hover:text-[#141414]'}`}>
                        {t('contactus_page.form.user_types.individual')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: 'A company' })}
                        className={`flex-1 h-full rounded-lg text-[13px] font-bold transition-all ${formData.userType === 'A company' ? 'bg-[#FFF0EC] text-[#F1592A] shadow-sm' : 'bg-transparent text-[#888888] hover:text-[#141414]'}`}>
                        {t('contactus_page.form.user_types.company')}
                      </button>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-[#555555] font-semibold">
                    {t('contactus_page.form.labels.fullname')}<span className="text-[#F1592A]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: validateName(e.target.value) });
                    }}
                    onBlur={(e) => setErrors({ ...errors, name: validateName(e.target.value) })}
                    className={`h-[48px] w-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                  />
                  {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] text-[#555555] font-semibold">
                    {t('contactus_page.form.labels.phone')}<span className="text-[#F1592A]">*</span>
                  </label>
                  <div className="flex gap-2 h-[48px]">
                    <div className="relative w-[110px] h-full flex-shrink-0">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="h-full w-full rounded-xl border border-[#EEEEEE] outline-none pl-3 pr-8 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white focus:border-[#F1592A] transition-all cursor-pointer"
                      >
                        <option value="+20">Eg +20</option>
                        <option value="+971">UAE +971</option>
                        <option value="+966">KSA +966</option>
                      </select>
                      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-3' : 'right-3'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      inputMode="numeric"
                      onChange={(e) => {
                        // Only allow digit characters
                        const digitsOnly = e.target.value.replace(/\D/g, '');
                        setFormData({ ...formData, phone: digitsOnly });
                        if (errors.phone) setErrors({ ...errors, phone: validatePhone(digitsOnly) });
                      }}
                      onBlur={(e) => setErrors({ ...errors, phone: validatePhone(e.target.value) })}
                      className={`flex-1 h-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white text-left ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      dir="ltr"
                    />
                  </div>
                  {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone}</span>}
                </div>

                {/* Service Specific Form Fields */}
                {!['web_design', 'media_production', 'social_media', 'advertising', 'design', 'consultation'].includes(formData.service) ? (
                  <div className="flex flex-col gap-[8px]">
                    {/* Description */}
                    <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.description')}<span className="text-[#F1592A]">*</span></label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full rounded-xl border outline-none p-4 text-[14px] text-[#141414] resize-none transition-all min-h-[120px] bg-gray-50 focus:bg-white ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      placeholder={t('contactus_page.form.placeholders.description')}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message}</span>}
                  </div>
                ) : formData.service === 'web_design' ? (
                  <>
                    {/* Website Type */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.website_type')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.websiteType}
                          onChange={(e) => {
                            setFormData({ ...formData, websiteType: e.target.value });
                            if (errors.websiteType) setErrors({ ...errors, websiteType: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.websiteType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select type</option>
                          <option value="صفحة هبوط Landing Page">صفحة هبوط Landing Page</option>
                          <option value="موقع تعريفي Corporate Website">موقع تعريفي Corporate Website</option>
                          <option value="متجر إلكتروني E-commerce">متجر إلكتروني E-commerce</option>
                          <option value="تطبيق موبايل Mobile App">تطبيق موبايل Mobile App</option>
                          <option value="أخرى Other">أخرى Other</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.websiteType && <span className="text-red-500 text-xs font-medium">{errors.websiteType}</span>}
                    </div>

                    {/* Pages Count */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.pages_count')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.pagesCount}
                          onChange={(e) => {
                            setFormData({ ...formData, pagesCount: e.target.value });
                            if (errors.pagesCount) setErrors({ ...errors, pagesCount: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.pagesCount ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select pages count</option>
                          <option value="صفحة واحدة">صفحة واحدة</option>
                          <option value="2 لـ 5 صفحات">2 لـ 5 صفحات</option>
                          <option value="5 لـ 10 صفحات">5 لـ 10 صفحات</option>
                          <option value="أكثر من 10 صفحات">أكثر من 10 صفحات</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.pagesCount && <span className="text-red-500 text-xs font-medium">{errors.pagesCount}</span>}
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.budget')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.budget}
                          onChange={(e) => {
                            setFormData({ ...formData, budget: e.target.value });
                            if (errors.budget) setErrors({ ...errors, budget: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.budget ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select budget</option>
                          <option value="أقل من 10,000 جنيه">أقل من 10,000 جنيه</option>
                          <option value="10,000 - 25,000 جنيه">10,000 - 25,000 جنيه</option>
                          <option value="25,000 - 50,000 جنيه">25,000 - 50,000 جنيه</option>
                          <option value="أكثر من 50,000 جنيه">أكثر من 50,000 جنيه</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.budget && <span className="text-red-500 text-xs font-medium">{errors.budget}</span>}
                    </div>

                    {/* Additional Services */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.additional_services')}
                      </label>
                      <div className="grid grid-cols-2 gap-3 mt-1">
                        {[
                          'إدارة سوشيال ميديا',
                          'حملات إعلانية',
                          'هوية تجارية',
                          'كتابة محتوى'
                        ].map((serviceOption) => (
                          <label key={serviceOption} className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={formData.additionalServices.includes(serviceOption)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({ ...formData, additionalServices: [...formData.additionalServices, serviceOption] });
                                } else {
                                  setFormData({ ...formData, additionalServices: formData.additionalServices.filter(s => s !== serviceOption) });
                                }
                              }}
                              className="w-4 h-4 text-[#F1592A] rounded border-gray-300 focus:ring-[#F1592A] accent-[#F1592A]"
                            />
                            <span className="text-[13px] text-[#555555]">{serviceOption}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                ) : formData.service === 'media_production' ? (
                  <>
                    {/* Business Type */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.business_type')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.businessType}
                          onChange={(e) => {
                            setFormData({ ...formData, businessType: e.target.value });
                            if (errors.businessType) setErrors({ ...errors, businessType: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.businessType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select business type</option>
                          <option value="براند منتجات">براند منتجات</option>
                          <option value="خدمات">خدمات / شركة</option>
                          <option value="تطبيق">تطبيق</option>
                          <option value="أخرى Other">أخرى Other</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.businessType && <span className="text-red-500 text-xs font-medium">{errors.businessType}</span>}
                    </div>

                    {/* Videos Count */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.videos_count')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.videosCount}
                          onChange={(e) => {
                            setFormData({ ...formData, videosCount: e.target.value });
                            if (errors.videosCount) setErrors({ ...errors, videosCount: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.videosCount ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select videos count</option>
                          <option value="فيديو واحد">فيديو واحد</option>
                          <option value="2 لـ 5 فيديوهات">2 لـ 5 فيديوهات</option>
                          <option value="أكثر من 5 فيديوهات">أكثر من 5 فيديوهات</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.videosCount && <span className="text-red-500 text-xs font-medium">{errors.videosCount}</span>}
                    </div>
                  </>
                ) : formData.service === 'social_media' ? (
                  <>
                    {/* Business Name */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.business_name')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        className={`h-[48px] w-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white ${errors.businessName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      />
                      {errors.businessName && <span className="text-red-500 text-xs font-medium">{errors.businessName}</span>}
                    </div>

                    {/* Activity Type */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.activity_type')}<span className="text-[#F1592A]">*</span>
                      </label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.activityType}
                          onChange={(e) => {
                            setFormData({ ...formData, activityType: e.target.value });
                            if (errors.activityType) setErrors({ ...errors, activityType: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.activityType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select activity type</option>
                          <option value="متجر إلكتروني">متجر إلكتروني</option>
                          <option value="خدمات">خدمات / شركة</option>
                          <option value="شخصية عامة">شخصية عامة</option>
                          <option value="أخرى Other">أخرى Other</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.activityType && <span className="text-red-500 text-xs font-medium">{errors.activityType}</span>}
                    </div>

                    {/* Platforms */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">
                        {t('contactus_page.form.labels.platforms')}
                      </label>
                      <div className="grid grid-cols-2 gap-3 mt-1">
                        {[
                          'Facebook',
                          'Instagram',
                          'Twitter / X',
                          'TikTok',
                          'Snapchat',
                          'LinkedIn'
                        ].map((platformOption) => (
                          <label key={platformOption} className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={formData.platforms.includes(platformOption)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({ ...formData, platforms: [...formData.platforms, platformOption] });
                                } else {
                                  setFormData({ ...formData, platforms: formData.platforms.filter(p => p !== platformOption) });
                                }
                              }}
                              className="w-4 h-4 text-[#F1592A] rounded border-gray-300 focus:ring-[#F1592A] accent-[#F1592A]"
                            />
                            <span className="text-[13px] text-[#555555]">{platformOption}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                ) : formData.service === 'advertising' ? (
                  <>
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.business_type')}<span className="text-[#F1592A]">*</span></label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.businessType}
                          onChange={(e) => {
                            setFormData({ ...formData, businessType: e.target.value });
                            if (errors.businessType) setErrors({ ...errors, businessType: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.businessType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select business type</option>
                          <option value="متجر إلكتروني">متجر إلكتروني</option>
                          <option value="خدمات">خدمات / شركة</option>
                          <option value="شخصية عامة">شخصية عامة</option>
                          <option value="أخرى Other">أخرى Other</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.businessType && <span className="text-red-500 text-xs font-medium">{errors.businessType}</span>}
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.marketing_budget')}<span className="text-[#F1592A]">*</span></label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.marketingBudget}
                          onChange={(e) => {
                            setFormData({ ...formData, marketingBudget: e.target.value });
                            if (errors.marketingBudget) setErrors({ ...errors, marketingBudget: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.marketingBudget ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select marketing budget</option>
                          <option value="أقل من 5000 جنيه">أقل من 5000 جنيه</option>
                          <option value="5000 - 10000 جنيه">5000 - 10000 جنيه</option>
                          <option value="أكثر من 10000 جنيه">أكثر من 10000 جنيه</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.marketingBudget && <span className="text-red-500 text-xs font-medium">{errors.marketingBudget}</span>}
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.additional_details')}</label>
                      <textarea
                        value={formData.additionalDetails}
                        onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                        className="w-full rounded-xl border border-[#EEEEEE] outline-none p-4 text-[14px] text-[#141414] resize-none transition-all min-h-[120px] bg-gray-50 focus:bg-white focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]"
                        placeholder="Any additional details..."
                      ></textarea>
                    </div>
                  </>
                ) : formData.service === 'design' ? (
                  <>
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.business_name')}<span className="text-[#F1592A]">*</span></label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        className={`h-[48px] w-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white ${errors.businessName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      />
                      {errors.businessName && <span className="text-red-500 text-xs font-medium">{errors.businessName}</span>}
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.design_type')}<span className="text-[#F1592A]">*</span></label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.designType}
                          onChange={(e) => {
                            setFormData({ ...formData, designType: e.target.value });
                            if (errors.designType) setErrors({ ...errors, designType: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.designType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select design type</option>
                          <option value="تصميمات سوشيال ميديا">تصميمات سوشيال ميديا</option>
                          <option value="هوية بصرية">هوية بصرية</option>
                          <option value="مطبوعات">مطبوعات</option>
                          <option value="أخرى Other">أخرى Other</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.designType && <span className="text-red-500 text-xs font-medium">{errors.designType}</span>}
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.designs_count')}<span className="text-[#F1592A]">*</span></label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.designsCount}
                          onChange={(e) => {
                            setFormData({ ...formData, designsCount: e.target.value });
                            if (errors.designsCount) setErrors({ ...errors, designsCount: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.designsCount ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select count</option>
                          <option value="تصميم واحد">تصميم واحد</option>
                          <option value="2 لـ 5 تصميمات">2 لـ 5 تصميمات</option>
                          <option value="أكثر من 5 تصميمات">أكثر من 5 تصميمات</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.designsCount && <span className="text-red-500 text-xs font-medium">{errors.designsCount}</span>}
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.hasVisualIdentity')}<span className="text-[#F1592A]">*</span></label>
                      <div className="relative h-[48px] w-full">
                        <select
                          value={formData.hasVisualIdentity}
                          onChange={(e) => {
                            setFormData({ ...formData, hasVisualIdentity: e.target.value });
                            if (errors.hasVisualIdentity) setErrors({ ...errors, hasVisualIdentity: undefined });
                          }}
                          className={`h-full w-full rounded-xl border outline-none pl-4 pr-10 text-[14px] text-[#555555] appearance-none bg-gray-50 focus:bg-white transition-all cursor-pointer ${errors.hasVisualIdentity ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                        >
                          <option value="">Select</option>
                          <option value="نعم">نعم</option>
                          <option value="لا">لا</option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRtl ? 'left-4' : 'right-4'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#555555]"><path d="M6 9l6 6 6-6" /></svg>
                        </div>
                      </div>
                      {errors.hasVisualIdentity && <span className="text-red-500 text-xs font-medium">{errors.hasVisualIdentity}</span>}
                    </div>
                  </>
                ) : formData.service === 'consultation' ? (
                  <>
                    {/* Business Type */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.business_type')}<span className="text-[#F1592A]">*</span></label>
                      <input
                        type="text"
                        value={formData.businessType}
                        onChange={(e) => {
                          setFormData({ ...formData, businessType: e.target.value });
                          if (errors.businessType) setErrors({ ...errors, businessType: undefined });
                        }}
                        className={`h-[48px] w-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white ${errors.businessType ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      />
                      {errors.businessType && <span className="text-red-500 text-xs font-medium">{errors.businessType}</span>}
                    </div>

                    {/* Goal */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.goal')}<span className="text-[#F1592A]">*</span></label>
                      <input
                        type="text"
                        value={formData.goal}
                        onChange={(e) => {
                          setFormData({ ...formData, goal: e.target.value });
                          if (errors.goal) setErrors({ ...errors, goal: undefined });
                        }}
                        className={`h-[48px] w-full rounded-xl border outline-none px-4 text-[14px] transition-all bg-gray-50 focus:bg-white ${errors.goal ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-[#EEEEEE] focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]'}`}
                      />
                      {errors.goal && <span className="text-red-500 text-xs font-medium">{errors.goal}</span>}
                    </div>

                    {/* Additional Details */}
                    <div className="flex flex-col gap-[8px]">
                      <label className="text-[14px] text-[#555555] font-semibold">{t('contactus_page.form.labels.additional_details')}</label>
                      <textarea
                        value={formData.additionalDetails}
                        onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                        className="w-full rounded-xl border border-[#EEEEEE] outline-none p-4 text-[14px] text-[#141414] resize-none transition-all min-h-[120px] bg-gray-50 focus:bg-white focus:border-[#F1592A] focus:ring-1 focus:ring-[#F1592A]"
                        placeholder="Any additional details..."
                      ></textarea>
                    </div>
                  </>
                ) : null}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] rounded-xl bg-[#F1592A] hover:bg-[#d94f24] text-white font-bold text-[16px] transition-all shadow-glow hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-2 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contactus_page.form.buttons.submitting')}
                    </>
                  ) : (
                    t('contactus_page.form.buttons.submit')
                  )}
                </button>
              </>
            )}

            {/* Submission Status Alert Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-[14px] font-medium text-center animate-fade-in-down">
                {t('contactus_page.form.status.success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[14px] font-medium text-center animate-fade-in-down">
                {t('contactus_page.form.status.error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contactus;
