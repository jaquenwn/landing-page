import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">
        © {new Date().getFullYear()} Hecho con 💖 por Jackeline & Alejandra —
        <a
          href="https://www.4geeksacademy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white ms-1"
        >
          4Geeks Academy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
