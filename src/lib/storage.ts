// Election Assistant — LocalStorage Helpers

import { ChatMessage, UserProfile, Language } from '@/types';

const KEYS = {
  profile: 'ea_user_profile',
  chatHistory: 'ea_chat_history',
  guideProgress: 'ea_guide_progress',
  checklistState: 'ea_checklist_state',
  language: 'ea_language',
  eli10Mode: 'ea_eli10_mode',
  onboardingDone: 'ea_onboarding_done',
} as const;

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable
  }
}

// User Profile
export const defaultProfile: UserProfile = {
  age: null,
  location: '',
  state: '',
  isFirstTimeVoter: null,
  completedAt: null,
};

export function getUserProfile(): UserProfile {
  return safeGet(KEYS.profile, defaultProfile);
}

export function setUserProfile(profile: UserProfile): void {
  safeSet(KEYS.profile, profile);
}

// Chat History
export function getChatHistory(): ChatMessage[] {
  return safeGet(KEYS.chatHistory, []);
}

export function setChatHistory(messages: ChatMessage[]): void {
  safeSet(KEYS.chatHistory, messages);
}

export function addChatMessage(message: ChatMessage): void {
  const history = getChatHistory();
  history.push(message);
  setChatHistory(history);
}

// Guide Progress
export function getGuideProgress(): Record<number, boolean> {
  return safeGet(KEYS.guideProgress, {});
}

export function setStepCompleted(stepId: number, completed: boolean): void {
  const progress = getGuideProgress();
  progress[stepId] = completed;
  safeSet(KEYS.guideProgress, progress);
}

// Checklist State
export function getChecklistState(): Record<string, boolean> {
  return safeGet(KEYS.checklistState, {});
}

export function setChecklistItemState(itemId: string, checked: boolean): void {
  const state = getChecklistState();
  state[itemId] = checked;
  safeSet(KEYS.checklistState, state);
}

// Language
export function getLanguage(): Language {
  return safeGet(KEYS.language, 'en');
}

export function setLanguage(lang: Language): void {
  safeSet(KEYS.language, lang);
}

// ELI10 Mode
export function getEli10Mode(): boolean {
  return safeGet(KEYS.eli10Mode, false);
}

export function setEli10Mode(enabled: boolean): void {
  safeSet(KEYS.eli10Mode, enabled);
}

// Onboarding
export function isOnboardingDone(): boolean {
  return safeGet(KEYS.onboardingDone, false);
}

export function setOnboardingDone(done: boolean): void {
  safeSet(KEYS.onboardingDone, done);
}
