'use client';

import { useActionState } from "react";
import { subscribeEmail } from "../app/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeEmail, null);

  return (
    <div className="w-full md:w-96 space-y-4">
      <form action={formAction} className="flex flex-col gap-3">
        <Input 
          type="email" 
          name="email"
          required
          placeholder="your@email.com"
          disabled={isPending}
        />
        <Button 
          type="submit"
          isLoading={isPending}
        >
          Subscribe Now
        </Button>
      </form>
      
      {state?.success && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium text-center animate-fade-in">
          {state.message}
        </div>
      )}
      
      {state?.error && (
        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium text-center animate-fade-in shadow-lg shadow-rose-900/10">
          {state.error}
        </div>
      )}
    </div>
  );
}
