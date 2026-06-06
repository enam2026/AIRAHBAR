import React from "react";
import CompassIcon from "./CompassIcon";

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  scale?: number;
  isDark?: boolean;
}

export default function BrandLogo({ className = "", showSubtitle = true, scale = 1, isDark = false }: BrandLogoProps) {
  const greenTextColor = isDark ? "text-emerald-400 font-black" : "text-[#0d4f3e]";
  const orangeTextColor = isDark ? "text-[#F59E0B]" : "text-[#b35c1e]";
  const blueTextColor = isDark ? "text-[#3b82f6]" : "text-[#006BFF]";
  const subtitleColor = isDark ? "text-stone-400 border-t border-stone-800" : "text-[#555a64] border-t border-stone-200/60";

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}>
      {/* Brand Text Content */}
      <div className="flex flex-col justify-center">
        {/* Top Text: AI TALIM in deep green */}
        <span className={`font-display font-extrabold tracking-[0.14em] text-[15px] ${greenTextColor} uppercase leading-none`}>
          AI TALIM
        </span>
        
        {/* Middle Brand Name: rahbar in custom typography colors */}
        <div className="flex items-baseline font-display text-[34px] font-black tracking-tight leading-none mt-1">
          <span className={orangeTextColor}>r</span>
          <span className={blueTextColor}>a</span>
          <span className={orangeTextColor}>h</span>
          <span className={`${orangeTextColor} relative`}>
            b
            <span className={`absolute inset-0 ${blueTextColor} overflow-hidden`} style={{ clipPath: "polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)" }}>b</span>
          </span>
          <span className={`${orangeTextColor} relative`}>
            a
            <span className={`absolute inset-0 ${blueTextColor} overflow-hidden`} style={{ clipPath: "polygon(0% 0%, 65% 0%, 65% 100%, 0% 100%)" }}>a</span>
          </span>
          <span className={orangeTextColor}>r</span>
        </div>
        
        {/* Subtitle: An Initiative by Katib Media */}
        {showSubtitle && (
          <span className={`text-[9px] ${subtitleColor} font-sans font-medium tracking-wide mt-1.5 pt-0.5 whitespace-nowrap`}>
            An Initiative by <strong className={`${isDark ? "text-stone-200" : "text-brand-slate"} font-bold`}>Katib Media</strong>
          </span>
        )}
      </div>

      {/* Compass emblem nicely integrated in the logo block */}
      <CompassIcon size={52} className="shrink-0 transition-transform duration-300 group-hover:rotate-12" />
    </div>
  );
}
