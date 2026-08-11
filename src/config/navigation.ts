import { NavigationItem } from '../types';

export const mainNavItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Buyers', href: '/buyers' },
  { label: 'Sellers', href: '/sellers' },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems = {
  marketplace: [
    { label: 'Buyers', href: '/buyers' },
    { label: 'Sellers', href: '/sellers' },
    { label: 'Download App', href: '/download' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Support Center', href: '/support' },
    { label: 'FAQ', href: '/faq' },
  ],
  legalAndSafety: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Account Deletion', href: '/account-deletion' },
    { label: 'Marketplace Safety', href: '/safety' },
  ],
};
