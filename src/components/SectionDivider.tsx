interface Props {
  number: string;
  label: string;
}

/**
 * Editorial grid section marker.
 * Outer padding matches section padding so the line and label align with content.
 */
export default function SectionDivider({ number, label }: Props) {
  return (
    <div className="px-6 md:px-16 lg:px-24">
      <div className="relative h-0 border-t border-border/50">
        <div className="absolute left-4 top-0 pt-3 flex items-center gap-2 pr-4">
          <span className="font-mono text-[10px] leading-none text-zinc-500">{number}</span>
          <span className="text-[10px] leading-none text-zinc-700">/</span>
          <span className="text-[10px] leading-none font-semibold uppercase tracking-[0.12em] text-accent">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
