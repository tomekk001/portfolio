
import React from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Server,
  Figma, 
  Terminal, 
  GitBranch, 
  Layers,
  Box,
  Bot,
  CheckSquare
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'ReactJS', category: t('cat_frontend'), icon: Code2 },
    { name: 'Node.js', category: t('cat_backend'), icon: Server },
    { name: 'MongoDB', category: t('cat_database'), icon: Database },
    { name: 'C#', category: t('cat_language'), icon: Terminal },
    { name: '.NET', category: t('cat_framework'), icon: Box },
    { name: 'MySQL', category: t('cat_database'), icon: Database },
    { name: 'Next.js', category: t('cat_framework'), icon: Layers },
    { name: 'Figma', category: t('cat_design'), icon: Figma },
    { name: 'Tailwind CSS', category: t('cat_styling'), icon: Layout },
    { name: 'UiPath', category: t('cat_automation'), icon: Bot },
    { name: 'Git', category: t('cat_version_control'), icon: GitBranch },
    { name: 'Jira', category: t('cat_management'), icon: CheckSquare },
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('skills_title')}</h2>
          <p className="text-zinc-400">{t('skills_subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="group p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                <skill.icon size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">{skill.name}</h3>
                <p className="text-xs text-zinc-500 mt-1">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
