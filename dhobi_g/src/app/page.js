export default function Home() {
  return (
    <div className="">
      {/* Hero */}

      <section
        className="relative h-[70vh]  bg-cover bg-center flex items-center justify-center text-white"
        //  style={{ backgroundImage: "url('https://images.pexels.com/photos/4700410/pexels-photo-4700410.jpeg?_gl=1*3iiwt8*_ga*MTc2NzQ5Mzg3NS4xNzQ2NzE2Mzk4*_ga_8JE65Q40S6*czE3NTA4Mzk1NDAkbzMkZzEkdDE3NTA4Mzk4NDQkajU5JGwwJGgw')" }}
      >
        <div className="p-3 rounded">
          {/* <h1 className="text-9xl font-bold mb-4  p-1 text-black rounded-xl">Clean Clothes,</h1>
          <h1 className="text-9xl font-bold mb-4  p-1 text-black rounded-xl">Happy Life</h1>
          <h1 className="text-5xl font-bold mb-4  p-1 text-black rounded-xl">Book with Dhobi G </h1> */}
          <div className="text-center">
            <h1 className="text-6xl md:text-9xl font-extrabold mb-2 text-black drop-shadow">
              Clean Clothes,
            </h1>
            <h1 className="text-6xl md:text-9xl font-extrabold mb-2 text-black drop-shadow">
              Happy Life
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mt-6 bg-gradient-to-r from-blue-500 via-black-500 to-gray-700 bg-clip-text text-transparent animate-text">
              Book with Dhobi G
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Book Now
              </button>
              <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-xl border shadow hover:bg-gray-100 transition">
                Schedule Later
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dhobi G */}
      <section className="p-8 text-center w-full  mt-10 ">
        <h2 className="text-3xl font-bold mb-8">Why Choose Dhobi G?</h2>

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

      {/* How It Works */}
      <section className="py-12 mt-10  text-center">
        <h2 className="text-3xl font-bold mb-4">How Dhobi G Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 mt-9">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">🧺</div>
            <p className="text-lg font-semibold text-gray-800">
              Schedule Pickup
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Book a convenient pickup time through our website or app.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">🧼</div>
            <p className="text-lg font-semibold text-gray-800">
              We Wash & Iron
            </p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Your clothes are washed with care and professionally ironed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <div className="text-5xl mb-2">📦</div>
            <p className="text-lg font-semibold text-gray-800">Packed Neatly</p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600 mt-3 text-center">
              Items are folded and packed in a clean, hygienic way.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
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
    </div>
  );
}
