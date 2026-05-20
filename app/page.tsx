export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-black to-black"></div>

        <div className="relative z-10 max-w-4xl">
          {/* LOGO PREVIEW */}
          <div className="flex justify-center mb-10">
            <div className="relative w-40 h-40 rounded-full border border-yellow-500/30 bg-zinc-950 shadow-2xl shadow-yellow-500/10 flex items-center justify-center overflow-hidden">

              {/* Yin Yang Split */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-yellow-700 to-yellow-400"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>
              </div>

              {/* Center Curve */}
              <div className="absolute w-40 h-40 rounded-full border-[22px] border-transparent border-t-black border-b-yellow-500 rotate-45 opacity-60"></div>

              {/* Wolf Top */}
              <div className="absolute top-7 text-black opacity-90">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 25L35 10H65L80 25L65 80H35L20 25Z"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38 45L50 60L62 45"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Wolf Bottom */}
              <div className="absolute bottom-7 text-yellow-500 rotate-180 opacity-90">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M20 25L35 10H65L80 25L65 80H35L20 25Z"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38 45L50 60L62 45"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
            BRX
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-zinc-300 tracking-wide">
            BORED RICH ECOSYSTEM
          </p>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are not chasing hype.
            <br />
            We are building an ecosystem.
            <br />
            A new generation of creators, traders, builders and visionaries.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center">
            <a
              href="https://x.com/YOUR_X_ACCOUNT"
              target="_blank"
              className="px-8 py-4 bg-yellow-500 text-black rounded-2xl font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/20"
            >
              X / TWITTER
            </a>

            <a
              href="https://t.me/YOUR_TELEGRAM"
              target="_blank"
              className="px-8 py-4 border border-yellow-500 rounded-2xl hover:bg-yellow-500/10 transition"
            >
              TELEGRAM
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-24 border-t border-yellow-500/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              THE IDEA
            </h2>

            <p className="text-zinc-400 leading-relaxed text-lg">
              BRX is more than a token.
              <br />
              It is a symbol of freedom,
              self-development and financial evolution.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              The ecosystem is built for people who think long term:
              community builders,
              traders,
              creators and market visionaries.
            </p>
          </div>

          <div className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-10 shadow-2xl shadow-yellow-500/10">
            <h3 className="text-3xl font-bold text-yellow-300 mb-6">
              NO BORDERS
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>• Community Driven</li>
              <li>• Future Ecosystem</li>
              <li>• Long-Term Vision</li>
              <li>• Crypto Culture</li>
              <li>• Wealth Through Knowledge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-20">
            ROADMAP
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2026",
                title: "Foundation",
                text: "Community growth, farming, brand identity and ecosystem preparation.",
              },
              {
                year: "2027",
                title: "Expansion",
                text: "Private community, partnerships and infrastructure building.",
              },
              {
                year: "2028",
                title: "Launch",
                text: "BRX ecosystem activation and long-term scaling.",
              },
              {
                year: "∞",
                title: "Scale",
                text: "Global ecosystem with no limits.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-500/40 transition"
              >
                <p className="text-yellow-400 text-2xl font-bold">
                  {item.year}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="px-6 py-24 border-t border-yellow-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-yellow-400">
            JOIN THE ECOSYSTEM
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
            BRX is being built quietly with a long-term vision.
            <br />
            Follow the journey and become part of the foundation.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/YOUR_X_ACCOUNT"
              target="_blank"
              className="px-8 py-4 bg-yellow-500 text-black rounded-2xl font-bold hover:scale-105 transition"
            >
              FOLLOW ON X
            </a>

            <a
              href="https://t.me/YOUR_TELEGRAM"
              target="_blank"
              className="px-8 py-4 border border-yellow-500 rounded-2xl hover:bg-yellow-500/10 transition"
            >
              JOIN TELEGRAM
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-500/10 py-12 text-center text-zinc-500">
        <p>BRX © 2028 — Building The Future Together</p>

        <div className="mt-6 flex justify-center gap-8 text-sm">
          <a
            href="https://x.com/YOUR_X_ACCOUNT"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            X / TWITTER
          </a>

          <a
            href="https://t.me/YOUR_TELEGRAM"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            TELEGRAM
          </a>
        </div>
      </footer>
    </main>
  );
}