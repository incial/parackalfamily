function HeroSection() {
  return (
    <section className="w-full bg-black text-white py-12 flex justify-center items-center flex-col">
      <div className="max-w-4xl w-full text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 tracking-wider text-shadow-md">
          In Loving Memory
        </h1>
        <p className="font-sans text-lg md:text-xl text-gray-300 mb-8">
          Celebrating the life and legacy of our beloved family member
        </p>
        <div className="flex justify-center items-center w-full">
          <video 
            className="w-full max-w-2xl rounded-2xl shadow-2xl bg-black" 
            controls 
            poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
