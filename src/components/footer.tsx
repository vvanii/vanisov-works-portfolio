import type { FC, HTMLAttributes } from "react";

import { cn, currentYear } from "@/utils";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

const Footer: FC<Props> = ({ className, ...props }) => (
  <p
    className={cn("text-secondary text-sm md:text-[16px]", className)}
    {...props}
  >
    &copy; Vlad Anisov {currentYear()}. All rights reserved.
  </p>
);

export { Footer };

