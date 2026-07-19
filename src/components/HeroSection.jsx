import LeftMenu from "./LeftMenu";
import RightHero from "./RightHero";

const HeroSection = () => {
  return (
    <div className="bg-red-700   py-2 flex gap-2 min-w-xs max-h-[89vh] ">
      <LeftMenu />
      <div className="rightHeroContainer w-[85%] bg-blue-950 rounded-md overflow-y-auto flex flex-col gap-1 ">
        <RightHero />
        <RightHero />
        <RightHero />
        <RightHero />
        <RightHero />
      </div>
    </div>
  );
};
export default HeroSection;
