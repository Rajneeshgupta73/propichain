import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../shared/Button";
import { IconArrow } from "../../iocns/Icons";

const RoundCard = () => {
  return (
    <div className="flex px-[48px] pt-[72px] pb-8 items-center gap-8 rounded-[48px] border border-gray shadow1 bg-white max-w-[1030px] mx-auto flex-col justify-center relative mt-56">
      <div className="flex justify-center items-center px-8 py-5 gap-4 border-[3px] border-green bg-dark-black text-white rounded-full -mt-28">
          <img src="/img/trophy.svg" alt="trophy" />
          <p className="text-2md font-normal font-display pr-4">1st Round</p>
          <img src="/img/bar.png" alt="bar" />
          <div className="flex items-center gap-2">
          <p className="text-2md font-normal font-display">32%</p>
          <IconArrow/>
          </div>
      </div>
      <div className="flex gap-4 flex-col justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex py-4 px-8 items-center rounded-2xl border border-gray gap-8">
            <img src="/img/p_name.svg" alt="name" />
            <p className="text-2md font-medium flex-grow">
              Current Token Price
            </p>
            <p className="text-base font-display font-normal">$0.006</p>
          </div>
          <div className="flex py-4 px-8 items-center rounded-2xl border border-gray gap-8">
            <img src="/img/t_name.svg" alt="name" />
            <p className="text-2md font-medium flex-grow">
              1st Round Token Price
            </p>
            <p className="text-base font-display font-normal">$0.08</p>
          </div>
          <div className="flex py-4 px-8 items-center rounded-2xl border border-gray gap-8 col-span-2">
            <img src="/img/t_name.svg" alt="name" />
            <p className="text-2md font-medium flex-grow">USDT Raised</p>
            <p className="text-base font-display font-normal">$2,234,456.05</p>
          </div>
        </div>
        <div className="flex gap-12 justify-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-green" />
            <p className="text-2md font-medium flex-grow px-2">
              Next stage price:
            </p>
            <p className="text-base font-display font-normal">$0.006</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-green" />
            <p className="text-2md font-medium flex-grow px-2">
              Listing price:
            </p>
            <p className="text-base font-display font-normal">$0.006</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
              <Button
                label="PURCHASE PRESALE "
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal"
              />
              <Button
                label="Whitepaper"
                variant="secondary"
                icon="/img/Form.svg"
                alt="Form"
                onClick={() => {}}
                position="end"
                className="uppercase  font-display font-normal"
              />
            </div>
    </div>
  );
};

export default RoundCard;
