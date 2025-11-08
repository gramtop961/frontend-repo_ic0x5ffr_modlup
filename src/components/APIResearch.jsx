import { CreditCard, Box, Layers } from "lucide-react";

export default function APIResearch() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">Third-Party API Selections</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-indigo-700">
              <CreditCard className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Secure Payments</h3>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>
                Stripe: Payment Intents, Checkout, Apple/Google Pay, 3D Secure, webhooks for booking confirmation.
              </li>
              <li>
                Alternatives: Adyen (global, marketplace-ready) or Braintree (PayPal). Start with Stripe for speed.
              </li>
              <li>
                Mobile: use Stripe React Native SDK; Web: Stripe Elements or hosted Checkout.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-indigo-700">
              <Layers className="h-5 w-5" />
              <h3 className="text-lg font-semibold">AR/VR Foundation</h3>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>
                Web: Spline 3D for quick interactive scenes; fallback to model-viewer for basic 3D/AR on mobile.
              </li>
              <li>
                Mobile: Unity or React Native + ViroReact (ARCore/ARKit) for venue previews; start with lightweight Spline embed.
              </li>
              <li>
                Asset pipeline: GLTF/GLB models, optimized textures, CDN delivery.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-3 flex items-center gap-2 text-indigo-700">
              <Box className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Why this set?</h3>
            </div>
            <p className="text-sm text-gray-700">
              This combination balances speed-to-market and scalability. Payments are handled via Stripe’s compliant flows, while AR/VR starts with web-friendly embeds and can graduate to native AR as the product matures. All services integrate cleanly with a Python FastAPI backend and a MongoDB data layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
