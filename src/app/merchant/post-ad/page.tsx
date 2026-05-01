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
    <main className="web-container py-10 max-w-3xl">
      <header className="mb-10 flex items-center gap-6">
        <button 
          onClick={() => router.back()}
          className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-all shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900">Post a New Ad</h1>
          <p className="mt-1 font-medium text-zinc-500">Share your fresh catch with the community</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Image Upload Placeholder */}
        <section className="rounded-[2.5rem] border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center transition-colors hover:border-[#12D16E]/50">
          <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-3xl bg-white text-3xl shadow-sm">📸</div>
          <h3 className="text-lg font-bold text-zinc-900">Upload Product Photos</h3>
          <p className="mt-1 text-sm font-medium text-zinc-500">Drag and drop or click to browse</p>
          <input type="file" multiple className="hidden" />
          <button type="button" className="mt-6 rounded-xl bg-black px-6 py-3 text-xs font-black tracking-widest text-white hover:bg-zinc-800 transition-colors">SELECT IMAGES</button>
        </section>

        <section className="grid gap-6 rounded-[2.5rem] border border-zinc-100 bg-white p-10 shadow-sm">
          <div className="grid gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Product Name</label>
            <input 
              required
              className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
              placeholder="e.g. Fresh Oron Crayfish"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
              <select className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all appearance-none cursor-pointer">
                {categories.map(cat => <option key={cat.id}>{cat.name}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Price (₦)</label>
              <input 
                required
                type="number"
                className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Description</label>
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
            className={`mt-4 w-full rounded-2xl bg-[#12D16E] py-5 text-sm font-black text-[#FFD700] shadow-lg shadow-[#12D16E]/20 transition-all active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:brightness-105"}`}
          >
            {isLoading ? "PUBLISHING..." : "PUBLISH ADVERT"}
          </button>
        </section>
      </form>
    </main>
  );
}
