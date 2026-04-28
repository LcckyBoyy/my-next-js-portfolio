import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl px-4 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          {/* Portrait — corner brackets replace full border */}
          <div className="relative w-full aspect-3/4 max-w-sm mx-auto">
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-border/60" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-border/60" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-border/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-border/60" />
            <div className="w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="text-7xl font-bold text-zinc-700 select-none">B</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-2xl md:text-3xl font-semibold text-fg leading-snug mb-6">
            A developer who builds things that work.
          </h2>
          <p className="text-fg-muted leading-relaxed">
            I work primarily in the .NET ecosystem — ASP.NET MVC, SQL Server,
            IIS — building internal dashboards and tools for real users.
            It&apos;s unglamorous work, and I love it.
          </p>
          <p className="text-fg-muted leading-relaxed mt-4">
            Right now I&apos;m deliberately stepping outside that bubble. This
            portfolio is part of that journey — built with Next.js, TypeScript,
            and Tailwind. Learning by building, one project at a time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
