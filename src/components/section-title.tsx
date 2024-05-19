import type { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="font-light text-primary">{children}</h3>;
};

export { SectionTitle };

