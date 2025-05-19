'use client';
import React from 'react';
import { AppealFormData } from '@/types/AppealFormData';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const AppealTypeSelector: React.FC<Props> = ({ formData, setFormData }) => {
  const handleChange = (value: 'Regular' | 'Miscellaneous') => {
    setFormData({ ...formData, appealType: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Appeal Type</h2>
      <label className="block">
        <input
          type="radio"
          name="appealType"
          value="Regular"
          checked={formData.appealType === 'Regular'}
          onChange={() => handleChange('Regular')}
          className="mr-2"
        />
        Regular Civil Appeal (Order 41 CPC)
      </label>
      <label className="block">
        <input
          type="radio"
          name="appealType"
          value="Miscellaneous"
          checked={formData.appealType === 'Miscellaneous'}
          onChange={() => handleChange('Miscellaneous')}
          className="mr-2"
        />
        Miscellaneous Appeal (Order 43 CPC)
      </label>
    </div>
  );
};
