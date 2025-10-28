"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function BuildingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light">Building</h2>
          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              The future of personalized AI depends on coordination, instant
              settlement, and trust between the agents doing work on your
              behalf. Our stack brings those together.
            </p>
            <p>
              Virtuals ACP connects us to an ecosystem of agents, and Base's
              x402 protocol enables instant, programmable payments directly over
              http using stablecoins, with pay-per-use pricing as low as
              fractions of a cent per request. The ERC8004 standard creates a
              trust and accountability layer, where user and agent reputations
              live. NEAR Shade Agent infrastructure and NEAR Intents provides a
              cross-chain transaction layer that enables AI agents to execute
              operations across multiple blockchains without traditional
              bridges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
