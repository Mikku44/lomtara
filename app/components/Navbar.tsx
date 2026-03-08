import { useState, useEffect } from "react";
import { Menu, X, Loader2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { NavLink, useNavigation } from "react-router"; 
import { APP_MENU } from "~/const/app";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { scrollY } = useScroll();
  
  // Transitions from transparent to a dark/glass effect to match the premium feel
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(15, 23, 42, 0.9)"] // Slate-900 with opacity
  );

  const paddingY = useTransform(scrollY, [0, 100], ["24px", "16px"]);

  useEffect(() => {
    if (isLoading) setIsOpen(false);
  }, [isLoading]);

  return (
    <>
      {/* Loading Progress Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-1 bg-white z-[70]"
          />
        )}
      </AnimatePresence>

      <motion.nav
        style={{ backgroundColor, paddingTop: paddingY, paddingBottom: paddingY }}
        className="fixed top-0 w-full z-50 px-8 transition-all duration-300"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Logo - Minimal White */}
          <NavLink to="/" className="text-2xl font-black tracking-[0.2em] text-white">
            LOMTARA
          </NavLink>

          {/* Desktop Menu - All Caps, Spaced out like the image */}
          <div className="hidden lg:flex items-center gap-10">
            {APP_MENU.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => `
                  text-[11px] font-bold uppercase tracking-[0.25em] transition-all
                  ${item.primary 
                    ? "border-2 border-white px-6 py-2 hover:bg-white hover:text-black" 
                    : "text-white/80 hover:text-white relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
                  }
                  ${isActive && !item.primary ? "text-white after:w-full" : "text-white"}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile UI */}
          <div className="flex items-center gap-4 lg:hidden">
            {isLoading && <Loader2 className="animate-spin text-white" size={18} />}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-over Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="lg:hidden absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 z-[-1]"
            >
              {APP_MENU.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl uppercase tracking-[0.3em] font-light"
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}