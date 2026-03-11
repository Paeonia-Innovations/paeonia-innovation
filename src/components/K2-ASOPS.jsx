import React, { useEffect, useState, useRef } from "react";
//import { Link } from "react-router-dom";

export const K2ASOPS = (props) => {
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
    <div id="k2Asops" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="k2AsopsPage">
              {/* ── Section block — left crimson border separates this product ── */}
              <div className="k2-section-block">
                {/* Breadcrumb */}
                <div className="spacer"></div>
                <p className="k2-breadcrumb">
                  {/* K2 Photonics &nbsp;/&nbsp; K2-ASOPS */}
                </p>

                {/* Title */}
                <div className="spacer"></div>
                <h3>K2 Photonics</h3>
                <h3>K2-ASOPS</h3>

                {/* Tagline + image */}
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Ultrafast, Stable, and Turnkey Dual-Comb Pump-Probe System
                    </h4>
                    <p>
                      K2-ASOPS is a high-performance dual-comb laser system
                      optimized for pump-probe and ultrafast measurements. Using
                      a novel single-cavity architecture, it produces two
                      modelocked femtosecond pulse trains with a small
                      difference in repetition rate, enabling asynchronous
                      optical sampling without mechanical delay lines or complex
                      synchronization electronics.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      Designed for research, industrial inspection, and
                      precision measurement applications, K2-ASOPS delivers
                      ultrashort pulses, ultra-low noise, and stable long-term
                      operation in a compact, turn-key design.
                    </p>
                  </div>

                  <div
                    className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
                  >
                    <div className="img-container">
                      <img
                        src="img/portfolio/K2-ASOPS.png"
                        className="img-responsive"
                        alt="K2-ASOPS Dual-Comb Laser System"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Applications */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">Key Applications</h4>
                    <ul className="k2-list">
                      <li>
                        Pump-probe sampling
                        {/* <Link to="/pump-probe-sampling" className="k2-link">
                          Pump-probe sampling
                        </Link> */}
                      </li>
                      <li>Thick-film inspection</li>
                      <li>Gas sensing and process control</li>
                      <li>Precision ranging</li>
                    </ul>
                  </div>
                </div>

                {/* Key Features */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">Key Features</h4>
                    <ul className="k2-list">
                      <li>
                        Two spatially separated pulse trains with &gt;1.5 W per
                        beam
                      </li>
                      <li>Sub-250 fs pulse duration</li>
                      <li>Sub-cycle relative timing jitter</li>
                      <li>Ultra-low relative intensity noise</li>
                      <li>
                        Tunable and long-term stable repetition rate difference
                      </li>
                      <li>
                        Compact, turn-key operation suitable for 24/7
                        environments
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">Technical Highlights</h4>
                    <p>
                      K2-ASOPS uses a single-cavity dual-comb architecture,
                      which enables passive noise correlation between the two
                      pulse trains without active locking or amplification. This
                      design reduces complexity while maintaining superior
                      timing and intensity stability—a key advantage over
                      traditional dual-comb and ASOPS systems.
                    </p>
                  </div>
                </div>

                {/* Configuration Options */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Configuration Options
                    </h4>
                    <ul className="k2-list">
                      <li>
                        Integrated second harmonic and third harmonic generation
                      </li>
                      <li>Passive air or active water cooling</li>
                      <li>
                        Optical isolation and other custom repetition rates
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Discover */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Discover K2-ASOPS for Yourself
                    </h4>
                    <p>
                      Ready to experience the performance of K2-ASOPS? Request a
                      live demonstration to see its capabilities firsthand,
                      download our detailed datasheets for complete technical
                      specifications, or contact our team to discuss how
                      K2-ASOPS can be optimised for your application. Whether
                      you are advancing research, scaling industrial systems, or
                      developing next-generation photonic solutions, K2
                      Photonics is here to help you achieve exceptional results
                      with precision laser technology.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      {/* <Link to="/form" className="k2-link">
                        Contact Us
                      </Link> */}
                    </p>
                    <p>
                      <a
                        href="https://k2photonics.com/downloads/K2-ASOPS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="k2-link"
                      >
                        DATASHEET
                      </a>
                    </p>
                    <div className="spacer"></div>
                  </div>
                </div>
              </div>
              {/* end k2-section-block */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
