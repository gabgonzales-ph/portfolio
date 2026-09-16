"use client";

import { useSwipe } from "@/context/theme-swipe-context";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PenLine, User, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/writing", label: "Writing", icon: PenLine },
  { href: "/about", label: "About", icon: User },
  { href: "/connect", label: "Connect", icon: Mail },
];

const DARK_BG = "#0c0c0c";
const LIGHT_BG = "#ffffff";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const [swipeColor, setSwipeColor] = useState<string | null>(null);
  const [swipeKey, setSwipeKey] = useState(0);

  useEffect(() => {
    setIsDark(!document.documentElement.classList.contains("light"));
  }, []);

const SWIPE_DURATION = 0.45; // seconds, matches the panel's transition
const SYNC_DELAY_MS = SWIPE_DURATION * 1000 * 0.2; // flip when swipe is ~40% down
const { setIsSwiping } = useSwipe();


function toggleTheme() {
  const prevBg = isDark ? DARK_BG : LIGHT_BG;
  const next = !isDark;

  setIsSwiping(true); // NEW — signal swipe has started

  setSwipeColor(prevBg);
  setSwipeKey((k) => k + 1);

  setTimeout(() => {
    setIsDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, SYNC_DELAY_MS);
}



  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {swipeColor && (
            <motion.div
  key={swipeKey}
  className="absolute inset-0"
  style={{ backgroundColor: swipeColor }}
  initial={{ y: "0%" }}
  animate={{ y: "100%" }}
  transition={{ duration: 0.45, ease: "easeInOut" }}
  onAnimationComplete={() => {
    setSwipeColor(null);
    setIsSwiping(false); // NEW — swipe fully finished
  }}
/>
          )}
        </AnimatePresence>
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-99">
<ul className="flex items-center gap-1 rounded-full bg-background border border-subheading/20 px-2 py-2">      
    {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="group relative">
                <Link
                  href={href}
                  className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
                    isActive ? "bg-accent/20" : "hover:bg-foreground/10"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-icon transition-colors group-hover:text-accent"
                  />
                </Link>
<span className="pointer-events-none absolute -top-10.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-tooltip-bg text-tooltip-text px-3 py-1 text-sm font-medium opacity-0 translate-y-1 border border-foreground/15 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 hidden md:block">
  {label}
</span>
              </li>
            );
          })}
          <li className="relative">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-foreground/10 transition-colors"
            >
              {isDark ? (
                <Moon size={20} strokeWidth={1.5} className="text-icon" />
              ) : (
                <Sun size={20} strokeWidth={1.5} className="text-icon" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}