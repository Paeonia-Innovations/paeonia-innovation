import React, { useEffect, useState, useRef } from "react";

export const RTDP1 = (props) => {
  const [inView, setInView] = useState(false);
  //const [showImage, setShowImage] = useState(false);
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
    <div id="rtdP1" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rtdPage1">
              <div className="col-12 col-md-7">
                <h3>CALCULATING RESIDENCE TIME DISTRIBUTION (RTD)</h3>
                <div className="spacer"></div>

                <p>
                  {" "}
                  Unlokc the full potential of your chemical processes with
                  Residence Time Distribution (RTD) analysis. RTD reveals how
                  long fluid elements spend inside your reactor-providing
                  powerful insights into flow patterns, reaction efficiency, and
                  system performance.
                </p>
                <div className="spacer"></div>
              </div>
              <div
                className={`col-12 col-md-5 fade-in-up ${
                  inView ? "scale-up" : ""
                }`}
              >
                <div className="img-container">
                  <img
                    src="img/portfolio/RTD.png"
                    className="img-responsive"
                    alt="Reaction Monitoring"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
