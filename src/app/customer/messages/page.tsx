"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { conversations } from "@/lib/web-mock-data";

type ChatFilter = "all" | "unread";

const mockMessages = [
  { id: 1, text: "Hello! Is this still available?", sent: false, time: "10:00 AM" },
  { id: 2, text: "Yes, it is! Freshly caught this morning.", sent: true, time: "10:05 AM" },
  { id: 3, text: "Great, I'll take 2kg. Can you deliver to Ife?", sent: false, time: "10:10 AM" },
  { id: 4, text: "Absolutely, I can deliver by 2 PM.", sent: true, time: "10:15 AM" },
];

export default function CustomerMessagesPage() {
  const [filter, setFilter] = useState<ChatFilter>("all");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const filteredConversations = useMemo(() => {
    if (filter === "unread") {
      return conversations.filter((c) => c.unread > 0);
    }
    return conversations;
  }, [filter]);

  const selectedChat = useMemo(() => 
    conversations.find(c => c.id === selectedChatId) || null
  , [selectedChatId]);

  return (
    <main className="web-container py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Messages</h1>
        <p className="mt-2 font-medium text-zinc-500">Stay connected with buyers and sellers</p>
      </header>

      <div className="grid h-[700px] gap-6 lg:grid-cols-[1.2fr_2fr]">
        {/* Chat List (Chat Heads) */}
        <section className="flex flex-col overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm">
          <div className="flex gap-2 p-6 border-b border-zinc-50">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-xl px-6 py-3 text-xs font-semibold transition-all ${
                filter === "all" ? "bg-black text-white" : "bg-zinc-100 text-zinc-400"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`rounded-xl px-6 py-3 text-xs font-semibold transition-all ${
                filter === "unread" ? "bg-[#12D16E] text-black" : "bg-zinc-100 text-zinc-400"
              }`}
            >
              UNREAD
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3">
            {filteredConversations.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
                className={`flex w-full items-center gap-4 rounded-[1.5rem] p-4 text-left transition-all ${
                  selectedChatId === chat.id 
                    ? "bg-[#E8FFF3] ring-2 ring-[#12D16E]" 
                    : "hover:bg-zinc-50"
                }`}
              >
                <div className="relative">
                  <img src={chat.avatar} className="h-14 w-14 rounded-full object-cover" />
                  {chat.unread > 0 && (
                    <span className="absolute -right-1 -top-1 h-6 w-6 rounded-full border-2 border-white bg-[#12D16E] text-[10px] font-bold text-white grid place-items-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-base font-semibold text-zinc-900">{chat.name}</p>
                    <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">{chat.time}</span>
                  </div>
                  <p className="truncate text-sm font-medium text-zinc-500">{chat.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Chat View */}
        <section className="flex flex-col overflow-hidden rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <header className="flex items-center gap-4 border-b border-zinc-50 p-6">
                <img src={selectedChat.avatar} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{selectedChat.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#12D16E]" />
                    <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </header>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto bg-zinc-50/30 p-8 space-y-6">
                {mockMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-[1.5rem] px-6 py-4 text-sm font-medium shadow-sm ${
                        msg.sent
                          ? "bg-[#12D16E] text-black rounded-tr-none"
                          : "bg-white text-zinc-900 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                      <p className={`mt-2 text-xs font-medium uppercase ${msg.sent ? "text-black/40" : "text-zinc-300"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 bg-white border-t border-zinc-50">
                <div className="flex items-center gap-3 rounded-[2rem] bg-zinc-100 p-3 pl-6">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 bg-transparent text-sm font-medium outline-none"
                  />
                  <button className="flex items-center gap-2 rounded-2xl bg-black px-8 py-3 text-xs font-bold text-white transition-all hover:scale-105 active:scale-95">
                    SEND
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="flex flex-1 flex-col items-center justify-center p-20 text-center text-zinc-300">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-zinc-50 text-5xl mb-6">
                💬
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Your Inbox</h3>
              <p className="mt-2 max-w-xs font-medium text-zinc-400">
                Select a conversation from the list to start chatting with buyers or sellers.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
