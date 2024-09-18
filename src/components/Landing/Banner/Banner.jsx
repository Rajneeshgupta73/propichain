import React from "react";
import Button from "../../shared/Button";
import Timer from "../../shared/Timer";

const Banner = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="px-5 sm:px-10 py-8 z-30" id="home">
      {/* <img src="/img/Ресурс_right_top.png"/> */}
      <div className="flex items-center justify-between -mb-2 sm:-mb-7 lg:mb-16">
        <p className="max-sm:max-w-36 max-sm:text-sm">Hassle-Free Real Estate</p>
        <p className="max-sm:max-w-28 max-sm:text-right max-sm:text-sm">Future of Real Estate</p>
      </div>
      <div className="flex max-lg:flex-wrap max-lg:justify-center">
        <div className="lg:basis-1/2 max-sm:mb-8 max-lg:mb-16">
          <div className="w-[281px] h-[281px] sm:w-[450px] sm:h-[450px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-gray relative flex justify-center items-center">
            <div className="w-[211px] sm:w-[372px] h-[211px] sm:h-[372px] 2xl:w-[522px] 2xl:h-[522px] rounded-full border-[30px] border-white">
              <div className="absolute w-[600px] sm:w-[900px] sm:h-[450px] lg:h-[704px] -left-12 sm:-left-[67px] top-8 sm:top-16 2xl:top-20">
                <img
                  src="/img/property_img.png"
                  alt="banner_img"
                  className="w-[65%] 2xl:w-[85%]"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:basis-1/2 lg:pl-16 max-lg:text-center max-lg:flex max-lg:items-center max-lg:flex-col max-sm:px-5">
          <h3 className="textGradient uppercase pb-6 max-sm:text-lg max-lg:text-xl">Tokenization</h3>
          <h1 className="text-xl sm:text-3xl lg:text-[40px] 2xl:text-[74px] font-display uppercase leading-6 sm:leading-[36px] lg:leading-[46px] 2xl:leading-[88px] pb-4 max-sm:max-w-full 2xl:max-w-[934px] max-2xl:max-w-[500px]">
            Revolutionize Real Estate with DeRent
          </h1>
          <div className="lg:max-w-xl mb-20">
            <p className="max-sm:text-sm">
              Unlock the Future of Property Ownership with Blockchain-Powered
              Solutions
            </p>
            <div className="flex items-center gap-4 mt-8 mb-6 sm:mb-16 max-lg:justify-center max-sm:flex-wrap">
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
                className="uppercase  font-display font-normal max-sm:w-full"
                infoIcon={true}
              />
            </div>
            <h3 className="uppercase mb-4 sm:mb-6">
              Launching<span className="textGradient pl-2">IN</span>
            </h3>
            <Timer />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 max-sm:hidden">
        <h4 className="text-base lg;text-xl 2xl:text-2xl font-display font-normal uppercase">
          DeRent Platform
        </h4>
        <div>
          <Button
            label="Scroll Down"
            variant="secondary"
            icon="/img/Expand_down_double.svg"
            alt="Expand_down_double"
            onClick={() => {}}
            className="text-sm !px-3 !py-2 font-dmsans text-gray !rounded-md hover:bg-primary-hover"
          />
        </div>
        <h4 className="text-base lg;text-xl 2xl:text-2xl font-display font-normal uppercase">
          $DRT Token
        </h4>
      </div>
    </div>
  );
};

export default Banner;
