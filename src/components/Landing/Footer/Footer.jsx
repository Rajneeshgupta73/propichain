import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ isMainMenu = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const socialMediaIcons = [
    {
      name: faLinkedin,
      url: "/",
    },
    {
      name: faLinkedin,
      url: "/",
    },
    {
      name: faLinkedin,
      url: "/",
    },
    {
      name: faLinkedin,
      url: "/",
    },
  ];

  const mainLink =[
    {
      name: "Home",
      url: "home",
    },
    {
      name: "Vision",
      url: "vision",
    },
    {
      name: "How it works",
      url: "howitworks",
    },
    {
      name: "Tokenomics",
      url: "tokenomics",
    },
    {
      name: "Roadmap",
      url: "roadmap",
    },
    {
      name: "Whitepaper",
      url: "whitepaper",
    },
    {
      name: "How to Buy",
      url: "howtobuy",
    },
    {
      name: "FAQ",
      url: "faq",
    },
  ]
  const handleLinkClick = (id) => {
    // Close the menu
    setMenuOpen(false);

    // Scroll to the section
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 700,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer
      className={`bg-dark-black text-white px-5 sm:px-10 lg:px-20 ${
        !isMainMenu ? "py-8" : "max-lg:pt-12 lg:py-20 max-lg:pb-4"
      }`}
    >
      {isMainMenu && (
        <div className="flex justify-center lg:justify-between items-center pb-8 lg:pb-16 max-lg:flex-wrap">
          <Link to={"/"} className="mr-8">
            <img src="/img/Black_Logo.svg" alt="logo" />
          </Link>
          <ul className="flex gap-6 2xl:gap-12 max-2xl:flex-wrap max-lg:mt-8 max-lg:justify-center">
            {mainLink.map((link) => (
              <li key={link.name}>
                
                <button
                key={link.name}
                onClick={() => handleLinkClick(item.url)}
                className="text-xs lg:text-sm 2xl:text-base font-display hover:opacity-70"
              >
                {link.name}
              </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={`text-sm text-center flex justify-between items-center max-lg:flex-wrap max-lg:justify-center`}
      >
        <div className="text-[10px] sm:text-sm 2xl:text-lg max-lg:order-2 max-lg:basis-full">
          &copy; 2024 DeRent. All Right Reserved
        </div>
        <div className="flex lg:space-x-24 items-center max-lg:flex-wrap max-lg:justify-center">
          <div className="flex space-x-24 max-lg:order-2 max-lg:mb-8">
            <Link to={"/"} className="underline text-extra-light/60 max-w-sm:font-normal text-xs sm:text-xl">
              Terms of Use
            </Link>
            <Link to={"/"} className="underline text-extra-light/60 max-w-sm:font-normal text-xs sm:text-xl">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-2 max-lg:basis-full max-lg:mb-6 max-lg:justify-center">
            {socialMediaIcons.map((icon) => (
              <Link
                to={icon.url}
                className="underline w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/30"
                key={icon.name}
              >
                <FontAwesomeIcon icon={icon.name} size="lg" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
