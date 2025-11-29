import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Nadwarciańskie Specjały",
    description: "A responsive website design created in WordPress and Elementor. The site was created for a company specializing in food processing and sales.",
    tags: ["WordPress", "Elementor", "Web Design", "UI/UX"],
    link: "https://nadwarcianskiespecjaly.pl/",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager featuring drag-and-drop kanban boards and team workspaces.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://example.com",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "AI Image Generator",
    description: "SaaS platform allowing users to generate and edit images using OpenAI's DALL-E API.",
    tags: ["React", "Node.js", "OpenAI API", "Stripe"],
    link: "https://example.com",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    title: "Finance Tracker",
    description: "Personal finance application with budget planning, expense tracking, and visual reports.",
    tags: ["Vue", "Firebase", "Chart.js"],
    link: "https://example.com",
    image: "https://picsum.photos/600/400?random=4"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Highlights</h2>
          <p className="text-zinc-400">Selected projects that demonstrate my passion for building.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-zinc-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;