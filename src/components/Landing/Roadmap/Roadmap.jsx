import React from "react";
import { IconCheckedCircle, IconCircle } from "../../iocns/Icons";
import Button from "../../shared/Button";

const roadmapItem = [
  {
    phase: "Phase 1",
    status: "Active",
    isStatus: true,
    heading: "Foundation Path",
    listItems: [
      {
        title: "Blueprint Release",
        checked: true,
      },
      {
        title: "Website Launch",
        checked: true,
      },
      {
        title: "Community Development",
        checked: true,
      },
      {
        title: "Smart Contract Development",
        checked: false,
      },
      {
        title: "Security and Audits",
        checked: false,
      },
      {
        title: "Presale Launch",
        checked: false,
      },
    ],
  },

  {
    phase: "Phase 2",
    status: "Upcoming",
    isStatus: false,
    heading: "Future Map",
    listItems: [
      {
        title: "Community Growth",
        checked: false,
      },
      {
        title: "Presale Expansion",
        checked: false,
      },
      {
        title: "Marketing Thrust",
        checked: false,
      },
      {
        title: "KOLs Engagement",
        checked: false,
      },
      {
        title: "Platform Development",
        checked: false,
      },
      {
        title: "Giveaway Launch",
        checked: false,
      },
    ],
  },
  {
    phase: "Phase 3",
    status: "Upcoming",
    isStatus: false,
    heading: "Success Chart",
    listItems: [
      {
        title: "Presale Conclusion",
        checked: false,
      },
      {
        title: "Platform Alpha Release",
        checked: false,
      },
      {
        title: "Token distribution",
        checked: false,
      },
      {
        title: "CMC and CG Listing",
        checked: false,
      },
      {
        title: "Initial DEX Listing",
        checked: false,
      },
      {
        title: "Experience the Tokenization",
        checked: false,
      },
    ],
  },
];
const Roadmap = () => {
  return (
    <>
      <div className="px-20 py-40">
        <h2 className="uppercase text-center">Roadmap</h2>
        <div className="grid grid-cols-3  items-center gap-8 ">
          {roadmapItem.map((file) => (
            <div className="px-[48px] pt-[72px] pb-8 rounded-[48px] border border-gray shadow1 bg-white mx-auto flex-col justify-center relative mt-56 w-full">
              <div className="flex justify-between items-center px-8 py-6   bg-dark-black text-white rounded-full -mt-28">
                <p className="uppercase font-normal font-display pr-4 text-white">
                  {file.phase}
                </p>
                <p
                  className={`${
                    file.isStatus ? "text-light-green" : "text-gray-600"
                  }`}
                >
                  {file.status}
                  {file.isStatus && (
                    <span className="bg-light-green inline-block w-2.5 h-2.5 rounded-full ml-1"></span>
                  )}
                </p>
              </div>
              <div className="mt-7">
                <h3 className="tracking-normal text-dark-black leading-none font-normal">
                  {file.heading}
                </h3>
                <ul className="mt-6">
                  {file.listItems.map((item) => (
                    <li key={item.title} className="pb-2 flex last:pb-0">
                      {item.checked ? <IconCheckedCircle /> : <IconCircle />}
                      <p className="pl-2">{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button
            variant="secondary"
            label="Whitepaper"
            icon="/img/Form.svg"
            alt="Money_fill"
            onClick={() => {}}
            position="end"
            className="uppercase font-display font-normal z-30"
          />
        </div>
      </div>

      <div className="px-20 py-40">
        <h2 className="uppercase text-center">How to Buy</h2>
        <div className="grid grid-cols-2  gap-8 ">
          <div className="px-12 py-16 rounded-[48px] border border-gray shadow1 mx-auto flex-col justify-center relative mt-16 w-full bg-dark-black text-white">
            <h3 className="tracking-normal  leading-none font-normal pb-6">
              Method 1: Signup
            </h3>
            <ul className="text-2md font-medium list-disc pl-6">
              <li>
                Enter your first name, last name, phone number, and email
                address.
              </li>
              <li>Enter a referral code (if any) or leave it blank.</li>
              <li>Accept the terms and sign up.</li>
              <li>Verify your email to create your account.</li>
              <li>Select the crypto you want to use for payment.</li>
              <li>Choose the correct network while selecting the crypto.</li>
              <li>Enter the USD amount and any bonus code.</li>
              <li>Click on "Purchase."</li>
              <li>
                A wallet address will be displayed; click on "Show QR code" if
                needed.
              </li>
              <li>
                Open your Metamask/Trust Wallet/Coinbase wallet and paste the
                wallet address.
              </li>
              <li>Enter the displayed amount and send it.</li>
              <li>Wait a few minutes for the transaction to complete.</li>
              <li>The tokens will be updated in your dashboard.</li>
            </ul>
          </div>
          <div className="px-12 py-16 rounded-[48px] border border-gray shadow1 mx-auto flex-col justify-center relative mt-16 w-full bg-white text-dark-black">
            <h3 className="tracking-normal  leading-none font-normal pb-6">
              Method 2: Wallet Connect
            </h3>
            <ul className="text-2md font-medium list-disc pl-6">
              <li>Click on "Wallet Connect" at the top right.</li>
              <li>
                Select Metamask/Trust Wallet or use the Wallet Connect option to
                scan.
              </li>
              <li>Click on "Buy Token."</li>
              <li>Select the crypto you want to use for payment.</li>
              <li>Choose the correct network while selecting the crypto.</li>
              <li>Enter the USD amount and any bonus code.</li>
              <li>Click on "Purchase."</li>
              <li>
                A wallet address will be displayed; click on "Show QR code" if
                needed.
              </li>
              <li>
                Directly approve the transaction in your wallet OR manually send
                to the displayed wallet address.
              </li>
              <li>
                Once the transaction is approved, it will be completed, and you
                can view the purchase history.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
        <Button
                label="PURCHASE PRESALE"
                icon="/img/Money_fill.svg"
                alt="Money_fill"
                onClick={() => {}}
                position="end"
                className="uppercase font-display font-normal z-30"
              />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
