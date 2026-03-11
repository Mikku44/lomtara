import type { Route } from "./+types/destination";
import { motion } from "framer-motion";
import { Anchor, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Destinations | Lomtara Voyage Krabi" },
    { name: "description", content: "Explore Phi Phi, Hong Islands, and the 4 Islands on a private luxury longtail boat." },
  ];
}

const DESTINATIONS = [
  {
    title: "Phi Phi Islands",
    subtitle: "The Emerald of Andaman",
    description: "Home to the world-famous Maya Bay and Pileh Lagoon. Witness towering limestone cliffs rising from turquoise waters and explore vibrant coral reefs teeming with marine life.",
    // Image: High-angle shot of Pileh Lagoon's turquoise water
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&q=80&w=1200",
    features: ["Maya Bay", "Pileh Lagoon", "Bamboo Island", "Monkey Beach"]
  },
  {
    title: "Hong Islands",
    subtitle: "The Serene Escape",
    description: "Famous for its 'room' (Hong) lagoon accessible only through a narrow cliff passage. Perfect for those seeking tranquility, crystal clear snorkeling, and 360-degree viewpoints.",
    // Image: Aerial view of Hong Island lagoon
    image: "https://images.unsplash.com/photo-1672933278668-5be5957a8681?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Hong Lagoon", "Lading Island", "Pakbia Island", "360° Viewpoint"]
  },
  {
    title: "4 Islands Group",
    subtitle: "The Classic Sandbars",
    description: "Located just offshore from Ao Nang, this group features the famous 'Thale Waek' (Separated Sea) where a sandbar emerges at low tide to connect three islands.",
    // Image: Poda Island's iconic limestone rock
    image: "https://images.unsplash.com/photo-1598255036907-48dc65e2f339?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Poda Island", "Chicken Island", "Tup Island", "Phra Nang Cave","Railay Island","Lao Landing Island","Hong Lagoon","Hong Island"]
  }
];

export default function Destination() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1538475711279-0373b6bc754e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Longtail Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/30" />
        
        <div className="relative z-10 text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] uppercase tracking-[0.5em] text-xs font-bold mb-4 block"
          >
            Curated Voyages
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter"
          >
            Destinations
          </motion.h1>
        </div>
      </div>

      {/* Narrative Grid */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        {DESTINATIONS.map((dest, index) => (
          <div 
            key={dest.title}
            className={`flex flex-col lg:flex-row items-center gap-16 mb-40 last:mb-0 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-sm shadow-2xl relative group"
            >
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 space-y-8"
            >
              <div className="space-y-2">
                <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.4em]">
                  {dest.subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                  {dest.title}
                </h2>
              </div>
              
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                {dest.description}
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-y border-slate-100 py-8">
                {dest.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-700 font-semibold">
                    <Anchor size={14} className="text-[#C5A059]" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <NavLink 
                  to="/contact"
                  className="group inline-flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-950"
                >
                  View Voyages
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-[1px] bg-slate-950 group-hover:w-20 transition-all duration-500" />
                    <ArrowRight size={18} className="absolute -right-2 translate-x-0 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </NavLink>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-950 py-32 px-8 text-center overflow-hidden relative">
        <div className="max-w-[800px] mx-auto relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-light text-white mb-12 leading-tight"
          >
            The Andaman is calling. <br />
            <span className="font-semibold italic text-[#C5A059]">Your private escape awaits.</span>
          </motion.h3>
          <NavLink 
            to="/reservation"
            className="inline-block bg-[#C5A059] text-white px-14 py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all duration-500 rounded-sm shadow-2xl shadow-amber-900/20"
          >
            Secure Your Dates
          </NavLink>
        </div>
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none uppercase tracking-tighter">
          Lomtara
        </div>
      </section>
    </div>
  );
}