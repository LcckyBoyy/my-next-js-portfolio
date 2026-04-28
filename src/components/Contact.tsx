export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-16 pb-24">
      <div className="max-w-4xl px-4">
        <p className="text-3xl md:text-4xl font-semibold text-fg leading-snug mb-10 max-w-md">
          Want to chat? I&apos;m a few clicks away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            Email me
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
