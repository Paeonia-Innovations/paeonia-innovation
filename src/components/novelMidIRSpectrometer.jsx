import React, { useEffect, useState, useRef } from "react";

export const NovelMidIRSpectrometer = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          // Adjust threshold as needed
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="novelMidIRSpectrometer" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="spectrometer">
              <h3>Novel Mid-IR Spectrometer</h3>

              <div className="col-12 col-md-6">
                <div className="spacer"></div>
                <h4>Miniaturized Spectrosopy</h4>
                <p>
                  {" "}
                  Robust and easy-to-use infrared spectrometer that fits in the
                  palm of your hands for your real-time, chemical composition
                  measurements.
                </p>
                <div className="spacer"></div>
                <h4>Simple</h4>
                <p>
                  {" "}
                  Just plug in the module via USB to a computer with the
                  software installed and you are good to go even in the field.
                </p>
              </div>
              <div
                className={`col-12 col-md-6 fade-in-up ${
                  inView ? "scale-up" : ""
                }`}
              >
                <div className="img-container">
                  <img
                    src="img/portfolio/DSC00402.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {showFullImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setShowFullImage(false)}
        >
          <span
            className="close-button"
            onClick={() => setShowFullImage(false)}
          >
            &times;
          </span>
          <img
            src="img/portfolio/DSC00402.png"
            alt="Full size"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )} */}
    </div>
  );
};
