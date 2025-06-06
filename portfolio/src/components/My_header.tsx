"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";
import MyLog from "../assets/my_logo-removebg-preview.png";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={MyLog} alt="My Logo" height={100} width={100} priority />
        </div>

        <ul className={styles.navLinks}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
