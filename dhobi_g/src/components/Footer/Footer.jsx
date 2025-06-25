import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-blue-700 text-white text-center p-4 mt-12">
        <p>© {new Date().getFullYear()} Dhobi G. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
