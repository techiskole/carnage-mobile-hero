import { useState } from "react";
import { PlusIcon } from "./PlusIcon";
import { motion } from "motion/react";

export const SidemenuItem = ({ name, items, noBorder, leftIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: 25,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
          },
        },
      }}
      className={`py-[22px] border-gray-400 w-full ${
        noBorder ? "" : "border-b"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="uppercase be-vietnam-pro-semibold text-[14px] tracking-wider flex items-center gap-2">
          {leftIcon && leftIcon}
          {name}
        </div>
        {items && items.length > 0 && (
          <PlusIcon onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: isOpen ? "auto" : 0,
        }}
        className="px-3 overflow-hidden"
      >
        <div className="pt-4" />
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <div
              className="py-3 uppercase text-[14px] be-vietnam-pro-medium tracking-wider"
              key={item}
            >
              {item}
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};
