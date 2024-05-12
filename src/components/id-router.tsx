import { useState, type ReactNode} from "react";
import { motion } from "framer-motion";

const IdRouter = ({children} : {children: ReactNode}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <div>
      {isHovered && 
    <motion.span
      className="flex relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.5 }}
    >
      <button
      className="absolute -left-[15px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      #
      </button>
    </motion.span>}
      {children}
    </div>
  )
}

export { IdRouter }
