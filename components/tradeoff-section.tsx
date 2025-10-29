"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function TradeoffSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-5 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">
            The false tradeoff
          </h2>
          <div className="text-lg leading-relaxed font-light">
            <p>
              Today's AI presents users with an unfair bargain: surrender all
              your data to big tech companies in exchange for slightly better
              outputs. True personalization doesn't require you to forfeit
              ownership of your information to centralized platforms that
              monetize your data, and the promise of AI shouldn't require
              sacrificing your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
