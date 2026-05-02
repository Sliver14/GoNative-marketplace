"use client";

import { useState } from "react";
import { conversations } from "@/lib/web-mock-data";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);

  const handleSelectChat = (chat: typeof conversations[0]) => {
    setActiveChat(chat);
    setShowChatOnMobile(true);
  };

  return (
    <main className="web-container flex h-[calc(100vh-80px)] gap-6 py-4 md:py-6">
      {/* Left Side: Chat List Management */}
      <aside className={`flex w-full md:w-96 flex-col rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm overflow-hidden ${showChatOnMobile ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-6 border-b border-zinc-50">
          <h1 className="text-xl md:text-2xl font-black tracking-tight">Messages</h1>
          
          {/* Search Bar */}
          <div className="mt-4 md:mt-6 flex items-center gap-3 rounded-2xl bg-zinc-50 px-4 py-3 border border-transparent focus-within:border-zinc-200 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-zinc-400"
            />
          </div>

          {/* Filters */}
          <div className="mt-4 md:mt-6 flex gap-2">
            <button 
              onClick={() => setFilter("all")}
              className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest transition-all ${filter === "all" ? "bg-black text-white shadow-lg" : "text-zinc-400 hover:text-black hover:bg-zinc-50"}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("unread")}
              className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest transition-all ${filter === "unread" ? "bg-black text-white shadow-lg" : "text-zinc-400 hover:text-black hover:bg-zinc-50"}`}
            >
              Unread
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`flex w-full items-center gap-4 rounded-[1.5rem] p-4 transition-all ${activeChat.id === chat.id ? "bg-[#E8FFF3] border border-[#12D16E]/10" : "hover:bg-zinc-50 border border-transparent"}`}
            >
              <div className="relative shrink-0">
                <img src={chat.avatar} className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-sm" />
                {chat.unread > 0 && (
                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#12D16E] text-xs font-black text-white border-2 border-white">
                    {chat.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-zinc-900 truncate text-sm md:text-base">{chat.name}</h4>
                  <span className="text-xs font-medium text-zinc-400 shrink-0">{chat.time}</span>
                </div>
                <p className="mt-1 line-clamp-1 text-xs md:text-xs font-medium text-zinc-500">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Right Side: Chat View */}
      <section className={`flex-1 flex-col rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm overflow-hidden ${showChatOnMobile ? 'flex' : 'hidden md:flex'}`}>
        {activeChat ? (
          <>
            <header className="flex items-center justify-between border-b border-zinc-50 p-4 md:p-6">
              <div className="flex items-center gap-3 md:gap-4">
                <button 
                  onClick={() => setShowChatOnMobile(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-50 text-zinc-600 md:hidden"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <img src={activeChat.avatar} className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-sm" />
                <div>
                  <h3 className="font-bold text-zinc-900 text-sm md:text-base">{activeChat.name}</h3>
                  <p className="text-xs font-black text-[#12D16E] uppercase tracking-[0.1em]">Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="grid h-10 w-10 place-items-center rounded-xl text-zinc-400 hover:bg-zinc-50 hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-xl text-zinc-400 hover:bg-zinc-50 hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto bg-zinc-50/30 p-8 space-y-6">
              <div className="flex justify-center">
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-black text-zinc-400 shadow-sm uppercase tracking-widest border border-zinc-100">Today</span>
              </div>
              
              <div className="flex max-w-[70%] flex-col gap-2">
                <div className="rounded-[1.5rem] rounded-tl-none bg-white p-4 text-sm font-medium text-zinc-900 shadow-sm border border-zinc-100">
                  Hello! Is the Oron crayfish still available?
                </div>
                <span className="text-xs font-bold text-zinc-400 ml-2">09:41 AM</span>
              </div>

              <div className="flex max-w-[70%] flex-col gap-2 self-end items-end">
                <div className="rounded-[1.5rem] rounded-tr-none bg-black p-4 text-sm font-medium text-white shadow-md">
                  Yes, it is! Just got a fresh batch this morning.
                </div>
                <span className="text-xs font-bold text-zinc-400 mr-2 flex items-center gap-1">
                  09:45 AM 
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#12D16E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
              </div>
            </div>

            <footer className="p-6 border-t border-zinc-50 bg-white">
              <div className="flex items-center gap-4 rounded-[1.5rem] bg-zinc-50 p-2 pl-6 pr-2 focus-within:ring-2 focus-within:ring-[#12D16E]/20 transition-all border border-transparent focus-within:border-zinc-200">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-zinc-400"
                />
                <button className="grid h-12 w-12 place-items-center rounded-[1.2rem] bg-[#12D16E] text-white shadow-lg shadow-[#12D16E]/20 hover:scale-105 active:scale-95 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
              </div>
            </footer>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center p-8">
            <div className="mb-6 grid h-24 w-24 place-items-center rounded-[2.5rem] bg-zinc-50 text-4xl shadow-inner grayscale opacity-40">💬</div>
            <h3 className="text-xl font-black">Your Messages</h3>
            <p className="mt-2 max-w-xs font-medium text-zinc-400">Select a conversation to start chatting with buyers or sellers.</p>
          </div>
        )}
      </section>
    </main>
  );
}
