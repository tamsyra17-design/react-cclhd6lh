import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import ProductCard from "@/components/watch/ProductCard";
import SectionTitle from "@/components/watch/SectionTitle";
import {
  adminPanels,
  getFeaturedProducts,
  getSiteContent,
} from "@/lib/watch-site";
import { assets } from "@/assets/assets";

export default async function LocaleHomePage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const products = getFeaturedProducts();

  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--night)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,177,83,0.24),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_45%)]" />
        <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-14 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
              {content.hero.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              {content.hero.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/collections`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--night)]"
              >
                {content.hero.primaryCta}
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/16 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                {content.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur">
                <p className="text-sm text-white/62">{content.hero.statA}</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur">
                <p className="text-sm text-white/62">{content.hero.statB}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -left-6 top-12 h-48 w-48 rounded-full bg-[rgba(219,177,83,0.15)] blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-52 w-52 rounded-full bg-[rgba(255,255,255,0.1)] blur-3xl" />
              <Image
                src={assets.hero_model_img}
                alt={content.brand}
                className="relative z-10 w-full object-contain drop-shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                width={900}
                height={1100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {content.trustPoints.map((point) => (
            <div key={point.en.title} className="rounded-[28px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(19,35,45,0.05)]">
              <point.icon className="text-[var(--gold-deep)]" size={22} />
              <h3 className="mt-4 text-lg font-semibold text-[var(--night)]">{point[locale].title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{point[locale].body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow={content.brandLine}
          title={content.sections.collection}
          body={content.story}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/${locale}/collections/${collection.slug}`}
              className={`overflow-hidden rounded-[32px] bg-gradient-to-br ${collection.accent} p-6 text-white transition duration-300 hover:-translate-y-1`}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/58">Collection</p>
              <h3 className="mt-6 text-2xl font-semibold">{collection[locale].name}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/74">
                {collection[locale].summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title={content.sections.featured}
          body={locale === "ar" ? "موديلات جاهزة للعرض المباشر مع تسعير وصور ومواصفات أساسية." : "Launch-ready product cards with pricing, imagery, and core specs."}
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} locale={locale} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow={content.sections.story}
              title={locale === "ar" ? "هيكل متجر واضح للإطلاق السريع" : "A clear structure for fast launch"}
              body={content.story}
            />
            <div className="mt-8 space-y-4">
              {adminPanels.map((panel) => (
                <div key={panel.en.title} className="rounded-[28px] border border-[var(--line)] bg-white px-5 py-5">
                  <panel.icon className="text-[var(--gold-deep)]" size={20} />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--night)]">{panel.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{panel.text[locale]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] bg-[var(--sand)] p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Admin preview</p>
                <h3 className="mt-3 text-3xl font-semibold text-[var(--night)]">
                  {locale === "ar" ? "إدارة المنتجات والطلبات من لوحة واحدة" : "Manage products and orders from one dashboard"}
                </h3>
              </div>
              <Link href="/admin" className="rounded-full bg-[var(--night)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {locale === "ar" ? "لوحة الإدارة" : "Open admin"}
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.adminSummary.kpis.map((item) => (
                <div key={item.key} className="rounded-[28px] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(19,35,45,0.06)]">
                        <p className="text-sm text-[var(--muted)]">{item[locale]}</p>
                        <div className="mt-4 flex items-end justify-between">
                          <p className="text-3xl font-semibold text-[var(--night)]">{item.value}</p>
                    <p className="text-xs font-semibold text-[var(--gold-deep)]">{item.delta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionTitle
            align="center"
            title={content.sections.reviews}
            body={locale === "ar" ? "عينات مراجعات لزيادة الثقة قبل إتمام الطلب." : "Sample review cards to build confidence before checkout."}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.reviews.map((review) => (
              <article key={review.id} className="rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-6">
                <div className="flex items-center gap-1 text-[var(--gold-deep)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-[var(--night)]">{review[locale]}</p>
                <div className="mt-6 text-sm text-[var(--muted)]">
                  <p className="font-semibold text-[var(--night)]">{review.name}</p>
                  <p>{review.city[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
