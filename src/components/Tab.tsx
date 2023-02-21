import { FC } from "react";
import { Link } from "react-router-dom";

interface ITab {
  title: string;
}

const Tab: FC<ITab> = ({ title }) => {
  return (
    <Link to="/collection" tabIndex={0}>
      <div className="flex justify-center items-center w-auto h-auto py-2 px-4 rounded-3xl border cursor-pointer text-gray border-gray hover:text-black hover:border-black hover:bg-grayish">
        <p className="capitalize">{title}</p>
      </div>
    </Link>
  );
};

export default Tab;
