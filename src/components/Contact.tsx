import React, { useState } from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        'service_8gigq11', // Substitua pelo seu ID de serviço
        'template_t6zhj3s', // Substitua pelo seu ID de template
        templateParams,
        'SE4zER7_eucQyebIw' // Substitua pela sua chave pública
      )
      .then(
        (response) => {
          console.log('Email enviado com sucesso!', response.status, response.text);
          alert("Email enviado com sucesso!")
          // Limpa os campos do formulário
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.error('Erro ao enviar o email:', error);
        }
      );
  };

  return (
    <section id="contact" className="relative py-16 bg-[#E5D5C5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="absolute top-8 right-8">
          <img src="/src/imagens/logo.png" alt="Logo" className="h-16 opacity-30" />
        </div>
        <div className="flex flex-col max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-light text-[#4a3728] mb-8">Contato</h2>
            <blockquote className="text-3xl text-[#8B6B5D] font-light leading-relaxed">
              "O BOM CONTEÚDO É A MELHOR FERRAMENTA DE VENDAS DO MUNDO."
            </blockquote>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src="/src/imagens/sobre.png"
                alt="Profile"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[#4a3728] font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#b08968]/20 focus:outline-none focus:ring-2 focus:ring-[#b08968]/50 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[#4a3728] font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#b08968]/20 focus:outline-none focus:ring-2 focus:ring-[#b08968]/50 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[#4a3728] font-medium">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#b08968]/20 focus:outline-none focus:ring-2 focus:ring-[#b08968]/50 transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[#4a3728] font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/80 border border-[#b08968]/20 focus:outline-none focus:ring-2 focus:ring-[#b08968]/50 transition-all duration-300 resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-[#b08968] to-[#4a3728] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar mensagem</span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dbora.cristiina"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] rounded-2xl shadow-lg flex items-center justify-center hover:rotate-6 transition-all duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
            <a
              href="https://wa.me/5541984815923?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os!"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl shadow-lg flex items-center justify-center hover:-rotate-6 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
