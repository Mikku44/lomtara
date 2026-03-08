import type { Route } from "./+types/destination";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Destination | Lomtara Voyage Krabi" },
    { name: "description", content: "Discover amazing destinations with Lomtara Voyage Krabi." },
  ];
}

export default function Destination() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
          alt="Phi Phi Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Destination</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore the breathtaking destinations we visit
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-slate-600">
            Explore the breathtaking destinations we visit on our voyages.
          </p>
        </div>
      </div>
    </div>
  );
}
