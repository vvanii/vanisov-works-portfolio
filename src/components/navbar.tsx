import { useRef, type FC } from "react";

import { NavItem } from "@/components";

import { Contact } from "./contact";
import { Dialog, DialogHandle } from "./dialog";

const Navbar: FC = () => {
  const dialogRef = useRef<DialogHandle>(null);

  const openDialog = () => {
    dialogRef.current?.open();
  };

  return (
    <div className="flex justify-between bg-fixed w-full pt-10 text-xl font-medium">
      <NavItem href="/">Vlad Anisov</NavItem>
      <NavItem onClick={openDialog}>Contact</NavItem>
      <Dialog ref={dialogRef}>
        <Contact />
      </Dialog>
    </div>
  );
};

export { Navbar };

