"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "@/components/My_header";

export default function Home() {
  const router = useRouter();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with Next.js and MongoDB",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/project1.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "React-based productivity app with real-time collaboration",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      image: "/project2.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with data visualization",
      technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      image: "/project3.jpg",
      link: "#",
      github: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.accent}>Your Name</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Full Stack Developer & UI/UX Designer
          </p>
          <p className={styles.heroDescription}>
            I create beautiful, functional web applications that solve
            real-world problems. Passionate about clean code, great design, and
            user experience.
          </p>
          <div className={styles.heroButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => router.push("/projects")}
            >
              View My Work
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => router.push("/contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Replace with your profile image */}
          <div className={styles.profilePlaceholder}>
            <span>Your Photo</span>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                <div className={styles.skillTags}>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactCta}>
        <div className={styles.sectionContent}>
          <h2 className={styles.ctaTitle}>Let's Work Together</h2>
          <p className={styles.ctaDescription}>
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
          <button
            className={styles.primaryButton}
            onClick={() => router.push("/contact")}
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
