import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const jobs = [
    {
      company: 'Deloitte',
      role: t('exp_deloitte_role'),
      period: `04.2026 – ${t('exp_present')}`,
      desc: t('exp_deloitte_desc'),
      tags: ['HLASM', 'JCL', 'z/OS', 'SDSF', 'Xpediter'],
    },
    {
      company: 'Biznesport',
      role: t('exp_biznesport_role'),
      period: '08.2025 – 03.2026',
      desc: t('exp_biznesport_desc'),
      tags: ['Marketplace', 'Search', 'SEO'],
    },
    {
      company: 'ZF Group',
      role: t('exp_zf_role'),
      period: '07.2025 – 08.2025',
      desc: t('exp_zf_desc'),
      tags: ['UiPath', 'REFramework', 'RPA'],
    },
  ];

  const education = [
    { title: t('edu_msc'), sub: t('edu_msc_sub'), period: '2025 – 2026' },
    { title: t('edu_eng'), sub: t('edu_eng_sub'), period: '2021 – 2025' },
    { title: t('edu_tech'), sub: t('edu_tech_sub'), period: '2017 – 2021' },
  ];

  const certs = [t('cert_ssis'), t('cert_tsql'), t('cert_ccna'), t('cert_english')];

  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/10">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('exp_title')}</h2>
          <p className="text-zinc-400">{t('exp_subtitle')}</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Work timeline */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
              <Briefcase size={16} />
              {t('exp_work')}
            </div>
            <ol className="relative border-l border-zinc-800 ml-2 space-y-10">
              {jobs.map((job, i) => (
                <li key={job.company} className="pl-8 relative">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-zinc-950" />
                  <Reveal delay={i * 80}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <span className="font-mono text-xs text-zinc-500">{job.period}</span>
                    </div>
                    <p className="text-emerald-300/90 text-sm font-medium mt-1">{job.role}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-3">{job.desc}</p>
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {job.tags.map((tag) => (
                        <li key={tag} className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/50 border border-zinc-700 rounded-md">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Education + certificates */}
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                <GraduationCap size={16} />
                {t('edu_title')}
              </div>
              <ul className="space-y-5">
                {education.map((item) => (
                  <li key={item.title} className="p-5 bg-zinc-900/40 border border-zinc-800 rounded-xl">
                    <div className="font-mono text-xs text-zinc-500 mb-1">{item.period}</div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-zinc-400 text-sm mt-1">{item.sub}</div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                <Award size={16} />
                {t('cert_title')}
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                {certs.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
