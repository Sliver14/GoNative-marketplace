"use client";

import { useMemo, useState } from "react";

import { conversations, orders } from "@/lib/web-mock-data";

type MerchantMessagePageProps = {
  params: {
    id: string;
  };
};

export default function MerchantMessagePage({ params }: MerchantMessagePageProps) {
  const convo = useMemo(
    () => conversations.find((item) => item.id === params.id) ?? conversations[0],
    [params.id]
  );
  const order = orders[0];
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "them",
      text: "Hello, is the catch still available?",
      time: "09:45 AM",
    },
    {
      id: "2",
      sender: "me",
      text: "Yes, just got it in this morning. Fresh vibes only!",
      time: "09:50 AM",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((value) => [
      ...value,
      {
        id: `${Date.now()}`,
        sender: "me",
        text: input.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
  };

  return (
    <main className="mobile-shell flex flex-col">
      <header className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-zinc-100 text-zinc-400">
          👤
        </div>
        <div className="flex-1">
          <p className="text-sm font-black">Customer #{convo.id}</p>
          <p className="text-[10px] font-black uppercase text-[#12D16E]">Online</p>
        </div>
        <button type="button" className="text-xl">
          📞
        </button>
      </header>

      <div className="mx-4 mt-3 flex items-center gap-3 rounded-2xl bg-black p-3 text-white">
        <img src={order.product.image} alt={order.product.name} className="h-11 w-11 rounded-xl" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-black">{order.product.name}</p>
          <p className="text-[10px] font-black text-[#12D16E]">₦{order.product.price}</p>
        </div>
        <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-black">
          {order.status.toUpperCase()}
        </span>
      </div>

      <section className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <article
            key={message.id}
            className={`max-w-[85%] rounded-3xl p-3 ${
              message.sender === "me"
                ? "ml-auto rounded-br-sm bg-[#12D16E] text-white"
                : "rounded-bl-sm bg-zinc-100 text-black"
            }`}
          >
            <p className="text-sm font-semibold">{message.text}</p>
            <p className="mt-1 text-right text-[10px] font-black opacity-60">{message.time}</p>
          </article>
        ))}
      </section>

      <footer className="flex items-center gap-2 border-t border-zinc-100 p-3">
        <button type="button" className="grid h-11 w-11 place-items-center text-2xl text-zinc-500">
          +
        </button>
        <input
          className="flex-1 rounded-2xl bg-zinc-100 px-4 py-3 text-sm font-semibold outline-none"
          placeholder="Type your reply..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type="button"
          onClick={sendMessage}
          disabled={!input.trim()}
          className="grid h-11 w-11 place-items-center rounded-full bg-black text-white disabled:bg-zinc-300"
        >
          ➤
        </button>
      </footer>
    </main>
  );
}
