import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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
          }
    ]
  return (
    <footer className="bg-dark-black text-white py-8 text-sm text-center flex justify-between items-center px-10 ">
      <div className="text-[18px]">&copy; 2024 DeRent. All Right Reserved</div>
      <div className="flex space-x-24 items-center">
        <Link to={"/"} className="underline text-extra-light/60 text-xl">
          Terms of Use
        </Link>
        <Link to={"/"} className="underline text-extra-light/60 text-xl">
          Privacy Policy
        </Link>
        <div className="flex space-x-2">
            {socialMediaIcons.map((icon) => (
                <Link to={icon.url} className="underline w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/30" key={icon.name}>
                <FontAwesomeIcon icon={icon.name} size="lg" />
              </Link>
            ))}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
