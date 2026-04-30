import { notFound } from "next/navigation";
import ProductCard from "@/components/watch/ProductCard";
import SectionTitle from "@/components/watch/SectionTitle";
import {
  getCollectionBySlug,
  getProductsByCategory,
  getSiteContent,
} from "@/lib/watch-site";

export default async function CategoryPage({ params }) {
  const { locale, category } = await params;
  const content = getSiteContent(locale);
  const collection = getCollectionBySlug(category);
  const products = getProductsByCategory(category);

  if (!collection) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow={content.sections.collection}
        title={collection[locale].name}
        body={collection[locale].summary}
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.length ? (
          products.map((product) => <ProductCard key={product.slug} locale={locale} product={product} />)
        ) : (
          <p className="text-[var(--muted)]">
            {locale === "ar" ? "لا توجد منتجات في هذه الفئة حالياً." : "No products in this category yet."}
          </p>
        )}
      </div>
    </main>
  );
}
