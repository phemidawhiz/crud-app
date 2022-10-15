import React from "react";

type ButtonProps = {
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`rounded-md bg-purple py-2 px-2 flex justify-center h-[48px] font-bold text-white word-wrap text-sm hover:bg-dark-violet ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
