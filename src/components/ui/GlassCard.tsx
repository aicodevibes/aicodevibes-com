import { cn } from "@/lib/utils";
import React from "react";

/**
 * Props for the GlassCard component.
 * Extends standard HTML div attributes to allow for flexible container usage.
 */
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content to be rendered inside the card */
  children: React.ReactNode;
  /** 
   * Additional CSS classes for custom styling. 
   * Merged using `cn` utility.
   */
  className?: string;
  /** 
   * Whether the card should exhibit interactive hover effects.
   * When true, applies scaling, border color changes, and enhanced shadows on hover.
   */
  hoverable?: boolean;
}

/**
 * A modern, translucent card component implementing glassmorphism design patterns.
 * Utilizes backdrop-blur and border-opacity to create a premium layered effect.
 * 
 * @example
 * ```tsx
 * <GlassCard hoverable className="p-10">
 *   <h3>Card Content</h3>
 * </GlassCard>
 * ```
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
