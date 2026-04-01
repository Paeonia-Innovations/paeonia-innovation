import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config (same as Consultation.jsx & Form.jsx) ───────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_TEMPLATE_ID = "template_79hve7b";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";

// ── Styles
const surveyStyles = `
  #SurveyForm { padding-top: 100px; padding-bottom: 60px; }
  #SurveyForm .container { display: flex; justify-content: center; }
  #SurveyForm .col-md-8 {
    float: none !important;
    margin: 0 auto !important;
    width: 100%;
    max-width: 760px;
  }

  /* ── Intro banner — brand crimson ── */
  .ds-intro-box {
    background: #fdf4f4;
    border: 1px solid #d9a0a3;
    border-left: 5px solid #7a1b1f;
    border-radius: 4px;
    padding: 22px 26px;
    margin-bottom: 36px;
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    color: #1a1a1a;
    line-height: 1.85;
  }
  .ds-intro-box strong { color: #7a1b1f; }

  .ds-field { margin-bottom: 28px; width: 100%; float: none; clear: both; }

  .ds-question {
    font-size: 18px; font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #1a1a1a; margin-bottom: 10px;
    display: block; width: 100%; line-height: 1.5;
  }
  .ds-question .ds-req { color: #cc0033; margin-left: 2px; }

  .ds-sublabel {
    font-size: 14px; color: #666;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 10px; display: block; line-height: 1.6;
  }

  /* Consent */
  .ds-consent-row {
    display: flex !important; flex-direction: row !important;
    align-items: flex-start !important; gap: 10px; padding: 8px 0;
    cursor: pointer; color: #333; font-size: 16px;
    font-family: "Open Sans", sans-serif; line-height: 1.5;
    width: 100%; float: none;
  }
  .ds-consent-row input[type="checkbox"] {
    -webkit-appearance: auto !important; appearance: auto !important;
    width: 16px !important; height: 16px !important;
    min-width: 16px !important; flex-shrink: 0;
    margin-top: 3px !important; accent-color: #7a1b1f; cursor: pointer;
  }

  .ds-option-text {
    display: inline; font-size: 16px;
    font-family: "Open Sans", sans-serif; color: #1a1a1a; line-height: 1.4;
  }

  /* Required note */
  .ds-required {
    font-size: 16px; color: #555; font-family: "Open Sans", sans-serif;
    margin-bottom: 24px; display: block;
  }
  .ds-required span { color: #cc0033; }

  /* Starbucks note */
  .ds-starbucks-note {
    display: flex; align-items: center; gap: 10px;
    background: #f0faf4; border: 1px solid #a8d5b5;
    border-radius: 4px; padding: 12px 16px;
    font-family: "Open Sans", sans-serif; font-size: 14px; color: #2d7a47;
    margin-top: 8px; margin-bottom: 28px;
  }

  .ds-alert {
    padding: 10px 14px; margin-top: 16px; font-size: 16px;
    font-family: "Open Sans", sans-serif; border-radius: 0; clear: both;
  }
  .ds-alert-success {
    background: rgba(60, 160, 90, 0.15);
    border: 1px solid rgba(60, 160, 90, 0.4);
    color: #2d7a47;
  }
  .ds-alert-error {
    background: rgba(204, 0, 51, 0.12);
    border: 1px solid rgba(204, 0, 51, 0.35);
    color: #cc6677;
  }
`;

// ── Page Component ──────────────────────────────────────────────────
export const SurveyForm = () => {
  const [challenge, setChallenge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!challenge.trim()) {
      setStatus({
        type: "error",
        msg: "Please briefly describe your measurement challenge.",
      });
      return;
    }
    if (!name.trim() || !email.trim() || !company.trim()) {
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }
    if (!consent) {
      setStatus({
        type: "error",
        msg: "Please agree to the consent before submitting.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    const templateParams = {
      form_source: "ARTC Demo Session Survey",
      enquiry_type: "Demo Session",
      topic: "—",
      extra_info: "—",
      description: challenge.trim() || "—",
      schedule: "ARTC Demo — Thursday, 9 April 2026, 2 pm",
      role: "—",
      name,
      company,
      email,
      phone: "—",
      linkedin: "—",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus({
        type: "success",
        msg: "Thank you! Your response has been received. We'll prepare a personalised report for you and look forward to seeing you at the demo session. Please collect your Starbucks gift card from us on the day. ☕",
      });
      // Reset
      setChallenge("");
      setName("");
      setEmail("");
      setCompany("");
      setConsent(false);
    } catch {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again or contact us directly.",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <style>{surveyStyles}</style>

      <div id="SurveyForm">
        <div className="container">
          <div
            className="col-md-8"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              {/* Header */}
              <div className="section-title">
                <h2>Demo Session Survey</h2>
                <p className="ds-required">
                  <span>*</span> Required
                </p>
              </div>

              {/* Intro banner */}
              <div className="ds-intro-box">
                🎉 We are excited to see you at our demo session held physically
                at <strong>ARTC on Thursday, 9 April 2026 at 2 pm</strong>.
                Please fill in this short survey with your correct information
                so that you can receive a <strong>personalised report</strong>{" "}
                on how our technology platform can help you - and also to
                collect your <strong>Starbucks gift card</strong> from us on the
                day. ☕
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Q1 — Measurement challenge */}
                <div className="ds-field">
                  <label className="ds-question">
                    1. Briefly describe your current measurement challenge{" "}
                    <span className="ds-req">*</span>
                  </label>
                  <span className="ds-sublabel">
                    Please state 1 to 2 which are at the top priority for you.
                  </span>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="e.g. We need real-time inline monitoring of our reaction but currently rely on offline sampling with 2–3 hour delays."
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                  />
                </div>

                {/* Q2 — Full Name */}
                <div className="ds-field">
                  <label className="ds-question">
                    2. Full Name <span className="ds-req">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Q3 — Email Address */}
                <div className="ds-field">
                  <label className="ds-question">
                    3. Email Address <span className="ds-req">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Q4 — Company */}
                <div className="ds-field">
                  <label className="ds-question">
                    4. Company / Organisation <span className="ds-req">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your company or organisation"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>

                {/* Starbucks reminder */}
                <div className="ds-starbucks-note">
                  ☕{" "}
                  <span>
                    Your Starbucks gift card will be collected in person at the
                    ARTC demo session. Please ensure your name and email above
                    are correct.
                  </span>
                </div>

                {/* Consent */}
                <div className="ds-field">
                  <label className="ds-question">
                    Consent <span className="ds-req">*</span>
                  </label>
                  <label className="ds-consent-row">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent(!consent)}
                    />
                    <span className="ds-option-text">
                      I agree that my information will be used to prepare a
                      personalised technology report and to administer the
                      Starbucks gift card collection at the demo session.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Submit Survey"}
                </button>

                {status && (
                  <div
                    className={`ds-alert ${
                      status.type === "success"
                        ? "ds-alert-success"
                        : "ds-alert-error"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
