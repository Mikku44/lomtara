import { useState, useEffect } from "react";
import { Menu, X, Loader2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { NavLink, useNavigation } from "react-router";
import { APP_MENU } from "~/const/app";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // 1. Background Color: Transparent -> Solid White
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  // 2. Text Color: White -> Slate 900
  const textColor = useTransform(
    scrollY,
    [0, 80],
    ["#FFFFFF", "#0f172a"]
  );

  // 3. Logo Filter: Invert (White) -> Original (Dark)
  // Assuming your logo is naturally dark/black
  const logoFilter = useTransform(
    scrollY,
    [0, 80],
    ["brightness(0) invert(1)", "brightness(1) invert(0)"]
  );

  // 4. Border Color for the "Primary" button
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["#FFFFFF", "#0f172a"]
  );

  const paddingY = useTransform(scrollY, [0, 80], ["24px", "16px"]);
  const shadow = useTransform(scrollY, [0, 80], ["none", "0 4px 6px -1px rgb(0 0 0 / 0.1)"]);

  useEffect(() => {
    if (isLoading) setIsOpen(false);
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] z-[70]"
          />
        )}
      </AnimatePresence>

      <motion.nav
        style={{ backgroundColor, paddingTop: paddingY, paddingBottom: paddingY, boxShadow: shadow }}
        className="fixed top-0 w-full z-50 px-8 transition-all duration-300"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo with dynamic filter */}
          <NavLink to="/">
            <motion.img 
              src="/logo.png"
              style={{ filter: logoFilter }}
              className="w-[80px]"
              alt="Lomtara Voyage Logo" 
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {APP_MENU.map((item) => (
              <motion.div key={item.name} style={{ color: textColor }}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => `
                    text-[11px] font-bold uppercase tracking-[0.25em] transition-all
                    ${item.primary
                      ? "border-2 px-6 py-2 hover:bg-slate-900 hover:text-white"
                      : "relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
                    }
                    ${isActive && !item.primary ? "after:w-full" : ""}
                  `}
                  style={item.primary ? { borderColor: borderColor } : {}}
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {isLoading && <Loader2 className="animate-spin" style={{ color: textColor }} size={18} />}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ color: textColor }}
              className="p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Slide-over */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 flex flex-col items-center py-12 gap-8 shadow-xl"
            >
              {APP_MENU.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-900 text-lg uppercase tracking-[0.3em] font-light"
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