import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <section className="flex flex-col items-center gap-y-10 max-w-[1200px] w-full h-auto my-10 px-4">
      <Outlet />
    </section>
  );
};

export default Root;
