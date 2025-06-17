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
  Download,
} from "lucide-react";
import Image from "next/image";
import profile_img from "../../assets/pfp.png";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptPlain";
import TypescriptOriginal from "devicons-react/icons/TypescriptPlain";
import COriginal from "devicons-react/icons/COriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import JavaOriginalWordmark from "devicons-react/icons/JavaOriginalWordmark";
import PythonOriginalWordmark from "devicons-react/icons/PythonOriginalWordmark";
import FlutterOriginal from "devicons-react/icons/FlutterOriginal";
import FirebaseOriginal from "devicons-react/icons/FirebaseOriginal";
import AzuresqldatabasePlain from "devicons-react/icons/AzuresqldatabasePlain";
import MongodbOriginalWordmark from "devicons-react/icons/MongodbOriginalWordmark";
import AndroidstudioOriginal from "devicons-react/icons/AndroidstudioOriginal";
import IntellijOriginal from "devicons-react/icons/IntellijOriginal";
import PycharmOriginal from "devicons-react/icons/PycharmOriginal";
import NextjsPlain from "devicons-react/icons/NextjsPlain";
import VercelOriginalWordmark from "devicons-react/icons/VercelOriginalWordmark";

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

      {/* Centered Hero Section */}
      <section className={styles.centeredHero}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageWrapper}>
            <Image
              src={profile_img || "/placeholder.svg"}
              alt="Faham Goraya"
              className={styles.profileImage}
              priority
              fill
              sizes="200px"
            />
            <div className={styles.onlineIndicator}></div>
          </div>
        </div>

        <h1 className={styles.centeredName}>Faham Goraya</h1>
        <h2 className={styles.centeredTitle}>
          Full-Stack Developer & CS Student
        </h2>

        <p className={styles.centeredDescription}>
          Computer Science student at University of Toronto, passionate about
          creating digital experiences that are both beautiful and functional.
        </p>

        <div className={styles.centeredButtons}>
          <button
            className={styles.primaryButton}
            onClick={() => router.push("/contact")}
          >
            <Mail size={20} style={{ marginRight: "8px" }} />
            Get In Touch
          </button>
          <a href="/resume.pdf" download="Faham_Goraya_Resume.pdf">
            <button className={styles.secondaryButton}>
              <Download size={20} style={{ marginRight: "8px" }} />
              Download Resume
            </button>
          </a>
        </div>

        <div className={styles.socialLinks}>
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
          <a
            href="mailto:fahamgoraya@gmail.com?subject=Website Inquiry&body=Hi, I visited your website and would like to connect."
            className={styles.socialLink}
          >
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* Rest of your content */}
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
                Hi, I'm Faham a Computer Science student at the University of
                Toronto with a strong interest in full-stack development. Based
                in Toronto, I've been fortunate to grow in a city known for its
                vibrant tech scene and diverse community, both of which continue
                to inspire my passion for learning and building impactful
                digital solutions.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                My journey into tech started with pure curiosity, what began as
                experimenting with simple code turned into a deep passion for
                building things that actually work (and sometimes break, but we
                fix those too). I thrive on learning whether it's a new
                framework, design principle, or debugging an obscure error at 2
                a.m. I genuinely enjoy the process of growth through code.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                I believe technology should not only function but feel
                intuitive, and that's what I aim for in every project I build.
                When I'm not coding, I'm probably prototyping random ideas,
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

      <section className={styles.technicalSkills}>
        <h2 className={styles.technicalSkillsTitle}>My tech stack 🖥️</h2>

        <div className={styles.skillsColumns}>
          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.codeIcon}>{"<>"}</span>
              <h3 className={styles.skillCategoryTitle}>
                Languages/Frameworks
              </h3>
            </div>
            <div className={styles.skillIconGrid}>
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <ReactOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <JavascriptOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <TypescriptOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <COriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <CplusplusOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <JavaOriginalWordmark size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <PythonOriginalWordmark size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <FlutterOriginal size={40} />
                  </div>
                </div>
              </div>
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <NextjsPlain size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.skillColumn}>
            <div className={styles.skillCategoryHeader}>
              <span className={styles.toolIcon}>🔧</span>
              <h3 className={styles.skillCategoryTitle}>Developer Tools</h3>
            </div>
            <div className={styles.skillIconGrid}>
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <FirebaseOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <AzuresqldatabasePlain size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <MongodbOriginalWordmark size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <AndroidstudioOriginal size={40} />
                  </div>
                </div>
              </div>

              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <IntellijOriginal size={40} />
                  </div>
                </div>
              </div>
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <PycharmOriginal size={40} />
                  </div>
                </div>
              </div>
              <div className={styles.skillIconWrapper}>
                <div className={styles.skillIcon}>
                  <div className={styles.iconPlaceholder}>
                    <VercelOriginalWordmark size={40} />
                  </div>
                </div>
              </div>
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
