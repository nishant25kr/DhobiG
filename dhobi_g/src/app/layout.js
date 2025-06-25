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
      <body
        style={{
          background: "linear-gradient(rgb(120, 140, 176) 0%,rgb(192, 200, 218) 50%, rgb(120, 140, 176) 100%",
          // minHeight: "400vh",
        }}
      >
        <Navbar />
        <main className="py-15">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
