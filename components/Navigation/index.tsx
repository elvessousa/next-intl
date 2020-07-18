import React from "react";
import Link from "next/link";

interface Props {
  className?: string;
}

const Navigation: React.FC<Props> = ({ className }) => {
  const navClass = className || "navigation";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link href={`/`}>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href={`/articles/`}>
            <a>articles</a>
          </Link>
        </li>
        <li>
          <Link href={`/about`}>
            <a>about</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
