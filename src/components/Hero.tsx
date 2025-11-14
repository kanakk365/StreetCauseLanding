import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  showActions?: boolean;
  backgroundImage?: string;
  backgroundAlt?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const DEFAULT_TITLE = "A life without a cause is a life without an effect";
const DEFAULT_SUBTITLE =
  "Are you passionate about bringing a change too? Join Street Cause India to empower young leaders through education, healthcare, and community initiatives across the nation.";
const DEFAULT_ALT = "Children studying in a classroom";

export default function Hero({
  showActions = true,
  backgroundImage = "/hero.png",
  backgroundAlt = DEFAULT_ALT,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  titleClassName,
  subtitleClassName,
}: HeroProps) {
  const headingClasses = [
    "text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl",
    titleClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const subtitleClasses = [
    "text-lg leading-relaxed text-white/85 sm:text-xl",
    subtitleClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
      </div>

      <div className="mx-auto flex min-h-[520px] w-full max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center text-white lg:py-32">
        <div className="space-y-6">
          <h1 className={headingClasses}>{title}</h1>
          {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </div>

        {showActions && (
          <div className="flex w-full flex-col gap-4 text-sm font-semibold uppercase tracking-[0.35em] sm:flex-row sm:justify-center">
            <Link
              href="#programs"
              className="flex items-center justify-center rounded-full border border-white/70 bg-white/20 px-8 py-3 text-white transition hover:bg-white/30"
            >
              Become a volunteer
            </Link>
            <Link
              href="/donate"
              className="flex items-center justify-center rounded-full bg-white px-8 py-3 text-emerald-700 shadow-lg transition hover:bg-emerald-100"
            >
              Donate now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
