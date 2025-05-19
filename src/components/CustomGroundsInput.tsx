'use client';

import React from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const CustomGroundsInput: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Any Specific Grounds You Want to Add?</h2>
      <textarea
        rows={6}
        value={formData.customGrounds}
        onChange={(e) => setFormData({ ...formData, customGrounds: e.target.value })}
        placeholder="Write your custom legal grounds or leave blank to auto-generate..."
        className="w-full border border-gray-300 p-3 rounded bg-white text-sm"
      />
    </div>
  );
};
