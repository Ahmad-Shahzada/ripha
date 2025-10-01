import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ValueItem {
  title: string;
  english: string;
  meaning: string;
  description: string;
  color: string;
}

const ValuesSection: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<ValueItem | null>(null);

  const values: ValueItem[] = [
    {
      title: "ﻣﺤﺎﺳﺒﺔ",
      english: "MUHASABAH",
      meaning: "Accountability",
      description:
        "Taking responsibility for our actions and decisions, ensuring transparency in all our endeavors.",
      color: "from-indigo-200 to-indigo-100",
    },
    {
      title: "ﻣﺸﺎﻭﺭﺓ",
      english: "MUSHAWARAH",
      meaning: "Consultation",
      description:
        "Collaborative decision-making that fosters unity and mutual understanding among all members.",
      color: "from-emerald-200 to-emerald-100",
    },
    {
      title: "ﺟﻤﺎﻋﻴﺔ",
      english: "JITMAIYYAH",
      meaning: "Team Work",
      description:
        "Working together cohesively to achieve common goals with shared responsibility.",
      color: "from-amber-200 to-amber-100",
    },
    {
      title: "ﺇﺗﻘﺎﻥ",
      english: "ITQAN",
      meaning: "Excellence",
      description:
        "Striving for the highest quality in all aspects of our work and personal development.",
      color: "from-rose-200 to-rose-100",
    },
    {
      title: "ﺍﻵﺧﺮﺓ",
      english: "AL-AKHIRAH",
      meaning: "Compassion",
      description:
        "Showing empathy and kindness in all our interactions, with mindfulness of the eternal.",
      color: "from-blue-200 to-blue-100",
    },
  ];

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardItem: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // transition: spring,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-merriweather md:text-5xl font-bold text-gray-900 mb-4 font-lora">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Principles that shape our purpose, actions, and integrity.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 👈 دوبارہ animate on scroll
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.english}
              layout
              variants={cardItem}
              // whileHover={{ y: -8, transition: spring }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedValue(value)}
              className="cursor-pointer group"
            >
              <motion.div
                layoutId={`card-${value.english}`}
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${value.color} border border-gray-200 hover:shadow-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden`}
              >
                {/* Animated Background Orbs */}
                <motion.div
                  className="absolute -top-10 -right-10 w-24 h-24 bg-white/30 rounded-full blur-3xl"
                  animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                  transition={{
                    duration: 10 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/20 rounded-full blur-2xl"
                  animate={{ y: [0, 6, 0], x: [0, -6, 0] }}
                  transition={{
                    duration: 12 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="text-5xl font-arabic mb-4 text-gray-800">
                    {value.title}
                  </div>
                  <h3 className="text-lg font-bold text-gray-700">
                    {value.english}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-4">
                    {value.meaning}
                  </p>

                  <motion.span
                    className="inline-flex items-center text-sm font-semibold group-hover:text-blue-900 transition"
                    whileHover={{ x: 3 }}
                  >
                    Learn more
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedValue && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedValue(null)}
            >
              <motion.div
                layoutId={`card-${selectedValue.english}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white/80 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl max-w-md w-full p-8 text-center"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedValue(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <motion.div className="text-6xl text-gray-800 font-arabic mb-4">
                  {selectedValue.title}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedValue.english}
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  {selectedValue.meaning}
                </p>
                <div className="my-4 h-px bg-gray-300 w-16 mx-auto" />
                <p className="text-gray-600">{selectedValue.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ValuesSection;
