import React from 'react';
import { companyConfig } from '../../config/company';

interface QRCodeGeneratorProps {
  url?: string;
  size?: number;
  className?: string;
  id?: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  url = companyConfig.playStoreUrl,
  size = 140,
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      className={`bg-white p-3 rounded-2xl border-2 border-emerald-500 shadow-lg inline-flex flex-col items-center text-center ${className}`}
    >
      <div className="relative p-2 bg-slate-900 rounded-xl">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="rounded-lg bg-white p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Border Marker Top Left */}
          <rect x="5" y="5" width="26" height="26" rx="4" fill="#0f172a" />
          <rect x="9" y="9" width="18" height="18" rx="2" fill="#ffffff" />
          <rect x="13" y="13" width="10" height="10" rx="1" fill="#047857" />

          {/* Outer Border Marker Top Right */}
          <rect x="69" y="5" width="26" height="26" rx="4" fill="#0f172a" />
          <rect x="73" y="9" width="18" height="18" rx="2" fill="#ffffff" />
          <rect x="77" y="13" width="10" height="10" rx="1" fill="#047857" />

          {/* Outer Border Marker Bottom Left */}
          <rect x="5" y="69" width="26" height="26" rx="4" fill="#0f172a" />
          <rect x="9" y="73" width="18" height="18" rx="2" fill="#ffffff" />
          <rect x="13" y="77" width="10" height="10" rx="1" fill="#047857" />

          {/* Simulated QR Data Pattern */}
          <rect x="36" y="8" width="6" height="6" fill="#0f172a" />
          <rect x="46" y="8" width="6" height="6" fill="#047857" />
          <rect x="56" y="8" width="6" height="6" fill="#0f172a" />

          <rect x="36" y="18" width="6" height="6" fill="#047857" />
          <rect x="46" y="18" width="16" height="6" fill="#0f172a" />

          <rect x="8" y="36" width="6" height="6" fill="#047857" />
          <rect x="18" y="36" width="6" height="6" fill="#0f172a" />
          <rect x="36" y="36" width="10" height="10" rx="1" fill="#0f172a" />
          <rect x="50" y="36" width="14" height="6" fill="#047857" />
          <rect x="68" y="36" width="8" height="6" fill="#0f172a" />

          <rect x="8" y="46" width="16" height="6" fill="#0f172a" />
          <rect x="28" y="46" width="6" height="6" fill="#047857" />
          <rect x="38" y="50" width="12" height="12" rx="2" fill="#0f172a" />
          <rect x="54" y="48" width="10" height="6" fill="#0f172a" />
          <rect x="70" y="46" width="12" height="12" fill="#047857" />

          <rect x="8" y="56" width="6" height="6" fill="#047857" />
          <rect x="18" y="56" width="12" height="6" fill="#0f172a" />
          <rect x="54" y="58" width="12" height="6" fill="#047857" />

          <rect x="36" y="68" width="8" height="8" fill="#047857" />
          <rect x="48" y="68" width="16" height="6" fill="#0f172a" />
          <rect x="68" y="68" width="6" height="14" fill="#0f172a" />

          <rect x="36" y="80" width="16" height="6" fill="#0f172a" />
          <rect x="56" y="80" width="8" height="12" fill="#047857" />
          <rect x="78" y="80" width="12" height="12" fill="#0f172a" />

          {/* Agape Mall Center Icon Badge */}
          <rect x="42" y="42" width="16" height="16" rx="4" fill="#047857" />
          <text
            x="50"
            y="54"
            fontSize="10"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            A
          </text>
        </svg>
      </div>
      <div className="mt-2 text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">
        Scan to Download
      </div>
      <div className="text-[10px] text-slate-500 font-medium">Official Mobile App</div>
    </div>
  );
};
