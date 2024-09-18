import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const Navigation = ({handleCloseMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLink = [
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
    handleCloseMenu();
  };
  return (
    <div className="z-30 relative max-sm:max-h-[calc(100vh-254px)] max-lg:max-h-[calc(100vh-273px)] min-h-[calc(100vh-273px)] lg:min-h-[calc(100vh-199px)] flex flex-col justify-between bg-dark-black text-white max-lg:overflow-y-auto">
      {/* Content in the center */}
      <div className="flex flex-1 justify-center items-center max-w-[958px] mx-auto max-lg:py-8">
        <nav className="text-center space-y-4">
          <div className="lg:space-x-16">
            {navLink.map((item) => (
              // <Link to={item.url} className="flex lg:inline-flex text-2xl lg:text-3xl font-display pb-6 lg:pb-12 hover:opacity-60 max-lg:justify-center" key={item.name}>{item.name}</Link>
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.url)}
                className="flex lg:inline-flex text-sm sm:text-2xl lg:text-3xl font-display pb-6 lg:pb-12 hover:opacity-60 max-lg:justify-center max-lg:w-full"
              >
                {item.name}
              </button>
            ))}
           
          </div>
         
        </nav>
      </div>
      <div className="flex items-center gap-4 mt-8 mb-6 max-lg:justify-center lg:hidden max-sm:flex-wrap max-sm:px-5">
              <Button
                label="How to Buy"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal z-30 max-sm:w-full"
              />
              <Button
                label="Learn More"
                variant="secondary"
                icon="/img/Info.svg"
                alt="info"
                onClick={() => {}}
                position="end"
                className="uppercase  font-display font-normal text-dark-black max-sm:w-full"
              />
            </div>
    
    </div>
  );
};

export default Navigation;
