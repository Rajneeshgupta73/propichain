import React, { useEffect, useState } from "react";
import Button from "../../shared/Button";
import Navigation from "./Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);
  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }
  const handleCloseMenu = () => {
    setIsMenuOpen(false)  
  }
  return (
    <>
    <div className={`z-30 relative flex justify-between items-center px-5 sm:px-10 py-3 lg:py-6 border-b  ${isMenuOpen ? "bg-dark-black border-light-black" : "bg-gray-bg border-light-gray"}`}>
      <div>
        <Link to={"/"}><img src={isMenuOpen ? "/img/Black_Logo.svg" : "/img/Logo.svg"} alt="logo" className="max-lg:w-36"/></Link>
      </div>
      <div>
        <Button
          variant="iconSize"
          icon={isMenuOpen ? "/img/Close_round.svg" : "/img/Menu.svg"}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={isMenuOpen ? handleCloseMenu :handleOpenMenu}
          className="flex justify-center items-center border-2 border-light-gray rounded-full w-7 sm:w-10 h-7 sm:h-10 !p-0 hover:bg-gray"
          iconClassName="!mr-0"
        />
      </div>
      <div className="flex items-center gap-2.5 max-lg:hidden">
        <Button
          label="Connect Wallet"
          variant="secondary"
          icon="/img/Wallet_alt.svg"
          alt="Wallet_alt"
          onClick={() => {}}
          className="text-xs lg:text-sm !px-6 !py-2.5 font-dmsans"
        />
        <Button
          label="Log In"
          variant="secondary"
          icon="/img/Sign_in_circle.svg"
          alt="Sign_in_circle"
          onClick={() => {}}
          className="text-xs lg:text-sm !px-6 !py-2.5 font-dmsans"
        />
      </div>
    </div>
    {isMenuOpen && 
    ( 
      <>
      <Navigation handleCloseMenu={handleCloseMenu}/>
      <Footer/>
      </>
    )}
    </>
  );
};

export default Header;
