import React from "react";

type ButtonProps = {
  size?: "mini" | "large";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const base =
  "bg-[#A30005] text-white sm:rounded-[5px] rounded-[3px]  font-['Inter'] font-[600] hover:bg-[#800004] transition-colors";

const sizes = {
  mini:  "sm:h-[40px] h-[20px] w-[90px] sm:w-[150px] sm:text-[14px] text-[12px] px-4",        
  large: "sm:h-[40px] h-[20px] w-[200px] sm:w-[450px] sm:text-[16px] text-[12px] px-6",         
};

const Button: React.FC<ButtonProps> = ({
  size = "mini",
  className = "",
  children = "Order now",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
