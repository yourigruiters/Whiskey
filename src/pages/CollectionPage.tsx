import { useEffect, useState } from "react";
import CoverImage, { ICoverImage } from "./components/CoverImage";
import Title from "./components/Title";
import axios from "axios";
import Tabs, { TTabs } from "./components/tabs/Tabs";

const CollectionPage = () => {
  const [activeTab, setActiveTab] = useState<TTabs>("all");
  const [articles, setArticles] = useState<ICoverImage[]>([]);
  const [whiskies, setWhiskies] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/mockAPI/articles.json").then((resp) => {
      console.log(resp.data);
      setArticles(resp.data);
    });

    axios.get("/mockAPI/whiskies.json").then((resp) => {
      console.log(resp.data);
      setWhiskies(resp.data);
    });
  }, []);

  const handleTabClick = (tab: TTabs) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Title title="Whiskey selection" />
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
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
