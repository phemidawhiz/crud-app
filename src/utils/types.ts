import React from "react";

export interface AppRoute {
  element: React.ReactNode;
  path: string;
}

export interface ISetTab {
  setTab: (e: string) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IContract {
  activated: boolean;
  website: string;
  title: string;
  representedBy: string;
  companyName: string;
  email: string;
  telephoneFax: string;
  companyAddress: string;
  nationality: string;
  companyRegistrationNumber: string;
}
