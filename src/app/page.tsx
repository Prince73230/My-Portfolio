import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import Education from "./components/homepage/education";
import Skills from "./components/homepage/skills";
import Certificates from "./components/homepage/certificates";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
const page = () => {
  return (
    <div>

      <Hero />
      <About />
      <Education />
      <Certificates />
      <Experience />

      <Skills />
      <Projects />
    </div>
  )
}
export default page;