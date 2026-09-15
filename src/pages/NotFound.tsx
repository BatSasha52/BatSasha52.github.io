import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { profile } from "../data/profile";

export default function NotFound() {
  useSeo({ title: `Not found — ${profile.name}` });

  return (
    <div className="shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="rule-label mb-4">Error 404</p>
      <h1 className="text-title text-bone">This page does not exist</h1>
      <p className="prose-body mt-4">
        The link may be out of date, or the project may have been renamed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="border border-signal bg-signal px-5 py-2.5 font-mono text-sm text-void transition-colors hover:bg-transparent hover:text-signal"
        >
          Back home
        </Link>
        <Link
          to="/projects"
          className="border border-edge-bright px-5 py-2.5 font-mono text-sm text-bone transition-colors hover:border-signal hover:text-signal"
        >
          Browse projects
        </Link>
      </div>
    </div>
  );
}
