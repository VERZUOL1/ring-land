"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ValuesSection() {
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
            Starting with what matters most
          </h2>
          <div className="text-lg leading-relaxed font-light">
            <p>
              Search and Commerce represent trillions of dollars in global activity but remain frustratingly impersonal. We're starting here because the value of personalization is immediately obvious, and because solving these problems demonstrates the power of user-owned data for the entire AI ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
