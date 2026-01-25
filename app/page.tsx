import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <section className="animate-fade-in">
        <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-4">
          Amaan
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl mb-12">
          Building things with code. Interested in design, systems, and the spaces between.
        </p>
        <Link
          href="/about"
          className="inline-block text-[var(--accent)] hover:underline text-sm font-medium"
        >
          About →
        </Link>
      </section>
    </div>
  );
}
