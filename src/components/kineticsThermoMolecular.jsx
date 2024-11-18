import React, { useEffect, useState, useRef } from "react";

export const KineticsThermoMolecular = (props) => {
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
    <div id="kineticsThermoMolecular" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="kinetics">
              <h3>KINETICS, MOLECULAR STRUCTURE AND THERMODYNAMIC STUDIES</h3>
              <div className="spacer"></div>
              <p>
                {" "}
                Researchers may use our spectrometer to expound the different
                molecular structures of the reaction species with potential
                kinetic and thermodynamic pathways, enabling green synthesis,
                new catalysts, molecules and reactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
