import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, tools }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#b08968]/10 to-[#4a3728]/5 rounded-2xl transition-opacity group-hover:opacity-100 opacity-0" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-[#b08968] to-[#4a3728] rounded-xl flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-[#4a3728] mb-3">{title}</h3>
        <p className="text-[#6b5d4f] mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f5e6d3] text-[#4a3728] text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};