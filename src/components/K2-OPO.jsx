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
                      Compact, Tunable, and Ultralow-Noise Optical Parametric
                      Oscillator1 GHz repetition rate
                    </h4>
                    <p>
                      K2-OPO is a compact, ultralow-noise, turn-key optical
                      parametric oscillator (OPO) designed to deliver
                      femtosecond pulses across customizable infrared
                      wavelengths with a high repetition rate.
                      Factory-configured wavelength output (from near IR to
                      mid-IR) makes K2-OPO versatile for a broad range of
                      scientific and industrial applications, from gas sensing
                      and time-resolved spectroscopy to nonlinear microscopy and
                      reaction kinetics studies.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      K2-OPO combines high-power operation, excellent beam
                      quality, and a dual-comb option—all in a fully integrated
                      system ready for deployment.
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
                        Multi-species gas sensing
                        {/* <Link to="/pump-probe-sampling" className="k2-link">
                          Pump-probe sampling
                        </Link> */}
                      </li>
                      <li>Time-resolved spectroscopy</li>
                      <li>Nonlinear microscopy</li>
                      <li>Reaction kinetics</li>
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
                        High repetition rate (∼1 GHz) femtosecond pulse output
                      </li>
                      <li>Ultralow relative intensity noise (RIN)</li>
                      <li>Dual-comb option for advanced measurement schemes</li>
                      <li>
                        Compact, turn-key system suitable for continuous
                        operation
                      </li>
                      <li>
                        Customizable wavelength range covering near to
                        mid-infrared (∼1310–4800 nm)
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
                      K2-OPO is a factory-configured optical parametric
                      oscillator that delivers powerful, ultrashort pulses with
                      exceptional noise performance. A factory-fixed or tunable
                      wavelength range provides flexibility for
                      application-specific deployment, and an optional dual-comb
                      mode enables asynchronous sampling and precision
                      measurement workflows without complex synchronization
                      hardware.
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
                      <li>Integrated pump laser output</li>
                      <li>Signal & idler pair output</li>
                      <li>Tunable configuration upon request</li>
                    </ul>
                  </div>
                </div>

                {/* Discover */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">Discover K2-OPO for Yourself</h4>
                    <p>
                      Ready to experience the performance of K2-OPO? Request a
                      live demonstration to see its capabilities firsthand,
                      download our detailed datasheets for complete technical
                      specifications, or contact our team to discuss how K2-OPO
                      can be optimized for your application. Whether you are
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
