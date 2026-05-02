"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { orders } from "@/lib/web-mock-data";

export default function CustomerOrdersPage() {
  const [tab, setTab] = useState<"Ongoing" | "Completed">("Ongoing");
  const filtered = useMemo(() => orders.filter((order) => order.status === tab), [tab]);

  return (
    <main className="mobile-shell px-5 py-6">
      <h1 className="screen-title">MY ORDERS</h1>
      <div className="mt-4 flex gap-6">
        {(["Ongoing", "Completed"] as const).map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`border-b-4 pb-2 text-xs font-black uppercase ${
              tab === item ? "border-[#12D16E] text-black" : "border-transparent text-zinc-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {filtered.map((order) => (
          <article key={order.id} className="rounded-3xl border border-zinc-200 bg-white p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-sm font-black">ORDER # {order.id}</p>
                <p className="text-xs font-black uppercase text-zinc-500">{order.date}</p>
              </div>
              <span
                className={`rounded-xl px-3 py-1 text-xs font-black uppercase ${
                  order.status === "Completed"
                    ? "bg-[#E8FFF3] text-[#12D16E]"
                    : "bg-[#FFFBE6] text-[#FFD700]"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="mb-4 flex gap-3">
              <img
                src={order.product.image}
                alt={order.product.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />
              <div>
                <p className="font-black">{order.product.name}</p>
                <p className="text-xs font-semibold text-zinc-500">
                  Seller: <span className="text-zinc-900">{order.product.seller.name}</span>
                </p>
                <p className="font-black text-[#12D16E]">
                  ₦{order.product.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="/messages"
                className="flex-1 rounded-2xl bg-black px-4 py-3 text-center text-sm font-black text-white"
              >
                Message Seller
              </Link>
              <Link
               href="/messages"
               className="rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-black text-zinc-900"
              >
               Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
