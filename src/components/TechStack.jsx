import { Rocket, Server, Database as DbIcon, Smartphone, ShieldCheck } from "lucide-react";

export default function TechStack() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-600">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recommended Tech Stack</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-indigo-600">
              <Server className="h-5 w-5" />
              <h3 className="font-semibold">Web App</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>React + Vite</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion (interactions)</li>
              <li>Lucide Icons</li>
              <li>Deployed on Vercel</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-indigo-600">
              <Smartphone className="h-5 w-5" />
              <h3 className="font-semibold">Mobile App</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>React Native + Expo</li>
              <li>Expo Router</li>
              <li>Expo Payments (Stripe)</li>
              <li>OTA Updates via Expo EAS</li>
              <li>Store: App Store + Google Play</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-indigo-600">
              <DbIcon className="h-5 w-5" />
              <h3 className="font-semibold">Backend & Data</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>FastAPI (Python)</li>
              <li>MongoDB Atlas (primary data)</li>
              <li>Redis (caching, rate limits)</li>
              <li>WebSockets (realtime status)</li>
              <li>AWS S3 (media uploads)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 text-indigo-600">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-semibold">Security & DevOps</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Auth: JWT + OAuth (Clerk/Auth0 feasible)</li>
              <li>Payments: Stripe</li>
              <li>CI/CD: GitHub Actions</li>
              <li>Observability: Sentry + Logtail</li>
              <li>Infra: AWS (ECS/Lambda) or Railway</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
