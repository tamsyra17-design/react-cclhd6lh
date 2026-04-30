import { getProducts } from "@/lib/watch-site";

export default function AdminProductsPage() {
  const products = getProducts();

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#6d7169]">Products</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#13232d]">إدارة المنتجات والترجمة</h1>
      </div>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_18px_48px_rgba(19,35,45,0.08)]">
        <table className="min-w-full text-right text-sm">
          <thead className="bg-[#f6f2ea] text-[#6d7169]">
            <tr>
              <th className="px-6 py-4 font-medium">المنتج</th>
              <th className="px-6 py-4 font-medium">الفئة</th>
              <th className="px-6 py-4 font-medium">السعر</th>
              <th className="px-6 py-4 font-medium">المخزون</th>
              <th className="px-6 py-4 font-medium">اللغات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.slug} className="border-t border-black/6">
                <td className="px-6 py-5">
                  <p className="font-semibold text-[#13232d]">{product.ar.name}</p>
                  <p className="mt-1 text-xs text-[#6d7169]">{product.en.name}</p>
                </td>
                <td className="px-6 py-5 text-[#6d7169]">{product.category}</td>
                <td className="px-6 py-5 font-semibold text-[#13232d]">${product.price}</td>
                <td className="px-6 py-5 text-[#6d7169]">{product.stock}</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-[#efe5d0] px-3 py-1 text-xs font-semibold text-[#7a5d22]">
                    AR / EN
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
