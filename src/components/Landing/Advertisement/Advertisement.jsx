import React from "react";
import Marquee from "react-fast-marquee";

const Advertisement = () => {

  return (
    <div className="flex items-center gap-16 bg-brand-black my-16 sm:my-24 lg:my-40 z-30 relative">
      <Marquee speed={50} gradient={false}>

          <div className="mx-4">
            <img src="/img/brandLogo.png" alt="brandLogo" className="max-lg:max-w-[70%]"/>
          </div>

      </Marquee>
    </div>
  );
};

export default Advertisement;
