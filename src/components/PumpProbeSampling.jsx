import React, { useEffect, useState, useRef } from "react";

export const PumpProbeSampling = (props) => {
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
    <div id="pumpProbeSampling" className="text-center">
      <div className="container">
        <div className="col-md-12" ref={ref}>
          <div className={`${inView ? "animated" : ""}`}>
            <div className="pumpProbePage">
              <div className="k2-section-block">
                {/* Breadcrumb */}
                <div className="spacer"></div>
                <p className="k2-breadcrumb">
                  {/* K2 Photonics &nbsp;/&nbsp; Pump-Probe Sampling */}
                </p>
                <div className="spacer"></div>

                {/* Title */}
                <h3>K2 Photonics</h3>
                <h3>Pump-Probe Sampling</h3>

                {/* ══════════════════════════════════════════════
                    BLOCK 1
                    Left: "Reveal Ultrafast Dynamics" tagline + intro text
                    Right: ProbePic1 (beam hitting sample diagram)
                ══════════════════════════════════════════════════ */}
                <div className="row align-items-start">
                  <div className="col-12 col-md-6">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">
                      Reveal Ultrafast Dynamics Without Moving Parts
                    </h4>
                    <p>
                      Pump-probe sampling is a powerful technique used to
                      observe ultrafast processes occurring on femtosecond to
                      nanosecond timescales in materials, biological systems,
                      and advanced photonic structures. By delivering an initial
                      "pump" pulse that excites the sample and a time-delayed
                      "probe" pulse to measure the resulting response, this
                      method produces a high-resolution temporal record of
                      dynamic phenomena.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      High-performance pump–probe measurements traditionally
                      require mechanical delay lines or complex synchronization
                      electronics, making setups bulky, slow, and sensitive to
                      errors. K2 Photonics' laser solutions simplify this
                      process while delivering industry-leading performance,
                      enabling fast, precise, and compact pump–probe experiments
                      across science and industry.
                    </p>
                  </div>
                  <div
                    className={`col-12 col-md-6 fade-in-up ${inView ? "scale-up" : ""}`}
                  >
                    <div className="img-container">
                      <img
                        src="img/portfolio/ProbePic1.png"
                        className="img-responsive"
                        alt="Pump beam and probe beam hitting sample"
                      />
                    </div>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    ProbePic2 — FULL WIDTH
                    After "...experiments across science and industry."
                    Before "Measuring Ultrafast Response with Precision"
                ══════════════════════════════════════════════════ */}
                <div className={`row fade-in-up ${inView ? "scale-up" : ""}`}>
                  <div className="col-12">
                    <div className="pp-fullwidth-img">
                      <img
                        src="img/portfolio/ProbePic2.png"
                        className="pp-img-fullwidth"
                        alt="Pump-probe setup diagrams"
                      />
                    </div>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 2 — "Measuring Ultrafast Response" full width
                    Comes AFTER ProbePic2
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Measuring Ultrafast Response with Precision
                    </h4>
                    <p>
                      Resolving phenomena such as surface acoustic waves,
                      thermal dynamics, or thin-film acoustic echoes often
                      requires scanning optical delays over extended ranges to
                      capture full temporal responses. Mechanical delay
                      lines—which physically move mirrors to change pulse
                      timing—are:
                    </p>
                    <ul className="k2-list">
                      <li>Slow, due to physical movement</li>
                      <li>Sensitive to alignment and beam stability</li>
                      <li>Complex and expensive</li>
                      <li>Prone to mechanical error and vibration</li>
                    </ul>
                    <div className="spacer"></div>
                    <p>
                      These limitations make traditional pump–probe setups
                      difficult to deploy outside controlled laboratories, and
                      restrict the range of practical experiments.
                    </p>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 3 — "Fast, Precise Delay Scans"
                    heading + intro + bullets
                    → ProbePic3 FULL WIDTH (same size as ProbePic2)
                    → "This approach enables..." paragraph
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Fast, Precise Delay Scans Using Dual-Comb Lasers
                    </h4>
                    <p>
                      K2 Photonics uses single-cavity dual-comb laser technology
                      to deliver rapid, mechanical-delay-free optical delay
                      scans using ASynchronous OPtical Sampling (ASOPS). In this
                      method:
                    </p>
                    <ul className="k2-list">
                      <li>
                        Two pulse trains with slightly different repetition
                        rates (one acting as the pump, the other as the probe)
                        are generated from a shared laser cavity
                      </li>
                      <li>
                        The difference in repetition rates produces a rapidly
                        sweeping effective time delay
                      </li>
                      <li>
                        This allows reconstruction of ultrafast dynamics without
                        moving parts or high-bandwidth feedback electronics
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ProbePic3 — FULL WIDTH, same size as ProbePic2 */}
                <div className={`row fade-in-up ${inView ? "scale-up" : ""}`}>
                  <div className="col-12">
                    <div className="pp-fullwidth-img">
                      <img
                        src="img/portfolio/ProbePic3.png"
                        className="pp-img-fullwidth"
                        alt="ASOPS dual-comb pulse train diagram"
                      />
                    </div>
                  </div>
                </div>

                {/* "This approach enables..." — after ProbePic3 */}
                <div className="row">
                  <div className="col-12">
                    <p>
                      This approach enables compact, robust, and high-speed
                      ultrafast sampling with femtosecond precision—ideal for
                      dynamic studies in materials science, photochemistry, and
                      transient absorption research.
                    </p>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 4 — Simplified Pump-Probe full width
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Simplified Pump–Probe Measurements with ASOPS
                    </h4>
                    <p>
                      Using dual-comb lasers, long optical delay sweeps can be
                      achieved without mechanical translation mechanisms. For
                      example:
                    </p>
                    <ul className="k2-list">
                      <li>
                        A 60 MHz single-cavity ASOPS laser can scan up to ~20 ns
                        of optical delay at high speed
                      </li>
                      <li>
                        Gigahertz-class lasers (like the K2-1000 family) can
                        achieve comparable scans at even faster rates
                      </li>
                      <li>
                        This enables high-resolution temporal sampling with a
                        compact, stable, and alignment-free setup
                      </li>
                    </ul>
                    <div className="spacer"></div>
                    <p>
                      This speed, combined with solid-state laser technology
                      featuring ultralow relative intensity noise (RIN),
                      increases sensitivity and temporal precision, making it an
                      effective tool for ultrafast spectroscopy in research and
                      industrial metrology applications.
                    </p>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 5 — K2 Value Proposition full width
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      K2 Photonics Value Proposition
                    </h4>
                    <p>
                      Pump-probe sampling with K2 Photonics laser technology
                      delivers key advantages:
                    </p>
                    <ul className="k2-list">
                      <li>
                        <strong>Speed:</strong> Optical delay sweeps are
                        obtained without moving parts, enabling fast scanning
                        over extended delays.
                      </li>
                      <li>
                        <strong>Precision:</strong> Shared-cavity architecture
                        and correlated noise properties ensure femtosecond-level
                        timing precision.
                      </li>
                      <li>
                        <strong>Compactness:</strong> Eliminating mechanical
                        delay stages dramatically simplifies system complexity
                        and size.
                      </li>
                      <li>
                        <strong>Sensitivity:</strong> Solid-state lasers offer
                        ultra-low intensity noise, enabling highly sensitive
                        measurements even at high frequencies.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 6 — Who Benefits
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Researchers &amp; Labs
                    </h4>
                    <p>
                      Pump-probe studies in materials science, photophysics, and
                      ultrafast chemistry benefit from compact, high-precision
                      delay scans for experiments that previously required large
                      mechanical systems.
                    </p>

                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Industrial Metrology &amp; Inspection
                    </h4>
                    <p>Fast, reliable optical delay sampling supports:</p>
                    <ul className="k2-list">
                      <li>Thin-film and thick-film inspection</li>
                      <li>Surface acoustic wave characterization</li>
                      <li>
                        Ultrafast dynamics monitoring without bulky hardware
                      </li>
                    </ul>

                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Photonics &amp; Laser Developers
                    </h4>
                    <p>
                      Developers of optical devices, ultrafast systems, and
                      frequency-comb tools can integrate K2 lasers for turnkey,
                      high-performance delay scanning with reduced system
                      complexity.
                    </p>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 7 — Why This Solution Stands Out
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-section-heading">
                      Why This Solution Stands Out
                    </h4>
                    <ul className="k2-list">
                      <li>
                        Eliminates mechanical delay lines for faster, more
                        stable scans
                      </li>
                      <li>
                        Uses single-cavity dual-comb architecture for correlated
                        low-noise operation
                      </li>
                      <li>Compact and robust compared to traditional setups</li>
                      <li>
                        Supports high-resolution pump–probe and ultrafast
                        spectroscopy across applications
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════
                    BLOCK 8 — Take the Next Step
                ══════════════════════════════════════════════════ */}
                <div className="row">
                  <div className="col-12">
                    <div className="spacer"></div>
                    <h4 className="k2-tagline">Take the Next Step</h4>
                    <p>
                      Explore how K2 Photonics solutions can be seamlessly
                      integrated into your systems to elevate performance in
                      advanced laser, spectroscopy, and photonic applications.
                      Discover integration options, download detailed technical
                      specifications, or schedule a consultation with our team
                      to discuss customised solutions tailored to your
                      requirements. Take the next step to embed high-performance
                      photonics directly into your platforms and unlock new
                      value for your products, research, and end users.
                    </p>
                    <div className="spacer"></div>
                    <p>
                      {/* <Link to="/form" className="k2-link">Contact Us</Link> */}
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
