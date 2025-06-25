"use client";
import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Calendar,
  Star,
  Home,
} from "lucide-react";
import styles from "./page.module.css";

const Projects = () => {
  const projects = [
    {
      title: "Pryzm CRM: Modern Real Estate CRM",
      description:
        "Pryzm CRM is a Full-Stack cutting-edge real estate management platform built to transform how agents and brokers handle their business. Using AI, it streamlines property listings, client relationships, and deal pipelines with an intuitive interface and real estate-specific automation tools. With features like smart property status tracking",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Shadcn UI",
        "Clerk",
        "SQLite",
        "Drizzle ORM",
        "Vercel",
        "Netlify",
      ],
      date: "June 2025",
      category: "fullstack",
      featured: true,
      stats: {
        features: [
          "Property Management",
          "Contact Management",
          "Analytics Dashboard",
          "Email Integration",
          "Sales Pipeline",
          "Automation Tools",
        ],
      },
      liveUrl: "https://pryzmcrm.vercel.app/",
      image: "https://i.ibb.co/WWYgtXgZ/image.png",
    },
    {
      title: "ReelPicks AI/System Movie Recommender",
      description:
        "Full-stack movie recommendation platform featuring both AI-powered and traditional recommendation systems. Users can discover movies through intelligent suggestions based on preferences and behavior, or via standard filters like genre and popularity. Includes secure JWT authentication, real-time movie data from TMDB, and personalized watchlists.",
      technologies: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "TMDB API",
        "OpenAI",
      ],
      date: "June 2025",
      category: "fullstack",
      featured: true,
      liveUrl: "https://gimovies.onrender.com/",
      githubUrl: "https://github.com/FahamGoraya/reelpicks",
      image: "https://i.ibb.co/hFB49YQg/image.png",
    },
    {
      title: "Munafah B2B AI Matchmaking Platform",
      description:
        "B2B AI matchmaking is a Full-Stack web application that connects small and medium-sized exporters with international buyers. Features intelligent lead generation, AI-powered messaging, comprehensive dashboard analytics, automated data scraping for company onboarding, and market insights with regional filtering. Helps exporters expand globally by finding the best-suited buyers through advanced matching algorithms.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Firebase",
        "Python",
        "Flask",
        "OpenAI API",
        "Playwright",
        "JWT Authentication",
      ],
      date: "May 2025",
      category: "fullstack",
      featured: true,
      liveUrl: "https://munafah.onrender.com/",
      image: "https://i.ibb.co/Mx0nr4B8/image.png",
      stats: {
        features: [
          "AI Matchmaking",
          "Lead Generation",
          "Chat System",
          "Data Scraping",
        ],
        team: "5 developers",
      },
    },

    {
      title: "SketchFX JavaFX Painting Application",
      description:
        "SketchFX is a sophisticated and feature-rich digital painting application developed using JavaFX, designed to empower users with intuitive and dynamic sketching capabilities. It supports a diverse range of drawing tools including Circles, Rectangles, Squiggles, and Polylines, all with real-time editing and manipulation features that allow seamless adjustment and refinement of shapes. The application leverages advanced event handling and graphical rendering to deliver smooth, responsive user interactions.",
      technologies: ["Java", "JavaFX", "UI/UX", "File I/O", "Event Handling"],
      date: "Dec 2024",
      category: "desktop",
      featured: false,
      image: "https://itsfoss.com/content/images/2023/07/Pinta-1.png",
    },
    {
      title: "Othello Game",
      description:
        "Java implementation of the classic Othello (Reversi) game with multiple gameplay modes including human vs human, human vs AI, and AI vs AI. Features standard 8x8 board rules, multiple AI strategies such as random move selection and greedy token maximization, and supports running AI simulations for strategic analysis. Includes statistics to compute probabilities of AI wins across simulations.",
      technologies: ["Java", "Game Development", "AI", "Algorithms", "JavaFX"],
      date: "Sep 2024",
      category: "desktop",
      featured: false,
      image:
        "https://www.logos.t.u-tokyo.ac.jp/orientation/REVERSIAnOthellotypegame.png",
    },
    {
      title: "MewbileTech Phone Management System",
      description:
        "Comprehensive phone management system designed for processing customer call data, generating detailed billing reports, and analyzing calling behavior. Users can explore call records through advanced filters based on duration, time, or location, and manage user contracts efficiently. The system also includes interactive map visualizations for analyzing call history patterns, enabling deeper insights into user activity and communication trends.",
      technologies: [
        "Python",
        "Pygame",
        "Data Structures",
        "JSON",
        "Visualization",
        "Numpy",
        "Pandas",
      ],
      date: "Dec 2023",
      category: "data",
      featured: false,
      image:
        "https://www.sine.co/wp-content/uploads/2021/05/Blog-Benefits-Mobile-based-VMS-1.png",
      stats: { stars: 22, forks: 7, views: "680" },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topHomeButtonContainer}>
        <a href="/" className={styles.exceptionalHomeButton}>
          <div className={styles.homeButtonIcon}>
            <Home size={20} />
          </div>
          <span className={styles.homeButtonText}>Back to Home</span>
          <div className={styles.homeButtonGlow}></div>
        </a>
      </div>

      <div className={styles.projectsHero}>
        <h1 className={styles.projectsTitle}>
          My <span className={styles.accent}>Projects</span>
        </h1>
        <p className={styles.projectsSubtitle}>
          A collection of projects showcasing my skills in full-stack
          development, AI/ML, mobile apps, and data visualization.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectDate}>
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                </div>

                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <Star size={12} />
                    Featured
                  </div>
                )}
              </div>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.techTags}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectButtons}>
                {project.liveUrl && (
                  <a href={project.liveUrl} className={styles.primaryButton}>
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className={styles.secondaryButton}
                  >
                    <Code size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

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
};

export default Projects;
