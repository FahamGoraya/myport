"use client";

import Image from "next/image";
import my_logo from "../assets/my_logo-removebg-preview.png";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem 5%",
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <Image src={my_logo} alt="Profile" width={80} height={80} />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Projects
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
