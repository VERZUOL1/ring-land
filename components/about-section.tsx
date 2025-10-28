"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
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
          <h2 className="text-3xl md:text-4xl font-light">
            Your AI. Your future.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              We're building a future where everyone owns their personal data
              and uses it to train a personal AI agent that truly understands
              them - personalized intelligence trained to understand your life
              and goals.
            </p>
            <p>
              While AI capabilities have advanced dramatically, a fundamental
              problem remains: these systems know nothing about you. Every
              interaction starts from zero. Meanwhile, big tech companies
              collect your data without your control, using it to serve their
              interests, not yours.
            </p>
            <p>
              To solve this, we are building a secure platform where you
              collect, store, and own your personal data, then choose exactly
              what to share with AI to get genuinely personalized services and
              better outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
