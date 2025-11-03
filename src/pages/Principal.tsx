// src/components/PrincipalPage.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BookIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v11.494m-9-5.747h18"
    />
  </svg>
);

// --- Placeholder Image URL ---
const principalImageUrl = "/images/principal.jpg"; // A high-quality, professional-looking image

const PrincipalPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Create parallax effect for the main image
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // --- Mock Data ---
  const philosophyData = [
    {
      title: "Student-Centric",
      description:
        "Placing student success and well-being at the forefront of all decisions.",
    },
    {
      title: "Innovation in Learning",
      description:
        "Embracing technology and modern pedagogy to foster dynamic education.",
    },
    {
      title: "Community & Collaboration",
      description:
        "Building strong partnerships between students, faculty, and the community.",
    },
  ];

  const timelineData = [
    {
      year: "2005",
      event:
        "Graduated with Ph.D. in Educational Leadership from Stanford University.",
    },
    {
      year: "2010",
      event:
        "Published 'The Future of Education', a best-selling book on modern teaching methods.",
    },
    {
      year: "2015",
      event: "Appointed as Dean of Academic Affairs at Crestview College.",
    },
    {
      year: "2022",
      event:
        "Became the Principal of Northwood University, championing a new era of excellence.",
    },
  ];

  return (
    <div
      ref={targetRef}
      className="min-h-screen md:px-20 bg-slate-50 text-gray-800 antialiased overflow-x-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-br from-blue-100/80 via-white to-gray-100 -z-10"></div>

      {/* ===== HERO SECTION ===== */}
      <main className="container mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- 3D Animated Image Section (Left) --- */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative rounded-2xl"
              style={{ transformStyle: "preserve-3d", y: imageY }} // Apply parallax effect
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <motion.img
                src={principalImageUrl}
                alt="Principal's Portrait"
                className="
                  w-64 h-80           
                  sm:w-72 sm:h-96     
                  md:w-80 md:h-[420px] 
                  lg:w-[450px] lg:h-[500px]
                  rounded-2xl 
                  object-cover       
                  mx-auto
                "
                style={{ transform: "translateZ(25px)" }}
              />

              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%)",
                  transform: "translateZ(40px)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* --- Text Content Section (Right) --- */}
          <motion.div className="lg:col-span-3">
            <motion.h2
              className="text-base font-bold uppercase tracking-widest text-blue-600"
              variants={itemVariants}
            >
              Message from the Principal
            </motion.h2>

            <motion.h1
              className="text-4xl font-black my-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600"
              variants={itemVariants}
            >
             Muhammad Irfan Shahzad Zargar
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed" 
              variants={itemVariants}
            >
             "At Riphah International College, we nurture curiosity, inspire critical thinking, and prepare students to lead with confidence. Our dedicated faculty and student-centered programs create a supportive environment where every learner can grow, innovate, and achieve their ambitions."
            </motion.p>

            <motion.div
              className="mt-8 border-l-4 border-blue-500 pl-6"
              variants={itemVariants}
            >
              <p className="font-serif italic text-gray-700">
                "We believe in the transformative power of education. It is the
                key that unlocks countless doors and builds the foundation for a
                brighter future."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* ===== ADDITIONAL SECTIONS ===== */}
      <div className="container mx-auto px-6 py-16 lg:py-24 space-y-24">
        {/* --- Educational Philosophy Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Educational Philosophy
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ perspective: "2000px" }}
          >
            {philosophyData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateX: 10,
                  boxShadow: "0px 20px 30px rgba(52, 115, 235, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="mx-auto bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                  <BookIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Career Journey Section --- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Career Journey
          </h2>
          <div className="relative max-w-2xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-12 mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* The circle on the line */}
                <div className="absolute left-4 top-1 w-4 h-4 bg-white border-2 border-blue-500 rounded-full -translate-x-1/2"></div>
                <p className="text-blue-600 font-bold text-lg">{item.year}</p>
                <p className="text-gray-700">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PrincipalPage;
