import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navLink = [
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
  ]
  return (
    <div className="min-h-[calc(100vh-199px)] flex flex-col justify-between bg-dark-black text-white ">
      {/* Content in the center */}
      <div className="flex flex-1 justify-center items-center max-w-[958px] mx-auto">
        <nav className="text-center space-y-4">
          <div className="space-x-16">
            {navLink.map((item) => (
              <Link to={item.url} className="inline-flex text-3xl font-display pb-12 hover:opacity-60" key={item.name}>{item.name}</Link>
            ))}
           
          </div>
         
        </nav>
      </div>

    
    </div>
  );
};

export default Navigation;
