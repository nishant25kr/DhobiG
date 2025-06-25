export default function Product() {
  return (
    <div className="p-8 space-y-12">
      
      {/* Our Products */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Products We Use</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Dhobi G ensures quality and care using high-grade detergents, fabric conditioners, and eco-friendly packaging to give your clothes the best treatment.
        </p>
      </section>

      {/* Detergents and Packaging */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Detergents & Cleaners</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Surf Excel Matic for washing</li>
            <li>Comfort Fabric Conditioner</li>
            <li>Special stain remover for whites</li>
            <li>Eco-friendly hypoallergenic options</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Packaging</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Recyclable zip-lock laundry bags</li>
            <li>Sealed delivery packaging for hygiene</li>
            <li>QR code-based order tracking</li>
          </ul>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-white p-6 rounded text-center shadow">
        <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
        <p>We proudly serve:</p>
        <ul className="mt-2 list-disc mx-auto text-left max-w-md text-gray-700">
          <li>IIT Delhi & other major colleges</li>
          <li>Flipkart, Zomato corporate offices</li>
          <li>Hostels, PGs, and housing societies</li>
        </ul>
      </section>
    </div>
  );
}
