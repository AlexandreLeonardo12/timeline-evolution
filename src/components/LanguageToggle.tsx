import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="h-8 w-8 p-0 font-semibold"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};

export default LanguageToggle;