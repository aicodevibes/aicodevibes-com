import { cn } from "@/lib/utils";
import React from "react";

/**
 * Props for the GlassCard component
 */
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content to be rendered inside the card */
  children: React.ReactNode;
  /** Additional CSS classes for custom styling */
  className?: string;
  /** Whether the card should have hover effects */
  hoverable?: boolean;
}

/**
 * A modern, translucent card component with glassmorphism effects.
 * 
 * @param props - The properties for the glass card component
 * @returns A styled div element acting as a glass card
 */
export function GlassCard({ children, className, hoverable = false, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-6 border-white/10 transition-all duration-500",
        hoverable && "group hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
