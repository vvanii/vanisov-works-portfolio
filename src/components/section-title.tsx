import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/utils";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  anchored?: boolean;
  children: ReactNode;
}

const SectionTitle: FC<Props> = ({
  children,
  anchored,
  className,
  ...props
}) => {
  const [isHashtagVisible, setIsHashtagVisible] = useState<boolean>(false);
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  const generateAnchor = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    setAnchorTarget(
      document.getElementById(generateAnchor(children as string))
    );
  }, [children]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    anchorTarget: HTMLElement | null,
    children: React.ReactNode
  ): void => {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    window.history.pushState(
      null,
      "",
      `#${generateAnchor(children as string)}`
    );
  };

  if (anchored) {
    return (
      <div
        className="w-fit"
        style={{
          marginLeft: "-30px",
        }}
      >
        <div
          onMouseEnter={() => setIsHashtagVisible(true)}
          onMouseLeave={() => setIsHashtagVisible(false)}
          className="block relative group py-4 pr-4"
          style={{ paddingLeft: "30px" }}
        >
          <AnimatePresence>
            {isHashtagVisible && (
              <motion.a
                key="hashtag"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                href={`#${generateAnchor(children as string)}`}
                onClick={(event) => handleClick(event, anchorTarget, children)}
                className={cn("text-light text-xl absolute -ml-4")}
              >
                #
              </motion.a>
            )}
          </AnimatePresence>
          <h3
            id={generateAnchor(children as string)}
            className={cn("font-light text-primary", className)}
            {...props}
          >
            {children}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <h3
      className={cn("font-light text-primary", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export { SectionTitle };

