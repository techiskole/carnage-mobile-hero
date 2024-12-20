import logo from "../assets/logo.avif";
import { SearchIcon } from "../components/SearchIcon";
import { CartIcon } from "../components/CartIcon";
import { BurgerIcon } from "../components/BurgerIcon";
import { CartSlider } from "./CartSlider";
import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { Sidemenu } from "./Sidemenu";

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between min-h-[64px] items-center px-4">
        <img src={logo} className="w-[80px] h-[20px]" />
        <div className="flex items-center gap-4 z-10">
          <SearchIcon onClick={() => setIsSearchbarOpen(true)} />
          <CartIcon onClick={() => setIsCartOpen(true)} />
          <BurgerIcon onClick={() => setIsSidemenuOpen(true)} />
        </div>
      </div>
      <CartSlider
        isOpen={isCartOpen}
        handleClose={() => setIsCartOpen(false)}
      />
      <Searchbar
        isOpen={isSearchbarOpen}
        handleClose={() => setIsSearchbarOpen(false)}
      />
      <Sidemenu
        isOpen={isSidemenuOpen}
        handleClose={() => setIsSidemenuOpen(false)}
      />
    </>
  );
};
