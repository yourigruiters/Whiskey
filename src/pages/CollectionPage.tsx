import { useEffect, useState } from "react";
import CoverImage, { ICoverImage } from "./components/CoverImage";
import Title from "./components/Title";
import axios from "axios";
import Tabs, { TTabs } from "./components/tabs/Tabs";
import Whiskey, { IWhiskey } from "./components/whiskey/Whiskey";

const CollectionPage = () => {
  const [activeTab, setActiveTab] = useState<TTabs>("all");
  const [articles, setArticles] = useState<ICoverImage[]>([]);
  const [whiskies, setWhiskies] = useState<IWhiskey[]>([]);
  const [whiskiesToDisplay, setWhiskiesToDisplay] = useState<IWhiskey[]>([]);

  useEffect(() => {
    axios.get("/mockAPI/articles.json").then((resp) => {
      setArticles(resp.data);
    });

    axios.get("/mockAPI/whiskies.json").then((resp) => {
      setWhiskies(resp.data);
    });
  }, []);

  useEffect(() => {
    if (activeTab === "all") {
      setWhiskiesToDisplay(whiskies);
      return;
    }

    const newWhiskies = whiskies.filter(
      (whisky) => whisky.region === activeTab
    );

    setWhiskiesToDisplay(newWhiskies);
  }, [activeTab, whiskies]);

  const handleTabClick = (tab: TTabs) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Title title="Whiskey selection" />
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <section className="flex flex-col flex-wrap justify-center items-center w-full h-auto gap-y-20 gap-x-12 md:flex-row lg:justify-around">
        {whiskiesToDisplay.map(
          ({ title, image, cost, region, tasting_notes }) => {
            return (
              <Whiskey
                key={title}
                title={title}
                image={image}
                cost={cost}
                region={region}
                tasting_notes={tasting_notes}
              />
            );
          }
        )}
      </section>
      {articles.map(({ title, teaser, url, img }) => {
        return (
          <CoverImage
            key={title}
            title={title}
            teaser={teaser}
            url={url}
            img={img}
          />
        );
      })}
    </>
  );
};

export default CollectionPage;
