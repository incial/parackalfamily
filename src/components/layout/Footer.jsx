import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-black text-white text-center py-6 sm:py-8 shadow-t-2xl relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-zinc-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-white mx-auto mb-4 sm:mb-6"
        ></motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-base sm:text-lg md:text-xl text-zinc-200 tracking-wider leading-relaxed"
        >
          &copy; {new Date().getFullYear()} parackalfamily. Forever in our hearts.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
