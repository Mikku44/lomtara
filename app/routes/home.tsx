import HeroBackground from "~/components/HeroImages";
import type { Route } from "./+types/home";
import { VERTICAL_IMAGES } from "~/const/app";
import FAQSection from "~/components/FaqCollapse";


export function meta({ }: Route.MetaArgs) {
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

    {/* Hero Section - Minimal Luxury */}
    <div className="h-screen w-full relative bg-white overflow-hidden">
      {/* Background Image with softer overlay */}
      {/* <img
        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
        className="w-full object-cover h-full brightness-[0.85] contrast-[1.05]"
        alt="Krabi longtail boats"
      /> */}

      <HeroBackground />

      {/* Soft gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <span className="text-white/90 text-sm tracking-[0.4em] uppercase mb-4 animate-fade-in">
          Premium Sea Escape
        </span>

        {/* <h1 className="text-5xl md:text-8xl font-extralight text-white mb-8 tracking-tighter leading-none">
          LOMTARA <span className="font-semibold italic">VOYAGE</span>
        </h1> */}

        <img
          src="/logo.png"
          className="w-[520px] brightness-0 invert"
          alt="Lomtara Voyage Logo"
        />

        {/* <div className="w-12 h-[1px] bg-white/60 mb-8" /> */}

        <p className="text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed tracking-wide mb-10">
          Discover the hidden gems of the Andaman Sea with Krabi's most refined private longtail boat experience.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a href="#experiences" className="bg-white text-slate-900 px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-white transition-all duration-500 shadow-xl">
            Explore Trips
          </a>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex animate-bounce animate flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-white/40 text-[9px] tracking-[0.2em]  uppercase">Scroll</span>
      </div>
    </div>



    {/* Experience Section - Minimal & Modern Style */}
    <section id="experiences" className="py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm block mb-4">
            Our Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Exclusive <span className="font-semibold italic">Longtail</span> Voyages
          </h2>
        </div>

        <div className="space-y-32">

          {/* 1. Phi Phi Island Luxury Voyage (New) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-semibold mb-6">Phi Phi Island Luxury</h3>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                The crown jewel of the Andaman. A premium full-day voyage exploring Maya Bay, Phi Leh Lagoon, and the crystal waters of Bamboo Island.
              </p>
              <ul className="text-xs uppercase tracking-widest text-slate-400 mb-8 grid grid-cols-2 gap-2">
                <li>• Maya Bay</li>
                <li>• Phi Leh Lagoon</li>
                <li>• Viking Cave</li>
                <li>• Bamboo Island</li>
              </ul>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-2xl font-light">THB 18,500</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Full Day (08:30 – 18:00)</span>
              </div>
              <button className="bg-slate-900 text-white px-10 py-4 text-sm font-medium tracking-widest hover:bg-[#C5A059] transition-all duration-300 uppercase">
                Book This Experience
              </button>
            </div>
            <div className="order-1 flex items-end justify-end md:order-2 bg-slate-100 aspect-[4/3] overflow-hidden">
              <img
                src="/images/boat7.jpg"
                alt="Phi Phi Island Maya Bay"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 2. Hong Island & 4 Island Sunset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 aspect-[4/3] overflow-hidden">
              <img
                src="/images/boat.jpg"
                alt="Hong Island Lagoon"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pl-0 md:pl-12">
              <h3 className="text-3xl font-semibold mb-6">Hong Island & 4 Island</h3>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                A comprehensive journey from the emerald lagoons of Hong to the famous sandbars. Includes a spectacular sunset viewing from the boat.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-2xl font-light">THB 15,900</span>
                <span className="text-xs uppercase tracking-widest text-slate-400">Full Day Sunset</span>
              </div>
              <button className="border border-slate-900 px-10 py-4 text-sm font-medium tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase">
                Book This Experience
              </button>
            </div>
          </div>

          {/* 3. Exclusive 4 Island (Half & Full Day) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-semibold mb-6">Exclusive 4 Island</h3>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-md">
                The classic Krabi experience. Visit Railay Beach, Poda Island, and the Chicken Island sandbar. Available for both quick getaways and full-day sunset voyages.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-xl font-light">THB 7,900</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Half Day (Sunrise/Sunset)</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-xl font-light">THB 12,900</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Full Day Sunset (09:30 – 18:30)</span>
                </div>
              </div>
              <button className="border border-slate-900 px-10 py-4 text-sm font-medium tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase">
                Book This Experience
              </button>
            </div>
            <div className="order-1 md:order-2 bg-slate-100 aspect-[4/3] overflow-hidden">
              <img
                src="/images/boat2.jpg"
                alt="4 Island Krabi"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Minimal Feature List */}
        <div className="mt-40 pt-20 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Premium Audio", val: "BOSE Sound" },
              { label: "Equipment", val: "SUP Board & Snorkel" },
              { label: "Relaxation", val: "Afternoon Tea" },
              { label: "Service", val: "Private Pick-up" }
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">{item.label}</p>
                <p className="font-medium text-slate-800">{item.val}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>


    {/* section */}


    {/* Inclusions Section - Elegant Grid */}
    <section className="py-24 bg-[#FAFAFA] text-slate-900 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm block mb-4">
            The Experience
          </span>
          <h2 className="text-4xl font-light tracking-tight">
            Tailored for <span className="font-semibold italic">Perfection</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto font-light">
            Every voyage includes premium amenities designed to make your journey across the Andaman effortless and refined.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {[
            { title: "Personal Assistance", desc: "Dedicated staff for your needs" },
            { title: "BOSE Audio", desc: "Premium Bluetooth sound system" },
            { title: "Gourmet Sets", desc: "Curated food & afternoon tea*" },
            { title: "Island Gear", desc: "Mask, snorkel & SUP board" },
            { title: "Refreshments", desc: "Sparkling water, juice & coconut" },
            { title: "Wellness", desc: "Refreshing towels & beach mats" },
            { title: "Connectivity", desc: "Power banks available on board" },
            { title: "Safety First", desc: "Insurance & premium life jackets" },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="w-8 h-[1px] bg-[#C5A059] mb-4 group-hover:w-12 transition-all duration-500" />
              <h4 className="text-sm font-bold tracking-widest uppercase mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Optional Add-ons Callout */}
        <div className="mt-24 p-12 border border-slate-200 bg-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-xl font-light mb-2">Enhance Your Journey</h4>
            <p className="text-sm text-slate-500 font-light italic">Professional guides and Krabi Town transfers available upon request.</p>
          </div>
          <div className="flex gap-8 text-right">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Private Guide</p>
              <p className="text-sm font-medium">800 THB (Half-Day)</p>
              <p className="text-sm font-medium">1,500 THB (Full-Day)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">City Transfer</p>
              <p className="text-sm font-medium">600 THB</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* packages */}

    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm block mb-4">
          Our Trip Packages
        </span>
        <h2 className="text-4xl font-light tracking-tight">
          Voyage <span className="font-semibold italic">Snapshots</span>
        </h2>
      </div>

      <div className=" flex items-center justify-center md:max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-3">{VERTICAL_IMAGES.map(({url,title}) =><img src={url} alt={title} />)}</div>
      </div>

      {/* Draggable/Scrollable Container */}
    
    </section>

    <FAQSection />
  </main>
}
