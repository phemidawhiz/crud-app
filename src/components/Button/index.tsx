import React from "react";

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Loader = () => (
  <div className="animate-spin h-[24px] ml-4 rounded-full w-[24px] text-white border-2 border-purple border-t-light border-l-light"></div>
);
const Button = ({
  children,
  isLoading,
  isDisabled,
  loadingText = "",
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={`rounded-md bg-purple py-2 px-2 text-sm flex flex-row justify-center items-center text-white h-[48px] disabled:bg-gray disabled:cursor-not-allowed disabled:text-black font-bold text-white hover:bg-dark-violet ${className}`}
    >
      {isLoading && loadingText ? loadingText : children}
      {isLoading && <Loader />}
    </button>
  );
};

export default Button;
