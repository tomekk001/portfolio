import React from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Smartphone, 
  Figma, 
  Terminal, 
  GitBranch, 
  Layers 
} from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', category: 'Frontend', icon: Code2 },
  { name: 'Tailwind CSS', category: 'Styling', icon: Layout },
  { name: 'TypeScript', category: 'Language', icon: Terminal },
  { name: 'Node.js', category: 'Backend', icon: Database },
  { name: 'Next.js', category: 'Framework', icon: Layers },
  { name: 'Figma', category: 'Design', icon: Figma },
  { name: 'Git', category: 'Version Control', icon: GitBranch },
  { name: 'Responsive', category: 'Design', icon: Smartphone },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Essential Tools</h2>
          <p className="text-zinc-400">The technologies I use to bring ideas to life.</p>
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