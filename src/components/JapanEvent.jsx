import React from "react";

const jpStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  #japanEvent {
    background: #F6F6F6;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #japanEvent .container {
    display: flex;
    justify-content: center;
  }
  #japanEvent .jp-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .jp-eyebrow {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 14px;
  }
  .jp-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
    line-height: 1.2;
  }
  .jp-subtitle {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 24px;
    line-height: 1.4;
  }
  .jp-img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 28px;
    display: block;
  }
  .jp-body {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .jp-body p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .jp-body strong {
    font-weight: 700;
  }
  .jp-talk-block {
    background: #fff;
    border: 1px solid #ece6df;
    border-left: 4px solid #7A1B1F;
    border-radius: 8px;
    padding: 18px 20px;
    margin: 0 0 24px;
  }
  .jp-talk-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #A11E21;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
  }
  .jp-talk-title {
    display: block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #292121;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  .jp-talk-speaker {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    color: #6b6b6b;
  }
  .jp-meta {
    margin: 0 0 24px;
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .jp-meta p {
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
  .jp-meta p:last-child {
    margin-bottom: 0;
  }
  .jp-meta-icon {
    min-width: 22px;
    text-align: center;
    flex-shrink: 0;
  }
  .jp-divider {
    border: none;
    border-top: 1px solid #e2dcd3;
    margin: 36px 0 32px;
  }
  .jp-cta-wrap {
    text-align: center;
    margin-top: 8px;
  }
  .jp-cta-btn {
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
  .jp-cta-btn:hover {
    background: #5a1015;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .jp-cta-note {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #8a8a8a;
    margin: 14px 0 0;
  }
`;

export const JapanEvent = () => {
  return (
    <div>
      <style>{jpStyles}</style>

      <div id="japanEvent">
        <div className="container">
          <div className="jp-inner">
            <span className="jp-eyebrow">
              Advanced Seminar on Flow Synthesis
            </span>

            {/* Page title */}
            <h1 className="jp-title">From Spectrum to Decision</h1>
            <h2 className="jp-subtitle">
              AI Chemometrics and Palm-Sized Mid-IR for Real-Time Flow Chemistry
            </h2>

            {/* Event image */}
            <img
              src="img/portfolio/Alcom.png"
              alt="From Spectrum to Decision: AI Chemometrics and Palm-Sized Mid-IR for Real-Time Flow Chemistry"
              className="jp-img"
            />

            {/* Body copy */}
            <div className="jp-body">
              <p>
                Paeonia Innovations will be presenting at the{" "}
                <strong>Advanced Seminar on Flow Synthesis</strong> in Osaka,
                Japan — organised by Horizo Inc and ALCOM.
              </p>
            </div>

            {/* Talk block */}
            <div className="jp-talk-block">
              <span className="jp-talk-label">🎤 Talk</span>
              <span className="jp-talk-title">
                "From Spectrum to Decision: AI Chemometrics and Palm-Sized
                Mid-IR for Real-Time Flow Chemistry"
              </span>
              <span className="jp-talk-speaker">
                Dr. Lennon Lee, CEO, Paeonia Innovations
              </span>
            </div>

            <div className="jp-meta">
              <p>
                <span className="jp-meta-icon">📍</span> Osaka Science and
                Technology Center
              </p>
              <p>
                <span className="jp-meta-icon">🗓</span> Thursday, 30 July 2026
                | 16:40 – 17:10 (JST)
              </p>
            </div>

            <div className="jp-body">
              <p>
                If you're working in flow chemistry R&amp;D, process
                development, or exploring inline analytical technologies such as
                IR, NMR, or AI-driven PAT — this session is for you. Looking
                forward to connecting with the flow chemistry community in
                Osaka!
              </p>
            </div>

            <hr className="jp-divider" />

            {/* CTA */}
            <div className="jp-cta-wrap">
              <a
                href="https://share-na2.hsforms.com/2Ml6H1-a-Q56SEgXU15Ofewt4au7"
                target="_blank"
                rel="noopener noreferrer"
                className="jp-cta-btn"
              >
                Register Your Interest
              </a>
              <p className="jp-cta-note">
                Scan the QR code at the seminar, or register online now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanEvent;
