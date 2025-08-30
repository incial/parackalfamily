import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const memoryData = [
  {
    id: 1,
    title: "Cherished Moments",
    description: "He always brought joy and laughter to every gathering. His stories and wisdom will forever echo in our hearts, reminding us of the beautiful soul he was.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    year: "1950 - 2024",
    category: "Family Gatherings"
  },
  {
    id: 2,
    title: "Words of Wisdom",
    description: "No family event was complete without his warm smile and kind words. He made every moment special with his presence and gentle guidance.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    year: "Life Lessons",
    category: "Inspiration"
  },
  {
    id: 3,
    title: "Legacy of Love",
    description: "His legacy is one of love, compassion, and strength. We honor his memory by living with the same grace and kindness he showed us every day.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    year: "Forever",
    category: "Legacy"
  }
];

const MemoriesSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-wider leading-tight">
            Treasured Memories
          </h2>
          <div className="w-16 sm:w-24 h-px bg-black mx-auto mb-4 sm:mb-6"></div>
          <p className="font-sans text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed px-2">
            Each memory is a treasure, a moment in time that reminds us of the beautiful impact he had on all our lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">{memoryData.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <Badge variant="secondary" className="bg-white/90 text-black font-medium text-xs sm:text-sm">
                      {memory.category}
                    </Badge>
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <Badge variant="outline" className="bg-black/80 text-white border-white text-xs sm:text-sm">
                      {memory.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-zinc-700 transition-colors leading-tight">
                    {memory.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {memory.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
