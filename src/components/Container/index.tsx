import React from "react";
import { IChildren } from "../../utils/types";

const Container = ({ children }: IChildren) => {
  return <div className="px-8 md:px-16 min-h-screen bg-light">{children}</div>;
};

export default Container;
