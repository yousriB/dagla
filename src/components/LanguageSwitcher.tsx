
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-primary/10 transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'ar' ? 'Français' : 'العربية'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
