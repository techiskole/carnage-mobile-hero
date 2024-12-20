import { CloseIcon } from "./CloseIcon";
import logo from "../assets/logo.avif";
import { SidemenuItem } from "./SidemenuItem";
import { InstagramIcon } from "./InstagramIcon";
import { TiktokIcon } from "./TiktokIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { UserIcon } from "./UserIcon";
import { motion } from "motion/react";
import { IconItem } from "./IconItem";

export const Sidemenu = ({ isOpen, handleClose }) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          zIndex: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
          zIndex: isOpen ? 15 : 0,
        }}
        className="bg-black/40 fixed top-0 w-full h-screen"
      ></motion.div>
      <motion.div
        initial={{
          x: 500,
        }}
        animate={{
          x: isOpen ? 0 : 500,
        }}
        transition={{
          type: "tween",
          duration: 0.35,
        }}
        className="bg-white/95 w-[80%] fixed top-0 right-0 h-full z-20"
      >
        <div className="flex justify-between items-center py-[10px] px-2 min-h-[64px]">
          <img src={logo} className="w-[80px] h-[20px]" />
          <CloseIcon onClick={handleClose} className="stroke-[1.5px]" />
        </div>

        <motion.div
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          variants={{
            initial: {},
            animate: {
              transition: {
                delayChildren: 0.22,
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-start justify-start h-full px-4 mt-2"
        >
          {items.map((item) => (
            <SidemenuItem
              key={item.name}
              name={item.name}
              items={item.subItems}
            />
          ))}
          <SidemenuItem name={"Account"} noBorder leftIcon={<UserIcon />} />
          <div className="flex gap-2 items-center">
            <IconItem icon={<InstagramIcon />} />
            <IconItem icon={<TiktokIcon />} />
            <IconItem icon={<YoutubeIcon />} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const items = [
  {
    name: "12 days of christmas",
  },
  {
    name: "Men",
    subItems: [
      "Shop All",
      "T-Shirts",
      "shorts",
      "shirts",
      "polos",
      "tank tops",
      "compressions",
    ],
  },
  {
    name: "Women",
    subItems: ["Shop All"],
  },
  {
    name: "Accessories",
    subItems: ["Shop All"],
  },
  {
    name: "Gift Cards",
  },
];
