"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      login(email, password);
      router.push("/");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-xl items-center px-4 py-8 md:px-6 md:py-10">
      <div className="w-full rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-xl md:rounded-[2.5rem] md:p-10">
        <div className="mb-8 text-center md:mb-10">
          <Link href="/" className="inline-block text-2xl font-black tracking-tighter text-[#12D16E] mb-4 md:text-3xl md:mb-6">
            GONATIVE MARKETPLACE
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">Welcome Back</h1>
          <p className="mt-2 text-sm font-medium text-zinc-500 md:text-base">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
                placeholder="name@example.com"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Password</label>
                <Link href="#" className="text-xs font-black uppercase tracking-widest text-[#12D16E] hover:underline">Forgot?</Link>
              </div>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl bg-zinc-50 border border-transparent px-5 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-[#12D16E]/20 focus:border-[#12D16E] transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full rounded-2xl bg-[#12D16E] px-4 py-5 text-sm font-black text-white shadow-lg shadow-[#12D16E]/20 transition-all active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:brightness-105"}`}
          >
            {isLoading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>

        <p className="mt-10 text-center text-sm font-bold text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-black text-[#12D16E] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
