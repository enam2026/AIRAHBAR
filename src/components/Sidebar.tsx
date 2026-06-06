import { 
  Home, 
  Bot, 
  Palette, 
  Globe, 
  HelpCircle, 
  Phone, 
  GraduationCap, 
  X,
  Award
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import MentorAvatar from "./MentorAvatar";

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isOpen: boolean;  // For mobile drawer toggle
  onClose: () => void;
}

export default function Sidebar({ currentTab, onSelectTab, isOpen, onClose }: SidebarProps) {
  // Ordered navigation items with proper Lucide icon component associations
  const sidebarItems = [
    { id: "home", label: "রাহবার হোম", info: "প্রধান চ্যাট সহকারী", icon: Home },
    { id: "ai_talim", label: "AI TALIM", info: "ইসলামী শিক্ষা ও এআই", icon: Bot },
    { id: "design_to_print", label: "AI Design to Print", info: "বই ডিজাইন ও প্রকাশনা", icon: Palette },
    { id: "academy_setup", label: "Academy Setup", info: "অনলাইন একাডেমি সেটআপ", icon: Globe },
    { id: "faq", label: "FAQ Desk", info: "জিজ্ঞাসিত প্রশ্ন ও উত্তর", icon: HelpCircle },
    { id: "support", label: "Support Detail", info: "হোয়াটসঅ্যাপ ও মেন্টর গাইড", icon: Phone },
    { id: "enroll_now", label: "Enroll Now", info: "মেগা অফারে ভর্তি হোন", icon: GraduationCap }
  ];

  const handleLinkClick = (id: string) => {
    onSelectTab(id);
    onClose();
  };

  return (
    <>
      {/* Mobile Drawer Overlay Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-stone-950/45 backdrop-blur-xs z-40 lg:hidden cursor-pointer" 
          onClick={onClose}
        />
      )}

      {/* Main compact Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-[245px] bg-[#071715] border-r border-[#122e29] text-stone-100 flex flex-col h-full z-50 transition-transform duration-250 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo and Brand Header Area */}
        <div className="p-4 border-b border-[#122e29] shrink-0 flex items-center justify-between">
          <button 
            onClick={() => handleLinkClick("home")} 
            className="flex items-center text-left group hover:opacity-95 transition-opacity"
          >
            <BrandLogo isDark={true} scale={0.72} />
          </button>

          {/* Mobile screen Close button */}
          <button 
            onClick={onClose}
            className="lg:hidden p-1 rounded hover:bg-white/5 text-stone-300 pointer-events-auto cursor-pointer"
            aria-label="Close layout panel"
          >
            <X size={16} />
          </button>
        </div>

        {/* Links Stack */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-3 space-y-0.5">
          {sidebarItems.map((item) => {
            const isActive = currentTab === item.id;
            const IconComp = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-left transition-all duration-150 group cursor-pointer ${
                  isActive
                    ? "bg-[#006BFF] text-white shadow-md shadow-[#006BFF]/15 border border-[#006BFF]"
                    : "text-stone-350 hover:bg-white/5 hover:text-white"
                }`}
              >
                <IconComp 
                  size={14} 
                  className={`shrink-0 ${isActive ? "text-white" : "text-stone-400 group-hover:text-white transition-colors"}`} 
                />
                <div className="flex-1 min-w-0">
                  <span className={`block text-[12px] font-semibold tracking-tight leading-normal ${isActive ? "text-white" : "text-stone-200"}`}>
                    {item.label}
                  </span>
                  <span className="block text-[8.5px] text-stone-450 font-normal truncate">
                    {item.info}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Smaller cleaner Instructor Card at the bottom */}
        <div className="p-3 border-t border-[#122e29] bg-[#05110f] shrink-0">
          <div className="p-2 bg-white/[0.015] rounded-xl border border-white/[0.03] shadow-sm">
            <div className="flex items-center space-x-2 px-0.5">
              <MentorAvatar size={30} showOnlineStatus={true} />

              <div className="min-w-0 flex-1">
                <h4 className="font-sans font-bold text-stone-100 text-xs leading-none truncate flex items-center gap-1">
                  ইনাম বিন সিদ্দিক
                  <Award size={9} className="text-[#F59E0B] shrink-0" />
                </h4>
                <p className="text-[8.5px] text-stone-400 truncate mt-1 leading-none">
                  Founder, EBS Learning
                </p>
              </div>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}
