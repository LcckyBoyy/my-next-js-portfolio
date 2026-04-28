const daily = ["ASP.NET MVC", "C#", "SQL Server", "IIS", "T-SQL", "Cloudflare Tunnel", "Git"];
const exploring = ["Next.js", "TypeScript", "Tailwind CSS", "React"];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Daily
            </h3>
            <div className="flex flex-wrap gap-2">
              {daily.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Exploring
            </h3>
            <div className="flex flex-wrap gap-2">
              {exploring.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-md bg-accent/10 text-accent border border-accent/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
