import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  category: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}