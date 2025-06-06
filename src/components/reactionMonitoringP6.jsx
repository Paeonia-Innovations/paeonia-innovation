import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  "Continuous, real-time data for immediate feedback",
  "Non-invasive monitoring that preserves sample integrity",
  "Simple setup-no specialized training or complex instrumentation",
];

export const ReactionMonitoringP6 = (props) => {
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
    <div id="reactionMonitoringP6" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rmPage6">
              <h3>REFINING CONTROL: THE FUTURE OF REACTION MONITORING</h3>

              <div className="col-12 col-md-12">
                <div className="spacer"></div>

                <p>
                  {" "}
                  Experience real-time chemical insight with our plug-and-play
                  reaction monitoring solution-engineered for accuracy,
                  simplicity, and immediate decision-making. Track reactant and
                  product concentrations live using a compact, USB-powered
                  device with integrated IR sensor technology and customizable
                  calibration models.
                  <br />
                  Wether you're optimizing reaction conditions, troubleshooting,
                  or scaling up your process, our system offers:
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
                  <strong>
                    Improve consistency. Enhance efficiency. Simplify your
                    reaction monitoring.
                  </strong>
                </p>
                <div className="spacer"></div>

                <div className="text-center mt-4">
                  <Link
                    to="/form"
                    className="btn"
                    style={{
                      backgroundColor: "#7a1b1f",
                      color: "#fff",
                      border: "none",
                      fontSize: "18px",
                    }}
                  >
                    I'm Interested – Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
