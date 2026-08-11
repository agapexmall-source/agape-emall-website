export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'buyers' | 'sellers' | 'account' | 'safety';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface CompanyConfig {
  brandName: string;
  tagline: string;
  officialWebsite: string;
  playStoreUrl: string;
  appStoreUrl: string;
  legalCompanyName: string;
  companyRegistrationNumber: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  supportEmail: string;
  privacyEmail: string;
  jurisdiction: string;
  privacyLastUpdated: string;
  termsLastUpdated: string;
}
