import Banner from "./banner/Banner";
import Map from "./map/Map";
import Most from "./most_news/Most";
import Partnership from "./partnership/Partnership";
import My_Services from "./services/Services";
import Statistics from "./statistics/Statistics";

export default function Home() {
  return (
    <>
      <Banner />
      <Statistics />
      <Most />
      <My_Services />
      <Map />
      <Partnership />
    </>
  );
}
