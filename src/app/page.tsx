import Hero from "@/components/hero";
import SocialQuote from "@/components/socials_quote";
import SkillsComp from "@/components/skills";
import ProjectsComp from "@/components/projects";
import FaqComp from "@/components/faq";
import ContactComp from "@/components/contact";
export default function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <SocialQuote />
      <SkillsComp />
      <ProjectsComp />
      <FaqComp />
      <ContactComp />
    </div>
  );
}
