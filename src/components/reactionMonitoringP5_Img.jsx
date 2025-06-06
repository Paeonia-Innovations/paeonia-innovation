import React, { useEffect, useState, useRef } from "react";

export const ReactionMonitoringP5_Img = (props) => {
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
    <div id="reactionMonitoringP5_Img" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className={`${inView ? "animated" : ""} rmPage5_Img`}
                >
                  <h3>{d.title}</h3>
                  <div className="spacer"></div>
                  <div className="row align-items-center">
                    <div
                      className={`col-12 col-md-6 fade-in-up ${
                        inView ? "scale-up" : ""
                      }`}
                    >
                      <img
                        src="img/portfolio/conc plot.png"
                        className="img-responsive"
                        alt=""
                      />

                      <img
                        src="img/portfolio/predicted conc.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
