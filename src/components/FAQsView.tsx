import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from "lucide-react";

interface FAQsViewProps {
  onStartChat: (initialPrompt: string) => void;
}

export default function FAQsView({ onStartChat }: FAQsViewProps) {
  const [openId, setOpenId] = useState<string | null>("faq_1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8 space-y-10 animate-fade-in">
      
      {/* Banner introduction */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-1 py-1 px-3 bg-blue-50 text-brand-blue rounded-full border border-blue-100 text-xs font-semibold">
          <HelpCircle size={12} />
          <span>EBS Learning FAQ Support</span>
        </div>
        <h2 className="text-3xl font-display font-extrabold text-brand-dark">
          সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ
        </h2>
        <p className="text-sm md:text-base text-brand-slate max-w-lg mx-auto font-sans leading-relaxed">
          এআই তালিম, ডিজাইন এবং অনলাইন একাডেমি সেটআপ নিয়ে সাধারণ প্রশ্নগুলোর দ্রুত উত্তর নিচে পেয়ে যাবেন। আরও জানতে চ্যাট কাউন্সিলরকে সরাসরি প্রশ্ন করতে পারেন।
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id}
              className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-sm transition duration-250"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 flex items-center justify-between text-left font-sans group hover:bg-stone-50 transition"
              >
                <span className="font-bold text-brand-dark group-hover:text-brand-blue text-base">
                  {faq.question}
                </span>
                <span className="p-1 rounded-md bg-stone-100 text-stone-500 group-hover:bg-blue-50 group-hover:text-brand-blue transition">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              {isOpen && (
                <div className="p-5 pt-0 border-t border-dotted border-stone-100 bg-stone-50/50">
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans pt-3 whitespace-pre-line">
                    {faq.answer}
                  </p>
                  
                  {/* Action Link help inside FAQ */}
                  <div className="mt-4 pt-3 border-t border-stone-100/60 flex justify-end">
                    <button
                      onClick={() => onStartChat(`Tell me more about: ${faq.question}`)}
                      className="text-xs text-brand-blue hover:text-brand-blue-hover font-semibold flex items-center space-x-1"
                    >
                      <span>এই বিষয় নিয়ে আরও জানতে চ্যাট করুন</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Counselor CTA banner */}
      <div className="bg-[#FFFDF7] border-2 border-brand-blue/30 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-display font-bold text-brand-dark text-lg">
            আপনার কাঙ্ক্ষিত প্রশ্নটি খুঁজে পাচ্ছেন না?
          </h4>
          <p className="text-xs text-brand-slate font-sans">
            চিন্তা করবেন না! আমাদের ডিজিটাল কাউন্সিলর কাস্টম প্রশ্নগুলোর উত্তর দিতে প্রস্তুত।
          </p>
        </div>
        <button
          onClick={() => onStartChat("আসসালামু আলাইকুম, আমি কোর্স অফার সম্পর্কে জানতে চাই")}
          className="px-5 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs md:text-sm font-bold rounded-xl flex items-center space-x-2 transition shadow-md whitespace-nowrap cursor-pointer select-none pointer-events-auto"
        >
          <MessageSquare size={15} className="text-brand-orange" />
          <span>কাউন্সেলরের সাথে কথা বলুন</span>
        </button>
      </div>

    </div>
  );
}
