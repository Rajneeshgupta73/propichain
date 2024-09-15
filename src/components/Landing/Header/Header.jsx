import React, { useState } from "react";
import Button from "../../shared/Button";
import Navigation from "./Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }
  const handleCloseMenu = () => {
    setIsMenuOpen(false)  
  }
  return (
    <>
    <div className={`flex justify-between items-center px-10 py-6 border-b  ${isMenuOpen ? "bg-dark-black border-light-black" : "bg-white border-light-gray"}`}>
      <div>
        <Link to={"/"}><img src={isMenuOpen ? "/img/Black_Logo.svg" : "/img/Logo.svg"} alt="logo" /></Link>
      </div>
      <div>
        <Button
          variant="iconSize"
          icon={isMenuOpen ? "/img/Close_round.svg" : "/img/Menu.svg"}
          alt={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={isMenuOpen ? handleCloseMenu :handleOpenMenu}
          className="flex justify-center items-center border-2 border-light-gray rounded-full w-10 h-10 !p-0 hover:bg-gray"
          iconClassName="!mr-0"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <Button
          label="Connect Wallet"
          variant="secondary"
          icon="/img/Wallet_alt.svg"
          alt="Wallet_alt"
          onClick={() => {}}
          className="text-sm !px-6 !py-2.5 font-dmsans"
        />
        <Button
          label="Log In"
          variant="secondary"
          icon="/img/Sign_in_circle.svg"
          alt="Sign_in_circle"
          onClick={() => {}}
          className="text-sm !px-6 !py-2.5 font-dmsans"
        />
      </div>
    </div>
    {isMenuOpen && 
    ( 
      <>
      <Navigation/>
      <Footer/>
      </>
    )}
    </>
  );
};

export default Header;
