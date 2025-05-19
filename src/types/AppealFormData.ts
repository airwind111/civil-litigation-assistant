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
