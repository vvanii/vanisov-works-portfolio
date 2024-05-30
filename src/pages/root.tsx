import { About, Navbar, Projects } from "@/components";

export const Root = () => (
  <>
    <Navbar />
    <h1 className="mt-52 max-w-screen-xl">
      Web-developer. Creative Designer. Digital Architect. Coffee Connoisseur.
    </h1>
    <div
      className="space-y-20 mt-40"
      id="sections"
    >
      <Projects />
      <About />
    </div>
  </>
);

