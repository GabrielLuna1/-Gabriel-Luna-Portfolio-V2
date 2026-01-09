interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-white/5 text-secondary hover:border-primary/30 hover:text-primary transition-colors cursor-default">
      {name}
    </span>
  );
}