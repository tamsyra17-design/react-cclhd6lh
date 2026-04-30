import Link from "next/link";
import SectionTitle from "@/components/watch/SectionTitle";
import { getProducts, getSiteContent } from "@/lib/watch-site";

export default async function CollectionsPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const products = getProducts();

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow={content.sections.collection}
        title={locale === "ar" ? "كل الفئات في شاشة واحدة" : "All collections in one browsing view"}
        body={locale === "ar" ? "هذه الشاشة جاهزة لتتحول لاحقاً إلى فلترة حقيقية وربط قاعدة البيانات." : "This screen is ready to grow into a fully filtered database-backed collection browser."}
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.collections.map((collection) => {
          const count = products.filter((product) => product.category === collection.slug).length;
          return (
            <Link
              key={collection.slug}
              href={`/${locale}/collections/${collection.slug}`}
              className="rounded-[28px] border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">/{collection.slug}</p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--night)]">{collection[locale].name}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{collection[locale].summary}</p>
              <p className="mt-6 text-sm font-semibold text-[var(--gold-deep)]">
                {count} {locale === "ar" ? "موديل" : "models"}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
