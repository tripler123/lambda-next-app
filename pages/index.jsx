import BasicLayout from "../layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Feactures from "../components/Feactures";
import Comments from "../components/Comments";
import Courses from "../components/Courses";
import Experiences from "../components/Experiences";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Seo />
      <BasicLayout>
        <Hero
          lambda={"assets/images/lambda-big.svg"}
          image={"assets/images/cursos-hero.svg"}
        />
        <Feactures />
        <Comments />
        <Courses />
        <Experiences />
        <Contact />
      </BasicLayout>
    </>
  );
}
