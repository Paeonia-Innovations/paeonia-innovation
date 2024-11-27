import React, { useState } from "react";
import "../css/productIntroVideo.css";

export const ProductIntroVideo = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (event) => {
    setIsPlaying(true);
    event.preventDefault();
  };
  return (
    <div id="productIntroVideo">
      <div className="container">
        <div className="col-md-12">
          <h2 className="video-header">Production Introduction Video</h2>
          {/* <div className="video-container"> */}

          <div className="video-wrapper">
            {!isPlaying ? (
              <div
                className="thumbnail-container"
                onClick={handlePlay}
                role="button"
                and
                aria-label="Play Video"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/PIVideoImage2.png`} // Thumbnail image
                  alt="Video Thumbnail"
                  className="video-thumbnail"
                />
                <div className="play-button"></div>
              </div>
            ) : (
              <div className="video-placeholder">
                <video className="product-video" controls autoPlay>
                  <source
                    src={`${process.env.PUBLIC_URL}/SpectrometerIntroVideo.mp4`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* <video className="product-video" controls>
            <source
              src={`${process.env.PUBLIC_URL}/SpectrometerProductVideo.mp4`}
              type="video/mp4"
            />
          </video> */}

          {/* <div className="video-label">
            Mid IR Spectrometer Product Showcase
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
