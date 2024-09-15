import React from "react";

const Navigation = () => {
  return (
    <div className="min-h-[calc(100vh-203px)] flex flex-col justify-between bg-dark-black text-white">
      {/* Content in the center */}
      <div className="flex flex-1 justify-center items-center">
        <nav className="text-center space-y-4">
          <div className="space-x-8">
            <a href="#" className="text-lg">Home</a>
            <a href="#" className="text-lg">Vision</a>
            <a href="#" className="text-lg">How it works</a>
          </div>
          <div className="space-x-8">
            <a href="#" className="text-lg">Tokenomics</a>
            <a href="#" className="text-lg">Roadmap</a>
            <a href="#" className="text-lg">Whitepaper</a>
          </div>
          <div className="space-x-8">
            <a href="#" className="text-lg">How to Buy</a>
            <a href="#" className="text-lg">FAQ</a>
          </div>
        </nav>
      </div>

    
    </div>
  );
};

export default Navigation;
