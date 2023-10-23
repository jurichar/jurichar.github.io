import "./Thanks.scss";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useState, useRef } from "react";

const customIcon = () => {
  return (
    <div className="Icon">
      <a href={"https://www.malt.fr/profile/jurichar"} target="_blank" rel="noopener noreferrer">
        <div className="Icon--custom">
          <div className="Icon--custom--image">
            <svg className="Icon--custom--svg" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.126 8.8757C24.7333 6.48301 22.1774 8.03164 20.5778 9.63118L5.46756 24.742C3.86802 26.3413 2.19381 28.7715 4.71208 31.2894C7.23034 33.8082 9.66053 32.1337 11.2597 30.5341L26.3703 15.4237C27.9699 13.824 29.5185 11.2681 27.126 8.8757Z" />
              <path d="M12.6898 8.25682L15.8893 11.4562L19.1461 8.19947C19.3672 7.97785 19.5917 7.77218 19.8176 7.57822C19.4765 5.85751 18.4947 4.30192 15.8878 4.30192C13.276 4.30192 12.2954 5.86362 11.9562 7.58806C12.2 7.79899 12.4434 8.01043 12.6898 8.25682Z" />
              <path d="M19.1442 32.023L15.8895 28.7681L12.6916 31.9657C12.4488 32.2087 12.2071 32.4306 11.9665 32.6392C12.3332 34.3933 13.3711 36 15.8882 36C18.4118 36 19.4483 34.3847 19.8127 32.6249C19.5888 32.4323 19.3649 32.2435 19.1442 32.023Z" />
              <path d="M11.3327 16.013H5.16431C2.90262 16.013 0 16.7256 0 20.109C0 22.6335 1.61583 23.6702 3.3759 24.0343C3.58429 23.7937 11.3327 16.013 11.3327 16.013Z" />
              <path d="M28.4128 16.1773C28.2176 16.4044 20.4529 24.2047 20.4529 24.2047H26.5338C28.7956 24.2047 31.6981 23.6703 31.6981 20.109C31.6981 17.4975 30.1369 16.5164 28.4128 16.1773Z" />
              <path d="M13.3538 13.9883L14.4558 12.8863L11.2582 9.6882C9.6585 8.08883 7.22864 6.41445 4.71038 8.93272C2.86376 10.7793 3.27392 12.5766 4.25339 14.0356C4.55171 14.0135 13.3538 13.9883 13.3538 13.9883Z" />
              <path d="M18.4239 26.2295L17.319 27.3344L20.5761 30.5912C22.1757 32.1909 24.7316 33.7392 27.124 31.3468C28.9091 29.5615 28.4995 27.6863 27.5126 26.1842C27.1949 26.2071 18.4239 26.2295 18.4239 26.2295Z" />
            </svg>
          </div>
          <div className="Icon--custom--text">
            my malt profile
          </div>
        </div>
      </a >
    </div >
  );
}

const icon = (name: IconProp, link: string, title: string) => {
  return (
    <div className="Icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={name} size="xl" />
        {title}
      </a>
    </div>
  );
};

const Thanks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const thanksRef = useRef(null);

  useIntersectionObserver(thanksRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  return (
    <header
      id="thanks"
      ref={thanksRef}
      className={`Thanks-header ${isVisible ? "animate" : ""}`}
    >
      <div className="Thanks">
        <div className="Thanks--content">
          <h1 className="title">
            Thank you for scrolling this far!
          </h1>
          <br />
          <p>
            You can find me on:
          </p>
          <div className="separator">
            <div className="buttons">
              {icon(faGithubSquare, "https://github.com/jurichar/", "my github profile")}
              {icon(faLinkedin, "https://www.linkedin.com/in/julien-rchd/", "my linkedin profile")}
              {customIcon()}
              {icon(
                faFileAlt,
                "https://github.com/jurichar/cv/blob/main/CV_FR.pdf"
                , "my resume in french")}
              {icon(
                faFileAlt,
                "https://github.com/jurichar/cv/blob/main/CV_EN.pdf"
                , "my resume in english")}

            </div>
          </div>
        </div>
        <p className="Thanks-message">You can also contact me by scrolling one more time</p>
      </div>
    </header>
  );
};

export default Thanks;