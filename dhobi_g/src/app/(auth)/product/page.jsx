"use client";
import { useState } from "react";
import {
  FaUniversity,
  FaUserFriends,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa";

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
    cta: "Learn More",
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
    cta: "Explore Plans",
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
    cta: "Get Started",
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
    cta: "Request a Demo",
  },
];

export default function ProductSection() {
  const [hovered, setHovered] = useState(null);

  return (
    // <section className="py-16 px-6 shadow-xl m-10 rounded-xl">
    //   <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
    //     Explore Our Innovative Laundry Solutions
    //   </h2>

    //   <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
    //     {/* Left Info Panel */}
    //     <div className="w-full md:w-1/3">
    //       <div className=" p-6 rounded-xl shadow min-h-[250px] h-full flex items-center justify-center animate-fadeIn transition-all duration-300">
    //         <div className="text-center">
    //           <h3 className="text-xl font-semibold text-blue-700 mb-2">
    //             What Makes Us Special 
    //           </h3>
    //           <p className="text-blue-900 text-lg mb-4">
    //             {hovered !== null
    //               ? products[hovered].tagline
    //               : "Tailored digital tools for every laundry need — from campus to doorstep."}
    //           </p>

    //           {hovered !== null && (
    //             <div className="transition-opacity duration-300">
    //               <p className="text-gray-700 mb-3">
    //                 {products[hovered].description}
    //               </p>
    //               <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-2 text-left">
    //                 {products[hovered].bullets.map((point, idx) => (
    //                   <li key={idx}>{point}</li>
    //                 ))}
    //               </ul>
    //               <p className="text-sm text-blue-600 font-medium">
    //                 {products[hovered].cta}
    //               </p>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Card Section */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
    //       {products.map((product, index) => (
    //         <div
    //           key={index}
    //           className="bg-blue-50 border hover:border-blue-500 rounded-xl p-5 shadow-md transition-all duration-200 min-h-[250px]"
    //           onMouseEnter={() => setHovered(index)}
    //           onMouseLeave={() => setHovered(null)}
    //         >
    //           <div className="flex flex-col">
    //             {product.icon}
    //             <h4 className="text-xl font-bold text-blue-800">
    //               {product.name}
    //             </h4>
    //             <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
    //             <ul className="list-disc text-sm text-gray-500 pl-5 space-y-0.5">
    //               {product.bullets.slice(0, 3).map((item, idx) => (
    //                 <li key={idx}>{item}</li>
    //               ))}
    //             </ul>
    //             <p className="text-sm text-blue-600 font-medium mt-2">
    //               {product.cta}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className=" py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Explore Our Innovative Laundry Solutions
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Empowering laundry businesses, campuses, and individuals with digital
          tools designed for efficiency, sustainability, and growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Request a Demo
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
            Contact Sales
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
          {/* DG Campus */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">DG Campus</h3>
            <p className="text-gray-700 mb-4">
              Simplifying Campus Laundry Operations.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
              <li>Student App for tracking laundry</li>
              <li>Staff App for scheduling and updates</li>
              <li>Admin Dashboard for operations</li>
            </ul>
            <button className="text-blue-600 font-medium hover:underline">
              Learn More
            </button>
          </div>

          {/* DG Subscription */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              DG Subscription
            </h3>
            <p className="text-gray-700 mb-4">
              Cloud-Based Laundry Services for Individuals.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
              <li>Flexible subscription plans</li>
              <li>Delivery tracking with Delivery Boy App</li>
              <li>Transparent billing and reminders</li>
            </ul>
            <button className="text-blue-600 font-medium hover:underline">
              Explore Plans
            </button>
          </div>

          {/* Ecommerce Platform */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">
              Ecommerce Platform
            </h3>
            <p className="text-gray-700 mb-4">
              An Online Marketplace for Laundry Businesses.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
              <li>Customer and Partner Apps</li>
              <li>Procurement for equipment & essentials</li>
              <li>B2B and B2C integrations</li>
            </ul>
            <button className="text-blue-600 font-medium hover:underline">
              Get Started
            </button>
          </div>

          {/* LaundryOS */}
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">LaundryOS</h3>
            <p className="text-gray-700 mb-4">
              The Operating System for Modern Laundry Businesses.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
              <li>Fleet Management for logistics</li>
              <li>Order & Inventory Management</li>
              <li>Custom POS & tax automation</li>
            </ul>
            <button className="text-blue-600 font-medium hover:underline">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

  );
}



