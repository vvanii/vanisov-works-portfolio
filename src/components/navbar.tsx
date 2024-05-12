import type { FC } from "react";
import { Menu } from "./menu";

const Navbar: FC = () => {
  return (
    <div className='mx-5 flex justify-between bg-fixed pt-5 text-xl font-semibold md:mx-0'>
      <button>Vlad Anisov</button>
      <Menu />
    </div>
  );
};

export { Navbar };
