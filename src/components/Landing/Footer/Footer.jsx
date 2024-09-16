import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({isMainMenu = false}) => {
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

  const mainLink = [
    {
      name: "Home",
      url: "/",
    },
  
    {
      name: "Vision",
      url: "/",
    },
    {
      name: "How it works",
      url: "/",
    },
    {
      name: "Tokenomics",
      url: "/",
    },
    {
      name: "Roadmap",
      url: "/",
    },
    {
      name: "Whitepaper",
      url: "/",
    },
    {
      name: "How to Buy",
      url: "/",
    },
    {
      name: "FAQ",
      url: "/",
    },
  ];
  return (
    <footer className={`bg-dark-black text-white px-20 ${!isMainMenu ? "py-8" : " py-20 "}`}>
      {isMainMenu && (
        <div className="flex justify-between items-center pb-16">
          <Link to={"/"} className="mr-8">
            <img src="/img/Black_Logo.svg" alt="logo" />
          </Link>
          <ul className="flex gap-6 2xl:gap-12 max-2xl:flex-wrap">
            {mainLink.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.url}
                  className="text-sm 2xl:text-base font-display hover:opacity-70"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`text-sm text-center flex justify-between items-center`}>
        <div className="text-sm 2xl:text-lg">
          &copy; 2024 DeRent. All Right Reserved
        </div>
        <div className="flex space-x-24 items-center">
          <Link to={"/"} className="underline text-extra-light/60 text-xl">
            Terms of Use
          </Link>
          <Link to={"/"} className="underline text-extra-light/60 text-xl">
            Privacy Policy
          </Link>
          <div className="flex space-x-2">
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
