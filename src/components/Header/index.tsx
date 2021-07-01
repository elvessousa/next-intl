import { useRouter } from 'next/router';

import Navigation from '../Navigation';
import Logo from '../Logo';
import useTranslation from '../../hooks/useTranslation';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Header({ className, children }: Props) {
  const headerClass = className || 'header';
  const { setLocale, locales } = useTranslation();
  const router = useRouter();

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    router.push(router.pathname, router.asPath.replace(regex, `/${language}`));
  }

  return (
    <header className={headerClass}>
      <Logo link={`/`} />
      <Navigation />
      {children}
      <div className="lang">
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </button>
        ))}
      </div>
    </header>
  );
}
