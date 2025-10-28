"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function DigitalTwinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Your digital twin</h2>
          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              The key to personalized AI lies in creating a digital model of who
              you are: your habits, knowledge, and preferences, structured so
              that AI can understand and act only on your behalf.
            </p>
            <p>
              Your twin evolves with you over time, becoming the foundation for
              AI services that anticipate your needs, acting as a genuine
              extension of yourself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
