import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const Container = () => {
  return (
    <div className="w-[90%] m-auto mt-2 shrink-0">
      <Navbar />
      <HeroSection />
    </div>
  );
};
export default Container;
