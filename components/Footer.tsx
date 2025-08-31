// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} You Meina</span>
        <span className="dot">•</span>
        <a href="mailto:youmeina@example.com">youmeina@example.com</a>
      </div>
    </footer>
  );
}
