import React, { useEffect, useState, useRef } from "react";

export const InlineMonitoring = (props) => {
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
    <div id="inlineMonitoring" className="text-center">
      <div className="container">
        <div className={`col-md-12 inline-item`} ref={ref}>
          <div>
            {" "}
            <div className="challenge-text">
              <div className="content-wrapper">
                <div className={`left-side ${inView ? "fadeInLeft" : ""}`}>
                  <h3>Kinetics, Molecular Structure & Thermodynamic</h3>
                  <p>
                    Researchers may use our spectrometer to expound the
                    different molecular structures of the reaction species with
                    potential kinetic and thermodynamic pathways, enabling green
                    synthesis, new catalysts, molecules and reactions.
                  </p>
                </div>
                <div className="vertical-line"></div>
                <div className={`right-side ${inView ? "fadeInRight" : ""}`}>
                  <h3>Inline Process Monitoring</h3>
                  <p>
                    Process industries such as (pharmaceutical, specialty
                    chemicals, petrochemicals, chemicals, food and beverage)
                    industries using liquid chemicals in their processes, can
                    use our spectrometer to monitor reactions, reduce cycle
                    times, maximize yield, reduce wastes, improve
                    sustainability, control quality and scale up reactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
