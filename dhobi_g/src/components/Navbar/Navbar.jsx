// "use client";
// export default function Navbar({ setActiveSection }) {
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-center space-x-6">
//       <button onClick={() => setActiveSection('home')}>Home</button>
//       <button onClick={() => setActiveSection('about')}>About</button>
//       <button onClick={() => setActiveSection('services')}>Services</button>
//       <button onClick={() => setActiveSection('product')}>Product</button>
      
//     </nav>
//   );
// }


"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" top-0 w-full text-black  shadow z-50 p-4 flex justify-center space-x-6 ">
      <Link href="/" className="hover:text-blue-600">Home</Link>
      <Link href="/about" className="hover:text-blue-600">About</Link>
      <Link href="/services" className="hover:text-blue-600">Services</Link>
      <Link href="/product" className="hover:text-blue-600">Product</Link>
    </nav>
  );
}
