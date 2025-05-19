'use client';

import React from 'react';


type Props = {
  step: number;
};

const steps = [
  'Appeal Type',
  'Appellant',
  'Judgment Upload',
  'Custom Grounds',
  'Advocate Info',
  'Stay Relief',
  'Language',
  'Preview & Download',
];

export const FormStepper: React.FC<Props> = ({ step }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {steps.map((label, index) => {
        const current = index + 1;
        const isActive = step === current;
        const isCompleted = step > current;

        return (
          <div key={label} className="flex-1 flex flex-col items-center text-xs text-center relative">
            <div
              className={`rounded-full w-6 h-6 flex items-center justify-center text-white font-bold ${
                isCompleted ? 'bg-green-600' : isActive ? 'bg-[#F4C542] text-[#0A2342]' : 'bg-gray-300'
              }`}
            >
              {current}
            </div>
            <span className={`mt-1 ${isActive ? 'font-semibold text-[#0A2342]' : 'text-gray-500'}`}>
              {label}
            </span>
            {index !== steps.length - 1 && (
              <div className="absolute top-3 left-full w-full h-0.5 bg-gray-300 z-0 ml-2 mr-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};
