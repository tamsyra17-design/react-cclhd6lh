import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ locale, product }) {
  const copy = product[locale];

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[28px] bg-white">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-[var(--night)]/92 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
          {product.badge}
        </div>
        <Image
          src={product.image}
          alt={copy.name}
          className="aspect-[4/4.8] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          width={900}
          height={1100}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-[var(--night)]">{copy.name}</p>
          <p className="mt-1 max-w-xs text-sm leading-6 text-[var(--muted)]">{copy.short}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-lg font-semibold text-[var(--night)]">{product.pricing[locale].current}</p>
          <p className="text-xs text-[var(--muted)] line-through">{product.pricing[locale].old}</p>
        </div>
      </div>
      <Link
        href={`/${locale}/products/${product.slug}`}
        className="mt-4 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--night)] transition hover:border-[var(--gold)] hover:bg-[var(--gold)]"
      >
        {locale === "ar" ? "تفاصيل المنتج" : "View details"}
      </Link>
    </article>
  );
}
