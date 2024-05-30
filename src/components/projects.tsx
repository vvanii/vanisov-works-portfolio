import type { FC } from "react";

import { Project } from "@/types";

import { ProjectItem } from "./project-item";
import { SectionTitle } from "./section-title";

const Projects: FC = () => {
  return (
    <section>
      <SectionTitle anchored>Projects</SectionTitle>
      <div className="mt-20 grid grid-cols-3">
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
  {
    name: "Portrait By Alina",
    company: "Freelance",
    image: "",
    url: "https://portraitbyalina.com",
  },
  {
    name: "Propser Plan",
    company: "Freelance",
    image: "/",
    url: "https://prosperplan.com",
  },
  {
    name: "First Leads",
    company: "First Leads Generation",
    image: "/",
    url: "https://firstleads.ai",
  },
];

export { Projects };

