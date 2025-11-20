export default function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-24 w-full max-w-4xl px-6 text-center"
    >
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-slate-500">
          About
        </p>
        <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-emerald-700 sm:text-4xl">
          Street Cause India
        </h2>
        <p className="text-lg leading-8 text-slate-600">
          Street Cause is a national student-run NGO dedicated to serving the
          underprivileged and creating positive social change through
          initiatives in education, healthcare, environment, animal welfare, and
          community welfare. We empower students to become socially conscious
          leaders by driving meaningful, community-focused projects and
          continuously expanding our reach and impact.
        </p>
      </div>
    </section>
  );
}
