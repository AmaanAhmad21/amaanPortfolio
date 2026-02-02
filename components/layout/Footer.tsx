export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-center text-base text-[var(--text-muted)]">
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
