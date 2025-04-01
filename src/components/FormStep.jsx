import React from "react";

export const FormStep = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-1/3 h-2 rounded-full ${
              index < currentStep ? "bg-red-800" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormStep;
