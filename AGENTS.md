<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Directives: Next.js 16.2 + Antigravity Workflow

## 1. Source of Truth
- **Documentation:** ALWAYS prioritize documentation in `node_modules/next/dist/docs/`. My local environment and your training data may be outdated; these bundled docs are the absolute truth for 16.2 APIs.
- **MCP Access:** Use `next-devtools-mcp` to inspect live runtime state, component trees, and browser errors before suggesting fixes.

## 2. Architectural Constraints (The "How")
- **Component Strategy:**
  - **Colocation:** Keep Tailwind styles and local UI logic within the component file.
  - **Purity:** Keep `@/components/ui` as "Pure Components" (Props-in, UI-out). No database calls here.
  - **Client Boundary:** Use `'use client'` only for leaf-node interactivity. Default everything else to Server Components.
- **Logic Separation:**
  - **Non-Visual Logic:** All complex calculations and business rules belong in `@/lib`.
  - **Data Mutations:** Use **Next.js Server Actions** (`'use server'`) for all database/Firebase writes.
- **Styling:** Use **Tailwind CSS** exclusively for layouts. Do not create new global CSS classes unless authorized.

## 3. Tooling & Workflow
- **Development:** Use `next dev --turbo`.
- **Debugging:** If a build fails, query the Vercel MCP for deployment logs or use the Browser Log Forwarding in the terminal.
- **Testing:** Prioritize **Test-Driven Development (TDD)**. Write a Vitest or Playwright test to reproduce a bug before attempting a fix.

## 4. Skills & Commands
- **Onboarding:** Use `/scaffold-route [name]` to generate a 16.2 folder structure (page, loading, error, layout).
- **Database:** Refer to the `database-design` skill in `.antigravity/skills` before altering Firestore schemas.
- **Review:** Run the `code-review-graph` skill before every PR to ensure dependency health.

## 5. Security & Performance
- **Secrets:** Never hardcode keys. Use the Vercel MCP to verify environment variable names.
- **Optimization:** Use PPR (Partial Prerendering) where possible. Check the `next-devtools-mcp` to identify static vs. dynamic regions.