import "../Dashboard.css"

const NextPreBtn = () => {
    const styles = {
        container: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
        },
        btnBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "15%",
            fontSize: "19px",
        },
        btn: {
            padding: "5px 15px",
            border: "none",
            backgroundColor: "#145098",
        },
        btnP: {
            borderRaduis: "25px 0 0 25px",
        },
        img: {
            width: "20px",
            height: "20px",
        }

    }
  return (
    <div style={styles.container}>
      <div style={styles.btnBox}>
        <button style={styles.btn} id="PrevBtn">
          <img style={styles.img} src="src/assets/images/arrowleft.png" alt="prev" />{" "}
        </button>
        <p>1</p>
        <button style={styles.btn} id="NextBtn">
          <img style={styles.img} src="src/assets/images/arrowright.png" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default NextPreBtn;