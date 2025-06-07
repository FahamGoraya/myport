"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "@/components/My_header";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import profile_img from "../assets/pfp.png";

export default function Home() {
  const router = useRouter();

  const programmingLanguages = [
    { name: "C", icon: "⚛️" },
    { name: "C++", icon: "/icons/cpp.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Assembly", icon: "/icons/r.png" },
    { name: "SQL", icon: "/icons/sql.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
  ];

  const developerTools = [
    { name: "Vercel", icon: "/assets/pfp.png" },
    { name: "Firebase", icon: "/icons/firebase.png" },
    { name: "Git", icon: "/icons/git.png" },
    { name: "GitHub", icon: "/icons/github.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "VS Code", icon: "/icons/vscode.png" },
    { name: "React", icon: "/icons/react.png" },
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.accent}>Faham Goraya</span>
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
          <div className={styles.profileContainer}>
            <Image
              src={profile_img || "/placeholder.svg"}
              alt="Faham Goraya"
              className={styles.profileImage}
              priority
              fill
              sizes="(max-width: 768px) 250px, 300px"
            />
          </div>
        </div>
      </section>

      <section className={styles.technicalSkills}>
        <h2 className={styles.technicalSkillsTitle}>My tech stack 🖥️</h2>

        <div className={styles.skillsColumns}>
          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.codeIcon}>{"<>"}</span>
              <h3 className={styles.skillCategoryTitle}>
                Programming Languages
              </h3>
            </div>
            <div className={styles.skillIconGrid}>
              {programmingLanguages.map((lang, index) => (
                <div key={index} className={styles.skillIconWrapper}>
                  <div className={styles.skillIcon}>
                    <div className={styles.iconPlaceholder}>{lang.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.toolIcon}>🔧</span>
              <h3 className={styles.skillCategoryTitle}>Developer Tools</h3>
            </div>
            <div className={styles.skillIconGrid}>
              {developerTools.map((tool, index) => (
                <div key={index} className={styles.skillIconWrapper}>
                  <div className={styles.skillIcon}>
                    <div className={styles.iconPlaceholder}>
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          {"{Made with Next.js, deployed with Vercel and a dream.}"}
        </p>
        <div className={styles.socialLinks}>
          <a
            href="mailto:fahamgoraya@gmail.com?subject=Website Inquiry&body=Hi, I visited your website and would like to connect."
            className={styles.socialLink}
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/faham-goraya-8b597a22b/"
            className={styles.socialLink}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/FahamGoraya"
            className={styles.socialLink}
          >
            <Github size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
