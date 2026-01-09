import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  href,
  target,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-white hover:text-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)]",
    outline: "border border-white/10 bg-transparent text-white hover:border-primary/50 hover:bg-primary/10 hover:text-primary",
    ghost: "bg-transparent text-secondary hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-3",
    lg: "text-lg px-8 py-4 gap-4",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Se tiver href...
  if (href) {
    // LÓGICA CORRIGIDA: Se for âncora (#), usa tag <a> nativa para o scroll funcionar sempre
    if (href.startsWith("#")) {
      return (
        <a href={href} className={combinedStyles}>
          {children}
        </a>
      );
    }
    
    // Se for link normal, usa o Link do Next.js
    return (
      <Link href={href} target={target} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}