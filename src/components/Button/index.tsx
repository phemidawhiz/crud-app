import React from "react";

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Loader = () => (
  <div className="animate-spin h-[24px] ml-4 rounded-full w-[24px] text-white border-2 border-t-0 border-l-0 border-r-0"></div>
);
const Button = ({
  children,
  isLoading,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`rounded-md bg-purple py-2 px-2 text-sm flex flex-row justify-center items-center text-white h-[48px] font-bold text-white hover:bg-dark-violet ${className}`}
    >
      {children}
      {isLoading && <Loader />}
    </button>
  );
};

export default Button;
