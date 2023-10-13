import "./Home.scss";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useState, useRef } from "react";

const icon = (name: IconProp, link: string) => {
  return (
    <div className="Icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={name} size="xl" />
      </a>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useIntersectionObserver(homeRef, { threshold: 0.5 }, (entry) => {
    console.log("Is intersecting:", entry.isIntersecting);
    setIsVisible(entry.isIntersecting);
  });

  return (
    <header
      ref={homeRef}
      className={`Home-header ${isVisible ? "animate" : ""}`}
    >
      <div id="home" className="Home">
        <div className="Home--image" />
        <div className="Home--content">
          <h1>
            <strong>
              Hi, <br /> I'm Julien Richard
            </strong>
          </h1>
          <br />
          <p>and I'm a fullstack developer.</p>
          <div className="separator"></div>
          <div className="buttons">
            {icon(faGithubSquare, "https://github.com/jurichar/")}
            {icon(faLinkedin, "https://www.linkedin.com/in/julien-rchd/")}
            {icon(
              faFileAlt,
              "https://github.com/jurichar/cv/blob/main/CV_FR.pdf"
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
