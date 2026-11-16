
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    
    {
      title: "Learning platform",
      description: t('proj_learning_platform'),
      tags: ["MongoDB","Express", "React", "Node"],
      link: "https://platformadonauki.netlify.app",
      image: "/images/platformadonauki.jpg"
    },
    {
      title: "Message Manager",
      description: t('proj_messagesProject'),
      tags: ["React", "RTK Query", "Node.js", "Sequelize", "Docker"],
      link: "https://messagesproject.netlify.app/",
      image: "/images/messagesProject.jpg"
    },
    {
      title: "Nadwarciańskie Specjały",
      description: t('proj_nadwarcianskie_desc'),
      tags: ["WordPress", "Elementor", "Web Design", "UI/UX"],
      link: "https://nadwarcianskiespecjaly.pl/",
      image: "/images/nadwarcianskie.jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('projects_title')}</h2>
          <p className="text-zinc-400">{t('projects_subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
