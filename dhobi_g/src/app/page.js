export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/4700410/pexels-photo-4700410.jpeg?_gl=1*3iiwt8*_ga*MTc2NzQ5Mzg3NS4xNzQ2NzE2Mzk4*_ga_8JE65Q40S6*czE3NTA4Mzk1NDAkbzMkZzEkdDE3NTA4Mzk4NDQkajU5JGwwJGgw')" }}>
        <div className="p-3 rounded">
          <h1 className="text-4xl font-bold mb-4 bg-gray-300 p-1 text-black rounded-xl">Clean Clothes, Happy Life – Book with Dhobi G</h1>
          <div className="space-x-4">
            <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Book Now</button>
            <button className="bg-gray-100 text-black px-6 py-2 rounded hover:bg-gray-200">Schedule Later</button>
            {/* <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">View Bookings</button> */}
          </div>
        </div>
      </section>

      {/* Why Choose Dhobi G */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Dhobi G?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We provide fast, affordable, and reliable laundry service using modern equipment and eco-friendly detergents.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">How Dhobi G Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><span>🧺</span><p>Schedule Pickup</p></div>
          <div><span>🧼</span><p>We Wash & Iron</p></div>
          <div><span>📦</span><p>Packed Neatly</p></div>
          <div><span>🚚</span><p>Delivered to You</p></div>
        </div>
      </section>
    </div>
  );
}
