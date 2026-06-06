import { 
  Check, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Clock, 
  Users, 
  HeartHandshake 
} from "lucide-react";
import { Course } from "../types";
import { formatCurrency } from "../utils";
import { COURSES } from "../data";

interface CourseRecommendationCardProps {
  courseId: "AI_TALIM" | "DESIGN_TO_PRINT" | "ONLINE_ACADEMY" | "COURSES";
  onEnrollClick?: (course: Course) => void;
}

export default function CourseRecommendationCard({ 
  courseId, 
  onEnrollClick 
}: CourseRecommendationCardProps) {
  
  // Render general multivariable grid if 'COURSES' is recommended
  if (courseId === "COURSES") {
    return (
      <div className="bg-white border-2 border-brand-blue/30 rounded-2xl p-6 space-y-6 mt-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg text-brand-blue">
            <Sparkles size={20} className="animate-spin [animation-duration:15s]" />
          </div>
          <div>
            <h4 className="font-display font-bold text-brand-dark text-lg">
              EBS Learning কোর্সেস প্যাকেজ ও ফি সমুহ
            </h4>
            <p className="text-xs text-brand-slate font-sans">
              আপনি এক নজরে সব কোর্সের ছাড়কৃত বাজেট ও বিবরণ দেখতে পারেনঃ
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COURSES.map((course) => (
            <div 
              key={course.id}
              className="bg-white border border-stone-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-brand-blue hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 bg-stone-100 rounded-md text-stone-600 font-mono">
                    {course.id === "ONLINE_ACADEMY" ? "ONLINE ACADEMY" : (course.id === "DESIGN_TO_PRINT" ? "AI DESIGN TO PRINT" : "AI TALIM")}
                  </span>
                  <span className="text-xs text-stone-400 line-through">
                    {formatCurrency(course.regularPrice)}
                  </span>
                </div>
                <h5 className="font-display font-bold text-brand-dark text-base mt-2 leading-snug">
                  {course.id === "ONLINE_ACADEMY" ? "Online Academy Setup" : course.name}
                </h5>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                  {course.id === "ONLINE_ACADEMY" ? "অনлайн একাডেমি সেটআপ" : course.localName}
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <span className="text-base font-bold text-brand-blue">{formatCurrency(course.price)}</span>
                  <span className="text-[10px] text-brand-orange font-bold font-sans bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">
                    🔥 {course.id === "ONLINE_ACADEMY" ? "50% OFF" : `${Math.round((1 - course.price / course.regularPrice) * 100)}% OFF`}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                <a
                  href={course.enrollUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1.5 bg-brand-blue hover:bg-brand-blue-hover text-white rounded text-xs font-semibold flex items-center justify-center space-x-1 transition"
                >
                  <GraduationCap size={12} className="text-brand-orange" />
                  <span>ভর্তি লিংক</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-stone-700 gap-3">
          <div className="flex items-center space-x-2">
            <HeartHandshake size={16} className="text-brand-blue shrink-0" />
            <span>যেকোনো দুটি স্পেশাল কোর্স একসাথে এনরোল করলে বিশেষ প্যাকেজ অফার রয়েছে!</span>
          </div>
          <a
            href="https://wa.me/8801773442069?text=আসসালামু%20আলাইকুম!%20আমি%20EBS%20Learning%20এর%20মাল্টিপল%20কোর্স%20কম্বো%20প্যাকেজ%2520সম্পর্কে%20জানতে%20চাই"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 bg-blue-50/80 hover:bg-blue-100 text-brand-blue rounded font-semibold border border-blue-200 flex items-center space-x-1"
          >
            <MessageSquare size={13} />
            <span>কম্বো অফার নিন</span>
          </a>
        </div>
      </div>
    );
  }

  // Find course details
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return null;

  // Custom highlights based on product choices using the new color scheme
  const themeColor = courseId === "AI_TALIM" 
    ? "border-blue-200 bg-blue-50/15" 
    : courseId === "DESIGN_TO_PRINT"
      ? "border-brand-orange/30 bg-brand-orange/5"
      : "border-blue-250 bg-[#FFFDF7]";

  const btnBg = "bg-brand-blue hover:bg-brand-blue-hover shadow-brand-blue/10";

  return (
    <div className={`border rounded-2xl p-5 md:p-6 shadow-sm mt-4 transition-all duration-300 relative overflow-hidden ${themeColor}`} id={`recomm_box_${course.id}`}>
      
      {/* Sparkles design elements */}
      <div className="absolute top-0 right-0 p-3 opacity-25">
        <Sparkles size={28} className="text-brand-orange animate-pulse" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
        
        {/* Course Core Details Column */}
        <div className="flex-1 space-y-4">
          
          {/* Header row tag */}
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-white border border-stone-200 px-2.5 py-0.5 rounded text-stone-600">
              RECOMMENDED COUNSELOR CHOICE ✦ {course.id}
            </span>
            <span className="text-[10px] font-semibold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-md flex items-center gap-0.5">
              ৫০% ছাড় অফার
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl md:text-2xl font-display font-extrabold text-brand-dark leading-tight">
              {course.localName}
            </h4>
            <p className="text-xs md:text-sm text-brand-slate font-light italic">
              {course.tagline}
            </p>
          </div>

          <p className="text-xs md:text-sm text-brand-slate leading-relaxed font-sans font-normal">
            {course.description}
          </p>

          {/* Highlights grid */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-stone-500 font-mono block uppercase mb-2">আপনি যা যা শিখবেনঃ</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-xs text-brand-slate leading-relaxed">
                  <span className="p-0.5 bg-white border border-stone-200 text-brand-blue rounded mr-2 mt-0.5 shrink-0 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Pricing Actions Box */}
        <div className="w-full md:w-64 bg-white border border-stone-250/50 p-5 rounded-xl shrink-0 flex flex-col justify-between shadow-sm space-y-4">
          
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold text-stone-400 font-mono tracking-wider uppercase block">
              কোর্স ফি ও ছাড় অফারঃ
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-extrabold text-brand-dark font-sans tracking-tight">
                {formatCurrency(course.price)}
              </span>
              <span className="text-sm text-stone-400 line-through font-sans">
                {formatCurrency(course.regularPrice)}
              </span>
              <span className="inline-flex items-center text-[10px] font-bold bg-amber-50 text-brand-orange border border-amber-200 px-1.5 py-0.5 rounded shadow-sm font-sans">
                🔥 {course.id === "ONLINE_ACADEMY" ? "50% OFF" : `${Math.round((1 - course.price / course.regularPrice) * 100)}% OFF`}
              </span>
            </div>
            <p className="text-[10px] text-brand-orange font-semibold font-sans bg-amber-50/45 py-1 px-2.5 rounded border border-brand-orange/20">
              ৫০০/- টাকা বুকিং মানি দিয়েও এনরোল সিট বুক করতে পারেন।
            </p>
          </div>

          {/* Highlights summary pills */}
          <div className="space-y-2 text-[11px] text-brand-slate font-sans border-t border-stone-100 pt-3">
            <div className="flex items-center space-x-2.5">
              <Clock size={12} className="text-stone-400" />
              <span>লাইফটাইম অ্যাক্সেস</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Users size={12} className="text-stone-400" />
              <span>১-টু-১ ট্রেইনার সাপোর্ট</span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href={course.enrollUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => onEnrollClick?.(course)}
              className={`w-full py-2.5 text-white rounded-lg text-xs md:text-sm font-bold flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition cursor-pointer select-none pointer-events-auto ${btnBg}`}
              id={`btn_recomm_enroll_${course.id}`}
            >
              <GraduationCap size={15} className="text-brand-orange" />
              <span>সরাসরি ভর্তি হোন</span>
              <ArrowRight size={13} className="text-white/80" />
            </a>

            <a
              href={`https://wa.me/8801773442069?text=আসসালামু%20আলাইকুম!%20আমি%20EBS%20Learning%20এর%20'${course.id}'%20কোর্সটি%2520সম্পর্কে%20জানতে%20চাই।`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 bg-stone-50 select-none hover:bg-stone-100 border border-stone-250/70 text-stone-700 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 active:scale-95 transition "
              id={`btn_recomm_wa_${course.id}`}
            >
              <MessageSquare size={13} className="text-brand-blue" />
              <span>হোয়াটসঅ্যাপ কাউন্সিলর</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
