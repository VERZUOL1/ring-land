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
          className="space-y-14"
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
          <div className="space-y-2.5 text-lg leading-relaxed font-light">
            <p className="text-lg font-light max-w-2xl leading-relaxed">
              Ringfence is a product company focused on personal artificial
              intelligence. We build onchain products designed for the future we
              want to see - one of prosperous, self-sovereign,{" "}
              <i>hypercapable</i> humans.
            </p>
            <p className="text-lg font-light max-w-2xl leading-relaxed">
              We are builders, engineers and crypto-natives that have worked on
              category-defining companies, including{" "}
              <a
                href="https://compassmining.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Compass Mining
              </a>{" "}
              and{" "}
              <a
                href="https://www.puppyspot.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PuppySpot
              </a>
              , and helped advance crypto adoption through the{" "}
              <a
                href="https://texasblockchaincouncil.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Texas Blockchain Council
              </a>{" "}
              and the{" "}
              <a
                href="https://digitalchamber.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Chamber of Commerce
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
