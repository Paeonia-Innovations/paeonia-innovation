import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";

export const K21000Mini = (props) => {
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
    <div id="k21000Mini" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="k21000MiniPage">
              {/* ── Section block — left crimson border ── */}
              <div className="k2-section-block">
                {/* Breadcrumb */}
                <div className="spacer"></div>
                <p className="k2-breadcrumb">
                  {/* K2 Photonics &nbsp;/&nbsp; K2-1000-mini */}
                </p>

                {/* Title */}
                <div className="spacer"></div>
                <h3>K2 Photonics</h3>
                <h3>K2-1000-mini</h3>

                {/* Tagline + image */}
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Compact, Gigahertz Dual-Comb Laser for Portable and
                      Integrated Applications
                    </h4>
                    <p>
                      K2-1000-mini is a compact, lightweight version of the
                      K2-1000 dual-comb laser platform, engineered for
                      applications where size, weight, and power consumption are
                      critical. Built on the same proven single-cavity
                      architecture, it delivers two modelocked femtosecond pulse
                      trains at gigahertz repetition rates with a tunable
                      repetition rate difference—enabling asynchronous optical
                      sampling in a miniaturised, field-deployable form factor.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      Designed for OEM integration, portable instrumentation,
                      and space-constrained laboratory setups, K2-1000-mini
                      maintains the passive stability and low-noise performance
                      of the full K2-1000 platform while offering a
                      significantly reduced footprint.
                    </p>
                  </div>

                  <div
                    className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
                  >
                    <div className="img-container">
                      <img
                        src="img/portfolio/K2-1000-mini.png"
                        className="img-responsive"
                        alt="K2-1000-mini Compact Dual-Comb Laser System"
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
                      <li>OEM and portable instrumentation</li>
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
                        1 GHz single-cavity dual-comb in a miniaturised housing
                      </li>
                      <li>
                        &lt;100 fs pulse duration for ultrafast measurements
                      </li>
                      <li>
                        Sub-cycle relative timing jitter and ultra-low relative
                        intensity noise
                      </li>
                      <li>
                        Tunable, long-term stable repetition rate difference
                      </li>
                      <li>
                        Reduced size, weight, and power consumption vs. K2-1000
                      </li>
                      <li>
                        Passive stability — no active locking electronics
                        required
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
                      K2-1000-mini retains the shared-cavity dual-comb
                      architecture of the K2-1000, which passively correlates
                      the intensity, timing, and phase noise of both pulse
                      trains without amplification or active locking. The
                      miniaturised design achieves this in a compact enclosure
                      optimised for thermal stability, making it ideal for
                      integration into portable systems and OEM platforms.
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
                        Second harmonic generation and wavelength conversion
                      </li>
                      <li>Passive air cooling</li>
                      <li>Fiber-coupled output configurations</li>
                      <li>Custom repetition rates (upon request)</li>
                    </ul>
                  </div>
                </div>

                {/* Discover */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Discover K2-1000-mini for Yourself
                    </h4>
                    <p>
                      Ready to explore the K2-1000-mini? Request a live
                      demonstration to see its capabilities firsthand, download
                      our detailed datasheets for complete technical
                      specifications, or contact our team to discuss how
                      K2-1000-mini can be integrated into your system. Whether
                      you are building portable instrumentation, scaling to OEM
                      production, or developing next-generation compact photonic
                      solutions, K2 Photonics is here to help you achieve
                      exceptional results.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      {/* <Link to="/form" className="k2-link">
                        Contact Us
                      </Link> */}
                    </p>
                    <p>
                      <a
                        href="https://k2photonics.com/downloads/K2-1000-mini.pdf"
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
