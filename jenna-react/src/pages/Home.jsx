import Brands from "../components/Brands";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import HomePagdData from "../data/HomePagdData.json";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    experience,
    testimonial,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
