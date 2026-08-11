import { ContactFormData } from '../../types';

export function validateContactForm(data: Partial<ContactFormData>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long.');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('A valid email address is required.');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message content must be at least 10 characters long.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
