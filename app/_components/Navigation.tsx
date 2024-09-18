import Link from "next/link";

// Renders the navigation menu with links.
export default function Navigation() {
  return (
    <nav className="z-10 text-xxl">
      <ul className="flex items-center gap-16">
        <li>
          <Link href="/" className="transition-colors hover:text-accent-400">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/templates"
            className="transition-colors hover:text-accent-400"
          >
            Templates
          </Link>
        </li>
        <li>
          <Link
            href="/history"
            className="transition-colors hover:text-accent-400"
          >
            History
          </Link>
        </li>
      </ul>
    </nav>
  );
}
