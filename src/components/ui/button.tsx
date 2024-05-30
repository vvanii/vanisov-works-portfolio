import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cn } from "@/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "h-10 w-full rounded-full border-[0.8px] border-secondary text-sm font-light text-secondary transition-colors duration-400 ease-in-out hover:border-primary hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
