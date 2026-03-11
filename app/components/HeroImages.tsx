import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/boat2.jpg", // Phi Phi Islands
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80",
  "/images/boat.jpg", // Thailand Cliffs
];

const HeroBackground = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ y: "5%", opacity: 0, scale: 1.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.5 } }}
          transition={{ 
            duration: 2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
          alt={`Krabi voyage ${index + 1}`}
        />
      </AnimatePresence>
      
      {/* Consistent Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
};

export default HeroBackground;