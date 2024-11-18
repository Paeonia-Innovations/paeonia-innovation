import React, { useEffect, useState, useRef } from "react";

export const RobustAndCompact = (props) => {
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
    <div id="robustAndCompact" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className="col-12 col-md-6">
            <div className={`${inView ? "animated" : ""}`}>
              <div className="robust-item">
                <h3>ROBUST AND COMPACT</h3>
                <div className="spacer"></div>
                <p>
                  At a size of 5 * 5.5 * 6 cm, the Novel Mid-IR Spectrometer is
                  a fraction of the size of all traditional spectrometers. It
                  does not use any moving components or fragile optical fibers,
                  allowing you the freedom to decide where and how you want to
                  use the spectrometer.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
          >
            <img
              src="img/portfolio/Model.png"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
