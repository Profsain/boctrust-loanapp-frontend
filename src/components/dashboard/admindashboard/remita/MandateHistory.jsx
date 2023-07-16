import Headline from "../../../shared/Headline";
import BocButton from "../../shared/BocButton";

const MandateHistory = () => {
     const styles = {
       btnBox: {
         display: "flex",
         justifyContent: "center",
       },
     };
  return (
    <div>
      <div>
        <Headline text="View by:" />
        <div style={styles.btnBox}>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Disbursement Today
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Date Range
          </BocButton>
          <BocButton margin="0 18px" bgcolor="#ecaa00" bradius="25px">
            Specific User
          </BocButton>
        </div>
      </div>
    </div>
  );
};

export default MandateHistory;
