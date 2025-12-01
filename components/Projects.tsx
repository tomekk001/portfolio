
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
    },
    {
      title: "In progress...",
      description: t('proj_finance_desc'),
      tags: ["Node.js", "Next.js", "SQL", "Docker", "Stripe", "Git"],
      link: "#",
      image: "https://picsum.photos/600/400?random=4"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('projects_title')}</h2>
          <p className="text-zinc-400">{t('projects_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              key={project.title}
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
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
