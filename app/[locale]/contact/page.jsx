import SectionTitle from "@/components/watch/SectionTitle";
import { getSiteContent } from "@/lib/watch-site";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  const cards = [
      {
        title: locale === "ar" ? "واتساب" : "WhatsApp",
        body: content.contact.whatsapp,
        sub: locale === "ar" ? "للاستفسار والطلب السريع" : "For fast inquiries and direct orders",
      },
      {
        title: locale === "ar" ? "البريد الإلكتروني" : "Email",
        body: content.contact.email,
        sub: locale === "ar" ? "للعروض والجملة والتعاون" : "For partnerships, wholesale, and campaigns",
      },
      {
        title: locale === "ar" ? "الموقع" : "Location",
        body: content.contact.location,
        sub: locale === "ar" ? "مناسب لمتجر رقمي مع تنسيق شحن محلي" : "Ideal for a digital-first store with local shipping coordination",
      },
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow={content.sections.contact}
        title={locale === "ar" ? "قنوات التواصل والطلب" : "Contact and order channels"}
        body={locale === "ar" ? "يمكن ربط هذه الصفحة لاحقاً بنموذج فعلي أو تكامل CRM." : "This page is ready to connect to a real form or CRM workflow later."}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[28px] bg-white p-6 shadow-[0_16px_40px_rgba(19,35,45,0.05)]">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{card.title}</p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--night)]">{card.body}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.sub}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
