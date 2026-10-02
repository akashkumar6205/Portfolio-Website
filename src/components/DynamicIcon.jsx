import React from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Sparkles,
  Globe,
  Layers,
  Server,
  Cpu,
  Terminal,
  ShieldCheck,
  Cloud,
  Database,
  FileSpreadsheet,
  Zap,
  Flame,
  GitBranch,
  Box,
  CloudRain,
  CheckCircle2,
  Layout,
  Award,
  Trophy,
  Compass
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  Palette,
  Sparkles,
  Globe,
  Layers,
  Server,
  Cpu,
  Terminal,
  ShieldCheck,
  Cloud,
  Database,
  FileSpreadsheet,
  Zap,
  Flame,
  GitBranch,
  Box,
  CloudRain,
  CheckCircle2,
  Layout,
  Award,
  Trophy,
  Compass
};

export const DynamicIcon = ({ name, className = "w-5 h-5", size = 20 }) => {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent className={className} size={size} />;
};

export default DynamicIcon;
