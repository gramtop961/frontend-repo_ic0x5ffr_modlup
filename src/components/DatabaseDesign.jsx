export default function DatabaseDesign() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">Database & Architecture (Initial Draft)</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Collections</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>
                users: profile, contact, auth_provider, roles, verification_status, preferences, created_at
              </li>
              <li>
                vendors: owner_user_id (ref users), venue_name, location (geojson), capacity, amenities[], media[], rating, created_at
              </li>
              <li>
                services: vendor_id (ref vendors), title, description, pricing { base, currency }, options[], duration, active
              </li>
              <li>
                bookings: user_id (ref users), vendor_id, service_id, schedule { date, start, end }, status, guests, notes, amount, payment_id
              </li>
              <li>
                payments: booking_id, provider (stripe), intent_id, status, amount, currency, receipts[]
              </li>
              <li>
                reviews: booking_id, user_id, rating, comment, photos[], created_at, moderated
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Indexes & Architecture Notes</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>Geo index on vendors.location for nearby search</li>
              <li>Compound index on bookings (user_id, created_at desc)</li>
              <li>Full-text index on vendors.amenities and services.title</li>
              <li>Use presigned URLs for media uploads to S3</li>
              <li>Event-driven updates for availability cache in Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
