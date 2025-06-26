"use client";
import { useState } from "react";
import {
  FaUniversity,
  FaUserFriends,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa";
import "./globals.css"; // this is required to activate your custom CSS

const products = [
  {
    name: "DG Campus",
    tagline: "Simplifying Campus Laundry Operations.",
    description:
      "End-to-end laundry management for educational institutions with dedicated apps for students, staff, and administrators.",
    bullets: [
      "Student App for tracking laundry",
      "Staff App for scheduling and updates",
      "Centralized Admin Dashboard for operations",
    ],
    icon: <FaUniversity className="text-blue-600 text-3xl mb-2" />,
  },
  {
    name: "DG Subscription",
    tagline: "Cloud-Based Laundry Services for Individuals.",
    description:
      "A subscription-based model for seamless laundry services with customer and delivery apps.",
    bullets: [
      "Flexible subscription plans",
      "Delivery tracking with Delivery Boy App",
      "Transparent billing and reminders",
    ],
    icon: <FaUserFriends className="text-green-600 text-3xl mb-2" />,
  },
  {
    name: "Ecommerce Platform",
    tagline: "An Online Marketplace for Laundry Businesses.",
    description:
      "Connect customers, laundry businesses, and B2B vendors through a robust e-commerce platform.",
    bullets: [
      "Customer and Partner Apps",
      "Equipment and essentials procurement",
      "B2B and B2C integrations",
    ],
    icon: <FaShoppingCart className="text-purple-600 text-3xl mb-2" />,
  },
  {
    name: "LaundryOS",
    tagline: "The Operating System for Modern Laundry Businesses.",
    description:
      "Comprehensive software for managing orders, fleets, inventory, and POS systems.",
    bullets: [
      "Fleet Management for optimized logistics",
      "Order & Inventory Management systems",
      "Custom POS and automated tax documentation",
    ],
    icon: <FaCogs className="text-red-600 text-3xl mb-2" />,
  },
];

export default function Home() {
  const [hovered, setHovered] = useState(null);

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
              <button className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl border shadow hover:bg-gray-100 transition">
                Schedule Later
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*product section */}
      <section className="py-16 px-6 rounded-xl">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
          Explore Our Innovative Laundry Solutions
        </h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
          {/* Left Info Panel */}
          {/* <div className="w-full md:w-1/3">
            <div className=" p-6 rounded-xl shadow min-h-[250px] h-full flex items-center justify-center animate-fadeIn transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black mb-2">
                  What Makes Us Special
                </h3>
                <p className="text-black text-lg mb-4">
                  {hovered !== null
                    ? products[hovered].tagline
                    : "Tailored digital tools for every laundry need — from campus to doorstep."}
                </p>

                {hovered !== null && (
                  <div className="transition-opacity duration-300">
                    <p className="text-gray-700 mb-3">
                      {products[hovered].description}
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-2 text-left">
                      {products[hovered].bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-blue-600 font-medium">
                      {products[hovered].cta}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div> */}

          <div className="fadeIn w-full md:w-1/3 ">
            <div className="p-6 rounded-xl shadow min-h-[250px] h-full flex items-center justify-center transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black mb-2">
                  What Makes Us Special
                </h3>
                <p className="text-black text-lg mb-4">
                  {hovered !== null
                    ? products[hovered].tagline
                    : "Tailored digital tools for every laundry need — from campus to doorstep."}
                </p>

                {hovered !== null && (
                  <div className="transition-opacity duration-300">
                    <p className="text-gray-700 mb-3">
                      {products[hovered].description}
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-2 text-left">
                      {products[hovered].bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-blue-600 font-medium">
                      {products[hovered].cta}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-200  rounded-xl p-5 shadow-md transition-all duration-400 min-h-[250px] hover:scale-101 hover:shadow-2xl"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col">
                  {product.icon}
                  <h4 className="text-xl font-bold text-blue-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.tagline}
                  </p>
                  <ul className="list-disc text-sm text-gray-500 pl-5 space-y-0.5">
                    {product.bullets.slice(0, 3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-blue-600 font-medium mt-2">
                    {product.cta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Award and Achivment section*/}
      <section className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-20">
            Awards & Achievements
          </h2>

          {/* Accredited By */}
          <div className="mb-12">
            <img
              src="https://dhobig.com/assets/img/Untitled-2-01.png" // Adjust path as needed
              alt="Awarded and Accredited by"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Top Rated */}
          <div>
            <img
              src="https://dhobig.com/assets/img/Untitled-2-02.png" // Adjust path as needed
              alt="Top Rated Laundry Service"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/*Partner section*/}

      

      

    </div>
  );
}
