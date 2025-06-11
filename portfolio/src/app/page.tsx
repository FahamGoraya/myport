"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Navbar from "@/components/My_header";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import profile_img from "../assets/pfp.png";
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

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.accent}>Faham Goraya</span>
          </h1>
          <p className={styles.heroSubtitle}>Full Stack Developer</p>
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
