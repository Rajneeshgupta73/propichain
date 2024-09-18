import React from "react";
import {
  IconMobileBottomLeft,
  IconMobileBottomRight,
  IconMobileTopLeft,
  IconMobileTopRight,
  IconTabBottomLeft,
  IconTabBottomRight,
  IconTabTopLeft,
  IconTabTopRight,
  IconUserArrow,
  IconUserBottomLeftArrow,
  IconUserBottomRightArrow,
  IconUserRightArrow,
} from "../../iocns/Icons";
import Button from "../../shared/Button";

const HowItWorks = () => {
  return (
    <div className="mt-0 max-lg:pb-[500px] max-sm:px-5 z-30" id="howitworks">
      <div className="text-center max-w-xl 2xl:max-w-3xl mx-auto">
        <h2 className="uppercase">How It Works</h2>
        <h3 className="pt-8 sm:pt-6 pb-4 lg:py-8 2xl:py-3 font-bold leading-tight tracking-normal font-dmsans text-dark-black">
          Own fractional shares of real estate investment across the world
        </h3>
        <p className="sm:px-16">
          Imagine a world where you could own a piece of real estate on the
          other continent for as little as $1000
        </p>
      </div>
      <div className="flex items-center justify-between flex-col gap-10 mt-10 relative max-w-[300px] xs:max-w-[350px] sm:max-w-[850px] lg:max-w-[1250px] 2xl:max-w-[1514px] mx-auto">
        <div>
          <img
            src="/img/howitworkproperty.png"
            alt="howitworks"
            className="mx-auto sm:max-w-[60%] 2xl:max-w-[70%]"
          />
          <div className="lg:max-w-[420px] mx-auto text-center absolute left-0 max-lg:right-0 lg:left-1/2 lg:-translate-x-1/2 -bottom-[500px] sm:-bottom-[440px] lg:-bottom-[273px]">
            <h5 className="text-lg lg:text-2xl font-display font-normal uppercase pb-5 lg:pb-8 max-sm:leading-tight">
              Future of ownership real estate
            </h5>
            <p className="pb-4 sm:pb-8 max-lg:text-base">
              All generating you a passive income
            </p>
            <Button
              label="Buy Tokens now"
              icon="/img/Money_fill.svg"
              alt="Money_fill"
              onClick={() => {}}
              position="end"
              className="uppercase font-display font-normal z-30 max-sm:text-sm max-sm:w-full"
            />
          </div>
        </div>
        <div>
          <div className="absolute top-[270px] xs:top-[290px] sm:top-[284px] lg:top-0 -left-4 sm:left-[100px] lg:-left-2 2xl:left-16 text-center">
            <div className="relative">
              <img
                src="/img/user1.png"
                alt="user"
                className="mx-auto max-sm:w-28 max-sm:h-28 max-lg:w-32 max-lg:h-32 max-lg:max-w-full width-max70 z-30 relative"
              />
              <div className="absolute -top-[182px] xs:-top-[188px] sm:-top-[150px] lg:top-[72px] 2xl:top-[106px] right-12 xs:right-8 sm:-right-[51px] lg:-right-[277px] 2xl:-right-[322px]">
                <div className="relative lg:max-w-[73%]">
                  <IconUserArrow className="max-w-full hidden lg:block" />
                  <IconTabTopLeft className="max-w-full hidden sm:block lg:hidden" />
                  <IconMobileTopLeft className="max-w-full sm:hidden" />
                  <div className="inline-block w-2.5 sm:w-5 h-2.5 sm:h-5 bg-white rounded-full absolute -top-1 lg:top-[76px] -right-1  sm:-right-1.5 lg:-right-1"></div>
                </div>
              </div>
            </div>
            <h5 className="text-sm sm:text-base 2xl:text-2xl font-display font-normal uppercase pb-2">
              Brand Stroch
            </h5>
            <p className="max-sm:text-xs max-2xl:text-sm">
              Owning 18% of property
            </p>
          </div>

          <div className="absolute top-[270px] xs:top-[290px] sm:top-[284px] lg:top-0 -right-2 sm:right-20 lg:-right-4 2xl:right-16 text-center">
            <div className="relative">
              <img
                src="/img/user2.png"
                alt="user"
                className="mx-auto max-sm:w-28 max-sm:h-28 max-lg:w-32 max-lg:h-32 max-lg:max-w-full width-max70 z-30 relative"
              />
              <div className="absolute -top-[194px] sm:-top-[124px] lg:top-9 2xl:top-[62px] left-6 sm:-left-[71px] lg:-left-[220px] 2xl:-left-[258px]">
                <div className="relative lg:max-w-[73%]">
                  <IconUserRightArrow className="max-w-full hidden lg:block" />
                  <IconTabTopRight className="max-w-full hidden sm:block lg:hidden" />
                  <IconMobileTopRight className="max-w-full sm:hidden" />
                  <div className="inline-block w-2.5 sm:w-5 h-2.5 sm:h-5 bg-white rounded-full absolute max-lg:-top-1 lg:bottom-2.5 -left-1.5 lg:-left-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-sm sm:text-base 2xl:text-2xl font-display font-normal uppercase pb-2">
              Tina Frox
            </h5>
            <p className="max-sm:text-xs max-2xl:text-sm">
              Owning 20% of property
            </p>
          </div>

          <div className="absolute -bottom-[324px] xs:-bottom-[304px] sm:-bottom-[176px] max-sm:-right-4 sm:lg:-bottom-28 2xl:-bottom-32 left-[161px] xs:left-[206px] lg:left-[80px] 2xl:left-40 text-center max-sm:min-w-36">
            <div className="relative">
              <img
                src="/img/user3.png"
                alt="user"
                className="mx-auto max-sm:w-28 max-sm:h-28 max-lg:w-32 max-lg:h-32 max-lg:max-w-full width-max70 relative z-30"
              />
              <div className="absolute  -top-[328px] sm:-top-[250px] lg:-top-[188px] 2xl:-top-40 right-auto sm:right-6 lg:-right-[266px] 2xl:-right-[298px] max-xs:-left-[2px]">
                <div className="relative lg:max-w-[73%]">
                  <IconUserBottomLeftArrow className="max-w-full hidden lg:block" />
                  <IconTabBottomLeft className="max-w-full hidden sm:block lg:hidden" />
                  <IconMobileBottomRight className="max-w-full sm:hidden" />
                  <div
                    className="inline-block w-2.5 sm:w-5 h-2.5 sm:h-5 bg-white rounded-full absolute -top-1 lg:top-11 
                  right-auto sm:-right-1.5 lg:-right-1.5"
                  ></div>
                </div>
              </div>
            </div>
            <h5 className="text-sm sm:text-base 2xl:text-2xl font-display font-normal uppercase pb-2">
              Anton Karis
            </h5>
            <p className="max-sm:text-xs max-2xl:text-sm">
              Owning 35% of property
            </p>
          </div>

          <div className="absolute  -bottom-[324px] xs:-bottom-[304px] sm:-bottom-[176px] lg:-bottom-24 2xl:-bottom-32 max-sm:-left-4 sm:right-[208px] lg:right-[82px] 2xl:right-40 text-center">
            <div className="relative">
              <img
                src="/img/user4.png"
                alt="user"
                className="mx-auto max-sm:w-28 max-sm:h-28 max-lg:w-32 max-lg:h-32 max-lg:max-w-full width-max70 relative z-30"
              />
              <div className="absolute -top-[328px] sm:-top-[253px] lg:-top-40 2xl:-top-36 max-sm:-right-5 sm:left-6 lg:-left-20 2xl:-left-32">
                <div className="relative">
                  <IconUserBottomRightArrow className="max-w-[75%] hidden lg:block" />
                  <IconTabBottomRight className="max-w-full  hidden sm:block lg:hidden" />
                  <IconMobileBottomLeft className="max-w-full sm:hidden" />
                  <div className="inline-block w-2.5 sm:w-5 h-2.5 sm:h-5 bg-white rounded-full absolute -top-1 lg:top-7 max-sm:-right-1 sm:-left-1.5 lg:-left-2"></div>
                </div>
              </div>
            </div>
            <h5 className="text-sm sm:text-base 2xl:text-2xl font-display font-normal uppercase pb-2">
              William Ostin
            </h5>
            <p className="max-sm:text-xs max-2xl:text-sm">
              Owning 27% of property
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
