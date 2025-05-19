'use client';

import React, { useCallback } from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
  setFormData: React.Dispatch<React.SetStateAction<AppealFormData>>;
};

export const DocumentUploader: React.FC<Props> = ({ formData, setFormData }) => {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData({ ...formData, document: file });
    } else {
      alert('Only PDF files are allowed.');
    }
  }, [formData, setFormData]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Upload Judgment/Order (PDF)</h2>

      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <input
          id="file-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        <span className="text-sm text-gray-700">
          {formData.document ? formData.document.name : 'Drag & drop or click to select a PDF'}
        </span>
      </label>
    </div>
  );
};
