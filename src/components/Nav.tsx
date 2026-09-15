import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/profile";

const routes = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative py-1 font-mono text-[0.8rem] tracking-wide transition-colors",
      isActive ? "text-signal" : "text-ash hover:text-bone",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-edge bg-void/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="group flex items-baseline gap-2 font-mono text-sm text-bone"
        >
          <span className="text-signal">/</span>
          <span className="font-medium">{profile.name.split(" ")[0]}</span>
          <span className="hidden text-dim sm:inline">
            {profile.name.split(" ")[1]}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {routes.map((r) => (
            <NavLink key={r.to} to={r.to} end={r.to === "/"} className={linkClass}>
              {({ isActive }) => (
                <>
                  {r.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-signal"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href={profile.cv}
            download
            className="border border-edge-bright px-3 py-1.5 font-mono text-[0.75rem] text-bone transition-colors hover:border-signal hover:text-signal"
          >
            CV
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={[
              "h-px w-5 bg-bone transition-transform duration-200",
              open ? "translate-y-[3.5px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-px w-5 bg-bone transition-transform duration-200",
              open ? "-translate-y-[3.5px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-edge bg-void md:hidden"
          >
            <div className="shell flex flex-col gap-1 py-4">
              {routes.map((r) => (
                <NavLink
                  key={r.to}
                  to={r.to}
                  end={r.to === "/"}
                  className={({ isActive }) =>
                    [
                      "py-2 font-mono text-sm",
                      isActive ? "text-signal" : "text-ash",
                    ].join(" ")
                  }
                >
                  {r.label}
                </NavLink>
              ))}
              <a
                href={profile.cv}
                download
                className="mt-2 w-fit border border-edge-bright px-3 py-1.5 font-mono text-[0.75rem] text-bone"
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
