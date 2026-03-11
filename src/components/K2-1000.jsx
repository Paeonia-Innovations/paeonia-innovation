import React, { useEffect, useState, useRef } from "react";
//import { Link } from "react-router-dom";

export const K21000 = (props) => {
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
    <div id="k21000" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="k21000Page">
              {/* ── Section block — left crimson border separates this product ── */}
              <div className="k2-section-block">
                {/* Breadcrumb */}
                <div className="spacer"></div>
                <p className="k2-breadcrumb">
                  {/* K2 Photonics &nbsp;/&nbsp; K2-1000 */}
                </p>

                {/* Title */}
                <div className="spacer"></div>
                <h3>K2 Photonics</h3>
                <h3>K2-1000</h3>

                {/* Tagline + image */}
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      High-Power, Gigahertz Dual-Comb Laser for Precision
                      Spectroscopy &amp; Ranging
                    </h4>
                    <p>
                      K2-1000 is a high-performance dual-comb laser system
                      engineered for demanding applications in dual-comb
                      spectroscopy, precision ranging, and ultrafast
                      measurement. Built on a single-cavity architecture, the
                      system produces two modelocked femtosecond pulse trains
                      with a slightly offset repetition rate, enabling rapid
                      optical delay sweeps without mechanical delay lines or
                      complex synchronization electronics.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      With a gigahertz repetition rate, ultra-short pulses, and
                      passive noise correlation between combs, K2-1000 delivers
                      high power per comb line, ultralow noise, and exceptional
                      stability in a compact, industrial-ready format.
                    </p>
                  </div>

                  <div
                    className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
                  >
                    <div className="img-container">
                      <img
                        src="img/portfolio/K2-1000.png"
                        className="img-responsive"
                        alt="K2-1000 Dual-Comb Laser System"
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
                        1 GHz single-cavity dual-comb design with &gt;2 W per
                        beam
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
                        Fundamental Gaussian beam output with excellent beam
                        quality
                      </li>
                      <li>Compact design suitable for integrated systems</li>
                    </ul>
                  </div>
                </div>

                {/* Technical Highlights */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">Technical Highlights</h4>
                    <p>
                      K2-1000 uses a shared-cavity dual-comb architecture, which
                      eliminates the need for high-speed locking electronics and
                      optical amplification. This approach results in passive
                      stability with highly correlated intensity, timing, and
                      phase noise properties between the two combs—simplifying
                      system complexity while maintaining superior performance.
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
                    <p>
                      K2-1000 supports a range of system options to tailor
                      performance:
                    </p>
                    <ul className="k2-list">
                      <li>
                        Second harmonic generation and wavelength conversion via
                        optical parametric oscillator
                      </li>
                      <li>Passive air or active water cooling</li>
                      <li>Low-power and fiber-coupled configurations</li>
                      <li>Vibration and acoustic noise isolation</li>
                      <li>
                        Optical isolation and alternative repetition rates (upon
                        request)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Discover */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Discover K2-1000 for Yourself
                    </h4>
                    <p>
                      Ready to experience the performance of K2-1000? Request a
                      live demonstration to see its capabilities firsthand,
                      download our detailed datasheets for complete technical
                      specifications, or contact our team to discuss how K2-1000
                      can be optimised for your application. Whether you are
                      advancing research, scaling industrial systems, or
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
                        href="https://k2photonics.com/downloads/K2-1000.pdf"
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
