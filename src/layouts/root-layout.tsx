import type { ReactNode } from "react";

import { Menu, Providers } from "@/components";

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Providers>
      <div className="mx-5 md:mx-0">
        <div className="container mx-auto transition-all duration-300">
          <Menu />
          {children}
        </div>
      </div>
    </Providers>
  );
};

export { RootLayout };
