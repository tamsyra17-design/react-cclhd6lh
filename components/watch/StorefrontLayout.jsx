import Link from "next/link";

export default function StorefrontLayout({ content, children }) {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="border-b border-white/10 bg-[var(--night)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <div>
            <Link href={`/${content.locale}`} className="text-2xl font-semibold tracking-[0.08em] uppercase">
              {content.brand}
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/55">
              {content.brandLine}
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/78 md:flex">
            {content.nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={content.locale === "ar" ? "/en" : "/ar"}
              className="rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              {content.locale === "ar" ? "English" : "العربية"}
            </Link>
            <Link
              href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              className="rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--night)]"
            >
              {content.locale === "ar" ? "واتساب" : "WhatsApp"}
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-[var(--night)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <h3 className="text-xl font-semibold">{content.brand}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              {content.story}
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50">
              {content.sections.contact}
            </h4>
            <div className="mt-3 space-y-2 text-sm text-white/78">
              <p>WhatsApp: {content.contact.whatsapp}</p>
              <p>Email: {content.contact.email}</p>
              <p>{content.contact.location}</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50">
              {content.sections.admin}
            </h4>
            <div className="mt-3 space-y-2 text-sm text-white/78">
              <p>{content.locale === "ar" ? "إدارة المنتجات والترجمة" : "Products and translations"}</p>
              <p>{content.locale === "ar" ? "الطلبات والشحن" : "Orders and shipping"}</p>
              <p>{content.locale === "ar" ? "العروض والمحتوى" : "Offers and content"}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
