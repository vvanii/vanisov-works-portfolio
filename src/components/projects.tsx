import { Project } from "@types";

import { ProjectItem } from "./project-item";
import { SectionTitle } from "./section-title";

const Projects = () => {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="mb-10"
          >
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

const projects: Project[] = [
  {
    name: "Liya Melnichuk Portfolio",
    company: "Freelance",
    image: "/images/liyamelnichuk-ss.jpeg",
    url: "https://liyamelnichuk.com",
  },
];

export { Projects };

