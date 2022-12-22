import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="effect-1">
      <motion.div
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
        key={asPath}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
