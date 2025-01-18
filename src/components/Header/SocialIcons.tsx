import Tiktok from '../../imagens/tiktok.png'
import Facebook from '../../imagens/face.png'
import Twitch from '../../imagens/twitch.png'
import Instagram from '../../imagens/insta.png'
import YouTube from '../../imagens/yt.png'

export const SocialIcons = () => {
  const socialIcons = [
    { src: Tiktok, alt: 'Tiktok'  },
    { src: Facebook, alt: 'Facebook' },
    { src: Twitch, alt: 'Twitch' },
    { src: Instagram, alt: 'Instagram' },
    { src: YouTube, alt: 'YouTube' },
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
