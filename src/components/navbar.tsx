import { useRef, type FC } from "react";

import { Contact, Dialog, DialogHandle, RouteLink } from "@/components";

const Navbar: FC = () => {
  const dialogRef = useRef<DialogHandle>(null);

  const openDialog = () => {
    dialogRef.current?.open();
  };

  return (
    <div className="flex justify-between bg-fixed w-full pt-10 text-xl font-medium">
      <RouteLink href="/">Vlad Anisov</RouteLink>
      <RouteLink onClick={openDialog}>Contact</RouteLink>
      <Dialog ref={dialogRef}>
        <Contact />
      </Dialog>
    </div>
  );
};

export { Navbar };

