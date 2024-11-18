import React, { useEffect, useState, useRef } from "react";

export const AboutSpectrometer = (props) => {
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
    <div id="aboutSpectrometer" className="text-center">
      <div className="container">
        <div className={`col-md-12 spectrometer-item`} ref={ref}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`}>
                  <div className="challenge-text">
                    <div className="content-wrapper">
                      <div
                        className={`left-side ${inView ? "fadeInLeft" : ""}`}
                      >
                        <h3>Robust & Compact</h3>
                        <p>
                          At a size of 5 * 5.5 * 6 cm, the Novel Mid-IR
                          Spectrometer is a fraction of the size of all
                          traditional spectrometers. It does not use any moving
                          components or fragile optical fibers, allowing you the
                          freedom to decide where and how you want to use the
                          spectrometer.
                        </p>
                      </div>
                      <div className="vertical-line"></div>
                      <div
                        className={`right-side ${inView ? "fadeInRight" : ""}`}
                      >
                        <h3>Mid-IR Spectroscopy</h3>
                        <p>
                          Dipole moments in molecular bonds can vibrate with
                          energies that correspond to the mid-infrared region of
                          light such that light passing through can be absorbed
                          by the bonds that match in energy. As the dipole
                          moments are affected by the bond and the surroundings,
                          Mid-IR spectroscopy can be used to identify molecules
                          and combined with measurement of the intensity to also
                          quantify the concentration.
                        </p>
                      </div>
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
