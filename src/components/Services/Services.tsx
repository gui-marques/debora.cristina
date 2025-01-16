import { ServicesList } from './ServicesList';
import { CircleDot } from 'lucide-react';
import Eu from '../../imagens/eu.png'

const benefits = [
  "Aumento da Visibilidade Online",
  "Engajamento do Público-Alvo",
  "Geração de Leads e Vendas",
  "Construção de Autoridade e Credibilidade",
  "Economia de Tempo e Recursos"
];


export const Services = () => {
  return (
    <>
      {/* Modern Services Gallery Section */}
      <section className="relative bg-[#E5D5C5] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-light text-[#4a3728] text-center mb-4">
            Serviços
          </h2>
          <p className="text-[#6b5d4f] text-center mb-16 max-w-2xl mx-auto">
            Soluções personalizadas para impulsionar sua presença digital e alcançar resultados extraordinários
          </p>
          
          {/* Services Gallery */}
          <ServicesList />
        </div>
      </section>

      {/* Help Section */}
      <section className="relative py-20 bg-[#E5D5C5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column - Benefits List */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-[#4a3728] mb-12">
                Com meus serviços
                <br />
                vou te ajudar
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#b08968]/20 flex items-center justify-center flex-shrink-0">
                      <CircleDot className="w-5 h-5 text-[#b08968]" />
                    </div>
                    <span className="text-lg text-[#6b5d4f]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2">
              <img
                src={Eu}
                alt="Profissional de Marketing Digital"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
