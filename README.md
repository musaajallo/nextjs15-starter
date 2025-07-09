---

## 🆕 Starting a New Project from This Starter

To create a new project from this starter using GitHub:

```sh
git clone https://github.com/musaajallo/nextjs15-starter.git my-new-project
cd my-new-project
rm -rf .git
git init
npm install
```

- Replace `my-new-project` with your desired folder name.
- This copies the code, removes the old git history, and sets up a fresh repo for your new project.

# Next.js 15 Fullstack Starter

This is a modern, batteries-included starter for building fullstack apps with:

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (utility-first styling)
- **shadcn/ui** (beautiful, customizable UI components)
- **Radix UI** (accessible UI primitives)
- **Lucide** (icon library)
- **NextAuth.js** (authentication)
- **Prisma** (ORM for PostgreSQL, SQLite, etc.)

---

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Using as a Starter for Your Project

1. **Clean up demo content:**
   - Remove or update the homepage and demo components.
   - Update `README.md` and `docs/` with your own info.
2. **Initialize a new git repo:**
   - Delete the `.git` folder (if present):

     ```sh
     rm -rf .git
     ```

   - Then:

     ```sh
     git init
     git add .
     git commit -m "Initial commit for my new project"
     ```

3. **Update project metadata:**
   - Edit `package.json` (name, description, author, etc.)
4. **Configure environment variables:**
   - Update `.env` for your database and auth providers.
5. **Remove unused packages (optional):**
   - Uninstall anything you don't need:

     ```sh
     npm uninstall <package-name>
     ```

6. **Start building!**
   - Add your own pages, components, and features.
   - Use the setup guide in `docs/` for reference.

---

## ✨ Features

- **Tailwind CSS v4**: Fast, utility-first styling with modern best practices.
- **shadcn/ui**: Prebuilt, accessible, and themeable React components.
- **Radix UI**: Low-level UI primitives for building custom components.
- **Lucide**: Beautiful, consistent icon set.
- **NextAuth.js**: Authentication with providers (Google, GitHub, etc.) and database sessions.
- **Prisma**: Type-safe database access and migrations.
- **Zustand**: Simple state management (optional, see docs).
- **React Hook Form + Zod**: Forms and validation (optional, see docs).
- **Nivo/Recharts**: Charting libraries for dashboards (optional, see docs).
- **Jest + React Testing Library**: Testing setup (optional, see docs).

---

## 📚 Documentation

- See [`docs/setup-guide.md`](docs/setup-guide.md) for a full walkthrough of setup, configuration, and best practices.

---

## 🛠️ Useful Commands

- Start dev server: `npm run dev`
- Run Prisma migrations: `npx prisma migrate dev`
- Open Prisma Studio: `npx prisma studio`
- Format code: `npx prettier --write .`

---

## 📦 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Radix UI Docs](https://www.radix-ui.com/)
- [Lucide Docs](https://lucide.dev/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Prisma Docs](https://www.prisma.io/docs/)

---

## ▲ Deploy on Vercel

Deploy your app instantly with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
