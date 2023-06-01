import ExploreBoctrust from "./explore/ExploreBoctrust";
import HomeCarousel from "./carousel/HomeCarousel";
import Overview from "./overview/Overview";
import Calculator from "./calculator/Calculator";
import BlogList from "./blogexperience/BlogList";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <ExploreBoctrust />
      <Overview />
      <Calculator />
      <BlogList />
    </>
  );
};

export default Home;
