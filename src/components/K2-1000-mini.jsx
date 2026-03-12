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
                      Ultra-Compact, Ultralow-Noise Ultrafast Laser for OEM &
                      Precision Applications
                    </h4>
                    <p>
                      K2-1000-mini is a powerful, ultralow-noise, turn-key laser
                      system designed for OEM integration and demanding
                      precision applications. Available as either a femtosecond
                      modelocked source or a dual-comb light source from a
                      single cavity, it combines high power, ultrashort pulses,
                      and exceptional stability in a compact all-in-one design.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      Ideal for optical frequency combs, precision ranging,
                      pump-probe spectroscopy, gas sensing, and nonlinear
                      microscopy, K2-1000-mini delivers outstanding performance
                      where space, reliability, and integration readiness are
                      essential.
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
                      <li>Multi-species gas sensing</li>
                      <li>Time-resolved spectroscopy</li>
                      <li>Nonlinear microscopy</li>
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
                        1 GHz repetition rate driving high-speed measurements
                      </li>
                      <li>&lt;1.5 W power per beam</li>
                      <li>
                        &lt;200 fs pulse duration (clean sech², with &gt;100 fs
                        option)
                      </li>
                      <li>Sub-cycle relative timing jitter</li>
                      <li>Ultra-low relative intensity noise</li>
                      <li>Compact, fully integrated turn-key form factor</li>
                      <li>
                        Optional dual-comb modelocking from a single cavity
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
                      K2-1000-mini’s design provides high-quality, ultrashort
                      pulses with superior noise characteristics suitable for
                      advanced frequency comb applications. Its shared-cavity
                      dual-comb option enables two pulse trains with tunable
                      repetition rate differences, allowing asynchronous optical
                      sampling and precision measurement workflows without
                      complex synchronization hardware.
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
                      <li>Optional fiber-coupled output</li>
                      <li>Lower power consumption configurations</li>
                      <li>
                        Broadband or wavelength-specific versions (inquire)
                      </li>
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
                      Ready to experience the performance of K2-1000-mini?
                      Request a live demonstration to see its capabilities
                      firsthand, download our detailed datasheets for complete
                      technical specifications, or contact our team to discuss
                      how K2-1000-mini can be optimized for your application.
                      Whether you are advancing research, scaling industrial
                      systems, or developing next-generation photonic solutions,
                      K2 Photonics is here to help you achieve exceptional
                      results with precision laser technology.
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
