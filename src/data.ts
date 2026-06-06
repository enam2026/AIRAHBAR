import { Course, FAQ, Trainer } from "./types";

export const COURSES: Course[] = [
  {
    id: "AI_TALIM",
    name: "AI TALIM with Islamic Ideology",
    localName: "এআই তালিম (AI TALIM with Islamic Ideology)",
    tagline: "আমি থাকবো বস, AI থাকবে আমার অ্যাসিস্ট্যান্ট।",
    regularPrice: 3000,
    price: 499,
    highlights: [
      "ChatGPT ও Gemini ব্যবহার করে লেখা, আইডিয়া ও কনটেন্ট তৈরি",
      "পোস্টার, থাম্বনেইল, লোগো ডিজাইন এবং ফেসবুক/ইউটিউব কনটেন্ট মেকিং",
      "নিজে কণ্ঠে এআই নাশিদ ও ভয়েস জেনারেশন তৈরির নিখুঁত পদ্ধতি",
      "ইসলামিক ভ্যালু বজায় রেখে ২০+ প্রয়োজনীয় AI টুলের বাস্তব ব্যবহার"
    ],
    description: "আইএডিআর-ভিত্তিক এআই তালিম ও ইসলামিক সল্যুশনের সমন্বয়ে গঠিত অনন্য মাস্টারক্লাস। AI-কে নিজের সহকারী হিসেবে ব্যবহার করে দৈনন্দিন কাজ, কনটেন্ট তৈরি, সোস্যাল মিডিয়া ডিজাইন, ভিডিও ও বিভিন্ন স্কিল দ্রুত আয়ত্ত করুন।",
    color: "emerald",
    icon: "BookOpen",
    enrollUrl: "https://www.katibmedia.com/courses/ai-talim-with-islamic-ideology/"
  },
  {
    id: "DESIGN_TO_PRINT",
    name: "AI Design Mastery: Design to Print",
    localName: "এআই ডিজাইন টু প্রিন্ট (AI Design to Print)",
    tagline: "এআই দিয়ে নিখুঁত ডিজাইন থেকে প্রিন্ট রেডি আউটপুট তৈরি",
    regularPrice: 2500,
    price: 350,
    highlights: [
      "সোশ্যাল মিডিয়া ডিজাইন, পোস্টার, লিফলেট এবং ফটোকার্ড ডিজাইন",
      "বাংলা ক্যালিগ্রাফি, টাইপোগ্রাফি এবং কিতাবের চমৎকার প্রচ্ছদ তৈরি",
      "RGB থেকে CMYK প্রিন্ট রেডি ওয়ার্কফ্লো এবং সাইজ-রেজোলিউশন মেজারমেন্ট",
      "Adobe Photoshop ফিনিশিং, Illustrator আপস্কেল ও ক্লিনআপ প্রসেস"
    ],
    description: "আর্টিফিশিয়াল ইন্টেলিজেন্স ব্যবহার করে ডিজাইন তৈরি থেকে শুরু করে প্রিন্টিং প্রেস এবং প্যাকেজিং জগেতর নিখুঁত কালার প্রোفাইল ও প্রিন্ট রেডি ফাইল প্রস্তুত করার বাস্তব Workflow মাস্টারক্লাস।",
    color: "teal",
    icon: "Palette",
    enrollUrl: "https://www.katibmedia.com/courses/ai-design-mastery-design-to-print/"
  },
  {
    id: "ONLINE_ACADEMY",
    name: "Online Academy Setup",
    localName: "Online Academy Setup",
    tagline: "অনлайн একাডেমি সেটআপ",
    regularPrice: 5000,
    price: 2500,
    highlights: [
      "অনলাইন একাডেমি সেটআপ এবং কোর্স ম্যানেজমেন্ট সিস্টেম (LMS)",
      "স্বয়ংক্রিয় স্টুডেন্ট এনরোলমেন্ট, অ্যাক্সেস ও পেমেন্ট গেটওয়ে সিস্টেম",
      "ডোমেইন, হোস্টিং, ওয়েবসাইট ডিজাইন ও অনলাইন ক্লাস ওয়ার্কফ্লো বেসিকস",
      "অ্যাকাডেমি ব্র্যান্ডিং, মিডিয়া সেটআপ এবং দেশ-বিদেশ থেকে স্টুডেন্ট রিক্রুটমেন্ট"
    ],
    description: "নিজস্ব অনলাইন একাডেমি, কোর্স ওয়েবসাইট ও স্টুডেন্ট ম্যানেজমেন্ট সিস্টেম সেটআপ শিখুন।",
    color: "gold",
    icon: "Globe",
    enrollUrl: "https://www.katibmedia.com/courses/online-academy-setup-course/"
  }
];

export const TEAM_TRAINER: Trainer = {
  name: "Enam Bin Siddik (EBS)",
  title: "AI Trainer, Instructor, Entrepreneur",
  photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
  bio: "Katib Media-এর ফাউন্ডার এবং EBS Learning-এর লিড ইনস্ট্রাক্টর। তার ভিশন হলো ইসলামিক স্টুডেন্ট ও মাদরাসা ছাত্রদের জন্য আধুনিক AI শিক্ষার সুযোগ তৈরি করা, যাতে তারা হালাল আয়ের পথ বের করতে পারে। অভিজ্ঞতা: AI Content Creation, Graphic Design, Video Production, Digital Marketing এবং Technology for Da'wah।",
  whatsapp: "+8801773442069",
  website: "www.katibmedia.com"
};

export const FAQS: FAQ[] = [
  {
    id: "faq_1",
    question: "AI TALIM কী?",
    answer: "AI TALIM হলো এমন একটি কোর্স যেখানে ChatGPT, Gemini এবং অন্যান্য AI টুল ব্যবহার করে ছবি, ভিডিও, অডিও, নাশিদ, কনটেন্ট, ডিজাইন এবং বাস্তব কাজে AI ব্যবহারের দক্ষতা শেখানো হয়।"
  },
  {
    id: "faq_2",
    question: "AI TALIM কোর্সের ফি কত?",
    answer: "AI TALIM-এর বর্তমান অফার মূল্য ৪৯৯ টাকা।\n\n⚠️ অফার, ক্যাম্পেইন ও ডিসকাউন্টের কারণে মূল্য পরিবর্তন হতে পারে। সর্বশেষ মূল্য ভর্তি পেইজে প্রদর্শিত মূল্য অনুযায়ী গণ্য হবে।"
  },
  {
    id: "faq_3",
    question: "AI Design to Print কোর্সের ফি কত?",
    answer: "AI Design to Print কোর্সের বর্তমান অফার মূল্য ৩৫০ টাকা।\n\n⚠️ মূল্য পরিবর্তনশীল।"
  },
  {
    id: "faq_4",
    question: "Online Academy Setup Masterclass-এর ফি কত?",
    answer: "বর্তমান অফার মূল্য ২৫০০ টাকা।\n\nমূল মূল্য: ৫০০০ টাকা।\n\n⚠️ অফার ও ক্যাম্পেইন অনুযায়ী মূল্য পরিবর্তন হতে পারে।"
  },
  {
    id: "faq_5",
    question: "মোবাইল দিয়ে কোর্স করা যাবে?",
    answer: "অবশ্যই।\n\nসকল কোর্স মোবাইল দিয়েই করা যাবে। তবে কম্পিউটার থাকলে আরও ভালোভাবে প্র্যাকটিস করতে পারবেন।"
  },
  {
    id: "faq_6",
    question: "কোর্সগুলো লাইভ নাকি রেকর্ডেড?",
    answer: "সকল কোর্স ১০০% প্রি-রেকর্ডেড।\n\nআপনি নিজের সুবিধামতো যেকোনো সময় ক্লাস করতে পারবেন।"
  },
  {
    id: "faq_7",
    question: "কোর্সে কোনো নির্দিষ্ট সময় আছে?",
    answer: "না।\n\nক্লাস করার জন্য নির্দিষ্ট কোনো সময় নেই।"
  },
  {
    id: "faq_8",
    question: "কোর্স শেষ করতে কতদিন লাগবে?",
    answer: "নিয়মিত সময় দিলে প্রায় ৭ দিনের মধ্যে কোর্স শেষ করা সম্ভব।\n\nতবে লাইফটাইম অ্যাক্সেস থাকায় নিজের সুবিধামতো শেখা যাবে।"
  },
  {
    id: "faq_9",
    question: "কোর্সে সাপোর্ট আছে?",
    answer: "হ্যাঁ।\n\nWhatsApp Support, Mentor Guidance এবং প্রয়োজন হলে Screen Sharing Support দেওয়া হয়।"
  },
  {
    id: "faq_10",
    question: "লাইফটাইম অ্যাক্সেস আছে?",
    answer: "হ্যাঁ।\n\nএকবার ভর্তি হলে লাইফটাইম অ্যাক্সেস পাবেন।"
  },
  {
    id: "faq_11",
    question: "সার্টিফিকেট দেওয়া হয়?",
    answer: "হ্যাঁ।\n\nকোর্স সম্পন্ন করলে সার্টিফিকেট প্রদান করা হয়।"
  },
  {
    id: "faq_12",
    question: "বিদেশ থেকে ভর্তি হওয়া যাবে?",
    answer: "হ্যাঁ।\n\nদেশ-বিদেশের যেকোনো প্রান্ত থেকে ভর্তি হওয়া যাবে।"
  },
  {
    id: "faq_13",
    question: "মেয়েরা ভর্তি হতে পারবে?",
    answer: "অবশ্যই।\n\nআমাদের কোর্সে নারী-পুরুষ উভয়েই ভর্তি হতে পারেন।"
  },
  {
    id: "faq_14",
    question: "কোর্স আপডেট হলে নতুন লেসন পাবো?",
    answer: "হ্যাঁ।\n\nনতুন আপডেট ও লেসন পুরাতন শিক্ষার্থীরাও পাবেন।"
  },
  {
    id: "faq_15",
    question: "Mentor কে?",
    answer: "AI TALIM-এর ইন্সট্রাক্টর হলেন ইনাম বিন সিদ্দিক (EBS)।\n\nতিনি একজন AI Trainer, Instructor, Entrepreneur এবং Katib Media-এর Founder।"
  },
  {
    id: "faq_16",
    question: "কাজের গ্যারান্টি আছে?",
    answer: "আমরা কোনো কাজের গ্যারান্টি দেই না।\n\nতবে এমন দক্ষতা, টুলস ও বাস্তব গাইডলাইন দেওয়া হয় যার মাধ্যমে আপনি নিজেই কাজ ও ইনকামের সুযোগ তৈরি করতে পারবেন।"
  },
  {
    id: "faq_17",
    question: "কিভাবে ভর্তি হবো?",
    answer: "ভর্তি লিংকে গিয়ে খুব সহজেই ভর্তি হতে পারবেন।\n\nAI TALIM:\nhttps://www.katibmedia.com/courses/ai-talim-with-islamic-ideology/\n\nAI Design to Print:\nhttps://www.katibmedia.com/courses/ai-design-mastery-design-to-print/\n\nOnline Academy Setup:\nhttps://www.katibmedia.com/courses/online-academy-setup-course/"
  },
  {
    id: "faq_18",
    question: "পেমেন্ট কিভাবে করবো?",
    answer: "ওয়েবসাইটে বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে সহজেই পেমেন্ট করা যাবে।"
  },
  {
    id: "faq_19",
    question: "আরও তথ্য কোথায় পাবো?",
    answer: "WhatsApp:\n+8801773442069\n\nWebsite:\nwww.katibmedia.com"
  }
];

export const QUICK_MESSAGES = [
  {
    title: "🤖 AI TALIM",
    prompt: "আসসালামু আলাইকুম, আমি এআই তালিম (AI TALIM) ক্যাটাগরি নিয়ে বিস্তারিত জানতে চাই।",
    desc: "ইসলামিক আইডিওলজি ও এআই সল্যুশন"
  },
  {
    title: "🎨 AI Design to Print",
    prompt: "আসসালামু আলাইকুম, আমি এআই ডিজাইন টু প্রিন্ট (AI Design to Print) কোর্সটি নিয়ে বিস্তারিত জানতে চাই।",
    desc: "প্রিন্ট রেডি ডিজাইন ও ক্যালিগ্রাফি ট্রিক্স"
  },
  {
    title: "🏛️ Online Academy Setup",
    prompt: "আসসালামু আলাইকুম, আমি অনলাইন একাডেমি সেটআপ (Online Academy Setup) কোর্সটি নিয়ে বিস্তারিত গাইড পেতে চাই।",
    desc: "অনলাইন ক্লাস ও পেমেন্ট সিস্টেম সেটাপ"
  },
  {
    title: "💰 Course Fees & Dis",
    prompt: "আসসালামু আলাইকুম, কোর্স সমূহের ভর্তি ফি এবং ডিসকাউন্ট কত জানতে চাই।",
    desc: "চলতি ডিসকাউন্ট ও অফার সম্পর্কে জানুন"
  },
  {
    title: "📞 Support Desk",
    prompt: "আসসালামু আলাইকুম, আমি সরাসরি ট্রেইনার ইনাম বিন সিদ্দিক ভাইয়ের সাথে যোগাযোগ করার হোয়াটসঅ্যাপ লিংক ও সাপোর্ট ডিটেইলস চাই।",
    desc: "হোয়াটসঅ্যাপ লিঙ্ক এবং সাপোর্ট বিবরণ"
  }
];
