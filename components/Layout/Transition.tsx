import { motion } from "framer-motion";
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

interface TransitionProps {
  children: React.ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  const { asPath } = useRouter();
  return (
    <div>
      {/*@ts-ignore */}
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
