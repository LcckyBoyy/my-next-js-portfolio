export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl px-4">
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-xs font-medium px-3 py-1 rounded-full border border-border text-fg-muted">
            .NET Specialist
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full border border-accent text-accent">
            Exploring Next.js
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-fg leading-tight tracking-tight mb-6">
          Building Things
          <br />
          With Code.
        </h1>

        <p className="text-lg md:text-xl text-fg-muted max-w-xl leading-relaxed">
          Hi, I&apos;m{" "}
          <span className="text-accent font-medium">Bene</span>. I build
          internal tools and dashboards with .NET — and I&apos;m teaching myself
          the modern web stack, one project at a time.
        </p>
      </div>
    </section>
  );
}
