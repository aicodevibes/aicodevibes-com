import { cn } from "@/lib/utils";
import React from "react";

/**
 * Props for the Button component
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Whether to render the button as its child element */
  asChild?: boolean;
}

/**
 * A highly customizable, premium button component with support for multiple variants and sizes.
 * 
 * @param props - The properties for the button component
 * @returns A styled button element or the child element if asChild is true
 */
export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  disabled, 
  asChild,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20",
    secondary: "bg-linear-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 shadow-lg",
    ghost: "bg-transparent hover:bg-white/5 text-slate-700 dark:text-white border-white/10",
    outline: "bg-transparent border border-white/10 hover:border-white/20 text-slate-500",
    danger: "bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const classes = cn(
    "rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center gap-2",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(classes, child.props?.className),
      ...props,
    });
  }

  return (
    <button
      className={classes}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}
