import { About, Footer, Navbar, Projects } from "@/components";

const Root = () => (
  <>
    <Navbar />
    <h1 className="mt-52 max-w-screen-xl">
      Web-developer. Creative Designer. Digital Architect. Coffee Connoisseur.
    </h1>
    <div
      className="mt-60 space-y-40"
      id="sections"
    >
      <Projects />
      <About />
    </div>
    <div className="mx-auto mb-5 mt-32 flex max-w-md lg:max-w-3xl">
      <Footer />
    </div>
  </>
);

export { Root };
