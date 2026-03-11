import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

export const K2OPO = (props) => {
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
    <div id="k2OPO" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="k2OPOPage">
              {/* ── Section block — left crimson border ── */}
              <div className="k2-section-block">
                {/* Breadcrumb */}
                <div className="spacer"></div>
                <p className="k2-breadcrumb">
                  {/* K2 Photonics &nbsp;/&nbsp; K2-OPO */}
                </p>

                {/* Title */}
                <div className="spacer"></div>
                <h3>K2 Photonics</h3>
                <h3>K2-OPO</h3>

                {/* Tagline + image */}
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Turnkey Optical Parametric Oscillator for Broadband
                      Dual-Comb Spectroscopy
                    </h4>
                    <p>
                      K2-OPO is a fully integrated optical parametric oscillator
                      designed to extend the spectral coverage of K2 dual-comb
                      laser systems into the mid-infrared. Pumped directly by
                      the K2-1000 or K2-1000-mini, it generates two synchronised
                      mid-IR comb outputs with a tunable repetition rate
                      difference, enabling broadband dual-comb spectroscopy
                      across molecular fingerprint regions without the need for
                      external pump sources or complex alignment.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      Designed for spectroscopy, sensing, and precision
                      measurement, K2-OPO delivers broad mid-IR spectral
                      coverage, passive noise correlation, and turn-key
                      operation in a compact, laboratory-ready enclosure.
                    </p>
                  </div>

                  <div
                    className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
                  >
                    <div className="img-container">
                      <img
                        src="img/portfolio/K2-OPO.png"
                        className="img-responsive"
                        alt="K2-OPO Optical Parametric Oscillator"
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
                      <li>Broadband mid-IR dual-comb spectroscopy</li>
                      <li>Trace gas detection and molecular fingerprinting</li>
                      <li>Industrial process monitoring</li>
                      <li>Nonlinear optics and ultrafast research</li>
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
                        Mid-IR dual-comb output directly from K2-1000 pump
                      </li>
                      <li>
                        Broad spectral coverage across molecular fingerprint
                        regions
                      </li>
                      <li>
                        Passive noise correlation between the two OPO outputs
                      </li>
                      <li>
                        Tunable repetition rate difference for flexible
                        acquisition rates
                      </li>
                      <li>Turn-key operation — no manual alignment required</li>
                      <li>Compact, thermally stable enclosure</li>
                    </ul>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">Technical Highlights</h4>
                    <p>
                      K2-OPO leverages the inherent passive noise correlation of
                      the K2 shared-cavity dual-comb architecture. Because both
                      OPO outputs are derived from the same pump source, their
                      relative intensity and timing fluctuations are highly
                      correlated — enabling coherent dual-comb measurements in
                      the mid-IR without active stabilisation. This approach
                      significantly reduces system complexity compared to
                      traditional mid-IR dual-comb setups based on two
                      independent OPOs.
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
                        Compatible with K2-1000 and K2-1000-mini pump platforms
                      </li>
                      <li>
                        Selectable phase-matching crystals for different
                        spectral ranges
                      </li>
                      <li>Passive air cooling</li>
                      <li>
                        Custom wavelength ranges and output powers (upon
                        request)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Discover */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">Discover K2-OPO for Yourself</h4>
                    <p>
                      Ready to extend your dual-comb system into the
                      mid-infrared? Request a live demonstration to see K2-OPO
                      in action, download our detailed datasheets for complete
                      technical specifications, or contact our team to discuss
                      how K2-OPO can be integrated with your existing K2
                      platform. K2 Photonics is here to help you achieve
                      exceptional results across the full infrared spectral
                      range.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      {/* <Link to="/form" className="k2-link">
                        Contact Us
                      </Link> */}
                    </p>
                    <p>
                      <a
                        href="https://k2photonics.com/downloads/K2-OPO.pdf"
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
