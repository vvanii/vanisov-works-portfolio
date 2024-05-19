import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className='mx-5 md:mx-0'>
      <div className='container mx-auto transition-all duration-300'>
        {children}
      </div>
    </div>
  );
};

export { MainLayout };

