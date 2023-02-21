import { FC, useState } from "react";
import classNames from "classnames";

export interface ICoverImage {
  title: string;
  teaser: string;
  url: string;
  img: string;
}

const CoverImage: FC<ICoverImage> = ({ title, teaser, url, img }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleCLick = () => {
    window.open(url, "_blank");
  };

  return (
    <section
      className="w-full h-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCLick}
    >
      <div className="relative w-full h-auto rounded-md overflow-hidden">
        <img
          src={img}
          alt="CoverImage"
          className={classNames("transition-all", {
            "scale-105": isHovered,
          })}
        />
        <div className="absolute z-30 top-0 left-0 w-full h-full bg-black bg-opacity-50">
          <div className="absolute z-50 bottom-0 left-0 flex flex-col gap-y-2 p-4 md:p-10 lg:p-20">
            <h4 className="w-2/3 font-bold text-2xl uppercase italic text-white md:w-1/2 md:text-3xl lg:text-4xl lg:w-1/2">
              {title}
            </h4>
            <p className="w-4/5 text-xs text-white md:w-2/5 md:text-sm lg:w-3/5">
              {teaser}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverImage;
