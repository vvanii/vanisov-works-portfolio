import type { FC, LinkHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/utils";

interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
}

const RouteLink: FC<Props> = ({ children, href, className, ...props }) => (
  <Link
    className={cn("group group relative cursor-pointer text-[20px]", className)}
    to={href || ""}
    {...props}
  >
    {children}
    <div className="absolute -bottom-0.5 h-0.5 w-0 rounded-full bg-primary transition-all duration-[700ms] ease-in-out group-hover:w-full" />
  </Link>
);

export { RouteLink };
