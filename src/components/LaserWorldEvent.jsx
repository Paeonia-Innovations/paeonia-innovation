import React, { useState } from "react";
import emailjs from "emailjs-com";

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
  {
    group: "Spectroscopy & Metrology",
    items: [
      "Dual-comb spectroscopy / ASOPS",
      "High-resolution absorption spectroscopy (gas/liquid/solid)",
      "Terahertz time-domain spectroscopy",
      "Optical frequency metrology / frequency standards",
      "Mid-infrared spectroscopy",
    ],
  },
  {
    group: "Precision Measurement & Sensing",
    items: [
      "Absolute distance measurement / laser ranging",
      "Thin film thickness / refractive index measurement",
      "Trace gas detection",
      "Pump-probe / ultrafast dynamics",
    ],
  },
  {
    group: "Nonlinear Optics & Laser Technology",
    items: [
      "Amplifier seed source",
      "Nonlinear microscopy imaging",
      "OPO pumping / wavelength extension",
      "XUV generation",
    ],
  },
];

export const LaserWorldEvent = () => {
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
      form_source:
        "Laser World of Photonics China 2026 — Customer Interest Form",
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
    <div className="min-h-screen bg-gray-50 py-28 px-4">
      <div className="max-w-3xl mx-auto mt-40 p-12 bg-white shadow-2xl rounded-3xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Customer Interest Form For Laser World of Photonics China 2026
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
              {appCategories.map((group) => (
                <div key={group.group}>
                  {/* Group heading */}
                  <p className="text-2xl font-medium text-gray-800 mt-4 mb-2 border-b border-gray-200 pb-1">
                    {group.group}
                  </p>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded hover:bg-gray-50 pl-0 ml-0 mb-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData.appcategory.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                        className="h-5 w-5 text-red-600"
                      />
                      <span className="text-2xl text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Others — standalone at bottom */}
              <div>
                <div className="flex items-center gap-4 rounded hover:bg-gray-50 pl-0 ml-0">
                  <input
                    type="checkbox"
                    checked={formData.appcategory.includes("Others")}
                    onChange={() => handleCheckboxChange("Others")}
                    className="h-5 w-5 text-red-600"
                  />
                  <span className="text-2xl text-gray-800">Others</span>
                </div>
                {formData.appcategory.includes("Others") && (
                  <input
                    type="text"
                    name="others"
                    placeholder="Please specify..."
                    value={formData.others}
                    onChange={handleChange}
                    className="mt-2 ml-9 w-full border border-gray-300 rounded-xl p-3 text-xl font-normal text-gray-900 placeholder:text-gray-500"
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="my-12"></div>
          </div>

          {/* Name, Company, Email */}
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
              name="company"
              placeholder="Your company name"
              value={formData.company}
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

          {/* Success Message — LinkedIn only */}
          {successMessage && (
            <div className="text-center mt-10">
              <div className="text-green-700 font-semibold text-2xl mb-6">
                {successMessage}
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <a
                  href="https://www.linkedin.com/company/paeonia-innovations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-[#0a66c2] text-[#0a66c2] text-[18px] font-medium rounded-lg hover:bg-[#0a66c2] hover:text-white"
                >
                  🔗 Connect on LinkedIn
                </a>
              </div>
            </div>
          )}

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

export default LaserWorldEvent;
