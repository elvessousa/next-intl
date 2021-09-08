import useTranslation from '../../hooks/useTranslation';
import { ActiveLink } from '../ActiveLink';

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
          <ActiveLink href={`/`} activeClassName="active">
            <a>{t('home')}</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={`/${locale}/posts`} activeClassName="active">
            <a>{t('articles')}</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href={`/${locale}/${t('about').toLowerCase()}`}
            activeClassName="active"
          >
            <a>{t('about')}</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
