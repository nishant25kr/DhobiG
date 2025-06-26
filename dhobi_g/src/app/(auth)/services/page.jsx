"use client";

import {
  FaTshirt,
  FaPumpSoap,
  FaSteam,
  FaTruckPickup,
  FaSprayCan,
  FaGem,
} from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="p-8 space-y-12">

      {/* Services Overview */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Dhobi G offers expert laundry solutions for individuals, hostels, and businesses — from pickup to delivery with premium care.
        </p>
      </section>

      {/* Types of Services */}
      <section className=" p-6 rounded">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Types of Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          <VerticalServiceCard
            icon={<FaGem />}
            title="Premium Laundry Service"
            subtitle="For people who truly love their clothes!"
            description="Service by our Finest Certified Fabric experts with specialised services, great past reviews and multiple positive testimonials!"
            color="text-blue-700"
          />
          <VerticalServiceCard
            icon={<FaTshirt />}
            title="Regular Laundry Service"
            subtitle="For people looking for a steal deal!"
            description="A value-for-money process that services the entire bulk load of each customer at a time by Certified Laundry Experts."
            color="text-green-700"
          />
          <VerticalServiceCard
            icon={<FaPumpSoap />}
            title="Dry Clean Service"
            subtitle="For special fabric and 'handle-with-care' items."
            description="Service by expert drycleaners who understand the science of fabrics. Your special delicate clothes will be treated with special care."
            color="text-purple-700"
          />
          <VerticalServiceCard
            icon={<FaBolt />}
            title="RapidDG: Express Delivery"
            subtitle="For people in a hurry!"
            description="One of the fastest laundry services in India! Get your clothes picked-up, cleaned and delivered in just 4 hours! (Limited Areas Only)"
            color="text-red-700"
          />
        </div>
      </section>

      {/* Best Laundry Services */}
      <section className=" p-6 rounded ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Best Laundry Services We Offer
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <ServiceCard icon={<FaTshirt />} title="Washing & Folding" price="₹50 / kg" desc="Cleaned, dried & folded neatly." color="text-blue-500" />
          <ServiceCard icon={<FaPumpSoap />} title="Dry Cleaning" price="₹150 / item" desc="Safe for premium/delicate wear." color="text-green-500" />
          <ServiceCard icon={<FaSteam />} title="Steam Ironing" price="₹10 / item" desc="Crisp, wrinkle-free finish." color="text-purple-500" />
          <ServiceCard icon={<FaTruckPickup />} title="Pickup & Delivery" price="Free above ₹499" desc="Doorstep laundry convenience." color="text-red-500" />
          <ServiceCard icon={<FaSprayCan />} title="Stain Removal" price="₹30 / spot" desc="Spotless results, tough stains gone." color="text-yellow-500" />
          <ServiceCard icon={<FaGem />} title="Premium Fabric Care" price="₹200+ / item" desc="Special care for expensive garments." color="text-pink-500" />
        </div>
      </section>


    </div>
  );
}

// 🔁 Card for Service Types (vertical + slim)
function VerticalServiceCard({ icon, title, subtitle, description, color }) {
  return (
    <div className=" rounded-lg p-6 shadow  hover:shadow-lg transition flex flex-col items-center text-center space-y-3 max-w-sm w-full mx-auto h-full">
      <div className={`text-4xl ${color}`}>{icon}</div>
      <h3 className={`text-lg font-semibold ${color}`}>{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

// 🔁 Card for Best Laundry Services
function ServiceCard({ icon, title, price, desc, color }) {
  return (
    <div className=" p-4 rounded-lg shadow-lg hover:shadow-lg transition h-full flex flex-col items-center text-center">
      <div className={`${color} text-4xl mb-2`}>{icon}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-sm text-gray-500">{price}</p>
      <p className="text-gray-600 mt-1">{desc}</p>
    </div>
  );
}

