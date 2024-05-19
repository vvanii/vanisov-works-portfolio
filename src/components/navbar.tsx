import type { FC } from "react";

import { NavItem } from "@components";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between bg-fixed pt-10 text-xl font-medium">
      <NavItem href="/">Vlad Anisov</NavItem>
      <NavItem>Contact</NavItem>
    </div>
  );
};

export { Navbar };

