"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useSearch } from "@/context/search-context";
import { categories } from "@/lib/web-mock-data";

export function SiteHeader() {
  const { user, logout, isAuthenticated } = useAuth();
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useSearch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:gap-8">
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-[#12D16E] hover:opacity-80 transition-opacity md:text-2xl shrink-0">
          <span className="hidden xs:inline">GONATIVE</span> MARKET<span className="hidden xs:inline">PLACE</span>
          <span className="xs:hidden">G-MARKET</span>
        </Link>

        {/* Global Search Bar - Desktop */}
        <div className="hidden flex-1 items-center gap-0 overflow-hidden rounded-2xl bg-zinc-100 lg:flex focus-within:ring-2 focus-within:ring-[#12D16E]/20 transition-all border border-transparent focus-within:border-zinc-200">
          {/* Keyword Search */}
          <div className="flex flex-[1.5] items-center gap-2 border-r border-zinc-200 px-4 py-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400 text-zinc-900"
            />
          </div>

          {/* Location Search */}
          <div className="flex flex-1 items-center gap-2 border-r border-zinc-200 px-4 py-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <input
              type="text"
              placeholder="Ife, Nigeria"
              className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400 text-zinc-900"
            />
          </div>

          <div className="relative flex items-center h-full group">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-full bg-zinc-100 pl-4 pr-8 text-xs font-semibold uppercase tracking-wider text-zinc-500 outline-none cursor-pointer hover:bg-zinc-200 transition-colors appearance-none border-none"
            >
              <option>All</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <div className="absolute right-3 pointer-events-none text-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          <button className="bg-black px-6 py-2.5 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors">
            SEARCH
          </button>
        </div>

        <nav className="flex items-center gap-1 md:gap-5">
          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* Mobile Only: Saved & Notifications */}
          <div className="flex items-center gap-0.5 md:hidden">
            <Link
              href="/dashboard?tab=saved"
              className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
              </svg>
            </Link>
            <Link
              href="/dashboard?tab=notifications"
              className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
              </svg>
            </Link>
          </div>

          {isAuthenticated ? (
            <>
              <div className="hidden items-center gap-0.5 sm:gap-1 md:flex md:gap-2">
                {/* My Adverts Icon */}
                <Link
                  href="/dashboard?tab=listings"
                  title="My Adverts"
                  className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                  </svg>
                </Link>

                {/* Messages Icon */}
                <Link
                  href="/messages"
                  title="Messages"
                  className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg>
                </Link>

                {/* Notifications Icon */}
                <Link
                  href="/dashboard?tab=notifications"
                  title="Notifications"
                  className="grid h-10 w-10 place-items-center rounded-xl text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                  </svg>
                </Link>
              </div>

              <div className="h-6 w-px bg-zinc-200 mx-1 hidden md:block" />

              <div className="relative group hidden md:block">
                <button className="flex items-center gap-2 py-2">
                  <img 
                    src={user?.avatar} 
                    alt="Me" 
                    className="h-9 w-9 rounded-full object-cover border-2 border-transparent group-hover:border-[#12D16E] transition-all shadow-sm" 
                  />
                </button>
                
                {/* Avatar Dropdown */}
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
                  <div className="w-48 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl">
                    <div className="px-4 py-3 border-b border-zinc-50">
                      <p className="text-xs font-bold text-zinc-900 truncate">{user?.name}</p>
                      <p className="text-xs font-medium text-zinc-400 capitalize">{user?.role.toLowerCase()}</p>
                    </div>
                    <div className="p-1">
                      <Link href="/dashboard?tab=listings" className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-black transition-colors">
                        📦 Shop
                      </Link>
                      <Link href="/dashboard?tab=feedbacks" className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-black transition-colors">
                        ⭐ Feedback
                      </Link>
                      <Link href="/dashboard?tab=performance" className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-black transition-colors">
                        📈 Performance
                      </Link>
                      <Link href="/dashboard?tab=settings" className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-black transition-colors">
                        ⚙️ Settings
                      </Link>
                    </div>
                    <div className="p-1 border-t border-zinc-50">
                      <button 
                        onClick={logout}
                        className="w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/merchant/post-ad"
                className="hidden md:flex ml-1 items-center gap-2 rounded-xl bg-[#12D16E] px-3 py-2 md:px-6 md:py-2.5 text-sm font-bold text-white transition-all active:scale-95 shadow-lg shadow-[#12D16E]/20"
              >
                <span className="text-xl">+</span>
                <span className="hidden sm:inline">SELL</span>
              </Link>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold text-white transition-all active:scale-95 shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hidden xs:block">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              SIGN IN
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Search Bar - Expandable */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isSearchOpen ? 'max-h-20 border-t border-zinc-100' : 'max-h-0'}`}>
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 overflow-hidden rounded-xl bg-zinc-100 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search seafood..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs font-medium outline-none placeholder:text-zinc-400 text-zinc-900"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
