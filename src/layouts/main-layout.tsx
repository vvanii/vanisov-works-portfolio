import type { ReactNode } from "react";

const MainLayout = ({children}: {children: ReactNode}): JSX.Element => {
  return (
    <div className="container mx-auto transition-all duration-150">
      {children}
    </div>
  )
}

export { MainLayout}
