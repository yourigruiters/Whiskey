import { FC } from "react";

interface ITitle {
  title: string;
}

const Title: FC<ITitle> = ({ title }) => {
  return (
    <section className="w-full h-auto text-center">
      <h1 className="font-bold text-3xl uppercase italic md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </section>
  );
};

export default Title;
