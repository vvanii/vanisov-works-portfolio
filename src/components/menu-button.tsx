import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { cn } from "@/utils";

interface Props extends ButtonHTMLAttributes<Props> {
  children: ReactNode;
  className?: string;
}

const MenuButton: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "group relative z-0 flex h-[39px] items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-center font-semibold text-primary transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-accent before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-100",
        className
      )}
      style={{
        backgroundColor: "rgba(188, 188, 188, 0.3)",
        backdropFilter: "blur(10px)",
      }}
      {...props}
    >
      <div className="flex items-center">{children}</div>
    </button>
  );
};

export { MenuButton };
