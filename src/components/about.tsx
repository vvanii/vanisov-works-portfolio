import { FC } from "react";

import { RouteLink, SectionTitle } from "@/components";

export const About: FC = () => (
  <div>
    <SectionTitle anchored>About</SectionTitle>
    <div className="mt-20 max-w-xl mx-auto">
      <p className="text-[22px] mb-5">
        Hey, I'm Vlad! As a seasoned professional in web development, I
        specialize in crafting web interfaces and applications that are both
        intuitive and visually compelling. My expertise lies in creating
        seamless digital experiences, and I have a proven track record of
        leveraging cutting-edge technologies to deliver exceptional results. I'm
        committed to continuous learning and innovation, always striving to
        elevate my craft and stay ahead in this ever-evolving field.
      </p>
      <RouteLink href={"/about"}>Learn More.</RouteLink>
    </div>
  </div>
);

