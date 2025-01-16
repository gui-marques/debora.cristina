import React from 'react';
import { Logo } from './Logo';
import { SocialIcons } from './SocialIcons';

export const Header = () => {
  return (
    <header className="relative min-h-screen bg-[#E5D5C5] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 py-1 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-0 z-10">
            <Logo />
            <div className="space-y-2">
              <div className="flex flex-row space-x-2">
                <p className="text-xl bold uppercase mr-2 tracking-wider text-[#4a3728]">
                  MINHA MISSÃO
                </p>
                <img
                  src="/src/imagens/traco.png"
                  alt="linha"
                  className="w-[200px] md:w-[400px] h-[6px] self-center"
                />
              </div>
              <h1 className="text-3xl md:text-2xl lg:text-5xl font-light text-[#4a3728] leading-relaxed">
                Ajudar pequenos
                <br />
                negócios através das redes
                <br />a se tornarem{' '}
                <span className="text-[#b08968]">grandes</span>
              </h1>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] mt-0 lg:mt-0">
            <img
              src="/src/imagens/db.svg"
              alt="Débora Cristina"
              className="absolute bottom-0 right-[100px] lg:right-[200px] h-[380px] md:h-[480px] object-contain z-10"
            />
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
};
