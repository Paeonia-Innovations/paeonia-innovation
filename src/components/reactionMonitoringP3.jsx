import React, { useEffect, useState, useRef } from "react";

const items = [
  "Track key species with confidence and accuray",
  "Eliminate manual calibration steps",
  "Streamline data collection and interpertation",
  "Enable real-time decision-making in complex reactions",
];

export const ReactionMonitoringP3 = (props) => {
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
    <div id="reactionMonitoringP3" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="rmPage3">
              <h3>ADD-ON SERVICE: CUSTOM CALIBRATION MODEL INTEGRATION</h3>

              <div className="col-12 col-md-12">
                <div className="spacer"></div>

                <p>
                  {" "}
                  To further enhance your workflow, we offer a personalized
                  service to help you build and integrate calibration modles
                  directly into our software platform. This allows you to
                  effortlessly monitor reactant and product concentrations in
                  real time-tailored to your specific chemistry. With this
                  service, you can:
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
                  Our team works closely with you to ensure seamless
                  integration-so you can focus on the chemistry, not the setup.
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
