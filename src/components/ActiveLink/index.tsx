import { cloneElement, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  activeClassName: string;
};

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  console.log(children);
  const newClassName = `${children.props.className} ${activeClassName}`;
  const className = asPath === rest.href ? newClassName : '';

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
