import { FC } from "react";
import classNames from "classnames";
import { TTabs } from "../../tabs/Tabs";
import { gradientColorVariantsActive } from "../../../style/colorVariants";

interface ISwipe {
  region: TTabs;
}

const Swipe: FC<ISwipe> = ({ region }) => {
  return (
    <div
      className={classNames(
        "absolute -right-2 top-12 w-16 h-1",
        `${gradientColorVariantsActive[region]}}`
      )}
    />
  );
};

export default Swipe;
