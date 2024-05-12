import { useState, type FC } from "react";
import { motion } from "framer-motion";

const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <button onClick={toggleMenu}>Menu</button>
      {isMenuOpen && (
        <motion.div className="fixed" 
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export { Menu }
