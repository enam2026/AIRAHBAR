import { useState } from "react";
import { Message } from "./types";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ActiveChatView from "./components/ActiveChatView";
import FAQsView from "./components/FAQsView";
import SupportView from "./components/SupportView";
import EnrollNowView from "./components/EnrollNowView";

function isGreetingOnly(text: string): boolean {
  const cleaned = text.trim().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()|৳।]/g, "").toLowerCase();
  
  const greetingsPhrases = [
    "আসসালামু আলাইকুম",
    "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ",
    "আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ",
    "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ",
    "আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ",
    "আসসালামুআলাইকুম",
    "সালাম",
    "স্লামালিকুম",
    "হেই",
    "হ্যালো",
    "হাই",
    "salam",
    "assalamualaikum",
    "assalamu alaikum",
    "hello",
    "hi",
    "hey"
  ];
  
  if (greetingsPhrases.includes(cleaned)) {
    return true;
  }

  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;
  
  const greetingWords = [
    "আসসালামু", "আলাইকুম", "ওয়া", "রহমাতুল্লাহ", "রাহমাতুল্লাহ", "ওয়া", "রাহমাতুল্লাহি", "ওয়াবারাকাতুহু",
    "সালাম", "স্লামালিকুম", "হ্যালো", "হাই", "হেই", "salam", "assalamualaikum", "assalamu", "alaikum", "hello", "hi", "hey"
  ];
  
  return words.every(w => greetingWords.includes(w));
}

const generateResponse = (prompt: string): { reply: string; recommendation: "AI_TALIM" | "DESIGN_TO_PRINT" | "ONLINE_ACADEMY" | "COURSES" | null } => {
  const normalized = prompt.trim().toLowerCase().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()|৳।]/g, "");

  // 1. Is it a greeting or salam only?
  if (isGreetingOnly(prompt)) {
    return {
      reply: `ওয়া আলাইকুমুস সালাম ওয়া রহমাতুল্লাহ।  
AI TALIM RAHBAR-এ আপনাকে স্বাগতম।  
আপনি কোন কোর্স সম্পর্কে জানতে চান?`,
      recommendation: null
    };
  }

  // Helper check function
  const hasKeywords = (keywords: string[]) => keywords.some(keyword => normalized.includes(keyword));

  // Determine specific course context
  const isAiTalim = hasKeywords(["ai talim", "এআই তালিম", "তালীম", "talim with islamic", "islamic ideology"]);
  const isDesignToPrint = hasKeywords(["design to print", "ডিজাইন টু প্রিন্ট", "ক্যালিগ্রাফি", "প্রিন্ট", "print", "typography", "ক্যালিগ্রাফী"]);
  const isAcademySetup = hasKeywords(["academy", "setup", "একাডেমি", "সেটআপ", "lms", "ওয়েবসাইট"]);
  const isPriceOrFee = hasKeywords(["ফি", "কত", "দাম", "টাকা", "অফার", "ডিসকাউন্ট", "pricing", "fee", "cost", "price", "টাকা"]);

  // 2. Specific Course: AI TALIM
  if (isAiTalim) {
    if (isPriceOrFee) {
      return {
        reply: `✅ AI TALIM-এর বর্তমান অফার মূল্য ৪৯৯ টাকা।\n\n⚠️ অফার, ক্যাম্পেইন ও ডিসকাউন্টের কারণে মূল্য পরিবর্তন হতে পারে। সর্বশেষ মূল্য ভর্তি পেইজে প্রদর্শিত মূল্য অনুযায়ী গণ্য হবে।`,
        recommendation: "AI_TALIM"
      };
    }
    return {
      reply: `✅ AI TALIM হলো এমন একটি কোর্স যেখানে ChatGPT, Gemini এবং অন্যান্য AI টুল ব্যবহার করে ছবি, ভিডিও, অডিও, নাশিদ, কনটেন্ট, ডিজাইন এবং বাস্তব কাজে AI ব্যবহারের দক্ষতা শেখানো হয়।`,
      recommendation: "AI_TALIM"
    };
  }

  // 3. Specific Course: DESIGN_TO_PRINT
  if (isDesignToPrint) {
    if (isPriceOrFee) {
      return {
        reply: `✅ AI Design to Print কোর্সের বর্তমান অফার মূল্য ৩৫০ টাকা।\n\n⚠️ মূল্য পরিবর্তনশীল।`,
        recommendation: "DESIGN_TO_PRINT"
      };
    }
    return {
      reply: `✅ AI Design to Print-এ Social Media Design, Poster Design, Banner Design, Typography, Logo Design, Photoshop, Illustrator, Print Ready Workflow, RGB, CMYK, Resolution, Upscale ও Professional Design Output শেখানো হয়।`,
      recommendation: "DESIGN_TO_PRINT"
    };
  }

  // 4. Specific Course: ONLINE_ACADEMY
  if (isAcademySetup) {
    if (isPriceOrFee) {
      return {
        reply: `✅ Online Academy Setup Masterclass-এর বর্তমান অফার মূল্য ২৫০০ টাকা। মূল মূল্য: ৫০০০ টাকা।\n\n⚠️ অফার ও ক্যাম্পেইন অনুযায়ী মূল্য পরিবর্তন হতে পারে।`,
        recommendation: "ONLINE_ACADEMY"
      };
    }
    return {
      reply: `✅ Online Academy Setup কোর্সে Online Academy Setup, LMS, Student Management, Course Website, Domain, Hosting, Payment System, Branding এবং Paid Mentorship শেখানো হয়।`,
      recommendation: "ONLINE_ACADEMY"
    };
  }

  // 5. Mobile capability
  if (hasKeywords(["মোবাইল", "mobile", "ফোন"])) {
    return {
      reply: `✅ অবশ্যই। সকল কোর্স মোবাইল দিয়েই করা যাবে। তবে কম্পিউটার থাকলে আরও ভালোভাবে প্র্যাকটিস করতে পারবেন।`,
      recommendation: null
    };
  }

  // 6. Live vs Recorded
  if (hasKeywords(["লাইভ", "রেকর্ডেড", "live", "recorded", "ভিডিও"])) {
    return {
      reply: `✅ সকল কোর্স ১০০% প্রি-রেকর্ডেড। আপনি নিজের সুবিধামতো যেকোনো সময় ক্লাস করতে পারবেন।`,
      recommendation: null
    };
  }

  // 7. Class Timing
  if (hasKeywords(["নির্দিষ্ট সময়", "সময়", "টাইম", "time", "টাইমিং"])) {
    return {
      reply: `✅ না। ক্লাস করার জন্য নির্দিষ্ট কোনো সময় নেই।`,
      recommendation: null
    };
  }

  // 8. Duration
  if (hasKeywords(["কতদিন", "কত দিন", "duration", "days", "দিন"])) {
    return {
      reply: `✅ নিয়মিত সময় দিলে প্রায় ৭ দিনের মধ্যে কোর্স শেষ করা সম্ভব। তবে লাইফটাইম অ্যাক্সেস থাকায় নিজের সুবিধামতো শেখা যাবে।`,
      recommendation: null
    };
  }

  // 9. Support
  if (hasKeywords(["সাপোর্ট", "support", "সাহায্য", "হেল্প", "help"])) {
    return {
      reply: `✅ হ্যাঁ। WhatsApp Support, Mentor Guidance এবং প্রয়োজন হলে Screen Sharing Support দেওয়া হয়।`,
      recommendation: null
    };
  }

  // 10. Lifetime access
  if (hasKeywords(["লাইফটাইম", "lifetime", "অ্যাক্সেস", "এক্সেস"])) {
    return {
      reply: `✅ হ্যাঁ। একবার ভর্তি হলে লাইফটাইম অ্যাক্সেস পাবেন।`,
      recommendation: null
    };
  }

  // 11. Certificate
  if (hasKeywords(["সার্টিফিকেট", "certificate", "সনদ"])) {
    return {
      reply: `✅ হ্যাঁ। কোর্স সম্পন্ন করলে সার্টিফিকেট প্রদান করা হয়।`,
      recommendation: null
    };
  }

  // 12. Abroad / Foreign students
  if (hasKeywords(["বিদেশ", "বাহির", " প্রবাসী", "abroad", "foreign", "country"])) {
    return {
      reply: `✅ হ্যাঁ। দেশ-বিদেশের যেকোনো প্রান্ত থেকে ভর্তি হওয়া যাবে।`,
      recommendation: null
    };
  }

  // 13. Females / Women
  if (hasKeywords(["মেয়ে", "মেয়েরা", "নারী", "মহিলা", "female", "girls", "বোন", "বোনেরা"])) {
    return {
      reply: `✅ অবশ্যই। আমাদের কোর্সে নারী-পুরুষ উভয়েই ভর্তি হতে পারেন।`,
      recommendation: null
    };
  }

  // 14. Course Updates
  if (hasKeywords(["আপডেট", "নতুন লেসন", "update"])) {
    return {
      reply: `✅ হ্যাঁ। নতুন আপডেট ও লেসন পুরাতন শিক্ষার্থীরাও পাবেন।`,
      recommendation: null
    };
  }

  // 15. Mentor / Instructor
  if (hasKeywords(["mentor", "instructor", "trainer", "ইনাম", "সিলভিয়া", "ইন্সট্রাক্টর", "শিক্ষক", "টিচার"])) {
    return {
      reply: `✅ AI TALIM-এর ইন্সট্রাক্টর হলেন ইনাম বিন সিদ্দিক (EBS)। তিনি একজন AI Trainer, Instructor, Entrepreneur এবং Katib Media-এর Founder।`,
      recommendation: null
    };
  }

  // 16. Work guarantee
  if (hasKeywords(["গ্যারান্টি", "চাকরি", "কাজ", "কাজের গ্যারান্টি", "income", "আয়", "ইনকাম"])) {
    return {
      reply: `✅ আমরা কোনো কাজের গ্যারান্টি দেই না। তবে এমন দক্ষতা, টুলস ও বাস্তব গাইডলাইন দেওয়া হয় যার মাধ্যমে আপনি নিজেই কাজ ও ইনকামের সুযোগ তৈরি করতে পারবেন।`,
      recommendation: null
    };
  }

  // 17. Payment Methods
  if (hasKeywords(["পেমেন্ট", "payment", "বিকাশ", "রকেট", "নগদ", "টাকা পাঠাব"])) {
    return {
      reply: `✅ ওয়েবসাইটে বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে সহজেই পেমেন্ট করা যাবে।`,
      recommendation: null
    };
  }

  // 18. Enroll Link / General Admission Trigger
  if (hasKeywords(["কিভাবে ভর্তি", "ভর্তি হব কিভাবে", "ভর্তি পদ্ধতি", "কোথায় ভর্তি"])) {
    return {
      reply: `✅ ভর্তি লিংকে গিয়ে খুব সহজেই ভর্তি হতে পারবেন।\n\nAI TALIM:\nhttps://www.katibmedia.com/courses/ai-talim-with-islamic-ideology/\n\nAI Design to Print:\nhttps://www.katibmedia.com/courses/ai-design-mastery-design-to-print/\n\nOnline Academy Setup:\nhttps://www.katibmedia.com/courses/online-academy-setup-course/`,
      recommendation: "COURSES"
    };
  }

  // 19. Course List or Pricing general queries (Requirement 6: কোর্সগুলো দেখান, কী কী কোর্স আছে?, ভর্তি হতে চাই, ফি কত?, course list, pricing)
  if (hasKeywords(["কোর্স", "ফি", "কত", "টাকা", "ভর্তি", "অফার", "ডিসকাউন্ট", "list", "pricing", "fee", "cost", "enroll", "price"])) {
    return {
      reply: `আমাদের চলমান ৩টি প্রি-রেকর্ডেড কোর্সের বিবরণ ও ফি নিচে দেওয়া হলো। সুবিধাজনক সময়ে নিজের মোবাইল বা কম্পিউটার দিয়ে শিখতে পারবেন। ভর্তির পর সাথে সাথেই ইনস্ট্যান্ট লাইফটাইম অ্যাক্সেস ও সাপোর্ট গ্রুপ পেয়ে যাচ্ছেন।`,
      recommendation: "COURSES"
    };
  }

  // 20. Contact, trainer, helpline, support, whatsapp
  if (hasKeywords(["যোগাযোগ", "ফোন", "নম্বর", "নাম্বার", "হেল্প", "সাপোর্ট", "হোয়াটসঅ্যাপ", "whatsapp", "call", "phone", "হেল্পলাইন", "helpline"])) {
    return {
      reply: `যেকোনো জিজ্ঞাসা বা সাহায্যের প্রয়োজনেঃ\n🟢 WhatsApp: +8801773442069\n🌐 Website: www.katibmedia.com`,
      recommendation: null
    };
  }

  // 21. Default fallback
  return {
    reply: `জি, আপনার সুন্দর প্রশ্নের জন্য ধন্যবাদ। EBS Learning-এর মাধ্যমে আপনি এআই টুলস আয়ত্ত করা, প্রিন্ট ডিজাইন ও অনলাইন একাডেমি সেটআপ করতে পারবেন। বিস্তারিত জানতে আমাকে যেকোনো প্রশ্ন করতে পারেন!`,
    recommendation: null
  };
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Helper: Trigger direct active counselor chat with a starting prompt
  const handleStartChatWithPrompt = async (prompt: string) => {
    setCurrentTab("home");
    setSidebarOpen(false);
    
    // Create User Message
    const userMsg: Message = {
      id: `usr_${Date.now()}`,
      role: "user",
      content: prompt,
      timestamp: new Date()
    };

    // Append to messages list
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Simulate thinking/typing delay for high-quality conversational feel
    setTimeout(() => {
      const responseData = generateResponse(prompt);
      
      const assistantMsg: Message = {
        id: `ast_${Date.now()}`,
        role: "assistant",
        content: responseData.reply,
        recommendation: responseData.recommendation,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 700);
  };

  // Route switcher specifically handling sidebar topics triggers
  const handleSelectTab = (tabId: string) => {
    if (tabId === "ai_talim") {
      handleStartChatWithPrompt("এআই তালিম (AI TALIM) কোর্স কারিকুলাম ও এর ইসলামিক ডিজাইনের ব্যবহার সম্পর্কে বলুন।");
    } else if (tabId === "design_to_print") {
      handleStartChatWithPrompt("আমি এআই ডিজাইন টু প্রিন্ট (AI Design to Print) কোর্সটি সম্পর্কে বিস্তারিত জানতে চাই।");
    } else if (tabId === "academy_setup") {
      handleStartChatWithPrompt("মাদরাসা বা একাডেমি অনলাইন সেটআপ (Online Academy Setup) কোর্স এবং ক্লায়েন্ট পাওয়ার কৌশল বুঝিয়ে দিন।");
    } else {
      setCurrentTab(tabId);
    }
    setSidebarOpen(false);
  };

  const clearChatHistory = () => {
    setMessages([]);
  };

  return (
    <div className="flex bg-brand-ivory min-h-screen text-stone-900 font-sans antialiased" id="main_framework_root">
      
      {/* Compact Side bar Column */}
      <Sidebar 
        currentTab={currentTab} 
        onSelectTab={handleSelectTab} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0 bg-brand-ivory">
        
        {/* Navigation Header */}
        <Header 
          searchQuery=""
          onSearchChange={() => {}}
          onTriggerEnroll={() => setCurrentTab("enroll_now")}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onNavigateToChat={() => setCurrentTab("home")}
        />

        {/* Dynamic Screen View Router */}
        <main className="flex-1 overflow-hidden min-w-0 relative" id="main_view_router_container">
          
          {currentTab === "home" && (
            <ActiveChatView 
              messages={messages}
              onSendMessage={handleStartChatWithPrompt}
              onClearHistory={clearChatHistory}
              isLoading={isLoading}
            />
          )}

          {currentTab === "faq" && (
            <div className="h-full overflow-y-auto">
              <FAQsView onStartChat={handleStartChatWithPrompt} />
            </div>
          )}

          {currentTab === "support" && (
            <div className="h-full overflow-y-auto">
              <SupportView />
            </div>
          )}

          {currentTab === "enroll_now" && (
            <div className="h-full overflow-y-auto bg-stone-50/50">
              <EnrollNowView />
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
