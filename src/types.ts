export interface Course {
  id: string;
  name: string;
  localName: string;
  tagline: string;
  regularPrice: number;
  price: number;
  highlights: string[];
  description: string;
  color: string;
  icon: string;
  enrollUrl: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  recommendation?: 'AI_TALIM' | 'DESIGN_TO_PRINT' | 'ONLINE_ACADEMY' | 'COURSES' | null;
  timestamp: Date;
  offline?: boolean;
}

export interface Trainer {
  name: string;
  title: string;
  photoUrl: string;
  bio: string;
  whatsapp: string;
  website: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
