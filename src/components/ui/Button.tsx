import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "danger" | "success";
  size?: "xs" | "sm" | "md" | "lg";
  href?: string;
  target?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  loading = false,
  disabled,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary: `
      bg-gradient-to-r from-primary to-primary-light
      text-white
      shadow-glow
      hover:shadow-glow-md hover:scale-[1.02]
      active:scale-[0.98]
      btn-glow
    `,
    outline: `
      border border-white/10 bg-transparent text-white
      hover:border-primary/40 hover:bg-primary/5 hover:text-primary
      active:bg-primary/10
    `,
    ghost: `
      bg-transparent text-secondary
      hover:text-white hover:bg-white/5
      active:bg-white/10
    `,
    danger: `
      bg-error/90 text-white
      hover:bg-error hover:shadow-[0_0_20px_rgba(var(--error),0.3)]
      active:scale-[0.98]
    `,
    success: `
      bg-success/90 text-white
      hover:bg-success hover:shadow-[0_0_20px_rgba(var(--success),0.3)]
      active:scale-[0.98]
    `,
  };

  const sizes: Record<string, string> = {
    xs: "text-xs px-3 py-1.5 gap-1.5",
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-3",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = loading ? (
    <>
      <Loader2 size={16} className="animate-spin" />
      <span>Carregando...</span>
    </>
  ) : icon ? (
    iconPosition === "left" ? (
      <>
        {icon}
        <span>{children}</span>
      </>
    ) : (
      <>
        <span>{children}</span>
        {icon}
      </>
    )
  ) : (
    children
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} className={combinedStyles}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} target={target} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
