import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <section className="animate-fade-in">
        <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-4">
          Amaan Ahmad
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl mb-12">
          Computer Science at Western. Building with AI, data, and systems.
        </p>
        <div className="flex gap-6">
          <Link href="/about" className="text-[var(--accent)] hover:underline text-sm font-medium">
            About →
          </Link>
          <Link href="/work" className="text-[var(--accent)] hover:underline text-sm font-medium">
            Work →
          </Link>
        </div>
      </section>
    </div>
  );
}
