import { useEffect, useState } from "react";
import Title from "../components/Title";
import axios from "axios";
import Whiskey, { IWhiskey } from "../components/whiskey/Whiskey";
import { useParams } from "react-router-dom";
import Tab from "../components/Tab";
import Button from "../components/Button";

const WhiskeyPage = () => {
  const [whiskey, setWhiskey] = useState<IWhiskey | undefined>(undefined);
  const { title } = useParams();

  useEffect(() => {
    if (title) {
      axios.get("/mockAPI/whiskies.json").then((resp) => {
        const whiskeys: IWhiskey[] = resp.data;

        const currentWhiskey = whiskeys.find(
          (singleWhiskey) => singleWhiskey.title === title
        );

        setWhiskey(currentWhiskey);
      });
    }
  }, []);

  if (!whiskey) {
    return <></>;
  }

  return (
    <>
      <Title title={whiskey.title} />
      <Tab title="Go back" />
      <section className="flex flex-col items-center gap-y-20 w-full h-auto">
        <Whiskey
          title={whiskey.title}
          image={`../public/${whiskey.image}`}
          cost={whiskey.cost}
          region={whiskey.region}
          tasting_notes={whiskey.tasting_notes}
          checkoutPage
        />
        <Button title="Purchase now" region={whiskey.region} />
      </section>
    </>
  );
};

export default WhiskeyPage;
