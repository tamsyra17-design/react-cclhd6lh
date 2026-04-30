import AdminStatCard from "@/components/admin/AdminStatCard";
import { getSiteContent, getProducts } from "@/lib/watch-site";

export default function AdminDashboard() {
    const content = getSiteContent("ar");
    const products = getProducts().slice(0, 4);

    return (
        <div className="space-y-8">
            <section>
                <p className="text-xs uppercase tracking-[0.22em] text-[#6d7169]">Overview</p>
                <h1 className="mt-3 text-3xl font-semibold text-[#13232d]">لوحة تشغيل المتجر</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6d7169]">
                    شاشة رئيسية لمتابعة الأداء، الطلبات الأخيرة، والمحتوى الجاري تحديثه قبل الإطلاق أو بعده.
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {content.adminSummary.kpis.map((item) => (
                    <AdminStatCard key={item.key} label={item.ar} value={item.value} delta={item.delta} />
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-[#13232d]">آخر الطلبات</h2>
                        <span className="text-sm text-[#6d7169]">4 entries</span>
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="min-w-full text-right text-sm">
                            <thead className="text-[#6d7169]">
                                <tr>
                                    <th className="pb-3 font-medium">رقم</th>
                                    <th className="pb-3 font-medium">العميل</th>
                                    <th className="pb-3 font-medium">المنتج</th>
                                    <th className="pb-3 font-medium">الحالة</th>
                                    <th className="pb-3 font-medium">الإجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.adminSummary.orders.map((order) => (
                                    <tr key={order.id} className="border-t border-black/6">
                                        <td className="py-4">{order.id}</td>
                                        <td className="py-4">{order.customer}</td>
                                        <td className="py-4">{order.item}</td>
                                        <td className="py-4">
                                            <span className="rounded-full bg-[#efe5d0] px-3 py-1 text-xs font-semibold text-[#7a5d22]">
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 font-semibold text-[#13232d]">{order.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-[32px] bg-white p-6 shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
                        <h2 className="text-xl font-semibold text-[#13232d]">مهام المحتوى</h2>
                        <div className="mt-5 space-y-4">
                            {content.adminSummary.contentBlocks.map((block) => (
                                <div key={block.title} className="rounded-[24px] bg-[#f6f2ea] px-4 py-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="font-semibold text-[#13232d]">{block.title}</p>
                                        <span className="text-xs text-[#6d7169]">{block.state}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-[#6d7169]">{block.updated}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] bg-[#13232d] p-6 text-white shadow-[0_18px_48px_rgba(19,35,45,0.18)]">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Inventory preview</p>
                        <div className="mt-4 space-y-3">
                            {products.map((product) => (
                                <div key={product.slug} className="flex items-center justify-between rounded-[24px] border border-white/10 px-4 py-3">
                                    <div>
                                        <p className="font-medium">{product.ar.name}</p>
                                        <p className="text-sm text-white/55">SKU: {product.slug}</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold">${product.price}</p>
                                        <p className="text-sm text-white/55">{product.stock} pcs</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
