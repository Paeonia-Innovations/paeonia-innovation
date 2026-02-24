import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";

// ── EmailJS Config ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_glye7pm";
const EMAILJS_PUBLIC_KEY = "Q0syV6H_5pAHvwxU9";
const CONTACT_TEMPLATE_ID = "template_dgm8t1d"; // your existing template

const newStyles = `
  /* Slide-in animation */
  .cf-dynamic {
    animation: cfSlide 0.3s ease forwards;
  }
  @keyframes cfSlide {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── All text in the form uses same size as the paragraph description ── */
  /* Target font size: matches "Please select the enquiry type..." paragraph = 18px in your CSS */

  /* Field wrapper — consistent spacing between every question */
  .cf-field {
    margin-bottom: 24px;
    width: 100%;
    float: none;
    clear: both;
  }

  /* Question label — same font size as your section-title p (18px) */
  .cf-question {
    font-size: 18px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 10px;
    display: block;
    width: 100%;
    float: none;
    line-height: 1.5;
  }
  .cf-question .cf-req { color: #cc0033; margin-left: 2px; }

  /* Sublabel hint */
  .cf-sublabel {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.45);
    font-family: "Open Sans", sans-serif;
    margin-bottom: 8px;
    display: block;
    width: 100%;
    float: none;
  }

  /* Select dropdown — matches form-control exactly */
  .cf-select {
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
    transition: none;
    -webkit-appearance: none;
    cursor: pointer;
    float: none;
  }
  .cf-select:focus {
    border-color: #999;
    outline: 0;
  }

  /* ── Radio & Checkbox — STACKED, one per line, left aligned ── */
  .cf-option-group {
    display: block;       /* block so children stack vertically */
    width: 100%;
    margin-top: 6px;
    float: none;
    clear: both;
  }

  /* Each option is its own full-width row */
  .cf-option-item {
    display: flex !important;   /* override any Bootstrap inline/float */
    flex-direction: row !important;
    align-items: center !important;
    width: 100% !important;
    float: none !important;
    padding: 6px 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.75);
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.4;
    gap: 10px;
    box-sizing: border-box;
  }
  .cf-option-item:hover { color: #fff; }

  /* The actual radio/checkbox input */
  .cf-option-item input[type="radio"],
  .cf-option-item input[type="checkbox"] {
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    min-width: 16px;
    accent-color: #608dfd;
    cursor: pointer;
    flex-shrink: 0;
    margin: 0 !important;
    float: none !important;
    position: static !important;
  }

  /* The text label next to radio/checkbox */
  .cf-option-text {
    display: inline;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.4;
  }

  /* Two-column row for name/company, email/phone */
  .cf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 24px;
    float: none;
    clear: both;
  }
  @media (max-width: 768px) {
    .cf-row { grid-template-columns: 1fr; }
  }

  /* Consent checkbox row */
  .cf-consent-row {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 10px;
    padding: 8px 0;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.65);
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5;
    width: 100%;
    float: none;
  }
  .cf-consent-row input[type="checkbox"] {
    display: inline-block !important;
    width: 16px !important;
    height: 16px !important;
    min-width: 16px;
    accent-color: #608dfd;
    margin-top: 3px !important;
    flex-shrink: 0;
    float: none !important;
    position: static !important;
    cursor: pointer;
  }

  /* Notice & required text — same size as description paragraph */
  .cf-notice {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Open Sans", sans-serif;
    margin-bottom: 6px;
    display: block;
  }
  .cf-required {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    font-family: "Open Sans", sans-serif;
    margin-bottom: 24px;
    display: block;
  }
  .cf-required span { color: #cc0033; }

  /* Alert messages */
  .cf-alert {
    padding: 10px 14px;
    margin-top: 16px;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    border-radius: 0;
    clear: both;
  }
  .cf-alert-success {
    background: rgba(60, 160, 90, 0.15);
    border: 1px solid rgba(60, 160, 90, 0.4);
    color: #7DCF9A;
  }
  .cf-alert-error {
    background: rgba(204, 0, 51, 0.12);
    border: 1px solid rgba(204, 0, 51, 0.35);
    color: #cc6677;
  }
`;

// ── Radio Group — stacked, one per line, left aligned ─────────────
const RadioGroup = ({ name, options, value, onChange }) => (
  <div className="cf-option-group">
    {options.map((opt) => (
      <label key={opt} className="cf-option-item">
        <input
          type="radio"
          name={name}
          value={opt}
          checked={value === opt}
          onChange={() => onChange(opt)}
        />
        <span className="cf-option-text">{opt}</span>
      </label>
    ))}
  </div>
);

//  Checkbox Group — stacked, one per line, left aligned
const CheckboxGroup = ({ options, values, onChange }) => (
  <div className="cf-option-group">
    {options.map((opt) => (
      <label key={opt} className="cf-option-item">
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
        <span className="cf-option-text">{opt}</span>
      </label>
    ))}
  </div>
);

// Main Component
export const ContactUs = (props) => {
  const [enquiryType, setEnquiryType] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("");
  const [products, setProducts] = useState([]);
  const [serviceType, setServiceType] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const dynamicRef = useRef(null);

  const handleEnquiryChange = (val) => {
    setEnquiryType(val);
    setTopic("");
    setDescription("");
    setStage("");
    setProducts([]);
    setServiceType("");
    setStatus(null);
  };

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

    const templateParams = {
      form_source: "Contact Us",
      enquiry_type: enquiryType,
      topic:
        enquiryType === "General Enquiry"
          ? topic
          : enquiryType === "Product Enquiry"
            ? products.join(", ") || "—"
            : serviceType || "—",
      extra_info:
        enquiryType === "Product Enquiry"
          ? `Use case: ${description}\nStage: ${stage}`
          : description,
      description,
      country,
      name,
      company,
      email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus({
        type: "success",
        msg: "Email sent to the Paeonia Team successfully!",
      });
      setEnquiryType("");
      setTopic("");
      setDescription("");
      setStage("");
      setProducts([]);
      setServiceType("");
      setCountry("");
      setName("");
      setCompany("");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again or email us directly.",
      });
    }
    setLoading(false);
  };

  // Reused personal fields block
  const PersonalFields = ({ startIndex }) => (
    <>
      <div className="cf-field">
        <label className="cf-question">
          {startIndex}. Which country or region are you enquiring from?{" "}
          <span className="cf-req">*</span>
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
      <div className="cf-row">
        <div className="cf-field">
          <label className="cf-question">
            {startIndex + 1}. Full Name <span className="cf-req">*</span>
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
        <div className="cf-field">
          <label className="cf-question">
            {startIndex + 2}. Company Name <span className="cf-req">*</span>
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
      <div className="cf-field">
        <label className="cf-question">
          {startIndex + 3}. Business Email Address{" "}
          <span className="cf-req">*</span>
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
    </>
  );

  // Contact info helpers (same as original)
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.data?.address || "")}`;
  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div>
      <style>{newStyles}</style>

      <div id="contactus">
        <div className="container">
          {/* ── Left: Form ── */}
          <div
            className="col-md-8"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              {/* Title — uses your existing .section-title styles */}
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please select the enquiry type and provide the required
                  information. Our team will respond as soon as possible.
                </p>
                <p className="cf-notice">
                  When you submit this form, it will not automatically collect
                  your details like name and email address unless you provide it
                  yourself.
                </p>
                <p className="cf-required">
                  <span>*</span> Required
                </p>
              </div>

              <form name="sentMessage" onSubmit={handleSubmit} noValidate>
                {/* Q1 — Enquiry Type */}
                <div className="cf-field">
                  <label className="cf-question">
                    1. What can we help you with?{" "}
                    <span className="cf-req">*</span>
                  </label>
                  <select
                    className="cf-select"
                    value={enquiryType}
                    onChange={(e) => handleEnquiryChange(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select your answer
                    </option>
                    <option>General Enquiry</option>
                    <option>Product Enquiry</option>
                    <option>Service Enquiry</option>
                  </select>
                </div>

                {/* Dynamic fields */}
                {enquiryType && (
                  <div
                    className="cf-dynamic"
                    key={enquiryType}
                    ref={dynamicRef}
                  >
                    {/* ─── GENERAL ENQUIRY ─── */}
                    {enquiryType === "General Enquiry" && (
                      <>
                        <div className="cf-field">
                          <label className="cf-question">
                            2. What is your enquiry about?{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <RadioGroup
                            name="gen_topic"
                            options={[
                              "Company information",
                              "Partnership",
                              "Media / Press",
                              "Others",
                            ]}
                            value={topic}
                            onChange={setTopic}
                          />
                        </div>
                        <div className="cf-field">
                          <label className="cf-question">
                            3. Please briefly describe your enquiry{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Enter your answer"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                        <PersonalFields startIndex={4} />
                      </>
                    )}

                    {/* PRODUCT ENQUIRY */}
                    {enquiryType === "Product Enquiry" && (
                      <>
                        <div className="cf-field">
                          <label className="cf-question">
                            2. Which product or solution are you interested in?{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <span className="cf-sublabel">
                            Select all that apply
                          </span>
                          <CheckboxGroup
                            options={[
                              "OrionIR Mid-IR Spectrometer (1800–900 cm⁻¹)",
                              "OrionIR Mid-IR Spectrometer (3500–1800 cm⁻¹)",
                              "Dual-Comb Ultrafast Laser K2-1000",
                              "Dual-Comb Ultrafast Laser K2-ASOSP",
                              "Cryogenic Flux / Drive / Signal / Read-out Lines",
                            ]}
                            values={products}
                            onChange={setProducts}
                          />
                        </div>
                        <div className="cf-field">
                          <label className="cf-question">
                            3. What is your intended application or use case?{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="e.g. Real-time emulsification monitoring in pharmaceutical production"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                        <div className="cf-field">
                          <label className="cf-question">
                            4. What stage are you at?{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <RadioGroup
                            name="prod_stage"
                            options={[
                              "Exploring options",
                              "Comparing solutions",
                              "Ready to loan",
                              "Ready to purchase",
                            ]}
                            value={stage}
                            onChange={setStage}
                          />
                        </div>
                        <PersonalFields startIndex={5} />
                      </>
                    )}

                    {/* SERVICE ENQUIRY */}
                    {enquiryType === "Service Enquiry" && (
                      <>
                        <div className="cf-field">
                          <label className="cf-question">
                            2. What type of service do you need?{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <RadioGroup
                            name="svc_type"
                            options={[
                              "Technical support on Product Integration",
                              "Technical support on Chemometric model",
                              "Maintenance and Servicing",
                              "Training",
                              "Other",
                            ]}
                            value={serviceType}
                            onChange={setServiceType}
                          />
                        </div>
                        <div className="cf-field">
                          <label className="cf-question">
                            3. Please describe the issue or service request{" "}
                            <span className="cf-req">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Enter your answer"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          />
                        </div>
                        <PersonalFields startIndex={4} />
                      </>
                    )}

                    {/* Consent */}
                    <div className="cf-field">
                      <label className="cf-question">
                        Consent <span className="cf-req">*</span>
                      </label>
                      <label className="cf-consent-row">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={() => setConsent(!consent)}
                        />
                        <span className="cf-option-text">
                          I agree that my information will be used to respond to
                          my enquiry.
                        </span>
                      </label>
                    </div>

                    {/* Submit — uses your existing btn-custom class */}
                    <button
                      type="submit"
                      className="btn btn-custom btn-lg"
                      disabled={loading}
                    >
                      {loading ? "Sending…" : "Submit"}
                    </button>
                  </div>
                )}

                {/* Alert */}
                {status && (
                  <div
                    className={`cf-alert ${status.type === "success" ? "cf-alert-success" : "cf-alert-error"}`}
                  >
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/*  Right: Contact Info  */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  {props.data?.address}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                {isMobile() ? (
                  <a href={`tel:${props.data?.phone}`} className="phone-link">
                    {props.data?.phone}
                  </a>
                ) : (
                  <span className="phone-text">{props.data?.phone}</span>
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <a href={`mailto:${props.data?.email}`} className="email-link">
                  {props.data?.email}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                Link to{" "}
                <a
                  href="https://www.paeonia.com.sg/"
                  className="paeonia-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paeonia Group
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Design by Paeonia Innovations</p>
        </div>
      </div>
    </div>
  );
};
