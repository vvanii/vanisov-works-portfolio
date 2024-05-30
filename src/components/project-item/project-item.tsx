import type { FC } from "react";

import type { Project } from "@/types";

import "./project-item.style.css";

interface Props {
  project: Project;
}

const ProjectItem: FC<Props> = ({ project }) => (
  <div className="relative flex rounded-lg text-center w-full group cursor-pointer hover-zoom">
    <a
      href={project.url}
      target="_blank"
      className="size-max inset-0 bg-[#edebe8] rounded-lg pt-16 pb-5 px-10 w-full"
    >
      <div className="flex max-w-md">
        <img
          src={project.image}
          alt={project.name}
          className="size-full object-contain rounded-md transition duration-500 group-hover:-translate-y-2.5"
        />
      </div>
      <div className="mt-20 flex justify-between">
        <p className="font-light text-secondary text-sm">{project.name}</p>
        <p className="font-light text-light text-sm">{project.company}</p>
      </div>
    </a>
  </div>
);

export { ProjectItem };

