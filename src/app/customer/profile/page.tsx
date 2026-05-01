"use client";

import { useAuth } from "@/context/auth-context";
import Link from "next/link";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <main className="web-container py-12">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Personal Details</h1>
          <p className="mt-2 font-medium text-zinc-500">Manage your private information and account security</p>
        </header>

        <div className="space-y-8">
          {/* Avatar Section */}
          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-8">
              <div className="relative">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-28 w-28 rounded-full border-4 border-[#12D16E] object-cover shadow-lg"
                />
                <button className="absolute bottom-1 right-1 grid h-9 w-9 place-items-center rounded-full bg-black text-white shadow-xl hover:scale-110 transition-transform">
                  📷
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900">{user?.name}</h2>
                <p className="font-medium text-zinc-400">Account ID: {user?.id}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-full bg-[#E8FFF3] px-3 py-1 text-[10px] font-semibold text-[#12D16E]">
                    VERIFIED USER
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-10 shadow-sm space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Contact Information</h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="w-full rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#12D16E] border border-transparent"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 ..."
                  className="w-full rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#12D16E] border border-transparent"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Email Address</label>
              <input
                type="email"
                disabled
                value={user?.role.toLowerCase() + "@seafood.com"}
                className="w-full rounded-2xl bg-zinc-50 px-5 py-4 text-sm font-medium outline-none border border-transparent opacity-60 cursor-not-allowed"
              />
            </div>

            <div className="pt-4">
              <button className="w-full rounded-2xl bg-black py-5 text-sm font-bold text-white shadow-lg active:scale-[0.98] transition-all">
                SAVE CHANGES
              </button>
            </div>
          </section>

          {/* Account Security */}
          <section className="rounded-[2.5rem] border border-zinc-100 bg-white p-10 shadow-sm space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Security & Privacy</h3>
            <button className="flex w-full items-center justify-between rounded-2xl bg-zinc-50 p-5 text-left transition-colors hover:bg-zinc-100">
              <span className="text-sm font-medium text-zinc-700">Change Password</span>
              <span className="text-zinc-400">→</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-2xl bg-zinc-50 p-5 text-left transition-colors hover:bg-zinc-100">
              <span className="text-sm font-medium text-zinc-700">Privacy Settings</span>
              <span className="text-zinc-400">→</span>
            </button>
            <button 
              onClick={logout}
              className="flex w-full items-center justify-between rounded-2xl bg-red-50 p-5 text-left transition-colors hover:bg-red-100"
            >
              <span className="text-sm font-semibold text-red-500">Sign Out of All Devices</span>
              <span className="text-red-300">→</span>
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
