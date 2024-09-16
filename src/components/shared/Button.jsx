import React from "react";

const Button = ({
  label,
  icon,
  variant = "primary", // primary, secondary
  onClick,
  alt,
  className,
  iconClassName,
  position = "start",
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-white border border-light-gray hover:bg-gray";
    case "iconSize": 
    return "bg-transparent p-0"
      default:
        return "bg-[#2B8872] text-white hover:bg-primary-hover"; // Primary button color
    }
  };

  const buttonClasses = `${getButtonClasses()} rounded-2xl py-4 px-8 inline-flex items-center justify-center font-bold font-display text-sm 2xl:text-base`;
  const size = "h-6 w-6";
  return (
    <button onClick={onClick} className={`${buttonClasses} ${className}`}>
         {(icon && position === "start") && (
       <span className={`mr-2 ${iconClassName}`}>
         <img src={icon} alt={alt} className={size} />
       </span>
     )}
    {label && label }
     {(icon && position === "end") && (
       <span className={`ml-2 ${iconClassName}`}>
         <img src={icon} alt={alt} className={size} />
       </span>
     )}
   </button>
  );
};

export default Button;
