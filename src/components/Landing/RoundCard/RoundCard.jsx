import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../shared/Button";
import { IconArrow } from "../../iocns/Icons";

const RoundCard = () => {
  return (
    <div className="z-30 flex px-4 lg:px-[48px] pt-[72px] pb-8 items-center gap-8 rounded-[32px] 2xl:rounded-[48px] border border-gray shadow1 bg-white max-w-[664px] lg:max-w-[1030px] mx-auto flex-col justify-center relative mt-0 sm:mt-36 2xl:mt-56 max-sm:mx-5">
      <div className="flex justify-between sm:justify-center items-center px-6 sm:px-8 py-5 gap-4 border-[3px] border-green bg-dark-black text-white rounded-3xl sm:rounded-full -mt-28 max-sm:flex-wrap">
        <div className="flex items-center gap-4 flex-shrink-0">
          <img src="/img/trophy.svg" alt="trophy" className="max-sm:w-6" />
          <p className="text-xs sm:text-sm 2xl:text-2md font-normal font-display pr-4 text-white">
            1st Round
          </p>
        </div>
        <img
          src="/img/bar.png"
          alt="bar"
          className="max-sm:w-6 max-lg:w-[49%] max-sm:hidden"
        />
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm 2xl:text-2md font-normal font-display text-white">
            32%
          </p>
          <IconArrow />
        </div>
        <div className="basis-full sm:hidden mt-2">
          <img src="/img/bar.png" alt="bar" className="w-full" />
        </div>
      </div>
      <div className="flex gap-4 flex-col justify-center">
        <div className="flex max-sm:flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <div className="flex py-3 lg:py-4 px-2 lg:px-8 items-center rounded-2xl border border-gray gap-2 lg:gap-8 max-sm:basis-full">
            <div className="w-8 lg:w-12 2xl:w-16">
              <img src="/img/p_name.svg" alt="name" />
            </div>
            <p className="flex-grow max-sm:text-xs">Current Token Price</p>
            <p className="max-sm:text-xs text-base font-display font-normal">$0.006</p>
          </div>
          <div className="flex py-3 lg:py-4 px-2 lg:px-8 items-center rounded-2xl border border-gray gap-2 lg:gap-8 max-sm:basis-full">
            <div className="w-8 lg:w-12 2xl:w-16">
              <img src="/img/t_name.svg" alt="name" />
            </div>
            <p className="flex-grow max-sm:text-xs">1st Round Token Price</p>
            <p className="max-sm:text-xs text-base font-display font-normal">$0.08</p>
          </div>
          <div className="flex max-sm:basis-full py-3 lg:py-4 px-2 lg:px-8 items-center rounded-2xl border border-gray gap-2 sm:gap-8 sm:col-span-2">
            <div className="w-8 lg:w-12 2xl:w-16">
              <img src="/img/t_name.svg" alt="name" />
            </div>
            <p className="flex-grow max-sm:text-xs">USDT Raised</p>
            <p className="max-sm:text-xs text-base font-display font-normal">$2,234,456.05</p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-12 justify-between sm:justify-center max-sm:flex-wrap">
          <div className="flex items-center max-sm:justify-between max-sm:w-full">
            <FontAwesomeIcon icon={faStar} className="text-green" />
            <p className="flex-grow px-2 max-sm:text-xs">Next stage price:</p>
            <p className="max-sm:text-xs text-base font-display font-normal">$0.006</p>
          </div>
          <div className="flex items-center max-sm:justify-between max-sm:w-full">
            <FontAwesomeIcon icon={faStar} className="text-green" />
            <p className="max-sm:text-xs flex-grow px-2">Listing price:</p>
            <p className="max-sm:text-xs text-base font-display font-normal">$0.006</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 max-sm:flex-wrap">
        <Button
          label="PURCHASE PRESALE "
          icon="/img/Money_fill.svg"
          alt="Money_fill"
          onClick={() => {}}
          position="end"
          className="uppercase font-display font-normal max-sm:w-full"
        />
        <Button
          label="Whitepaper"
          variant="secondary"
          icon="/img/Form.svg"
          alt="Form"
          onClick={() => {}}
          position="end"
          className="uppercase  font-display font-normal max-sm:w-full"
        />
      </div>
    </div>
  );
};

export default RoundCard;
