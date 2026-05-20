"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  /* CINEMATIC INTRO */
  if (showIntro) {
    return (
      <main className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -120, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-7xl md:text-[12rem] font-black tracking-[0.4em] bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        >
          BRX
        </motion.h1>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden scroll-smooth">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[220px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-0 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px] rounded-full"></div>

        {/* GOLD PARTICLES */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-yellow-400 rounded-full blur-[1px]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 md:px-6 py-40 min-h-screen">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl"
        >
          <motion.h1
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-6xl md:text-[10rem] font-black tracking-[0.35em] bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(255,215,0,0.4)]"
          >
            BRX
          </motion.h1>

          <p className="mt-8 text-zinc-500 uppercase tracking-[0.5em] text-sm md:text-base">
            Private Ecosystem Identity
          </p>

          <div className="mt-14 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-light leading-tight text-zinc-100">
              We are building in silence.
            </h2>

            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed px-2">
              Focused on security, long-term growth and a trusted ecosystem.
            </p>
          </div>

          {/* LIVE COUNTERS */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-20 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6">
              <p className="text-2xl md:text-5xl font-bold text-yellow-400">
                12K+
              </p>
              <p className="mt-2 text-zinc-500 text-sm md:text-base">
                Community
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6">
              <p className="text-2xl md:text-5xl font-bold text-yellow-400">
                48
              </p>
              <p className="mt-2 text-zinc-500 text-sm md:text-base">
                Builders
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-6">
              <p className="text-2xl md:text-5xl font-bold text-yellow-400">
                24/7
              </p>
              <p className="mt-2 text-zinc-500 text-sm md:text-base">
                Security
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-16 flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold tracking-wide shadow-[0_0_40px_rgba(255,215,0,0.3)]"
            >
              ENTER ECOSYSTEM
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 hover:bg-yellow-500/10 transition"
            >
              PRIVATE ACCESS
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* BRX VAULT */}
      <section className="relative px-4 md:px-6 py-32 border-t border-yellow-500/10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            BRX VAULT
          </h2>

          <p className="mt-10 text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
            A secure ecosystem designed for intelligent capital,
            trusted networking and long-term development.
          </p>

          <div className="mt-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-[0_0_60px_rgba(255,215,0,0.08)]">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">
                  Security
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Built for long-term trust and protected ecosystem growth.
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">
                  Infrastructure
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Premium ecosystem architecture with intelligent expansion.
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 text-2xl font-bold">
                  Private Network
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  Quiet community of builders, creators and visionaries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ELITE ACCESS */}
      <section className="relative px-4 md:px-6 py-32 border-t border-yellow-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-zinc-600 text-sm">
            Restricted Access
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-zinc-100">
            Elite Network
          </h2>

          <p className="mt-8 text-zinc-500 text-lg leading-relaxed">
            Some sections of the ecosystem will remain private.
            Built for those who understand discipline, security and long-term vision.
          </p>

          <div className="mt-12 max-w-md mx-auto">
            <input
              type="password"
              placeholder="Enter Access Key"
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl text-white outline-none"
            />
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

          <p className="text-zinc-700 text-sm pt-4">
            brxprivate.io
          </p>
        </div>
      </footer>
    </main>
  );
}