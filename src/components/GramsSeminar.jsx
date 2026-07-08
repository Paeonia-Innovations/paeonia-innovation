import React from "react";

const grStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  #gramsSeminar {
    background: #F6F6F6;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #gramsSeminar .container {
    display: flex;
    justify-content: center;
  }
  #gramsSeminar .gr-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .gr-eyebrow {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 14px;
  }
  .gr-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
    line-height: 1.2;
  }
  .gr-subtitle {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 24px;
    line-height: 1.4;
  }
  .gr-img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 28px;
    display: block;
  }
  .gr-body {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .gr-body p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .gr-body strong {
    font-weight: 700;
  }
  .gr-talk-block {
    background: #fff;
    border: 1px solid #ece6df;
    border-left: 4px solid #7A1B1F;
    border-radius: 8px;
    padding: 18px 20px;
    margin: 0 0 24px;
  }
  .gr-talk-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #A11E21;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .gr-talk-title {
    display: block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #292121;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  .gr-talk-speaker {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #6b6b6b;
  }
  .gr-meta {
    margin: 0 0 24px;
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .gr-meta p {
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
  .gr-meta p:last-child {
    margin-bottom: 0;
  }
  .gr-meta-icon {
    min-width: 22px;
    text-align: center;
    flex-shrink: 0;
  }
  .gr-meta-sub {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #6b6b6b;
    margin: -2px 0 8px 32px;
  }
  .gr-divider {
    border: none;
    border-top: 1px solid #e2dcd3;
    margin: 36px 0 32px;
  }
  .gr-section-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 16px;
  }
  .gr-org-list {
    list-style: none;
    padding-left: 0;
    margin: 0 0 8px;
  }
  .gr-org-list li {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #292121;
    line-height: 1.7;
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
  }
  .gr-org-list li::before {
    content: "●";
    color: #7A1B1F;
    font-size: 10px;
    position: absolute;
    left: 0;
    top: 7px;
  }
  .gr-cta-wrap {
    text-align: center;
    margin-top: 8px;
  }
  .gr-cta-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .gr-cta-btn {
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
  .gr-cta-btn:hover {
    background: #5a1015;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .gr-cta-btn-outline {
    display: inline-block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #7A1B1F;
    background: transparent;
    border: 2px solid #7A1B1F;
    padding: 14px 34px;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
  }
  .gr-cta-btn-outline:hover {
    background: #7A1B1F;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .gr-cta-note {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #8a8a8a;
    margin: 14px 0 0;
  }
`;

export const GramsSeminar = () => {
  return (
    <div>
      <style>{grStyles}</style>

      <div id="gramsSeminar">
        <div className="container">
          <div className="gr-inner">
            <span className="gr-eyebrow">GRAMS — 40th Public Lecture</span>

            {/* Page title */}
            <h1 className="gr-title">
              Palm-Sized Mid-IR Spectroscopy at 0.3 Seconds
            </h1>
            <h2 className="gr-subtitle">
              RTD, Opaque Matrices and Closed-Loop Optimisation in Continuous
              Flow
            </h2>

            {/* Event image */}
            <img
              src="img/portfolio/GRAM.png"
              alt="GRAMS — Group for Research on Automated Flow and Microreactor Synthesis"
              className="gr-img"
            />

            {/* Body copy */}
            <div className="gr-body">
              <p>
                Paeonia Innovations will be presenting at the{" "}
                <strong>
                  40th Public Lecture (113th Research Meeting) of GRAMS
                </strong>{" "}
                — the Group for Research on Automated Flow and Microreactor
                Synthesis, a research group under the Kinki Chemical Society's
                Synthesis Division. The event is open to general participants
                and includes both lectures and a company exhibition.
              </p>
            </div>

            {/* Talk block */}
            <div className="gr-talk-block">
              <span className="gr-talk-label">🎤 Talk · 15:30 – 16:00</span>
              <span className="gr-talk-title">
                "Palm-Sized, Mid-IR Spectroscopy at 0.3 Seconds: RTD, Opaque
                Matrices and Closed-Loop Optimisation in Continuous Flow"
              </span>
              <span className="gr-talk-speaker">
                Dr. Lennon Lee, CEO, Paeonia Innovations
              </span>
            </div>

            <div className="gr-meta">
              <p>
                <span className="gr-meta-icon">📍</span> Osaka Science and
                Technology Center — 8F Main Hall (Lectures) / Small &amp; Medium
                Halls (Exhibition)
              </p>
              <p className="gr-meta-sub">
                1-8-4 Utsubohonmachi, Nishi-ku, Osaka · also live via Zoom
              </p>
              <p>
                <span className="gr-meta-icon">🗓</span> Friday, 31 July 2026 |
                10:00 – 17:45 (JST)
              </p>
              <p>
                <span className="gr-meta-icon">🏭</span> 13 exhibiting companies
              </p>
            </div>

            <div className="gr-body">
              <p>
                If you're working in continuous flow chemistry, process
                intensification, or inline analytical technologies — including
                real-time monitoring of opaque or optically dense streams — this
                session is for you. Come by the exhibition to see the palm-sized
                Mid-IR spectrometer in person, or catch the talk live in Osaka
                or online via Zoom.
              </p>
            </div>

            <hr className="gr-divider" />

            {/* CTA */}
            <div className="gr-cta-wrap">
              <div className="gr-cta-row">
                <a
                  href="https://kinka.or.jp/form/view.php?id=184434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gr-cta-btn"
                >
                  Register to Attend
                </a>
              </div>
              <p className="gr-cta-note">
                Registration closes 24 July 2026. Free for GRAMS members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GramsSeminar;
