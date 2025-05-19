'use client';

import React from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const AdvocateInfoInput: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Advocate Information</h2>

      <div className="space-y-2">
        <div>
          <label className="block text-sm mb-1">Advocate Name</label>
          <input
            type="text"
            value={formData.advocateName}
            onChange={(e) => setFormData({ ...formData, advocateName: e.target.value })}
            placeholder="e.g., Adv. Rajesh Mehta"
            className="w-full border border-gray-300 p-2 rounded text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Bar Council ID</label>
          <input
            type="text"
            value={formData.advocateBarId}
            onChange={(e) => setFormData({ ...formData, advocateBarId: e.target.value })}
            placeholder="e.g., MAH1234/2005"
            className="w-full border border-gray-300 p-2 rounded text-sm"
          />
        </div>
      </div>
    </div>
  );
};
