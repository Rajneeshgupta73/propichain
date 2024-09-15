import React from "react";
import { IconUserArrow, IconUserRightArrow } from "../../iocns/Icons";

const HowItWorks = () => {
  return (
    <div className="mt-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="uppercase">How It Works</h2>
        <h3 className="pt-8 pb-3 font-bold leading-tight tracking-normal font-dmsans">
          Own fractional shares of real estate investment across the world
        </h3>
        <p className="text-2md font-bold px-16">
          Imagine a world where you could own a piece of real estate on the
          other continent for as little as $1000
        </p>
      </div>
      <div className="flex items-center justify-between flex-col gap-10 mt-10 relative">
        <div>
          <img src="/img/howitworkproperty.png" alt="howitworks" />
        </div>
        <div>
          <div className="absolute top-28 left-16 text-center">
            <div className="relative">
              <img src="/img/user1.png" alt="user" />
              <div className="absolute top-[181px] -right-[365px]">
                <div className="relative">
                  <IconUserArrow />
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-[90px] -right-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">Brand Stroch</h5>
            <p>Owning 18% of property</p>
          </div>
          <div className="absolute top-28 left-16 text-center">
            <div className="relative">
              <img src="/img/user2.png" alt="user" />
              <div className="absolute top-[181px] -right-[365px]">
                <div className="relative">
                  <IconUserRightArrow />
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-[90px] -right-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">Tina Frox</h5>
            <p>Owning 20% of property</p>
          </div>
          <div>
            <img src="/img/user1.png" alt="user" />
          </div>
          <div>
            <img src="/img/user1.png" alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
