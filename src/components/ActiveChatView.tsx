import { useState, useRef, useEffect, FormEvent } from "react";
import { 
  Send, 
  Sparkles, 
  Bot, 
  Loader2, 
  Trash2,
  BookOpen,
  Palette,
  Globe,
  HelpCircle,
  Phone,
  Mic,
  MicOff
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Message } from "../types";
import { parseMarkdownToBriefHTML } from "../utils";
import CourseRecommendationCard from "./CourseRecommendationCard";
import MentorAvatar from "./MentorAvatar";
import BrandLogo from "./BrandLogo";

const QUICK_ACTIONS = [
  { id: "ai_talim", title: "AI TALIM", prompt: "আসসালামু আলাইকুম, আমি এআই তালিম (AI TALIM) ক্যাটাগরি নিয়ে বিস্তারিত জানতে চাই।" },
  { id: "design_course", title: "Design", prompt: "আসসালামু আলাইকুম, আমি এআই ডিজাইন টু প্রিন্ট (AI Design to Print) কোর্সটি নিয়ে বিস্তারিত জানতে চাই।" },
  { id: "academy_setup", title: "Academy", prompt: "আসসালামু আলাইকুম, আমি মাদরাসা বা একাডেমি অনলাইন সেটআপ (Online Academy Setup) কোর্সটি নিয়ে বিস্তারিত গাইড পেতে চাই।" },
  { id: "course_fees", title: "Fees", prompt: "আসসালামু আলাইকুম, কোর্স সমূহের ভর্তি ফি এবং ডিসকাউন্ট কত জানতে চাই।" },
  { id: "support", title: "Support", prompt: "আসসালামু আলাইকুম, আমি সরাসরি ট্রেইনার ইনাম বিন সিদ্দিক ভাইয়ের সাথে যোগাযোগ করার হোয়াটসঅ্যাপ লিংক ও সাপোর্ট ডিটেইলস চাই।" }
];

interface ActiveChatViewProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  onClearHistory: () => void;
  isLoading: boolean;
}

export default function ActiveChatView({ 
  messages, 
  onSendMessage, 
  onClearHistory,
  isLoading 
}: ActiveChatViewProps) {
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [voiceTooltip, setVoiceTooltip] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition in Web Speech API
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSpeechSupported(true);
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "bn-BD"; // Set to Bengali for native accessibility

      rec.onstart = () => {
        setIsListening(true);
        setVoiceTooltip("শুনছি... আপনার প্রশ্ন বলুন");
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(prev => prev ? prev + (prev.endsWith(" ") ? "" : " ") + transcript : transcript);
        }
      };

      rec.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        if (event.error === "not-allowed") {
          setVoiceTooltip("মাইক্রোফোন অনুমতি দরকার");
        } else if (event.error === "no-speech") {
          setVoiceTooltip("কথা শোনা যায়নি");
        } else {
          setVoiceTooltip("ভয়েস ইনপুট ত্রুটি");
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleQuickAction = (prompt: string) => {
    onSendMessage(prompt);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading || isListening) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const toggleListening = () => {
    if (!isSpeechSupported || !recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error("Speech start error:", err);
      }
    }
  };

  const renderChatForm = (isCentered: boolean = false) => {
    return (
      <div className={`${isCentered ? "max-w-xl mx-auto w-full" : "max-w-4xl mx-auto"} relative`} id={isCentered ? "form_wrap_center" : "form_wrap_normal"}>
        {/* Animated voice activity or status notification */}
        <AnimatePresence>
          {voiceTooltip && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#111827] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md z-30 flex items-center gap-2 border border-stone-800 font-sans"
            >
              <span className={`inline-block h-2.5 w-2.5 rounded-full bg-red-500 ${isListening ? "animate-pulse" : ""}`}></span>
              <span>{voiceTooltip}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="flex gap-1.5 sm:gap-2 items-stretch relative">
          <div className="relative flex-1 flex items-center">
            <input
              type="text"
              className={`flex-1 bg-stone-50 hover:bg-stone-100 focus:bg-white text-[#111827] placeholder-stone-400 rounded-xl pl-3.5 py-2.5 sm:py-4 text-xs sm:text-sm md:text-base border border-stone-250 focus:border-[#006BFF] focus:outline-none transition-all shadow-sm ${
                isSpeechSupported ? "pr-10" : "pr-3.5"
              }`}
              placeholder="আপনার প্রশ্ন লিখুন..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isLoading}
              id={isCentered ? "chat_input_text_field_center" : "chat_input_text_field_normal"}
            />
            {isSpeechSupported && (
              <button
                type="button"
                onClick={toggleListening}
                disabled={isLoading}
                className={`absolute right-2 sm:right-3.5 p-1 rounded-lg transition-all flex items-center justify-center cursor-pointer ${
                  isListening
                    ? "bg-red-500 text-white shadow-sm ring-4 ring-red-100 [&_svg]:animate-pulse"
                    : "text-stone-500 hover:text-[#006BFF] hover:bg-stone-100"
                }`}
                title={isListening ? "রেকর্ডিং সমাপ্ত করুন" : "ভয়েসের মাধ্যমে ইনপুট দিন (বাংলা)"}
                id={isCentered ? "chat_voice_mic_btn_center" : "chat_voice_mic_btn_normal"}
              >
                {isListening ? (
                  <MicOff size={16} className="text-white animate-pulse" />
                ) : (
                  <Mic size={16} />
                )}
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading || !inputText.trim() || isListening}
            className="px-3 sm:px-5 md:px-7 bg-brand-blue hover:bg-brand-blue-hover disabled:bg-stone-200 disabled:text-stone-450 text-white rounded-xl transition flex items-center justify-center space-x-1 sm:space-x-1.5 cursor-pointer font-sans font-bold text-xs md:text-sm tracking-wide shrink-0 pointer-events-auto select-none"
            id={isCentered ? "chat_submit_btn_center" : "chat_submit_btn_normal"}
          >
            {isLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <>
                <Send size={13} className="text-brand-orange shrink-0 sm:size-[15px]" />
                <span>জিজ্ঞাসা করুন</span>
              </>
            )}
          </button>
        </form>
        
        <p className="text-[9px] sm:text-[10px] text-stone-450 text-center mt-2 font-medium tracking-tight font-sans">
          EBS Learning Counselor Tool ✦ "আমি থাকবো বস, AI থাকবে আমার অ্যাসিস্ট্যান্ট"
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FFFDF7] relative overflow-hidden select-text">
      
      {/* Premium Subtle Islamic Geometric Watermark Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] mix-blend-multiply flex items-center justify-center z-0">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="currentColor" className="text-brand-blue">
          <path d="M50,0 Q60,25 75,25 Q75,40 100,50 Q75,60 75,75 Q60,75 50,100 Q40,75 25,75 Q25,60 0,50 Q25,40 25,25 Q40,25 50,0 Z" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M50,20 L50,80 M20,50 L80,50 M29,29 L71,71 M29,71 L71,29" stroke="currentColor" strokeWidth="0.4" />
          <polygon points="50,15 53,35 70,30 58,45 80,50 58,55 70,70 53,65 50,85 47,65 30,70 42,55 20,50 42,45 30,30 47,35" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Main Container wrapping Scrollable Chat Content & Center Prompt Forms */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-6 space-y-2 sm:space-y-5 z-10 custom-thin-scrollbar">
        
        {messages.length === 0 ? (
          /* CHAT FIRST EXPERIENCE (Welcome State) - Centered and compact, zero-scrolling */
          <div className="max-w-2xl mx-auto pt-1 sm:pt-6 pb-2 space-y-2.5 sm:space-y-6 flex flex-col justify-start sm:justify-center min-h-0 sm:min-h-[75vh]" id="counselor_welcome_container">
            
            {/* Top Center logo and title with Mentor Badge & Brand Logo in Welcome Screen */}
            <div className="hidden sm:flex text-center space-y-2 flex-col items-center">
              <div className="flex items-center -space-x-2">
                <div className="bg-white p-1 rounded-full shadow-md border border-stone-200 z-10 hover:scale-105 transition-transform duration-250">
                  <MentorAvatar size={48} showOnlineStatus={true} />
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100/50 text-[#006BFF] text-[10px] font-bold tracking-wider uppercase">
                  <span>✨ Interactive AI Assistant</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse"></span>
                </div>
                <div className="pt-1">
                  <BrandLogo scale={0.8} showSubtitle={false} className="justify-center" />
                </div>
              </div>
            </div>

            {/* Welcome message card - Extremely clean, compact & mobile first */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="p-2.5 sm:p-5 bg-white/95 border border-stone-200/80 rounded-xl sm:rounded-2xl shadow-xs text-center space-y-0.5 sm:space-y-1.5"
              id="counselor_welcome_bubble"
            >
              <p className="text-xs sm:text-base font-bold text-brand-dark">
                🌿 আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ।
              </p>
              <p className="text-[11px] sm:text-sm text-brand-dark font-medium leading-relaxed">
                আমি <strong className="text-brand-blue">AI RAHBAR</strong>।
              </p>
              <p className="hidden sm:block text-xs text-brand-slate leading-relaxed max-w-lg mx-auto">
                AI TALIM, AI Design to Print এবং Online Academy Setup সম্পর্কে যেকোনো প্রশ্ন করতে পারেন। আমি আপনার জন্য উপযুক্ত কোর্স সাজেস্ট করবো ইনশাআল্লাহ।
              </p>
            </motion.div>

            {/* Quick Action scrollable row - Placement directly below welcome card */}
            <div className="space-y-1 sm:space-y-2">
              <p className="hidden sm:block text-[10px] uppercase font-mono text-stone-400 font-bold tracking-wider text-center">
                কোনো একটি টপিক নির্বাচন করে সরাসরি আলোচনা শুরু করুনঃ
              </p>
              <div 
                className="flex sm:flex-wrap items-center sm:justify-center gap-1 sm:gap-1.5 overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0 px-1 sm:px-0 scrollbar-none snap-x" 
                id="quick_action_buttons"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {QUICK_ACTIONS.map((act) => (
                  <button
                    key={act.id}
                    onClick={() => handleQuickAction(act.prompt)}
                    className="px-2.5 py-1 bg-white/95 hover:bg-blue-50 opacity-95 hover:opacity-100 hover:border-blue-300 border border-stone-200 text-stone-800 hover:text-brand-blue rounded-full text-[10px] sm:text-[10.5px] font-semibold shadow-xs transition duration-150 flex items-center whitespace-nowrap shrink-0 snap-center cursor-pointer"
                    id={`quick_act_${act.id}`}
                  >
                    <span>{act.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CHAT INPUT FIELD - Placed immediately below Quick Actions inside the first screen */}
            <div className="pt-0.5 sm:pt-2">
              {renderChatForm(true)}
            </div>

          </div>
        ) : (
          /* Active Chat Stream */
          <div className="max-w-3xl mx-auto space-y-5 pb-8">
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-3 text-[11px] text-stone-400">
              <div className="flex items-center space-x-2">
                <span className="p-1 bg-blue-50 border border-blue-100 text-brand-blue rounded-full h-2 w-2"></span>
                <span className="font-sans font-medium">কাউন্সেলর চ্যাট সেশন সচল আছে</span>
              </div>
              <button 
                onClick={onClearHistory}
                className="flex items-center space-x-1 hover:text-red-500 transition cursor-pointer font-sans"
              >
                <Trash2 size={12} />
                <span>নতুন আলোচনা শুরু করুন (ক্লিন)</span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} w-full`}
                  id={`msg_wrapper_${msg.id}`}
                >
                  <div className={`flex items-start space-x-2.5 sm:space-x-3 max-w-[90%] sm:max-w-[85%] ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"}`}>
                    
                    {/* Unique Identifier Custom Avatar using MentorAvatar */}
                    {msg.role === "user" ? (
                      <div className="h-7 w-7 rounded-lg bg-[#111827] text-white border border-stone-800 flex items-center justify-center shrink-0 shadow-sm">
                        <span className="text-[11px] font-bold uppercase font-sans">U</span>
                      </div>
                    ) : (
                      <div className="relative shrink-0 select-none">
                        <MentorAvatar size={30} showOnlineStatus={false} />
                        <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-[#006BFF] text-white border border-white flex items-center justify-center scale-75 shadow-sm">
                          <span className="text-[6.5px] font-bold">AI</span>
                        </span>
                      </div>
                    )}

                    {/* Chat Bubble Layout */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className={`p-3.5 sm:p-4 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-[#111827] border border-stone-800 text-white rounded-tr-none shadow-sm"
                          : "bg-white border border-stone-200/90 text-stone-900 rounded-tl-none shadow-sm"
                      }`}>
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-line text-xs sm:text-sm md:text-base font-sans leading-relaxed">{msg.content}</p>
                        ) : (
                          <div 
                            className="space-y-1.5 custom-markup-container font-sans text-xs sm:text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: parseMarkdownToBriefHTML(msg.content) }}
                          />
                        )}

                        <div className="mt-2 flex items-center justify-between text-[8px] sm:text-[9px] opacity-40 border-t border-dashed border-stone-200/40 pt-1.5 font-sans">
                          <span>
                            {msg.role === "user" ? "আপনি" : "রাহবার চ্যাট"}
                          </span>
                          <span>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>

                      {/* Render custom Course recommendation if applicable */}
                      {msg.role === "assistant" && msg.recommendation && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, duration: 0.2 }}
                        >
                          <CourseRecommendationCard courseId={msg.recommendation} />
                        </motion.div>
                      )}
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Dynamic Spinner and Typing details visualizer */}
        {isLoading && (
          <div className="max-w-3xl mx-auto flex items-start space-x-2.5 pb-6">
            <div className="relative shrink-0 select-none">
              <MentorAvatar size={28} showOnlineStatus={false} />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#006BFF] border border-white flex items-center justify-center scale-75">
                <Loader2 size={6} className="text-white animate-spin" />
              </span>
            </div>
            <div className="p-3 bg-white border border-stone-200/70 rounded-2xl rounded-tl-none text-stone-400 text-xs flex items-center space-x-1.5 shadow-sm font-sans">
              <span>রাহবার টাইপ করছে...</span>
              <span className="flex space-x-1">
                <span className="h-1 w-1 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-1 w-1 bg-stone-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-1 w-1 bg-stone-300 rounded-full animate-bounce"></span>
              </span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* CHAT INPUT AREA - Occupies bottom only when messages exist to prevent double rendering */}
      {messages.length > 0 && (
        <div className="bg-gradient-to-t from-[#FFFDF7] via-[#FFFDF7]/95 to-transparent px-4 pb-4 md:pb-6 pt-3 sticky bottom-0 z-20 shrink-0 border-t border-stone-200/50">
          {renderChatForm(false)}
        </div>
      )}

    </div>
  );
}