import { motion } from "framer-motion";
import type { FC } from "react";

import { NavItem } from "./nav-item";

const Menu: FC = () => {
  return (
    <div>
      <NavItem>Menu</NavItem>
      <motion.div
        className="fixed"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export { Menu };

