import React from "react";
import { translations } from "../locales/translations";

export const ConfirmationStep = ({ formData, onChange, locale }) => {
  const t = translations[locale];

  return (
    <div className="space-y-6 text-left">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-3xl font-medium text-gray-900 mb-4">
          {locale === "en" ? "Review Your Information" : "确认您的信息"}
        </h3>

        <dl className="space-y-4">
          <div>
            <dt className="text-2xl font-medium text-gray-500">{t.name}</dt>
            <dd className="text-2xl text-gray-900">{formData.name}</dd>
          </div>
          <div>
            <dt className="text-2xl font-medium text-gray-500">
              {t.companyName}
            </dt>
            <dd className="text-2xl text-gray-900">{formData.companyName}</dd>
          </div>
          <div>
            <dt className="text-2xl font-medium text-gray-500">{t.email}</dt>
            <dd className="text-2xl text-gray-900">{formData.email}</dd>
          </div>
          <div>
            <dt className="text-2xl font-medium text-gray-500">
              {t.productCategories}
            </dt>
            <dd className="text-2xl text-gray-900">
              {formData.productInterests
                ? formData.productInterests.join(", ")
                : ""}
            </dd>
          </div>
          <div>
            <dt className="text-2xl font-medium text-gray-500">
              {t.productAppCategories}
            </dt>
            <dd className="text-2xl text-gray-900">
              {formData.productAppInterests
                ? formData.productAppInterests.join(", ")
                : ""}
            </dd>
          </div>
        </dl>
      </div>

      <div className="space-y-4 text-left">
        <label className="flex items-start space-x-3 pl-0">
          <input
            type="checkbox"
            checked={formData.privacy}
            onChange={(e) => onChange({ privacy: e.target.checked })}
            className="mt-1 rounded text-blue-500 focus:ring-blue-500"
          />
          <span className="text-2xl text-gray-600">{t.privacy}</span>
        </label>
        <br />
        <label className="flex items-center space-x-3  w-full text-left">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => onChange({ newsletter: e.target.checked })}
            className="mt-1 rounded text-blue-500 focus:ring-blue-500"
          />
          <span className="text-2xl text-left text-gray-600">
            {t.newsletter}
          </span>
        </label>
        <br />
        <br />
        <br />
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-2xl text-red-800">{t.visitBooth}</p>
          <p className="text-2xl text-red-800 mt-1">{t.contactSoon}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
