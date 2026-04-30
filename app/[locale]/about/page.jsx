import SectionTitle from "@/components/watch/SectionTitle";
import { getSiteContent } from "@/lib/watch-site";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow={content.sections.story}
        title={locale === "ar" ? "عن دار الوقت" : "About Dar Al Waqt"}
        body={locale === "ar" ? "هذه النسخة مصممة لتكون نقطة انطلاق حقيقية لمتجر ساعات احترافي." : "This version is designed as a practical launchpad for a professional watch business."}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {[
          {
            ar: "هوية عربية أولاً",
            en: "Arabic-first identity",
            bodyAr: "واجهة RTL، عناوين عربية واضحة، ومحتوى إنجليزي بديل جاهز للتوسع.",
            bodyEn: "RTL-ready presentation, clear Arabic headings, and alternate English content ready for growth.",
          },
          {
            ar: "مبيعات وترتيب",
            en: "Sales with structure",
            bodyAr: "الصفحات الأساسية مرتبة حول التصفح السريع، الثقة، ثم التحويل إلى طلب.",
            bodyEn: "Core pages are arranged around quick browsing, trust building, and conversion to order.",
          },
          {
            ar: "لوحة تشغيل عملية",
            en: "Operational admin",
            bodyAr: "لوحة الإدارة تقسم العمل إلى منتجات وطلبات ومحتوى وإعدادات دون تعقيد.",
            bodyEn: "The admin side separates products, orders, content, and settings without unnecessary complexity.",
          },
        ].map((block) => (
          <div key={block.en} className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(19,35,45,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--night)]">{block[locale]}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {locale === "ar" ? block.bodyAr : block.bodyEn}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
