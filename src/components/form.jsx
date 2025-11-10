// src/components/Form.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Form = () => {
  const [formData, setFormData] = useState({
    role: "",
    appcategory: [],
    name: "",
    companyname: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const SEND_EMAIL = true;

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
  ]; // Add more as needed

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
    formData.companyname &&
    formData.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    const formDataToSend = {
      role: formData.role,
      appcategory: formData.appcategory.join(", "),
      name: formData.name,
      companyname: formData.companyname,
      email: formData.email,
    };

    try {
      //   await emailjs.send(
      //     "service_glye7pm",
      //     "template_79hve7b",
      //     formDataToSend,
      //     "Q0syV6H_5pAHvwxU9"
      //   );
      if (SEND_EMAIL) {
        await emailjs.send(
          "service_glye7pm",
          "template_79hve7b",
          formDataToSend,
          "Q0syV6H_5pAHvwxU9"
        );
      } else {
        console.log("Email sending skipped during testing.");
      }

      setSuccessMessage(
        "Your form has been successfully sent to the PI admin team! Thank you so much"
      );
      setTimeout(() => {
        setFormData({
          role: "",
          appcategory: [],
          name: "",
          companyname: "",
          email: "",
        });
        // setSuccessMessage("");
        // window.location.replace("/form");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccessMessage("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-28 px-4">
      <div className="max-w-3xl mx-auto mt-40 p-12 bg-white shadow-2xl rounded-3xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Customer Interest Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Role */}
          <div>
            <label className="block text-2xl font-medium text-gray-800 mb-8">
              What is your role? <span className="text-red-600">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-2xl font-normal text-gray-800"
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
          <div className="w-full">
            <label className="block text-2xl font-medium text-gray-800 mb-5">
              Application Categories <span className="text-red-600">*</span>
            </label>
            <br />
            <br />
            <div className="mt-0 flex flex-col gap-4 pl-0 ml-0">
              {appCategories.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-4 rounded hover:bg-gray-50 pl-0 ml-0"
                >
                  <input
                    type="checkbox"
                    checked={formData.appcategory.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="h-5 w-5 text-red-600"
                  />
                  <span className="text-2xl text-gray-800">{category}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="my-12"></div>
          </div>
          {/* Name and Email */}
          <div>
            <label className="block text-2xl font-medium text-gray-800 mb-8">
              What is your name, company name and official email address?{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 border border-gray-300 rounded-xl p-4 text-2xl font-normal text-gray-900 placeholder:text-gray-500 tracking-tight"
              required
            />
            <input
              type="text"
              name="companyname"
              placeholder="Your company name"
              value={formData.companyname}
              onChange={handleChange}
              className="w-full mb-4 border border-gray-300 rounded-xl p-4 text-2xl font-normal text-gray-900 placeholder:text-gray-500 tracking-tight"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Company or university email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 border border-gray-300 rounded-xl p-4 text-2xl font-normal text-gray-900 placeholder:text-gray-500 tracking-tight"
              required
              pattern=".+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}"
              title="Kindly use your company or university email address."
            />
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="text-center mt-10">
              <div className="text-green-700 font-semibold text-2xl mb-6">
                {successMessage}
              </div>
              {/* Buttons Wrapper with spacing */}
              <div className="flex flex-col items-center justify-center gap-5">
                {/* Download button */}
                <a
                  href="/pdf/Paeonia Novel Mid-IR Spectrometer.pdf"
                  download
                  className="inline-block px-8 py-4 bg-[#7a1b1f] text-white text-[18px] font-medium rounded-lg hover:bg-[#5e1418]"
                >
                  📄 Download Brochure
                </a>

                {/* LinkedIn follow/visit button */}
                <a
                  href="https://www.linkedin.com/company/paeonia-innovations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-[#0a66c2] text-[#0a66c2] text-[18px] font-medium rounded-lg hover:bg-[#0a66c2] hover:text-white"
                  aria-label="Open PAEONIA Innovations on LinkedIn in a new tab"
                >
                  🔗 Connect on LinkedIn
                </a>
              </div>
            </div>
          )}

          {/* {successMessage && (
            <div className="text-center text-green-700 font-semibold text-2xl">
              {successMessage}
            </div>
          )} */}

          {/* Submit */}
          <div className="pt-6 text-right">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="px-10 py-4 bg-red-800 text-white text-2xl rounded-xl hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
