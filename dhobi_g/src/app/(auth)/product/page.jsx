// 'use client';

// import { GraduationCap, Cloud, ShoppingCart, Settings } from 'lucide-react';

// export default function Product() {
//   return (
//     <div className="text-gray-900 font-sans">

//       {/* CTA Section - Moved to Top */}
//       <section className="py-20 bg-gray-100 text-center px-6 space-y-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
//           Ready to Revolutionize Your Laundry?
//         </h2>
//         <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//           Whether you're running a hostel, managing a campus, or scaling a laundry business. Dhobi G has the tools to automate, simplify, and grow your operations.
//         </p>
//         <p className="text-gray-600 text-sm">
//           Explore how our digital laundry solutions can make your workflow cleaner and smarter.
//         </p>
//         <div className="flex justify-center gap-4 mt-6 flex-wrap">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
//             Request a Demo
//           </button>
//           <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md font-medium transition">
//             Talk to Our Experts
//           </button>
//         </div>
//       </section>

//       {/* Products We Use Section */}
//       <section className="py-20 px-6 text-center space-y-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Products We Use</h1>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//           Dhobi G ensures quality and care using high-grade detergents, fabric conditioners, 
//           and eco-friendly packaging to give your clothes the best treatment.
//         </p>
//         <div className="text-sm text-gray-500 space-y-1">
//           <p>✨ Safe on skin, tough on stains</p>
//           <p>🌿 Sustainable and efficient practices</p>
//           <p>🚚 Trusted by 1000+ customers & businesses</p>
//         </div>
//       </section>

//       {/* Tailored Solutions */}
//       <section className="py-20 px-6 md:px-16 bg-gray-50">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Tailored Solutions for Every Need
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-white rounded-lg shadow p-6 space-y-4">
//             <GraduationCap className="text-blue-600 w-8 h-8" />
//             <h3 className="text-xl font-semibold text-blue-700">DG Campus</h3>
//             <p>Simplifying campus laundry operations.</p>
//             <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
//               <li>Student app for laundry tracking</li>
//               <li>Staff tools for scheduling & collection</li>
//               <li>Centralized admin dashboard</li>
//             </ul>
//             <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Learn More</a>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6 space-y-4">
//             <Cloud className="text-blue-600 w-8 h-8" />
//             <h3 className="text-xl font-semibold text-blue-700">DG Subscription</h3>
//             <p>Cloud-based laundry services for individuals.</p>
//             <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
//               <li>Monthly/weekly flexible plans</li>
//               <li>Pickup + Delivery tracking</li>
//               <li>Automated billing & reminders</li>
//             </ul>
//             <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Explore Plans</a>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6 space-y-4 border border-blue-300">
//             <ShoppingCart className="text-blue-600 w-8 h-8" />
//             <h3 className="text-xl font-semibold text-blue-700">Ecommerce Platform</h3>
//             <p>An online marketplace for laundry needs.</p>
//             <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
//               <li>Customer & partner apps</li>
//               <li>Laundry equipment + essentials</li>
//               <li>B2B/B2C integrations</li>
//             </ul>
//             <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Get Started</a>
//           </div>

//           <div className="bg-white rounded-lg shadow p-6 space-y-4">
//             <Settings className="text-blue-600 w-8 h-8" />
//             <h3 className="text-xl font-semibold text-blue-700">LaundryOS</h3>
//             <p>Your laundry business, fully digitized.</p>
//             <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
//               <li>Fleet & logistics management</li>
//               <li>Order, POS & billing dashboard</li>
//               <li>Inventory tracking + reporting</li>
//             </ul>
//             <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Request a Demo</a>
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Partners</h2>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
//           We're proud to support institutions and businesses across India with our trusted laundry services.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-800 font-medium text-lg">
//           <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">IIT Delhi & Major Colleges</div>
//           <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">Flipkart & Zomato Offices</div>
//           <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">Hostels & Housing Societies</div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import { GraduationCap, Cloud, ShoppingCart, Settings } from 'lucide-react';

export default function Product() {
  return (
    <div className="text-gray-900 font-sans">
      {/* CTA Section */}
      <section className="py-20 text-center px-6 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Ready to Revolutionize Your Laundry?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you're running a hostel, managing a campus, or scaling a laundry business. Dhobi G has the tools to automate, simplify, and grow your operations.
        </p>
        <p className="text-gray-600 text-sm">
          Explore how our digital laundry solutions can make your workflow cleaner and smarter.
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
            Request a Demo
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-md font-medium transition">
            Talk to Our Experts
          </button>
        </div>
      </section>

      {/* Products We Use Section */}
      <section className="py-20 px-6 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Products We Use</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Dhobi G ensures quality and care using high-grade detergents, fabric conditioners, 
          and eco-friendly packaging to give your clothes the best treatment.
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>✨ Safe on skin, tough on stains</p>
          <p>🌿 Sustainable and efficient practices</p>
          <p>🚚 Trusted by 1000+ customers & businesses</p>
        </div>
      </section>

      {/* Tailored Solutions */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tailored Solutions for Every Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg shadow p-6 space-y-4 border border-gray-200">
            <GraduationCap className="text-blue-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700">DG Campus</h3>
            <p>Simplifying campus laundry operations.</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Student app for laundry tracking</li>
              <li>Staff tools for scheduling & collection</li>
              <li>Centralized admin dashboard</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Learn More</a>
          </div>

          <div className="rounded-lg shadow p-6 space-y-4 border border-gray-200">
            <Cloud className="text-blue-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700">DG Subscription</h3>
            <p>Cloud-based laundry services for individuals.</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Monthly/weekly flexible plans</li>
              <li>Pickup + Delivery tracking</li>
              <li>Automated billing & reminders</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Explore Plans</a>
          </div>

          <div className="rounded-lg shadow p-6 space-y-4 border border-blue-300">
            <ShoppingCart className="text-blue-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700">Ecommerce Platform</h3>
            <p>An online marketplace for laundry needs.</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Customer & partner apps</li>
              <li>Laundry equipment + essentials</li>
              <li>B2B/B2C integrations</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Get Started</a>
          </div>

          <div className="rounded-lg shadow p-6 space-y-4 border border-gray-200">
            <Settings className="text-blue-600 w-8 h-8" />
            <h3 className="text-xl font-semibold text-blue-700">LaundryOS</h3>
            <p>Your laundry business, fully digitized.</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Fleet & logistics management</li>
              <li>Order, POS & billing dashboard</li>
              <li>Inventory tracking + reporting</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Request a Demo</a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Partners</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          We're proud to support institutions and businesses across India with our trusted laundry services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-800 font-medium text-lg">
          <div className="px-6 py-4 rounded-lg shadow border border-gray-200">IIT Delhi & Major Colleges</div>
          <div className="px-6 py-4 rounded-lg shadow border border-gray-200">Flipkart & Zomato Offices</div>
          <div className="px-6 py-4 rounded-lg shadow border border-gray-200">Hostels & Housing Societies</div>
        </div>
      </section>
    </div>
  );
}
