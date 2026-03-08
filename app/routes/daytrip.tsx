import type { Route } from "./+types/daytrip";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Day Trip | Lomtara Voyage Krabi" },
    { name: "description", content: "Explore our exciting day trip packages around Krabi's beautiful islands and hidden gems." },
  ];
}

export default function DayTrip() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80"
          alt="Krabi longtail boats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Day Trip</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore Krabi's hidden gems on our curated day trips
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-slate-600">
            Discover our curated day trip experiences around Krabi's stunning islands.
          </p>
        </div>
      </div>
    </div>
  );
}
