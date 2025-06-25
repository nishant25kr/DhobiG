import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

export const metadata = {
  title: "Dhobi G",
  description: "Laundry services at your doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
