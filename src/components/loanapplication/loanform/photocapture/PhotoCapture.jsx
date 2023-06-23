import PropTypes from "prop-types"
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react";
import { AiOutlineCamera } from "react-icons/ai";

import "./PhotoCapture.css";

const PhotoCapture = ({ func }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    func(imageSrc)
  }, [webcamRef]);

  // retake capture function
  const retake = useCallback(() => {
    setImgSrc(null);
  }, []);

  // submit capture function
  const submit = useCallback(() => {
    // hide retake button
    // show submit button
    const retakeBtn = document.querySelector(".RetakeBtn");
    retakeBtn.style.display = "none";
    const saveBtn = document.querySelector(".SaveBtn");
    saveBtn.style.display = "none";
    const captureMsg = document.querySelector(".CaptureMsg");
    captureMsg.innerHTML = "Photos saved successfully!";
  }, []);

  // handle take photos container
  const takePhotos = useCallback(() => {
    const container = document.querySelector(".Container");
    container.style.display = "none";
    const captureContainer = document.querySelector(".CaptureContainer");
    captureContainer.style.display = "block";
  }, []);

  return (
    <>
      <div className="Container" onClick={takePhotos}>
        <AiOutlineCamera className="CameraIcon" />
        <p className="Text">Take a Photos</p>
      </div>

      <div className="CaptureContainer">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) : (
          <Webcam
            height={280}
            width={280}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.8}
          />
        )}
        <div>
          {imgSrc ? (
            <div className="BtnCon">
              <button className="CapBtn RetakeBtn" onClick={retake}>
                Retake
              </button>
              <button className="CapBtn SaveBtn" onClick={submit}>
                Save
              </button>
              <p className="CaptureMsg"></p>
            </div>
          ) : (
            <div className="BtnCont">
              <button className="CapBtn" onClick={capture}>
                Capture
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

PhotoCapture.propTypes = {
  func: PropTypes.func
}

export default PhotoCapture;
