# Next.js 15 Fullstack Setup Guide

This guide will help you set up a modern Next.js 15 fullstack project from scratch, including UI libraries (Shadcn, Radix UI, Lucide), authentication (NextAuth.js), and a database with Prisma.

---

## 1. Create a New Next.js Project

Run:

```sh
npx create-next-app@latest
```

**Recommended answers:**

- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: Yes
- App Router: Yes
- Customize import alias: No

---

## 2. Install Tailwind CSS

Follow the [Tailwind CSS Next.js guide](https://tailwindcss.com/docs/guides/nextjs):

```sh
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: { extend: {} },
    plugins: [],
}
```

---

## 3. Install UI Libraries

```sh
npm install shadcn@latest @radix-ui/react-icons lucide-react
npx shadcn-ui@latest init
```

---

## 4. Install NextAuth.js, Prisma, and Database Client

```sh
npm install next-auth @prisma/client
npm install -D prisma
```

---

## 5. Initialize Prisma

```sh
npx prisma init
```

---

## 6. Configure Your Database

- **PostgreSQL** (recommended):

    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```

- **SQLite** (local):

    ```env
    DATABASE_URL="file:./dev.db"
    ```

---

## 7. Define Prisma Models

Example `prisma/schema.prisma`:

```prisma
model User {
    id    String  @id @default(cuid())
    name  String?
    email String? @unique
}
```

---

## 8. Migrate the Database

```sh
npx prisma migrate dev --name init
```

---

## 9. Set Up NextAuth.js

Create `src/app/api/auth/[...nextauth]/route.ts` and configure NextAuth.js with the Prisma adapter.

---

## 10. Install Prisma Adapter

```sh
npm install @next-auth/prisma-adapter
```

---

## 11. Example NextAuth.js Configuration

```ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

---

## 12. Environment Variables

Add to `.env`:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

---

## 13. Useful Commands

- Start dev server: `npm run dev`
- Run migrations: `npx prisma migrate dev`
- Open Prisma Studio: `npx prisma studio`

---

## 14. UI Libraries

- **Shadcn**: [shadcn/ui docs](https://ui.shadcn.com/)
- **Radix UI**: [Radix UI docs](https://www.radix-ui.com/)
- **Lucide**: [Lucide docs](https://lucide.dev/)

---

## 15. Highly Recommended Additions

### State Management

- **Zustand**: Simple state management.

    ```sh
    npm install zustand
    ```

### Form Handling & Validation

- **React Hook Form**:

    ```sh
    npm install react-hook-form
    ```

- **Zod** and **@hookform/resolvers**:

    ```sh
    npm install zod @hookform/resolvers
    ```

### Data Fetching

- **SWR**:

    ```sh
    npm install swr
    ```

- **React Query**:

    ```sh
    npm install @tanstack/react-query
    ```

### Charts & Data Visualization

- **Nivo**:

    ```sh
    npm install @nivo/core @nivo/bar @nivo/line @nivo/pie
    ```

- **Recharts**:

    ```sh
    npm install recharts
    ```

### Date Utilities

- **date-fns**:

    ```sh
    npm install date-fns
    ```

### Testing

- **Jest** and **React Testing Library**:

    ```sh
    npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
    ```

### Linting & Formatting

- **Prettier**:

    ```sh
    npm install -D prettier
    ```

- **eslint-plugin-tailwindcss** (check Tailwind v4 support):

    ```sh
    npm install -D eslint-plugin-tailwindcss
    ```

### Optional: Internationalization

- **next-intl** or **react-i18next** for multi-language support.

---

## 16. Resources

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Prisma Docs](https://www.prisma.io/docs/)
- [Next.js Docs](https://nextjs.org/docs)
