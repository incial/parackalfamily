function ContactSection() {
  return (
    <section className="w-full max-w-3xl mx-auto mb-10 px-6 py-8 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="font-display text-2xl md:text-3xl text-black font-bold mb-4 tracking-wider">
        Contact Us
      </h2>
      <p className="font-sans text-lg text-gray-800 mb-5 leading-relaxed">
        Share your memories, condolences, or reach out to the Parackal family.
      </p>
      <p className="font-sans text-lg text-black">
        Email: <a 
          href="mailto:hello@parackalfamily.com" 
          className="text-black underline font-semibold hover:text-gray-800 hover:no-underline transition-colors"
        >
          hello@parackalfamily.com
        </a>
      </p>
    </section>
  );
}

export default ContactSection;
