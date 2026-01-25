export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <section>
        <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)] mb-8">
          About
        </h1>
        <div className="text-[var(--text-muted)] space-y-4 max-w-2xl">
          <p>
            I’m a developer and maker. I like clean systems, clear typography, and
            ideas that hold up under pressure.
          </p>
          <p>
            When I’m not coding, I’m usually reading, watching, or listening to
            something that moves the needle.
          </p>
          <p>
            This site is a work in progress. More soon.
          </p>
        </div>
      </section>
    </div>
  );
}
