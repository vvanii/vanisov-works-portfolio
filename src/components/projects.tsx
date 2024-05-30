import type { FC } from "react";

import { ProjectItem } from "@/components";
import { Project } from "@/types";

const Projects: FC = () => (
  <section>
    <div className="mt-20 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-span-1 gap-5 mx-auto justify-center">
      {projects.map((project, i) => (
        <div key={i}>
          <ProjectItem project={project} />
        </div>
      ))}
    </div>
  </section>
);

export { Projects };

const projects: Project[] = [
  {
    name: "Liya Melnichuk Portfolio",
    company: "Freelance",
    image: "/images/liya-melnichuk-ss.jpeg",
    url: "https://liyamelnichuk.com",
  },
  {
    name: "Portrait By Alina",
    company: "Freelance",
    image: "/images/portrait-by-alina-ss.jpeg",
    url: "https://portraitbyalina.com",
  },
  {
    name: "Propser Plan",
    company: "Freelance",
    image: "/images/prosper-plan-ss.jpeg",
    url: "https://prosperplan.com",
  },
  {
    name: "First Leads",
    company: "First Leads Generation",
    image: "/images/first-leads-ss.jpeg",
    url: "https://firstleads.ai",
  },
];

