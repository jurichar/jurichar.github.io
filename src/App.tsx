import "./App.scss";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Project_1 from "./components/Projects/Project_0/Project_0";
import About from "./components/About/About";
import Techs from "./components/Techs/Techs";
import { aboutData } from "../src/data/about.json";
import { projectsData } from "../src/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import Project_0 from "./components/Projects/Project_0/Project_0";
import Project_2 from "./components/Projects/Project_2/Project_2";

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <div className="content" id="content" onScroll={handleScroll}>
        <a
          href="#"
          className={`back-to-top ${showArrow ? "visible" : "hidden"}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} size="2xl" />
        </a>
        <Home />
        <About data={aboutData} />
        <Project_0 data={projectsData} />
        <Project_1 data={projectsData} />
        <Project_2 data={projectsData} />
        <Techs />
        <Contact />
        <Contact />
      </div>
      <Analytics />
    </>
  );
};

export default App;
