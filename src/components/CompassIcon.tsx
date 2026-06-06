import React from "react";

interface CompassIconProps {
  size?: number;
  className?: string;
}

export default function CompassIcon({ size = 48, className = "" }: CompassIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sparkle Star at the very top (North) */}
      <path 
        d="M50 2 L52 10 L60 12 L52 14 L50 22 L48 14 L40 12 L48 10 Z" 
        fill="#F59E0B" 
      />

      {/* Main Outer Compass Dial (Deep Green: #0d4f3e) */}
      <circle 
        cx="50" 
        cy="54" 
        r="36" 
        stroke="#0d4f3e" 
        strokeWidth="3.5" 
        fill="transparent" 
      />

      {/* Inner tick marks on circle */}
      <circle 
        cx="50" 
        cy="54" 
        r="31" 
        stroke="#F59E0B" 
        strokeWidth="1" 
        strokeDasharray="2, 6" 
        fill="transparent" 
        opacity="0.8"
      />

      {/* North, South, East, West Triangular Pointers */}
      {/* North */}
      <polygon points="50,21 46,27 54,27" fill="#0d4f3e" />
      {/* South */}
      <polygon points="50,87 46,81 54,81" fill="#0d4f3e" />
      {/* West */}
      <polygon points="17,54 23,50 23,58" fill="#0d4f3e" />
      {/* East */}
      <polygon points="83,54 77,50 77,58" fill="#0d4f3e" />

      {/* Subtle compass sub-ticks (NE, NW, SE, SW pointers) */}
      <line x1="28" y1="32" x2="33" y2="37" stroke="#0d4f3e" strokeWidth="1.5" />
      <line x1="72" y1="32" x2="67" y2="37" stroke="#0d4f3e" strokeWidth="1.5" />
      <line x1="28" y1="76" x2="33" y2="71" stroke="#0d4f3e" strokeWidth="1.5" />
      <line x1="72" y1="76" x2="67" y2="71" stroke="#0d4f3e" strokeWidth="1.5" />

      {/* Circuit traces representing AI on the Western half */}
      <path 
        d="M32 54 H23" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M36 43 L30 37" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="30" cy="37" r="2.5" fill="#0d4f3e" />

      <path 
        d="M36 65 L28 65" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="28" cy="65" r="2.5" fill="#F59E0B" />

      {/* Circuit traces representing AI on the Eastern half */}
      <path 
        d="M68 54 H77" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <path 
        d="M64 43 L70 37" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="70" cy="37" r="2.5" fill="#0d4f3e" />

      <path 
        d="M64 65 L72 65" 
        stroke="#0d4f3e" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      <circle cx="72" cy="65" r="2.5" fill="#F59E0B" />

      {/* Center Pivot of Compass */}
      <circle cx="50" cy="54" r="7" fill="#0d4f3e" stroke="#F59E0B" strokeWidth="1.5" />

      {/* Golden Compass Needle pointing North-East */}
      {/* NE pointed side */}
      <polygon points="50,54 53,50 71,36 57,47" fill="#F59E0B" />
      {/* SW pointed side */}
      <polygon points="50,54 47,58 29,72 43,61" fill="#0d4f3e" />

      {/* Small center pin */}
      <circle cx="50" cy="54" r="2" fill="#FFFFFF" />
    </svg>
  );
}
