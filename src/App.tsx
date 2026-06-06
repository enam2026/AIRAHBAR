import { useState } from "react";
import { Message } from "./types";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ActiveChatView from "./components/ActiveChatView";
import FAQsView from "./components/FAQsView";
import SupportView from "./components/SupportView";
import EnrollNowView from "./components/EnrollNowView";

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

    try {
      // Call standard server-side Gemini counselor API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages.map(m => ({ role: m.role, content: m.content })) }),
      });

      if (!response.ok) {
        throw new Error("Failed to contact the academic counselor.");
      }

      const data = await response.json();
      
      const assistantMsg: Message = {
        id: `ast_${Date.now()}`,
        role: "assistant",
        content: data.reply || "আসসালামু আলাইকুম। আমি আপনার প্রশ্নটি বুঝতে পেরেছি। দয়া করে একটু বিশদভাবে বলবেন?",
        recommendation: data.recommendation || null,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);

    } catch (err: any) {
      console.error(err);
      
      // Fallback offline recommendation mapping if API fails or secret isn't loaded
      let mockRecommend: "AI_TALIM" | "DESIGN_TO_PRINT" | "ONLINE_ACADEMY" | "COURSES" | null = null;
      let lowerPrompt = prompt.toLowerCase();
      
      if (lowerPrompt.includes("ai") || lowerPrompt.includes("talim") || lowerPrompt.includes("তালীম") || lowerPrompt.includes("এআই")) {
        mockRecommend = "AI_TALIM";
      } else if (lowerPrompt.includes("design") || lowerPrompt.includes("print") || lowerPrompt.includes("ডিজাইন")) {
        mockRecommend = "DESIGN_TO_PRINT";
      } else if (lowerPrompt.includes("academy") || lowerPrompt.includes("একাডেমি") || lowerPrompt.includes("school")) {
        mockRecommend = "ONLINE_ACADEMY";
      } else if (lowerPrompt.includes("fee") || lowerPrompt.includes("ফি") || lowerPrompt.includes("টাকা")) {
        mockRecommend = "COURSES";
      }

      const fallbackMsg: Message = {
        id: `fallback_${Date.now()}`,
        role: "assistant",
        content: `আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ। আপনার চ্যাট কুয়েরীটি সফলভাবে রিসিভ করেছি। 

আমার ব্যাকএন্ড এআই ইঞ্জিনটি বর্তমানে লোড হচ্ছে, কিন্তু আপনার তথ্যের জন্য আমি সরাসরি সাজেস্টেড লিংক ও বাটন রেডি করেছি যেন আপনি দ্রুত সেবা পান।

আপনি সরাসরি হোয়াটসঅ্যাপে (+8801773442069) ট্রেইনার **ইনাম বিন সিদ্দিক** ভাইয়ের সাথে কানেক্ট করে সম্পূর্ণ গাইড নিতে পারেন।`,
        recommendation: mockRecommend || "COURSES",
        timestamp: new Date(),
        offline: true
      };

      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
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
