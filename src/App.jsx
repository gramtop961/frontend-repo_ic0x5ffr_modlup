import TechStack from "./components/TechStack";
import DatabaseDesign from "./components/DatabaseDesign";
import WireframeFlow from "./components/WireframeFlow";
import APIResearch from "./components/APIResearch";
import { Rocket } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-blue-100" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700">
                <Rocket className="h-3.5 w-3.5" />
                Discovery • Booking • Payments • AR/VR
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Venue Booking Platform Blueprint
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-gray-700">
                A polished plan covering the tech stack, database schema, user journey wireframes, and third‑party APIs for payments and AR/VR.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <TechStack />
        <DatabaseDesign />
        <WireframeFlow />
        <APIResearch />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 lg:px-8">
          Built with React and Tailwind in a live sandbox. Ready to evolve into a full product.
        </div>
      </footer>
    </div>
  );
}

export default App;
