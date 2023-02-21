import { FC } from "react";
import classNames from "classnames";
import { TTabs } from "../Tabs";

const colorVariantsActive = {
  all: "text-black border-black bg-grayish",
  campbeltown: "text-campbeltown-default border-campbeltown",
  highlands: "text-highlands-default border-highlands",
  islands: "text-islands-default border-islands",
  islay: "text-islay-default border-islay",
  lowlands: "text-lowlands-default border-lowlands",
  speyside: "text-speyside-default border-speyside",
};

const colorVariants = {
  all: "text-black",
  campbeltown: "hover:text-campbeltown-default",
  highlands: "hover:text-highlands-default",
  islands: "hover:text-islands-default",
  islay: "hover:text-islay-default",
  lowlands: "hover:text-lowlands-default",
  speyside: "hover:text-speyside-default",
};

interface ITab {
  title: TTabs;
  active?: boolean;
  handleTabClick: (tab: TTabs) => void;
}

const Tab: FC<ITab> = ({ title, active = false, handleTabClick }) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center w-auto h-auto py-2 px-4 rounded-3xl border cursor-pointer",
        {
          "text-gray border-gray": !active,
        },
        ` ${active ? colorVariantsActive[title] : colorVariants[title]}}`
      )}
      onClick={() => handleTabClick(title)}
    >
      <p className="capitalize">{title}</p>
    </div>
  );
};

export default Tab;
