
import { RotatingLines } from "react-loader-spinner";

const PageLoader = () => {
    const style = {
        display: "flex",
        placeContent: "center",
    }
  return (
    <div style={style}>
      <RotatingLines
        strokeColor="#ecaa00"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default PageLoader