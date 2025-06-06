import React, { useEffect, useState, useRef } from "react";

export const ReactionMonitoringP4 = (props) => {
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
    <div id="reactionMonitoringP4" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rmPage4">
              <h3>REAL-WORLD APPLICATION: REACTION MONITORING IN ACTION</h3>

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
                      <strong>Reaction:</strong> Aldol reaction of acetone
                    </li>
                    <li>
                      <strong>Reactant:</strong> Acetone
                    </li>
                    <li>
                      <strong>Catalyst:</strong> Amberlyst® A26(OH)
                    </li>
                    <li>
                      <strong>Temperature:</strong> Room Temperature
                    </li>
                    <li>
                      <strong>Duration:</strong> 2.5 hours
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
