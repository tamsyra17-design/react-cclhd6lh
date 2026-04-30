import SectionTitle from "@/components/watch/SectionTitle";
import { getSiteContent } from "@/lib/watch-site";

export default async function FaqPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow={content.sections.faq}
        title={locale === "ar" ? "أسئلة شائعة للإطلاق الأول" : "Launch-phase frequently asked questions"}
        body={locale === "ar" ? "هذه الأسئلة جاهزة للتخصيص حسب سياسة التوصيل والدفع الفعلية." : "These FAQs are ready to adapt to your real delivery and payment policies."}
      />

      <div className="mt-10 space-y-4">
        {content.faqs.map((item, index) => (
          <article key={index} className="rounded-[28px] border border-[var(--line)] bg-white p-6">
            <h2 className="text-xl font-semibold text-[var(--night)]">{item[locale].q}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item[locale].a}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
