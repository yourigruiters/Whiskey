import { FC } from "react";
import { Link } from "react-router-dom";
import { TTabs } from "../tabs/Tabs";
import Swipe from "./components/Swipe";
import Tasting from "./components/Tasting";
import classNames from "classnames";

export interface IWhiskey {
  title: string;
  image: string;
  cost: number;
  region: TTabs;
  tasting_notes: string[];
  checkoutPage?: boolean;
}

const Whiskey: FC<IWhiskey> = ({
  title,
  image,
  cost,
  region,
  tasting_notes,
  checkoutPage = false,
}) => {
  return (
    <Link
      to={`/whiskey/${title}`}
      className={classNames(
        "relative flex flex-row justify-between w-full h-[544px] bg-black",
        {
          "max-w-[800px] cursor-default": checkoutPage,
          "max-w-[400px]": !checkoutPage,
        }
      )}
    >
      <Swipe region={region} />
      <div className="relative flex flex-col justify-end gap-y-2 w-full h-auto p-9 text-white">
        <p className="text-4xl font-bold capitalize">{title}</p>
        <p className="text-lg text-gray capitalize">{region}</p>
        <p className="mt-3 text-4xl font-bold">${cost}</p>
        <Tasting region={region} tasting_notes={tasting_notes} />
      </div>
      <div
        className={classNames("flex justify-center items-center", {
          "w-full md:static": checkoutPage,
          "absolute -right-10 -bottom-5": !checkoutPage,
        })}
      >
        <img
          src={image}
          alt="Whiskey-image"
          className={classNames("w-full", {
            "absolute -right-10 bottom-0 w-[160px] md:static md:w-[205px] md:h-auto":
              checkoutPage,
            "min-w-[160px] max-w-[205px] max-h-[400px]": !checkoutPage,
          })}
        />
      </div>
    </Link>
  );
};

export default Whiskey;
