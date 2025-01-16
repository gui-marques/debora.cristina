import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#4a3728] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <img src="/src/imagens/logo.png" alt="Logo" className="h-16 mb-6" />
            <p className="text-sm text-gray-300 mb-4">
              Transformando pequenos negócios em grandes marcas através do marketing digital.
            </p>
            <p className="text-sm text-gray-300">
              CNPJ: 12.345.678/0001-90
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <a href="mailto:contato@deboracristina.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                <span>contato@deboracristina.com</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+55 (41) 98481-5923</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl flex  justify-center font-semibold mb-6">Redes Sociais</h3>
            <div className="flex  justify-center gap-4">
              <a href="https://www.instagram.com/dbora.cristiina" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08968] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08968] transition-colors">
                <Facebook size={24} />
              </a>
                {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b08968] transition-colors">
                  <Youtube size={24} />
                </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Débora Cristina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};