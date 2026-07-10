import React from "react";
import { motion } from "framer-motion";
import { Compare } from "../ui/compare";


export function CompareDemo() {
    const firstImage = "images/compare1.jpeg";
    const secondImage = "images/compare2.jpeg";
    const tertiaryImage = "images/compare3.jpeg";
    const quaternaryImage = "images/compare4.jpeg";
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full flex-col items-center justify-center gap-10 px-1 md:px-8 lg:px-20"
        >
            <motion.h2
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeIn",
                }}
                className="text-center text-3xl font-light leading-tight sm:text-4xl lg:text-start"
            >
                Antes x Depois
            </motion.h2>

            <div className="grid w-full gap-6 lg:grid-cols-2">
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeIn",
                    }}
                    viewport={{ once: true, amount: 0.35 }}
                    className="overflow-hidden rounded-2xl border border-[#8b6d1f]/30 bg-neutral-100 p-1 shadow-[0_20px_60px_rgba(26,26,26,0.08)] md:p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                    <Compare
                        firstImage={firstImage}
                        secondImage={secondImage}
                        firstImageClassName="h-full w-full object-cover object-left-top"
                        secondImageClassname="h-full w-full object-cover object-left-top"
                        className="aspect-4/3 w-full overflow-hidden rounded-[22px] md:aspect-square md:rounded-lg"
                        slideMode="drag"
                        autoplay={false}
                    />
                </motion.div>
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeIn",
                    }}
                    viewport={{ once: true, amount: 0.35 }}
                    className="overflow-hidden rounded-2xl border border-[#8b6d1f]/30 bg-neutral-100 p-1 shadow-[0_20px_60px_rgba(26,26,26,0.08)] md:p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                    <Compare
                        firstImage={tertiaryImage}
                        secondImage={quaternaryImage}
                        firstImageClassName="h-full w-full object-cover object-left-center"
                        secondImageClassname="h-full w-full object-cover object-left-center"
                        className="aspect-4/3 w-full overflow-hidden rounded-[22px] md:aspect-square md:rounded-lg"
                        slideMode="drag"
                        autoplay={false}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
