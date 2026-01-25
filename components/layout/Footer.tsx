export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between text-sm text-[var(--text-muted)]">
        <span>© {new Date().getFullYear()}</span>
        <div className="flex gap-6">
          <a href="mailto:amaanzahmad2004@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
          <a href="https://linkedin.com/in/amaan-ahmad-0260a524b" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
          <a href="https://github.com/AmaanAhmad21" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
