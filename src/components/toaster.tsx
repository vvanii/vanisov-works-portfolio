import type { FC } from "react";
import { Toaster as ToasterPrimitive } from "react-hot-toast";

import { CircleCloseIcon } from "./icons";

const Toaster: FC = () => (
  <ToasterPrimitive
    position="top-center"
    toastOptions={{
      className: "bg-background text-primary font-light",
      error: {
        icon: <CircleCloseIcon className="h-5 w-5" />,
      },
    }}
  />
);

export { Toaster };

