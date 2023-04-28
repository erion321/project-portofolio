import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Paint.app",
    imgSrc: "project-imgs/crypto-market.png",
    code: "https://github.com/erion321/Crypto-Market",
    projectLink: "https://cryptomarket101.netlify.app/",
    tech: ["React", "Redux Toolkit", "Scss"],
    description:
      "In this app you can watch and experiment with your favorite crypto trades",
    modalContent: (
      <p>
        The purpose of this app is for the user to watch and store his favorite
        crypto coins. The app gets data from an API. I build this app in react,
        i have used scss for styling and redux toolkit for sending data across
        different components and handeling async functions. Some of the design
        and funcionality is taken from CoinMarketCap.
      </p>
    ),
  },
  {
    title: "Multi Step Form",
    imgSrc: "project-imgs/multi-step-form.png",
    code: "https://github.com/erion321/Multi-Step-Form",
    projectLink: "https://multi-step-form23.netlify.app/",
    tech: ["React", "Tailwind"],
    description: "Multi step form where user is purchasing a plan for a game.",
    modalContent: (
      <p>
        This app displays a multi step form where the user is purchasing a plan
        for a game. User can choose between different plans and services monthly
        or yearly. I have build this app in react and i have used Tailwind Css
        for styling. The styling and funcionality is taken from Frontend Mentor
        website.
      </p>
    ),
  },
];
