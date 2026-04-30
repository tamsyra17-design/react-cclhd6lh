import { getSiteContent } from "@/lib/watch-site";

export default function AdminOrdersPage() {
  const content = getSiteContent("ar");

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#6d7169]">Orders</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#13232d]">الطلبات والشحن</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {content.adminSummary.orders.map((order) => (
          <article key={order.id} className="rounded-[32px] bg-white p-6 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#6d7169]">{order.id}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#13232d]">{order.customer}</h2>
              </div>
              <span className="rounded-full bg-[#efe5d0] px-3 py-1 text-xs font-semibold text-[#7a5d22]">
                {order.status}
              </span>
            </div>
            <div className="mt-6 space-y-2 text-sm text-[#6d7169]">
              <p>المنتج: {order.item}</p>
              <p>الإجمالي: {order.total}</p>
              <p>المتابعة: واتساب + مكالمة تأكيد</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
