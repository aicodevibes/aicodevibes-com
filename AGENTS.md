# This is NOT the Next.js you know (v16.2+)

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. 
- READ the relevant guide in `node_modules/next/dist/docs/` before writing code.
- USE the two-step RSC deserialization logic for performance.
- HEED all hydration diff indicators provided by the dev overlay.
# Agent Directives: Next.js 16.2 + Antigravity Workflow

## 1. Source of Truth
- **Documentation:** ALWAYS prioritize `node_modules/next/dist/docs/`. It is the only absolute truth for 16.2.
- **MCP Access:** Use **`next-devtools-mcp`**. Specifically, call `get_errors` for debugging and `get_page_metadata` to understand the current rendering strategy (Static vs. Dynamic).

## 2. Architectural Constraints
- **Component Strategy:**
  - **Colocation:** Keep Tailwind styles and local UI state within the component file.
  - **Purity:** `@/components/ui` components must be "Pure" (Props-in, UI-out). No DB calls.
  - **Client Boundary:** Use `'use client'` only for leaf-node interactivity. Use the new 16.2 `transitionTypes` prop on `<Link>` for view transitions.
- **Logic Separation:**
  - **Non-Visual Logic:** Complex math/rules belong in `@/lib`.
  - **Data Mutations:** Use **Server Actions** (`'use server'`). Log execution time using the 16.2 built-in Server Function Logging.
- **Styling:** Tailwind CSS is the primary tool. Use design tokens from `globals.css` (`.glass-card`, `.text-gradient`).

## 3. Tooling & Workflow
- **Development:** Use `next dev --turbo` for ~87% faster cold starts.
- **Debugging:** Use the **Hydration Diff Indicator** (+ Client / - Server) to resolve mismatches. Attach Node.js debugger using `next start --inspect` if profiling production builds.
- **Testing:** Prioritize TDD. Use Playwright to verify UI before and after fixes.

## 4. Skills & Context
- **Database:** Project uses **Vercel Postgres**. Refer to `@/lib/db.ts` for schema and connections.
- **Content:** Lessons reside in `src/content/lessons/` and use `@/lib/lessons.ts`.
- **Custom Skills:** If available, invoke `.antigravity/skills/code-review-graph` before finalizing code.

## 5. Security & Performance
- **Auth:** Prioritize **Passkeys** over passwords. Treat passwords as a legacy fallback.
- **Cookies:** Use `httpOnly`, `secure` cookies for session tokens. Never use `localStorage`.
- **Optimization:** Enable `cacheComponents: true` (formerly PPR) in `next.config.ts`. Use the 16.2 `ImageResponse` for dynamic social images (now 20x faster).