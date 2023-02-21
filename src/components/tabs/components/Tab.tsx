import { FC } from "react";
import classNames from "classnames";
import { TTabs } from "../Tabs";
import {
  activeColorVariants,
  colorVariants,
} from "../../../style/colorVariants";

interface ITab {
  title: TTabs;
  active?: boolean;
  handleTabClick: (tab: TTabs) => void;
}

const Tab: FC<ITab> = ({ title, active = false, handleTabClick }) => {
  return (
    <button
      className={classNames(
        "flex justify-center items-center w-auto h-auto py-2 px-4 rounded-3xl border cursor-pointer",
        {
          "text-gray border-gray": !active,
        },
        ` ${active ? activeColorVariants[title] : colorVariants[title]}}`
      )}
      onClick={() => handleTabClick(title)}
    >
      <p className="capitalize">{title}</p>
    </button>
  );
};

export default Tab;
