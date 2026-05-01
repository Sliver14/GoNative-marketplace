"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, products, promotions } from "@/lib/web-mock-data";

export default function CustomerHomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }
      if (!search.trim()) {
        return true;
      }
      const term = search.toLowerCase();
      return (
        product.name.toLowerCase().includes(term) ||
        product.location.toLowerCase().includes(term)
      );
    });
  }, [search, selectedCategory]);

  return (
    <main className="mobile-shell px-4 py-5">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">GONATIVE</h1>
          <p className="text-xs font-black text-zinc-500">ALL IFE</p>
        </div>
        <Link
          href="/customer/profile"
          className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-bold"
        >
          Profile
        </Link>
      </header>

      <section className="rounded-[1.25rem] bg-white p-3">
        <input
          className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-semibold outline-none"
          placeholder="Find your next meal plug..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-4 py-2 text-xs font-black ${
              selectedCategory === "All"
                ? "bg-black text-white"
                : "bg-zinc-100 text-zinc-700"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full px-4 py-2 text-xs font-black ${
                selectedCategory === category.name
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {!search && selectedCategory === "All" && (
        <section className="mt-5 grid gap-3">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="relative overflow-hidden rounded-3xl border border-black/10"
            >
              <img src={promo.image} alt={promo.title} className="h-44 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-black/45 p-4 text-white">
                <p className="text-lg font-black">{promo.title}</p>
                <p className="text-xs font-bold text-white/80">{promo.subtitle}</p>
              </div>
            </article>
          ))}
        </section>
      )}

      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-black uppercase text-zinc-500">
            {filteredProducts.length} listings nearby
          </p>
          <span className="rounded-lg bg-[#E8FFF3] px-2 py-1 text-[10px] font-black text-[#12D16E]">
            Nearby
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href="/messages"
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white"
            >
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
              <div className="p-3">
                <p className="truncate text-sm font-black">{product.name}</p>
                <p className="text-lg font-black text-[#12D16E]">
                  ₦{product.price.toLocaleString()}
                </p>
                <p className="mt-1 text-xs font-semibold text-zinc-500">
                  {product.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
