import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import RightHero from "./RightHero";

const HeroSection = () => {
  return (
    <div className="py-2 flex gap-2 min-w-xs max-h-[89vh] ">
      <LeftMenu />
      <div className="rightHeroContainer w-[85%] bg-[#121212] rounded-md overflow-y-auto flex flex-col gap-1 ">
        <RightHero />
        <RightHero />
        <RightHero />
        <RightHero />
        <RightHero />
        <Footer />
      </div>
    </div>
  );
};
export default HeroSection;
