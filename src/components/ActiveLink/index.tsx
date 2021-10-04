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
  const childClassName = children.props.className ?? '';
  const newClassName = `${childClassName} ${activeClassName ?? ''}`;
  const className = asPath === rest.href ? newClassName.trim() : '';

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
