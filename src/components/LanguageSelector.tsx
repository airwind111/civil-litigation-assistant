'use client';

import React from 'react';
import { AppealFormData } from '@/types/AppealFormData';


type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

const languages = [
  'English',
  'Hindi',
  'Marathi',
  'Gujarati',
  'Kannada',
  'Tamil',
  'Telugu',
  'Bengali',
  'Malayalam',
  'Punjabi',
  'Urdu',
];

export const LanguageSelector: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Select Language for the Appeal Draft</h2>
      <select
        value={formData.language}
        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        className="w-full border border-gray-300 p-2 rounded text-sm"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

