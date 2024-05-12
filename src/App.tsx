import { Navbar } from "@components"
import { Hero } from "@components/hero"
import { MainLayout } from "@layouts"

function App() {
  return (
    <>
      <MainLayout>
<Navbar />
        <div className="mt-20">
        <Hero />
        </div>
      </MainLayout>
    </>
  )
}

export default App
