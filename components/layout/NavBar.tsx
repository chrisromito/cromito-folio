import Link from "next/link";
import NavLink from '@/components/NavLink'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0b0d10]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold tracking-wide"
        >
          Chris R.
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-sm text-zinc-400">
            <li>
              <NavLink
                href="/experience"
                className="hover:text-white transition-colors"
              >
                <span>Experience</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                href="/projects"
                className="hover:text-white transition-colors"
              >
                <span>Projects</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}