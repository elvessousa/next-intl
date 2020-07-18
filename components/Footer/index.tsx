import Navigation from "../Navigation";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ className, children }) => {
  const footerClass = className || "footer";

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <Navigation />
        {children}
      </div>
    </footer>
  );
};

export default Layout;
