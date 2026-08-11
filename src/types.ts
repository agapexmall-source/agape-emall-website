export interface CompanyConfig {
  brandName: string;
  tagline: string;
  supportingStatement?: string;
  officialWebsite?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  legalCompanyName: string;
  companyRegistrationNumber: string;
  businessAddress: string;
  businessPhone: string;
  whatsappNumber?: string;
  businessEmail: string;
  supportEmail: string;
  privacyEmail: string;
  websiteUrl?: string;
  androidAppUrl?: string;
  iosAppUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  youtubeUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
  privacyLastUpdated: string;
  termsLastUpdated: string;
  jurisdiction: string;
}

export type Category = CategoryItem;

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  featured?: boolean;
  itemCount?: string;
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

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
}
