import { FC } from "react";
import classNames from "classnames";
import { TTabs } from "../../tabs/Tabs";
import { gradientColorVariantsActive } from "../../../style/colorVariants";

interface ITasting {
  region: TTabs;
  tasting_notes: string[];
}

const Tasting: FC<ITasting> = ({ region, tasting_notes }) => {
  return (
    <div
      className={classNames(
        "relative -left-14 flex justify-between items-center gap-x-10 w-fit max-w-[300px] h-auto p-5 px-10 rounded-md mt-4 skew-x-12",
        ` ${gradientColorVariantsActive[region]}}`
      )}
    >
      {tasting_notes.map((taste) => {
        return (
          <p key={taste} className="capitalize text-sm w-auto -skew-x-12">
            {taste}
          </p>
        );
      })}
    </div>
  );
};

export default Tasting;
