import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type AppLanguage = 'en' | 'zh';

type LanguageContextValue = {
  lang: AppLanguage;
  setLang: (lang: AppLanguage) => void;
  t: (en: string, zh: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<AppLanguage>('zh');

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    t: (en, zh) => (lang === 'zh' ? zh : en),
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
