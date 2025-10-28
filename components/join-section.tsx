"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="join" className="py-20 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light">Join Us</h2>
          <div className="space-y-6 text-lg leading-relaxed font-light">
            <p>
              We're building the future of how humans and AI work together, and we want you to be part of it from the beginning.
            </p>
            <p>
              Follow us on X at <a href="https://x.com/ringfenceai" target="_blank" rel="noopener noreferrer">@ringfenceai</a> for updates on our progress, insights into the technology we're building, and conversations about the future of user-owned AI.
            </p>
            <p>
              Learn more about our native token, <a href="https://app.virtuals.io/virtuals/35852" target="_blank" rel="noopener noreferrer">RING</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

