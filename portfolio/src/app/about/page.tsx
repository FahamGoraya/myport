"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "@/components/My_header";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Code,
  Heart,
} from "lucide-react";
import Image from "next/image";
import profile_img from "../../assets/pfp.png";

export default function About() {
  const router = useRouter();
  const experiences = [
    {
      title: "Full-Stack Engineer",
      company: "Flymingos - AI B2B Matchmaking Platform",
      period: "January 2025 - Present",
      description:
        "Building AI-powered B2B matchmaking web app with React, Material-UI, Firebase, and Python Flask with OpenAI integration.",
    },
    {
      title: "Full-Stack Engineer",
      company: "Google Developer Student Club",
      period: "2024 - Present",
      description:
        "Developing modern web applications using React and JavaScript with focus on responsive design and user experience.",
    },
    {
      title: "Computer Science Student",
      company: "University of Toronto",
      period: "September 2023 - Present",
      description:
        "Studying CS fundamentals, algorithms, and AI/ML with hands-on experience in full-stack development and database design.",
    },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Creating modern, responsive web applications",
    },
    {
      icon: "🚀",
      title: "Technology",
      description: "Exploring cutting-edge technologies and frameworks",
    },
    {
      icon: "🎮",
      title: "Gaming",
      description: "Enjoying strategy games and fps titles",
    },
    {
      icon: "📚",
      title: "Learning",
      description: "Continuously improving my skills and knowledge",
    },
    {
      icon: "🌍",
      title: "Travel",
      description: "Exploring new places and cultures",
    },
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            About <span className={styles.accent}>Me</span>
          </h1>
          <p className={styles.heroSubtitle}>Getting to know Faham Goraya</p>
          <p className={styles.heroDescription}>
            I’m Faham Goraya, a full-stack developer passionate about building
            clean, modern, and impactful web applications. I specialize in
            crafting seamless user experiences, writing maintainable code, and
            solving real-world problems through technology.
          </p>
          <div className={styles.heroButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => router.push("/contact")}
            >
              <Mail size={20} style={{ marginRight: "8px" }} />
              Get In Touch
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => router.push("/projects")}
            >
              <Code size={20} style={{ marginRight: "8px" }} />
              View My Work
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
        <div
          className={styles.skillsColumns}
          style={{ gridTemplateColumns: "1fr" }}
        >
          <div className={styles.story}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.codeIcon}>👨‍💻</span>
              <h3 className={styles.skillCategoryTitle}>My Story</h3>
            </div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.8",
                fontSize: "1.1rem",
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Hi, I’m Faham a Computer Science student at the University of
                Toronto with a strong interest in full-stack development. Based
                in Toronto, I’ve been fortunate to grow in a city known for its
                vibrant tech scene and diverse community, both of which continue
                to inspire my passion for learning and building impactful
                digital solutions.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                My journey into tech started with pure curiosity, what began as
                experimenting with simple code turned into a deep passion for
                building things that actually work (and sometimes break, but we
                fix those too). I thrive on learning whether it’s a new
                framework, design principle, or debugging an obscure error at 2
                a.m. I genuinely enjoy the process of growth through code.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                I believe technology should not only function but feel
                intuitive, and that’s what I aim for in every project I build.
                When I’m not coding, I’m probably prototyping random ideas,
                exploring cafes across Toronto, or getting lost in a game or
                watching a new YouTube playlist on something entirely unrelated
                to my degree because why not?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <MapPin size={20} color="#fbbf24" />
                  <span>Toronto, Canada</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Calendar size={20} color="#fbbf24" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skillsColumns} style={{ marginTop: "0.4rem" }}>
          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.codeIcon}>💼</span>
              <h3 className={styles.skillCategoryTitle}>Experience</h3>
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "2rem",
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h4
                    style={{
                      color: "#fbbf24",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {exp.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {exp.company} • {exp.period}
                  </p>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: "1.6",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.toolIcon}>🎯</span>
              <h3 className={styles.skillCategoryTitle}>Interests & Hobbies</h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
              }}
            >
              {interests.map((interest, index) => (
                <div
                  key={index}
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                    {interest.icon}
                  </div>
                  <h4
                    style={{
                      color: "#fbbf24",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {interest.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {interest.description}
                  </p>
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
