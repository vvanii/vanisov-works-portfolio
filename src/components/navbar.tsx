import type { FC } from "react"
import { Menu } from "./menu"

const Navbar: FC = () => {

  return (
    <div className="font-semibold text-xl flex justify-between pt-5 mx-5 md:mx-0 bg-fixed">
      <button>Vlad Anisov</button>
      <Menu />
    </div>
  )
}

export { Navbar}
