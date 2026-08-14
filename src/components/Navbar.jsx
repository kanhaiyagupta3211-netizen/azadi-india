
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Journey", href: "#journey" },
  { name: "Heroes", href: "#heroes" },
  { name: "Movements", href: "#movements" },
  { name: "Places", href: "#places" },
  { name: "Quiz", href: "#quiz" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >
      <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <span className="text-lg">🇮🇳</span>
            </div>

            <span className="font-bold tracking-[0.2em]">
              AZADI
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/60 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;

