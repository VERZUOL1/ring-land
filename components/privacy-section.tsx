"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function PrivacySection() {
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
          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Privacy and security
          </h2>
          <div className="text-lg leading-relaxed font-light">
            <p>
              Your personal data is encrypted end-to-end with keys only you control, and you sign a message to approve exactly what's shared, with whom, and for how long. You can revoke access, export, or delete data whenever you choose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
