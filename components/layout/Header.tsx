import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
] as const;

export function Header() {
  return (
    <header className="border-b border-white/5">
      <nav className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors">
          Amaan
        </Link>
        <ul className="flex gap-8">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
