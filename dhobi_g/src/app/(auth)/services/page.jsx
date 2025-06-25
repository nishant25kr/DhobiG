

"use client";

import { FaTshirt, FaPumpSoap, FaSteam, FaTruckPickup, FaSprayCan, FaGem } from "react-icons/fa";

export default function Services() {
  return (
    <div className="p-8 space-y-12">
      {/* Services Overview */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Our Services</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Dhobi G offers expert laundry solutions for individuals, hostels, and businesses — from pickup to delivery with premium care.
        </p>
      </section>

      {/* Laundry Services */}
      <section className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Best Laundry Services We Offer
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaTshirt className="text-blue-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Washing & Folding</h3>
            <p className="text-gray-600 mt-1">Cleaned, dried & folded neatly.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaPumpSoap className="text-green-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Dry Cleaning</h3>
            <p className="text-gray-600 mt-1">Safe for premium/delicate wear.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaSteam className="text-purple-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Steam Ironing</h3>
            <p className="text-gray-600 mt-1">Crisp, wrinkle-free finish.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaTruckPickup className="text-red-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Pickup & Delivery</h3>
            <p className="text-gray-600 mt-1">Doorstep laundry convenience.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaSprayCan className="text-yellow-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Stain Removal</h3>
            <p className="text-gray-600 mt-1">Spotless results, tough stains gone.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaGem className="text-pink-500 text-4xl mb-2 mx-auto" />
            <h3 className="font-semibold text-xl">Premium Fabric Care</h3>
            <p className="text-gray-600 mt-1">Special care for expensive garments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
