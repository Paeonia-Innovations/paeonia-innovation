import React from "react";
import "../css/productIntroVideo.css";

export const ProductIntroVideo = (props) => {
  return (
    <div id="productIntroVideo">
      <div className="container">
        <div className="col-md-12">
          <video className="product-video" controls>
            <source
              src={`${process.env.PUBLIC_URL}/productVideo.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};
