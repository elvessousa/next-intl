import Link from "next/link";

type Props = {
  link?: string;
};

export default function Logo({ link }: Props) {
  const href = link || "/";

  return (
    <Link className="logo" href={href}>
      <img src="/svg/logo.svg" alt="logo" />
    </Link>
  );
}
