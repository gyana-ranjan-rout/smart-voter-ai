// Election Assistant — TypeScript Types

export interface UserProfile {
  age: number | null;
  location: string;
  state: string;
  isFirstTimeVoter: boolean | null;
  completedAt: string | null;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  suggestions?: string[];
}

export interface GuideStep {
  id: number;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  details: string[];
  detailsHi: string[];
  icon: string;
  completed: boolean;
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  labelHi: string;
  checked: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  status: 'completed' | 'active' | 'upcoming';
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
  category: FAQCategory;
}

export type FAQCategory = 'eligibility' | 'registration' | 'voting-day' | 'results' | 'general';

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  eli10Response: string;
  category: string;
  followUp: string[];
}

export type Language = 'en' | 'hi';

export interface DemoStep {
  id: number;
  title: string;
  description: string;
  instruction: string;
}

export interface Candidate {
  id: number;
  name: string;
  party: string;
  symbol: string;
  color: string;
}
