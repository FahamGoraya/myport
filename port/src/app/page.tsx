"use client";

import type React from "react";

import { useState, useEffect, createContext, useContext } from "react";
import { Github, ExternalLink, Mail, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./portfolio.css";

// Custom Theme Context
const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern React patterns and optimized for performance.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
    ],
    githubUrl: "https://github.com/username/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
    category: "web",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive charts, and detailed weather analytics for multiple cities.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
    category: "web",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization, automated reporting, and multi-platform integration.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "D3.js", "Express", "MySQL", "Redis"],
    githubUrl: "https://github.com/username/social-analytics",
    liveUrl: "https://social-analytics-demo.vercel.app",
    featured: false,
    category: "web",
  },
  {
    id: 5,
    title: "Portfolio CMS",
    description:
      "A content management system for portfolio websites with drag-and-drop functionality and real-time preview capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Svelte", "SvelteKit", "Supabase", "DnD Kit"],
    githubUrl: "https://github.com/username/portfolio-cms",
    liveUrl: "https://portfolio-cms-demo.vercel.app",
    featured: false,
    category: "tools",
  },
  {
    id: 6,
    title: "AI Chat Bot",
    description:
      "An intelligent chatbot with natural language processing, machine learning capabilities, and multi-language support.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI", "Docker"],
    githubUrl: "https://github.com/username/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.vercel.app",
    featured: true,
    category: "tools",
  },
  {
    id: 7,
    title: "Fitness Tracker Mobile App",
    description:
      "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.vercel.app",
    featured: false,
    category: "mobile",
  },
  {
    id: 8,
    title: "Code Snippet Manager",
    description:
      "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging system.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Electron", "React", "SQLite", "Monaco Editor"],
    githubUrl: "https://github.com/username/snippet-manager",
    liveUrl: "https://snippet-manager-demo.vercel.app",
    featured: false,
    category: "tools",
  },
  {
    id: 9,
    title: "Recipe Sharing App",
    description:
      "Mobile application for sharing and discovering recipes with photo uploads, rating system, and meal planning features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Storage"],
    githubUrl: "https://github.com/username/recipe-app",
    liveUrl: "https://recipe-app-demo.vercel.app",
    featured: true,
    category: "mobile",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="sun-icon" />
      <Moon className="moon-icon" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    return project.category === filter;
  });

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-content">
            <Link href="#" className="logo">
              John Doe
            </Link>
            <div className="nav-links">
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">My Projects</h1>
            <p className="hero-description">
              A collection of web applications, tools, and experiments I've
              built using modern technologies.
            </p>
            <Link href="#projects" className="hero-button">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">My Projects</h2>
            <p className="projects-description">
              Here are some of the projects I've worked on recently
            </p>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button
                className={`filter-button ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All Projects
              </button>
              <button
                className={`filter-button ${
                  filter === "featured" ? "active" : ""
                }`}
                onClick={() => setFilter("featured")}
              >
                Featured
              </button>
              <button
                className={`filter-button ${filter === "web" ? "active" : ""}`}
                onClick={() => setFilter("web")}
              >
                Web Apps
              </button>
              <button
                className={`filter-button ${
                  filter === "mobile" ? "active" : ""
                }`}
                onClick={() => setFilter("mobile")}
              >
                Mobile
              </button>
              <button
                className={`filter-button ${
                  filter === "tools" ? "active" : ""
                }`}
                onClick={() => setFilter("tools")}
              >
                Tools
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="project-image"
                  />
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="project-link"
                      >
                        <Github className="project-icon" />
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="project-link"
                      >
                        <ExternalLink className="project-icon" />
                      </Link>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Interested in my work?</h2>
          <div className="contact-buttons">
            <Link
              href="mailto:john.doe@example.com"
              className="contact-button primary"
            >
              <Mail className="contact-icon" />
              Get In Touch
            </Link>
            <Link
              href="https://github.com/johndoe"
              target="_blank"
              className="contact-button secondary"
            >
              <Github className="contact-icon" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">Made using Next.js, and with a dream</p>
        </div>
      </footer>
    </div>
  );
}

export default function PortfolioWithTheme() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
