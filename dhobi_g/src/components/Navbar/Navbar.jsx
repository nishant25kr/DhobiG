// "use client";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className=" top-0 w-full text-black  shadow z-50 p-4 flex justify-center space-x-6 ">
//       <Link href="/" className="hover:text-blue-600">Home</Link>
//       <Link href="/about" className="hover:text-blue-600">About</Link>
//       <Link href="/services" className="hover:text-blue-600">Services</Link>
//       <Link href="/product" className="hover:text-blue-600">Product</Link>
//     </nav>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50   backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600 dark:text-white"
        >
          <img src="/dhobi-logo.webp" alt="Dhobi G Logo" className="h-8 w-8" />
          <span>Dhobi G</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/accounts" className="hover:text-blue-500">
            Accounts
          </Link>

          {/* Sign In Button */}
          <Link
            href="/signin"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3  dark:bg-gray-900">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/services" className="block">
            Services
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/accounts" className="block">
            Accounts
          </Link>
          <Link
            href="/signin"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
