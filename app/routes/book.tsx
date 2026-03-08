import type { Route } from "./+types/book";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book Now | Lomtara Voyage Krabi" },
    { name: "description", content: "Book your unforgettable voyage with Lomtara Voyage Krabi." },
  ];
}

export default function Book() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Boat on turquoise water"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Book Now</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Reserve your unforgettable journey
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-slate-600">
            Reserve your spot for an unforgettable journey across Krabi's crystal waters.
          </p>
        </div>
      </div>
    </div>
  );
}
