export default function AdminSettingsPage() {
  const settings = [
    ["اللغة الافتراضية", "العربية"],
    ["اللغة الثانوية", "English"],
    ["رقم واتساب", "+968 9000 1111"],
    ["عملة العرض", "USD"],
    ["وضع الطلب", "Catalog + WhatsApp"],
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#6d7169]">Settings</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#13232d]">إعدادات التشغيل</h1>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
        <div className="grid gap-4 md:grid-cols-2">
          {settings.map(([label, value]) => (
            <div key={label} className="rounded-[24px] bg-[#f6f2ea] px-5 py-4">
              <p className="text-sm text-[#6d7169]">{label}</p>
              <p className="mt-2 text-lg font-semibold text-[#13232d]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
