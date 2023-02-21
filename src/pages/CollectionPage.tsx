import CoverImage from "./components/CoverImage";
import Title from "./components/Title";

const CollectionPage = () => {
  return (
    <>
      <Title title="Whiskey selection" />
      <CoverImage
        title="The best whiskies from scotland"
        description="Ever wanted to get into scotch but don't know where to start? We've reviewed some of the most popular whiskies and break them down by their tasting notes."
        link="http://www.origin.scot/article"
        image="whiskey-glass.jpg"
      />
    </>
  );
};

export default CollectionPage;
