import React, { useState } from "react";
import emailjs from "emailjs-com";

const SEND_EMAIL = true;

const maStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  #miniApact2026 {
    background: #F6F6F6;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #miniApact2026 .container {
    display: flex;
    justify-content: center;
  }
  #miniApact2026 .ma-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .ma-eyebrow {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 14px;
  }
  .ma-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
    line-height: 1.2;
  }
  .ma-subtitle {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 24px;
    line-height: 1.4;
  }
  .ma-banner-img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
    display: block;
  }
  .ma-register-line {
    text-align: center;
    margin: 0 0 28px;
  }
  .ma-register-line a {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #7A1B1F;
    background: #fdf1e8;
    border: 1.5px solid #7A1B1F;
    border-radius: 6px;
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    transition: background 0.2s ease;
  }
  .ma-register-line a:hover {
    background: #7A1B1F;
    color: #F6F6F6;
  }
  .ma-body {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .ma-body p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .ma-body strong {
    font-weight: 700;
  }
  .ma-abstract-summary {
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
    margin: 0 0 24px;
  }
  .ma-abstract-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 10px;
  }
  .ma-abstract-summary p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: italic;
    color: #292121;
    line-height: 1.7;
    margin: 0 0 10px;
  }
  .ma-abstract-summary p:last-child {
    margin-bottom: 0;
  }
  .ma-meta {
    margin: 0 0 24px;
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .ma-meta p {
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
  .ma-meta p:last-child {
    margin-bottom: 0;
  }
  .ma-meta-icon {
    min-width: 22px;
    text-align: center;
    flex-shrink: 0;
  }
  .ma-divider {
    border: none;
    border-top: 1px solid #e2dcd3;
    margin: 36px 0 32px;
  }
  .ma-section-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 16px;
  }
  .ma-talk-block {
    background: #fff;
    border: 1px solid #ece6df;
    border-left: 4px solid #7A1B1F;
    border-radius: 8px;
    padding: 18px 20px;
    margin: 0 0 24px;
  }
  .ma-talk-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #7A1B1F;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 8px;
  }
  .ma-talk-title {
    display: block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #292121;
    line-height: 1.4;
    margin: 0 0 8px;
  }
  .ma-talk-speaker {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: italic;
    color: #6b6b6b;
  }
  .ma-cta-wrap {
    text-align: center;
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }
  .ma-cta-btn {
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
  .ma-cta-btn:hover {
    background: #5a1015;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .ma-cta-btn-secondary {
    background: #fff;
    color: #7A1B1F;
    border: 1.5px solid #7A1B1F;
  }
  .ma-cta-btn-secondary:hover {
    background: #7A1B1F;
    color: #F6F6F6;
  }

  /* Interest form — brand fonts on the shared .ep-* form styles */
  #miniApact2026 .ma-form-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
  }
  #miniApact2026 .ma-form-subtitle {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #292121;
    line-height: 1.6;
    margin: 0 0 24px;
  }
  #miniApact2026 .ep-label,
  #miniApact2026 .ep-input,
  #miniApact2026 .ep-select,
  #miniApact2026 .ep-checkbox-label,
  #miniApact2026 .ep-success p,
  #miniApact2026 .ep-submit-btn {
    font-family: "Inter", sans-serif;
  }
  #miniApact2026 .ep-required {
    color: #A11E21;
  }
  #miniApact2026 .ep-submit-btn {
    background: #7A1B1F;
  }
  #miniApact2026 .ep-submit-btn:hover:not(:disabled) {
    background: #5a1015;
  }
`;

const roles = [
  "Professor",
  "Scientist",
  "Engineer",
  "Procurement",
  "Manufacturing",
  "Operations",
  "Head of Department",
  "Graduate Student",
];

const appCategories = [
  "Bioprocess & fermentation monitoring",
  "Bioreactor real-time process control",
  "Downstream processing & purification",
  "Drug formulation & API concentration",
  "Cell culture media quality verification",
  "Others",
];

export const MiniApact2026 = () => {
  const [formData, setFormData] = useState({
    role: "",
    appcategory: [],
    name: "",
    company: "",
    email: "",
    others: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category) => {
    setFormData((prev) => {
      const updated = prev.appcategory.includes(category)
        ? prev.appcategory.filter((c) => c !== category)
        : [...prev.appcategory, category];
      return { ...prev, appcategory: updated };
    });
  };

  const isFormValid =
    formData.role &&
    formData.appcategory.length > 0 &&
    formData.name &&
    formData.company &&
    formData.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    const categoriesText = formData.appcategory.includes("Others")
      ? formData.appcategory
          .filter((c) => c !== "Others")
          .concat(formData.others ? `Others: ${formData.others}` : "Others")
          .join(", ")
      : formData.appcategory.join(", ");

    const formDataToSend = {
      form_source: "Mini-APACT 2026 — Customer Interest Form",
      enquiry_type: "Event Interest",
      topic: formData.role,
      extra_info: categoriesText,
      description: "—",
      schedule: "—",
      role: formData.role,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      linkedin: "—",
      phone: "—",
    };

    try {
      if (SEND_EMAIL) {
        await emailjs.send(
          "service_glye7pm",
          "template_79hve7b",
          formDataToSend,
          "Q0syV6H_5pAHvwxU9",
        );
      } else {
        console.log("Email sending skipped during testing.");
      }

      setSuccessMessage(
        "Your form has been successfully sent to the PI admin team! Thank you so much",
      );
      setTimeout(() => {
        setFormData({
          role: "",
          appcategory: [],
          name: "",
          company: "",
          email: "",
          others: "",
        });
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccessMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <style>{maStyles}</style>

      <div id="miniApact2026">
        <div className="container">
          <div className="ma-inner">
            <span className="ma-eyebrow">Conference</span>

            <h1 className="ma-title">
              Flow-Compatible Mid-IR PAT for Biopharma Manufacturing
            </h1>
            <h2 className="ma-subtitle">
              Mini-APACT 2026 — Advanced Process Analytics &amp; Control
            </h2>

            <img
              src="img/portfolio/Mini_APACT_Logo.png"
              alt="Mini APACT Conference — Advanced Process Analytics & Control, 24–25 September 2026"
              className="ma-banner-img"
            />

            <div className="ma-register-line">
              <a
                href="https://www.apact.co.uk/mini"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Register here: www.apact.co.uk/mini
              </a>
            </div>

            <div className="ma-meta">
              <p>
                <span className="ma-meta-icon">📍</span> AstraZeneca, Charter
                Way, Macclesfield SK10 2NA, UK
              </p>
              <p>
                <span className="ma-meta-icon">🗓</span> Thu 24 – Fri 25
                September 2026
              </p>
              <p>
                <span className="ma-meta-icon">📌</span> Talk: Fri 25 Sept,
                3:40–4:05pm · Theme 4: Biopharma PACT
              </p>
            </div>

            <div className="ma-body">
              <p>
                Paeonia Innovations joins Mini-APACT 2026, hosted by CPACT at
                AstraZeneca's Macclesfield site, for two days covering advanced
                process analytics, modelling and control across pharma, biotech,
                chemicals and food.
              </p>
            </div>

            <div className="ma-talk-block">
              <span className="ma-talk-label">
                🎤 Live Talk at the Conference
              </span>
              <span className="ma-talk-title">
                "Flow-Compatible Mid-IR PAT: From Optically Dense Process
                Streams to Biopharmaceutical Continuous Manufacturing"
              </span>
              <span className="ma-talk-speaker">
                Dr. Lennon Lee, CEO, Paeonia Innovations
              </span>
            </div>

            <div className="ma-abstract-summary">
              <span className="ma-abstract-label">Abstract Summary</span>
              <p>
                OrionIR<sup className="reg-mark">®</sup> enables real-time
                Mid-IR monitoring of optically dense,
                aqueous process streams, matching or exceeding GC accuracy for
                multi-analyte quantitation.
              </p>
              <p>
                The same platform shows early promise for inline protein
                aggregation detection — a critical quality attribute for
                continuous biopharma manufacturing.
              </p>
            </div>

            <hr className="ma-divider" />

            <div className="ma-cta-wrap">
              <a
                href="https://www.apact.co.uk/mini"
                target="_blank"
                rel="noopener noreferrer"
                className="ma-cta-btn"
              >
                Register for Mini-APACT 2026 →
              </a>
              <a
                href="https://www.cpact.com/News/id/1429/apact-conference-mini-apact-programme-announced"
                target="_blank"
                rel="noopener noreferrer"
                className="ma-cta-btn ma-cta-btn-secondary"
              >
                View Mini-APACT 2026 Programme →
              </a>
            </div>

            <hr className="ma-divider" />

            {/* Interest form */}
            <h2 className="ma-form-title">Connect With Paeonia Innovations</h2>
            <p className="ma-form-subtitle">
              Interested in OrionIR<sup className="reg-mark">®</sup> or meeting
              our team at Mini-APACT 2026?
              Leave your details below and we'll get in touch.
            </p>

            <form onSubmit={handleSubmit} className="ep-form">
              {/* Role */}
              <div className="ep-field">
                <label className="ep-label">
                  What is your role? <span className="ep-required">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="ep-select"
                  required
                >
                  <option value="">-- Select your role --</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Application Categories */}
              <div className="ep-field">
                <label className="ep-label">
                  Application Categories <span className="ep-required">*</span>
                </label>
                <div className="ep-checkbox-list">
                  {appCategories.map((category) => (
                    <div key={category}>
                      <label className="ep-checkbox-row">
                        <input
                          type="checkbox"
                          checked={formData.appcategory.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                          className="ep-checkbox"
                        />
                        <span className="ep-checkbox-label">{category}</span>
                      </label>
                      {category === "Others" &&
                        formData.appcategory.includes("Others") && (
                          <input
                            type="text"
                            name="others"
                            placeholder="Please specify..."
                            value={formData.others}
                            onChange={handleChange}
                            className="ep-input ep-others-input"
                          />
                        )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Name, Company, Email */}
              <div className="ep-field">
                <label className="ep-label">
                  What is your name, company name and official email address?{" "}
                  <span className="ep-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="ep-input"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="ep-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Company or university email"
                  value={formData.email}
                  onChange={handleChange}
                  className="ep-input"
                  required
                  pattern=".+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}"
                  title="Kindly use your company or university email address."
                />
              </div>

              {/* Success */}
              {successMessage && (
                <div className="ep-success">
                  <p>{successMessage}</p>
                  <div className="ep-success-actions">
                    <a
                      href="https://www.linkedin.com/company/paeonia-innovations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-linkedin-btn"
                    >
                      🔗 Connect on LinkedIn
                    </a>
                  </div>
                </div>
              )}

              {/* Submit */}
              <div className="ep-submit-row">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="ep-submit-btn"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniApact2026;
