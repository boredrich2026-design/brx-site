export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_40%)]"></div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-black to-black"></div>

        <div className="relative z-10 max-w-4xl">
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

          <div className="mt-12 flex gap-6 justify-center">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 transition duration-300">
              JOIN COMMUNITY
            </button>

            <button className="px-8 py-4 border border-yellow-500 rounded-2xl hover:bg-yellow-500/10 hover:scale-105 transition duration-300">
              WHITEPAPER
            </button>
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
              It is a symbol of freedom, self-development and financial evolution.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              The ecosystem is built for people who think long term:
              community builders,
              traders,
              creators,
              market visionaries.
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-10 shadow-2xl shadow-yellow-500/10">
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

      {/* MANIFESTO */}
      <section className="px-6 py-32 border-t border-yellow-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            MANIFESTO
          </h2>

          <p className="text-zinc-300 text-xl leading-relaxed">
            BRX is built on calm confidence,
            long-term thinking and trust-first philosophy.
          </p>

          <p className="mt-8 text-zinc-500 text-lg leading-relaxed">
            We are not building noise.
            <br />
            We are building infrastructure,
            culture and a future ecosystem for people who think beyond trends.
          </p>

          <p className="mt-8 text-zinc-600 leading-relaxed">
            No hype.
            <br />
            No fake promises.
            <br />
            Only vision, consistency and evolution.
          </p>
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
                text: "BRX token release and ecosystem activation.",
              },
              {
                year: "∞",
                title: "Scale",
                text: "Global ecosystem with no limits.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/70 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 transition duration-300"
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

      {/* FOOTER */}
      <footer className="border-t border-yellow-500/10 py-12 text-center text-zinc-500">
        <p>BRX © 2028 — Building The Future Together</p>
      </footer>
    </main>
  );
}