import React from "react";
import { IconUserArrow, IconUserBottomLeftArrow, IconUserBottomRightArrow, IconUserRightArrow } from "../../iocns/Icons";
import Button from "../../shared/Button";

const HowItWorks = () => {
  return (
    <div className="mt-0">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="uppercase">How It Works</h2>
        <h3 className="pt-2 pb-3 font-bold leading-tight tracking-normal font-dmsans">
          Own fractional shares of real estate investment across the world
        </h3>
        <p className="px-16">
          Imagine a world where you could own a piece of real estate on the
          other continent for as little as $1000
        </p>
      </div>
      <div className="flex items-center justify-between flex-col gap-10 mt-10 relative 2xl:max-w-[1514px] mx-auto">
        <div>
          <img src="/img/howitworkproperty.png" alt="howitworks" className="mx-auto width-max70"/>
          <div className="max-w-[420px] mx-auto text-center absolute left-1/2 -translate-x-1/2 -bottom-[273px]">

          <h5 className="text-2xl font-display font-normal uppercase pb-8">Future of ownership real estate</h5>
          <p className="pb-8">All generating you a passive income</p>
          <Button
                label="Buy Tokens now"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal z-30"
              />
          </div>
        </div>
        <div>
          <div className="absolute top-0 left-16 text-center">
            <div className="relative">
              <img src="/img/user1.png" alt="user" className="mx-auto width-max70"/>
              <div className="absolute top-[106px] -right-[322px]">
                <div className="relative max-w-[73%]">
                  <IconUserArrow className="max-w-full"/>
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-[76px] -right-1"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">Brand Stroch</h5>
            <p>Owning 18% of property</p>
          </div>

          <div  className="absolute top-0 right-16 text-center">
            <div className="relative">
              <img src="/img/user2.png" alt="user" className="mx-auto width-max70"/>
              <div className="absolute top-[62px] -left-[258px]">
                <div className="relative max-w-[73%]">
                  <IconUserRightArrow className="max-w-full"/>
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute bottom-2.5 -left-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">Tina Frox</h5>
            <p>Owning 20% of property</p>
          </div>

          <div className="absolute -bottom-32 left-40 text-center">
            <div className="relative">
              <img src="/img/user3.png" alt="user" className="mx-auto width-max70 relative z-30"/>
              <div className="absolute -top-40 -right-[298px]">
                <div className="relative max-w-[73%]">
                  <IconUserBottomLeftArrow className="max-w-full"/>
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-11 -right-1.5"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">Anton Karis</h5>
            <p>Owning 35% of property</p>
          </div>

          <div className="absolute -bottom-32 right-40 text-center">
            <div className="relative">
              <img src="/img/user4.png" alt="user" className="mx-auto width-max70 relative z-30"/>
              <div className="absolute -top-36 -left-32">
                <div className="relative">
                  <IconUserBottomRightArrow className="max-w-[75%]"/>
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-7 -left-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">William Ostin</h5>
            <p>Owning 27% of property</p>
          </div>

          {/* <div className="absolute bottom-0 right-16 text-center">
            <div className="relative">
              <img src="/img/user4.png" alt="user" className="mx-auto width-max70"/>
              <div className="absolute top-[181px] -right-[365px]">
                <div className="relative">
                  <IconUserRightArrow />
                  <div className="inline-block w-5 h-5 bg-white rounded-full absolute top-[90px] -right-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-2xl font-display font-normal uppercase pb-2">William Ostin</h5>
            <p>Owning 27% of property</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
