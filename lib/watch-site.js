import {
  assets,
  dummyRatingsData,
} from "@/assets/assets";
import {
  BadgeCheck,
  Box,
  Clock3,
  Globe2,
  ShieldCheck,
  Truck,
  Watch,
} from "lucide-react";

export const locales = ["ar", "en"];

export const brandProfile = {
  name: {
    ar: "واتش وورلد",
    en: "Watch World",
  },
  tagline: {
    ar: "ساعات مختارة بأسلوب عصري وثقة يومية",
    en: "Curated watches with modern style and everyday trust",
  },
  whatsapp: "0096895149291",
  email: "ishtiaq.masud@gmail.com",
  location: {
    ar: "صحار، عُمان",
    en: "Saham, Oman",
  },
  currency: {
    ar: "ر.ع",
    en: "OMR",
  },
};

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function isRtlLocale(locale) {
  return locale === "ar";
}

const watchProducts = [
  {
    slug: "noor-classic-steel",
    category: "classic",
    badge: "new",
    price: 32,
    compareAt: 45,
    stock: 12,
    featured: true,
    image: assets.product_img10,
    gallery: [assets.product_img10, assets.product_img1, assets.product_img4],
    specs: {
      movement: "Quartz",
      caseSize: "40mm",
      strap: "Stainless steel",
      resistance: "5 ATM",
      warranty: "12 months",
    },
    ar: {
      name: "ساعة نور كلاسيك ستيل",
      short: "تصميم يومي أنيق بلمسة معدنية فاخرة.",
      description:
        "موديل عملي لرجال الأعمال والهدية اليومية، مع ميناء واضح وسوار ستيل مريح وثبات ممتاز خلال الاستخدام الطويل.",
    },
    en: {
      name: "Noor Classic Steel",
      short: "A polished everyday watch with a premium steel finish.",
      description:
        "A refined daily model for workwear, gifting, and smart casual styling, featuring a clean dial and comfortable steel bracelet.",
    },
    pricing: {
      ar: { current: "32 ر.ع", old: "45 ر.ع" },
      en: { current: "OMR 32", old: "OMR 45" },
    },
  },
  {
    slug: "layal-gold-edition",
    category: "women",
    badge: "bestseller",
    price: 36,
    compareAt: 52,
    stock: 8,
    featured: true,
    image: assets.product_img2,
    gallery: [assets.product_img2, assets.product_img5, assets.product_img7],
    specs: {
      movement: "Quartz",
      caseSize: "34mm",
      strap: "Gold plated",
      resistance: "3 ATM",
      warranty: "12 months",
    },
    ar: {
      name: "ساعة ليال جولد إديشن",
      short: "قطعة ناعمة للمناسبات والهدايا الراقية.",
      description:
        "ساعة نسائية أنيقة بتفاصيل ذهبية ناعمة، مناسبة للمظهر الرسمي والهدية الفاخرة مع راحة خفيفة على المعصم.",
    },
    en: {
      name: "Layal Gold Edition",
      short: "A graceful occasion watch with a gift-ready finish.",
      description:
        "An elegant women's watch with soft gold details, designed for occasion wear, polished gifting, and light daily elegance.",
    },
    pricing: {
      ar: { current: "36 ر.ع", old: "52 ر.ع" },
      en: { current: "OMR 36", old: "OMR 52" },
    },
  },
  {
    slug: "safir-sport-black",
    category: "sport",
    badge: "limited",
    price: 41,
    compareAt: 58,
    stock: 5,
    featured: true,
    image: assets.product_img3,
    gallery: [assets.product_img3, assets.product_img6, assets.product_img8],
    specs: {
      movement: "Quartz",
      caseSize: "42mm",
      strap: "Silicone",
      resistance: "10 ATM",
      warranty: "18 months",
    },
    ar: {
      name: "ساعة سفير سبورت بلاك",
      short: "مظهر رياضي قوي مع راحة عالية طوال اليوم.",
      description:
        "تصميم شبابي بوجه جريء وسوار مرن، مناسب للنشاط اليومي والسفر والإطلالة العصرية مع مقاومة أفضل للماء.",
    },
    en: {
      name: "Safir Sport Black",
      short: "A confident sporty silhouette built for all-day comfort.",
      description:
        "A bold-faced sport watch with a flexible strap, ideal for active days, travel, and modern styling with stronger water resistance.",
    },
    pricing: {
      ar: { current: "41 ر.ع", old: "58 ر.ع" },
      en: { current: "OMR 41", old: "OMR 58" },
    },
  },
  {
    slug: "amira-rose-mesh",
    category: "women",
    badge: "gift",
    price: 34,
    compareAt: 49,
    stock: 10,
    featured: false,
    image: assets.product_img9,
    gallery: [assets.product_img9, assets.product_img11],
    specs: {
      movement: "Quartz",
      caseSize: "32mm",
      strap: "Rose mesh",
      resistance: "3 ATM",
      warranty: "12 months",
    },
    ar: {
      name: "ساعة أميرة روز مش",
      short: "خيار أنيق للهدايا والإطلالات الخفيفة.",
      description:
        "ساعة بنبرة روز راقية وسوار شبكي ناعم، تمنح حضوراً أنيقاً للطلعات اليومية والمناسبات البسيطة.",
    },
    en: {
      name: "Amira Rose Mesh",
      short: "A refined gifting watch with a soft rose tone.",
      description:
        "A light, rose-toned watch with a mesh bracelet, ideal for elegant gifting and polished daily outfits.",
    },
    pricing: {
      ar: { current: "34 ر.ع", old: "49 ر.ع" },
      en: { current: "OMR 34", old: "OMR 49" },
    },
  },
  {
    slug: "royal-navy-chrono",
    category: "premium",
    badge: "premium",
    price: 48,
    compareAt: 66,
    stock: 4,
    featured: false,
    image: assets.product_img12,
    gallery: [assets.product_img12, assets.product_img4],
    specs: {
      movement: "Chronograph quartz",
      caseSize: "44mm",
      strap: "Leather",
      resistance: "5 ATM",
      warranty: "24 months",
    },
    ar: {
      name: "ساعة رويال نيفي كرونو",
      short: "موديل فاخر للحضور القوي والمظهر الرسمي.",
      description:
        "ساعة كرونوغراف بوجه عميق وتفاصيل رسمية، مناسبة لرجال الأعمال والهدايا الفاخرة والاجتماعات المهمة.",
    },
    en: {
      name: "Royal Navy Chrono",
      short: "A premium chronograph with formal presence.",
      description:
        "A statement chronograph with a deep navy dial and formal detailing, ideal for business styling and elevated gifting.",
    },
    pricing: {
      ar: { current: "48 ر.ع", old: "66 ر.ع" },
      en: { current: "OMR 48", old: "OMR 66" },
    },
  },
  {
    slug: "urban-silver-minimal",
    category: "men",
    badge: "daily",
    price: 29,
    compareAt: 39,
    stock: 14,
    featured: false,
    image: assets.product_img1,
    gallery: [assets.product_img1, assets.product_img10],
    specs: {
      movement: "Quartz",
      caseSize: "39mm",
      strap: "Silver link",
      resistance: "3 ATM",
      warranty: "12 months",
    },
    ar: {
      name: "ساعة أوربان سيلفر مينيمال",
      short: "ستايل هادئ يناسب المكتب والاستخدام اليومي.",
      description:
        "موديل بسيط بخطوط نظيفة وسوار مريح، ممتاز للدوام اليومي والمظهر المرتب دون مبالغة.",
    },
    en: {
      name: "Urban Silver Minimal",
      short: "A clean office-ready watch for everyday wear.",
      description:
        "A pared-back silver model with clean lines and a comfortable fit, built for everyday office dressing and understated polish.",
    },
    pricing: {
      ar: { current: "29 ر.ع", old: "39 ر.ع" },
      en: { current: "OMR 29", old: "OMR 39" },
    },
  },
];

const reviews = [
  {
    id: "rev-1",
    city: { ar: "مسقط", en: "Muscat" },
    name: "Alya N.",
    rating: 5,
    ar: "الخامة ممتازة والتوصيل كان سريع جداً. الساعة وصلت بنفس الشكل الموجود في الصور.",
    en: "Excellent finish and very fast delivery. The watch arrived exactly as shown in the photos.",
  },
  {
    id: "rev-2",
    city: { ar: "صحار", en: "Sohar" },
    name: "Faisal H.",
    rating: 5,
    ar: "اشتريت الساعة كهدية وكانت أنيقة وفخمة. خدمة الواتساب كانت سريعة وواضحة.",
    en: "I bought it as a gift and it felt elegant and premium. WhatsApp support was quick and clear.",
  },
  {
    id: "rev-3",
    city: { ar: "نزوى", en: "Nizwa" },
    name: "Mariam S.",
    rating: 4,
    ar: "التغليف مرتب والجودة جميلة، وأعجبني وجود الضمان مع الطلب.",
    en: "Clean packaging, lovely quality, and I appreciated having a warranty card with the order.",
  },
];

const faqs = [
  {
    ar: {
      q: "هل يوجد توصيل داخل عُمان؟",
      a: "نعم، مع خيارات توصيل سريعة داخل المدن الرئيسية، ويتم تأكيد الوقت عبر واتساب بعد الطلب.",
    },
    en: {
      q: "Do you deliver across Oman?",
      a: "Yes. We offer fast delivery across major cities, with final timing confirmed on WhatsApp after checkout.",
    },
  },
  {
    ar: {
      q: "هل الساعات تشمل ضماناً؟",
      a: "نعم، جميع الموديلات الأساسية تشمل ضماناً من 12 إلى 24 شهراً حسب الفئة.",
    },
    en: {
      q: "Do the watches include warranty?",
      a: "Yes. Core models include 12 to 24 months of warranty depending on the collection.",
    },
  },
  {
    ar: {
      q: "هل يمكن الطلب مباشرة من واتساب؟",
      a: "نعم، يمكن إتمام الطلب مباشرة عبر واتساب أو من خلال صفحة المنتج.",
    },
    en: {
      q: "Can I order directly through WhatsApp?",
      a: "Yes. Orders can be completed directly on WhatsApp or from the product page.",
    },
  },
];

const collections = [
  {
    slug: "men",
    accent: "from-[#2f4f5d] to-[#101b22]",
    ar: {
      name: "رجالي",
      summary: "موديلات يومية ورسمية للدوام والاجتماعات والهدايا.",
    },
    en: {
      name: "Men",
      summary: "Daily and formal watches for workwear, meetings, and gifting.",
    },
  },
  {
    slug: "women",
    accent: "from-[#765159] to-[#241217]",
    ar: {
      name: "نسائي",
      summary: "ساعات أنيقة للمناسبات والإطلالات الخفيفة والهدايا.",
    },
    en: {
      name: "Women",
      summary: "Elegant watches for occasions, light styling, and gifting.",
    },
  },
  {
    slug: "classic",
    accent: "from-[#8a6b38] to-[#27190b]",
    ar: {
      name: "كلاسيك",
      summary: "تصاميم هادئة بخطوط نظيفة وشعور فاخر.",
    },
    en: {
      name: "Classic",
      summary: "Quiet designs with clean lines and a premium feel.",
    },
  },
  {
    slug: "sport",
    accent: "from-[#17554a] to-[#071816]",
    ar: {
      name: "سبورت",
      summary: "موديلات قوية للنشاط اليومي والسفر والمظهر العصري.",
    },
    en: {
      name: "Sport",
      summary: "Confident models for active days, travel, and modern styling.",
    },
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    ar: { title: "ضمان واضح", body: "ضمان فعلي على كل موديل مع دعم سريع بعد البيع." },
    en: { title: "Clear Warranty", body: "Real warranty on every model with quick after-sales support." },
  },
  {
    icon: Truck,
    ar: { title: "توصيل سريع", body: "تجهيز الطلبات بسرعة مع تأكيد واتساب قبل الشحن." },
    en: { title: "Fast Delivery", body: "Orders are prepared quickly with WhatsApp confirmation before dispatch." },
  },
  {
    icon: Globe2,
    ar: { title: "محتوى ثنائي اللغة", body: "واجهة عربية أولاً مع إنجليزية جاهزة للتوسع." },
    en: { title: "Bilingual Ready", body: "Arabic-first experience with scalable English support." },
  },
  {
    icon: BadgeCheck,
    ar: { title: "اختيارات مختارة", body: "تشكيلة مركزة على الموديلات التي تُباع فعلاً وتناسب السوق." },
    en: { title: "Curated Range", body: "A focused range built around proven styles that fit the market." },
  },
];

const adminSummary = {
  kpis: [
    { key: "sales", value: "$12.4k", delta: "+18%", ar: "المبيعات الشهرية", en: "Monthly sales" },
    { key: "orders", value: "186", delta: "+11%", ar: "الطلبات", en: "Orders" },
    { key: "stock", value: "14", delta: "3 منخفضة", ar: "تنبيهات المخزون", en: "Stock alerts" },
    { key: "reviews", value: "4.8", delta: "32 تقييم", ar: "متوسط التقييم", en: "Average rating" },
  ],
  orders: [
    { id: "#WS-2048", customer: "Fatma A.", item: "Noor Classic Steel", status: "Confirmed", total: "$32" },
    { id: "#WS-2047", customer: "Saleh M.", item: "Royal Navy Chrono", status: "Packed", total: "$48" },
    { id: "#WS-2046", customer: "Reem T.", item: "Layal Gold Edition", status: "Delivered", total: "$36" },
    { id: "#WS-2045", customer: "Hamad K.", item: "Safir Sport Black", status: "New", total: "$41" },
  ],
  contentBlocks: [
    { title: "Hero Banner", state: "Published", updated: "2h ago" },
    { title: "Eid Offer Strip", state: "Scheduled", updated: "Tomorrow 10:00" },
    { title: "Arabic FAQ", state: "Updated", updated: "Today" },
    { title: "English Product Copy", state: "Review", updated: "Needs editor check" },
  ],
};

export function getProducts() {
  return watchProducts;
}

export function getFeaturedProducts() {
  return watchProducts.filter((product) => product.featured);
}

export function getProductsByCategory(category) {
  return watchProducts.filter((product) => product.category === category);
}

export function getProductBySlug(slug) {
  return watchProducts.find((product) => product.slug === slug);
}

export function getCollectionBySlug(slug) {
  return collections.find((collection) => collection.slug === slug);
}

export function getSiteContent(locale) {
  return {
    locale,
    dir: isRtlLocale(locale) ? "rtl" : "ltr",
    brand: brandProfile.name[locale],
    brandLine: brandProfile.tagline[locale],
    contact: {
      whatsapp: brandProfile.whatsapp,
      email: brandProfile.email,
      location: brandProfile.location[locale],
    },
    nav: [
      { href: `/${locale}`, label: locale === "ar" ? "الرئيسية" : "Home" },
      { href: `/${locale}/collections`, label: locale === "ar" ? "المجموعات" : "Collections" },
      { href: `/${locale}/collections/men`, label: locale === "ar" ? "رجالي" : "Men" },
      { href: `/${locale}/collections/women`, label: locale === "ar" ? "نسائي" : "Women" },
      { href: `/${locale}/about`, label: locale === "ar" ? "من نحن" : "About" },
      { href: `/${locale}/faq`, label: locale === "ar" ? "الأسئلة الشائعة" : "FAQ" },
      { href: `/${locale}/contact`, label: locale === "ar" ? "تواصل معنا" : "Contact" },
    ],
    hero: {
      eyebrow: locale === "ar" ? "تشكيلة مميزة من الساعات الأصلية" : "A curated range of statement watches",
      title:
        locale === "ar"
          ? "ساعات رجالية ونسائية بطابع فاخر وثقة جاهزة للبيع"
          : "Premium men's and women's watches built for trust and conversion",
      body:
        locale === "ar"
          ? "واجهة احترافية لعرض أهم موديلات Watch World، إبراز الضمان والجودة، وتحويل الزائر إلى طلب مباشر عبر واتساب أو صفحة المنتج."
          : "A professional storefront for Watch World that highlights your strongest models, warranty, and product quality, then converts visitors into direct orders through WhatsApp or product pages.",
      primaryCta: locale === "ar" ? "شاهد المجموعة" : "Explore collection",
      secondaryCta: locale === "ar" ? "اطلب عبر واتساب" : "Order on WhatsApp",
      statA: locale === "ar" ? "ضمان يصل إلى 24 شهراً" : "Up to 24 months warranty",
      statB: locale === "ar" ? "توصيل داخل عُمان" : "Delivery across Oman",
    },
    sections: {
      featured: locale === "ar" ? "الموديلات المميزة" : "Featured models",
      collection: locale === "ar" ? "تسوّق حسب الفئة" : "Shop by collection",
      story: locale === "ar" ? "لماذا هذه البنية مناسبة للإطلاق" : "Why this scaffold is launch-ready",
      reviews: locale === "ar" ? "ماذا يقول العملاء" : "What customers say",
      faq: locale === "ar" ? "أسئلة متكررة" : "Common questions",
      contact: locale === "ar" ? "طرق التواصل" : "Contact channels",
      admin: locale === "ar" ? "أقسام لوحة الإدارة" : "Admin areas",
    },
    story:
      locale === "ar"
        ? "الواجهة الأمامية مبنية حول البيع السريع والثقة البصرية، بينما تجمع لوحة الإدارة إدارة المنتجات والطلبات والعروض والمحتوى في مكان واحد."
        : "The customer side is built for visual trust and fast conversion, while the admin side brings products, orders, offers, and content into one operating surface.",
    faqs,
    reviews,
    collections,
    trustPoints,
    adminSummary,
    adminNav: [
      { href: "/admin", label: locale === "ar" ? "الرئيسية" : "Overview" },
      { href: "/admin/products", label: locale === "ar" ? "المنتجات" : "Products" },
      { href: "/admin/orders", label: locale === "ar" ? "الطلبات" : "Orders" },
      { href: "/admin/content", label: locale === "ar" ? "المحتوى" : "Content" },
      { href: "/admin/settings", label: locale === "ar" ? "الإعدادات" : "Settings" },
    ],
  };
}

export const adminPanels = [
  {
    title: { ar: "إدارة المنتجات", en: "Product Management" },
    text: {
      ar: "إضافة موديلات جديدة، تعديل الأسعار، وإكمال النص العربي والإنجليزي من شاشة واحدة.",
      en: "Create new models, update pricing, and complete Arabic and English copy from one screen.",
    },
    icon: Watch,
  },
  {
    title: { ar: "الطلبات والشحن", en: "Orders & Shipping" },
    text: {
      ar: "متابعة الحالة من جديد إلى تم التسليم مع ملاحظات داخلية وفلاتر سريعة.",
      en: "Track each order from new to delivered with internal notes and fast filters.",
    },
    icon: Box,
  },
  {
    title: { ar: "العروض والمحتوى", en: "Offers & Content" },
    text: {
      ar: "تحديث الهيرو، العروض الموسمية، والأسئلة الشائعة دون الرجوع إلى الكود.",
      en: "Refresh the hero, seasonal campaigns, and FAQs without editing code.",
    },
    icon: Clock3,
  },
];

export const productRatings = dummyRatingsData.slice(0, 3);
