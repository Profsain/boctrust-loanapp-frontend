import ExploreBoctrust from "./explore/ExploreBoctrust";
import HomeCarousel from "./carousel/HomeCarousel";
import Overview from "./overview/Overview";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ExploreBoctrust />
      <Overview />
    </>
  );
};

export default Home;
