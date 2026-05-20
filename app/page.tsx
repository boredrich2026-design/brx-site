export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-yellow-500/10 blur-[180px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-300/5 blur-[160px] rounded-full"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06)_0%,transparent_70%)]"></div>
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-black to-black"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-[0.3em] bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            BRX
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-zinc-400 tracking-[0.4em] uppercase">
            Private Ecosystem
          </p>

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
              We are building in silence.
            </p>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Focused on security, long-term growth and a trusted ecosystem.
            </p>

            <div className="pt-4 space-y-2 text-zinc-500 text-lg">
              <p>No noise.</p>
              <p>No chaos.</p>
              <p>
                Only strong foundations, intelligent capital and a powerful
                community.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-2xl font-bold tracking-wide hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(255,215,0,0.3)]">
              ENTER ECOSYSTEM
            </button>

            <button className="px-10 py-4 border border-yellow-500/30 rounded-2xl backdrop-blur-sm hover:bg-yellow-500/10 transition duration-300">
              PRIVATE ACCESS
            </button>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative px-6 py-28 border-t border-yellow-500/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              THE PHILOSOPHY
            </h2>

            <div className="space-y-8">
              <p className="text-2xl text-zinc-200 leading-relaxed">
                BRX is not built for hype cycles.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                It is an ecosystem for people who value:
                security, discipline, development and long-term vision.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed">
                A quiet movement built by strong minds.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-yellow-500/20 rounded-[2rem] p-10 shadow-[0_0_60px_rgba(255,215,0,0.08)]">
              <h3 className="text-3xl font-bold text-yellow-300 mb-8 tracking-wide">
                CORE VALUES
              </h3>

              <ul className="space-y-5 text-zinc-300 text-lg">
                <li>• Security First</li>
                <li>• Intelligent Capital</li>
                <li>• Trusted Community</li>
                <li>• Long-Term Thinking</li>
                <li>• Ecosystem Development</li>
                <li>• Quiet Power</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-24 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            ECOSYSTEM ROADMAP
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2026",
                title: "Foundation",
                text: "Community positioning, ecosystem identity and strategic groundwork.",
              },
              {
                year: "2027",
                title: "Infrastructure",
                text: "Private network, ecosystem access and infrastructure layer development.",
              },
              {
                year: "2028",
                title: "Activation",
                text: "Strategic partnerships, ecosystem expansion and private ecosystem activation.",
              },
              {
                year: "∞",
                title: "Legacy",
                text: "A global ecosystem built on trust, security and intelligent growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900/60 backdrop-blur-xl border border-yellow-500/10 rounded-[2rem] p-8 hover:border-yellow-500/40 hover:-translate-y-2 transition duration-500 shadow-[0_0_40px_rgba(255,215,0,0.05)]"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <p className="text-yellow-400 text-3xl font-bold tracking-wide">
                    {item.year}
                  </p>

                  <h3 className="mt-6 text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-yellow-500/10 py-14 text-center">
        <div className="space-y-4">
          <p className="text-zinc-500 tracking-[0.3em] uppercase text-sm">
            BRX PRIVATE ECOSYSTEM
          </p>

          <p className="text-zinc-600">
            Building the future in silence.
          </p>
        </div>
      </footer>
    </main>
  );
}