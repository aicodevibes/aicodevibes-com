import { cn } from "@/lib/utils";
import React from "react";

/**
 * Props for the Input component.
 * Extends standard HTML input attributes for full compatibility.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 
   * The label text displayed above the input field. 
   * Provides accessibility and visual context.
   */
  label?: string;
  /** 
   * Error message to display below the input. 
   * When provided, the input border changes to a danger state.
   */
  error?: string;
}

/**
 * A styled, accessible input component with support for labels and validation states.
 * Features a subtle inner shadow and premium focus effects.
 * 
 * @example
 * ```tsx
 * <Input 
 *   label="Email Address" 
 *   error={errors.email} 
 *   placeholder="user@example.com" 
 * />
 * ```
 * 
 * @param props - The properties for the input component
 * @returns A styled input container with label and error message
 */
export function Input({ className, label, error, id, name, ...props }: InputProps) {
  const inputId = id || name;
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-sm font-medium text-slate-400 ml-1"
        >
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          id={inputId}
          name={name}
          className={cn(
            "w-full px-6 py-4 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all shadow-inner shadow-black/20",
            error && "border-rose-500/50 focus:ring-rose-500/40",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-rose-400 text-xs font-medium ml-1 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
}
