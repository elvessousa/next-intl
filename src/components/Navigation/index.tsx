import Link from 'next/link';

import useTranslation from '../../hooks/useTranslation';

type Props = {
  className?: string;
};

export default function Navigation({ className }: Props) {
  const { t, locale } = useTranslation();
  const navClass = className || 'navigation';

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link href={`/`}>
            <a>{t('home')}</a>
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/posts`}>
            <a>{t('articles')}</a>
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/${t('about').toLowerCase()}`}>
            <a>{t('about')}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
