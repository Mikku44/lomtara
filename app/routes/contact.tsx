import type { Route } from "./+types/contact";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import { ContactForm } from "~/components/ContactForm";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Lomtara Voyage Krabi" },
    { name: "description", content: "Reserve your private luxury longtail boat experience in Krabi." },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-light">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Boat in Krabi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <span className="text-[#C5A059] font-medium tracking-[0.4em] uppercase text-sm mb-4">
            Reservation
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight">
            Contact <span className="italic font-light">Lomtara</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Booking Steps Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2">The Process</h2>
            <p className="text-2xl font-semibold text-slate-800">Your Journey Starts Here</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Inquiry", desc: "Submit your preferred date and experience through our form." },
              { step: "02", title: "Confirmation", desc: "Our concierge will contact you via WhatsApp or Email within 12 hours." },
              { step: "03", title: "Voyage", desc: "Receive your booking voucher and prepare for your luxury Andaman escape." },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white border border-slate-100 text-center hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[10px] font-bold px-4 py-1 tracking-widest uppercase">Step {item.step}</span>
                <h3 className="text-lg font-semibold mt-4 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="text-2xl text-[#C5A059] mt-1">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs mb-1">Location</h4>
                  <p className="text-slate-600">Ao Nang, Krabi, Thailand</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-2xl text-[#C5A059] mt-1">
                  <HiOutlinePhone />
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs mb-1">WhatsApp / Call</h4>
                  <p className="text-slate-600">+66 (0) XX-XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-2xl text-[#C5A059] mt-1">
                  <HiOutlineMail />
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs mb-1">Email</h4>
                  <p className="text-slate-600">hello@lomtaravoyage.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="font-semibold uppercase tracking-wider text-[10px] mb-6 text-slate-400">Social Presence</h4>
              <div className="flex gap-8">
                <a href="#" className="text-xl hover:text-[#C5A059] transition-colors"><SiInstagram /></a>
                <a href="#" className="text-xl hover:text-[#C5A059] transition-colors"><SiFacebook /></a>
                <a href="#" className="text-xl hover:text-[#C5A059] transition-colors"><SiTiktok /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Rendered Component */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}