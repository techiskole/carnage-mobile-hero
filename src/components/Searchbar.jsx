import { CloseIcon } from "./CloseIcon";
import { motion } from "motion/react";

export const Searchbar = ({ isOpen, handleClose }) => {
  return (
    <motion.div
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: isOpen ? 0 : -80,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        type: "tween",
        duration: 0.1,
      }}
      className="fixed w-full bg-[#f3f3f3] top-0 z-10 py-[20px] px-[16px] flex items-center justify-center gap-2"
    >
      <input
        placeholder="Search"
        className="py-[10px] px-[15px] w-full border border-[#262626] placeholder-gray-400 tracking-wider bg-[#f3f3f3] text-[14px] be-vietnam-pro-medium leading-normal"
      />
      <CloseIcon onClick={handleClose} />
    </motion.div>
  );
};
