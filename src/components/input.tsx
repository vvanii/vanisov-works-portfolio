import {
  forwardRef,
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "border-[0.8px] text-[14px] font-light placeholder:text-light border-light/60 h-10 pl-4 rounded-md w-full",
          "focus:outline-none focus:border-light transition duration-300 ease-in-out focus:shadow-inner",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "border-[0.8px] text-[14px] font-light placeholder:text-light border-light/60 h-10 pl-4 rounded-md w-full items-center",
          "focus:outline-none focus:border-light transition duration-300 ease-in-out focus:shadow-inner leading-5 pt-2",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

interface SelectionProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Selection: FC<SelectionProps> = ({ className, children, ...props }) => {
  return (
    <select
      className={cn(
        "border-[0.8px] text-[14px] font-light placeholder:text-light border-light/60 h-10 pl-4 rounded-md w-full",
        "focus:outline-none focus:border-light transition duration-300 ease-in-out focus:shadow-inner",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export { Input, Textarea, Selection };

