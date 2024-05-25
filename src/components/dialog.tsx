import { AnimatePresence, motion } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  type ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

interface DialogHandle {
  open: () => void;
  close: () => void;
}

const Dialog = forwardRef<DialogHandle, Props>(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm duration-500 transition-transform"
              onClick={() => setIsOpen(false)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="relative z-50 w-full max-w-2xl p-6 bg-background rounded-lg translate-y-0 scale-100 drop-shadow-lg"
            >
              {children}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 size-min group flex justify-center items-center"
              >
                <p className="text-2xl font-[100] opacity-70">{"\u25CB"}</p>
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 size-min group flex justify-center items-center"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 0.65, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl font-[300] opacity-70">{"\u25CB"}</p>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});
Dialog.displayName = "Dialog";

export { Dialog, type DialogHandle };

