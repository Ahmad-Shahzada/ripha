import React, { useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Define type for items
interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// Example data
const items: StatItem[] = [
  { value: 1200, suffix: "+", label: "Students Enrolled" },
  { value: 20, suffix: "+", label: "Expert Faculty" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 10, suffix: "+", label: "Programs Offered" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: ["easeOut"] as any },
  },
};

// Type for background orb
interface Orb {
  id: number;
  style: React.CSSProperties;
}

const StatsSection: React.FC = () => {
  // Randomized floating background orbs
  const backgroundOrbs: Orb[] = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      style: {
        width: `${Math.random() * 150 + 80}px`,
        height: `${Math.random() * 150 + 80}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      } as React.CSSProperties,
    }));
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        {backgroundOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full opacity-10 will-change-transform"
            style={orb.style}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [0.9, 1.1, 0.9],
              opacity: 0.15,
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: ["easeInOut"] as any,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 دوبارہ animate کرے گا
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group will-change-transform"
            >
              <div className="h-full p-8 flex flex-col items-center justify-center text-center bg-white/60 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Glowing Orb Inside Card */}
                <motion.div
                  className="absolute rounded-full opacity-10 group-hover:opacity-20"
                  style={{
                    background: `radial-gradient(circle, ${
                      index % 2 ? "#3b82f6" : "#8b5cf6"
                    } 0%, transparent 60%)`,
                    width: "160px",
                    height: "160px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    filter: "blur(30px)",
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: ["easeInOut"] as any,
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    {/* CountUp will restart on scroll */}
                    <CountUp
                      end={item.value}
                      duration={3}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce={false} // 👈 دوبارہ گنے گا
                      scrollSpyDelay={300}
                    />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-700 text-lg font-semibold"
                  >
                    {item.label}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
