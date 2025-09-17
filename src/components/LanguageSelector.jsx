import { useState } from 'react';
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Languages, ChevronDown } from "lucide-react";

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'kha', name: 'Khasi', nativeName: 'Khasi' },
  { code: 'garo', name: 'Garo', nativeName: 'A•chik' },
  { code: 'mizo', name: 'Mizo', nativeName: 'Mizo ṭawng' },
  { code: 'naga', name: 'Nagamese', nativeName: 'Nagamese' },
  { code: 'manipuri', name: 'Manipuri', nativeName: 'ꯃꯅꯤꯄꯨꯔꯤ' },
];

export function LanguageSelector({ onLanguageChange, className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language.code);
    }

    // Store selection in localStorage for persistence
    localStorage.setItem('selectedLanguage', JSON.stringify(language));

    // Show toast confirmation (console log for now)
    console.log(`Language changed to: ${language.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`flex items-center gap-2 ${className}`}
        >
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{selectedLanguage.nativeName}</span>
          <span className="sm:hidden">{selectedLanguage.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language)}
            className={`flex items-center justify-between cursor-pointer ${
              selectedLanguage.code === language.code ? 'bg-accent' : ''
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
            {selectedLanguage.code === language.code && (
              <div className="w-2 h-2 bg-primary rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
