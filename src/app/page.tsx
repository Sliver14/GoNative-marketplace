"use client";

import Link from "next/link";
import { useMemo } from "react";
import { categories, products } from "@/lib/web-mock-data";
import { useSearch } from "@/context/search-context";

export default function Home() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useSearch();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="web-container py-8 md:py-12">
      {/* Hero Section */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="mb-12 rounded-[2.5rem] bg-black p-8 text-center text-white md:p-16">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            The best place to buy & sell <span className="text-[#12D16E]">Seafood</span>
          </h1>
          <p className="mx-auto max-w-xl font-medium text-white/60">
            Connecting fresh catch from local merchants directly to your kitchen.
          </p>
        </section>
      )}

      {/* Categories Navigation - Simplified Quick Access */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Browse Categories</h2>
          {(searchQuery || selectedCategory !== "All") && (
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-[#12D16E] hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-xl px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === "All"
                ? "bg-[#12D16E] text-[#FFD700] shadow-lg shadow-[#12D16E]/20"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`rounded-xl px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.name
                  ? "bg-[#12D16E] text-[#FFD700] shadow-lg shadow-[#12D16E]/20"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            {searchQuery || selectedCategory !== "All" ? "Search Results" : "Recent Listings"}
          </h2>
          <p className="text-sm font-medium text-zinc-400">
            {filteredProducts.length} items found
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href="/messages"
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-bold backdrop-blur-sm">
                    {product.location}
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-1 truncate text-sm font-semibold text-zinc-900">
                    {product.name}
                  </p>
                  <p className="text-xl font-bold text-[#12D16E]">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-zinc-50 pt-3">
                    <span className="text-[10px] font-medium text-zinc-400">
                      {product.distance} away
                    </span>
                    <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase">
                      {product.unit}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <span className="text-6xl">🔍</span>
            <h3 className="mt-6 text-xl font-bold">No listings found</h3>
            <p className="mt-2 font-medium text-zinc-400 text-sm">Try adjusting your search or category filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}
