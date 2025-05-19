'use client';

import React, { useState } from 'react';
import { FormStepper } from '@/components/FormStepper';
import { AppealTypeSelector } from '@/components/AppealTypeSelector';
import { AppellantSelector } from '@/components/AppellantSelector';
import { DocumentUploader } from '@/components/DocumentUploader';
import { CustomGroundsInput } from '@/components/CustomGroundsInput';
import { AdvocateInfoInput } from '@/components/AdvocateInfoInput';
import { StayApplicationSelector } from '@/components/StayApplicationSelector';
import { LanguageSelector } from '@/components/LanguageSelector';
import { AppealDocument } from '@/components/AppealDocument';

export type AppealFormData = {
  appealType: 'Regular' | 'Miscellaneous' | null;
  appellantType: 'Plaintiff' | 'Defendant' | null;
  document: File | null;
  customGrounds: string;
  advocateName: string;
  advocateBarId: string;
  stayRequested: boolean;
  language: string;
};

const defaultFormData: AppealFormData = {
  appealType: null,
  appellantType: null,
  document: null,
  customGrounds: '',
  advocateName: '',
  advocateBarId: '',
  stayRequested: false,
  language: 'English',
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<AppealFormData>(defaultFormData);

  return (
    <main className="p-6 max-w-3xl mx-auto text-black">
      <FormStepper step={step} />
      <div className="space-y-6">
        {step === 1 && <AppealTypeSelector formData={formData} setFormData={setFormData} />}
        {step === 2 && <AppellantSelector formData={formData} setFormData={setFormData} />}
        {step === 3 && <DocumentUploader formData={formData} setFormData={setFormData} />}
        {step === 4 && <CustomGroundsInput formData={formData} setFormData={setFormData} />}
        {step === 5 && <AdvocateInfoInput formData={formData} setFormData={setFormData} />}
        {step === 6 && <StayApplicationSelector formData={formData} setFormData={setFormData} />}
        {step === 7 && <LanguageSelector formData={formData} setFormData={setFormData} />}
        {step === 8 && <AppealDocument formData={formData} />}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          disabled={step === 1}
          onClick={() => setStep((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          disabled={step === 8}
          onClick={() => setStep((prev) => prev + 1)}
          className="px-4 py-2 bg-[#0A2342] text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
