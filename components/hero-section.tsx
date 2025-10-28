"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative mt-12 flex items-center px-6 py-5 pb-2">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative flex justify-center">
            <Image
                src="/appLogo.svg"
                alt="Ringfence"
                width={400}
                height={133}
                className="relative z-10"
                priority
            />
          </div>
          <p className="text-lg font-light max-w-2xl leading-relaxed">
            Ringfence is a product company focused on personal artificial
            intelligence. We build onchain products designed for the future we
            want to see - one of prosperous, self-sovereign, <i>hypercapable</i>{" "}
            humans.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
