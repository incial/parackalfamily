import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart } from "lucide-react";

const timelineData = [
  {
    year: "1950",
    title: "Born into Love",
    description: "Born into a family that would shape his kind and generous heart.",
    side: "left"
  },
  {
    year: "1975",
    title: "Marriage & New Beginnings",
    description: "Found his soulmate and began building a beautiful family together.",
    side: "right"
  },
  {
    year: "1980-2000",
    title: "Raising a Family",
    description: "Devoted father who taught by example the values of love, respect, and compassion.",
    side: "left"
  },
  {
    year: "2000-2020",
    title: "Grandfather's Joy",
    description: "Became the beloved grandfather who filled every room with laughter and stories.",
    side: "right"
  },
  {
    year: "2024",
    title: "Eternal Legacy",
    description: "Though he is no longer with us, his love and wisdom continue to guide our family.",
    side: "left"
  }
];

const LifeTimeline = () => {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-wider leading-tight">
            A Life Well Lived
          </h2>
          <div className="w-16 sm:w-24 h-px bg-white mx-auto mb-4 sm:mb-6"></div>
          <p className="font-sans text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed px-2">
            Journey through the milestones of a life filled with love, dedication, and countless precious moments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px bg-zinc-600 h-full"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  // On mobile, all items align left. On desktop, alternate sides.
                  'md:' + (item.side === 'left' ? 'justify-start' : 'justify-end')
                } justify-center md:justify-start`}
              >
                <div className={`w-full md:w-5/12 ${
                  // On mobile, center content. On desktop, position based on side.
                  'text-center md:text-left md:' + (item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left')
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto md:max-w-none md:mx-0"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${
                      'justify-center md:justify-start md:' + (item.side === 'left' ? 'flex-row-reverse' : 'flex-row')
                    }`}>
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                      <Badge variant="outline" className="bg-white text-black border-white font-bold text-xs sm:text-sm">
                        {item.year}
                      </Badge>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-3 text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot - hidden on mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0.5 bg-red-500 rounded-full"
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Final heart at the bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mt-12"
          >
            <div className="bg-white text-black rounded-full p-4">
              <Heart className="w-8 h-8 fill-current" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeTimeline;
