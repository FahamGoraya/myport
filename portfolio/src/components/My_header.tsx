"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import my_logo from "../assets/my_logo-removebg-preview.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";
import styles from "./My_header.module.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface NavItem {
  id: string;
  label: string;
  action: () => void;
}

interface IndicatorStyle {
  width?: string;
  left?: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("About");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({});

  const navLinksRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);
  const router = useRouter();

  // Scroll handlers
  const handleScrollToSkills = (): void => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink("skills");
    }
  };

  const handleScrollToExperience = (): void => {
    const element = document.getElementById("MyStory");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink("experience");
    }
  };

  const handleScrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(sectionId);
    }
  };

  const handleProjectsRedirect = (): void => {
    router.push("/project");
  };

  const navItems: NavItem[] = [
    {
      id: "projects",
      label: "Projects",
      action: handleProjectsRedirect,
    },
    { id: "skills", label: "Skills", action: handleScrollToSkills },
    { id: "experience", label: "Experience", action: handleScrollToExperience },
    { id: "about", label: "About", action: handleScrollToExperience },
  ];

  // Enhanced scroll event handler
  useEffect(() => {
    const updateScrollState = (): void => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Update scroll progress
      const progress = (currentScrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Update navbar states
      setIsScrolled(currentScrollY > 50);
      setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 200);

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const requestScrollUpdate = (): void => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    return () => window.removeEventListener("scroll", requestScrollUpdate);
  }, []);

  // Update floating indicator position
  useEffect(() => {
    const updateIndicator = (): void => {
      if (!navLinksRef.current) return;

      const activeButton = navLinksRef.current.querySelector(
        `[data-id="${activeLink}"]`
      ) as HTMLElement;

      if (activeButton) {
        const rect = activeButton.getBoundingClientRect();
        const containerRect = navLinksRef.current.getBoundingClientRect();

        setIndicatorStyle({
          width: `${rect.width}px`,
          left: `${rect.left - containerRect.left}px`,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeLink]);

  // Mouse tracking for particle effects
  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    buttonRef: HTMLButtonElement
  ): void => {
    if (!buttonRef) return;

    const rect = buttonRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    buttonRef.style.setProperty("--mouse-x", `${x}%`);
    buttonRef.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${
          isHidden ? styles.hidden : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src={my_logo}
                alt="Profile"
                width={60}
                height={60}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.transform = "scale(1.1) rotate(5deg)";
                  target.style.filter =
                    "drop-shadow(0 8px 16px rgba(96, 165, 250, 0.4))";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.transform = "scale(1) rotate(0deg)";
                  target.style.filter =
                    "drop-shadow(0 4px 8px rgba(0,0,0,0.3))";
                }}
              />
            </Link>
          </div>

          <div className={styles.navLinks} ref={navLinksRef}>
            <div
              className={`${styles.floatingIndicator} ${
                activeLink ? styles.active : ""
              }`}
              style={indicatorStyle}
            />

            {navItems.map((item, index) => (
              <button
                key={item.id}
                data-id={item.id}
                className={`${styles.navLink} ${montserrat.className} ${
                  activeLink === item.id ? styles.active : ""
                }`}
                onClick={() => {
                  item.action();
                  if (item.id !== "projects") {
                    setActiveLink(item.id);
                  }
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={styles.scrollProgress}
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </nav>
    </>
  );
}
