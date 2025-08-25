import React, { useEffect, useState, useRef } from "react";

export const RTDP4 = (props) => {
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
    <div id="rtdP4" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rtdPage4">
              <h3>REAL-WORLD APPLICATION: RTD ANALYSIS IN ACTION</h3>

              <div className="col-12 col-md-12">
                <div className="spacer"></div>

                <p>
                  <ul
                    style={{
                      listStyleType: "none",
                      paddingLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    <li>
                      <strong>Tracer:</strong> 10% Acetone in Ethanol
                    </li>
                    <li>
                      <strong>Solvent:</strong> Ethanol
                    </li>
                    <li>
                      <strong>Reactor Type:</strong> Coiled tubular reactor
                    </li>
                    <li>
                      <strong>Dimensions:</strong> 1/4" OD, 4.35 mm ID, 1 meter
                      length
                    </li>
                    <li>
                      <strong>Method:</strong> Step Input experiment
                    </li>
                    <li>
                      <strong>Flow rate:</strong> 0.4, 0.8, and 1.0 mL/min
                    </li>
                  </ul>
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
