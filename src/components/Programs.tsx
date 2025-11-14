import Link from "next/link";

export default function Programs() {
  return (
    <section id="programs" className="mx-auto mt-24 w-full max-w-6xl px-6">
      <div className="grid gap-8 rounded-3xl bg-white p-10 shadow-xl lg:grid-cols-2">
        <div className="space-y-5">
          <h4 className="text-2xl font-semibold text-slate-900">
            Program Spotlight: Pune
          </h4>
          <p className="text-base leading-7 text-slate-600">
            By mobilising student volunteers, Street Cause Pune delivers
            after-school programs, health camps, and nutrition drives that
            uplift thousands of families every year. Community-led fundraising
            fuels each initiative, ensuring transparent and sustainable impact.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 transition hover:text-emerald-500"
          >
            Support this work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-linear-to-r from-[#1ba574] to-[#21759c] p-8 text-white">
          <h5 className="text-lg font-semibold uppercase tracking-[0.4em] text-white/90">
            Volunteer Voices
          </h5>
          <p className="text-lg leading-8 text-white/90">
            &quot;Street Cause taught me that compassion paired with action can
            transform communities. Every project is a classroom without
            walls.&quot;
          </p>
          <div>
            <p className="text-base font-semibold">Aarushi Kumar</p>
            <p className="text-sm text-white/70">
              President, Street Cause Pune Chapter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
