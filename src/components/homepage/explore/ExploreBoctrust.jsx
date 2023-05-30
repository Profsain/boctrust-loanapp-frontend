import "./Explore.css";

const ExploreBoctrust = () => {
  return (
    <div className="Container">
      <div className="Explore">
        <h2>Explore Boctrust Mfb</h2>
        <p>
          We are committed to delivering excellent services, which we constantly
          aim to improve upon as a means to achieving optimum customer
          satisfaction. We maintain confidentiality in all our dealings with our
          customers. Within our short time in the industry Boctrust Mfb has
          proven that we are a bank of now and the future.
        </p>
      </div>
      <div className="row">
        <div className="col-md-3 ExCard">
          <img src="src/assets/Vector.png" alt="safe-banking" />
          <h5>Safe & Secure</h5>
        </div>
        <div className="col-md-3 ExCard">
          <img src="src/assets/online.png" alt="safe-banking" />
          <h5>Online Banking</h5>
        </div>
        <div className="col-md-3 ExCard">
          <img src="src/assets/easy.png" alt="easy-access" />
          <h5>Easy to access</h5>
        </div>
        <div className="col-md-3 ExCard">
          <img src="src/assets/banking.png" alt="interest-icon" />
          <h5>Affordable interest rates</h5>
        </div>
      </div>
    </div>
  );
};

export default ExploreBoctrust;
