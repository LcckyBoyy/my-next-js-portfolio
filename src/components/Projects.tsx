import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Project One",
    description:
      "Short description of what this project does and what problem it solves.",
    tags: ["ASP.NET MVC", "SQL Server", "IIS"],
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and what problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl px-4">
        <h2 className="sr-only">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 120}>
              {/* Corner brackets replace full border; accent on hover via group */}
              <div className="relative p-6 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300 group h-full">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-border/60 group-hover:border-accent/50 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-border/60 group-hover:border-accent/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-border/60 group-hover:border-accent/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-border/60 group-hover:border-accent/50 transition-colors duration-300" />

                <h3 className="text-lg font-semibold text-fg mb-2">
                  {project.title}
                </h3>
                <p className="text-fg-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/projects"
            className="group text-sm text-fg-muted hover:text-fg transition-colors duration-200 inline-flex items-center gap-1"
          >
            View all projects
            <span className="text-accent group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
