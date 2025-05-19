'use client';

import React, { useState } from 'react';
import { AppealFormData } from '@/app/page';

type Props = {
  formData: AppealFormData;
};

export const AppealDocument: React.FC<Props> = ({ formData }) => {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    // Simulate payment
    setTimeout(() => setPaid(true), 1500);
  };

  const draftText = `IN THE COURT OF THE DISTRICT JUDGE

Appeal Type: ${formData.appealType}
Appellant: ${formData.appellantType}
Advocate: ${formData.advocateName} (${formData.advocateBarId})
Language: ${formData.language}
Stay Requested: ${formData.stayRequested ? 'Yes' : 'No'}

Custom Grounds:
${formData.customGrounds || 'Auto-generated grounds will be inserted here based on the judgment PDF.'}
`;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#0A2342]">Generated Appeal Draft (Preview)</h2>

      <div className="border border-gray-300 bg-gray-50 p-4 rounded max-h-80 overflow-auto text-sm whitespace-pre-line">
        {draftText}
      </div>

      {!paid ? (
        <button
          onClick={handlePayment}
          className="mt-4 bg-[#F4C542] text-[#0A2342] px-4 py-2 rounded hover:bg-[#ddb431]"
        >
          Simulate Payment to Unlock Full Download
        </button>
      ) : (
        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(draftText)}`}
          download="AppealDraft.txt"
          className="inline-block mt-4 bg-[#0A2342] text-white px-4 py-2 rounded"
        >
          Download Full Draft
        </a>
      )}
    </div>
  );
};
