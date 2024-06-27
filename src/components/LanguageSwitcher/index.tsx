"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    router.push(`/${selectedLocale}`);
  };

  return (
    <select value={locale} onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSwitcher;
