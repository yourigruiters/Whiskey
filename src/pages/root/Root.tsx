import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <section className="flex flex-col items-center gap-y-8 max-w-[1500px] w-full h-auto my-10 px-8 md:px-12 md:gap-y-16">
      <Outlet />
    </section>
  );
};

export default Root;
