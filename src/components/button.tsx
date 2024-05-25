import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cn } from "@/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "border-[0.8px] border-secondary hover:border-primary text-secondary hover:text-primary transition-colors duration-400 ease-in-out rounded-full text-sm h-10 font-light w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

