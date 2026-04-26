import { LaboratoryLayout } from "@/components/layout/LaboratoryLayout";
import { InteractivityLab } from "@/components/lessons/InteractivityLab";

export const metadata = {
  title: "Client Interactivity Lab | Agentic Coding",
  description: "Learn how the 'use client' directive unlocks React's dynamic capabilities.",
};

export default function InteractivityLessonPage() {
  return (
    <LaboratoryLayout
      title="Exploring Interactivity"
      description="Learn how the 'use client' directive unlocks React's dynamic capabilities like state and event handling in Next.js 16."
      moduleTag="Lesson 3: Client Foundations"
      moduleColor="emerald"
    >
      <InteractivityLab />
    </LaboratoryLayout>
  );
}
