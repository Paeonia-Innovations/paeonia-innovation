import React, { useEffect, useState, useRef } from "react";

const items = [
  "Live tracer concentration monitoring with an integrated calibration model",
  "Automated RTD plotting at the end of each measurement",
  "Fast, accurate flow characterization for better reactor insights",
];

export const RTDP3 = (props) => {
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
    <div id="rtdP3" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rtdPage3">
              <h3>ONE-CLICK RTD ANALYSIS MADE SIMPLE</h3>

              <div className="col-12 col-md-12">
                <div className="spacer"></div>

                <p>
                  {" "}
                  Our built-in RTD analysis function makes measuring residence
                  time distribution effortless-just one click to start.
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "20px",
                      textAlign: "left",
                    }}
                  >
                    {items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  No complex setup. No manual calculations. Just percise,
                  real-time data to help you optimize your continue reactor
                  design with confidence.
                </p>
                <div className="spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
