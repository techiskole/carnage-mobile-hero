import { CartIcon } from "./CartIcon";
import { CloseIconWithBg } from "./CloseIconWithBg";
import { motion } from "motion/react";

export const CartSlider = ({ isOpen, handleClose }) => {
  return (
    <motion.div
      initial={{
        x: 500,
      }}
      animate={{
        x: isOpen ? 0 : 500,
      }}
      transition={{
        type: "tween",
        duration: 0.15,
      }}
      className="bg-black/80 fixed w-full h-screen z-10 top-0 flex justify-center items-center"
    >
      <div className="bg-[#f3f3f3] w-[94%] h-[98%]">
        <div className="flex justify-between items-center py-[10px] px-2 shadow-sm">
          <CloseIconWithBg onClick={handleClose} />
          <span className="text-[12px] be-vietnam-pro-bold tracking-wider">
            My Cart
          </span>
          <CartIcon />
        </div>

        <div className="h-full w-full flex justify-center items-center -mt-8">
          <div className="flex flex-col items-center gap-7">
            <span className="text-[12px] be-vietnam-pro-bold tracking-wider">
              Your cart is currently empty.
            </span>
            <button className="uppercase w-[90px] py-[10px] bg-white shadow-sm rounded-full be-vietnam-pro-bold text-[14px]">
              Shop
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
