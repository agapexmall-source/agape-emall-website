import React from 'react';
import { companyConfig } from '../../config/company';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconClassName = 'h-5 w-5',
}) => {
  const networks = [
    { name: 'Facebook', url: companyConfig.facebookUrl, icon: Facebook },
    { name: 'Instagram', url: companyConfig.instagramUrl, icon: Instagram },
    { name: 'TikTok', url: companyConfig.tiktokUrl, icon: Twitter },
    { name: 'YouTube', url: companyConfig.youtubeUrl, icon: Youtube },
    { name: 'X', url: companyConfig.xUrl, icon: Twitter },
    { name: 'LinkedIn', url: companyConfig.linkedinUrl, icon: Linkedin },
  ].filter((item) => Boolean(item.url && item.url.trim() !== ''));

  if (networks.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {networks.map((net) => {
        const Icon = net.icon;
        return (
          <a
            key={net.name}
            href={net.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={net.name}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors hover:bg-[#0A3828] hover:text-white"
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
};
