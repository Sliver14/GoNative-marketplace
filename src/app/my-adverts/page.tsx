"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { products, orders } from "@/lib/web-mock-data";

type TabType = "listings" | "orders" | "settings";

export default function MyAdvertsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>("listings");

  return (
    <main className="web-container py-10">
      <header className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">My Adverts</h1>
          <p className="mt-2 font-medium text-zinc-500">
            {user?.name}, manage your listings, sales, and account from here.
          </p>
        </div>
        <Link
          href="/merchant/post-ad"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#12D16E] px-8 py-4 text-sm font-bold text-[#FFD700] transition-all active:scale-95 shadow-md"
        >
          <span className="text-xl">+</span>
          POST A NEW AD
        </Link>
      </header>

      {/* Unified Tab Navigation */}
      <nav className="mb-8 flex gap-2 overflow-x-auto border-b border-zinc-100 pb-px scrollbar-hide">
        {[
          { id: "listings", label: "Active Ads", icon: "📦" },
          { id: "orders", label: "My Sales & Purchases", icon: "🤝" },
          { id: "settings", label: "Profile Settings", icon: "⚙️" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-6 py-4 text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? "border-[#12D16E] text-black"
                : "border-transparent text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab Content: Listings */}
      {activeTab === "listings" && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="grid gap-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col gap-6 rounded-[2.5rem] border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center"
              >
                <div className="h-32 w-full overflow-hidden rounded-3xl md:h-28 md:w-28">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-xs font-medium text-zinc-400">
                        {product.category} • {product.location}
                      </p>
                    </div>
                    <p className="text-xl font-bold text-[#12D16E]">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button className="rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                      EDIT
                    </button>
                    <button className="rounded-xl bg-zinc-100 px-5 py-2.5 text-xs font-semibold hover:bg-red-50 hover:text-red-500 transition-colors">
                      DELETE
                    </button>
                    <button className="rounded-xl border-2 border-[#12D16E] px-5 py-2.5 text-xs font-semibold text-[#12D16E] hover:bg-[#12D16E] hover:text-white transition-all">
                      MARK AS SOLD
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tab Content: Orders */}
      {activeTab === "orders" && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="grid gap-4">
            {orders.map((order) => (
              <article
                key={order.id}
                className="flex items-center justify-between rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <img src={order.product.image} className="h-20 w-20 rounded-2xl object-cover" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                      {order.id}
                    </p>
                    <h3 className="text-lg font-semibold">{order.product.name}</h3>
                    <p className="text-xs font-medium text-zinc-500">{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">₦{order.product.price.toLocaleString()}</p>
                  <span
                    className={`mt-2 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                      order.status === "Completed"
                        ? "bg-[#E8FFF3] text-[#12D16E]"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tab Content: Settings */}
      {activeTab === "settings" && (
        <section className="max-w-2xl animate-in fade-in duration-300">
          <div className="rounded-[2.5rem] border border-zinc-100 bg-white p-10 shadow-sm">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Account Information
            </h2>
            <div className="flex items-center gap-8">
              <div className="relative">
                <img
                  src={user?.avatar}
                  className="h-28 w-28 rounded-full border-4 border-[#12D16E] object-cover shadow-lg"
                />
                <button className="absolute bottom-1 right-1 grid h-9 w-9 place-items-center rounded-full bg-black text-white shadow-xl hover:scale-110 transition-transform">
                  📷
                </button>
              </div>
              <div className="flex-1 space-y-6">
                <div className="grid gap-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    Display Name
                  </label>
                  <input
                    className="w-full rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#12D16E] border border-transparent focus:border-transparent"
                    defaultValue={user?.name}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                    Contact Email
                  </label>
                  <input
                    className="w-full rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-medium outline-none border border-transparent"
                    disabled
                    value={user?.role.toLowerCase() + "@seafood.com"}
                  />
                </div>
              </div>
            </div>
            <button className="mt-10 w-full rounded-2xl bg-black py-5 text-sm font-bold text-white shadow-lg active:scale-95 transition-all">
              UPDATE PROFILE
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
