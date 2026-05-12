import React from "react";

/**
 * Props for the GoalItem component.
 */
interface GoalItemProps {
  /** The high-level title of the goal or technical feature */
  title: string;
  /** 
   * A concise description of the goal, explaining its significance 
   * within the project's architecture.
   */
  desc: string;
}

/**
 * A specialized list item component used to display high-level site goals 
 * or core technical features in a consistent, bulleted format.
 * 
 * @param props - The properties for the goal item component
 * @returns A styled container with an indicator dot, title, and description
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
