import type { Route } from "./+types/daytrip";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Exclusive Day Trips | Lomtara Voyage Krabi" },
    { name: "description", content: "Book a private luxury longtail boat to Phi Phi, Hong Islands, or the 4 Islands sunset experience." },
  ];
}

const TRIPS = [
  {
    id: "phi-phi",
    title: "Phi Phi Island Luxury",
    tagline: "The Ultimate Andaman Icon",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
    price: "฿12,500",
    duration: "8 Hours",
    capacity: "Up to 6 People",
    location: "Maya Bay, Pileh Lagoon, Bamboo Island",
  },
  {
    id: "hong-islands",
    title: "Hong Island & Sunset",
    tagline: "Crystalline Waters & Hidden Lagoons",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1200",
    price: "฿8,500",
    duration: "7 Hours",
    capacity: "Up to 8 People",
    location: "Hong Lagoon, Lading Island, Pakbia",
  },
  {
    id: "four-islands",
    title: "Exclusive 4 Island Trip",
    tagline: "Krabi's Classic Sandbars",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200",
    price: "฿6,500",
    duration: "6 Hours",
    capacity: "Up to 10 People",
    location: "Poda, Chicken Island, Tup & Mor",
  },
];

export default function DayTrip() {
  return (
    <div className="min-h-screen bg-[#FBFBF9]">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073"
          alt="Krabi longtail boats"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] uppercase tracking-[0.4em] text-sm font-bold mb-4"
          >
            Private Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold text-white tracking-tight"
          >
            Our <span className="italic font-light text-white/90">Voyages</span>
          </motion.h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light text-slate-900 mb-6 tracking-tight">
          Beyond the shore lies a <span className="font-semibold text-[#C5A059]">private paradise</span> waiting for you.
        </h2>
        <p className="text-slate-500 leading-relaxed font-light">
          Forget crowded ferries. Our private luxury longtail boats offer an intimate escape to Krabi's most iconic destinations. From gourmet picnics on secret beaches to sunset cruises, every voyage is tailored to your rhythm.
        </p>
      </div>

      {/* Trips Grid */}
      <div className="pb-32 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {TRIPS.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 shadow-lg">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 leading-none mb-1">Starting At</p>
                  <p className="text-sm font-bold text-slate-900 leading-none">{trip.price}</p>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                  {trip.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  {trip.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-y-3 pt-2">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-light">
                    <Clock size={14} className="text-[#C5A059]" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-light">
                    <Users size={14} className="text-[#C5A059]" />
                    {trip.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-light col-span-2">
                    <MapPin size={14} className="text-[#C5A059]" />
                    {trip.location}
                  </div>
                </div>

                <NavLink 
                  to={`/contact?trip=${trip.id}`}
                  className="inline-flex items-center gap-3 pt-6 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-900 group-hover:text-[#C5A059] transition-colors"
                >
                  Reserve Voyage <ChevronRight size={14} />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inclusion Banner */}
      <div className="bg-slate-900 py-20 px-8 text-center text-white">
        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-8">Every Trip Includes</h4>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Professional Captain", "Snorkeling Gear", "Fresh Fruit & Water", "Accident Insurance"].map((item) => (
            <div key={item} className="space-y-2">
              <div className="h-[1px] w-12 bg-[#C5A059] mx-auto mb-4" />
              <p className="text-xs uppercase tracking-widest font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}