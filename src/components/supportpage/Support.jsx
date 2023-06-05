import Header from "../shared/Header";
import Headline from "../shared/Headline";
import SearchBox from "./SearchBox";
import "./Support.css";

const Support = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#145088",
    },
  };

  return (
    <>
      <Header imgurl="public/images/support.png" />
      <div className="container-fluid" style={styles.container}>
        <SearchBox />
      </div>

      <div className="container-fluid" style={styles.container}>
        {/* knowledge base section */}
        <div className="container KnowledgeBase">
          <Headline color="#fff" align="left" text="Knowledge Base" />
          <Headline color="#fff" fontSize="1.4rem" align="left" text="General" />
          <div className="Divider"></div>
        </div>
        {/* end of knowledge base section */}
      </div>
    </>
  );
};

export default Support;
