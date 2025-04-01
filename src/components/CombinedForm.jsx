import React from "react";
import { translations } from "../locales/translations";

export const CombinedForm = ({ formData, onChange, locale }) => {
  const t = translations[locale];

  const companySizes = ["1-50", "51-200", "201-500", "501-1000", "1000+"];
  const region = t.regionList;
  const productCategories = t.productCategoriesList;
  const productAppCategories = t.productAppCategoriesList;
  const timelines = t.timelinesList;

  const handleProductInterestChange = (category) => {
    const currentInterests = formData.productInterests || [];
    const newInterests = currentInterests.includes(category)
      ? currentInterests.filter((c) => c !== category)
      : [...currentInterests, category];
    onChange({ productInterests: newInterests });
  };

  const handleProductAppInterestChange = (appcategory) => {
    const currentAppInterests = formData.productAppInterests || [];
    const newAppInterests = currentAppInterests.includes(appcategory)
      ? currentAppInterests.filter((c) => c !== appcategory)
      : [...currentAppInterests, appcategory];
    onChange({ productAppInterests: newAppInterests });
  };

  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t.basicInfo}
        </h2>
        <br />
        {/* Name Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name || ""}
            onChange={(e) => onChange({ name: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* Company Name Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.companyName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.companyName || ""}
            onChange={(e) => onChange({ companyName: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* Job Position Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.jobPosition} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.jobPosition || ""}
            onChange={(e) => onChange({ jobPosition: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* Email Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* WeChat Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.wechat}
          </label>
          <input
            type="text"
            value={formData.wechat || ""}
            onChange={(e) => onChange({ wechat: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* Phone Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.phone}
          </label>
          <input
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => onChange({ phone: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <br />
        {/* Company Size Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.companySize}
          </label>
          <select
            value={formData.companySize || ""}
            onChange={(e) => onChange({ companySize: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">{t.required}</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <br />
        {/* Region Field */}
        <div>
          <label className="block text-2xl font-medium text-gray-700">
            {t.region}
          </label>
          <select
            value={formData.region || ""}
            onChange={(e) => onChange({ region: e.target.value })}
            className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">{t.required}</option>
            {region.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      <br />
      <div className="border-t border-gray-200 pt-10">
        <br />
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t.productInterest}
        </h2>

        <br />
        <div className="space-y-8">
          {/* Product Categories */}
          <div>
            <label className="block text-2xl font-medium text-gray-700 mb-4">
              {t.productCategories} <span className="text-red-500">*</span>
            </label>
            <br />
            <br />
            <div className="space-y-3 pl-0">
              {productCategories.map((category, index) => (
                <div
                  key={category}
                  className="flex items-center space-x-3 pl-0 p-2 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={
                      formData.productInterests?.includes(category) || false
                    }
                    onChange={() => handleProductInterestChange(category)}
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-2xl">{category}</span>
                </div>
              ))}
            </div>
          </div>

          <br />
          {/* Requirements */}
          <div>
            <label className="block text-3xl font-medium text-gray-700">
              {t.requirements}
            </label>
            <textarea
              type="text"
              rows="4"
              placeholder={t.requirementsText}
              value={formData.requirements || ""}
              onChange={(e) => onChange({ requirements: e.target.value })}
              className="mt-2 block w-full px-4 py-3 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <br />
          {/* Product App Categories */}
          <div>
            <label className="block text-2xl font-medium text-gray-700 mb-4">
              {t.productAppCategories} <span className="text-red-500">*</span>
            </label>
            <br />
            <br />
            <div className="space-y-3 pl-0">
              {productAppCategories.map((appcategory, index) => (
                <div
                  key={appcategory}
                  className="flex items-center space-x-3 pl-0 p-2 cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={
                      formData.productAppInterests?.includes(appcategory) ||
                      false
                    }
                    onChange={() => handleProductAppInterestChange(appcategory)}
                    className="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-2xl">{appcategory}</span>
                </div>
              ))}
            </div>
          </div>

          <br />

          {/* Other Info */}
          <div>
            <label className="block text-2xl font-medium text-gray-700">
              {t.others}
            </label>
            <textarea
              type="text"
              rows="4"
              placeholder={t.othersText}
              value={formData.others || ""}
              onChange={(e) => onChange({ others: e.target.value })}
              className="mt-2 block w-full px-4 py-3 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <br />
          {/* Timeline */}
          <div>
            <label className="block text-2xl font-medium text-gray-700">
              {t.timeline}
            </label>
            <select
              value={formData.timelines || ""}
              onChange={(e) => onChange({ timelines: e.target.value })}
              className="mt-2 block w-full px-4 py-2 text-2xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">{t.required}</option>
              {timelines.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
