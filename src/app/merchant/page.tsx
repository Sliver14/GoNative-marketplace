"use client";

import Link from "next/link";

export default function MerchantDashboardPage() {
  const stats = [
    { label: "Live Products", value: "12", trend: "+2 this week" },
    { label: "Active Orders", value: "08", trend: "0 pending" },
    { label: "Unread Chats", value: "03", trend: "Fast response" },
    { label: "Store Rating", value: "4.9", trend: "Top 5% seller" },
  ];

  return (
    <main className="web-container py-8 md:py-12">
      <header className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Seller Dashboard</h1>
          <p className="mt-1 text-sm font-medium text-zinc-500 md:text-base">Welcome back, Joe&apos;s Fresh Catch</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link 
            href="/merchant/post-ad"
            className="rounded-2xl bg-[#12D16E] px-8 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#12D16E]/20 transition-transform active:scale-95"
          >            POST A NEW AD
          </Link>
          <Link
            href="/merchant/profile"
            className="rounded-2xl border border-zinc-200 px-8 py-4 text-center text-sm font-semibold hover:bg-zinc-50 transition-colors"
          >
            View Shop
          </Link>
        </div>
      </header>

      <section className="mb-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-[1.5rem] border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:rounded-[2rem] md:p-8">
            <p className="text-2xl font-bold md:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400 md:text-xs">{stat.label}</p>
            <p className="mt-2 text-xs font-bold text-[#12D16E] md:mt-3 md:text-xs">{stat.trend}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Orders Section */}
        <section className="rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-sm md:rounded-[2.5rem] md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold md:text-2xl">Recent Orders</h2>
            <Link href="/merchant/orders" className="text-xs font-bold text-[#12D16E] hover:underline uppercase tracking-widest">View All</Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 p-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-zinc-200" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">Order #ORD-{4200 + i}</p>
                    <p className="text-xs font-medium text-zinc-400">2 items • ₦14,500</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-[#E8FFF3] px-3 py-1 text-xs font-bold text-[#12D16E]">PENDING</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links / Actions */}
        <section className="space-y-4">
          <h2 className="px-4 text-xs font-black uppercase tracking-widest text-zinc-400">Quick Management</h2>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              { label: "Inventory", href: "/dashboard?tab=listings", color: "bg-zinc-100" },
              { label: "Messages", href: "/messages", color: "bg-zinc-100" },
              { label: "Analytics", href: "/dashboard?tab=performance", color: "bg-zinc-100" },
              { label: "Settings", href: "/dashboard?tab=settings", color: "bg-zinc-100" },
            ].map((item) => (              <Link
                key={item.label}
                href={item.href}
                className={`flex h-28 flex-col justify-end rounded-[1.5rem] ${item.color} p-5 transition-transform hover:scale-[1.02] active:scale-100 md:h-32 md:rounded-[2rem] md:p-6`}
              >
                <p className="text-base font-bold md:text-lg">{item.label}</p>
                <p className="text-xs font-medium text-zinc-500">Go to section →</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
