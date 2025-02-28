// Pages/About.tsx

import { motion } from "framer-motion";
import DrawMe from "../components/DrawMe";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";

type ItemType = {
  duration: string;
  company: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const AboutItem = ({ item, index }: { item: ItemType; index: number }) => {
  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-8 md:flex-row md:justify-end"
      initial={{ opacity: 0, y: 100 }}
      key={index}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="md:text-xl font-bold opacity-70 whitespace-nowrap pointer-events-none">
        {item.duration}
      </h1>
      <div>
        <div className="w-full md:max-w-[50vw] group outline-2 transition-all outline-[rgba(255,215,0,0.5)]  hover:outline outline-offset-[1rem] rounded">
          <Link target="_blank" to={item.link}>
            <h1 className="text-base md:text-3xl font-bold whitespace-nowrap group-hover:opacity-100 opacity-80 pb-4">
              <span>{item.title}</span>
              <span>{" • "}</span>
              <span>{item.company}</span>
            </h1>
            <p className="md:text-xl group-hover:opacity-80 opacity-70">
              {item.description}
            </p>
            <div className="group-hover:opacity-100 opacity-50 mt-4 flex flex-row justify-start gap-x-2 gap-y-2 flex-wrap">
              {item.tags.map((tag, index_item) => (
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, scale: 0 }}
                  key={index_item}
                  transition={{ duration: 0.5, delay: index_item * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <Tag content={tag} />
                </motion.div>
              ))}
            </div>
            -
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const items = [
    {
      duration: "Spring 2024 - Present",
      company: "Isover (Saint-Gobain)",
      title: "Principal full-stack",
      description:
        "I am currently working as the full-stack developer at Isover, a company that specializes in insulation solutions. My role involves developing web applications to help the company improve his visibility on their products with a physical prediction model and a web app.",
      tags: [
        "Flask",
        "Python",
        "Redis",
        "PostgreSQL",
        "Docker",
        "JavaScript",
        "React.js",
        "Web",
        "Tailwind",
      ],
      link: "https://www.isover.fr/",
    },
    {
      duration: "Summer 2024 - Autumn 2024",
      company: "PerfMgr",
      title: "Principal full-stack",
      description:
        "I was responsible for developing the company's web application from scratch. I was involved in all stages of the development process, from planning and design to implementation and deployment. The objective was to make a web app that could help companies to monitor their resources and improve their performances. I was also in charge of the infrastructure.",
      tags: [
        "JavaScript",
        "Next.js",
        "Python",
        "Django",
        "DRF",
        "Web",
        "Tailwind",
        "Redis",
        "PostgreSQL",
        "Docker",
      ],
      link: "https://www.perfmgr.com/",
    },
    {
      duration: "Spring 2024 - Summer 2024",
      company: "BETC",
      title: "Front-end Engineer",
      description:
        "As a front-end engineer at BETC, I have been responsible for developing websites of various scales, from luxury brands to big corporations. I have also been involved in the development of specials projects, such as interactive experiences and web applications with headless CMS.",
      tags: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Web",
        "SASS",
        "Tailwind",
        "Framer Motion",
        "Web GL",
        "Drupal",
        "Strapi",
      ],
      link: "https://betcfullsix.com/",
    },
    {
      duration: "Winter 2022 - Winter 2023",
      company: "ExxactRobotics",
      title: "Data Engineer",
      description:
        "At ExxactRobotics as data engineer, I played a crucial role in optimizing data processing pipelines. By refactoring the pipelines in Python and automating processes with tools such as Jenkins, Azure, Minio, ZenML, Kubernetes (K8s), and Ansible, we were able to dramatically speed up data processing. In fact, our code enabled speeds up to 30 times faster than before. This significant improvement in data processing speed had a direct impact on the overall efficiency of the company, reducing wait times and enabling quicker decision-making.",
      tags: [
        "Python",
        "AI",
        "Docker",
        "Kubernetes",
        "MLOps",
        "Databases",
        "Cloud",
      ],
      link: "https://exxact-robotics.com/",
    },
    {
      duration: "Summer 2022 - Winter 2022",
      company: "AGCO",
      title: "Software Engineer (Intern)",
      description:
        "As a software engineering intern at AGCO, I developed various software solutions to support agricultural machinery. My work included developing user interfaces and optimizing software performance for better user experiences.",
      tags: ["C++", "Qt", "Embedded"],
      link: "https://www.agcocorp.fr/",
    },
    {
      duration: "2018 - 2022",
      company: "Colombbus and Play'n'Prog",
      title: "Full-stack developer",
      description:
        "My role as a full-stack developer at Colombbus and Play'n'Prog involved developing educational games and platforms to teach programming. I was responsible for developing the front-end and back-end of the platforms, as well as creating engaging and interactive lessons that made complex concepts accessible and fun. I was also in charge of giving workshops to young learners",
      tags: ["JavaScript", "TypeScript", "Education", "Scratch"],
      link: "https://www.colombbus.org/",
    },
    {
      duration: "2020 - 2022",
      company: "École 42",
      title: "Student",
      description:
        "Studying at École 42 has provided me with a strong foundation in software engineering, including but not limited to algorithms, data structures, and low-level programming. The school's project- based, peer-to-peer learning environment has also equipped me with excellent problem-solving and teamwork skills.",
      tags: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Swift",
        "C++",
        "C",
        "Docker",
        "Web",
        "Mobile",
        "Django",
        "Node.js",
        "Databases",
      ],
      link: "https://42.fr/",
    },
    {
      duration: "2017 - 2020",
      company: "University of Paris",
      title: "Student",
      description:
        "My computer science degree at Université Paris 7 provided a solid grounding in programming, computer science, and databases. The curriculum also included a strong mathematical component, which has been invaluable in my coding projects.",
      tags: ["Java", "C", "Python", "Web", "Databases", "Mathematics"],
      link: "https://u-paris.fr/",
    },
  ];

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="text-white h-full min-h-screen w-full px-12 md:px-20"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
    >
      <div className="h-16 overflow-hidden mb-14 md:mb-24">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl text-center font-bold"
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1 }}
        >
          ABOUT
        </motion.h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl pb-4">
            Few things about me
          </h1>
          <p className="text-xl">
            Hi, my name is Julien. I grew up and live in Paris. I started
            programming at the University of Paris, where I studied computer
            science. After the pandemic, I joined École 42 to deepen my
            knowledge in software engineering. I completed various projects in
            different languages, especially in Python and JavaScript, and I
            currently work as a freelance (or not) developer.
          </p>
        </div>
        <div className="relative min-w-[50vw] w-full">
          <img
            alt="random"
            draggable="false"
            loading="lazy"
            src="/profil.jpg"
          />
          <div className="z-30 absolute md:left-[35%] md:-top-[10%] left-[20%] -top-[25%]">
            <DrawMe />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl mt-20 mb-8">Experience</h1>
      <div className="flex flex-col gap-14">
        {items.map((item, index) => (
          <AboutItem index={index} item={item} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default About;
