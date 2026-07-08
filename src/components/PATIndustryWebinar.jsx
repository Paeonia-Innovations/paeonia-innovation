import React from "react";

const webinarStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  #patIndustryWebinar {
    background: #F6F6F6;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #patIndustryWebinar .container {
    display: flex;
    justify-content: center;
  }
  #patIndustryWebinar .wbn-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .wbn-eyebrow {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 14px;
  }
  .wbn-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
    line-height: 1.2;
  }
  .wbn-subtitle {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 24px;
    line-height: 1.4;
  }
  .wbn-img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 28px;
    display: block;
  }
  .wbn-body {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .wbn-body p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .wbn-body strong {
    font-weight: 700;
  }
  .wbn-body ul {
    list-style: none;
    padding-left: 0;
    margin: 6px 0 18px;
  }
  .wbn-body li {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.7;
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .wbn-body li::before {
    content: "●";
    color: #7A1B1F;
    font-size: 10px;
    position: absolute;
    left: 0;
    top: 8px;
  }
  .wbn-body em {
    font-style: italic;
  }
  .wbn-meta {
    margin: 0 0 24px;
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .wbn-meta p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 8px;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .wbn-meta p:last-child {
    margin-bottom: 0;
  }
  .wbn-meta-icon {
    min-width: 22px;
    text-align: center;
    flex-shrink: 0;
  }
  .wbn-divider {
    border: none;
    border-top: 1px solid #e2dcd3;
    margin: 36px 0 32px;
  }
  .wbn-section-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 16px;
  }
  .wbn-hosts {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0 0 8px;
  }
  .wbn-host-card {
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 16px 18px;
  }
  .wbn-host-name {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 4px;
  }
  .wbn-host-role {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #6b6b6b;
    margin: 0;
    line-height: 1.5;
  }
  .wbn-cta-wrap {
    text-align: center;
    margin-top: 8px;
  }
  .wbn-cta-btn {
    display: inline-block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #F6F6F6;
    background: #7A1B1F;
    padding: 16px 36px;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.15s ease;
  }
  .wbn-cta-btn:hover {
    background: #5a1015;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .wbn-cta-note {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #8a8a8a;
    margin: 14px 0 0;
  }
`;

export const PATIndustryWebinar = () => {
  return (
    <div>
      <style>{webinarStyles}</style>

      <div id="patIndustryWebinar">
        <div className="container">
          <div className="wbn-inner">
            <span className="wbn-eyebrow">Live Webinar</span>

            {/* Page title */}
            <h1 className="wbn-title">
              Do You Know When Your Batch Is Truly Done?
            </h1>
            <h2 className="wbn-subtitle">
              Real-Time Mid-IR for Chemistry-Driven Process Control
            </h2>

            {/* Event image */}
            {/* <img
              src="img/portfolio/PAT_INDUSTRY.png"
              alt="Real-Time Mid-IR for Chemistry-Driven Process Control"
              className="wbn-img"
            /> */}

            {/* Meta */}
            <div className="wbn-meta">
              <p>
                <span className="wbn-meta-icon">🗓</span> Tuesday, 22 July 2026
              </p>
              <p>
                <span className="wbn-meta-icon">🕘</span> 9:00 AM CEST (Paris)
              </p>
              <p>
                <span className="wbn-meta-icon">⏱</span> 45 minutes, live —
                includes 15 minutes of open Q&amp;A
              </p>
            </div>

            {/* Body copy */}
            <div className="wbn-body">
              <p>
                <strong>
                  Do you know the exact endpoint of your batch — or are you
                  running to a fixed time and hoping for the best?
                </strong>
              </p>
              <p>
                Most manufacturers in chemicals, pharma and cosmetics still
                control critical operations — emulsification, functionalisation,
                distillation, oxidation — with offline samples and delayed lab
                results. Decisions get made on stale data. Endpoints are
                guessed, not measured.
              </p>
              <p>
                In this 45-minute live session, <strong>Dr. Lennon Lee</strong>,
                CEO of Paeonia Innovations (deep-tech spin-off from A*STAR,
                Singapore), will show how a palm-sized, solid-state Mid-IR
                spectrometer turns process monitoring from a time-driven
                exercise into a chemistry-driven one — directly in your process
                line.
              </p>
            </div>

            <div className="wbn-body">
              <p>
                <strong>What you'll take away:</strong>
              </p>
              <ul>
                <li>
                  A practical decision framework: when Mid-IR beats NIR, Raman
                  or UV-Vis — and when it doesn't
                </li>
                <li>
                  <strong>
                    Three real case studies: real-time emulsification endpoint
                    control, polymer functionalisation tracking in 10,000 cP
                    viscous media without dilution, and low-level H₂O₂
                    quantification in acidified ethanol
                  </strong>
                </li>
                <li>
                  How inline sampling design, cleaning-in-place and chemometric
                  models translate spectra into{" "}
                  <strong>actionable endpoints</strong> — shorter cycles, higher
                  yield, less rework
                </li>
                <li>
                  <strong>A pilot-first roadmap:</strong> test the technology on
                  your own process samples before committing
                </li>
              </ul>
            </div>

            <div className="wbn-body">
              <p>
                <strong>Format:</strong> ~30 minutes of insights + 15 minutes of
                open Q&amp;A — bring your toughest matrix.
              </p>
            </div>

            <hr className="wbn-divider" />

            {/* Hosts */}
            <h2 className="wbn-section-title">Your Hosts</h2>
            <div className="wbn-hosts">
              <div className="wbn-host-card">
                <p className="wbn-host-name">Dr. Lennon Lee</p>
                <p className="wbn-host-role">
                  CEO, Paeonia Innovations (Singapore)
                </p>
              </div>
              <div className="wbn-host-card">
                <p className="wbn-host-name">Thomas Ricour</p>
                <p className="wbn-host-role">
                  Founder, PAT-INDUSTRY (France) — 25+ years in non-destructive
                  process analysis and PAT integration, moderating the session
                </p>
              </div>
            </div>

            <div className="wbn-body">
              <p>
                <em>
                  If your process is viscous, optically dense, aqueous or
                  low-concentration — this session was built for you.
                </em>
              </p>
            </div>

            <hr className="wbn-divider" />

            {/* CTA */}
            <div className="wbn-cta-wrap">
              <a
                href="https://app.livestorm.co/p/097fafea-82fb-4174-b925-7eae5163de53"
                target="_blank"
                rel="noopener noreferrer"
                className="wbn-cta-btn"
              >
                Register now — free, replay sent to all registrants
              </a>
              <p className="wbn-cta-note">
                Can't make it live? Register anyway and you'll receive the
                replay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PATIndustryWebinar;
