import React, { useState, useRef } from 'react';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "College Symposium Website",
    description: "A dynamic website for college technical symposium featuring event details, registration, and schedule management.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/vimaldharshan07/symposium",
    liveLink: "https://symposium-demo.netlify.app",
    tags: ["Html", "CSS", "js"]
  },
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout system.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/vimaldharshan07/ecommerce",
    liveLink: "https://vimalecommerce.netlify.app/",
    tags: ["React", "Node.js", "Tailwindcss"]
  },
  {
    title: "College Website",
    description: "Modern college website with course information, faculty profiles, and student portal integration.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    githubLink: "https://github.com/vimaldharshan07/college",
    liveLink: "https://college-demo.netlify.app",
    tags: ["React", "Tailwind CSS", "js"]
  }
];

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const allProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my development skills
        </p>
        
        {/* Mobile View */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-xl">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-3 mb-3">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                        >
                          <Globe size={20} />
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-full bg-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={18} />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="relative hidden md:block" ref={containerRef}>
          <div 
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex gap-8 transition-transform duration-300 ${
                !isPaused ? 'animate-smooth-scroll' : ''
              }`}
            >
              {allProjects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[400px] group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-xl transition-all duration-500 hover:scale-105">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="flex gap-3 mb-3">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                            >
                              <Github size={20} />
                            </a>
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                            >
                              <Globe size={20} />
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 text-xs rounded-full bg-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
