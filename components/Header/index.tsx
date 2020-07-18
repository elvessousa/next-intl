import Navigation from "../Navigation";
import Logo from "../Logo";
import Link from "next/link";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ className, children }) => {
  const headerClass = className || "header";

  return (
    <header className={headerClass}>
      <Logo link={`/`} />
      <Navigation />
      {children}
      <div className="lang">
        <Link href="/">
          <a>PT</a>
        </Link>
        <Link href="/en">
          <a>EN</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
