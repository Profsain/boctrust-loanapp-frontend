
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Headline from "../shared/Headline";

const SearchBox = () => {
    const styles = {
        container: {
            position: "relative",
            width: "60%",
            padding: "1.5rem",
            marginTop: "-6rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "16px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            
        },
        input: {
            width: "100%",
            padding: "1rem 2rem",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            borderRadius: "10px",
            backgroundColor: "#f9e2a8",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

        },
        icon: {
          position: "absolute",
          right: "3rem",
          top: "60%",
          transform: "translateY(-50%)",
            cursor: "pointer",
          fontSize: "1.5rem",
        },
    }

  return (
    <div style={styles.container} className="SearchContainer">
      <Headline
        spacer="0 0 12px 0"
        fontSize="1.3rem"
        text="How can we help you today?"
      />
      <input
        style={styles.input}
        type="text"
        placeholder="Enter your search term here...."
      />
      <FontAwesomeIcon
              icon={faSearch}
                style={styles.icon}
      />
    </div>
  );
}

export default SearchBox