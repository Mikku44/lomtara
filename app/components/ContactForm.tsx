import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { COUNTRIES } from "~/const/app";

// Import the default styles
import "react-day-picker/dist/style.css";

export function ContactForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-white p-10 md:p-16 shadow-2xl shadow-slate-200/60 rounded-sm">
      <form className="space-y-8">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Full Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Email Address <span className="text-red-500">*</span></label>
            <input type="email" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent" placeholder="john@example.com" required />
          </div>
        </div>

        {/* Row 2: WhatsApp & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Contact / WhatsApp <span className="text-red-500">*</span></label>
            <input type="tel" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent" placeholder="+1 234 567 890" required />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Country <span className="text-red-500">*</span></label>
            <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent cursor-pointer">
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Full Display Calendar Section */}
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Select Preferred Date <span className="text-red-500">*</span></label>
          <div className="flex justify-center border-y border-slate-100 py-4 bg-slate-50/50">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={{ before: new Date() }}
              className="text-slate-800"
              modifiersStyles={{
                selected: { 
                  forcedColorAdjust: "none",
                  // backgroundColor: '#C5A059', 
                  color: '#C5A059',
                  borderRadius: '0px' // Keeps the sharp luxury look
                },
                today: { 
                    fontWeight: 'bold',
                    color: '#C5A059'
                }
              }}
            />
          </div>
        </div>

        {/* Row 3: Experience */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Experience</label>
          <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent cursor-pointer">
            <option>Phi Phi Island Luxury</option>
            <option>Hong Island & 4 Island Sunset</option>
            <option>Exclusive 4 Island Trip</option>
          </select>
        </div>

        {/* Hotel Field */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Hotel Name <span className="text-red-500">*</span></label>
          <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent" placeholder="Staying in Ao Nang, Klong Muang, etc." required />
        </div>

        {/* Passenger Counts */}
        <div className="space-y-4">
          <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block">Passengers <span className="text-red-500">*</span></label>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-[9px] uppercase text-slate-400">Adult</span>
              <input type="number" min="1" defaultValue="1" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#C5A059] bg-transparent text-sm" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase text-slate-400">Child (3-11)</span>
              <input type="number" min="0" defaultValue="0" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#C5A059] bg-transparent text-sm" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] uppercase text-slate-400">Baby (0-3)</span>
              <input type="number" min="0" defaultValue="0" className="w-full border-b border-slate-200 py-2 focus:outline-none focus:border-[#C5A059] bg-transparent text-sm" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Message</label>
          <textarea rows={2} className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-[#C5A059] transition-colors bg-transparent resize-none" placeholder="Special requests..." />
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-5 text-xs 
        flex items-center justify-center font-bold uppercase tracking-[0.2em] gap-5
        hover:bg-[#C5A059] transition-all duration-500 mt-4">
          Next Step <ChevronRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}