"use client";

import { useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { categories, products } from "@/lib/web-mock-data";

export default function EditAdPage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const product = useMemo(() => 
    products.find(p => p.id === params.id) || products[0],
  [params.id]);

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
          <h1 className="text-4xl font-black tracking-tight text-zinc-900">Edit Advert</h1>
          <p className="mt-1 font-medium text-zinc-500">Update your listing information</p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <section className="relative rounded-[2.5rem] border border-zinc-100 bg-white p-5 shadow-sm">
          <div className="aspect-video w-full overflow-hidden rounded-[2rem]">
            <img src={product.image} className="h-full w-full object-cover" />
          </div>
          <button type="button" className="absolute bottom-10 right-10 rounded-xl bg-black/80 backdrop-blur-md px-6 py-3 text-xs font-black tracking-widest text-white hover:bg-black transition-colors">CHANGE PHOTO</button>
        </section>

        <section className="grid gap-6 rounded-[2.5rem] border border-zinc-100 bg-white p-10 shadow-sm">
          <div className="grid gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Product Name</label>
            <input 
              required
              defaultValue={product.name}
              className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
              <select defaultValue={product.category} className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all appearance-none cursor-pointer">
                {categories.map(cat => <option key={cat.id}>{cat.name}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Price (₦)</label>
              <input 
                required
                type="number"
                defaultValue={product.price}
                className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Description</label>
            <textarea 
              required
              rows={4}
              defaultValue={product.description}
              className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all resize-none"
            />
          </div>

          <div className="flex gap-4">
            <button 
              type="button"
              onClick={() => router.back()}
              className="flex-1 rounded-2xl bg-zinc-100 py-5 text-sm font-black text-zinc-900 transition-all active:scale-95 hover:bg-zinc-200"
            >
              CANCEL
            </button>
            <button 
              type="submit"
              disabled={isLoading}
              className={`flex-[2] rounded-2xl bg-[#12D16E] py-5 text-sm font-black text-[#FFD700] shadow-lg shadow-[#12D16E]/20 transition-all active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:brightness-105"}`}
            >
              {isLoading ? "SAVING CHANGES..." : "SAVE CHANGES"}
            </button>
          </div>
        </section>
      </form>
    </main>
  );
}
