import React from "react";

interface MentorAvatarProps {
  size?: number;
  className?: string;
  showOnlineStatus?: boolean;
}

export default function MentorAvatar({ size = 48, className = "", showOnlineStatus = true }: MentorAvatarProps) {
  return (
    <div className={`relative shrink-0 select-none ${className}`} style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-full shadow-inner bg-gradient-to-b from-blue-50 to-amber-50/50 border-2 border-[#F59E0B]/80"
      >
        {/* Defs for gradients */}
        <defs>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5c3821" />
            <stop offset="50%" stopColor="#452715" />
            <stop offset="100%" stopColor="#2e1a0d" />
          </linearGradient>
          <linearGradient id="thobeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Soft circle background glow */}
        <circle cx="50" cy="50" r="48" fill="#FFFDF7" opacity="0.4" />

        {/* Background circuit motif for AI vibes */}
        <path d="M15 50 C 25 40, 25 30, 35 30" stroke="#006BFF" strokeWidth="0.5" strokeDasharray="1, 3" opacity="0.3" />
        <path d="M85 50 C 75 40, 75 30, 65 30" stroke="#0d4f3e" strokeWidth="0.5" strokeDasharray="1, 3" opacity="0.3" />

        {/* Thobe / Body representation (shaping from shoulders up) */}
        <path 
          d="M15 95 C 15 80, 28 68, 42 66 L 50 71 L 58 66 C 72 68, 85 80, 85 95 Z" 
          fill="url(#thobeGrad)" 
        />
        
        {/* High-collar thobe button/zipper line */}
        <line x1="50" y1="67" x2="50" y2="82" stroke="#475569" strokeWidth="2.5" />
        <circle cx="50" cy="74" r="1.5" fill="#F59E0B" />

        {/* Neck */}
        <path d="M42 58 C 42 66, 58 66, 58 58 Z" fill="#fcd34d" opacity="0.9" />
        <path d="M42 58 Q 50 63 58 58" stroke="#f59e0b" strokeWidth="1" />

        {/* Ears */}
        <circle cx="34" cy="46" r="4.5" fill="#fcd34d" />
        <circle cx="66" cy="46" r="4.5" fill="#fcd34d" />

        {/* Face structure */}
        <path 
          d="M34 40 C 34 32, 38 28, 50 28 C 62 28, 66 32, 66 40 C 66 54, 62 60, 50 60 C 38 60, 34 54, 34 40 Z" 
          fill="#fde047" 
        />

        {/* Hair block behind cap */}
        <path d="M34 33 Q 50 29 66 33 L 66 35 Q 50 32 34 35 Z" fill="#1e293b" />

        {/* Brown Cap (Kufi / Islamic Skullcap) */}
        <path 
          d="M34 33 C 34 23, 40 18, 50 18 C 60 18, 66 23, 66 33 Z" 
          fill="url(#capGrad)" 
        />
        {/* Horizontal ribbing line on cap */}
        <path d="M34 29 Q 50 25 66 29" stroke="#78350f" strokeWidth="1.5" opacity="0.6" />
        <path d="M36 24 Q 50 21 64 24" stroke="#78350f" strokeWidth="1" opacity="0.4" />

        {/* Neatly trimmed black beard & moustache */}
        <path 
          d="M34 43 C 33 48, 35 56, 42 59 C 45 61, 50 62, 50 62 C 50 62, 55 61, 58 59 C 65 56, 67 48, 66 43 C 65 49, 63 52, 58 54 C 54 56, 50 56, 50 56 C 50 56, 46 56, 42 54 C 37 52, 35 49, 34 43 Z" 
          fill="#0f172a" 
        />
        {/* Mustache */}
        <path d="M42 48 Q 50 49 58 48 Q 50 53 42 48 Z" fill="#0f172a" />

        {/* Wireframe Spectacles / Glasses */}
        {/* Left lens */}
        <circle cx="43" cy="41" r="5" stroke="#0f172a" strokeWidth="1.5" fill="transparent" />
        {/* Right lens */}
        <circle cx="57" cy="41" r="5" stroke="#0f172a" strokeWidth="1.5" fill="transparent" />
        {/* Glasses bridge */}
        <line x1="48" y1="41" x2="52" y2="41" stroke="#0f172a" strokeWidth="1.5" />
        {/* Side temples */}
        <line x1="34" y1="41" x2="38" y2="41" stroke="#0f172a" strokeWidth="1" />
        <line x1="62" y1="41" x2="66" y2="41" stroke="#0f172a" strokeWidth="1" />

        {/* Warm Smiling Eyes */}
        <path d="M40 40 Q 43 38 46 40" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M54 40 Q 57 38 60 40" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Cheerful smiling mouth */}
        <path d="M45 50 Q 50 54 55 50" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Glowing smile teeth representation */}
        <path d="M46 50.5 Q 50 53 54 50.5 Z" fill="#FFFFFF" />

        {/* Hands & MacBook (Open laptop) at the very bottom foreground */}
        <path 
          d="M33 76 L 67 76 L 63 94 L 37 94 Z" 
          fill="#cbd5e1" 
          stroke="#94a3b8" 
          strokeWidth="1.5" 
        />
        {/* Silver keyboard plate lines */}
        <polygon points="38,78 62,78 61,84 39,84" fill="#e2e8f0" />
        <rect x="46" y="81" width="8" height="2" fill="#94a3b8" rx="0.5" />
        
        {/* Little illuminated Apple Logo logo replica marker inside laptop face */}
        <path d="M50 87 Q 48 87 49 89 Q 47 91 50 91 Q 53 91 51 89 Q 52 87 50 87 Z" fill="#FFFFFF" opacity="0.9" />

        {/* Hand thumbs holding the laptop */}
        <circle cx="34" cy="79" r="2.5" fill="#fcd34d" />
        <circle cx="66" cy="79" r="2.5" fill="#fcd34d" />
      </svg>

      {/* Online/Offline Status Glow Badge */}
      {showOnlineStatus && (
        <span 
          className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-[#F59E0B] ring-2 ring-white animate-pulse" 
          title="Online Instructor Mentor Mode"
        />
      )}
    </div>
  );
}
