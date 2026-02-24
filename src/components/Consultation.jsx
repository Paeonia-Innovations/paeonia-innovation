import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";
const CONSULT_TEMPLATE_ID = "template_79hve7b";

// ── Calendly Link ──────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/zhangyao-paeoniatech/30min";

// ── Styles ─────────────────────────────────────────────────────────
const consultStyles = `
  #consultation { padding-top: 100px; }
  #consultation .container { display: flex; justify-content: center; }
  #consultation .col-md-8 {
    float: none !important;
    margin: 0 auto !important;
    width: 100%;
    max-width: 760px;
  }

  .cs-field { margin-bottom: 24px; width: 100%; float: none; clear: both; }

  .cs-question {
    font-size: 18px; font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #1a1a1a; margin-bottom: 10px;
    display: block; width: 100%; float: none; line-height: 1.5;
  }
  .cs-question .cs-req { color: #cc0033; margin-left: 2px; }

  .cs-sublabel {
    font-size: 14px; color: #666;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 10px; display: block; line-height: 1.6;
  }

  .cs-select {
    display: block; width: 100%; padding: 6px 12px;
    font-size: 16px; line-height: 1.42857143; color: #444;
    background-color: #fff; background-image: none;
    border: 1px solid #ddd; border-radius: 0; box-shadow: none;
    -webkit-appearance: none; cursor: pointer; float: none; box-sizing: border-box;
  }
  .cs-select:focus { border-color: #999; outline: 0; }

  .cs-row {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 15px; margin-bottom: 24px; float: none; clear: both;
  }
  @media (max-width: 768px) { .cs-row { grid-template-columns: 1fr; } }

  .cs-option-group { display: block; width: 100%; margin-top: 6px; float: none; clear: both; }
  .cs-option-item {
    display: flex !important; flex-direction: row !important;
    align-items: center !important; width: 100% !important;
    float: none !important; padding: 6px 0; cursor: pointer;
    color: #1a1a1a; font-size: 16px; font-family: "Open Sans", sans-serif;
    line-height: 1.4; gap: 10px; box-sizing: border-box; margin: 0 !important;
  }
  .cs-option-item:hover { color: #000; }
  .cs-option-item input[type="radio"],
  .cs-option-item input[type="checkbox"] {
    -webkit-appearance: auto !important; appearance: auto !important;
    display: inline-block !important;
    width: 16px !important; height: 16px !important;
    min-width: 16px !important; max-width: 16px !important;
    min-height: 16px !important; max-height: 16px !important;
    margin: 0 !important; padding: 0 !important;
    float: none !important; position: static !important;
    flex-shrink: 0 !important; accent-color: #608dfd;
    cursor: pointer; box-sizing: border-box !important; vertical-align: middle;
  }
  .cs-option-text {
    display: inline; font-size: 16px;
    font-family: "Open Sans", sans-serif; color: #1a1a1a; line-height: 1.4;
  }

  .cs-consent-row {
    display: flex !important; flex-direction: row !important;
    align-items: flex-start !important; gap: 10px; padding: 8px 0;
    cursor: pointer; color: #333; font-size: 16px;
    font-family: "Open Sans", sans-serif; line-height: 1.5;
    width: 100%; float: none;
  }
  .cs-consent-row input[type="checkbox"] {
    -webkit-appearance: auto !important; appearance: auto !important;
    display: inline-block !important;
    width: 16px !important; height: 16px !important;
    min-width: 16px !important; max-width: 16px !important;
    min-height: 16px !important; max-height: 16px !important;
    margin: 0 !important; margin-top: 3px !important; padding: 0 !important;
    flex-shrink: 0 !important; float: none !important; position: static !important;
    accent-color: #608dfd; cursor: pointer;
  }

  .cs-required {
    font-size: 16px; color: #555; font-family: "Open Sans", sans-serif;
    margin-bottom: 24px; display: block;
  }
  .cs-required span { color: #cc0033; }

  /* Calendly booking box */
  .cs-calendly-box {
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 20px;
    background: #fafafa;
    margin-top: 8px;
  }
  .cs-calendly-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    background: #0069ff;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
    margin-bottom: 14px;
  }
  .cs-calendly-btn:hover { background: #0057d4; color: #fff; }

  .cs-booked-badge {
    display: none;
    align-items: center;
    gap: 8px;
    background: #f0faf4;
    border: 1px solid #a8d5b5;
    border-radius: 4px;
    padding: 10px 14px;
    font-size: 14px;
    color: #2d7a47;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 14px;
  }
  .cs-booked-badge.show { display: flex; }

  .cs-booked-checkbox {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 10px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #444;
    line-height: 1.5;
    cursor: pointer;
  }
  .cs-booked-checkbox input[type="checkbox"] {
    -webkit-appearance: auto !important; appearance: auto !important;
    width: 16px !important; height: 16px !important;
    min-width: 16px !important; flex-shrink: 0;
    margin-top: 2px !important; accent-color: #608dfd;
    cursor: pointer;
  }

  .cs-alert {
    padding: 10px 14px; margin-top: 16px; font-size: 16px;
    font-family: "Open Sans", sans-serif; border-radius: 0; clear: both;
  }
  .cs-alert-success {
    background: rgba(60, 160, 90, 0.15);
    border: 1px solid rgba(60, 160, 90, 0.4);
    color: #2d7a47;
  }
  .cs-alert-error {
    background: rgba(204, 0, 51, 0.12);
    border: 1px solid rgba(204, 0, 51, 0.35);
    color: #cc6677;
  }
`;

// ── Calendly Popup ─────────────────────────────────────────────────
const CalendlyPopup = ({ isOpen, onClose, onBooked }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Listen for Calendly booking event — captures date/time automatically
    const handleMessage = (e) => {
      if (e.data.event && e.data.event === "calendly.event_scheduled") {
        // e.data.payload contains booking details
        const payload = e.data.payload;
        const startTime = payload?.event?.start_time;
        let bookedDateTime = "Booked via Calendly";

        if (startTime) {
          // Format: "Fri, 27 Feb 2026, 15:30 SGT"
          const date = new Date(startTime);
          bookedDateTime = date.toLocaleString("en-SG", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Singapore",
            timeZoneName: "short",
          });
        }
        onBooked(bookedDateTime);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen, onBooked]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "700px",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#0069ff",
            color: "#fff",
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: "15px",
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              📅 Book a Free Consultation
            </div>
            <div
              style={{
                fontSize: "12px",
                opacity: 0.8,
                fontFamily: '"Open Sans", sans-serif',
              }}
            >
              Paeonia Innovations · 30 min
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "#fff",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Calendly iframe */}
        <iframe
          src={`${CALENDLY_URL}?embed_type=Inline&hide_gdpr_banner=1`}
          style={{ flex: 1, border: "none", width: "100%" }}
          title="Book a Consultation"
        />
      </div>
    </div>
  );
};

// ── Radio Group ────────────────────────────────────────────────────
const RadioGroup = ({ name, options, value, onChange }) => (
  <div className="cs-option-group">
    {options.map((opt) => (
      <label key={opt} className="cs-option-item">
        <input
          type="radio"
          name={name}
          value={opt}
          checked={value === opt}
          onChange={() => onChange(opt)}
        />
        <span className="cs-option-text">{opt}</span>
      </label>
    ))}
  </div>
);

// ── Checkbox Group ─────────────────────────────────────────────────
const CheckboxGroup = ({ options, values, onChange }) => (
  <div className="cs-option-group">
    {options.map((opt) => (
      <label key={opt} className="cs-option-item">
        <input
          type="checkbox"
          value={opt}
          checked={values.includes(opt)}
          onChange={() => {
            const next = values.includes(opt)
              ? values.filter((v) => v !== opt)
              : [...values, opt];
            onChange(next);
          }}
        />
        <span className="cs-option-text">{opt}</span>
      </label>
    ))}
  </div>
);

// ── Page Component ─────────────────────────────────────────────────
export const Consultation = () => {
  const [consultType, setConsultType] = useState("");
  const [industry, setIndustry] = useState("");
  const [applications, setApplications] = useState([]);
  const [challenge, setChallenge] = useState({
    problem: "",
    currentMethod: "",
    constraints: "",
    goal: "",
    other: "",
  });
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [slotBooked, setSlotBooked] = useState(false);
  const [bookedDateTime, setBookedDateTime] = useState("");
  const [calOpen, setCalOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBooked = (dateTimeStr) => {
    setSlotBooked(true);
    setBookedDateTime(dateTimeStr || "Booked via Calendly");
    setCalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !consultType ||
      !industry ||
      applications.length === 0 ||
      !challenge.problem?.trim() ||
      !name ||
      !company ||
      !email
    ) {
      setStatus({
        type: "error",
        msg: "Please fill in all required fields before submitting.",
      });
      return;
    }
    if (!slotBooked) {
      setStatus({
        type: "error",
        msg: "Please book your time slot via Calendly before submitting.",
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

    const templateParams = {
      form_source: "Book a Consultation",
      enquiry_type: consultType,
      topic: industry,
      extra_info: applications.join(", ") || "—",
      description: [
        challenge.problem ? `Problem: ${challenge.problem}` : "",
        challenge.currentMethod
          ? `Current Method: ${challenge.currentMethod}`
          : "",
        challenge.constraints ? `Constraints: ${challenge.constraints}` : "",
        challenge.goal ? `Goal: ${challenge.goal}` : "",
        challenge.other ? `Other: ${challenge.other}` : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
      schedule: bookedDateTime || "Booked via Calendly",
      role: "—",
      //country: "—",
      name,
      company,
      email,
      phone: phone || "Not provided",
      linkedin: linkedin || "Not provided",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        CONSULT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus({
        type: "success",
        msg: "Thank you for your consultation request! Our team will be in touch with you shortly to confirm your booking.",
      });
      // Reset all fields
      setConsultType("");
      setIndustry("");
      setApplications([]);
      setChallenge({
        problem: "",
        currentMethod: "",
        constraints: "",
        goal: "",
        other: "",
      });
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setLinkedin("");
      setSlotBooked(false);
      setBookedDateTime("");
      setConsent(false);
    } catch {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again or email us directly.",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <style>{consultStyles}</style>

      {/* Calendly Popup */}
      <CalendlyPopup
        isOpen={calOpen}
        onClose={() => setCalOpen(false)}
        onBooked={handleBooked}
      />

      <div id="consultation">
        <div className="container">
          <div
            className="col-md-8"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              <div className="section-title">
                <h2>Book a Consultation</h2>
                <p>
                  Schedule a free session with our specialists. Tell us about
                  your process and we'll show you exactly what molecular-level
                  visibility can reveal.
                </p>
                <p className="cs-required">
                  <span>*</span> Required
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Q1 */}
                <div className="cs-field">
                  <label className="cs-question">
                    1. What type of consultation are you requesting?{" "}
                    <span className="cs-req">*</span>
                  </label>
                  <select
                    className="cs-select"
                    value={consultType}
                    onChange={(e) => setConsultType(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select your answer
                    </option>
                    <option>Technical Consultation</option>
                    <option>Partnership / Collaboration Discussion</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                {/* Q2 */}
                <div className="cs-field">
                  <label className="cs-question">
                    2. Which industry are you in?{" "}
                    <span className="cs-req">*</span>
                  </label>
                  <RadioGroup
                    name="industry"
                    options={[
                      "Pharmaceuticals",
                      "Food & Beverage",
                      "Cosmetics & Personal Care",
                      "Specialty Chemicals",
                      "Academic / Research",
                      "Other",
                    ]}
                    value={industry}
                    onChange={setIndustry}
                  />
                </div>

                {/* Q3 */}
                <div className="cs-field">
                  <label className="cs-question">
                    3. What is your primary application or process?{" "}
                    <span className="cs-req">*</span>
                  </label>
                  <CheckboxGroup
                    options={[
                      "Continuous Flow Chemistry",
                      "Reactor Design and Development",
                      "Reaction / Process Monitoring",
                      "Purity Monitoring",
                      "Concentration Monitoring",
                      "Blending Verification",
                      "Complex Component Mixtures Quantification",
                      "Emulsification Monitoring",
                      "Other",
                    ]}
                    values={applications}
                    onChange={setApplications}
                  />
                </div>

                {/* Q4 — 5 sub-textboxes */}
                <div className="cs-field">
                  <label className="cs-question">
                    4. Tell us about your challenge{" "}
                    <span className="cs-req">*</span>
                  </label>

                  <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      Problem <span style={{ color: "#cc0033" }}>*</span>
                    </p>
                    <p className="cs-sublabel">
                      What measurement or process challenge are you facing?
                    </p>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. We need to monitor emulsification in real time during pharmaceutical production but have no inline solution."
                      value={challenge.problem}
                      onChange={(e) =>
                        setChallenge({ ...challenge, problem: e.target.value })
                      }
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      Current Method
                    </p>
                    <p className="cs-sublabel">
                      What are you using now and why is it insufficient?
                    </p>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. We currently use offline sampling which causes 2–3 hour delays and misses transient events."
                      value={challenge.currentMethod}
                      onChange={(e) =>
                        setChallenge({
                          ...challenge,
                          currentMethod: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      Constraints
                    </p>
                    <p className="cs-sublabel">
                      Sample type, environment, throughput requirements,
                      integration needs, budget or timeline limitations.
                    </p>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. Chemical hazardous environment, small sample volumes (~5mL), response time under 30s."
                      value={challenge.constraints}
                      onChange={(e) =>
                        setChallenge({
                          ...challenge,
                          constraints: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      Goal
                    </p>
                    <p className="cs-sublabel">
                      What would a successful outcome look like for you?
                    </p>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. An inline sensor that gives real-time readings, integrates with our control system, and reduces process downtime by 80%."
                      value={challenge.goal}
                      onChange={(e) =>
                        setChallenge({ ...challenge, goal: e.target.value })
                      }
                    />
                  </div>

                  <div style={{ marginBottom: "8px" }}>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: "15px",
                        fontWeight: "600",
                        color: "#1a1a1a",
                        marginBottom: "4px",
                      }}
                    >
                      Anything Else?
                    </p>
                    <p className="cs-sublabel">
                      Any other details, context, or questions you would like to
                      share.
                    </p>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="e.g. Share more about your thought."
                      value={challenge.other}
                      onChange={(e) =>
                        setChallenge({ ...challenge, other: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Q5 — Calendly booking */}
                <div className="cs-field">
                  <label className="cs-question">
                    5. Book your time slot <span className="cs-req">*</span>
                  </label>
                  <div className="cs-calendly-box">
                    <p className="cs-sublabel" style={{ marginBottom: "14px" }}>
                      Pick a date and time that works for you. A calendar invite
                      and Microsoft Teams link will be sent to your email
                      automatically by Calendly.
                    </p>

                    {/* Blue button */}
                    <button
                      type="button"
                      className="cs-calendly-btn"
                      onClick={() => setCalOpen(true)}
                    >
                      📅{" "}
                      {slotBooked ? "Change Time Slot" : "Book Your Time Slot"}
                    </button>

                    {/* Green badge — shows actual booked date/time */}
                    {slotBooked && (
                      <div
                        className="cs-booked-badge show"
                        style={{ marginTop: "4px" }}
                      >
                        ✅ Booked — {bookedDateTime}
                      </div>
                    )}

                    {/* Divider */}
                    <div
                      style={{
                        borderTop: "1px solid #e0ddd8",
                        margin: "14px 0",
                      }}
                    />

                    {/* Confirmation checkbox */}
                    <label className="cs-booked-checkbox">
                      <input
                        type="checkbox"
                        checked={slotBooked}
                        onChange={() => setSlotBooked(!slotBooked)}
                      />
                      <span>I have booked my time slot via Calendly</span>
                    </label>
                    <span className="cs-req">*</span>
                  </div>
                </div>

                {/* Q6 & Q7 — Name & Company */}
                <div className="cs-row">
                  <div className="cs-field">
                    <label className="cs-question">
                      6. Full Name <span className="cs-req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="cs-field">
                    <label className="cs-question">
                      7. Company Name <span className="cs-req">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Q8 & Q9 — Email & Phone */}
                <div className="cs-row">
                  <div className="cs-field">
                    <label className="cs-question">
                      8. Business Email Address{" "}
                      <span className="cs-req">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Business Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="cs-field">
                    <label className="cs-question">9. Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. +65 XXXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Q10 — LinkedIn */}
                <div className="cs-field">
                  <label className="cs-question">
                    10. LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="e.g. https://www.linkedin.com/in/yourname"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                </div>

                {/* Consent */}
                <div className="cs-field">
                  <label className="cs-question">
                    Consent <span className="cs-req">*</span>
                  </label>
                  <label className="cs-consent-row">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent(!consent)}
                    />
                    <span className="cs-option-text">
                      I agree that my information will be used to schedule and
                      respond to my consultation request. Submission does not
                      guarantee a confirmed booking until I receive confirmation
                      from the Paeonia team. Thank you so much.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Request Consultation"}
                </button>

                {status && (
                  <div
                    className={`cs-alert ${status.type === "success" ? "cs-alert-success" : "cs-alert-error"}`}
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
