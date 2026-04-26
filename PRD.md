# Product Requirements Document (PRD): AICODEVIBES

## 1. Product Vision & Overview
**AICODEVIBES** is a premium, AI-native educational platform designed to teach the next generation of web developers how to build "Agentic" applications using Next.js 16. The project itself serves as a living laboratory, demonstrating the very architectural patterns it teaches (e.g., Streaming, PPR, Server Actions).

### Goals:
- Provide a modular, highly polished learning experience.
- Showcase modern Next.js 16 capabilities (PPR, Server Actions, etc.).
- Maintain a "Wow" factor through premium Glassmorphism design and dark-first aesthetics.

---

## 2. Target Audience
- **Modern Web Developers**: Looking to upgrade from Next.js 14/15 to 16.
- **AI Enthusiasts**: Interested in the intersection of AI Agents and web architecture.
- **UI/UX Designers**: Interested in high-end, dynamic web designs.

---

## 3. Functional Requirements

### 3.1. Curriculum Hub
- **Lesson Grid**: A responsive grid of learning modules.
- **Module Cards**: Visual summaries of each lesson with icons, difficulty tags, and direct links to labs.
- **Dynamic Routing**: Automatic slug generation for lessons based on content files.

### 3.2. Lesson Viewer
- **Markdown Rendering**: High-fidelity rendering of lesson content using `react-markdown`.
- **Premium Typography**: Custom `prose-premium` styles for readability and aesthetic appeal.
- **Lab Integration**: Direct calls-to-action at the end of lessons to enter "Laboratory Mode."

### 3.3. Live Laboratories (Interactive Demos)
- **Data Streaming Lab**: Real-time demonstration of React Suspense and server-side streaming.
- **Interactivity Lab**: Showcase of client-side state management and hydration boundaries.
- **Future Labs**: Server Actions, Error Resilience, and Routing patterns.

### 3.4. Community Engagement
- **Newsletter Subscription**: Integrated form using Next.js Server Actions and Postgres storage.
- **Feedback Loop**: Interactive elements for users to "apply knowledge" in real-time.

---

## 4. Technical Requirements (Next.js 16 Stack)

### 4.1. Performance & Infrastructure
- **Partial Prerendering (PPR)**: Enabled for optimized loading of static and dynamic content.
- **Server-Side Focus**: Maximize use of Server Components to minimize client-side bundle size.
- **Database**: Vercel Postgres for robust, serverless data management.

### 4.2. Design System
- **Theme**: Forced Dark Mode (Default) with high-contrast slate and indigo accents.
- **Visuals**: Glassmorphism (blur filters), radial mesh backgrounds, and smooth micro-animations.
- **CSS**: Tailwind CSS v4 (CSS-first configuration).

---

## 5. Content Strategy
The curriculum is divided into six core modules:
1. **Architecture**: Foundation, TypeScript, and Design Systems.
2. **Streaming**: Fetch boundaries and loading skeletons.
3. **Interactivity**: State, Hooks, and Client boundaries.
4. **Server Actions**: Secure data mutations without APIs.
5. **Resilience**: Error Boundaries and loading states.
6. **Dynamic Routes**: Polymorphic pages and routing hubs.

---

## 6. Future Roadmap
- **Interactive Coding Sandbox**: In-browser code execution for lessons.
- **User Authentication**: Progress tracking and personalized lab environments.
- **AI Tutors**: Agentic sidebar to assist students with lesson content.
- **Laboratory Marketplace**: Community-contributed lab patterns.
