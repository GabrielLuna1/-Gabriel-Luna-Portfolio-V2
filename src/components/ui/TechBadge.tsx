interface TechBadgeProps {
  name: string;
  color?: "default" | "primary" | "green" | "amber" | "purple";
}

export function TechBadge({ name, color = "default" }: TechBadgeProps) {
  const colors: Record<string, string> = {
    default:
      "bg-surface-elevated/50 border-white/5 text-secondary hover:border-primary/30 hover:text-primary",
    primary:
      "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
    green:
      "bg-success/10 border-success/20 text-success hover:bg-success/20",
    amber:
      "bg-warning/10 border-warning/20 text-warning hover:bg-warning/20",
    purple:
      "bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20",
  };

  return (
    <span
      className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border transition-colors cursor-default ${colors[color]}`}
    >
      {name}
    </span>
  );
}
