"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { products } from "@/lib/web-mock-data";

type TabType = "listings" | "followers" | "feedbacks" | "saved" | "notifications" | "performance" | "settings";

function DashboardContent() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("listings");
  const [deletingProduct, setDeletingProduct] = useState<string | null>(null);

  useEffect(() => {
    const tab = searchParams.get("tab") as TabType;
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const menuItems = [
    { id: "listings", label: "My Adverts", icon: "📦" },
    { id: "followers", label: "Followers", icon: "👥" },
    { id: "feedbacks", label: "Feedbacks", icon: "⭐" },
    { id: "saved", label: "Saved", icon: "🔖" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
  ];

  const handleDelete = (id: string) => {
    // In a real app, this would be an API call
    console.log("Deleting product:", id);
    setDeletingProduct(null);
  };

  return (
    <main className="web-container py-8 flex flex-col lg:flex-row gap-8">
      {/* Delete Confirmation Modal */}
      {deletingProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-[2.5rem] bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-red-50 text-2xl">⚠️</div>
              <h3 className="text-xl font-bold text-zinc-900">Delete Advert?</h3>
              <p className="mt-2 text-sm font-medium text-zinc-500">This action cannot be undone. Are you sure you want to remove this listing?</p>
            </div>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleDelete(deletingProduct)}
                className="w-full rounded-2xl bg-red-500 py-4 text-sm font-black text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
              >
                YES, DELETE IT
              </button>
              <button 
                onClick={() => setDeletingProduct(null)}
                className="w-full rounded-2xl bg-zinc-100 py-4 text-sm font-black text-zinc-900 hover:bg-zinc-200 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar */}
      <aside className="w-full lg:w-80 shrink-0 space-y-6">
        {/* Identity Block */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white p-6 md:p-8 shadow-sm">
          <button 
            onClick={() => setActiveTab("settings")}
            className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-xl bg-zinc-50 text-zinc-400 hover:bg-zinc-100 hover:text-black transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <div className="flex flex-row items-center gap-4 text-left lg:flex-col lg:text-center">
            <div className="relative">
              <img 
                src={user?.avatar} 
                className="h-20 w-20 rounded-full border-4 border-[#12D16E] object-cover shadow-lg lg:h-32 lg:w-32" 
              />
              <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#12D16E] border-4 border-white lg:h-6 lg:w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zinc-900 lg:mt-6 lg:text-xl">{user?.name}</h2>
              <p className="mt-0.5 text-xs font-medium text-zinc-500 lg:mt-1 lg:text-sm">0812 345 6789</p>
            </div>
          </div>
        </div>

        {/* Labeled Menu - Scrollable on mobile */}
        <nav className="rounded-[2.5rem] border border-zinc-100 bg-white p-2 lg:p-4 shadow-sm overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <ul className="flex flex-row gap-2 lg:flex-col lg:space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} className="shrink-0 lg:w-full">
                <button
                  onClick={() => setActiveTab(item.id as TabType)}
                  className={`flex items-center gap-3 rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-all lg:w-full lg:gap-4 lg:py-4 lg:text-sm ${
                    activeTab === item.id
                      ? "bg-black text-white shadow-lg shadow-black/10"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-black"
                  }`}
                >
                  <span className="text-xl lg:text-2xl">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Right Pane */}
      <section className="flex-1">
        {activeTab === "listings" && (
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="mb-8 flex items-center justify-between">
               <h2 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400">Active Listings</h2>
               <Link
                href="/merchant/post-ad"
                className="rounded-2xl bg-[#12D16E] px-6 py-3 text-xs font-black tracking-widest text-white transition-transform active:scale-95 shadow-md"
              >
                + POST A NEW AD
              </Link>
             </div>
             <div className="grid gap-4">
               {products.map((product) => (
                 <article key={product.id} className="group flex flex-col sm:flex-row gap-6 rounded-[2.5rem] border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:shadow-md">
                   <div className="h-32 w-full sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-3xl">
                     <img src={product.image} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                   </div>
                   <div className="flex flex-1 flex-col justify-center">
                     <div className="flex items-start justify-between gap-4">
                       <div>
                         <h3 className="text-lg font-bold text-zinc-900">{product.name}</h3>
                         <p className="text-xs font-medium text-zinc-400">{product.category} • {product.location}</p>
                       </div>
                       <p className="text-xl font-black text-[#12D16E]">₦{product.price.toLocaleString()}</p>
                     </div>
                     <div className="mt-5 flex flex-wrap gap-2">
                       <Link 
                        href={`/merchant/edit-ad/${product.id}`}
                        className="rounded-xl bg-zinc-50 px-5 py-2.5 text-xs font-black tracking-widest hover:bg-black hover:text-white transition-colors"
                       >
                        EDIT
                       </Link>
                       <button 
                        onClick={() => setDeletingProduct(product.id)}
                        className="rounded-xl bg-zinc-50 px-5 py-2.5 text-xs font-black tracking-widest hover:bg-red-50 hover:text-red-500 transition-colors"
                       >
                        DELETE
                       </button>
                       <button className="sm:ml-auto rounded-xl border-2 border-[#12D16E] px-5 py-2 text-xs font-black tracking-widest text-[#12D16E] hover:bg-[#12D16E] hover:text-white transition-all">MARK AS SOLD</button>
                     </div>
                   </div>
                 </article>
               ))}
             </div>
           </div>
        )}

        {activeTab === "notifications" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="mb-8 text-sm font-black uppercase tracking-[0.2em] text-zinc-400">Notifications</h2>
            <div className="space-y-4">
              {[
                { title: "New Message", desc: "Mama T Seafood sent you a message about Oron Crayfish", time: "2 mins ago", icon: "💬" },
                { title: "Price Drop", desc: "An item in your saved list is now 10% cheaper", time: "1 hour ago", icon: "📉" },
                { title: "Order Confirmed", desc: "Your order for Smoked Bonga Fish has been confirmed", time: "Yesterday", icon: "✅" },
              ].map((n, i) => (
                <div key={i} className="flex gap-4 rounded-[2.5rem] border border-zinc-100 bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-50 text-xl">{n.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-zinc-900 truncate">{n.title}</h4>
                      <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest shrink-0">{n.time}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-zinc-500">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {["followers", "feedbacks", "saved", "performance", "settings"].includes(activeTab) && activeTab !== "listings" && activeTab !== "notifications" && (
          <div className="flex h-[60vh] flex-col items-center justify-center text-center animate-in fade-in duration-500">
            <div className="mb-6 text-6xl grayscale opacity-20">🛶</div>
            <h3 className="text-xl font-bold capitalize">{activeTab} coming soon</h3>
            <p className="mt-2 font-medium text-zinc-400">We&apos;re still reeling this feature in!</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
