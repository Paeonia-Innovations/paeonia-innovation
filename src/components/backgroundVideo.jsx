import React, { useEffect } from "react";
import "../css/backgroundVideo.css";

export const BackgroundVideo = (props) => {
  useEffect(() => {
    // Add a class after 5 seconds to control the video's opacity or blur effect
    const timer = setTimeout(() => {
      const videoContainer = document.querySelector(".video-container");
      if (videoContainer) {
        videoContainer.classList.add("fadedin"); // Add your CSS class for blurred effect
      }
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/pi_logo_video2.mp4`}
          type="video/mp4"
        ></source>
      </video>
      {/* <div className="overlay">
        <h1>Welcome to Our Company</h1>
        <p>Providing the best services to our customers.</p>
      </div> */}
    </div>
  );
};
