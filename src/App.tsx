import { Navbar, Projects } from "@/components";
import { MainLayout } from "@/layouts";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <h1 className="mt-52 max-w-screen-xl">
        Web-developer. Creative Designer. Digital Architect. Coffee Connoisseur.
      </h1>
      <div className="mt-40">
        <Projects />
      </div>
    </MainLayout>
  );
}

export default App;

