"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-0 w-[600px] h-[600px] bg-yellow-400/5 blur-[160px] rounded-full"></div>

        {/* GOLD PARTICLES */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <motion.h1
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="text-7xl md:text-[10rem] font-black tracking-[0.35em] bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,0,0.35)]"
          >
            BRX
          </motion.h1>

          <p className="mt-8 text-zinc-500 uppercase tracking-[0.5em] text-sm md:text-base">
            Private Ecosystem Identity
          </p>

          <div className="mt-14 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-zinc-100">
              We are building in silence.
            </h2>

            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed">
              Focused on security, long-term growth and a trusted ecosystem.
            </p>

            <div className="pt-6 text-zinc-500 text-lg space-y-2">
              <p>No noise.</p>
              <p>No chaos.</p>
              <p>
                Only strong foundations, intelligent capital and a powerful
                community.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold tracking-wide shadow-[0_0_35px_rgba(255,215,0,0.25)]"
            >
              ENTER ECOSYSTEM
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl border border-yellow-500/30 backdrop-blur-md hover:bg-yellow-500/10 transition"
            >
              PRIVATE ACCESS
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative px-6 py-32 border-t border-yellow-500/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              THE PHILOSOPHY
            </h2>

            <div className="space-y-8">
              <p className="text-2xl text-zinc-200 leading-relaxed">
                BRX is not built for hype cycles.
              </p>

              <p className="text-zinc-400 text-lg leading-relaxed">
                It is an ecosystem for people who value security, discipline,
                development and long-term vision.
              </p>

              <p className="text-zinc-500 text-lg leading-relaxed">
                A quiet movement built by strong minds.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-yellow-500/20 rounded-[2rem] p-10 shadow-[0_0_60px_rgba(255,215,0,0.08)]">
              <h3 className="text-3xl font-bold text-yellow-300 mb-8 tracking-wide">
                CORE VALUES
              </h3>

              <ul className="space-y-5 text-zinc-300 text-lg">
                <li>• Security First</li>
                <li>• Intelligent Capital</li>
                <li>• Trusted Community</li>
                <li>• Quiet Power</li>
                <li>• Long-Term Thinking</li>
                <li>• Ecosystem Development</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="relative px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 leading-tight bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
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
                text: "Strategic partnerships and ecosystem activation.",
              },
              {
                year: "∞",
                title: "Legacy",
                text: "A global ecosystem built on trust, security and intelligent growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative bg-zinc-900/60 backdrop-blur-xl border border-yellow-500/10 rounded-[2rem] p-8 hover:border-yellow-500/40 transition duration-500 shadow-[0_0_40px_rgba(255,215,0,0.05)]"
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
              </motion.div>
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