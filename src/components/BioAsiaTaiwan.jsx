import React, { useState } from "react";
import emailjs from "emailjs-com";

const SEND_EMAIL = true;

const bioStyles = `
  #bioAsiaTaiwan {
    background: #fff;
    padding-top: 120px;
    padding-bottom: 80px;
  }
  #bioAsiaTaiwan .container {
    display: flex;
    justify-content: center;
  }
  #bioAsiaTaiwan .bat-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .bat-title {
    font-family: "Poster", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #333;
    margin: 0 0 24px;
    line-height: 1.2;
  }
  .bat-img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 28px;
    display: block;
  }
  .bat-body {
    font-family: "Poster", sans-serif;
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.75;
    margin-bottom: 0;
  }
  .bat-body p {
    font-family: "Poster", sans-serif;
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.75;
    margin: 0 0 14px;
  }
  .bat-body a { color: #1a1a1a; text-decoration: none; }
  .bat-body ul {
    list-style: none;
    padding-left: 0;
    margin: 6px 0 18px;
    font-family: "Poster", sans-serif;
    font-size: 18px;
  }
  .bat-body li {
    font-family: "Poster", sans-serif;
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.75;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 8px;
  }
  .bat-body li::before {
    content: "●";
    color: #7a1b1f;
    font-size: 10px;
    flex-shrink: 0;
    margin-top: 7px;
  }
  /* Icon chips */
  .bat-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 0 0 20px;
  }
  .bat-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #7a1b1f;
    color: #fff;
    font-family: "Poster", sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 6px;
    line-height: 1;
  }
  .bat-chip-icon {
    font-size: 15px;
    line-height: 1;
  }
  .bat-meta {
    margin: 0 0 10px;
  }
  .bat-meta p {
    font-family: "Poster", sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #7a1b1f;
    margin: 0 0 5px;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .bat-meta-icon {
    min-width: 24px;
    text-align: center;
    flex-shrink: 0;
  }
  .bat-tags {
    font-family: "Poster", sans-serif;
    font-size: 14px;
    color: #bbb;
    margin: 0;
    letter-spacing: 0.02em;
  }
  .bat-divider {
    border: none;
    border-top: 1px solid #f0ece6;
    margin: 40px 0 36px;
  }
  .bat-form-title {
    font-family: "Poster", sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #333;
    margin: 0 0 28px;
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

export const BioAsiaTaiwan = () => {
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
      form_source: "BIO Asia-Taiwan 2026 — Customer Interest Form",
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
      <style>{bioStyles}</style>

      <div id="bioAsiaTaiwan">
        <div className="container">
          <div className="bat-inner">
            {/* Page title */}
            <h1 className="bat-title">BIO Asia-Taiwan 2026</h1>

            {/* Event image */}
            <img
              src="img/portfolio/0.3SecondsToADecision.png"
              alt="0.3 Seconds to a Decision — Live Mid-IR Process Monitoring"
              className="bat-img"
            />

            {/* Body copy */}
            <div className="bat-body">
              <p>
                We're running live Mid-IR process monitoring at our BIO
                Asia-Taiwan booth - a palm-sized, transmission-mode spectrometer
                reading optically dense streams in real time, one spectrum every
                0.3 seconds.
              </p>
            </div>

            {/* Feature chips */}
            <div className="bat-chips">
              <span className="bat-chip">
                <span className="bat-chip-icon">🚫</span> No Bypass Loop
              </span>
              <span className="bat-chip">
                <span className="bat-chip-icon">⏱</span> No Sampling Delay
              </span>
              <span className="bat-chip">
                <span className="bat-chip-icon">⚡</span> Real-Time Reaction
              </span>
            </div>

            <div className="bat-body">
              <p>
                <strong>What you'll see in 15 minutes:</strong>
              </p>
              <ul>
                <li>Real-time spectra from a live process stream</li>
                <li>How transmission Mid-IR reads matrices that defeat NIR</li>
                <li>
                  Validation against GC and FTIR across labs in Asia, Europe and
                  North America
                </li>
              </ul>
            </div>

            <div className="bat-meta">
              <p>
                <span className="bat-meta-icon">🗓</span> July 16 (Thur.) - 19
                (Sun.) 2026
              </p>
              <p>
                <span className="bat-meta-icon">🎤</span> Talk by Dr. Lennon
                Lee, CEO - 18 July 2026 (Sat.), 10.30am
              </p>
              <p>
                <span className="bat-meta-icon">📍</span> Overseas Pavilion,
                Booth L326
              </p>
            </div>

            <hr className="bat-divider" />

            {/* Interest form */}
            <h2 className="bat-form-title">Register Your Interest</h2>

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

export default BioAsiaTaiwan;
