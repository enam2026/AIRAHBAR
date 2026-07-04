import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Cpu, 
  Award, 
  Brain, 
  Megaphone, 
  Globe, 
  ChevronUp, 
  Copy, 
  Check, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  BookOpen,
  ArrowUpRight,
  MousePointerClick
} from "lucide-react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("aicourseb@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:aicourseb@gmail.com?subject=Inquiry regarding premium domain: aicourse.bd";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 relative overflow-hidden">
      
      {/* Elegant AI-Inspired Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Soft floating blur circles */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-100/30 blur-[120px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] rounded-full bg-orange-100/20 blur-[100px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-amber-50/40 blur-[130px] animate-pulse duration-[12000ms]" />

        {/* Dynamic Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" 
        />
      </div>

      {/* Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with Premium Icon */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 group-hover:text-amber-500 transition-colors">
              AICOURSE<span className="text-amber-500">.BD</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("why-us")} 
              className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors"
            >
              Why Buy?
            </button>
            <button 
              onClick={() => scrollToSection("perfect-for")} 
              className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors"
            >
              Perfect For
            </button>
            <button 
              onClick={() => scrollToSection("highlights")} 
              className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Button */}
          <div>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center justify-center px-5 h-11 text-sm font-semibold rounded-lg bg-slate-900 hover:bg-amber-500 text-white hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-amber-500/10 active:scale-95"
            >
              Make Inquiry
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-24 md:pt-28 md:pb-36 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100/60 text-amber-600 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wider uppercase">Premium Domain Offer</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-slate-900 mb-6 leading-none">
            AICOURSE<span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">.BD</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6">
            Premium Domain Available for Sale
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Own a highly memorable, professional, and brandable domain name tailored for your AI business, online academy, training platform, SaaS, or educational startup in Bangladesh.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 text-base font-semibold rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Contact Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection("why-us")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 text-base font-semibold rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all duration-200 border border-slate-200/80 hover:border-slate-300"
            >
              Learn More
            </button>
          </div>

          {/* Abstract Indicator */}
          <div className="mt-20 flex items-center justify-center space-x-2 text-slate-400 animate-bounce">
            <span className="text-xs font-semibold uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Why This Domain Section */}
      <section id="why-us" className="relative py-24 bg-slate-50/50 border-y border-slate-100 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 mb-4">
              Why Choose This Domain?
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The ideal domain name establishes authority, saves advertising dollars, and instantly communicates your core business model to your target audience.
            </p>
          </div>

          {/* Feature Grid (6 Premium Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Short & Memorable
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Only 8 letters before the extension. High recall rate, extremely easy for your customers to spell and type correctly.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Perfect for AI Education
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly unites "AI" (Artificial Intelligence) and "Course". Instantly identifies you as a leading tech educational brand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Strong Brand Identity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sounds established, trustworthy, and premium. Elevates your business posture above any generic domain competitor.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Easy to Remember
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Using direct, high-value keywords creates immediate cognitive fluency. No strange abbreviations or confusing hyphenated words.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Great for Marketing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Saves ad budget by commanding higher organic CTR in search results, social media shares, and print advertising.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-amber-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 flex items-center justify-center text-amber-500 group-hover:text-white transition-all duration-300 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Ideal for Bangladesh Market
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The ".bd" country code top-level domain (ccTLD) establishes targeted localized trust and localized SEO priority inside Bangladesh.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section id="perfect-for" className="relative py-24 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 mb-4">
              Perfect For These Businesses
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              An incredibly flexible and high-potential brand name that perfectly aligns with several major digital ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Business 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">AI Training Institute</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Launch a premium physical or online academy offering certified artificial intelligence masterclasses.</p>
              </div>
            </div>

            {/* Business 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">Online Academy</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">A modern LMS platform to host courses on Prompt Engineering, LLMs, and creative AI workflows.</p>
              </div>
            </div>

            {/* Business 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">AI Course Platform</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">A specialized marketplace portal curated for Bangladeshi students to find high-quality tech skills.</p>
              </div>
            </div>

            {/* Business 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">EdTech Startup</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">The ultimate address for an educational startup raising capital and requiring a professional, premium identity.</p>
              </div>
            </div>

            {/* Business 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">Corporate Training</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Establish an enterprise-facing portal providing custom corporate training on modern AI integrations.</p>
              </div>
            </div>

            {/* Business 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 hover:bg-amber-500/5 border border-slate-100 hover:border-amber-500/20 transition-all duration-250 flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-1">
                <MousePointerClick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-900 mb-2">Digital Learning Business</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">A central portal offering premium guides, templates, video lectures, and AI toolsets.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Domain Highlights Section */}
      <section id="highlights" className="relative py-24 bg-slate-50 border-t border-slate-100 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-950 mb-4">
              Domain Highlights
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Highlight 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="font-display font-extrabold text-4xl text-amber-500 mb-2">Premium</p>
              <h4 className="font-semibold text-slate-800 text-sm tracking-wider uppercase">Brand Asset</h4>
              <p className="text-xs text-slate-500 mt-2">Highly brandable core keywords</p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="font-display font-extrabold text-4xl text-amber-500 mb-2">.BD</p>
              <h4 className="font-semibold text-slate-800 text-sm tracking-wider uppercase">Official TLD</h4>
              <p className="text-xs text-slate-500 mt-2">Direct Bangladesh trust</p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="font-display font-extrabold text-4xl text-amber-500 mb-2">High</p>
              <h4 className="font-semibold text-slate-800 text-sm tracking-wider uppercase">Business Potential</h4>
              <p className="text-xs text-slate-500 mt-2">Positioned in the fastest growing niche</p>
            </div>

            {/* Highlight 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
              <p className="font-display font-extrabold text-4xl text-amber-500 mb-2">Easy</p>
              <h4 className="font-semibold text-slate-800 text-sm tracking-wider uppercase">To Pronounce</h4>
              <p className="text-xs text-slate-500 mt-2">Clear, phonetic, and fluent</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 bg-white z-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <div className="mb-12">
            <h2 className="font-display font-bold text-4xl text-slate-950 mb-4">
              Interested in Buying?
            </h2>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-lg mx-auto">
              For serious inquiries regarding this premium domain, please contact us directly via email.
            </p>
          </div>

          {/* Email Container Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm relative group overflow-hidden max-w-xl mx-auto mb-10">
            {/* Light glow pattern inside the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6">
                <Mail className="w-7 h-7" />
              </div>

              {/* Display Email */}
              <div className="text-lg sm:text-2xl font-bold font-mono text-slate-900 mb-6 select-all break-all tracking-tight flex items-center justify-center space-x-2">
                <span>aicourseb@gmail.com</span>
              </div>

              {/* Action Buttons inside Card */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                {/* Copy to Clipboard Button */}
                <button 
                  onClick={handleCopyToClipboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 text-sm font-semibold rounded-xl bg-white hover:bg-slate-50 text-slate-700 transition-all duration-200 border border-slate-200 shadow-sm relative group"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      <span className="text-green-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2 text-slate-500 group-hover:text-amber-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                {/* Direct Send Email Button */}
                <button 
                  onClick={handleSendEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-12 text-sm font-semibold rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all duration-200 shadow-md shadow-amber-500/10 hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  Send Email
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Please include your offer and contact information in your message. We will respond promptly to serious inquiries.
          </p>

        </div>
      </section>

      {/* Centered Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white mx-auto mb-6">
            <Sparkles className="w-5 h-5" />
          </div>
          
          <h3 className="font-display font-extrabold text-xl tracking-tight text-white mb-2">
            AICOURSE<span className="text-amber-500">.BD</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Premium Domain Available for Sale
          </p>
          
          <div className="w-full max-w-xs h-[1px] bg-slate-900 mx-auto mb-6" />

          <p className="text-xs text-slate-600">
            &copy; 2026 AICOURSE.BD. All rights reserved. Designed to showcase premium digital real estate.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button 
          onClick={() => scrollToSection("hero")}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white hover:bg-amber-500 text-slate-700 hover:text-white border border-slate-100 shadow-xl hover:shadow-amber-500/20 flex items-center justify-center transition-all duration-300 scale-100 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
