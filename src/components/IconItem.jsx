import { motion } from "motion/react";

export const IconItem = ({ icon }) => {
  return (
    <motion.span
      variants={{
        initial: { opacity: 0, x: 20 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
          },
        },
      }}
    >
      {icon}
    </motion.span>
  );
};
