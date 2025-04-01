import React from "react";
import { Languages } from "lucide-react";

export const LanguageToggle = ({ currentLocale, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(currentLocale === "en" ? "zh" : "en")}
      className="fixed top-[150px] right-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
    >
      <Languages className="w-5 h-5" />
      <span className="font-medium">
        {currentLocale === "en" ? "中文" : "EN"}
      </span>
    </button>
  );
};

export default LanguageToggle;
