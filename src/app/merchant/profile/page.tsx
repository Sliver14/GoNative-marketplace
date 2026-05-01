"use client";

import Link from "next/link";

export default function MerchantProfilePage() {
  const stats = [
    { label: "Active Ads", value: "12", icon: "📊" },
    { label: "Total Views", value: "1.2k", icon: "👁️" },
    { label: "Followers", value: "48", icon: "👥" },
    { label: "Rating", value: "4.9", icon: "⭐" },
  ];

  return (
    <main className="web-container py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Sidebar: Profile Summary */}
        <aside className="space-y-6">
          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 text-center shadow-sm">
            <div className="relative mx-auto h-32 w-32">
              <img
                src="https://i.pravatar.cc/150?u=joe"
                alt="Joe's Fresh Catch"
                className="h-full w-full rounded-full border-4 border-[#12D16E] object-cover"
              />
              <span className="absolute bottom-1 right-1 grid h-8 w-8 place-items-center rounded-full bg-[#12D16E] text-[#FFD700]">
                ✓
              </span>
            </div>
            <h1 className="mt-6 text-2xl font-black">Joe&apos;s Fresh Catch</h1>
            <p className="mt-1 text-sm font-bold text-zinc-400">Merchant since May 2025</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="rounded-full bg-[#12D16E] px-3 py-1 text-[10px] font-black text-[#FFD700]">
                VERIFIED PLUG
              </span>
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 px-2 text-sm font-black uppercase tracking-widest text-zinc-400">Shop Menu</h2>
            <nav className="grid gap-2">
              {[
                { label: "Store Dashboard", href: "/dashboard", active: true },
                { label: "My Listings", href: "/dashboard?tab=listings" },
                { label: "Customer Messages", href: "/messages" },
                { label: "Order History", href: "/dashboard?tab=orders" },
                { label: "Payment Settings", href: "/dashboard?tab=settings" },
              ].map((item) => (                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition-colors ${
                    item.active ? "bg-black text-white" : "hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </section>

          <Link
            href="/auth/login"
            className="block rounded-2xl border border-red-100 p-4 text-center text-sm font-black text-red-500 hover:bg-red-50"
          >
            Logout Account
          </Link>
        </aside>

        {/* Main Content: Stats and Actions */}
        <div className="space-y-8">
          <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
                <span className="mb-3 block text-2xl">{stat.icon}</span>
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">{stat.label}</p>
              </article>
            ))}
          </section>

          <section className="rounded-[2.5rem] bg-black p-8 text-white">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="text-2xl font-black">Ready to sell more?</h2>
                <p className="mt-1 font-bold text-white/60">Upload your latest catch and reach buyers instantly.</p>
              </div>
              <Link
                href="/merchant/post-ad"
                className="rounded-2xl bg-[#12D16E] px-8 py-4 text-sm font-black text-[#FFD700] transition-transform active:scale-95"
              >
                POST A NEW AD
              </Link>
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-black">Performance Overview</h2>
            <div className="flex h-48 items-center justify-center rounded-3xl bg-zinc-50 border-2 border-dashed border-zinc-200">
              <p className="text-sm font-bold text-zinc-400 italic">Analytics chart placeholder</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
