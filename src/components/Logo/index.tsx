import Link from 'next/link';

type Props = {
  link?: string;
};

export default function Logo({ link }: Props) {
  const href = link || '/';

  return (
    <Link href={href}>
      <a className="logo">
        <img src="/svg/logo.svg" alt="logo" />
      </a>
    </Link>
  );
}
