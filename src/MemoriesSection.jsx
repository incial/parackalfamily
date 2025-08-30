const memories = [
  {
    title: 'Cherished Moments',
    text: 'He always brought joy and laughter to every gathering. His stories and wisdom will forever echo in our hearts.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Family Gatherings',
    text: 'No family event was complete without his warm smile and kind words. He made every moment special.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Legacy of Love',
    text: 'His legacy is one of love, compassion, and strength. We honor his memory by living with the same grace.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

function MemoriesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto mb-10 px-4 py-8 bg-white rounded-2xl shadow-lg">
      <h2 className="font-display text-3xl md:text-4xl text-black font-bold mb-8 text-center tracking-wider">
        Memories
      </h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {memories.map((mem, idx) => (
          <div 
            className="bg-black text-white rounded-xl shadow-lg w-80 overflow-hidden flex flex-col mb-6 
                       transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl" 
            key={idx}
          >
            <img 
              src={mem.image} 
              alt={mem.title} 
              className="w-full h-44 object-cover grayscale contrast-110" 
            />
            <div className="p-5">
              <h3 className="font-display text-xl mb-3 text-white font-bold">
                {mem.title}
              </h3>
              <p className="font-sans text-base text-gray-300 leading-relaxed">
                {mem.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MemoriesSection;
