import React, { useState } from "react";
import emailjs from "emailjs-com";

const SEND_EMAIL = true;

const fciStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  #flowChemistryIndia2026 {
    background: #F6F6F6;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #flowChemistryIndia2026 .container {
    display: flex;
    justify-content: center;
  }
  #flowChemistryIndia2026 .fci-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .fci-eyebrow {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 14px;
  }
  .fci-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
    line-height: 1.2;
  }
  .fci-subtitle {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #7A1B1F;
    margin: 0 0 24px;
    line-height: 1.4;
  }
  .fci-banner-img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
    display: block;
  }
  .fci-register-line {
    text-align: center;
    margin: 0 0 28px;
  }
  .fci-register-line a {
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
  .fci-register-line a:hover {
    background: #7A1B1F;
    color: #F6F6F6;
  }
  .fci-body {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .fci-body p {
    font-family: "Inter", sans-serif;
    font-size: 17px;
    color: #292121;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .fci-body strong {
    font-weight: 700;
  }
  .fci-meta {
    margin: 0 0 24px;
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 18px 20px;
  }
  .fci-meta p {
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
  .fci-meta p:last-child {
    margin-bottom: 0;
  }
  .fci-meta-icon {
    min-width: 22px;
    text-align: center;
    flex-shrink: 0;
  }
  .fci-divider {
    border: none;
    border-top: 1px solid #e2dcd3;
    margin: 36px 0 32px;
  }
  .fci-partners {
    background: #fff;
    border: 1px solid #ece6df;
    border-radius: 8px;
    padding: 20px;
    margin: 0 0 24px;
    text-align: center;
  }
  .fci-partners-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #A11E21;
    margin: 0 0 16px;
  }
  .fci-partners-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
  }
  .fci-partner-logo {
    height: 88px;
    max-width: 260px;
    object-fit: contain;
  }
  .fci-demo-block {
    background: #fff;
    border: 1px solid #ece6df;
    border-left: 4px solid #7A1B1F;
    border-radius: 8px;
    padding: 18px 20px;
    margin: 0 0 24px;
  }
  .fci-demo-label {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #7A1B1F;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0 0 8px;
  }
  .fci-demo-title {
    display: block;
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #292121;
    line-height: 1.4;
    margin: 0 0 8px;
  }
  .fci-demo-partner {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: italic;
    color: #6b6b6b;
    margin: 0 0 12px;
  }
  .fci-demo-block p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #292121;
    line-height: 1.7;
    margin: 0;
  }
  .fci-cta-wrap {
    text-align: center;
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
  }
  .fci-cta-btn {
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
  .fci-cta-btn:hover {
    background: #5a1015;
    color: #F6F6F6;
    transform: translateY(-2px);
  }
  .fci-cta-btn-secondary {
    background: #fff;
    color: #7A1B1F;
    border: 1.5px solid #7A1B1F;
  }
  .fci-cta-btn-secondary:hover {
    background: #7A1B1F;
    color: #F6F6F6;
  }

  /* Interest form — brand fonts on the shared .ep-* form styles */
  #flowChemistryIndia2026 .fci-form-title {
    font-family: "Familjen Grotesk", sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #292121;
    margin: 0 0 10px;
  }
  #flowChemistryIndia2026 .fci-form-subtitle {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: #292121;
    line-height: 1.6;
    margin: 0 0 24px;
  }
  #flowChemistryIndia2026 .ep-label,
  #flowChemistryIndia2026 .ep-input,
  #flowChemistryIndia2026 .ep-select,
  #flowChemistryIndia2026 .ep-checkbox-label,
  #flowChemistryIndia2026 .ep-success p,
  #flowChemistryIndia2026 .ep-submit-btn {
    font-family: "Inter", sans-serif;
  }
  #flowChemistryIndia2026 .ep-required {
    color: #A11E21;
  }
  #flowChemistryIndia2026 .ep-submit-btn {
    background: #7A1B1F;
  }
  #flowChemistryIndia2026 .ep-submit-btn:hover:not(:disabled) {
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
  "Continuous Flow Chemistry",
  "Reactor Design and Development",
  "Reaction/Process Monitoring",
  "Purity Monitoring",
  "Concentration Monitoring",
  "Blending Verification",
  "Complex Component Mixtures Quantification",
  "Others",
];

export const FlowChemistryIndia2026 = () => {
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
      form_source: "Flow Chemistry India 2026 — Customer Interest Form",
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
      <style>{fciStyles}</style>

      <div id="flowChemistryIndia2026">
        <div className="container">
          <div className="fci-inner">
            <span className="fci-eyebrow">Exhibition</span>

            <h1 className="fci-title">
              Live OrionIR™ Demo — RTD, Reaction Monitoring &amp; Process
              Control
            </h1>
            <h2 className="fci-subtitle">
              Flow Chemistry India 2026 — 13th Edition, Flow Chemistry Society
              Annual Conference
            </h2>

            <img
              src="img/portfolio/FlowChemistryIndia2026.jpeg"
              alt="Flow Chemistry India 2026 — Conference and Exhibition, 10-11 September 2026, Hyderabad, India"
              className="fci-banner-img"
            />

            <div className="fci-register-line">
              <a
                href="https://glostem.in/conference/fci-2026/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Register for FCI26 →
              </a>
            </div>

            <div className="fci-meta">
              <p>
                <span className="fci-meta-icon">📍</span> Avasa Hotel, Madhapur,
                Hyderabad, India
              </p>
              <p>
                <span className="fci-meta-icon">🗓</span> Thu 10 – Fri 11
                September 2026
              </p>
              <p>
                <span className="fci-meta-icon">🎯</span> Theme: The Continuous
                Advantage — Building Resilient and Cost-Efficient Supply Chains
                for Indian APIs and Chemicals
              </p>
            </div>

            <div className="fci-body">
              <p>
                Paeonia Innovations will be at Flow Chemistry India 2026, hosted
                by the Flow Chemistry Society in Hyderabad, to demonstrate RTD
                (residence time distribution) and reaction monitoring with
                OrionIR™, our compact inline Mid-IR spectrometer — bringing
                real-time visibility to flow chemistry and continuous
                manufacturing.
              </p>
            </div>

            <div className="fci-partners">
              <span className="fci-partners-label">In Partnership With</span>
              <div className="fci-partners-row">
                {/* <img
                  src="/PI logo nows.svg"
                  alt="Paeonia Innovations"
                  className="fci-partner-logo"
                /> */}
                <img
                  src="img/portfolio/AmAr-logo.webp"
                  alt="AmAr"
                  className="fci-partner-logo"
                />
                <img
                  src="img/portfolio/Spectrasolve-logo.png"
                  alt="Spectrasolve"
                  className="fci-partner-logo"
                />
              </div>
            </div>

            <div className="fci-demo-block">
              <span className="fci-demo-label">
                🔬 Live Product Demo at Our Partner Booth (Constellation, Stall:
                2)
              </span>
              <span className="fci-demo-title">
                OrionIR™ Mid-IR Spectrometer — Demo
              </span>
              <span className="fci-demo-partner">
                Presented with our India partner, AmAr & Spectrasolve
              </span>
              <p>
                See the OrionIR™ platform live for real-time reaction monitoring
                and residence-time-distribution (RTD) — helping make the
                invisible visible inside your flow reactor.
              </p>
            </div>

            <hr className="fci-divider" />

            <div className="fci-cta-wrap">
              <a
                href="https://glostem.in/conference/fci-2026/register"
                target="_blank"
                rel="noopener noreferrer"
                className="fci-cta-btn"
              >
                Register for Flow Chemistry India 2026 →
              </a>
              <a
                href="https://glostem.in/conference/fci-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="fci-cta-btn fci-cta-btn-secondary"
              >
                Visit Event Website →
              </a>
            </div>

            <hr className="fci-divider" />

            {/* Interest form */}
            <h2 className="fci-form-title">Connect With Paeonia Innovations</h2>
            <p className="fci-form-subtitle">
              Interested in OrionIR™ or meeting our team at Flow Chemistry India
              2026? Leave your details below and we'll get in touch.
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

export default FlowChemistryIndia2026;
