"use client";

import Image from "next/image";
import my_logo from "../assets/my_logo-removebg-preview.png";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const handleScrollToSkills = () => {
    window.scrollTo({
      top: document.getElementById("skills")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  const handleScrollToExperience = () => {
    window.scrollTo({
      top: document.getElementById("MyStory")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

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
          <Link href="/">
            <Image
              src={my_logo}
              alt="Profile"
              width={80}
              height={80}
              style={{ cursor: "pointer" }}
            />
          </Link>{" "}
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            className={montserrat.className}
            style={{
              color: "white",
              textDecoration: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            Projects
          </button>
          <button
            className={montserrat.className}
            style={{
              color: "white",
              textDecoration: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            onClick={handleScrollToSkills}
          >
            Skills
          </button>
          <button
            className={montserrat.className}
            style={{
              color: "white",
              textDecoration: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            onClick={handleScrollToExperience}
          >
            Experience
          </button>
          <button
            className={montserrat.className}
            style={{
              color: "white",
              textDecoration: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            onClick={handleScrollToExperience}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
