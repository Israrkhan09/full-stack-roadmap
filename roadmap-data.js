// Full-Stack Developer Roadmap Curriculum Data
// 5 Phases, 26 Weeks, 182 Days

window.ROADMAP_PHASES = [
  {
    id: "react",
    label: "React",
    icon: "⚛",
    color: "#61dafb",
    iconBg: "#061820",
    duration: "6 weeks · Days 1–42",
    desc: "Deep React — JSX to advanced patterns, full CRUD apps, custom hooks, performance",
    badges: ["JSX", "useState", "useEffect", "Custom Hooks", "Context", "useReducer", "React Query", "Performance"],
    weeks: [
      {
        title: "Week 1 — JSX, Components & Props",
        days: [
          { d: 1, t: "Dev environment + JSX", tag: "Setup", topics: ["Node/npm/Vite setup", "JSX vs HTML differences", "Expressions in JSX", "Fragments"], project: { n: "Profile Card", desc: "Render dynamic name, avatar, bio from JS object via props" } },
          { d: 2, t: "Props deep dive", tag: "Props", topics: ["Passing any data type", "Destructuring props", "Default props", "Children prop"], project: { n: "Card Component Library", desc: "Button, Badge, Avatar — all with props, sizes, variants" } },
          { d: 3, t: "Conditional rendering", tag: "Logic", topics: ["Ternary operator", "&& short-circuit", "Switch pattern", "Null checks"], project: { n: "Notification Banner", desc: "Show success/error/info banners based on type prop" } },
          { d: 4, t: "Lists & keys", tag: "Lists", topics: ["Array.map() in JSX", "Key prop rules", "Rendering objects", "Nested lists"], project: { n: "Product List", desc: "Render 10 products from array, filter by category" } },
          { d: 5, t: "Events & user interaction", tag: "Events", topics: ["onClick, onMouseEnter", "Event object", "Inline vs named handlers", "Passing args to handlers"], project: { n: "Interactive Gallery", desc: "Click image to highlight it, hover shows title overlay" } },
          { d: 6, t: "Component composition", tag: "Patterns", topics: ["Breaking UI into components", "Container vs presentational", "Passing components as props", "Slot pattern"], project: { n: "Dashboard Layout", desc: "Sidebar + Header + Main area using component composition" } },
          { d: 7, t: "CRUD Practice Day", tag: "CRUD", topics: ["Build a full contacts manager", "Add contact form", "List all contacts", "Delete contact"], project: { n: "Contacts Manager v1", desc: "Add, list, delete contacts — all in one component tree with props" } }
        ]
      },
      {
        title: "Week 2 — State & useState",
        days: [
          { d: 8, t: "useState fundamentals", tag: "State", topics: ["State vs props", "useState syntax", "Re-render on state change", "State initialization"], project: { n: "Counter with history", desc: "Count up/down, show last 5 values in a history list" } },
          { d: 9, t: "Multiple state vars", tag: "State", topics: ["Independent state slices", "State for UI (loading, error)", "Object state", "Avoid stale closures"], project: { n: "User Form", desc: "Name, email, phone form — each field its own state, live preview" } },
          { d: 10, t: "Controlled components", tag: "Forms", topics: ["Controlled input pattern", "onChange + value", "Textarea, select, checkbox", "Form reset"], project: { n: "Registration Form", desc: "Full register form: controlled inputs, show/hide password" } },
          { d: 11, t: "State lifting", tag: "Patterns", topics: ["Lifting state up", "Sharing state between siblings", "Props callbacks", "One source of truth"], project: { n: "Shopping Cart", desc: "Product list + cart — shared state lifted to parent" } },
          { d: 12, t: "Derived state & computed values", tag: "Logic", topics: ["Calculate from state", "Avoid redundant state", "useMemo preview", "Filter/sort from state"], project: { n: "Todo Filter App", desc: "Todo list with active/completed/all filter — derived counts" } },
          { d: 13, t: "useState with arrays", tag: "State", topics: ["Add to array (spread)", "Remove by index/id", "Update item in array", "Sort state array"], project: { n: "Kanban Board v1", desc: "3 columns, move cards between To Do / In Progress / Done" } },
          { d: 14, t: "CRUD Practice Day", tag: "CRUD", topics: ["Full CRUD with useState", "Add, edit inline, delete", "Mark complete", "Local filter search"], project: { n: "Notes App v1", desc: "Create, read, edit inline, delete notes — full CRUD with useState only" } }
        ]
      },
      {
        title: "Week 3 — useEffect & Data Fetching",
        days: [
          { d: 15, t: "useEffect basics", tag: "Effects", topics: ["When effects run", "Dependency array", "Cleanup function", "Common patterns"], project: { n: "Window Resize Tracker", desc: "Show live window width — effect + cleanup for resize listener" } },
          { d: 16, t: "Fetching data on mount", tag: "Fetch", topics: ["fetch() in useEffect", "Loading & error states", "Abort controller cleanup", "useState + useEffect combo"], project: { n: "Users Directory", desc: "Fetch users from JSONPlaceholder, show loading skeleton, handle error" } },
          { d: 17, t: "Fetch on dependency change", tag: "Fetch", topics: ["Re-fetch when id changes", "Search on input", "Debouncing fetches", "Race condition fix"], project: { n: "Post Viewer", desc: "Select user → fetch their posts. Debounced search bar." } },
          { d: 18, t: "Custom useFetch hook", tag: "Hooks", topics: ["Extract fetch logic", "Return {data, loading, error}", "Reuse across components", "Generic hook pattern"], project: { n: "useFetch Hook", desc: "Build reusable useFetch, use in 3 different components" } },
          { d: 19, t: "useRef & DOM access", tag: "Refs", topics: ["useRef for DOM", "Focus management", "Store mutable values", "Timer ref pattern"], project: { n: "Stopwatch", desc: "Start/stop/reset timer using useRef for interval" } },
          { d: 20, t: "Custom hooks collection", tag: "Hooks", topics: ["useLocalStorage", "useDebounce", "useToggle", "useWindowSize"], project: { n: "Hook Library", desc: "Build 4 custom hooks, demo each in a small component" } },
          { d: 21, t: "CRUD with API", tag: "CRUD", topics: ["GET, POST, PUT, DELETE", "Optimistic UI update", "Loading per action", "Error rollback"], project: { n: "Notes App v2", desc: "Notes CRUD hitting JSONPlaceholder REST API — full async CRUD" } }
        ]
      },
      {
        title: "Week 4 — Context, useReducer & Global State",
        days: [
          { d: 22, t: "Context API deep dive", tag: "Context", topics: ["createContext, Provider", "useContext hook", "When to use context", "Context re-render gotchas"], project: { n: "Theme System", desc: "Light/dark/system theme — context consumed in deeply nested components" } },
          { d: 23, t: "useReducer", tag: "State", topics: ["Reducer function", "dispatch + actions", "Switch statement pattern", "initialState design"], project: { n: "Shopping Cart v2", desc: "Cart state via useReducer — add, remove, update qty, clear" } },
          { d: 24, t: "Context + useReducer", tag: "Patterns", topics: ["Global state pattern", "Separate state/dispatch contexts", "Action creators", "Type-safe actions"], project: { n: "App State System", desc: "User auth + cart + theme — all via Context+Reducer pattern" } },
          { d: 25, t: "React Query basics", tag: "Server State", topics: ["useQuery hook", "Automatic caching", "Background refetch", "Stale time config"], project: { n: "Products Page", desc: "Products from API via React Query — auto cache, refresh on focus" } },
          { d: 26, t: "React Query mutations", tag: "Server State", topics: ["useMutation hook", "Optimistic updates", "onSuccess/onError", "Cache invalidation"], project: { n: "Live Todo CRUD", desc: "Full CRUD with React Query mutations, optimistic UI" } },
          { d: 27, t: "Zustand", tag: "State", topics: ["create() store", "get/set pattern", "Slice pattern", "Persist middleware"], project: { n: "Cart with Zustand", desc: "Shopping cart global state with Zustand + localStorage persist" } },
          { d: 28, t: "CRUD Practice Day", tag: "CRUD", topics: ["Full CRUD + global state", "Real API integration", "Loading states per action", "Error handling UI"], project: { n: "Product Manager", desc: "Admin panel — list/create/edit/delete products using React Query" } }
        ]
      },
      {
        title: "Week 5 — Routing & Advanced Patterns",
        days: [
          { d: 29, t: "React Router v6 full", tag: "Router", topics: ["useParams, useNavigate, useLocation", "Nested routes + Outlet", "Search params", "Programmatic navigation"], project: { n: "Blog App", desc: "Home / Category / Post detail — nested routes, dynamic params" } },
          { d: 30, t: "Protected routes & auth flow", tag: "Auth", topics: ["Auth context", "PrivateRoute pattern", "Redirect after login", "Remember redirect URL"], project: { n: "Auth System", desc: "Login → redirect to dashboard, protected routes, logout" } },
          { d: 31, t: "React Hook Form", tag: "Forms", topics: ["register, handleSubmit", "Validation rules", "Error messages", "Watch & setValue"], project: { n: "Complex Form", desc: "Multi-step registration with React Hook Form + Zod validation" } },
          { d: 32, t: "Performance — memo & callback", tag: "Perf", topics: ["React.memo", "useCallback", "useMemo", "Profiler tool"], project: { n: "Big List", desc: "1000 item list — measure then optimize re-renders with memo" } },
          { d: 33, t: "Code splitting & lazy loading", tag: "Perf", topics: ["React.lazy + Suspense", "Route-based splitting", "Dynamic imports", "Loading fallback"], project: { n: "Split App", desc: "Lazy-load each route, measure bundle size before/after" } },
          { d: 34, t: "Error boundaries & Suspense", tag: "Patterns", topics: ["Class-based error boundary", "Reset on error", "Suspense for data", "Concurrent features preview"], project: { n: "Resilient App", desc: "Error boundaries per section, retry button, Suspense skeletons" } },
          { d: 35, t: "CRUD with all patterns", tag: "CRUD", topics: ["React Router + React Query", "Protected routes", "Optimistic CRUD", "Error boundaries"], project: { n: "Expense Tracker", desc: "Full CRUD expense app — auth, routing, React Query, all combined" } }
        ]
      },
      {
        title: "Week 6 — Phase Capstone",
        days: [
          { d: 36, t: "Plan capstone app", tag: "Capstone", topics: ["Feature list", "Component tree diagram", "State architecture plan", "API mock design"], project: { n: "Task Manager App", desc: "Plan full app: auth + projects + tasks + team members" } },
          { d: 37, t: "Auth + user system", tag: "Capstone", topics: ["Login/register flow", "Protected routes", "User context", "Persist auth"], project: { n: "Task Manager App", desc: "Full login/logout with protected dashboard" } },
          { d: 38, t: "Projects CRUD", tag: "Capstone", topics: ["List projects", "Create project modal", "Edit project inline", "Delete with confirm"], project: { n: "Task Manager App", desc: "Full project CRUD with React Query" } },
          { d: 39, t: "Tasks CRUD + drag", tag: "Capstone", topics: ["Tasks per project", "Drag between status", "Assign members", "Due dates"], project: { n: "Task Manager App", desc: "Kanban board with task CRUD per project" } },
          { d: 40, t: "Search + filter + sort", tag: "Capstone", topics: ["Global search", "Filter by status/assignee", "Sort by date/priority", "URL search params"], project: { n: "Task Manager App", desc: "Search/filter/sort working on tasks and projects" } },
          { d: 41, t: "Polish + accessibility", tag: "Capstone", topics: ["Keyboard navigation", "ARIA labels", "Color contrast", "Responsive mobile"], project: { n: "Task Manager App", desc: "A11y audit, mobile-responsive, error boundaries added" } },
          { d: 42, t: "Deploy + review", tag: "Capstone", topics: ["Vercel deploy", "Env variables", "Performance audit", "Portfolio write-up"], project: { n: "Task Manager — Live 🚀", desc: "Deployed, README written, added to portfolio" } }
        ]
      }
    ]
  },
  {
    id: "next",
    label: "Next.js",
    icon: "▲",
    color: "#ffffff",
    iconBg: "#181a1e",
    duration: "5 weeks · Days 43–77",
    desc: "App Router, RSC, Server Actions, Auth, Prisma, full-stack patterns",
    badges: ["App Router", "RSC", "Server Actions", "NextAuth", "Middleware", "ISR", "Prisma"],
    weeks: [
      {
        title: "Week 7 — Next.js Foundations",
        days: [
          { d: 43, t: "App Router & file routing", tag: "Core", topics: ["app/ directory", "layout.tsx, page.tsx, loading.tsx", "Route groups", "Link component"], project: { n: "Portfolio Site", desc: "Home, About, Projects, Contact — file-based routing, shared layout" } },
          { d: 44, t: "Server Components (RSC)", tag: "RSC", topics: ["Default server components", "'use client' directive", "Async server components", "Props to client components"], project: { n: "Blog List", desc: "Server-rendered blog list, client-side like button only" } },
          { d: 45, t: "Data fetching patterns", tag: "Fetch", topics: ["async fetch in server comp", "fetch cache options", "Parallel vs sequential", "Waterfall prevention"], project: { n: "Dashboard", desc: "Parallel fetch: stats + recent orders + users — all server-side" } },
          { d: 46, t: "SSG + ISR", tag: "Rendering", topics: ["generateStaticParams", "Dynamic SSG routes", "revalidate: 60 for ISR", "On-demand revalidation"], project: { n: "Static Blog", desc: "Markdown blog — static at build, revalidate every 60 seconds" } },
          { d: 47, t: "API Routes in App Router", tag: "API", topics: ["route.ts handlers", "GET / POST / PUT / DELETE", "NextResponse helpers", "Dynamic API routes"], project: { n: "Notes REST API", desc: "Full CRUD API: GET /notes, POST, PUT /notes/:id, DELETE" } },
          { d: 48, t: "Error + loading + not-found", tag: "UX", topics: ["error.tsx per segment", "loading.tsx Suspense", "not-found.tsx", "Global error boundary"], project: { n: "Resilient Pages", desc: "Custom 404, per-page error with retry, skeleton loading" } },
          { d: 49, t: "CRUD Practice Day", tag: "CRUD", topics: ["Next.js CRUD from scratch", "API routes + React state", "Server fetch + client mutate", "Revalidation pattern"], project: { n: "Task List", desc: "Full CRUD task app: Next.js API routes + client components" } }
        ]
      },
      {
        title: "Week 8 — Server Actions & Auth",
        days: [
          { d: 50, t: "Server Actions deep dive", tag: "Actions", topics: ["'use server' functions", "Form action prop", "revalidatePath/Tag", "Progressive enhancement"], project: { n: "Comment System", desc: "Add/delete comments via Server Actions — no API route needed" } },
          { d: 51, t: "Optimistic UI with actions", tag: "Actions", topics: ["useOptimistic hook", "Instant UI update", "Rollback on error", "Pending state"], project: { n: "Like Button", desc: "Instant like with optimistic update, server action persists" } },
          { d: 52, t: "NextAuth.js setup", tag: "Auth", topics: ["Auth.js v5 config", "GitHub, Google, Credentials providers", "Session callbacks", "JWT vs database sessions"], project: { n: "OAuth Login", desc: "Login with GitHub + Google, show session in navbar" } },
          { d: 53, t: "Credentials auth + DB", tag: "Auth", topics: ["Credentials provider", "bcrypt password check", "Custom sign-in page", "Auth errors handling"], project: { n: "Email Auth", desc: "Register + login with email/password, custom sign-in UI" } },
          { d: 54, t: "Protected pages + API routes", tag: "Auth", topics: ["getServerSession in server comp", "auth() in API routes", "Role-based page access", "Redirect if unauthenticated"], project: { n: "Protected Dashboard", desc: "Admin vs user roles — different pages, server-side auth check" } },
          { d: 55, t: "Middleware for auth", tag: "Auth", topics: ["middleware.ts setup", "Match routes pattern", "Edge runtime auth", "Redirect matrix"], project: { n: "Auth Middleware", desc: "All /dashboard/* protected at middleware level, instant redirect" } },
          { d: 56, t: "CRUD with Auth", tag: "CRUD", topics: ["User-owned CRUD", "Only author can edit/delete", "Auth in server actions", "Associate data with user"], project: { n: "Personal Blog", desc: "Users create/edit/delete only their posts — auth-protected CRUD" } }
        ]
      },
      {
        title: "Week 9 — Database with Prisma",
        days: [
          { d: 57, t: "Prisma setup + schema", tag: "DB", topics: ["prisma init", "schema.prisma syntax", "Model relations", "prisma migrate dev"], project: { n: "User Schema", desc: "User + Post + Comment schema, migration, Prisma Studio" } },
          { d: 58, t: "Prisma CRUD operations", tag: "CRUD", topics: ["create, findMany, findUnique", "update, delete", "Where filters", "Include relations"], project: { n: "Blog API with Prisma", desc: "Full CRUD blog posts with author relation via Prisma" } },
          { d: 59, t: "Prisma relations deep", tag: "DB", topics: ["1:1, 1:N, N:M relations", "Include nested data", "Cascading deletes", "Select specific fields"], project: { n: "E-commerce Schema", desc: "Products + Categories + Orders + Users with all relation types" } },
          { d: 60, t: "Pagination + search in Prisma", tag: "Queries", topics: ["skip + take pagination", "Cursor pagination", "Full-text search", "OrderBy multiple fields"], project: { n: "Paginated Products", desc: "Paginated product list, search by name, sort by price/date" } },
          { d: 61, t: "Server Actions + Prisma", tag: "Full-stack", topics: ["Server action calls Prisma", "Type-safe form data", "Zod validation before DB", "Cache revalidation"], project: { n: "Forum App", desc: "Post + replies via Server Actions writing to Prisma DB" } },
          { d: 62, t: "Transactions in Prisma", tag: "Advanced", topics: ["prisma.$transaction", "All-or-nothing writes", "Nested creates", "Rollback on failure"], project: { n: "Order System", desc: "Create order + update stock + billing — one transaction" } },
          { d: 63, t: "CRUD Full-stack Day", tag: "CRUD", topics: ["Next.js + Prisma full CRUD", "Server Actions for write", "Server Components for read", "Optimistic updates"], project: { n: "Inventory Manager", desc: "Full CRUD inventory: list/create/edit/delete with Prisma + Server Actions" } }
        ]
      },
      {
        title: "Week 10 — Advanced Next.js",
        days: [
          { d: 64, t: "Streaming + Suspense", tag: "Perf", topics: ["Streaming HTML", "Suspense boundaries", "Loading UI granularity", "Parallel routes"], project: { n: "News Dashboard", desc: "Each section streams independently — headlines, trending, sports" } },
          { d: 65, t: "Image + font optimization", tag: "Perf", topics: ["next/image sizes, priority", "Blur placeholder", "next/font setup", "Font display swap"], project: { n: "Photo Gallery", desc: "Optimized image gallery with blur-up loading, Google Font" } },
          { d: 66, t: "Caching deep dive", tag: "Caching", topics: ["Request memoization", "Data cache", "Full Route cache", "Router cache & revalidate"], project: { n: "Cache Demo", desc: "Show all 4 cache layers, demonstrate each revalidation method" } },
          { d: 67, t: "Internationalization (i18n)", tag: "i18n", topics: ["next-intl setup", "Locale routing", "Translation files", "RTL support basics"], project: { n: "Multilingual App", desc: "English + Urdu language switch with next-intl" } },
          { d: 68, t: "Next.js + tRPC", tag: "API", topics: ["tRPC setup with Next.js", "Type-safe API calls", "Procedures + routers", "tRPC + React Query"], project: { n: "Type-safe Notes", desc: "Full CRUD notes app with tRPC — 100% type-safe end to end" } },
          { d: 69, t: "Testing Next.js", tag: "Testing", topics: ["Vitest + Testing Library", "Test server components", "Mock fetch/auth", "E2E with Playwright"], project: { n: "Test Suite", desc: "Unit + integration tests for auth pages and CRUD routes" } },
          { d: 70, t: "CRUD Practice Day", tag: "CRUD", topics: ["Full Next.js CRUD review", "Auth + DB + Actions", "Performance + caching", "Combine all patterns"], project: { n: "Recipe App", desc: "Full recipe CRUD: auth, Prisma, Server Actions, optimistic UI, cached" } }
        ]
      },
      {
        title: "Week 11 — Phase Capstone",
        days: [
          { d: 71, t: "Plan e-commerce app", tag: "Capstone", topics: ["Schema: User/Product/Order/Review", "Auth roles: buyer/seller/admin", "Feature list", "Tech decisions"], project: { n: "Next Shop", desc: "Full e-commerce — plan every layer" } },
          { d: 72, t: "Product catalog", tag: "Capstone", topics: ["SSG product pages", "Paginated listing", "Filter + search", "Category pages"], project: { n: "Next Shop", desc: "Product listing with ISR, search, filter by category/price" } },
          { d: 73, t: "Auth + user accounts", tag: "Capstone", topics: ["Register/login (credentials)", "Profile page", "Address management", "Session everywhere"], project: { n: "Next Shop", desc: "Full auth: email login, profile CRUD, saved addresses" } },
          { d: 74, t: "Cart + checkout", tag: "Capstone", topics: ["Cart via Zustand + DB", "Checkout form", "Order creation", "Stock decrement transaction"], project: { n: "Next Shop", desc: "Cart persist, checkout flow, Prisma order transaction" } },
          { d: 75, t: "Admin dashboard", tag: "Capstone", topics: ["Admin-only routes", "CRUD all products", "Order management", "Sales stats"], project: { n: "Next Shop", desc: "Admin panel: product CRUD, order status update, dashboard stats" } },
          { d: 76, t: "Reviews + search + emails", tag: "Capstone", topics: ["Product reviews CRUD", "Full-text product search", "Order email", "Resend email service"], project: { n: "Next Shop", desc: "Reviews, search, confirmation emails on order" } },
          { d: 77, t: "Deploy + performance audit", tag: "Capstone", topics: ["Vercel deploy + env", "Lighthouse audit", "Bundle analysis", "README + portfolio"], project: { n: "Next Shop — Live 🚀", desc: "Production e-commerce, audited, documented, in portfolio" } }
        ]
      }
    ]
  },
  {
    id: "node",
    label: "Node + Express",
    icon: "⬡",
    color: "#68a063",
    iconBg: "#0b1a0b",
    duration: "5 weeks · Days 78–112",
    desc: "REST APIs, auth, file handling, testing, real-world architecture",
    badges: ["Express", "JWT", "bcrypt", "Joi/Zod", "Multer", "Jest", "Supertest", "Winston"],
    weeks: [
      {
        title: "Week 12 — Node & Express Core",
        days: [
          { d: 78, t: "Node.js fundamentals", tag: "Core", topics: ["Event loop deep dive", "CommonJS + ES modules", "fs, path, os modules", "Streams basics"], project: { n: "File CLI Tool", desc: "CLI: read/write/copy/delete files using Node fs — no npm" } },
          { d: 79, t: "HTTP server from scratch", tag: "Core", topics: ["http.createServer", "Parse URL manually", "Manual routing", "Send JSON responses"], project: { n: "Raw HTTP Server", desc: "CRUD API with zero npm — just Node built-ins, manual routing" } },
          { d: 80, t: "Express setup & routing", tag: "Express", topics: ["app setup, middleware order", "Route params & query strings", "Express Router", "Route groups"], project: { n: "Books REST API", desc: "Full CRUD books: GET/POST/PUT/DELETE with in-memory store" } },
          { d: 81, t: "Middleware deep dive", tag: "Express", topics: ["Request pipeline visualization", "Custom middleware", "Error-catching middleware", "Third-party: morgan, helmet"], project: { n: "Middleware Stack", desc: "Build logger, request-timer, IP-blocker custom middleware" } },
          { d: 82, t: "Request validation", tag: "Validation", topics: ["Zod / Joi schemas", "Validate body/params/query", "Reusable validate middleware", "Return structured errors"], project: { n: "Validated API", desc: "All Book API routes validate input with Zod, structured errors" } },
          { d: 83, t: "Error handling system", tag: "Errors", topics: ["AppError class", "Async wrapper utility", "Global error middleware", "HTTP status code guide"], project: { n: "Error System", desc: "Custom AppError, async wrapper, global handler for all routes" } },
          { d: 84, t: "CRUD Practice Day", tag: "CRUD", topics: ["Express CRUD from scratch", "In-memory → file-based store", "Validation + error handling", "Postman collection"], project: { n: "Contacts REST API", desc: "Full CRUD: contacts with validation, errors, tested in Postman" } }
        ]
      },
      {
        title: "Week 13 — Database Integration",
        days: [
          { d: 85, t: "Connect Express to MongoDB", tag: "DB", topics: ["mongoose.connect()", "Connection events", "Config from env", "Connection pooling"], project: { n: "DB Connected API", desc: "Books API now persists to MongoDB Atlas instead of memory" } },
          { d: 86, t: "Models & CRUD with Mongoose", tag: "DB", topics: ["Schema design", "Validation in schema", "All Mongoose CRUD methods", "Pre-save hooks"], project: { n: "Products API", desc: "Products with schema validation, CRUD, timestamps, virtuals" } },
          { d: 87, t: "Relations in Express + Mongoose", tag: "DB", topics: ["Reference vs embed", "populate() in routes", "Author + posts relation", "Cascade delete logic"], project: { n: "Blog API", desc: "Posts with author reference, populate on GET, cascade delete" } },
          { d: 88, t: "Query features", tag: "DB", topics: ["Pagination (page+limit)", "Sort, filter, search", "Select fields", "countDocuments"], project: { n: "Product Search API", desc: "Paginated, sorted, filtered products — all via query params" } },
          { d: 89, t: "Aggregation in routes", tag: "DB", topics: ["$lookup in routes", "Group stats endpoint", "Date-range aggregation", "Pipeline in controller"], project: { n: "Analytics Routes", desc: "GET /stats — daily signups, revenue by category, top items" } },
          { d: 90, t: "Transactions in Express", tag: "DB", topics: ["Mongoose sessions", "Transaction across models", "Rollback on error", "When to use transactions"], project: { n: "Transfer API", desc: "POST /transfer — debit + credit + log in one transaction" } },
          { d: 91, t: "CRUD + DB Practice", tag: "CRUD", topics: ["Full REST API with MongoDB", "Relations, pagination, search", "Aggregation stats route", "All CRUD tested"], project: { n: "Library API", desc: "Books + Authors + Borrowers — full relational CRUD with pagination" } }
        ]
      },
      {
        title: "Week 14 — Authentication & Security",
        days: [
          { d: 92, t: "JWT auth from scratch", tag: "Auth", topics: ["JWT structure: header.payload.sig", "jsonwebtoken sign/verify", "Access token flow", "Store in header"], project: { n: "Auth API v1", desc: "Register + Login → JWT. Verify token in protected route." } },
          { d: 93, t: "Refresh tokens", tag: "Auth", topics: ["Short-lived access token", "Long-lived refresh token", "Rotate on use", "Store refresh in httpOnly cookie"], project: { n: "Auth API v2", desc: "Refresh token flow: httpOnly cookie, rotate on /refresh" } },
          { d: 94, t: "bcrypt & password security", tag: "Security", topics: ["bcrypt rounds", "Pre-save hash", "Compare on login", "Never return password"], project: { n: "Secure User API", desc: "All passwords hashed, login compare, password change endpoint" } },
          { d: 95, t: "Role-based access control", tag: "Auth", topics: ["User roles: admin/user/mod", "authorize middleware", "Resource ownership check", "Role hierarchy"], project: { n: "RBAC System", desc: "Admin CRUD all, user only own data, mod approve posts" } },
          { d: 96, t: "Security hardening", tag: "Security", topics: ["Helmet.js headers", "CORS config", "Rate limiting", "NoSQL injection prevention"], project: { n: "Hardened Server", desc: "Full security stack: helmet, cors, rate limit, sanitize input" } },
          { d: 97, t: "OAuth2 with Passport.js", tag: "Auth", topics: ["Passport setup", "GitHub strategy", "Google strategy", "Link social to local account"], project: { n: "Social Auth API", desc: "Login with GitHub + Google, merge with local account" } },
          { d: 98, t: "Auth CRUD Practice", tag: "CRUD", topics: ["Protected CRUD routes", "User-owned resources", "Admin routes", "Auth tests"], project: { n: "Private Notes API", desc: "Each user only sees/edits own notes — ownership enforced at every route" } }
        ]
      },
      {
        title: "Week 15 — Advanced Express",
        days: [
          { d: 99, t: "File uploads with Multer", tag: "Files", topics: ["Single + array uploads", "Disk vs memory storage", "File type + size validation", "Cloudinary API integration"], project: { n: "Media Upload API", desc: "Upload images, validate, store on Cloudinary, return URL" } },
          { d: 100, t: "Email service", tag: "Email", topics: ["Nodemailer / Resend setup", "HTML email templates", "Welcome, reset password emails", "Queue emails (BullMQ intro)"], project: { n: "Email System", desc: "Register → welcome email, forgot password → reset link" } },
          { d: 101, t: "Caching with Redis", tag: "Perf", topics: ["Redis setup (Upstash)", "Cache-aside pattern", "TTL strategy", "Invalidate on update"], project: { n: "Cached Products API", desc: "Cache product list — serve from Redis, invalidate on POST/PUT" } },
          { d: 102, t: "Background jobs with BullMQ", tag: "Jobs", topics: ["Queue + worker pattern", "Job retries + delays", "Email queue", "Report generation job"], project: { n: "Job Queue", desc: "Send emails via BullMQ queue — decouple from request cycle" } },
          { d: 103, t: "API versioning", tag: "Design", topics: ["URL versioning /api/v1", "Header versioning", "Version router pattern", "Deprecation strategy"], project: { n: "Versioned Books API", desc: "v1 and v2 coexist — v2 adds new fields, old clients unaffected" } },
          { d: 104, t: "WebSockets with Socket.io", tag: "Realtime", topics: ["socket.io server setup", "Rooms + namespaces", "Emit patterns", "Auth with socket middleware"], project: { n: "Chat Server", desc: "Real-time chat rooms, online users list, auth via token in socket" } },
          { d: 105, t: "CRUD + Advanced Features", tag: "CRUD", topics: ["File upload + CRUD", "Email on create", "Cache on list", "Background job on update"], project: { n: "Product API Full", desc: "Products with image upload, email alert, Redis cache, BullMQ job" } }
        ]
      },
      {
        title: "Week 16 — Testing & Production",
        days: [
          { d: 106, t: "Jest + Supertest", tag: "Testing", topics: ["Jest setup", "Supertest HTTP testing", "Test each route", "beforeEach DB reset"], project: { n: "Auth Route Tests", desc: "Full test coverage: register, login, token verify, refresh" } },
          { d: 107, t: "Integration test patterns", tag: "Testing", topics: ["Test DB (separate)", "Seed test data", "Test CRUD flow", "Mock external services"], project: { n: "Blog API Tests", desc: "End-to-end test: create user → create post → comment → delete" } },
          { d: 108, t: "API documentation", tag: "Docs", topics: ["Swagger / OpenAPI spec", "swagger-ui-express", "JSDoc + swagger-jsdoc", "Export Postman collection"], project: { n: "Documented API", desc: "Full Swagger UI for Blog API — every route documented + try it" } },
          { d: 109, t: "Logging & monitoring", tag: "Ops", topics: ["Winston structured logs", "Morgan HTTP logs", "Sentry error tracking", "Log levels in prod vs dev"], project: { n: "Logged Server", desc: "Every request logged with id, duration, status. Sentry for errors." } },
          { d: 110, t: "PM2 + clustering", tag: "DevOps", topics: ["PM2 setup", "Cluster mode (all cores)", "Graceful shutdown", "ecosystem.config.js"], project: { n: "Production Server", desc: "App running with PM2, cluster mode, auto-restart on crash" } },
          { d: 111, t: "Docker for Node apps", tag: "DevOps", topics: ["Dockerfile for Express", "docker-compose Node+Mongo", "Multi-stage builds", "Volumes for DB"], project: { n: "Dockerized App", desc: "Express + MongoDB in docker-compose, one command to run all" } },
          { d: 112, t: "Phase Capstone — Social API", tag: "Capstone", topics: ["Users, posts, comments, likes", "Follow system", "Feed aggregation", "Full test suite"], project: { n: "Social REST API 🚀", desc: "Complete social platform backend — tested, documented, dockerized" } }
        ]
      }
    ]
  },
  {
    id: "mongo",
    label: "MongoDB",
    icon: "🍃",
    color: "#47a248",
    iconBg: "#091509",
    duration: "4 weeks · Days 113–140",
    desc: "Deep Mongoose, aggregation pipelines, indexing, transactions",
    badges: ["Mongoose", "Aggregation", "Indexes", "Transactions", "Atlas Search", "GridFS"],
    weeks: [
      {
        title: "Week 17 — Mongoose Deep Dive",
        days: [
          { d: 113, t: "Schema design principles", tag: "Schema", topics: ["Embed vs reference decision", "Schema patterns: bucket, tree", "Polymorphic schemas", "Schema versioning"], project: { n: "E-commerce Schema", desc: "Design User + Product + Order + Review with proper embed/ref decisions" } },
          { d: 114, t: "Advanced validators", tag: "Schema", topics: ["Custom validator functions", "Cross-field validation", "Async validators", "Error message customization"], project: { n: "User Profile Schema", desc: "Age validation, unique username async check, email format" } },
          { d: 115, t: "Virtuals & instance methods", tag: "Mongoose", topics: ["Virtual fields (get/set)", "Instance methods", "Static methods", "toJSON / toObject transforms"], project: { n: "User Model", desc: "fullName virtual, comparePassword method, toJSON hides password" } },
          { d: 116, t: "Middleware hooks deep", tag: "Mongoose", topics: ["pre/post for find queries", "Middleware chains", "Error in middleware", "populate in post-find"], project: { n: "Audit Log System", desc: "Auto-log every save/delete to AuditLog model via post hooks" } },
          { d: 117, t: "Query helpers & chaining", tag: "Queries", topics: ["Custom query helpers", "Chained queries", "Lean() for performance", "select/populate/sort chain"], project: { n: "Advanced Product Query", desc: "Chainable query builder: filter + sort + paginate + populate" } },
          { d: 118, t: "Discriminators (polymorphism)", tag: "Advanced", topics: ["Base schema + discriminator", "Single collection, multiple types", "Discriminator key", "Query by type"], project: { n: "Notification System", desc: "Notification base: EmailNotif + PushNotif + SMSNotif discriminators" } },
          { d: 119, t: "CRUD Deep Practice", tag: "CRUD", topics: ["Complex CRUD with Mongoose", "Custom methods in routes", "Middleware-enhanced save", "Lean vs full document"], project: { n: "Advanced Blog API", desc: "Posts with categories + tags + author + custom methods + query helpers" } }
        ]
      },
      {
        title: "Week 18 — Aggregation Mastery",
        days: [
          { d: 120, t: "Aggregation pipeline core", tag: "Aggregation", topics: ["$match, $group, $sort, $project", "$limit, $skip", "$unwind arrays", "Pipeline order matters"], project: { n: "Order Analytics", desc: "Total revenue, orders per day, average order value — all aggregation" } },
          { d: 121, t: "$lookup — joins", tag: "Aggregation", topics: ["$lookup syntax", "Pipeline $lookup", "Multiple lookups", "from, localField, foreignField"], project: { n: "User Orders Report", desc: "Get users with their orders and product details — $lookup chain" } },
          { d: 122, t: "Advanced aggregation", tag: "Aggregation", topics: ["$facet for multi-pipeline", "$bucket / $bucketAuto", "$addFields, $replaceRoot", "Conditional: $cond, $switch"], project: { n: "Product Report", desc: "Faceted: price ranges + category counts + top sellers in one query" } },
          { d: 123, t: "Aggregation for search & rank", tag: "Aggregation", topics: ["$search (Atlas Search)", "$score for ranking", "Autocomplete pipeline", "Compound search operators"], project: { n: "Search Engine", desc: "Full-text search with ranking, autocomplete, filter combined" } },
          { d: 124, t: "Date aggregation", tag: "Aggregation", topics: ["$dateToString, $dateTrunc", "Group by week/month/year", "Date range filters", "Timezone handling"], project: { n: "Time-series Report", desc: "Monthly signups, weekly sales, year-over-year comparison" } },
          { d: 125, t: "Aggregation performance", tag: "Perf", topics: ["$match early in pipeline", "Index use in aggregation", "allowDiskUse for large sets", "explain() for pipelines"], project: { n: "Pipeline Optimizer", desc: "Take slow pipeline, explain, add indexes, measure speedup" } },
          { d: 126, t: "CRUD + Aggregation Practice", tag: "CRUD", topics: ["CRUD + live aggregation stats", "Aggregation in API routes", "Cached aggregation results", "Scheduled aggregation jobs"], project: { n: "Dashboard API", desc: "Full dashboard: CRUD products + aggregated stats + cached results" } }
        ]
      },
      {
        title: "Week 19 — Indexing & Performance",
        days: [
          { d: 127, t: "Index types deep dive", tag: "Indexes", topics: ["Single + compound indexes", "Multikey for arrays", "Text indexes", "Sparse + partial indexes"], project: { n: "Indexed Products", desc: "Add strategic indexes, measure query time with explain()" } },
          { d: 128, t: "Index strategy", tag: "Indexes", topics: ["ESR rule (equality, sort, range)", "Covered queries", "Index intersection", "When NOT to index"], project: { n: "Query Optimizer", desc: "Given 5 slow queries, design optimal index for each" } },
          { d: 129, t: "Read/write performance", tag: "Perf", topics: ["lean() for reads", "projection to limit fields", "writeConcern for writes", "Connection pool tuning"], project: { n: "High-perf API", desc: "Products API: lean reads, projection, connection pool config" } },
          { d: 130, t: "Change streams & real-time", tag: "Advanced", topics: ["collection.watch()", "Full document on change", "Resume after disconnect", "Trigger actions on change"], project: { n: "Live Feed", desc: "Watch orders collection — push new orders to client via Socket.io" } },
          { d: 131, t: "Geospatial Queries", tag: "DB", topics: ["2dsphere index", "$near", "$geoWithin", "Polygon queries"], project: { n: "Store Finder", desc: "Find nearest stores based on coordinates, query MongoDB with location" } },
          { d: 132, t: "GridFS for File Storage", tag: "DB", topics: ["GridFS storage engine", "Chunks and files collections", "Streaming large files from MongoDB"], project: { n: "PDF Library", desc: "Upload and stream large PDFs to/from MongoDB" } },
          { d: 133, t: "CRUD Practice Day", tag: "CRUD", topics: ["Geospatial CRUD", "Index optimization", "Query planning reviews"], project: { n: "Location Tracker", desc: "Add, update, delete geolocations, find nearest coordinate" } }
        ]
      },
      {
        title: "Week 20 — Phase Capstone",
        days: [
          { d: 134, t: "Social App Schema Design", tag: "Capstone", topics: ["User, Post, Comment, Like schemas", "Follow system design", "Feed architecture", "Index planning"], project: { n: "Social App", desc: "Schema design for full social media app" } },
          { d: 135, t: "Auth + Profile API", tag: "Capstone", topics: ["Register/Login with JWT", "Profile update endpoint", "Avatar upload", "Public profile route"], project: { n: "Social App", desc: "Full auth system + profile CRUD" } },
          { d: 136, t: "Posts & Feed", tag: "Capstone", topics: ["Create/delete posts", "Feed aggregation pipeline", "Like/unlike toggle", "Pagination with cursor"], project: { n: "Social App", desc: "Post CRUD, like system, paginated feed query" } },
          { d: 137, t: "Follow System & Comments", tag: "Capstone", topics: ["Follow/unfollow logic", "Followers/following lists", "Comment CRUD", "Nested comments"], project: { n: "Social App", desc: "Follow system + threaded comments" } },
          { d: 138, t: "Real-time Notifications", tag: "Capstone", topics: ["Change streams + Socket.io", "Real-time message alerts", "Read/unread states"], project: { n: "Social App", desc: "Instant notifications when followed or liked" } },
          { d: 139, t: "Search & Polish", tag: "Capstone", topics: ["Text search index", "User/post search", "Rate limiting all routes", "Full test suite"], project: { n: "Social App", desc: "Search, full tests, all routes secured and validated" } },
          { d: 140, t: "Deploy + Portfolio", tag: "Capstone", topics: ["Production deployment", "MongoDB Atlas scaling", "Index audit", "README"], project: { n: "Social App — Live 🚀", desc: "Deploy and write portfolio description" } }
        ]
      }
    ]
  },
  {
    id: "apis",
    label: "APIs & Production",
    icon: "⚡",
    color: "#f59e0b",
    iconBg: "#1a1200",
    duration: "6 weeks · Days 141–182",
    desc: "API design mastery, payments, CI/CD, Docker, monitoring, capstone",
    badges: ["REST Design", "Stripe", "GitHub Actions", "Docker", "Redis", "Sentry", "tRPC"],
    weeks: [
      {
        title: "Week 21 — API Design Mastery",
        days: [
          { d: 141, t: "REST best practices deep", tag: "Design", topics: ["Naming conventions", "HATEOAS links", "Versioning strategies", "Idempotency keys"], project: { n: "Versioned Blog API", desc: "Refactor to v1/v2 with HATEOAS links, idempotent POST" } },
          { d: 142, t: "GraphQL intro", tag: "GraphQL", topics: ["Schema + resolvers", "Query vs Mutation", "Apollo Server setup", "Compare to REST"], project: { n: "GraphQL Posts", desc: "Posts + Users in GraphQL — query, mutation, nested resolver" } },
          { d: 143, t: "Webhooks", tag: "Integration", topics: ["Incoming webhook handler", "HMAC signature verify", "Webhook retry logic", "Event queue from webhook"], project: { n: "Webhook Handler", desc: "GitHub webhook → create deployment log. Verify signature." } },
          { d: 144, t: "Rate limiting strategies", tag: "Security", topics: ["Fixed window", "Sliding window", "Token bucket", "Redis-based rate limit"], project: { n: "Rate Limited API", desc: "Different limits per route: public 30/min, auth 300/min, admin unlimited" } },
          { d: 145, t: "API gateway pattern", tag: "Architecture", topics: ["Single entry point", "Route to microservices", "Auth at gateway", "Request aggregation"], project: { n: "Gateway Server", desc: "Proxy /users to user-service, /orders to order-service" } },
          { d: 146, t: "Third-party API integration", tag: "Integration", topics: ["Axios interceptors", "Retry on failure", "Circuit breaker pattern", "API key rotation"], project: { n: "Aggregator API", desc: "Fetch from 3 APIs, merge data, cache, expose as one endpoint" } },
          { d: 147, t: "Full API Design Practice", tag: "CRUD", topics: ["Design from scratch", "All REST conventions", "Docs with Swagger", "Test full API"], project: { n: "Event Booking API", desc: "Events + Tickets + Users — full REST API with all best practices" } }
        ]
      },
      {
        title: "Week 22 — Payments & Real-time",
        days: [
          { d: 148, t: "Stripe payments", tag: "Payments", topics: ["Payment intent flow", "Checkout session", "Webhook for fulfillment", "Test card numbers"], project: { n: "Payment API", desc: "Create intent → confirm → fulfill on webhook. Full Stripe flow." } },
          { d: 149, t: "Subscription billing", tag: "Payments", topics: ["Stripe subscriptions", "Plan tiers", "Cancellation flow", "Usage-based billing"], project: { n: "SaaS Billing", desc: "Monthly + annual plans, upgrade/downgrade, cancel with Stripe" } },
          { d: 150, t: "WebSockets real-time", tag: "Realtime", topics: ["Socket.io rooms", "Authentication in sockets", "Reconnection logic", "Broadcast patterns"], project: { n: "Live Auction", desc: "Real-time bidding: broadcast new bids, countdown timer, winner" } },
          { d: 151, t: "Server-sent events (SSE)", tag: "Realtime", topics: ["SSE vs WebSockets", "Unidirectional push", "text/event-stream headers"], project: { n: "Real-time Stock Ticker", desc: "Server-pushed stock price changes to client" } },
          { d: 152, t: "Real-time Pub/Sub with Redis", tag: "Realtime", topics: ["Redis Pub/Sub", "Scaling WebSockets", "Horizontal scaling with socket.io-redis"], project: { n: "Scalable Chat App", desc: "Real-time updates synced across multiple node processes via Redis" } },
          { d: 153, t: "WebRTC basics", tag: "Realtime", topics: ["Peer-to-peer connection", "STUN/TURN servers", "Signaling channel"], project: { n: "Video Chat App", desc: "One-to-one video call using simple-peer and Socket.io signaling" } },
          { d: 154, t: "CRUD Practice Day", tag: "CRUD", topics: ["Payments + real-time notifications", "Webhook security", "Event logs"], project: { n: "Stripe Checkout with Live Alerts", desc: "User pays on Stripe, server processes webhook, notifies frontend via WebSockets" } }
        ]
      },
      {
        title: "Week 23 — CI/CD & Cloud Deployment",
        days: [
          { d: 155, t: "Docker deep dive", tag: "DevOps", topics: ["Dockerfile", "docker-compose", "Caching layers", "Multi-stage builds"], project: { n: "Microservices Setup", desc: "Dockerize Next.js, Express, and MongoDB, verify inter-container networking" } },
          { d: 156, t: "GitHub Actions CI", tag: "DevOps", topics: ["Workflow YAML", "Triggers", "Matrix builds", "Caching dependencies"], project: { n: "CI Pipeline", desc: "Configure GitHub Actions to lint, test, and build the roadmap codebase" } },
          { d: 157, t: "CD Pipeline", tag: "DevOps", topics: ["Deploy keys", "Secret variables", "SSH deploy", "Vercel/Render APIs"], project: { n: "CD to Render/Vercel", desc: "Automated deployment on successful merge to main" } },
          { d: 158, t: "Cloud Infrastructure (AWS/GCP)", tag: "DevOps", topics: ["VPC", "EC2/VM instances", "Security Groups", "IAM Roles"], project: { n: "Manual VPS Deploy", desc: "Provision an Ubuntu VPS on AWS/DigitalOcean, setup Nginx reverse proxy" } },
          { d: 159, t: "Serverless APIs", tag: "Cloud", topics: ["AWS Lambda", "Google Cloud Functions", "Serverless Framework / SST"], project: { n: "Serverless Image Processor", desc: "Trigger Lambda function to resize image uploaded to S3" } },
          { d: 160, t: "API Performance Tuning", tag: "Perf", topics: ["Gzip compression", "HTTP/2", "Database query optimization", "Load balancing"], project: { n: "Load Testing Suite", desc: "Load test Express API with Autocannon, optimize slow database queries" } },
          { d: 161, t: "CRUD Practice Day", tag: "CRUD", topics: ["Fully dockerized CRUD API", "CI/CD deployed CRUD API", "Environment variable management"], project: { n: "Secure API Deployment", desc: "Deploy full CRUD app to production with complete CI/CD and SSL certificate" } }
        ]
      },
      {
        title: "Week 24 — Monitoring, Logging & Security",
        days: [
          { d: 162, t: "Advanced Logging", tag: "Ops", topics: ["Structured logging", "Winston", "Morgan", "Log rotation"], project: { n: "Logger Service", desc: "Setup centralized logging for multi-service application with Datadog/Logtail" } },
          { d: 163, t: "Error Tracking & Monitoring", tag: "Ops", topics: ["Sentry integration", "Source maps", "Error grouping", "Performance monitoring"], project: { n: "Sentry Audit", desc: "Integrate Sentry into Next.js/Express, verify error alert channels" } },
          { d: 164, t: "System Health & Metrics", tag: "Ops", topics: ["Prometheus", "Grafana", "Custom metrics", "Health check endpoints"], project: { n: "Metrics Dashboard", desc: "Expose Prometheus metrics from Express, visualize in Grafana" } },
          { d: 165, t: "API Security Audit", tag: "Security", topics: ["OWASP Top 10", "SQL/NoSQL Injection", "XSS", "CSRF", "Dependency vulnerability checking"], project: { n: "Security Hardening", desc: "Run security audit, fix vulnerabilities, add security headers" } },
          { d: 166, t: "Rate Limiting & DDOS Protection", tag: "Security", topics: ["Cloudflare integration", "WAF rules", "IP blocking", "Redis token bucket"], project: { n: "Protected Gateway", desc: "Setup API gateway with Cloudflare DNS + Redis-backed rate limiter" } },
          { d: 167, t: "Database Backups & Recovery", tag: "Ops", topics: ["Automated mongodump", "Cron jobs", "AWS S3 backup storage", "Restore testing"], project: { n: "Backup Script", desc: "Shell script to backup database every night, upload to S3, notify on Slack" } },
          { d: 168, t: "CRUD Practice Day", tag: "CRUD", topics: ["Secure, monitored CRUD", "Backup scripts", "Sentry testing"], project: { n: "Production-Ready API", desc: "Secure API with rate limiting, logging, Sentry, and daily backups" } }
        ]
      },
      {
        title: "Week 25 — System Architecture & Design",
        days: [
          { d: 169, t: "Microservices Architecture", tag: "Architecture", topics: ["Monolith vs Microservices", "Service discovery", "HTTP vs gRPC vs Message Broker"], project: { n: "Microservices Auth", desc: "Split user auth into a separate service" } },
          { d: 170, t: "Event-Driven Systems", tag: "Architecture", topics: ["Message queues", "RabbitMQ", "Apache Kafka", "Publish-subscribe model"], project: { n: "Notification Broker", desc: "Send email notifications asynchronously using RabbitMQ/Kafka" } },
          { d: 171, t: "API Design Patterns", tag: "Design", topics: ["CQRS pattern", "Event Sourcing", "Backend for Frontend (BFF)"], project: { n: "BFF Gateway", desc: "Next.js acting as BFF for mobile and web clients, consolidating backend microservices" } },
          { d: 172, t: "Caching Strategies", tag: "Perf", topics: ["Cache-aside", "Write-through / Write-behind", "Cache invalidation patterns"], project: { n: "Distributed Caching", desc: "Setup multi-tier caching: CDN + Redis + In-memory" } },
          { d: 173, t: "GraphQL Advanced", tag: "GraphQL", topics: ["Dataloader", "N+1 query problem", "Schema stitching", "Federated GraphQL"], project: { n: "GraphQL Gateway", desc: "Federated GraphQL API merging auth, products, and order services" } },
          { d: 174, t: "Testing Production Systems", tag: "Testing", topics: ["E2E Testing", "Playwright", "Mock Service Worker (MSW)", "Chaos engineering"], project: { n: "Chaos Test Suite", desc: "Write E2E tests with Playwright, simulate network failures" } },
          { d: 175, t: "CRUD Practice Day", tag: "CRUD", topics: ["Microservices communication", "API gateway consolidation", "Transactional outbox pattern"], project: { n: "Microservices Order System", desc: "Place order, notify user, update inventory across three microservices" } }
        ]
      },
      {
        title: "Week 26 — Final Phase Capstone",
        days: [
          { d: 176, t: "Plan Capstone Application", tag: "Capstone", topics: ["System design diagram", "Database schema design", "Architectural choices", "Technology stack selection"], project: { n: "ScaleApp", desc: "Plan a highly scalable real-time collaboration platform: Trello + Slack clone" } },
          { d: 177, t: "Monorepo Setup & Core Services", tag: "Capstone", topics: ["Turborepo / Nx setup", "Shared TypeScript configs", "Shared UI library", "Auth service"], project: { n: "ScaleApp", desc: "Set up Turborepo, create Auth service & shared packages" } },
          { d: 178, t: "Real-time Communication & Database", tag: "Capstone", topics: ["Real-time board sync (Socket.io)", "Database connection", "Schema migration"], project: { n: "ScaleApp", desc: "Live collaboration board with Prisma and Redis adapter" } },
          { d: 179, t: "Media Handling & Serverless", tag: "Capstone", topics: ["Cloud storage", "Presigned URLs", "Thumbnail generator function"], project: { n: "ScaleApp", desc: "Drag & drop file upload with S3 presigned URLs, lambda processing" } },
          { d: 180, t: "Monitoring, Logging & Security", tag: "Capstone", topics: ["Winston logs", "Sentry alerts", "Prometheus metrics", "Rate limiting"], project: { n: "ScaleApp", desc: "Hardened gateway, Sentry integrated, CPU/Memory alerts" } },
          { d: 181, t: "CI/CD & Deploy", tag: "Capstone", topics: ["GitHub Actions", "Docker-compose", "Production deploy"], project: { n: "ScaleApp", desc: "Deploy monorepo to production" } },
          { d: 182, t: "Polish, Portfolio & Presentation", tag: "Capstone", topics: ["Lighthouse optimization", "Accessibility audit", "README documentation", "Portfolio case study"], project: { n: "ScaleApp — Live 🚀", desc: "Fully documented, optimized, deployed, with architecture diagram" } }
        ]
      }
    ]
  }
];
