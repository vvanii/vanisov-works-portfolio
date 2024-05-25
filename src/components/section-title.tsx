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
    return text.toLowerCase().replace(" ", "-");
  };

  useEffect(() => {
    setAnchorTarget(
      document.getElementById(generateAnchor(children as string))
    );
  }, [children]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      {anchored ? (
        <div
          style={{
            marginLeft: "-20px",
          }}
        >
          <div
            onMouseEnter={() => setIsHashtagVisible(true)}
            onMouseLeave={() => setIsHashtagVisible(false)}
            className="block relative"
            style={{ paddingLeft: "20px" }}
          >
            {isHashtagVisible && (
              <a
                href={`#${generateAnchor(children as string)}`}
                onClick={handleClick}
                className="text-light text-xl absolute -ml-4"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                #
              </a>
            )}
            <h3
              id={generateAnchor(children as string)}
              className={cn("font-light text-primary", className)}
              {...props}
            >
              {children}
            </h3>
          </div>
        </div>
      ) : (
        <h3
          className={cn("font-light text-primary", className)}
          {...props}
        >
          {children}
        </h3>
      )}
    </>
  );
};

export { SectionTitle };

