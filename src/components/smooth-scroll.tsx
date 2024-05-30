import type { ReactNode } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }: { children: ReactNode }) => (
  <ReactLenis root>{children}</ReactLenis>
);

export { SmoothScroll };

