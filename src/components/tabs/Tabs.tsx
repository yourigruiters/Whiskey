import { FC } from "react";
import Tab from "./components/Tab";

export type TTabs =
  | "all"
  | "campbeltown"
  | "highlands"
  | "islands"
  | "islay"
  | "lowlands"
  | "speyside";

const availableTabs: TTabs[] = [
  "all",
  "campbeltown",
  "highlands",
  "islands",
  "islay",
  "lowlands",
  "speyside",
];

interface ITabs {
  activeTab: TTabs;
  handleTabClick: (tab: TTabs) => void;
}

const Tabs: FC<ITabs> = ({ activeTab, handleTabClick }) => {
  return (
    <section className="flex flex-row flex-wrap justify-center w-full h-auto gap-2">
      {availableTabs.map((availableTab) => {
        return (
          <Tab
            key={availableTab}
            title={availableTab}
            active={activeTab === availableTab}
            handleTabClick={handleTabClick}
          />
        );
      })}
    </section>
  );
};

export default Tabs;
