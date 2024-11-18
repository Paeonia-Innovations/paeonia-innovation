import React, { useEffect, useState, useRef } from "react";

export const MidIRSpectroscopy = (props) => {
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
    <div id="midIRSpectroscopy" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="spectroscopy">
              <h3>MID-IR SPECTROSCOPY</h3>
              <div className="spacer"></div>
              <p>
                {" "}
                Dipole moments in molecular bonds can vibrate with energies that
                correspond to the mid-infrared region of light such that light
                passing through can be absorbed by the bonds that match in
                energy. As the dipole moments are affected by the bond and the
                surroundings, Mid-IR spectroscopy can be used to identify
                molecules and combined with measurement of the intensity to also
                quantify the concentration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
