'use client';

import { useActionState } from "react";
import { subscribeEmail } from "../app/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

/**
 * A client-side form component for newsletter subscriptions.
 * Uses React 19 useActionState for form handling and state management.
 * 
 * @returns A newsletter subscription form with success/error feedback
 */
export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeEmail, null);

  return (
    <div className="w-full md:w-96 space-y-4">
      <form action="/#newsletter" className="flex flex-col gap-3">
        <Input 
          type="email" 
          name="email"
          id="newsletter-email"
          required
          placeholder="your@email.com"
          disabled={isPending}
          aria-label="Email address for newsletter"
        />
        <Button 
          type="submit"
          isLoading={isPending}
          formAction={formAction}
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
