import React from "react";
import Button from "../../shared/Button";

const Testimonial = () => {
  return (
    <div className="mt-[575px]">
      <div className="text-center max-w-3xl mx-auto">
        <h4 className="pb-4 font-normal font-display text-3xl uppercase leading-9">
          How Derent simplifies the real estate value chain
        </h4>
        <p className="px-16">
          One simple example of how Derent smart contracts works
        </p>
      </div>
      <div className="max-w-[810px] mx-auto mt-24 text-center">
        <div className="flex mb-16">
            <img src="/img/user_male.png" alt="user_male" className="-mr-10"/>
            <img src="/img/user_female.png" alt="user_female" className="-ml-10"/>
        </div>
        <h3 className="font-dmsans pb-6 tracking-normal">Two Parties Agree to Transact Using DeRent</h3>
        <p className="mb-6">This could be for the purchase and sale of a piece of property, or a simple one year rental agreement. The parties use the  DeRent platform to solidify the terms of their agreement in a  DeRent smart contract, which includes whatever terms and conditions the parties agreed to, including dates of payments due, amounts due, length of the agreement, penalties for non-compliance, etc.</p>
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
  );
};

export default Testimonial;
