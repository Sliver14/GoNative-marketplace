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
    <main className="web-container py-12">
      <header className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Seller Dashboard</h1>
          <p className="mt-1 font-medium text-zinc-500">Welcome back, Joe&apos;s Fresh Catch</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/merchant/post-ad"
            className="rounded-2xl bg-[#12D16E] px-8 py-4 text-sm font-bold text-[#FFD700] transition-transform active:scale-95"
          >
            POST A NEW AD
          </Link>
          <Link
            href="/merchant/profile"
            className="hidden rounded-2xl border border-zinc-200 px-8 py-4 text-sm font-semibold md:block"
          >
            View Shop
          </Link>
        </div>
      </header>

      <section className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{stat.label}</p>
            <p className="mt-3 text-[10px] font-medium text-[#12D16E]">{stat.trend}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent Orders Section */}
        <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            <Link href="/merchant/orders" className="text-sm font-semibold text-[#12D16E] hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-zinc-200" />
                  <div>
                    <p className="text-sm font-semibold">Order #ORD-{4200 + i}</p>
                    <p className="text-[10px] font-medium text-zinc-400">2 items • ₦14,500</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#E8FFF3] px-3 py-1 text-[10px] font-semibold text-[#12D16E]">PENDING</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links / Actions */}
        <section className="space-y-4">
          <h2 className="px-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">Quick Management</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Manage Inventory", href: "/dashboard?tab=listings", color: "bg-zinc-100" },
              { label: "Customer Chat", href: "/messages", color: "bg-zinc-100" },
              { label: "Analytics", href: "/dashboard?tab=performance", color: "bg-zinc-100" },
              { label: "Shop Settings", href: "/dashboard?tab=settings", color: "bg-zinc-100" },
            ].map((item) => (              <Link
                key={item.label}
                href={item.href}
                className={`flex h-32 flex-col justify-end rounded-[2rem] ${item.color} p-6 transition-transform hover:scale-[1.02] active:scale-100`}
              >
                <p className="text-lg font-semibold">{item.label}</p>
                <p className="text-[10px] font-medium text-zinc-500">Go to section →</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
