import React from "react";
import Marquee from "react-fast-marquee";

const Advertisement = () => {

  return (
    <div className="flex items-center gap-16 bg-brand-black mt-52">
      <Marquee speed={50} gradient={false}>

          <div className="mx-4">
            <img src="/img/brandLogo.png" alt="brandLogo" />
          </div>

      </Marquee>
    </div>
  );
};

export default Advertisement;
