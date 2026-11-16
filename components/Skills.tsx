import React from 'react';
import { Code2, Server, Database, Wrench, Figma, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Reveal from './Reveal';

type Key = keyof typeof translations['en'];

const groups: { titleKey: Key; icon: React.ElementType; items: string[]; highlight?: boolean }[] = [
  { titleKey: 'skills_frontend', icon: Code2, items: ['ReactJS', 'Next.js', 'Tailwind CSS'] },
  { titleKey: 'skills_backend', icon: Server, items: ['C#', 'Java', 'Node.js', 'Python'] },
  { titleKey: 'skills_databases', icon: Database, items: ['MongoDB', 'MySQL'] },
  { titleKey: 'skills_tools', icon: Wrench, items: ['Git', 'Jira', 'AWS', 'Docker', 'Kubernetes'] },
  { titleKey: 'skills_design', icon: Figma, items: ['Figma', 'UiPath'] },
  {
    titleKey: 'skills_mainframe',
    icon: Cpu,
    items: ['COBOL', 'HLASM', 'JCL', 'CICS', 'DB2', 'z/OS', 'SDSF', 'Xpediter'],
    highlight: true,
  },
];

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('skills_title')}</h2>
          <p className="text-zinc-400">{t('skills_subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group, i) => (
            <Reveal key={group.titleKey} delay={i * 60} className={group.highlight ? 'md:col-span-2 lg:col-span-1' : ''}>
              <div
                className={`group h-full p-6 rounded-xl border transition-all duration-300 ${
                  group.highlight
                    ? 'bg-emerald-500/[0.04] border-emerald-500/30 hover:border-emerald-400/60'
                    : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                    <group.icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold">{t(group.titleKey)}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-2.5 py-1 text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
