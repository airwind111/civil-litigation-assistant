'use client';

import React from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const AppellantSelector: React.FC<Props> = ({ formData, setFormData }) => {
  const handleChange = (value: 'Plaintiff' | 'Defendant') => {
    setFormData({ ...formData, appellantType: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Who is Filing the Appeal?</h2>

      <div className="space-y-2 text-sm">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="appellantType"
            value="Plaintiff"
            checked={formData.appellantType === 'Plaintiff'}
            onChange={() => handleChange('Plaintiff')}
            className="accent-[#0A2342]"
          />
          <span>
            Plaintiff – (The suit was either dismissed or partly decreed)
          </span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="appellantType"
            value="Defendant"
            checked={formData.appellantType === 'Defendant'}
            onChange={() => handleChange('Defendant')}
            className="accent-[#0A2342]"
          />
          <span>
            Defendant – (The decree passed against them fully or partly)
          </span>
        </label>
      </div>
    </div>
  );
};
