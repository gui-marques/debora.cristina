import React from 'react';
import { Heart, Bookmark } from 'lucide-react';

export const About = () => {
  return (
    <section className="pt-0 pb-0 bg-[#E5D5C5]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative bg-white p-12 rounded-lg shadow-lg max-w-md mx-auto">
            <img
              src="/src/imagens/sobre.png"
              alt="Profile"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-3 left-20  lg:right-[80px] flex items-center justify-between">
              <div className="flex items-center gap-20">
                <Heart className="w-6 h-6 text-red-500 fill-current" />
                <div className="flex gap-1">
                  {Array(8)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === 0 ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                </div>
              </div>
              <Bookmark className="w-6 h-6 text-gray-700" />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 px-4 md:px-0">
            <h2 className="text-4xl md:text-6xl  font-light text-[#b08968]">
              Sobre mim
            </h2>
            <div className="space-y-4  md:space-y-6">
              <p className="text-base md:text-lg text-[#6b5d4f] leading-relaxed">
                Profissional apaixonada por pequenos negócios nas redes sociais.
                Com uma formação sólida em marketing e experiência no campo da
                mídia social, desenvolvi uma abordagem centrada no branding para
                ajudar marcas a se destacarem em um mercado cada vez mais
                competitivo.
              </p>
              {/* Abaixo pode dividir o sobre mim colocando o valor de 2 na lg:grid-cols-2 caso fique com o valor de 1, ele pega a tela inteira por extenso. */}
              <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <p className="text-base md:text-lg  text-[#6b5d4f] leading-relaxed">
                  Sou uma profissional dedicada e entusiasmada que se orgulha de
                  oferecer serviços de alta qualidade e resultados excepcionais
                  no campo do marketing digital e das mídias sociais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
