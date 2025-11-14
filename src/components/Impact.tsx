import Image from "next/image";

const impactHighlights = [
  {
    title: "Education",
    detail: "3,200 Children Supported",
  },
  {
    title: "Healthcare",
    detail: "7 Medical Camps",
  },
  {
    title: "Food Security",
    detail: "12,500 Meals Served",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="mx-auto mt-28 w-full max-w-6xl px-6 text-center">
      <h3 className="text-3xl font-semibold uppercase tracking-[0.35em] text-emerald-700">
        Our Impact Across India
      </h3>

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[640px]">
            <Image
              src="/india.svg"
              alt="India map showing Street Cause chapters"
              width={640}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="rounded-[30px] border border-emerald-100 bg-emerald-50/80 p-10 text-left shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-600">
            Impact in Pune
          </p>
          <div className="mt-6 h-px bg-emerald-100" />
          <ul className="mt-8 space-y-6">
            {impactHighlights.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-base font-semibold text-emerald-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
