import { Menu, MessageCircle, GraduationCap } from "lucide-react";
import BrandLogo from "./BrandLogo";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onTriggerEnroll: () => void;
  onToggleSidebar: () => void;
  onNavigateToChat: () => void;
}

export default function Header({ 
  onTriggerEnroll, 
  onToggleSidebar,
  onNavigateToChat
}: HeaderProps) {
  return (
    <header className="h-12 sm:h-16 border-b border-stone-200/70 bg-white/85 backdrop-blur-md sticky top-0 z-30 px-3 sm:px-6 flex items-center justify-between shrink-0">
      
      {/* Left Area: Mobile Hamburger Button & Website Logo */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={onToggleSidebar}
          className="p-1 rounded-lg text-stone-600 hover:bg-stone-100 lg:hidden cursor-pointer"
          aria-label="Open sidebar panel"
          id="btn_hamburger"
        >
          <Menu size={18} />
        </button>

        {/* Website Logo placed in the top-left header area */}
        <div className="hover:scale-[1.01] transition-transform duration-250 cursor-pointer">
          <BrandLogo scale={0.72} showSubtitle={false} />
        </div>
      </div>

      {/* Right Area: Minimal Navigation Buttons */}
      <div className="flex items-center space-x-1.5 sm:space-x-2">
        <button
          onClick={onNavigateToChat}
          className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-brand-blue text-xs font-bold hover:bg-blue-100/60 transition cursor-pointer"
          id="btn_header_chat"
        >
          <MessageCircle size={13} className="text-brand-blue shrink-0" />
          <span>রাহবার চ্যাট</span>
        </button>

        <button
          onClick={onTriggerEnroll}
          className="flex items-center space-x-1 px-2.5 py-1 sm:py-2 sm:px-4.5 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white text-[11px] sm:text-xs md:text-sm font-semibold shadow-sm transition cursor-pointer pointer-events-auto"
          id="btn_header_enroll"
        >
          <GraduationCap size={13} className="text-brand-orange shrink-0 sm:size-[15px]" />
          <span>ভর্তি হোন</span>
        </button>
      </div>

    </header>
  );
}
