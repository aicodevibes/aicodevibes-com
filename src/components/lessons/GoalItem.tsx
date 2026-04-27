import React from "react";

/**
 * Props for the GoalItem component
 */
interface GoalItemProps {
  /** The title of the goal or feature */
  title: string;
  /** Detailed description of the goal */
  desc: string;
}

/**
 * A simple list item component used to display site goals or tech features.
 * 
 * @param props - The properties for the goal item component
 * @returns A styled div representing a single goal
 */
export function GoalItem({ title, desc }: GoalItemProps) {
  return (
    <div className="space-y-1">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{title}</h4>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed ml-3.5">{desc}</p>
    </div>
  );
}
