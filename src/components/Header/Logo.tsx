import DcLogo from "../../imagens/logo.png"

export const Logo = () => {
  return (
    <div className="w-full max-w-[200px] md:max-w-[400px]   ">
      <img
        src={DcLogo}
        alt="Débora Cristina"
        className="h-[200px] md:h-[300px] mb-16 mt-0  object-contain"
      />
    </div>
  );
};