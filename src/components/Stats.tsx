const stats = [
  { value: "3M+", label: "Total Impact" },
  { value: "250+", label: "Total No. of Projects" },
  { value: "₹5.5 cr+", label: "Project Spent" },
];

export default function Stats() {
  return (
    <section className="mx-auto mt-10 w-full max-w-5xl px-6">
      <div className="rounded-3xl bg-linear-to-r from-[#1ba574] to-[#21759c] px-10 py-8 text-white shadow-xl">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="space-y-3">
              <p className="text-4xl font-semibold">{item.value}</p>
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
