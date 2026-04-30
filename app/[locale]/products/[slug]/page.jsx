import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageCircleMore } from "lucide-react";
import ProductCard from "@/components/watch/ProductCard";
import {
  getFeaturedProducts,
  getProductBySlug,
  getSiteContent,
} from "@/lib/watch-site";

export default async function ProductDetailPage({ params }) {
  const { locale, slug } = await params;
  const content = getSiteContent(locale);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const copy = product[locale];
  const related = getFeaturedProducts().filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {product.gallery.map((image, index) => (
            <div key={`${product.slug}-${index}`} className="overflow-hidden rounded-[28px] bg-white">
              <Image
                src={image}
                alt={copy.name}
                className="aspect-square w-full object-cover"
                width={900}
                height={900}
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{product.badge}</p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--night)]">{copy.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{copy.description}</p>

          <div className="mt-8 flex items-end gap-4">
            <p className="text-4xl font-semibold text-[var(--night)]">{product.pricing[locale].current}</p>
            <p className="pb-1 text-sm text-[var(--muted)] line-through">{product.pricing[locale].old}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="rounded-[24px] border border-[var(--line)] bg-white px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{key}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--night)]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <Check size={16} className="text-[var(--gold-deep)]" />
              <span>{locale === "ar" ? "ضمان فعلي مرفق مع الطلب" : "Warranty card included with the order"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <Check size={16} className="text-[var(--gold-deep)]" />
              <span>{locale === "ar" ? "مخزون حالي: " : "Live stock: "}{product.stock}</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/admin/orders"
              className="rounded-full bg-[var(--night)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              {locale === "ar" ? "تنفيذ الطلب من لوحة الإدارة" : "Manage order in admin"}
            </Link>
            <a
              href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--night)]"
            >
              <MessageCircleMore size={14} />
              {locale === "ar" ? "اطلب عبر واتساب" : "Order on WhatsApp"}
            </a>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold text-[var(--night)]">
          {locale === "ar" ? "موديلات قريبة" : "Related models"}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} locale={locale} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
