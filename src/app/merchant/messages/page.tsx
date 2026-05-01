import Link from "next/link";

import { conversations } from "@/lib/web-mock-data";

export default function MerchantMessagesPage() {
  return (
    <main className="mobile-shell px-5 py-6">
      <header className="mb-4">
        <h1 className="screen-title">Messages</h1>
      </header>
      <div className="space-y-3">
        {conversations.map((conversation) => (
          <Link
            key={conversation.id}
            href={`/merchant/messages/${conversation.id}`}
            className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-3"
          >
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-3">
                <p className="truncate text-sm font-black">{conversation.name}</p>
                <p className="text-[10px] font-black text-zinc-400">{conversation.time}</p>
              </div>
              <p className="truncate text-xs font-semibold text-zinc-500">
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread > 0 && (
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#12D16E] text-[10px] font-black text-white">
                {conversation.unread}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
