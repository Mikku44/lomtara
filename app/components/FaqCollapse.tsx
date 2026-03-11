import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is included in the private charter?",
    answer: "Every voyage includes a professional captain and crew, premium snorkeling equipment, life jackets, seasonal fresh fruits, cold drinking water, and accident insurance. Our 'Luxury' packages also include a BOSE sound system, SUP board, and gourmet afternoon tea."
  },
  {
    question: "Where is the meeting point for departures?",
    answer: "Most voyages depart from the Nopparat Thara Pier or directly from the beach in front of your resort if you are staying in Ao Nang. We also provide private van transfers from Krabi Town, Klong Muang, and Tubkaek for a small additional fee."
  },
  {
    question: "Can we customize our island destination?",
    answer: "Absolutely. One of the benefits of a private voyage is flexibility. While we have curated routes (Phi Phi, Hong, 4 Islands), you can discuss specific stops with your captain on the day, depending on tide and weather conditions."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We offer a full refund for cancellations made at least 48 hours before departure. In the event of unsafe weather conditions, we will first attempt to reschedule your trip; if that is not possible, a full refund will be issued."
  },
  {
    question: "Do you provide lunch on the boat?",
    answer: "Standard trips include light refreshments and fruit. However, we offer premium 'Gourmet Picnic' add-ons featuring local Thai delicacies or seafood sets. You are also welcome to bring your own food and drinks on board."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#FBFBFB]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm block mb-4">
            Common Inquiries
          </span>
          <h2 className="text-4xl font-light tracking-tight text-slate-900">
            F.A.Q<span className="font-semibold italic">s</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index}
                className="border-b border-slate-200 last:border-0 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full py-6 px-8 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
                >
                  <span className={`text-sm font-bold uppercase tracking-widest ${isOpen ? 'text-[#C5A059]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className="text-slate-400">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-slate-500 font-light leading-relaxed text-sm max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support CTA
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-6">Still have questions?</p>
          <a 
            href="https://wa.me/yournumber" 
            target="_blank"
            className="inline-flex items-center gap-2 text-slate-900 font-bold text-[11px] uppercase tracking-[0.2em] border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
          >
            Contact Concierge via WhatsApp
          </a>
        </div> */}
      </div>
    </section>
  );
}