import React from "react";
import Button from "../../shared/Button";
import Timer from "../../shared/Timer";

const Banner = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="px-10 py-8">
      {/* <img src="/img/Ресурс_right_top.png"/> */}
      <div className="flex items-center justify-between mb-16">
        <p>Hassle-Free Real Estate</p>
        <p>Future of Real Estate</p>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <div className="w-[450px] h-[450px] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-gray relative flex justify-center items-center">
            <div className="w-[372px] h-[372px] 2xl:w-[522px] 2xl:h-[522px] rounded-full border-[30px] border-white">
              <div className="absolute w-[900px] h-[704px] -left-[67px] top-16 2xl:top-20">
                <img
                  src="/img/property_img.png"
                  alt="banner_img"
                  className="w-[65%] 2xl:w-[85%]"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 pl-16">
          <h3 className="textGradient uppercase pb-6">Tokenization</h3>
          <h1 className="text-[40px] 2xl:text-[74px] font-display uppercase leading-[46px] 2xl:leading-[88px] pb-4 2xl:max-w-[934px] max-2xl:max-w-[500px]">
            Revolutionize Real Estate with DeRent
          </h1>
          <div className="max-w-xl mb-20">
            <p>
              Unlock the Future of Property Ownership with Blockchain-Powered
              Solutions
            </p>
            <div className="flex items-center gap-4 mt-8 mb-16">
              <Button
                label="How to Buy"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal z-30"
              />
              <Button
                label="Learn More"
                variant="secondary"
                icon="/img/Info.svg"
                alt="info"
                onClick={() => {}}
                position="end"
                className="uppercase  font-display font-normal"
              />
            </div>
            <h3 className="uppercase mb-6">
              Launching<span className="textGradient pl-2">IN</span>
            </h3>
            <Timer />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-xl 2xl:text-2xl font-display font-normal uppercase">
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
        <h4 className="text-xl 2xl:text-2xl font-display font-normal uppercase">
          $DRT Token
        </h4>
      </div>
    </div>
  );
};

export default Banner;
