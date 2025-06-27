"use client";

const faqData = [
  {
    question: "How does Dhobi G handle my clothes?",
    answer:
      "We use high-quality, fabric-specific detergents and ensure separate processing for each customer to maintain hygiene.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "Dhobi G operates across multiple cities in India. Check the app or website for live service areas.",
  },
  {
    question: "Can I schedule pickups through the app?",
    answer:
      "Yes! You can schedule, reschedule, and track your pickups and deliveries through our mobile app.",
  },
  {
    question: "How does Dhobi G handle my clothes?",
    answer:
      "We use high-quality, fabric-specific detergents and ensure separate processing for each customer to maintain hygiene.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "Dhobi G operates across multiple cities in India. Check the app or website for live service areas.",
  },
  {
    question: "Can I schedule pickups through the app?",
    answer:
      "Yes! You can schedule, reschedule, and track your pickups and deliveries through our mobile app.",
  },
];

export default function AboutPage() {
  return (
    <div className="p-8 space-y-16  text-gray-800">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          About Dhobi G
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Dhobi G is a tech-enabled laundry service offering fast, affordable,
          and eco-friendly solutions across urban India. From college hostels to
          corporate offices, we deliver clean clothes with care, convenience,
          and commitment.
        </p>
      </section>

      <section className="p-8 text-center w-full  mt-10 ">
        <h2 className="text-3xl text-[#1f2937] font-bold mb-8">Why Choose Dhobi G?</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text Blocks */}
          <div className="w-full md:w-1/2 max-w-2xl px-5 space-y-6">
            {/* Block 1 */}
            <div className="p-6 rounded-xl border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-md leading-relaxed font-medium">
                🚀 <strong>Fast Pickup & Doorstep Delivery</strong>
                <br />
                No queues. No waiting. We come to you.
              </p>
            </div>

            {/* Block 2 */}
            <div className="p-6 rounded-xl border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-md leading-relaxed font-medium">
                💰 <strong>Affordable for Students & Professionals</strong>
                <br />
                Flexible plans that suit your budget.
              </p>
            </div>

            {/* Block 3 */}
            <div className="p-6 rounded-xl border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-md leading-relaxed font-medium">
                🌿 <strong>Eco-Friendly & Gentle Care</strong>
                <br />
                Safe on clothes and the planet.
              </p>
            </div>

            {/* Block 4 */}
            <div className="p-6 rounded-xl border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-md leading-relaxed font-medium">
                📲 <strong>Real-Time Tracking & Updates</strong>
                <br />
                Know your laundry status at every step.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-[400px] h-[500px] rounded overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/8774363/pexels-photo-8774363.jpeg"
              alt="Laundry Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 mt-10  text-center">
        <h2 className="text-3xl text-[#1f2937] font-bold mb-4">How Dhobi G Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 mt-9">
          {/* Card 1 */}
          <div className="group bg-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">🧺</div>
            <p className="text-lg font-semibold text-gray-800">
              Schedule Pickup
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Book a convenient pickup time through our website or app.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group group bg-gray-200  rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">🧼</div>
            <p className="text-lg font-semibold text-gray-800">
              We Wash & Iron
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Your clothes are washed with care and professionally ironed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group group bg-gray-200  rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">📦</div>
            <p className="text-lg font-semibold text-gray-800">Packed Neatly</p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Items are folded and packed in a clean, hygienic way.
            </p>
          </div>

          {/* Card 4 */}
          <div className="groupgroup bg-gray-200  rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">🚚</div>
            <p className="text-lg font-semibold text-gray-800">
              Delivered to You
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Clean clothes delivered right to your doorstep — fast & fresh.
            </p>
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section className="py-16 px-6 " id="faq">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1f2937] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* Left Side */}
            <div className="space-y-6">
              {faqData
                .slice(0, Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#2563eb]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

            {/* Right Side */}
            <div className="space-y-6">
              {faqData
                .slice(Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#2563eb]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-8 text-[#1f2937]">
          💬 What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-200 p-6 rounded shadow border-l-4 border-blue-500">
            <p className="italic">
              "Dhobi G made my hostel life so much easier! The weekly pickups
              are always on time."
            </p>
            <footer className="mt-3 text-sm text-gray-500">
              – Aayushi, IIT Delhi
            </footer>
          </blockquote>
          <blockquote className="bg-gray-200 p-6 rounded shadow border-l-4 border-blue-500">
            <p className="italic">
              "Very professional service. Our office uses Dhobi G for all staff
              uniforms!"
            </p>
            <footer className="mt-3 text-sm text-gray-500">
              – HR Manager, Flipkart
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Feedback / Contact Prompt */}
      <section className="bg-gray-200 p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1f2937]">
          📣 We Value Your Feedback
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-4">
          Have suggestions or thoughts? Let us know through our contact page.
          We’re always looking to improve your experience.
        </p>
        <a
          href="/contactus"
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
