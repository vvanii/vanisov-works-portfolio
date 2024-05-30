import { FC } from "react";

import { RouteLink } from "@/components";

const About: FC = () => (
  <>
    <div className="container mx-auto mt-20 max-w-md lg:max-w-3xl">
      <p className="mb-5 text-[18px] md:text-[22px]">
        Hey, I'm Vlad. A seasoned professional in web development that
        specializes in crafting web interfaces and applications that are both
        intuitive and visually compelling. My expertise lies in creating
        seamless digital experiences, and I have a proven track record of
        leveraging cutting-edge technologies to deliver exceptional results. I'm
        committed to continuous learning and innovation, always striving to
        elevate my craft and stay ahead in this ever-evolving field.
      </p>
      <RouteLink
        href={"/about"}
        className="font-semibold"
      >
        Learn More.
      </RouteLink>
    </div>
  </>
);

export { About };
