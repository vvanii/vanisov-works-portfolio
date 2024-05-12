import type { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className='text-3xl font-semibold'>{children}</h3>;
};

export { SectionTitle };
