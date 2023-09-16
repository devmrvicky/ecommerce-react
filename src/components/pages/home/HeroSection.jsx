import HeroContent from "./HeroContent";
import CategoriesList from "./CategoriesList";

const HeroSection = () => {
  return (
    <section className="hero w-full flex mb-3">
      <CategoriesList />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
