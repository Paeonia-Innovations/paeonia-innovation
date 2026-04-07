import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_TEMPLATE_ID = "template_79hve7b";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";

// ── Styles
const surveyStyles = `
  #SurveyForm_HannoverMesse { padding-top: 100px; padding-bottom: 60px; }
  #SurveyForm_HannoverMesse .container { display: flex; justify-content: center; }
  #SurveyForm_HannoverMesse .col-md-8 {
    float: none !important;
    margin: 0 auto !important;
    width: 100%;
    max-width: 760px;
  }

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

  .ds-required {
    font-size: 16px; color: #555; font-family: "Open Sans", sans-serif;
    margin-bottom: 24px; display: block;
  }
  .ds-required span { color: #cc0033; }

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
export const SurveyFormHannoverMesse = () => {
  const [challenge, setChallenge] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!challenge.trim()) {
      setStatus({
        type: "error",
        msg: "Please briefly describe your process or measurement challenge.",
      });
      return;
    }
    if (!name.trim() || !email.trim() || !department.trim()) {
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
      form_source: "Hannover Messe 2026 Survey",
      enquiry_type: "Hannover Messe",
      topic: "—",
      extra_info: "—",
      description: challenge.trim() || "—",
      schedule: "Hannover Messe 2026 — 20–24 April 2026, Hall 16, Stand B15",
      role: department.trim() || "—",
      name,
      company: "—",
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
        msg: "Thank you! Your response has been received. We'll prepare a personalised report for you and look forward to seeing you at Hannover Messe 2026. See you at Hall 16, Stand B15! 🎉",
      });
      // Reset
      setChallenge("");
      setName("");
      setEmail("");
      setDepartment("");
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

      <div id="SurveyForm_HannoverMesse">
        <div className="container">
          <div
            className="col-md-8"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              {/* Header */}
              <div className="section-title">
                <h2>Hannover Messe 2026 Survey</h2>
                <p className="ds-required">
                  <span>*</span> Required
                </p>
              </div>

              {/* Intro banner */}
              <div className="ds-intro-box">
                🎉 We are excited to see you on 📅 20 – 24 April 2026
                &nbsp;|&nbsp; 📍 Hall 16, Stand B15 at{" "}
                <strong>
                  Hannover Messe 2026, Singapore Pavilion: AI Manufacturing
                  Centre of Excellence
                </strong>
                . Fill in this short survey to receive a{" "}
                <strong>personalised report</strong> on how our{" "}
                <strong>
                  Mid-infrared and machine learning technology platform
                </strong>{" "}
                can help you.
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Q1 — Process / Measurement challenge */}
                <div className="ds-field">
                  <label className="ds-question">
                    1. What is your current process / measurement challenge?{" "}
                    <span className="ds-req">*</span>
                  </label>
                  <span className="ds-sublabel">
                    Please state 1 to 2 which are at the top priority for you.
                  </span>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="e.g. We need real-time inline monitoring of our reaction but currently rely on offline sampling with 4–24 hours delays."
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                  />
                </div>

                {/* Q2 — Name */}
                <div className="ds-field">
                  <label className="ds-question">
                    2. Name <span className="ds-req">*</span>
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

                {/* Q3 — Business Email Address */}
                <div className="ds-field">
                  <label className="ds-question">
                    3. Business Email Address <span className="ds-req">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your business email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Q4 — Department */}
                <div className="ds-field">
                  <label className="ds-question">
                    4. Department <span className="ds-req">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. R&D, Manufacturing, Quality Assurance"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  />
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
                      personalised technology report and for follow-up
                      communications related to Hannover Messe 2026.
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

export default SurveyFormHannoverMesse;
