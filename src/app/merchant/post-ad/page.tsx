"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/web-mock-data";

export default function PostAdPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard?tab=listings");
    }, 1500);
  };

  return (
    <main className="web-container py-8 md:py-10 max-w-3xl">
      <header className="mb-8 flex items-center gap-4 md:mb-10 md:gap-6">
        <button 
          onClick={() => router.back()}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-all shadow-sm md:h-12 md:w-12 md:rounded-2xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-zinc-900 md:text-4xl">Post a New Ad</h1>
          <p className="mt-0.5 text-xs font-medium text-zinc-500 md:mt-1 md:text-base">Share your fresh catch with the community</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Image Upload Placeholder */}
        <section className="rounded-[2rem] border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-8 text-center transition-colors hover:border-[#12D16E]/50 md:rounded-[2.5rem] md:p-12">
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl shadow-sm md:h-20 md:w-20 md:rounded-3xl md:text-3xl">📸</div>
          <h3 className="text-base font-bold text-zinc-900 md:text-lg">Upload Product Photos</h3>
          <p className="mt-1 text-xs font-medium text-zinc-500 md:text-sm">Drag and drop or click to browse</p>
          <input type="file" multiple className="hidden" />
          <button type="button" className="mt-4 rounded-xl bg-black px-5 py-2.5 text-xs font-black tracking-widest text-white hover:bg-zinc-800 transition-colors md:mt-6 md:px-6 md:py-3 md:text-xs">SELECT IMAGES</button>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-sm md:rounded-[2.5rem] md:p-10">
          <div className="grid gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Product Name</label>
            <input 
              required
              className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
              placeholder="e.g. Fresh Oron Crayfish"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
              <select className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all appearance-none cursor-pointer">
                {categories.map(cat => <option key={cat.id}>{cat.name}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Price (₦)</label>
              <input 
                required
                type="number"
                className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Description</label>
            <textarea 
              required
              rows={4}
              className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all resize-none"
              placeholder="Tell buyers about your product quality, source, and delivery options..."
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`mt-4 w-full rounded-2xl bg-[#12D16E] py-5 text-sm font-black text-white shadow-lg shadow-[#12D16E]/20 transition-all active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:brightness-105"}`}
          >
            {isLoading ? "PUBLISHING..." : "PUBLISH ADVERT"}
          </button>
        </section>
      </form>
    </main>
  );
}
