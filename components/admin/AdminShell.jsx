'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, FilePenLine, Settings, Languages } from "lucide-react";

const icons = {
  "/admin": LayoutDashboard,
  "/admin/products": Package,
  "/admin/orders": ShoppingCart,
  "/admin/content": FilePenLine,
  "/admin/settings": Settings,
};

export default function AdminShell({ navItems, children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f2ede4] text-[#13232d]">
      <div className="grid min-h-screen lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="border-b border-black/5 bg-[#13232d] px-5 py-6 text-white lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Dar Al Waqt</p>
              <h1 className="mt-2 text-2xl font-semibold">Admin</h1>
            </div>
            <div className="rounded-full border border-white/15 p-2">
              <Languages size={16} />
            </div>
          </div>

          <div className="mt-8 space-y-2">
            {navItems.map((item) => {
              const Icon = icons[item.href] || LayoutDashboard;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                    active ? "bg-white text-[#13232d]" : "text-white/75 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="border-b border-black/6 bg-[#f6f2ea]/90 px-5 py-4 backdrop-blur lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#6d7169]">Arabic-first operations</p>
                <h2 className="mt-2 text-2xl font-semibold">Watch store control center</h2>
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm text-[#6d7169] shadow-[0_10px_30px_rgba(19,35,45,0.07)]">
                Muscat timezone • Live-ready scaffold
              </div>
            </div>
          </header>

          <main className="flex-1 px-5 py-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
