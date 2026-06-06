import { COURSES } from "../data";
import { formatCurrency } from "../utils";
import { GraduationCap, ArrowRight, MessageSquare, PhoneCall, Sparkles, Check } from "lucide-react";

export default function EnrollNowView() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 md:px-8 space-y-12 animate-fade-in">
      
      {/* Banner Intro */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 py-1 px-3 bg-blue-50 text-brand-blue rounded-full border border-blue-100 text-xs font-semibold">
          <Sparkles size={12} className="text-brand-orange animate-spin [animation-duration:12s]" />
          <span>EBS Learning Student Admission</span>
        </div>
        <h2 className="text-3xl font-display font-extrabold text-brand-dark">
          আপনার শিক্ষাযাত্রা শুরু করুন এখনই
        </h2>
        <p className="text-sm md:text-base text-brand-slate max-w-xl mx-auto font-sans leading-relaxed">
          EBS Learning-এর প্রিমিয়াম курс সমূহে বিশেষ ৫০% ছাড় অফারে সীমিত সময়ের জন্য ভর্তি চলছে। আপনার সেরা কোর্সটি নির্বাচন করুন এবং সরাসরি আমাদের মেন্টরের সাথে সিট কনফার্ম করুন।
        </p>
      </div>

      {/* Grid of the 3 Premium Courses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {COURSES.map((course) => {
          const isTalim = course.id === "AI_TALIM";
          const promoBg = isTalim 
            ? "border-2 border-brand-blue shadow-xl shadow-stone-800/5 relative scale-[1.02] md:-translate-y-2 bg-blue-550/5" 
            : "border border-stone-200/90 shadow-sm bg-white";

          return (
            <div 
              key={course.id}
              className={`rounded-3xl p-6 md:p-7 flex flex-col justify-between transition hover:shadow-lg ${promoBg}`}
              id={`enroll_card_${course.id}`}
            >
              {isTalim && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-orange to-amber-500 border border-brand-orange text-white font-display text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
                  ★ MOST POPULAR CHOICE
                </div>
              )}

              <div className="space-y-5">
                
                {/* ID Tag and discount pill */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] px-2.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono font-bold rounded-md uppercase tracking-wider">
                    {course.id === "ONLINE_ACADEMY" ? "ONLINE ACADEMY" : (course.id === "DESIGN_TO_PRINT" ? "AI DESIGN TO PRINT" : "AI TALIM")}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-red-50 text-red-700 border border-red-100 rounded-md">
                    ৫০% ছাড়
                  </span>
                </div>

                {/* Course Name & Subtitle */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-dark leading-tight tracking-tight">
                    {course.id === "ONLINE_ACADEMY" ? "Online Academy Setup" : course.name}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 font-medium">
                    {course.id === "ONLINE_ACADEMY" ? "অনলাইন একাডেমি সেটআপ" : course.localName}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#374151] leading-relaxed font-sans font-normal">
                  {course.id === "ONLINE_ACADEMY" ? "নিজস্ব অনলাইন একাডেমি, কোর্স ওয়েবসাইট ও স্টুডেন্ট ম্যানেজমেন্ট সিস্টেম সেটআপ শিখুন।" : course.description}
                </p>

                {/* Pricing Box */}
                <div className="pt-3 border-t border-stone-100 space-y-1.5">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block font-semibold tracking-wider">ভর্তি ফি অফার বাজেটঃ</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Current Price: Large, bold, highly visible */}
                    <span className="text-2xl md:text-3xl font-extrabold text-[#111827] font-sans tracking-tight">
                      {formatCurrency(course.price)}
                    </span>
                    {/* Original Price: Smaller, gray, strikethrough */}
                    <span className="text-sm text-stone-400 line-through font-sans font-medium">
                      {formatCurrency(course.regularPrice)}
                    </span>
                    {/* Small discount badge: 🔥 50% OFF */}
                    <span className="inline-flex items-center text-[10px] font-bold bg-amber-50 text-[#d97706]/90 border border-[#fef3c7] px-2 py-0.5 rounded-md shadow-sm font-sans">
                      🔥 {course.id === "ONLINE_ACADEMY" ? "50% OFF" : `${Math.round((1 - course.price / course.regularPrice) * 100)}% OFF`}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                {course.id !== "ONLINE_ACADEMY" && course.highlights && course.highlights.length > 0 && (
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[10px] uppercase font-mono text-stone-400 font-bold tracking-wider block">যা যা অন্তর্ভুক্ত রয়েছেঃ</span>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-xs text-brand-slate">
                          <span className="p-0.5 rounded bg-blue-50 text-brand-blue mr-2 shrink-0 border border-blue-100">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* CTAs */}
              <div className="mt-8 pt-5 border-t border-stone-150/40 space-y-2">
                <a
                  href={course.enrollUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 text-white text-xs md:text-sm font-bold rounded-xl flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition pointer-events-auto select-none ${
                    isTalim ? "bg-brand-blue hover:bg-brand-blue-hover" : "bg-[#111827] hover:bg-stone-800"
                  }`}
                  id={`btn_enroll_checkout_${course.id}`}
                >
                  <GraduationCap size={16} className="text-brand-orange" />
                  <span>ভর্তি সম্পন্ন করুন</span>
                  <ArrowRight size={13} />
                </a>

                <a
                  href={`https://wa.me/8801773442069?text=আসসালামু%20আলাইকুম!%20আমি%20EBS%20Learning%20এর%20'${course.id}'%20কোর্সটি%20সম্পর্কে%20কাস্টম%20প্রশ্ন%20করতে%20চাই।`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 bg-stone-50 hover:bg-stone-100 border border-stone-250 select-none text-stone-700 text-xs rounded-xl flex items-center justify-center space-x-1 transition active:scale-95"
                >
                  <MessageSquare size={13} className="text-brand-blue" />
                  <span>মেন্টর সাপোর্ট চ্যাট</span>
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Combo Offer Banner */}
      <div className="bg-gradient-to-r from-[#111827] via-[#1a2536] to-[#006BFF] p-6 md:p-10 rounded-[32px] text-stone-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-stone-850">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="text-[10px] font-bold bg-brand-orange text-brand-dark px-3 py-1 rounded-full uppercase tracking-widest font-mono">
            ★ EBS VIP COMBO VALUE OFFER
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold leading-tight text-white">
            সবগুলো কোর্সে একসাথে বুক করুন এবং ৮০% মেগা ডিসকাউন্ট নিন!
          </h3>
          <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-sans font-light">
            আপনার যদি একাধিক কোর্স যেমনঃ ক্যালিগ্রাফি আর্ট, এআই গ্রাফিক্স এবং নিজেই একটি সফল একাডেমি গড়ার ইচ্ছা থাকে, তবে আমাদের ভিআইপি কো-অরডিনেটর গ্রুপে কম্বো ডিসকাউন্ট প্যাক নিয়ে চ্যাট করতে পারেন।
          </p>
        </div>
        <a
          href="https://wa.me/8801773442069?text=আসসালামু%20আলাইকুম!%20আমি%20EBS%20Learning%20এর%20মেগা%2520ভিআইপি%20কম্বো%20প্যাকেজ%20নিয়ে%20জানতে%20চাই।"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-amber-600 hover:to-brand-orange text-brand-dark font-extrabold text-sm rounded-xl shrink-0 flex items-center space-x-2 shadow-lg hover:shadow-brand-orange/10 cursor-pointer select-none pointer-events-auto transition text-center justify-center"
        >
          <MessageSquare size={16} />
          <span>স্পেশাল ডিসকাউন্ট নিন</span>
        </a>
      </div>

    </div>
  );
}
