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
    icon: <FaUniversity className="text-[#007BB5] text-3xl mb-2" />,
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
    icon: <FaUserFriends className="text-[#007BB5]  text-3xl mb-2" />,
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
    icon: <FaShoppingCart className="text-[#007BB5]  text-3xl mb-2" />,
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
    icon: <FaCogs className="text-[#007BB5]  text-3xl mb-2" />,
  },
];
const founders = [
  {
    name: "Ravi Ranjan ",
    title: "Co-Founder & CEO",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFJcn0KQ0NxfQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1664555300482?e=1756339200&v=beta&t=gnmFMcIT6hQY52OOu9gfBz49DvbNjt07jR8bPqcVNqo", // replace with actual path or URL
    bio: "Passionate about transforming the laundry industry through digital innovation.",
    linkedin: "https://linkedin.com/in/amitkumar",
  },
  {
    name: "Ankur Gupta",
    title: "Co-Founder & COO",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFs0qNeb9VqMQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711439376973?e=1756339200&v=beta&t=osZcIViYd9zFEbRnVXoGdQ0R_PhiAXAMfnu7birYLB0",
    bio: "Tech leader building sustainable solutions for textile care.",
    linkedin: "https://www.linkedin.com/in/ankurdhobig/?originalSubdomain=in",
  },
  {
    name: "Daksh Sabharwal",
    title: "Co-Founder & CMO",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFjoYr3lNMdKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690138903313?e=1756339200&v=beta&t=nIygnnZHKjhku1NZDKba-jke6_FBg9YR6UOSqSnKxXg", // replace with actual path or URL
    bio: "Passionate about transforming the laundry industry through digital innovation.",
    linkedin: "https://www.linkedin.com/in/dhobig-daksh-sabharwal/",
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
            <h1 className="text-6xl md:text-9xl font-extrabold mb-2 text-[#111827] drop-shadow">
              Clean Clothes,
            </h1>
            <h1 className="text-6xl md:text-9xl font-extrabold mb-2 text-[#111827] drop-shadow">
              Happy Life
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mt-6 bg-gradient-to-r from-blue-600 via-indigo-800 to-gray-900 bg-clip-text text-transparent animate-text">
              Book with Dhobi G
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <button className="bg-[#007BB5] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#005f91] transition">
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
      <section id="product-section" className="py-16 px-6 rounded-xl">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
          Explore Our Innovative Laundry Solutions
        </h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
          {/* Left Info Panel */}

          <div className="fadeIn w-full md:w-1/3 ">
            <div className="p-6 rounded-xl shadow min-h-[250px] h-full flex items-center justify-center transition-all duration-300">
              <div className="text-center">
                <h3
                  className="text-xl font-semibold text-black mb-2"
                  style={{ color: "#1f2937 " }}
                >
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
                className=" rounded-xl p-5 shadow-md transition-all duration-400 min-h-[250px] hover:scale-101 hover:shadow-2xl"
                style={{ backgroundColor: "#e5e7eb", color: "#4b5563 " }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col ">
                  {product.icon}
                  <h4 className="text-xl font-bold text-[#007BB5]">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.tagline}
                  </p>
                  <ul className="list-disc text-sm  pl-5 space-y-0.5">
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
      <section className="partner-section relative overflow-hidden py-16 px-4 ">
        {/* Animated Shapes */}
        <div className="animated-shapes absolute inset-0 pointer-events-none z-0">
          <div className="before:content-[''] before:absolute before:w-[220px] before:h-[220px] before:bg-[#6c63ff] before:rounded-full before:opacity-[0.18] before:left-[-80px] before:top-[40px] before:animate-float" />
          <div className="after:content-[''] after:absolute after:w-[160px] after:h-[160px] after:bg-[#00bfae] after:rounded-full after:opacity-[0.18] after:right-[-60px] after:bottom-[30px] after:animate-float" />
        </div>

        {/* Content */}
        <div className="partner-container relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-10">
          {/* Left Text */}
          <div className="partner-text opacity-100 translate-y-0 transition duration-700 ease-in-out min-w-[220px]">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-800 leading-snug">
              Trusted by Industry Leaders
              <br /> for Laundry Innovation & Efficiency
            </h3>
          </div>

          {/* Logos */}
          <div className="partner-logos flex flex-wrap items-center gap-8 flex-1 min-w-[300px] m-5">
            {[
              {
                name: "TNSDC",
                logo: "https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png"

              },
              {
                name: "TNSKILL",
                logo: "https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png"
              },
              
            ].map((partner, i) => (
              <div
                key={i}
                className="logo-card bg-white rounded-[18px] p-4 shadow-md opacity-100 transform translate-y-0 scale-100 transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto filter grayscale opacity-85 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Founders*/}
      <section className="py-16 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Meet Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className=" backdrop-blur-md p-6 rounded-xl shadow-lg text-center hover:scale-[1.02] transition transform duration-300"
                style={{ backgroundColor: "#e5e7eb" }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-300"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-600">{founder.title}</p>
                <p className="text-sm text-gray-500 mt-2">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium text-sm mt-2 inline-block hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
