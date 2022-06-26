import generator from "../img/generator.png";
import weather from "../img/weather.png";
import timer from "../img/timer.png";

import { openInNewTab } from "../util/events";

import "../style/Projects.css";

const projectProp = {
  projects: [
    {
      cName: "genIMG",
      src: generator,
      width: "570",
      height: "370",
      url: "https://jordan-liubenov.github.io/Password-Generator/",
    },
    {
      cName: "weatherIMG",
      src: weather,
      width: "570",
      height: "370",
      url: "https://jordan-liubenov.github.io/Weather-App/",
    },
    {
      cName: "timerIMG",
      src: timer,
      width: "570",
      height: "370",
      url: "https://jordan-liubenov.github.io/Focus-Timer/",
    },
  ],
  alt: "Something seems missing...",
};

const Projects = () => {
  return (
    <div className="projectContainer">
      <section id="Projects">
        <h1 className="proj">My Projects</h1>

        <div className="projects">
          {projectProp.projects.map((project) => (
            <div key={project.cName} className="project">
              <img
                className={project.cName}
                src={project.src}
                width={project.width}
                height={project.height}
                alt={projectProp.alt}
                onClick={() => openInNewTab(project.url)}
              ></img>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
