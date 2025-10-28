"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
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
            Your AI. Your future.
          </h2>
          <div className="space-y-2.5 text-lg leading-relaxed font-light">
            <p>
              AI is meant to serve you; to improve your life. You deserve intelligence that remembers your context across every service and platform, makes decisions aligned with your goals, and operates on your terms, with your data, under your control.
            </p>
            <p>
              We build towards a future where everyone owns their personal data and uses it to their own personal AI agent that truly knows them - personalized intelligence trained to understand your life and goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
