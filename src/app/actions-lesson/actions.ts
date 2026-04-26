"use server";

import { revalidatePath } from "next/cache";

export type ActionState = {
  error?: string;
  success?: string;
} | null;

export async function createTask(prevState: ActionState, formData: FormData) {
  const title = formData.get("title");
  
  if (!title || typeof title !== "string" || title.length < 3) {
    return { error: "Please provide a valid task title (min 3 chars)." };
  }

  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  console.log(`[SERVER LOG] Successfully created task: ${title}`);
  
  revalidatePath("/actions-lesson");
  
  return { success: `Successfully created task: "${title}"` };
}
