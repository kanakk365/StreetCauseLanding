import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-slate-900">
        <div className="flex items-center gap-3">
          <Link href="/" className="relative h-12 w-40">
            <Image
              src="/logo.png"
              alt="Street Cause India logo"
              fill
              className="object-contain"
              sizes="160px"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 lg:flex">
          {navigationLinks.map((item) => {
            // change donate nav to route link
            const href = item.label === "Donate" ? "/donate" : item.href;
            return (
              <Link
                key={item.label}
                href={href}
                className="transition-colors hover:text-emerald-600"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16.5 16.5 4 4" />
            </svg>
          </button>
          <Link
            href="/donate"
            className="rounded-full bg-linear-to-r from-[#1ba574] to-[#21759c] px-6 py-2 text-sm font-semibold text-white "
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
