import React from "react";

interface GoalItemProps {
  title: string;
  desc: string;
}

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
