
export const SocialIcons = () => {
  const socialIcons = [
    { src: '../src/imagens/tiktok.svg', alt: 'TikTok' },
    { src: '../src/imagens/face.svg', alt: 'Facebook' },
    { src: '../src/imagens/twitch.svg', alt: 'Twitch' },
    { src: '../src/imagens/insta.svg', alt: 'Instagram' },
    { src: '../src/imagens/yt.svg', alt: 'YouTube' },
  ];

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center w-full z-20">
      {socialIcons.map((icon, index) => (
        <div
          key={index}
          className="w-20 md:w-32 h-20 md:h-32 flex items-center justify-center"
          style={{
            transform: `translateY(${
              index === 2 ? '40px' : index % 4 === 0 ? '-30px' : '20px'
            })`,
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
            }}
          />
        </div>
      ))}
    </div>
  );
};