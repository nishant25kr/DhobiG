

export default function Services() {
  return (
    <div className="p-8 space-y-12">
      
      {/* Services Overview */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Dhobi G offers end-to-end laundry solutions for individuals, colleges, hostels, and corporates. From pickup to delivery, we make laundry effortless.
        </p>
      </section>

      {/* Process Explanation */}
      <section className="bg-gray-50 p-6 rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-gray-800">
          <div><span className="text-3xl">📆</span><p>Schedule Pickup</p></div>
          <div><span className="text-3xl">🧼</span><p>Wash & Dry</p></div>
          <div><span className="text-3xl">🧺</span><p>Fold/Iron</p></div>
          <div><span className="text-3xl">🚚</span><p>Delivered Fresh</p></div>
        </div>
      </section>

      {/* Offers */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
        <p>🎉 First-time users get <strong>20% OFF</strong> with code <code>DHOBI20</code></p>
        <p className="mt-2">🎁 Free ironing on orders above ₹500</p>
      </section>

      {/* Pricing */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Basic Wash</h3>
            <p className="text-lg">₹50 / Kg</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Ironing</h3>
            <p className="text-lg">₹10 / Item</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Dry Cleaning</h3>
            <p className="text-lg">₹150 / Piece</p>
          </div>
        </div>
      </section>
    </div>
  );
}
