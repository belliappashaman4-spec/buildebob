export interface LeadFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  servicesInterested: string[];
  budget: string;
  requirements: string;
}

export interface FormSubmissionStatus {
  state: 'idle' | 'submitting' | 'success' | 'error';
  message?: string;
  leadId?: string;
}
