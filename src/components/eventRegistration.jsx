import React, { useEffect, useState, useRef } from "react";
import { translations } from "../locales/translations";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const EventRegistration = () => {
  const [inView, setInView] = useState(false);
  const [, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const ref = useRef(null);

  const [language, setLanguage] = useState("en");

  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [email, setEmail] = useState("");
  const [weChatID, setWeChatID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companySize, setCompanySize] = useState("companySize");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [requirements, setRequirements] = useState("");
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [others, setOthers] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const isFormValid = fullName && companyName && selectedRegion;
  const [agreeInfo, setAgreeInfo] = useState(false);
  const [agreeUpdates, setAgreeUpdates] = useState(false);

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > elementPosition + 100) {
          // Adjust threshold as needed
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNext = () => setStep(2);
  const handlePrevious = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeInfo) {
      alert("You must agree to provide the information.");
      return;
    }
    console.log("Sending email with user details...");
    // Add email sending logic (e.g., using an API)
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_glye7pm", //service ID from EmailJS
  //       "template_dgm8t1d", //template ID from EmailJS
  //       e.target,
  //       "Q0syV6H_5pAHvwxU9" //public key from EmailJS
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //         setSuccessMessage("Email sent to the Paeonia Team successfully!");
  //         setTimeout(() => {
  //           setSuccessMessage("");
  //         }, 5000);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // Function to handle checkbox change
  const handleCheckboxChange = (category, item) => {
    if (category === "product") {
      setSelectedProducts((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    } else if (category === "application") {
      setSelectedApplications((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    }
  };

  // const handleNext = () => {
  //   if (isFormValid) {
  //     console.log("Proceeding to next step...");
  //     // Add navigation logic here
  //   }
  // };

  return (
    <div>
      {step === 1 && (
        <div id="eventRegistration" className="text-center">
          <div className="container">
            <div className="col-md-12" ref={ref}>
              <div className={`${inView ? "animated" : ""}`}>
                <div className="registration">
                  <h3>
                    Welcome to Paeonia Innovations' Seminar on Mid-IR
                    Spectrometer!
                  </h3>

                  <div className="col-12 col-md-12">
                    <div className="spacer"></div>
                    <p>
                      {" "}
                      Paeonia Innovations specializes in compact Mid-IR
                      spectrometer solutions for chemical analysis and
                      industrial applications. We are committed to delivering
                      high-performance analytical tools that enhance accuracy,
                      efficiency, and scientific advancement.
                    </p>
                    <div className="spacer"></div>
                    {/* Language Switch Button */}
                    <button
                      onClick={() =>
                        setLanguage(language === "en" ? "zh" : "en")
                      }
                    >
                      {language === "en" ? "Switch to 中文" : "切换到 English"}
                    </button>

                    {/* Form */}
                    <div className="form-container">
                      {/* <form onSubmit={handleSubmit}> */}
                      <form>
                        <fieldset>
                          <h2>{translations[language].basicInfo}</h2>

                          <div className="Field">
                            <label>
                              {translations[language].name} <sup>*</sup>
                            </label>
                            <input
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder={translations[language].name}
                            />
                          </div>

                          <div className="Field">
                            <label>
                              {translations[language].companyName} <sup>*</sup>
                            </label>
                            <input
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                              placeholder={translations[language].companyName}
                            />
                          </div>

                          <div className="Field">
                            <label>
                              {translations[language].jobPosition} <sup>*</sup>
                            </label>
                            <input
                              value={jobPosition}
                              onChange={(e) => setJobPosition(e.target.value)}
                              placeholder={translations[language].jobPosition}
                            />
                          </div>

                          <div className="Field">
                            <label>
                              {translations[language].email} <sup>*</sup>
                            </label>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder={translations[language].email}
                            />
                          </div>

                          <div className="Field">
                            <label>{translations[language].wechat}</label>
                            <input
                              value={weChatID}
                              onChange={(e) => setWeChatID(e.target.value)}
                              placeholder={translations[language].wechat}
                            />
                          </div>

                          <div className="Field">
                            <label>{translations[language].phone}</label>
                            <input
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder={translations[language].phone}
                            />
                          </div>

                          <div className="Field">
                            <label>{translations[language].companySize}</label>
                            <select
                              value={companySize}
                              onChange={(e) => setCompanySize(e.target.value)}
                            >
                              <option value="1to50">1-50</option>
                              <option value="51to200">51-200</option>
                              <option value="201to500">201-500</option>
                              <option value="501to1000">501-1000</option>
                              <option value="1000Plus">1000+</option>
                            </select>
                          </div>

                          {/* Region Dropdown */}
                          <div className="Field">
                            <label>{translations[language].region}</label>
                            <select
                              value={selectedRegion}
                              onChange={(e) =>
                                setSelectedRegion(e.target.value)
                              }
                            >
                              {translations[language].regionList.map(
                                (region, index) => (
                                  <option key={index} value={region}>
                                    {region}
                                  </option>
                                )
                              )}
                            </select>
                          </div>

                          <h2>{translations[language].productInterest}</h2>

                          <div className="Field">
                            <label>
                              {translations[language].productCategories}{" "}
                              <sup>*</sup>
                            </label>
                            {translations[language].productCategoriesList.map(
                              (product, index) => (
                                <div
                                  key={index}
                                  className="form-check d-flex align-items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id={`product-${index}`}
                                    className="form-check-input float-start me-2"
                                    checked={selectedProducts.includes(product)}
                                    onChange={() =>
                                      handleCheckboxChange("product", product)
                                    }
                                  />
                                  <label
                                    htmlFor={`product-${index}`}
                                    className="form-check-label"
                                  >
                                    {product}
                                  </label>
                                </div>
                              )
                            )}
                          </div>

                          <div className="Field">
                            <label>{translations[language].requirements}</label>
                            <textarea
                              value={requirements}
                              onChange={(e) => setRequirements(e.target.value)}
                              placeholder={
                                translations[language].requirementsText
                              }
                              className="form-control"
                              rows="4"
                            />
                          </div>

                          {/* Application Categories checkbox */}
                          <div className="Field">
                            <label>
                              {translations[language].productAppCategories}{" "}
                              <sup>*</sup>
                            </label>
                            {translations[
                              language
                            ].productAppCategoriesList.map(
                              (application, index) => (
                                <div
                                  key={index}
                                  className="form-check d-flex align-items-center"
                                >
                                  <input
                                    type="checkbox"
                                    id={`application-${index}`}
                                    className="form-check-input float-start me-2"
                                    checked={selectedApplications.includes(
                                      application
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(
                                        "application",
                                        application
                                      )
                                    }
                                  />
                                  <label
                                    htmlFor={`application-${index}`}
                                    className="form-check-label"
                                  >
                                    {application}
                                  </label>
                                </div>
                              )
                            )}
                          </div>

                          <div className="Field">
                            <label>{translations[language].others}</label>
                            <textarea
                              value={others}
                              onChange={(e) => setRequirements(e.target.value)}
                              placeholder={
                                translations[language].requirementsText
                              }
                              className="form-control"
                              rows="4"
                            />
                          </div>

                          <div className="Field">
                            <label>{translations[language].timeline}</label>
                            <select
                              value={selectedTimeline}
                              onChange={(e) =>
                                setSelectedTimeline(e.target.value)
                              }
                            >
                              {translations[language].timelinesList.map(
                                (region, index) => (
                                  <option key={index} value={region}>
                                    {region}
                                  </option>
                                )
                              )}
                            </select>
                          </div>

                          <button
                            className="btn btn-danger mt-3"
                            onClick={handleNext}
                            disabled={!isFormValid}
                          >
                            Next
                          </button>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div id="reviewPage" className="text-center">
          <h2>{translations[language].ReviewInfo}</h2>
          <label>{translations[language].basicInfo}</label>
          <p>
            <strong>{translations[language].fullName}:</strong> {fullName}
          </p>
          <p>
            <strong>{translations[language].companyName}:</strong> {companyName}
          </p>
          <p>
            <strong>{translations[language].jobPosition}:</strong> {jobPosition}
          </p>
          <p>
            <strong>{translations[language].email}:</strong> {email}
          </p>
          <p>
            <strong>{translations[language].weChatID}:</strong> {weChatID}
          </p>
          <p>
            <strong>{translations[language].phoneNumber}:</strong> {phoneNumber}
          </p>
          <p>
            <strong>{translations[language].companySize}:</strong> {companySize}
          </p>
          <p>
            <strong>{translations[language].region}:</strong> {selectedRegion}
          </p>
          <label>{translations[language].productInterest}</label>
          <p>
            <strong>{translations[language].productCategories}:</strong>{" "}
            {selectedProducts}
          </p>
          <p>
            <strong>{translations[language].requirements}:</strong>{" "}
            {requirements}
          </p>
          <p>
            <strong>{translations[language].productAppCategories}:</strong>{" "}
            {selectedApplications}
          </p>
          <p>
            <strong>{translations[language].others}:</strong> {others}
          </p>
          <p>
            <strong>{translations[language].timeline}:</strong>{" "}
            {selectedTimeline}
          </p>
          <div className="form-check">
            <input
              type="checkbox"
              id="agreeInfo"
              className="form-check-input"
              checked={agreeInfo}
              onChange={() => setAgreeInfo(!agreeInfo)}
            />
            <label htmlFor="agreeInfo" className="form-check-label">
              I agree to provide above information
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="agreeUpdates"
              className="form-check-input"
              checked={agreeUpdates}
              onChange={() => setAgreeUpdates(!agreeUpdates)}
            />
            <label htmlFor="agreeUpdates" className="form-check-label">
              I agree to receive product updates and industry news
            </label>
          </div>

          {/* Buttons */}
          <button
            className="btn btn-secondary mt-3 me-2"
            onClick={handlePrevious}
          >
            Previous
          </button>

          <button
            className="btn btn-success mt-3"
            onClick={handleSubmit}
            disabled={!agreeInfo} // Submit only if "I agree" is checked
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;
