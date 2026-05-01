"use client";

import { useState } from "react";

import { orders } from "@/lib/web-mock-data";

const statusOptions = ["Pending", "Ongoing", "Completed", "Cancelled"];

export default function MerchantOrdersPage() {
  const [openOrder, setOpenOrder] = useState<string | null>(null);

  return (
    <main className="mobile-shell px-5 py-6">
      <header className="mb-5">
        <h1 className="text-4xl font-black">ORDERS.</h1>
        <p className="text-sm font-semibold text-zinc-500">
          Keep track of your hustle and requests.
        </p>
      </header>

      <div className="space-y-4">
        {orders.map((order) => (
          <article key={order.id} className="rounded-3xl border border-zinc-200 bg-white p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-lg font-black"># {order.id}</p>
                <p className="text-xs font-black uppercase text-zinc-500">{order.date}</p>
              </div>
              <span className="rounded-xl bg-[#FFFBE6] px-3 py-1 text-[10px] font-black uppercase text-[#FFD700]">
                {order.status}
              </span>
            </div>
            <div className="mb-4 flex gap-3">
              <img
                src={order.product.image}
                alt={order.product.name}
                className="h-18 w-18 rounded-2xl object-cover"
              />
              <div>
                <p className="font-black">{order.product.name}</p>
                <p className="mt-1 inline-block rounded bg-[#E8FFF3] px-2 py-1 text-xs font-black text-[#12D16E]">
                  ₦{order.product.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex-1 rounded-2xl bg-black px-4 py-3 text-sm font-black text-white"
              >
                Chat
              </button>
              <button
                type="button"
                className="flex-1 rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-black text-zinc-900"
                onClick={() => setOpenOrder(order.id)}
              >
                Status
              </button>
            </div>

            {openOrder === order.id && (
              <div className="mt-4 rounded-2xl border border-zinc-200 p-3">
                <p className="mb-2 text-xs font-black uppercase text-zinc-500">
                  Update Order Status
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      type="button"
                      className={`rounded-xl border px-3 py-2 text-sm font-black ${
                        status === order.status
                          ? "border-[#12D16E] bg-[#E8FFF3] text-[#12D16E]"
                          : "border-zinc-200 bg-white text-zinc-700"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
