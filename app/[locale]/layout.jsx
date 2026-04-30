import { notFound } from "next/navigation";
import StorefrontLayout from "@/components/watch/StorefrontLayout";
import { getSiteContent, isValidLocale, locales } from "@/lib/watch-site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);
  return {
    title: `${content.brand} | ${content.brandLine}`,
    description: content.story,
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <div dir={content.dir} lang={locale}>
      <StorefrontLayout content={content}>{children}</StorefrontLayout>
    </div>
  );
}
