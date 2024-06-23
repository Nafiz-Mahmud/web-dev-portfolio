import HeroMobile from "./heroMobile";
import HeroDesktop from "./heroDesktop";
export default function Hero() {
  return (
    <div className="hero">
      <HeroMobile />
      <HeroDesktop />
    </div>
  );
}
