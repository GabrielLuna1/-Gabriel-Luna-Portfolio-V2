interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

export function SectionTitle({ subtitle, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
        {title}
        <span className="text-primary">.</span>
      </h2>
    </div>
  );
}