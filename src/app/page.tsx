"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Switch } from "@radix-ui/react-switch";
import { Sun, Moon, Rocket, Github, BookOpen, ArrowRight } from "lucide-react";
import * as React from "react";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <header className="w-full flex justify-between items-center px-8 py-6 max-w-4xl">
        <div className="flex items-center gap-3">
          <Image src="/next.svg" alt="Next.js logo" width={40} height={12} className="dark:invert" />
          <span className="text-lg font-bold tracking-tight text-gray-800 dark:text-gray-100">Next.js 15 Starter</span>
        </div>
        <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          <Github className="w-5 h-5" />
          <span className="hidden sm:inline">shadcn/ui</span>
        </a>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <div className="max-w-lg w-full p-8 rounded-2xl shadow-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md flex flex-col gap-8 items-center">
          <h1 className="text-4xl font-extrabold flex items-center gap-2 text-center">
            <Rocket className="text-purple-500 animate-bounce" />
            Welcome to Your Modern Next.js App
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
            <span className="font-semibold text-blue-600">Tailwind CSS</span>, <span className="font-semibold text-purple-600">shadcn/ui</span>, <span className="font-semibold text-pink-600">Radix UI</span>, and <span className="font-semibold text-emerald-600">Lucide</span> are ready to use.<br />
            Toggle dark mode, try the button, and see beautiful icons in action!
          </p>
          <div className="flex items-center gap-4">
            <Sun className="text-yellow-400" />
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-300 w-12 h-6 rounded-full relative transition-colors"
            >
              <span className="sr-only">Toggle dark mode</span>
            </Switch>
            <Moon className="text-gray-700 dark:text-gray-200" />
          </div>
          <Button className="w-full mt-4 flex items-center justify-center gap-2 group">
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explore Components
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>
      <footer className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm pb-4">
        <p>
          Built with <span className="font-semibold">Next.js 15</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">shadcn/ui</span>, <span className="font-semibold">Radix UI</span>, and <span className="font-semibold">Lucide</span>.
        </p>
        <p className="mt-2">
          <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-purple-600">shadcn/ui docs</a>
          {" | "}
          <a href="https://www.radix-ui.com/primitives/docs/overview/introduction" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-pink-600">Radix UI docs</a>
          {" | "}
          <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-emerald-600">Lucide docs</a>
        </p>
      </footer>
    </div>
  );
}
