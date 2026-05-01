const notifications = [
  {
    id: "1",
    title: "Order Delivered!",
    body: "Your order of Oron Crayfish has been delivered to Angola Hall.",
    time: "2 mins ago",
    type: "order",
    unread: true,
  },
  {
    id: "2",
    title: "New Message from Mama T",
    body: '"Yo, your fish is ready for pickup at the gate."',
    time: "1 hour ago",
    type: "chat",
    unread: true,
  },
  {
    id: "3",
    title: "Price Drop Alert!",
    body: "Jumbo Prawns are now 20% cheaper at Moremi Hall plugs.",
    time: "5 hours ago",
    type: "promo",
    unread: false,
  },
];

const iconByType: Record<string, string> = {
  order: "📦",
  chat: "💬",
  promo: "🔥",
};

export default function NotificationsPage() {
  return (
    <main className="mobile-shell px-5 py-5">
      <header className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-4">
        <p className="text-2xl font-bold">
          NOTIFICATIONS<span className="text-[#12D16E]">.</span>
        </p>
        <button type="button" className="text-xs font-semibold uppercase text-zinc-400">
          Clear
        </button>
      </header>

      <div className="space-y-3">
        {notifications.map((item) => (
          <article
            key={item.id}
            className={`relative flex gap-3 rounded-3xl border p-4 ${
              item.unread ? "border-transparent bg-[#F7F9FC]" : "border-zinc-100 bg-white"
            }`}
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl">
              {iconByType[item.type] ?? "🔔"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-start justify-between gap-3">
                <p className={`text-sm font-semibold ${item.unread ? "text-black" : "text-zinc-700"}`}>
                  {item.title}
                </p>
                <p className="text-[10px] font-medium text-zinc-400">{item.time}</p>
              </div>
              <p className="text-xs font-medium leading-5 text-zinc-500">{item.body}</p>
            </div>
            {item.unread && <span className="mt-2 h-2 w-2 rounded-full bg-[#12D16E]" />}
          </article>
        ))}
      </div>
    </main>
  );
}
