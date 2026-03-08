import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lomtara Voyage Krabi | ลมธาราทัวร์" },
    { name: "description", content: "Experience the ultimate sea escape with Lomtara Voyage Krabi. Discover premium boat tours, hidden lagoons, and the beauty of the Andaman with ลมธาราทัวร์." },
    { name: "keywords", content: "Lomtara Voyage, Krabi boat tour, ลมธารา, ลมธาราทัวร์, Krabi island hopping, private boat Krabi" },
    { property: "og:title", content: "Lomtara Voyage Krabi | ลมธาราทัวร์" },
    { property: "og:description", content: "Join us for an unforgettable journey across Krabi's crystal waters." },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <main className="min-h-[120vh]">

    <div className="h-screen w-full relative">
      <img
        src="/images/boat6.jpg"
        className="w-full object-cover h-full brightness-75"
        alt="Krabi longtail boats"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-wider">
          LOMTARA VOYAGE
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
          Experience the ultimate sea escape in Krabi
        </p>
        <div className="border-3 mt-5 text-white font-bold
         hover:bg-white duration-150 hover:text-black/80 border-white px-5 py-3">
          COMMING SOON
        </div>
      </div>
    </div>
  </main>
}
