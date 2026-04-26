import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ className, label, error, ...props }: InputProps) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="text-sm font-medium text-slate-400 ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        <input
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
