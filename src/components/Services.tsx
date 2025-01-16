import { CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const services = [
    "Design para branding",
    "Marketing de Conteúdo",
    "SEO e Otimização",
    "Gestão de Mídias Sociais",
    "Análise de Métricas e KPIs",
    "Estratégias de Crescimento"
  ];

  return (
    <section className="relative py-0 bg-[#f5e6d3]">
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#f5e6d3" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pt-16">
        <h2 className="text-4xl font-bold text-[#4a3728] mb-1 text-center">
          Com meus serviços vou te ajudar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-[#7fa998] flex-shrink-0" />
                <span className="text-lg text-[#4a3728]">{service}</span>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=776"
              alt="Marketing Professional"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-16 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </section>
  );
};