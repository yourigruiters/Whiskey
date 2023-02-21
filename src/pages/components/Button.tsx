import { FC } from "react";
import { TTabs } from "./tabs/Tabs";

const colorVariants = {
  all: "",
  campbeltown:
    "bg-gradient-to-r from-campbeltown-default to-campbeltown-hover opacity-0",
  highlands:
    "bg-gradient-to-r from-highlands-default to-highlands-hover opacity-0",
  islands: "bg-gradient-to-r from-islands-default to-islands-hover opacity-0",
  islay: "bg-gradient-to-r from-islay-default to-islay-hover opacity-0",
  lowlands:
    "bg-gradient-to-r from-lowlands-default to-lowlands-hover opacity-0",
  speyside:
    "bg-gradient-to-r from-speyside-default to-speyside-hover opacity-0",
};

interface IButton {
  title: string;
  region: TTabs;
}

const Button: FC<IButton> = ({ title, region }) => {
  return (
    <button
      className={`flex justify-center items-center p-4 font-bold text-xs rounded-sm uppercase transition-[background] text-white skew-x-12 sm:py-3 sm:px-6 md:py-4 md:px-8 md:font-bold md:text-sm ${colorVariants[region]}}`}
      type="submit"
    >
      <p className="-skew-x-12">{title}</p>
    </button>
  );
};

export default Button;
