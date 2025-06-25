"use client";

export default function AboutPage() {
  return (
    <div className="p-8 space-y-16  text-gray-800">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">About Dhobi G</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Dhobi G is a tech-enabled laundry service offering fast, affordable, and eco-friendly solutions across urban India.
          From college hostels to corporate offices, we deliver clean clothes with care, convenience, and commitment.
        </p>
      </section>

      {/* Awards & Achievements */}
      <section className="bg-gray-50 p-8 rounded shadow-sm">
        <h2 className="text-2xl font-bold mb-10 text-center text-blue-700">🏆 Awards & Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl text-yellow-500">🏅</span>
            <h3 className="text-lg font-semibold mt-3 mb-1">Best Urban Laundry Startup</h3>
            <p className="text-gray-600 text-sm">Awarded by CleanTech Awards 2024</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl text-green-500">✅</span>
            <h3 className="text-lg font-semibold mt-3 mb-1">Recognized by Startup India</h3>
            <p className="text-gray-600 text-sm">For innovation in laundry & logistics</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl text-indigo-500">📰</span>
            <h3 className="text-lg font-semibold mt-3 mb-1">Featured in Hindustan Times</h3>
            <p className="text-gray-600 text-sm">Covered for revolutionizing student laundry</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">💬 What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
            <p className="italic">"Dhobi G made my hostel life so much easier! The weekly pickups are always on time."</p>
            <footer className="mt-3 text-sm text-gray-500">– Aayushi, IIT Delhi</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
            <p className="italic">"Very professional service. Our office uses Dhobi G for all staff uniforms!"</p>
            <footer className="mt-3 text-sm text-gray-500">– HR Manager, Flipkart</footer>
          </blockquote>
        </div>
      </section>

      {/* Feedback / Contact Prompt */}
      <section className="bg-blue-50 p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">📣 We Value Your Feedback</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-4">
          Have suggestions or thoughts? Let us know through our contact page. We’re always looking to improve your experience.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
