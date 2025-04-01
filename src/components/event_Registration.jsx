import React, { useState } from "react";
import { CircleDot, Atom } from "lucide-react";
import { LanguageToggle } from "./languageToggle";
import { FormStep } from "./FormStep";
import { CombinedForm } from "./CombinedForm";
import { ConfirmationStep } from "./ComfirmationStep";
import { translations } from "../locales/translations";
import emailjs from "emailjs-com";

const initialFormData = {
  name: "",
  companyName: "",
  jobPosition: "",
  email: "",
  wechat: "",
  phone: "",
  companySize: "",
  region: "",
  productInterests: [],
  productAppInterests: [],
  others: "",
  timelines: "",
};

function EventRegistration() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [locale, setLocale] = useState("zh");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[locale];

  const handleFormChange = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(""); // Reset success message before submission

    try {
      // Simulate API call (can be removed if unnecessary)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Collect form data from the state
      const formDataToSend = {
        name: formData.name,
        companyName: formData.companyName,
        jobPosition: formData.jobPosition,
        email: formData.email,
        wechat: formData.wechat,
        phone: formData.phone,
        companySize: formData.companySize,
        region: formData.region,
        category: formData.productInterests.join(", "), // Convert array to string
        requirements: formData.requirements,
        appcategory: formData.productAppInterests.join(", "), // Convert array to string
        others: formData.others,
        timelines: formData.timelines,
      };

      // Send email only to Admin
      await emailjs.send(
        "service_glye7pm", // Service ID from EmailJS
        "template_79hve7b", // Template ID from EmailJS
        formDataToSend, // Form data
        "Q0syV6H_5pAHvwxU9" // Public key from EmailJS
      );

      // Update success message
      setSuccessMessage(
        "Your message has been successfully sent to the PI admin team!"
      );

      // Redirect back to the event registration page after 3 seconds
      setTimeout(() => {
        setSuccessMessage(""); // Clear message
        window.location.href = "/eventregistration"; // Redirect to event registration page
      }, 3000);
    } catch (error) {
      console.error("Error sending email to admin:", error);
      setSuccessMessage(
        "An error occurred while sending your message. Please try again."
      );
    }

    setIsSubmitting(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call (this can be removed if not needed)
  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  //   // Collect form data from the state
  //   const formDataToSend = {
  //     name: formData.name,
  //     companyName: formData.companyName,
  //     jobPosition: formData.jobPosition,
  //     email: formData.email,
  //     wechat: formData.wechat,
  //     phone: formData.phone,
  //     companySize: formData.companySize,
  //     region: formData.region,
  //     category: formData.productCategories.join(", "), // Convert array to string
  //     requirements: formData.requirements,
  //     appcategory: formData.appCategories.join(", "), // Convert array to string
  //     others: formData.others,
  //     timelines: formData.timelines,
  //   };

  //   // Admin email submission
  //   emailjs
  //     .sendForm(
  //       "service_glye7pm", // Service ID from EmailJS
  //       "template_79hve7b", // Template ID from EmailJS
  //       formDataToSend, // Form data (use e.target to submit form values)
  //       "Q0syV6H_5pAHvwxU9" // Public key from EmailJS
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Admin email sent:", result.text);
  //       },
  //       (error) => {
  //         console.log("Error sending email to admin:", error.text);
  //       }
  //     );

  //   // User email submission
  //   const userEmailTemplate = {
  //     to_email: formData.email, // User's email
  //     from_name: formData.name,
  //     message: "Thank you for your registration!", // Customize as per your needs
  //   };

  //   emailjs
  //     .send(
  //       "service_glye7pm", // Your service ID
  //       "template_user_confirmation", // Template ID for the user (create a separate template for user confirmation)
  //       userEmailTemplate,
  //       "Q0syV6H_5pAHvwxU9" // Public key
  //     )
  //     .then(
  //       (result) => {
  //         console.log("User confirmation email sent:", result.text);
  //         setSuccessMessage(
  //           "Email sent to the Paeonia Team and user successfully!"
  //         );
  //         setTimeout(() => {
  //           setSuccessMessage("");
  //         }, 5000);
  //       },
  //       (error) => {
  //         console.log("Error sending email to user:", error.text);
  //       }
  //     );

  //   setIsSubmitting(false);
  //   console.log("Form submitted:", formData); // Here you would typically send the data to your backend
  // };

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        return !!(
          formData.name &&
          formData.companyName &&
          formData.jobPosition &&
          formData.email
        );
      case 1:
        return formData.privacy;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <CombinedForm
            formData={formData}
            onChange={handleFormChange}
            locale={locale}
          />
        );
      case 1:
        return (
          <ConfirmationStep
            formData={formData}
            onChange={handleFormChange}
            locale={locale}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="event-registration-wrapper">
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <LanguageToggle
          className="absolute top-6 right-6"
          currentLocale={locale}
          onToggle={setLocale}
        />

        <div className="w-full max-w-7xl mx-auto px-12 py-16">
          {" "}
          {/* Wider form */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Atom className="w-16 h-16 text-red-800" flex-none />{" "}
              {/* Bigger Icon */}
              <h1 className="text-4xl font-bold text-gray-900 whitespace-nowrap">
                {t.welcome}
              </h1>
            </div>
            <p className="text-3xl text-gray-600 w-full mx-auto text-left">
              {t.companyIntro}
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-12 lg:p-16 w-full">
            <FormStep currentStep={currentStep} totalSteps={2} />

            <form onSubmit={handleSubmit} className="space-y-10">
              {renderStep()}

              {successMessage && (
                <div className="text-center text-green-700 font-semibold text-2xl w-full">
                  {successMessage}
                </div>
              )}

              <div className="flex justify-between pt-8">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-14 py-5 text-3xl font-medium text-gray-700 hover:text-gray-900"
                  >
                    {t.previous}
                  </button>
                )}

                {currentStep < 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!validateStep()}
                    className="ml-auto px-14 py-5 bg-red-800 text-white text-3xl rounded-lg hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t.next}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !validateStep()}
                    className="ml-auto px-14 py-5 bg-red-800 text-white text-3xl rounded-lg hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <CircleDot className="animate-spin h-6 w-6" />
                        {t.submitting}
                      </>
                    ) : (
                      t.submit
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRegistration;

export { EventRegistration };
