'use client';

import React from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const StayApplicationSelector: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Do You Want to Request a Stay/Interim Relief?</h2>

      <div className="space-x-4 text-sm">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="stayRequested"
            checked={formData.stayRequested === true}
            onChange={() => setFormData({ ...formData, stayRequested: true })}
            className="accent-[#0A2342]"
          />
          <span className="ml-2">Yes</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name="stayRequested"
            checked={formData.stayRequested === false}
            onChange={() => setFormData({ ...formData, stayRequested: false })}
            className="accent-[#0A2342]"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  );
};
