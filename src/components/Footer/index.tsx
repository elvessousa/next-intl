import Navigation from '../Navigation';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Layout({ className, children }: Props) {
  const footerClass = className || 'footer';

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <Navigation />
        {children}
      </div>
    </footer>
  );
}
