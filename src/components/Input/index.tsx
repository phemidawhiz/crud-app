import React from "react";
type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue?: (e: string) => void;
  search?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input = ({
  value = "",
  search = true,
  onChange,
  className = "",
  ...rest
}: InputProps) => {
  return (
    <div className="flex items-center justify-start w-[100%]">
      {/* {search && <FaSearch className="mr-[-42px]" size={18} opacity={0.5} />} */}
      <input
        value={value}
        onChange={onChange}
        className={
          "p-2 px-4 border-2 border-gray rounded-lg outline-none disabled:bg-gray disabled:cursor-not-allowed focus:border-purple w-full" +
          " " +
          className
        }
        {...rest}
      />
    </div>
  );
};

export default Input;
