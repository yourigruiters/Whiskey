import { FC } from "react";
import classNames from "classnames";
import { TTabs } from "../../tabs/Tabs";

const colorVariantsActive = {
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

interface ISwipe {
  region: TTabs;
}

const Swipe: FC<ISwipe> = ({ region }) => {
  return (
    <div
      className={classNames(
        "absolute -right-2 top-12 w-16 h-1",
        ` ${colorVariantsActive[region]}}`
      )}
    />
  );
};

export default Swipe;
