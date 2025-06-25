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
      <section className="p-8 text-center w-full ">
        <h2 className="text-3xl font-bold mb-4">Why Choose Dhobi G?</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-3">
          <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
            {/* Block 1 */}
            <div className=" p-6 rounded-xl  border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1" 
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Fast pickup and doorstep delivery to save your time.
              </p>
            </div>

            {/* Block 2 */}
            <div className=" p-6 rounded-xl  border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                Affordable pricing plans designed for students and
                professionals.
              </p>
            </div>

            {/* Block 3 */}
            <div className="p-6 rounded-xl   border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1 hover-border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Eco-friendly detergents that care for your clothes and the
                planet.
              </p>
            </div>

            {/* Block 4 */}
            <div className=" p-6 rounded-xl  border-2 border-gray-300 hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                Real-time order tracking with status updates via SMS & email.
              </p>
            </div>
          </div>

          <div className="relative h-[70vh] w-full md:w-1/2 overflow-hidden shadow-md  rounded-tl-4xl rounded-br-4xl  border-2 border-gray-500">
            <img
              src="https://images.pexels.com/photos/8774363/pexels-photo-8774363.jpeg"
              alt="Laundry Service"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className=" p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          How Dhobi G Works
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <span>🧺</span>
            <p>Schedule Pickup</p>
          </div>
          <div>
            <span>🧼</span>
            <p>We Wash & Iron</p>
          </div>
          <div>
            <span>📦</span>
            <p>Packed Neatly</p>
          </div>
          <div>
            <span>🚚</span>
            <p>Delivered to You</p>
          </div>
        </div>
      </section>
    </div>
  );
}
