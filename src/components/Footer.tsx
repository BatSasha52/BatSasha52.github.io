import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = profile.contacts.filter((c) => c.url);

  return (
    <footer className="mt-24 border-t border-edge py-10">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-bone">{profile.name}</p>
          <p className="font-mono text-xs text-dim">
            {profile.role} — {year}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-ash transition-colors hover:text-signal"
            >
              {c.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="font-mono text-xs text-ash transition-colors hover:text-signal"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
