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
    "স্লামালিকুম",
    "সালাম",
    "হেই",
    "হ্যালো",
    "হাই",
    "salam",
    "slm",
    "assalamualaikum",
    "assalamu alaikum",
    "hello",
    "hi",
    "hey",
    "asalam",
    "asalamu alaikum"
  ];
  const phraseMatches = greetingsPhrases.some(p => p.toLowerCase().trim() === cleaned);
  if (phraseMatches) return true;

  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;
  
  const greetingWords = [
    "আসসালামু", "আলাইকুম", "ওয়া", "রহমাতুল্লাহ", "রাহমাতুল্লাহ", "ওয়া", "রাহমাতুল্লাহি", "ওয়াবারাকাতুহু",
    "সালাম", "স্লামালিকুম", "হ্যালো", "হাই", "হেই", "কেমন", "আছেন", "ভাই", "মেন্টর", "আপু", "স্যার",
    "salam", "slm", "walaikum", "assalamualaikum", "assalamu", "alaikum", "hello", "hi", "hey", "heyy", "bro", "brother", "sir", "mentor"
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

  // 2. Specific Course: AI TALIM
  if (hasKeywords(["ai talim", "এআই তালিম", "তালীম", "talim with islamic", "islamic ideology"])) {
    return {
      reply: `এআই তালিম (AI TALIM with Islamic Ideology) কোর্সটি ইসলামিক ভ্যালু বজায় রেখে ChatGPT, Gemini-সহ ২০টির বেশি দরকারী AI টুলের ব্যবহার শিখার জন্য সেরা ক্লাস। এর মাধ্যমে সহজে পোস্টার/লিফলেট ডিজাইন, নাশিদ ও ভয়েস ওভার তৈরি করতে পারবেন।`,
      recommendation: "AI_TALIM"
    };
  }

  // 3. Specific Course: DESIGN_TO_PRINT
  if (hasKeywords(["design to print", "ডিজাইন টু প্রিন্ট", "ক্যালিগ্রাফি", "প্রিন্ট", "print", "typography", "ক্যালিগ্রাফী"])) {
    return {
      reply: `এআই ডিজাইন টু প্রিন্ট (AI Design to Print) কোর্সে আমরা ক্যালিগ্রাফি তৈরি, বই বা কিতাবের প্রচ্ছদ ডিজাইন ও প্রিন্টিং এর সঠিক কালার প্রোফাইল (RGB থেকে CMYK) ওয়ার্কফ্লো এবং এআই ডাবলিং রি-ডিজাইনের নিখুঁত ট্রিক্স শেখাবো ইনশাআল্লাহ।`,
      recommendation: "DESIGN_TO_PRINT"
    };
  }

  // 4. Specific Course: ONLINE_ACADEMY
  if (hasKeywords(["academy", "setup", "একাডেমি", "সেটআপ", "অনলাইন ক্লাস", "lms", "ওয়েবসাইট"])) {
    return {
      reply: `Online Academy Setup কোর্সের মাধ্যমে আপনি নিজস্ব অনলাইন একাডেমী ওয়েবসাইট, ক্লাস অটোমেশন, স্বয়ংক্রিয় স্টুডেন্ট পেমেন্ট গেটওয়ে এবং দেশ-বিদেশ থেকে স্টুডেন্ট এডমিশন পাওয়ার কার্যকরী ট্রিক্স ও মার্কেটিং গাইড পাবেন।`,
      recommendation: "ONLINE_ACADEMY"
    };
  }

  // 5. Course list, pricing, or admissions (Requirement 6: course list, pricing, ভর্তি হতে চাই, ফি কত?)
  if (hasKeywords(["কোর্স", "ফি", "কত", "টাকা", "ভর্তি", "অফার", "ডিসকাউন্ট", "list", "pricing", "fee", "cost", "enroll", "price"])) {
    return {
      reply: `আমাদের চলমান ৩টি প্রি-রেকর্ডেড কোর্সের বিবরণ ও ফি সমুহ নিচে দেওয়া হলো। সুবিধাজনক সময়ে নিজের মোবাইল বা কম্পিউটার দিয়ে শিখতে পারবেন। ভর্তির পর সাথে সাথেই ইনস্ট্যান্ট লাইফটাইম অ্যাক্সেস ও সাপোর্ট গ্রুপ পেয়ে যাচ্ছেন।`,
      recommendation: "COURSES"
    };
  }

  // 6. Contact, trainer, helpline, support, whatsapp
  if (hasKeywords(["যোগাযোগ", "ফোন", "নম্বর", "নাম্বার", "হেল্প", "সাপোর্ট", "হোয়াটসঅ্যাপ", "whatsapp", "call", "phone", "trainer", "ইনাম", "ebs", "কথাবলা"])) {
    return {
      reply: `যেকোনো জিজ্ঞাসা বা সাহায্যের প্রয়োজনে আপনি সরাসরি হোয়াটসঅ্যাপে (+8801773442069) ট্রেইনার ইনাম বিন সিদ্দিক ভাইয়ের সাথে যুক্ত হয়ে ইনস্ট্যান্ট সমাধান এবং সরাসরি গাইডেন্স নিতে পারেন।`,
      recommendation: null
    };
  }

  // 7. General/Fallback reply
  return {
    reply: `জি, আপনার সুন্দর প্রশ্নের জন্য ধন্যবাদ। EBS Learning-এর মাধ্যমে আপনি এআই টুলস আয়ত্ত করা, প্রিন্ট ডিজাইন ও অনলাইন একাডেমি সেটআপ করতে পারবেন। বিস্তারিত জানতে আমাকে প্রশ্ন করতে পারেন!`,
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
