import { TEAM_TRAINER } from "../data";
import { MessageSquare, Globe, ArrowUpRight, Award, CircleCheck, HelpCircle, PhoneCall } from "lucide-react";
import MentorAvatar from "./MentorAvatar";

export default function SupportView() {
  const supportHelplines = [
    { title: "অফিসিয়াল হোয়াটসঅ্যাপ সাপোর্ট", info: "+8801773442069", value: "https://wa.me/8801773442069", action: "বার্তা দিন", desc: "স্যার ইনাম বিন সিদ্দিক সরাসরি গাইড করবেন" },
    { title: "অফিসিয়াল ওয়েবসাইট", info: "www.katibmedia.com", value: "https://www.katibmedia.com", action: "ভিজিট করুন", desc: "আমাদের স্টুডিও ও ক্যালিগ্রাফি ওয়ার্কস ডেকো" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8 space-y-12 animate-fade-in">
      
      {/* Banner Intro */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 py-1 px-3 bg-blue-50 text-brand-blue border border-blue-200 rounded-full text-xs font-semibold">
          <PhoneCall size={12} />
          <span>EBS Learning Support Center</span>
        </div>
        <h2 className="text-3xl font-display font-extrabold text-brand-dark">
          সরাসরি ট্রেইনার ও হেল্পলাইন ডেস্ক
        </h2>
        <p className="text-sm md:text-base text-brand-slate max-w-lg mx-auto font-sans leading-relaxed">
          আপনার যেকোনো курс নিয়ে সন্দেহ বা পেমেন্ট সংক্রান্ত জটিলতা সরাসরি সমাধান করতে এবং এআই ক্যালিগ্রাফিস্ট ইনাম বিন সিদ্দিক স্যারের সাথে কাস্টম গাইড নিতে নিচে যোগাযোগ করতে পারেন।
        </p>
      </div>

      {/* Main Grid: Portrait Card Left, Links Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
        
        {/* Left Side: Portrait Instructor Box */}
        <div className="md:col-span-5 bg-[#111827] border border-stone-800 p-6 md:p-8 rounded-3xl text-stone-100 flex flex-col justify-between shadow-lg text-center relative overflow-hidden">
          
          {/* Subtle design block outline */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full select-none" />

          <div className="space-y-6">
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <MentorAvatar size={110} showOnlineStatus={true} />
            </div>

            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-white flex items-center justify-center gap-1.5">
                {TEAM_TRAINER.name}
                <Award size={18} className="text-[#F59E0B]" />
              </h3>
              <p className="text-xs text-[#F59E0B] font-mono tracking-wider font-semibold uppercase">
                {TEAM_TRAINER.title}
              </p>
            </div>

            <p className="text-xs md:text-sm text-stone-350 leading-relaxed font-sans font-light">
              {TEAM_TRAINER.bio}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#006BFF] font-mono font-semibold block">মেইন স্লোগানঃ</span>
            <p className="text-sm font-semibold italic text-brand-orange">
              "আমি থাকবো বস, AI থাকবে আমার অ্যাসিস্ট্যান্ট"
            </p>
          </div>

        </div>

        {/* Right Side: Links lists and guarantees */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          
          {/* Helplines List */}
          <div className="space-y-4">
            <span className="text-xs font-semibold text-stone-400 font-mono tracking-wider uppercase block">সরাসরিযোগাযোগ সূত্রঃ</span>
            
            {supportHelplines.map((line, idx) => (
              <div 
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-blue-350 transition"
                id={`support_chan_${idx}`}
              >
                <div className="space-y-1.5">
                  <h4 className="font-bold text-brand-dark text-sm md:text-base leading-none">
                    {line.title}
                  </h4>
                  <p className="text-xs text-brand-slate font-sans">
                    {line.desc}
                  </p>
                  <code className="text-xs px-2.5 py-0.5 bg-[#FFFDF7] border border-blue-50 rounded text-brand-dark font-sans block w-fit font-semibold">
                    {line.info}
                  </code>
                </div>
                <a
                  href={line.value}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-100 text-brand-blue rounded-xl text-xs font-bold shrink-0 flex items-center space-x-1 transition select-none cursor-pointer"
                >
                  <span>{line.action}</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>

          {/* Guarantees Box */}
          <div className="bg-[#FFFDF7] border-2 border-blue-50/60 p-6 rounded-2xl space-y-4">
            <h4 className="font-display font-medium text-brand-dark text-sm md:text-base uppercase tracking-wider">
              EBS Learning স্টুডেন্ট সাপোর্ট গ্যারান্টি
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start text-xs text-brand-slate">
                <span className="p-0.5 rounded bg-blue-50 text-brand-blue mr-2 shrink-0 border border-blue-100">
                  <CircleCheck size={14} />
                </span>
                <span><strong>লাইফটাইম গ্রুপ অ্যাক্সেসঃ</strong> একবার এনরোল করার পর আজীবন চ্যাট ও কন্টেন্ট আপডেট অ্যাক্সেস পাবেন।</span>
              </li>
              <li className="flex items-start text-xs text-brand-slate">
                <span className="p-0.5 rounded bg-blue-50 text-brand-blue mr-2 shrink-0 border border-blue-100">
                  <CircleCheck size={14} />
                </span>
                <span><strong>লাইভ সেশনঃ</strong> প্রতি সপ্তাহে এনার স্যার সরাসরি এসে শিক্ষার্থীদের কোড ও ডিজাইন রিভিউ করে দিকনির্দেশনা দেন।</span>
              </li>
              <li className="flex items-start text-xs text-brand-slate">
                <span className="p-0.5 rounded bg-blue-50 text-brand-blue mr-2 shrink-0 border border-blue-100">
                  <CircleCheck size={14} />
                </span>
                <span><strong>অ্যাসাইনমেন্ট হেল্পঃ</strong> সমস্যা হলে চ্যাট গ্রুপে স্ক্রিনশট দিলেই সিনিয়র স্টুডেন্টদের রেডি অ্যাসিস্ট্যান্ট রিসিভ করতে পাবেন।</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
