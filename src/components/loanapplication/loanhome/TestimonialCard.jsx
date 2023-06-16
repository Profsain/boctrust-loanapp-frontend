import Headline from "../../shared/Headline";

const TestimonialCard = () => {
  const styles = {
    cardStyle: {
      width: "350px",
      minHeight: "300px",
      padding: "38px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      fontSize: "1.2rem",
      fontWeight: "500",
    },

    img: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: "#000",
      border: "2px solid #ecaa00",
    },

    profile: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  }

  return (
    <div style={styles.cardStyle}>
      <p>
        “After so many years of doing my petyy trading without much success, a
        friend introduced me to Boctru...” <span style={{color: "#145088"}}>read more</span>
      </p>
      <div style={styles.profile}>
        <img src="images/avater.jpg" alt="" style={styles.img} />
        <div>
          <Headline spacer="0" fontSize="22px" text="John Doe" />
          <p>Businessman</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard