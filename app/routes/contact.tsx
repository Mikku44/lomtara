import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Lomtara Voyage Krabi" },
    { name: "description", content: "Get in touch with Lomtara Voyage Krabi for bookings and inquiries." },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
          alt="Tropical beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We'd love to hear from you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-lg text-slate-600">
            Reach out to us for bookings, inquiries, or any questions about our tours.
          </p>
        </div>
      </div>
    </div>
  );
}
