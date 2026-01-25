export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between text-sm text-[var(--text-muted)]">
        <span>© {new Date().getFullYear()}</span>
        <a
          href="mailto:hello@example.com"
          className="hover:text-[var(--accent)] transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
