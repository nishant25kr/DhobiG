export default function AboutPage() {
  return (
    <div className="p-8 space-y-12">
      
      {/* About Dhobi G */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Dhobi G</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Dhobi G is a tech-enabled laundry service providing fast, affordable, and eco-friendly solutions to urban India. 
          Whether it's a college hostel or a corporate tower, we ensure quality garment care, timely delivery, and hassle-free bookings.
        </p>
      </section>

      {/* Awards & Achievements */}
      <section className="bg-gray-100 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">🏆 Awards & Achievements</h2>
        <ul className="list-disc max-w-2xl mx-auto space-y-2 text-gray-800">
          <li>Best Urban Laundry Startup – CleanTech Awards 2024</li>
          <li>Recognized by Startup India</li>
          <li>Featured in Hindustan Times for college-based laundry network</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white shadow p-4 rounded border-l-4 border-blue-500">
            "Dhobi G made my hostel life so much easier! The weekly pickups are always on time."
            <footer className="mt-2 text-sm text-gray-500">– Aayushi, IIT Delhi</footer>
          </blockquote>
          <blockquote className="bg-white shadow p-4 rounded border-l-4 border-blue-500">
            "Very professional service. Our office uses Dhobi G for all staff uniforms!"
            <footer className="mt-2 text-sm text-gray-500">– HR Manager, Flipkart</footer>
          </blockquote>
        </div>
      </section>

      {/* Feedback Section (could be a form later) */}
      <section className="bg-blue-50 p-6 rounded text-center">
        <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Have suggestions? Reach out via our contact page. Your feedback helps us serve you better.
        </p>
      </section>
    </div>
  );
}
