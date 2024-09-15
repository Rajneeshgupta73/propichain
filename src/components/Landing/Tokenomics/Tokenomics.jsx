import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import {
    IconGift,
  IconGroupUser,
  IconMoneyBill,
  IconStar,
  IconTicketBill,
  IconTransition,
  IconUser,
} from "../../iocns/Icons";
import Button from "../../shared/Button";

const tokenomicsItems = [
  {
    name: "Public Sale (Presale)",
    value: "45%",
  },
  {
    name: "Exchange Liquidity",
    value: "12%",
  },
  {
    name: "Ecosystem Development",
    value: "12%",
  },
  {
    name: "Marketing",
    value: "10%",
  },
  {
    name: "Bonus Tokens",
    value: "10%",
  },
  {
    name: "Team & Advisors",
    value: "7%",
  },
  {
    name: "Influencers/KOLs",
    value: "4%",
  },
];

const featureItems = [
  {
    name: "Zero-fee transactions",
    desciption: "Save on costs within the DeRent ecosystem.",
    icon: <IconTransition />,
  },
  {
    name: "Generous staking rewards",
    desciption: "Earn up to 225% APY on your $DRT holdings.",
    icon: <IconMoneyBill />,
  },
  {
    name: "Get Fractional NFT",
    desciption: "Acquire and trade NFTs to earn over 4000% yield",
    icon: <IconTicketBill />,
  },
  {
    name: "Premium access",
    desciption: "Unlock exclusive features and privileges.",
    icon: <IconStar />,
  },
  {
    name: "Governance power",
    desciption: "Shape the future of DeRent through voting.",
    icon: <IconGroupUser />,
  },
  {
    name: "Unlimited referrals",
    desciption: "Earn rewards for inviting new users.",
    icon: <IconUser />,
  },
  {
    name: "Community rewards",
    desciption: "Participate in giveaways and events.",
    icon: <IconGift />,
  },
];
const Tokenomics = () => {
  return (
    <div className="px-20 pb-36">
      <div>
        <h2 className="text-center mb-12">Tokenomics</h2>
        <div className="flex items-center gap-20">
          <div className="basis-1/3 flex justify-center">
            <img src="/img/tokenomics.png" alt="Tokenomics" />
          </div>
          <div className="basis-2/3 flex flex-wrap gap-4">
            {tokenomicsItems.map((item) => (
              <div
                className="flex py-7 px-12 gap-1 items-start rounded-[48px] border border-gray shadow1 bg-white flex-col"
                key={item.name}
              >
                <h3 className="font-normal font-display tracking-normal leading-normal uppercase">
                  {item.value}
                </h3>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24 text-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-dmsans pb-6 tracking-normal text-dark-black">
            Experience unmatched security and scalability with $DRT.
          </h3>
          <p className="mb-6">Enjoy these exclusive benefits: </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {featureItems.map((item) => (
            <div
              className="flex py-5 px-6 gap-1 items-center rounded-[32px] border border-gray shadow1 bg-white flex-col max-w-80 text-center"
              key={item.name}
            >
              {item.icon}
              <h5 className="text-xl font-bold pt-4">{item.name}</h5>
              <p>{item.desciption}</p>
            </div>
          ))}
        </div>
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
  );
};

export default Tokenomics;
