import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, type FC } from "react";

import { MenuButton } from "./menu-button";

const Menu: FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [prevScroll, setPrevScroll] = useState<number>(0);

  function update(prev: number): void {
    if (window.scrollY <= 50) {
      setHidden(true);
      setIsMenuOpen(false);
    } else if (window.scrollY > prev) {
      setHidden(false);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.nav
      className="bg-[rgba(188, 188, 188)] fixed left-0 top-0 z-10 mt-5 flex w-full flex-col items-center justify-center"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="flex">
          <p className="pr-5 transition-colors duration-300 ease-in-out group-hover:text-background">
            Menu
          </p>
          <motion.div
            className="absolute right-1 flex items-center rounded-full border border-primary transition-colors duration-300 ease-in-out group-hover:border-background"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <ChevronDown className="stroke-[1px] transition-colors duration-300 ease-in-out group-hover:text-background" />
          </motion.div>
        </div>
      </MenuButton>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mt-2 flex flex-col items-center space-y-2" // Align menu items vertically
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Delay the animation of the first menu item
            >
              <MenuButton>
                <p>About</p>
              </MenuButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} // Delay the animation of the second menu item
            >
              <MenuButton>
                <p>Projects</p>
              </MenuButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export { Menu };
