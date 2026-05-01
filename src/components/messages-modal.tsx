"use client";

import { useState, useMemo } from "react";
import { useAuth } from "@/context/auth-context";
import { conversations } from "@/lib/web-mock-data";

type ChatFilter = "all" | "unread";

const mockMessages = [
  { id: 1, text: "Hello! Is this still available?", sent: false, time: "10:00 AM" },
  { id: 2, text: "Yes, it is! Freshly caught this morning.", sent: true, time: "10:05 AM" },
  { id: 3, text: "Great, I'll take 2kg. Can you deliver to Ife?", sent: false, time: "10:10 AM" },
  { id: 4, text: "Absolutely, I can deliver by 2 PM.", sent: true, time: "10:15 AM" },
];

export function MessagesModal() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<ChatFilter>("all");
  const [selectedChat, setSelectedChat] = useState<typeof conversations[0] | null>(null);

  const filteredConversations = useMemo(() => {
    if (filter === "unread") {
      return conversations.filter((c) => c.unread > 0);
    }
    return conversations;
  }, [filter]);

  if (!isAuthenticated) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="flex h-[600px] w-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <header className="flex items-center justify-between bg-black p-6 text-white">
            <div className="flex items-center gap-3">
              {selectedChat && (
                <button 
                  onClick={() => setSelectedChat(null)}
                  className="mr-2 text-zinc-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
              )}
              <h3 className="text-lg font-bold tracking-tight">
                {selectedChat ? selectedChat.name : "Messages"}
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-xl font-semibold transition-colors hover:bg-white/20"
            >
              ×
            </button>
          </header>

          {!selectedChat ? (
            /* Chat Heads (List View) */
            <div className="flex flex-1 flex-col overflow-hidden">
              <div className="flex gap-2 p-4 border-b border-zinc-50">
                <button
                  onClick={() => setFilter("all")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    filter === "all" ? "bg-[#12D16E] text-[#FFD700]" : "bg-zinc-100 text-zinc-400"
                    }`}
                    >
                    All
                    </button>
                    <button 
                    onClick={() => setFilter("unread")}
                    className={`flex-1 rounded-xl py-2.5 text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === "unread" ? "bg-[#12D16E] text-[#FFD700]" : "bg-zinc-100 text-zinc-400"
                    }`}
                    >
                  UNREAD
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className="flex w-full items-center gap-4 rounded-[1.5rem] p-4 text-left transition-colors hover:bg-zinc-50 active:scale-95"
                    >
                      <div className="relative">
                        <img src={chat.avatar} className="h-12 w-12 rounded-full object-cover" />
                        {chat.unread > 0 && (
                          <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full border-2 border-white bg-[#12D16E] text-[10px] font-bold text-[#FFD700] grid place-items-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm font-semibold text-zinc-900">{chat.name}</p>
                          <span className="text-[10px] font-medium text-zinc-400">{chat.time}</span>
                        </div>
                        <p className="truncate text-xs font-medium text-zinc-500">{chat.lastMessage}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-zinc-300">
                    <span className="text-4xl mb-2">💬</span>
                    <p className="text-sm font-semibold">No messages found</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Chat View (Detail View) */
            <div className="flex flex-1 flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
                {mockMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-medium shadow-sm ${
                        msg.sent
                          ? "bg-[#12D16E] text-[#FFD700] rounded-tr-none"
                          : "bg-white text-zinc-900 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                      <p className={`mt-1 text-[8px] font-medium uppercase ${msg.sent ? "text-[#FFD700]/70" : "text-zinc-300"}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-zinc-100 p-4 bg-white">
                <div className="flex items-center gap-2 rounded-2xl bg-zinc-100 p-2 pl-4">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent text-sm font-medium outline-none"
                  />
                  <button className="grid h-10 w-10 place-items-center rounded-xl bg-black text-white transition-transform active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Floating Toggle Button */
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 rounded-full bg-black p-4 text-white shadow-xl transition-all hover:scale-110 active:scale-95"
        >
          <span className="hidden pl-2 text-sm font-semibold group-hover:block animate-in fade-in slide-in-from-right-2">
            Messages
          </span>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#12D16E]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          {conversations.some(c => c.unread > 0) && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full border-2 border-white bg-[#12D16E] text-[10px] font-bold text-[#FFD700] grid place-items-center">
              !
            </span>
          )}
        </button>
      )}
    </div>
  );
}
