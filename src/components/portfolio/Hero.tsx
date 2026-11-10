import { cv, cvHref, hero, heroStats, profile } from "@/content/portfolio";
import { LinkButton } from "./primitives";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-base pt-28 sm:pt-32"
    >
      <ContourLines />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <h1
          id="hero-title"
          className="animate-rise text-center text-[clamp(2.25rem,4.6vw,3.25rem)]"
        >
          {hero.greeting}
          {/* <span className="block">{hero.title}</span> */}
        </h1>

        <div className="mt-10 grid items-end gap-10 lg:mt-6 lg:grid-cols-[1fr_minmax(0,26rem)_1fr] lg:gap-8">
          <dl className="order-2 grid grid-cols-3 gap-4 self-center lg:order-1 lg:grid-cols-1 lg:gap-12">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-bold text-heading">
                  {s.value}
                </dd>
                <dd className="mt-2 text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="relative order-1 mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:order-2">
            <div aria-hidden className="arch absolute inset-x-0 top-[14%] bottom-0" />
            <img
              src={profile.cutout.src}
              width={profile.cutout.width}
              height={profile.cutout.height}
              alt={`Portrait of ${profile.name}`}
              fetchPriority="high"
              className="fade-bottom relative w-full"
            />
          </div>

          <div className="order-3 space-y-10 self-center pb-6 lg:text-right">
            <div>
              <p className="font-display text-[1.375rem] font-bold text-heading">Biography :</p>
              <p className="mt-3 lg:ml-auto lg:max-w-[30ch]">{hero.lede}</p>
            </div>
            <div>
              <p className="font-display text-[1.375rem] font-bold text-heading">Contact :</p>
              <ul className="mt-3 space-y-2">
                <li>{profile.location} · Open to Saudi Arabia, Gulf &amp; remote</li>
                <li>
                  <a href={`mailto:${profile.email}`} className="hover:text-accent-red">
                    {profile.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <LinkButton href={cvHref} {...(cv.available ? { download: cv.fileName } : {})}>
                {cv.available ? "Download CV" : "Request CV"}
              </LinkButton>
              <LinkButton href="#contact" variant="outline">
                Hire me
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Faint flowing contour lines behind the hero. */
function ContourLines() {
  const lines = Array.from({ length: 22 }, (_, i) => {
    const y = 40 + i * 34;
    const a = 26 + (i % 5) * 6;
    return `M-40 ${y} C 260 ${y - a}, 420 ${y + a * 1.6}, 720 ${y} S 1180 ${y - a * 1.4}, 1480 ${y + a * 0.6}`;
  });
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        {lines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
