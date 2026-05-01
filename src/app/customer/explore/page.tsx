import Link from "next/link";

import { categories, products } from "@/lib/web-mock-data";

const tags = ["Live Fish", "Smoked", "Frozen", "Crustaceans", "Premium"];

export default function ExplorePage() {
  return (
    <main className="mobile-shell px-5 py-6">
      <h1 className="screen-title">Explore Market</h1>
      <div className="mt-4 rounded-2xl bg-white p-4">
        <input
          className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-sm font-semibold outline-none"
          placeholder="Search by name, category or region..."
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={`rounded-full px-4 py-2 text-xs font-black ${
                index === 0 ? "bg-[#12D16E] text-[#FFD700]" : "bg-zinc-100 text-zinc-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-2xl font-black">Top Categories</h2>
        <div className="mt-3 grid gap-3 grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} className="rounded-3xl bg-white p-5 text-center">
              <p className="text-base font-black">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black">Trending Near You</h2>
        <div className="mt-3 space-y-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/messages"
              className="flex items-center gap-3 rounded-2xl bg-white p-3"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="font-black">{product.name}</p>
                <p className="font-black text-[#12D16E]">
                  ₦{product.price.toLocaleString()}
                </p>
                <p className="text-xs font-semibold text-zinc-500">{product.location}</p>
              </div>
              <span className="text-xl text-zinc-300">›</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
