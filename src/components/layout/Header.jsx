import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black text-white py-8 sm:py-12 md:py-16 text-center shadow-2xl relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-4 text-white leading-tight"
        >
          parackalfamily
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl font-light text-zinc-300 tracking-wide leading-relaxed max-w-3xl mx-auto"
        >
          In loving memory, we celebrate a life well lived
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="h-px bg-white mx-auto mt-6 sm:mt-8"
        ></motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
