import { FC } from "react";
import { Link } from "react-router-dom";
import { TTabs } from "../tabs/Tabs";
import Swipe from "./components/Swipe";
import Tasting from "./components/Tasting";

export interface IWhiskey {
  title: string;
  image: string;
  cost: number;
  region: TTabs;
  tasting_notes: string[];
}

const Whiskey: FC<IWhiskey> = ({
  title,
  image,
  cost,
  region,
  tasting_notes,
}) => {
  return (
    <Link
      to={`/whiskey/${title}`}
      className="relative flex flex-row justify-between max-w-[400px] w-full h-[544px] bg-black"
    >
      <Swipe region={region} />
      <div className="relative flex flex-col justify-end gap-y-2 w-full h-auto p-9 text-white">
        <p className="text-4xl font-bold capitalize">{title}</p>
        <p className="text-lg text-gray capitalize">{region}</p>
        <p className="mt-3 text-4xl font-bold">${cost}</p>
        <Tasting region={region} tasting_notes={tasting_notes} />
      </div>
      <div className="absolute -right-10 -bottom-5 flex justify-center items-center">
        <img
          src={image}
          alt="Whiskey-image"
          className="w-full min-w-[160px] max-w-[205px] max-h-[400px]"
        />
      </div>
    </Link>
  );
};

export default Whiskey;
function classNames(
  arg0: string,
  arg1: { "scale-105": any }
): string | undefined {
  throw new Error("Function not implemented.");
}
