export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} <span>Nitesh Kumar</span>. Built with ⚛️ React &amp; ❤️
        </p>
        <p className="footer-text">
          Designed &amp; Developed with <span>passion</span>
        </p>
      </div>
    </footer>
  );
}
