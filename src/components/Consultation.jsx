import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";
const CONSULT_TEMPLATE_ID = "template_79hve7b"; // shared with Customer Interest Form

// ── Styles ─────────────────────────────────────────────────────────
const consultStyles = `
  /* Overrides on top of your App.css #consultation styles */
  #consultation {
    padding-top: 100px; /* clears fixed navbar — overrides App.css 50px */
  }
  #consultation .container {
    display: flex;
    justify-content: center;
  }
  #consultation .col-md-8 {
    float: none !important;
    margin: 0 auto !important;
    width: 100%;
    max-width: 760px;
  }

  .cs-field {
    margin-bottom: 24px;
    width: 100%;
    float: none;
    clear: both;
  }
  .cs-question {
    font-size: 18px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #1a1a1a;
    margin-bottom: 10px;
    display: block;
    width: 100%;
    float: none;
    line-height: 1.5;
  }
  .cs-question .cs-req { color: #cc0033; margin-left: 2px; }

  .cs-select {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #444;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ddd;
    border-radius: 0;
    box-shadow: none;
    -webkit-appearance: none;
    cursor: pointer;
    float: none;
    box-sizing: border-box;
  }
  .cs-select:focus { border-color: #999; outline: 0; }

  .cs-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 24px;
    float: none;
    clear: both;
  }
  .cs-row-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    float: none;
    clear: both;
  }
  @media (max-width: 768px) {
    .cs-row   { grid-template-columns: 1fr; }
    .cs-row-3 { grid-template-columns: 1fr; }
  }

  .cs-option-group {
    display: block;
    width: 100%;
    margin-top: 6px;
    float: none;
    clear: both;
  }
  .cs-option-item {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    width: 100% !important;
    float: none !important;
    padding: 6px 0;
    cursor: pointer;
    color: #1a1a1a;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.4;
    gap: 10px;
    box-sizing: border-box;
    margin: 0 !important;
  }
  .cs-option-item:hover { color: #000; }
  .cs-option-item input[type="radio"],
  .cs-option-item input[type="checkbox"] {
    -webkit-appearance: auto !important;
    appearance: auto !important;
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    min-width: 16px !important;
    max-width: 16px !important;
    min-height: 16px !important;
    max-height: 16px !important;
    margin: 0 !important;
    padding: 0 !important;
    float: none !important;
    position: static !important;
    flex-shrink: 0 !important;
    accent-color: #608dfd;
    cursor: pointer;
    box-sizing: border-box !important;
    vertical-align: middle;
  }
  .cs-option-text {
    display: inline;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    color: #1a1a1a;
    line-height: 1.4;
  }

  .cs-consent-row {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 10px;
    padding: 8px 0;
    cursor: pointer;
    color: #333;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5;
    width: 100%;
    float: none;
  }
  .cs-consent-row input[type="checkbox"] {
    -webkit-appearance: auto !important;
    appearance: auto !important;
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    min-width: 16px !important;
    max-width: 16px !important;
    min-height: 16px !important;
    max-height: 16px !important;
    margin: 0 !important;
    margin-top: 3px !important;
    padding: 0 !important;
    flex-shrink: 0 !important;
    float: none !important;
    position: static !important;
    accent-color: #608dfd;
    cursor: pointer;
  }

  .cs-required {
    font-size: 16px;
    color: #555;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 24px;
    display: block;
  }
  .cs-required span { color: #cc0033; }

  .cs-alert {
    padding: 10px 14px;
    margin-top: 16px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    border-radius: 0;
    clear: both;
  }
  .cs-alert-success {
    background: rgba(60, 160, 90, 0.15);
    border: 1px solid rgba(60, 160, 90, 0.4);
    color: #7DCF9A;
  }
  .cs-alert-error {
    background: rgba(204, 0, 51, 0.12);
    border: 1px solid rgba(204, 0, 51, 0.35);
    color: #cc6677;
  }
`;

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
  const [challenge, setChallenge] = useState("");
  const [prefDay, setPrefDay] = useState("");
  const [prefMonth, setPrefMonth] = useState("");
  const [prefYear, setPrefYear] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [meetingFormat, setMeetingFormat] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      setStatus({
        type: "error",
        msg: "Please agree to the consent before submitting.",
      });
      return;
    }
    setLoading(true);

    const preferredDate =
      prefDay && prefMonth && prefYear
        ? `${prefDay} ${prefMonth} ${prefYear}`
        : "Not specified";

    const templateParams = {
      form_source: "Book a Consultation",
      enquiry_type: consultType,
      topic: industry,
      extra_info: applications.join(", ") || "—",
      description: challenge,
      schedule: `Date: ${preferredDate} | Time: ${preferredTime} | Format: ${meetingFormat}`,
      role: "—",
      country,
      name,
      company,
      email,
      phone: phone || "Not provided",
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
      setConsultType("");
      setIndustry("");
      setApplications([]);
      setChallenge("");
      setPrefDay("");
      setPrefMonth("");
      setPrefYear("");
      setPreferredTime("");
      setMeetingFormat("");
      setCountry("");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
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

                <div className="cs-field">
                  <label className="cs-question">
                    4. Describe your current challenge or what you hope to
                    achieve <span className="cs-req">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your process challenges, goals, or what's currently holding you back…"
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    required
                  />
                </div>

                <div className="cs-field">
                  <label className="cs-question">
                    5. Preferred Date <span className="cs-req">*</span>
                  </label>
                  <div className="cs-row-3">
                    <select
                      className="cs-select"
                      value={prefDay}
                      onChange={(e) => setPrefDay(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Day
                      </option>
                      {days.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <select
                      className="cs-select"
                      value={prefMonth}
                      onChange={(e) => setPrefMonth(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Month
                      </option>
                      {months.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select
                      className="cs-select"
                      value={prefYear}
                      onChange={(e) => setPrefYear(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Year
                      </option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="cs-field">
                  <label className="cs-question">
                    6. Preferred Time Slot <span className="cs-req">*</span>
                  </label>
                  <select
                    className="cs-select"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a time (SGT)
                    </option>
                    <option>09:00 – 10:00 (SGT)</option>
                    <option>10:00 – 11:00 (SGT)</option>
                    <option>11:00 – 12:00 (SGT)</option>
                    <option>14:00 – 15:00 (SGT)</option>
                    <option>15:00 – 16:00 (SGT)</option>
                    <option>16:00 – 17:00 (SGT)</option>
                  </select>
                </div>

                <div className="cs-field">
                  <label className="cs-question">
                    7. Preferred meeting format{" "}
                    <span className="cs-req">*</span>
                  </label>
                  <RadioGroup
                    name="meeting_format"
                    options={[
                      "Video Call (Microsoft Teams)",
                      "In-Person — Singapore",
                    ]}
                    value={meetingFormat}
                    onChange={setMeetingFormat}
                  />
                </div>

                <div className="cs-field">
                  <label className="cs-question">
                    8. Country / Region <span className="cs-req">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Singapore"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>

                <div className="cs-row">
                  <div className="cs-field">
                    <label className="cs-question">
                      9. Full Name <span className="cs-req">*</span>
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
                      10. Company Name <span className="cs-req">*</span>
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

                <div className="cs-row">
                  <div className="cs-field">
                    <label className="cs-question">
                      11. Business Email Address{" "}
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
                    <label className="cs-question">12. Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. +65 XXXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

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
                      from the Paeonia team.
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

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Design by Paeonia Innovations</p>
        </div>
      </div>
    </div>
  );
};
