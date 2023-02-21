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

interface ITasting {
  region: TTabs;
  tasting_notes: string[];
}

const Tasting: FC<ITasting> = ({ region, tasting_notes }) => {
  return (
    <div
      className={classNames(
        "relative -left-14 flex justify-between items-center gap-x-10 w-fit max-w-[300px] h-auto p-5 px-10 rounded-md mt-4",
        ` ${colorVariantsActive[region]}}`
      )}
    >
      {tasting_notes.map((taste) => {
        return (
          <p key={taste} className="capitalize text-sm w-auto">
            {taste}
          </p>
        );
      })}
    </div>
  );
};

export default Tasting;
