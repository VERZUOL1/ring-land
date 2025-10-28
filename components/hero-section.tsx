"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center px-6 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-purple-300/50 to-pink-300/50 blur-2xl -z-10 scale-125" />
            <Image
              src="/appLogo.svg"
              alt="Ringfence"
              width={300}
              height={100}
              className="relative"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
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
