import { useContext } from 'react';
import { useRouter } from 'next/router';

import Navigation from '../Navigation';
import Logo from '../Logo';
import { LanguageContext, locales } from '../../intl/LanguageProvider';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ className, children }) => {
  const headerClass = className || 'header';
  const [locale, setLocale] = useContext(LanguageContext);
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
        <button onClick={() => handleLocaleChange('en')}>EN</button>
        <button onClick={() => handleLocaleChange('pt')}>PT</button>
      </div>
    </header>
  );
};

export default Header;
