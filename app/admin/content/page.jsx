import { getSiteContent } from "@/lib/watch-site";

export default function AdminContentPage() {
  const content = getSiteContent("ar");

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#6d7169]">Content</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#13232d]">إدارة المحتوى والعروض</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {content.adminSummary.contentBlocks.map((block) => (
          <div key={block.title} className="rounded-[32px] bg-white p-6 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#13232d]">{block.title}</h2>
              <span className="text-sm text-[#6d7169]">{block.state}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#6d7169]">
              {block.title === "Hero Banner"
                ? "صالح لتعديل العنوان الرئيسي، الوصف، والأزرار بالعربية والإنجليزية."
                : "يمكن ربط هذا البلوك لاحقاً بمحرر محتوى أو CMS خفيف حسب احتياج الإطلاق."}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#7a5d22]">{block.updated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
