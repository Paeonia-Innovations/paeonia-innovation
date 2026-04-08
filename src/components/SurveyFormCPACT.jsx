import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_TEMPLATE_ID = "template_79hve7b";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";

// ── Styles
const surveyStyles = `
  #SurveyFormCPACT { padding-top: 120px; padding-bottom: 60px; }
  #SurveyFormCPACT .container { display: flex; justify-content: center; }
  #SurveyFormCPACT .col-md-8 {
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

  .ds-option-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.5;
  width: 100%;        /* add this */
  float: none;        /* add this — overrides the global label { float: left } */
  clear: both;        /* add this */
}
  .ds-option-row input[type="radio"],
  .ds-option-row input[type="checkbox"] {
    -webkit-appearance: auto !important; appearance: auto !important;
    width: 16px !important; height: 16px !important;
    min-width: 16px !important; flex-shrink: 0;
    margin-top: 3px !important; accent-color: #7a1b1f; cursor: pointer;
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

  .ds-other-input {
    margin-top: 6px; margin-left: 26px;
    width: calc(100% - 26px);
    padding: 5px 10px; font-size: 15px;
    border: 1px solid #ddd; border-radius: 0;
    font-family: "Open Sans", sans-serif; color: #444;
  }
  .ds-other-input:focus { border-color: #999; outline: 0; }

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

const ROLE_OPTIONS = [
  "Process Engineer",
  "Analytical / PAT Scientist",
  "R&D / Application Scientist",
  "Quality / Regulatory",
  "Operations / Manufacturing",
  "Management / Strategy",
  "Other",
];

const CHALLENGE_OPTIONS = [
  "Probe fouling / coating",
  "Cleaning and downtime between batches",
  "Poor signal quality / low SNR in concentrated media",
  "Slow measurement speed / data lag",
  "Difficulty correlating spectra to process endpoints",
  "High capital or maintenance cost",
];

const FOLLOWUP_OPTIONS = [
  "Yes, please reach out to me",
  "Maybe - send me more information first",
  "No, just the webinar for now",
];

// ── Page Component ──────────────────────────────────────────────────
export const SurveyFormCPACT = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [roleOther, setRoleOther] = useState("");
  const [challenges, setChallenges] = useState([]);
  const [question, setQuestion] = useState("");
  const [application, setApplication] = useState("");
  const [followup, setFollowup] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleChallenge = (option) => {
    if (challenges.includes(option)) {
      setChallenges(challenges.filter((c) => c !== option));
    } else if (challenges.length < 2) {
      setChallenges([...challenges, option]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setStatus({ type: "error", msg: "Please fill in your name and email." });
      return;
    }
    if (!role) {
      setStatus({ type: "error", msg: "Please select your role." });
      return;
    }
    if (role === "Other" && !roleOther.trim()) {
      setStatus({ type: "error", msg: "Please specify your role." });
      return;
    }
    if (challenges.length === 0) {
      setStatus({
        type: "error",
        msg: "Please select at least one challenge.",
      });
      return;
    }
    if (!followup) {
      setStatus({
        type: "error",
        msg: "Please select a follow-up preference.",
      });
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

    const resolvedRole = role === "Other" ? `Other: ${roleOther.trim()}` : role;

    const templateParams = {
      form_source: "CPACT Webinar Survey — April 30",
      enquiry_type: "CPACT Webinar",
      topic: resolvedRole,
      extra_info: challenges.join("; "),
      // description: question.trim() || "—",
      description: `What is the one question you most want answered in this webinar?\n${question.trim() || "—"}\n\nIs there a specific process or application you'd like us to address, even briefly?\n${application.trim() || "—"}`,
      //schedule: application.trim() || "—",
      schedule: followup,
      role: resolvedRole,
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
        msg: "Thank you! Your response has been received. We look forward to seeing you at the CPACT Webinar on April 30th. 🎉",
      });
      setName("");
      setEmail("");
      setRole("");
      setRoleOther("");
      setChallenges([]);
      setQuestion("");
      setApplication("");
      setFollowup("");
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

      <div id="SurveyFormCPACT">
        <div className="container">
          <div
            className="col-md-8"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              {/* Header */}
              <div className="section-title">
                <h2>
                  Help Us Tailor The CPACT Webinar on April 30th to Your Process
                  Challenges
                </h2>
                <p className="ds-required">
                  <span>*</span> Required
                </p>
              </div>

              {/* Intro banner */}
              <div className="ds-intro-box">
                Before we finalize the agenda, we'd love to understand your
                context. This takes under 2 minutes.
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Q1 — Name */}
                <div className="ds-field">
                  <label className="ds-question">
                    1. Name <span className="ds-req">*</span>
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

                {/* Q2 — Email */}
                <div className="ds-field">
                  <label className="ds-question">
                    2. Email Address <span className="ds-req">*</span>
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

                {/* Q3 — Role */}
                <div className="ds-field">
                  <label className="ds-question">
                    3. What best describes your role?{" "}
                    <span className="ds-req">*</span>
                  </label>
                  {ROLE_OPTIONS.map((option) => (
                    <label key={option} className="ds-option-row">
                      <input
                        type="radio"
                        name="role"
                        value={option}
                        checked={role === option}
                        onChange={() => setRole(option)}
                      />
                      <span className="ds-option-text">{option}</span>
                    </label>
                  ))}
                  {role === "Other" && (
                    <input
                      type="text"
                      className="ds-other-input"
                      placeholder="Please specify your role"
                      value={roleOther}
                      onChange={(e) => setRoleOther(e.target.value)}
                    />
                  )}
                </div>

                {/* Q4 — Challenges */}
                <div className="ds-field">
                  <label className="ds-question">
                    4. What is your biggest challenge with current inline
                    monitoring in viscous or complex samples?{" "}
                    <span className="ds-req">*</span>
                  </label>
                  <span className="ds-sublabel">Select up to 2.</span>
                  {CHALLENGE_OPTIONS.map((option) => (
                    <label key={option} className="ds-option-row">
                      <input
                        type="checkbox"
                        checked={challenges.includes(option)}
                        onChange={() => toggleChallenge(option)}
                        disabled={
                          !challenges.includes(option) && challenges.length >= 2
                        }
                      />
                      <span className="ds-option-text">{option}</span>
                    </label>
                  ))}
                </div>

                {/* Q5 — Webinar question */}
                <div className="ds-field">
                  <label className="ds-question">
                    5. What is the one question you most want answered in this
                    webinar?
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Type your question here"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>

                {/* Q6 — Specific process */}
                <div className="ds-field">
                  <label className="ds-question">
                    6. Is there a specific process or application you'd like us
                    to address, even briefly?
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="e.g. monitoring, emulsion stability"
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                  />
                </div>

                {/* Q7 — Follow-up */}
                <div className="ds-field">
                  <label className="ds-question">
                    7. Would you be interested in a confidential 1-to-1
                    feasibility discussion after the webinar?{" "}
                    <span className="ds-req">*</span>
                  </label>
                  {FOLLOWUP_OPTIONS.map((option) => (
                    <label key={option} className="ds-option-row">
                      <input
                        type="radio"
                        name="followup"
                        value={option}
                        checked={followup === option}
                        onChange={() => setFollowup(option)}
                      />
                      <span className="ds-option-text">{option}</span>
                    </label>
                  ))}
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
                      I agree that my information will be used to tailor the
                      CPACT Webinar agenda and for follow-up communications
                      related to the event.
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

export default SurveyFormCPACT;
