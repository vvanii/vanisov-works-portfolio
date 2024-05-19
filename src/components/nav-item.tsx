import type { AnchorHTMLAttributes, FC, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
}

const NavItem: FC<Props> = ({ children, href, ...props }) => {
  return (
    <a
      className='group group relative cursor-pointer'
      href={href}
      {...props}
    >
      {children}
      <div className='absolute -bottom-0.5 h-0.5 w-0 rounded-full bg-primary transition-all duration-[700ms] ease-in-out group-hover:w-full' />
    </a>
  );
};

export { NavItem };

