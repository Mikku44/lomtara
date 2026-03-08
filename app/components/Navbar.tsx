import { useState, useEffect } from "react";
import { Menu, X, Loader2, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { NavLink, useNavigation, useNavigate } from "react-router";
import { APP_MENU } from "~/const/app";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";

  // Sample cart items - replace with actual cart state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "4 Islands Tour",
      price: 1200,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=200&q=80",
    },
  ]);

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(15, 23, 42, 0.9)"]
  );

  const paddingY = useTransform(scrollY, [0, 100], ["24px", "16px"]);

  useEffect(() => {
    if (isLoading) {
      setIsOpen(false);
      setIsCartOpen(false);
    }
  }, [isLoading]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

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
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-black tracking-[0.2em] text-white">
            LOMTARA
          </NavLink>

          {/* Desktop Menu */}
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
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white/80 hover:text-white transition-colors p-2"
            >
              <ShoppingCart size={20} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile UI */}
          <div className="flex items-center gap-4 lg:hidden">
            {isLoading && <Loader2 className="animate-spin text-white" size={18} />}
            {/* Cart Button Mobile */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-white p-2"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
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

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCart size={64} className="text-gray-300 mb-4" />
                    <p className="text-lg text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Add some tours to get started
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{item.name}</h3>
                          <p className="text-slate-600 text-sm">
                            ฿{item.price.toLocaleString()}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-red-50 text-red-500 rounded transition-colors self-start"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-xl font-bold text-slate-900">
                      ฿{cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate("/checkout");
                    }}
                    className="w-full bg-slate-900 text-white py-4 font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-slate-600 py-2 text-sm hover:text-slate-900 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
