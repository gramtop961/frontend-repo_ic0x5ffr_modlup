import { Search, Eye, CalendarCheck, CreditCard } from "lucide-react";

export default function WireframeFlow() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      desc:
        "Find venues by city, date, capacity, and amenities. Instant results with map + list view.",
    },
    {
      icon: Eye,
      title: "View Venue",
      desc:
        "Browse photos and a 3D/AR preview. Toggle a placeholder scene for now to simulate AR/VR.",
    },
    {
      icon: CalendarCheck,
      title: "Book",
      desc:
        "Choose a service option and time slot. Confirm guest count and special requests.",
    },
    {
      icon: CreditCard,
      title: "Pay",
      desc:
        "Secure checkout via Stripe with Apple Pay / Google Pay support.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">Wireframe: Core User Journey</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-2 text-xs font-medium text-gray-500">Search</div>
                <div className="h-32 rounded-lg bg-gradient-to-br from-indigo-100 via-white to-blue-50" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-2 text-xs font-medium text-gray-500">Venue Detail + AR</div>
                <div className="h-32 rounded-lg bg-gradient-to-br from-fuchsia-100 via-white to-violet-50" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-2 text-xs font-medium text-gray-500">Booking</div>
                <div className="h-32 rounded-lg bg-gradient-to-br from-amber-100 via-white to-orange-50" />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-2 text-xs font-medium text-gray-500">Payment</div>
                <div className="h-32 rounded-lg bg-gradient-to-br from-emerald-100 via-white to-teal-50" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{i + 1}. {s.title}</div>
                    <p className="text-sm text-gray-700">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
