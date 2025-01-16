import React from 'react';
import { 
  Palette, 
  PenTool, 
  BarChart, 
  Share2, 
  Target, 
  TrendingUp 
} from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Palette,
    title: "Design para Branding",
    description: "Criação de identidade visual única e memorável para sua marca nas redes sociais.",
    tools: ["Photoshop", "Illustrator", "Canva Pro"]
  },
  {
    icon: PenTool,
    title: "Marketing de Conteúdo",
    description: "Estratégias de conteúdo que engajam seu público e fortalecem sua presença digital.",
    tools: ["Copywriting", "Storytelling", "Content Planning"]
  },
  {
    icon: BarChart,
    title: "Análise de Métricas",
    description: "Monitoramento e análise de KPIs para otimizar suas estratégias digitais.",
    tools: ["Google Analytics", "Meta Business", "Data Studio"]
  },
  {
    icon: Share2,
    title: "Gestão de Mídias Sociais",
    description: "Gerenciamento completo das suas redes sociais com foco em resultados.",
    tools: ["Instagram", "Facebook", "LinkedIn"]
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas para alcançar seu público-alvo com precisão.",
    tools: ["Meta Ads", "Google Ads", "TikTok Ads"]
  },
  {
    icon: TrendingUp,
    title: "Estratégias de Crescimento",
    description: "Planejamento estratégico para escalar seu negócio nas redes sociais.",
    tools: ["Growth Hacking", "CRO", "Marketing Strategy"]
  }
];

export const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};