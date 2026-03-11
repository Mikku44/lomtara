import { NavLink } from "react-router";
import { SiInstagram, SiFacebook, SiTiktok, SiWhatsapp } from "react-icons/si";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { APP_MENU } from "~/const/app";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <img 
              src="/logo.png" 
              className="w-[100px] brightness-0 invert" 
              alt="Lomtara Voyage Logo" 
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              Crafting bespoke private luxury longtail boat experiences across the crystalline waters of Krabi since 2020.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><SiInstagram size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><SiFacebook size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><SiTiktok size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><SiWhatsapp size={18} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">Exploration</h4>
            <ul className="space-y-4">
              {APP_MENU.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.href} 
                    className="text-white/60 hover:text-white text-sm transition-colors font-light"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">Concierge</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-[#C5A059] mt-1" size={18} />
                <span className="text-white/60 text-sm font-light">
                  Ao Nang Beach, <br /> Krabi, Thailand 81180
                </span>
              </li>
              <li className="flex items-center gap-4">
                <HiOutlineMail className="text-[#C5A059]" size={18} />
                <a href="mailto:hello@lomtaravoyage.com" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  hello@lomtaravoyage.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">The Voyage List</h4>
            <p className="text-white/50 text-xs mb-6 font-light leading-relaxed">
              Subscribe to receive curated Andaman travel guides and exclusive seasonal offers.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-2 text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-bold text-[#C5A059] hover:text-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.1em]">
            © {currentYear} Lomtara Voyage Krabi. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-[0.1em] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-[0.1em] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}