import React from "react";
import { motion } from "framer-motion";
import mernMeal from '../../../assets/images/meal.png';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Modern E-commerce Platform",
    url: "https://ubiquitous-croquembouche-473bd4.netlify.app/",
    description:
      "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=2664&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubUrl: "#",
  },
  {
    url: "https://exquisite-granita-38440c.netlify.app/",
    title: "AI-Powered Task Manager",
    description:
      "Smart task management app that uses AI to prioritize and categorize tasks automatically.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    githubUrl: "#",
  },
  {
    url: "https://mellow-genie-921282.netlify.app/",
    title: "MERN Hostel Meals System",
    description:
      "Interactive dashboard showing real-time data visualization with customizable widgets.",
    image: mernMeal,
    tech: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "#",
  },
];

function MyProjects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
        <div className="relative">
          <div className="container mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Crafting Digital
                <br />
                Experiences
              </h1>
              <p className="mb-8 max-w-xl text-xl text-slate-200">
                Full-stack developer specializing in building exceptional
                digital experiences that combine beautiful design with powerful
                functionality.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-2xl transition-colors hover:text-indigo-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="text-2xl transition-colors hover:text-indigo-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-2xl transition-colors hover:text-indigo-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-16 text-center text-3xl font-bold text-slate-900 md:text-4xl">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="project-card"
              >
                <Link to={project.url}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-slate-600">{project.description}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900"
                      >
                        <FaGithub />
                        Code
                      </a>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-slate-400">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} | Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default MyProjects;