// src/components/DirectorPage.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Placeholder Icons ---
const VisionIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const PartnershipIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2.104.448 2.828 1.172l2.829 2.828-1.414 1.414-2.829-2.828a2 2 0 00-2.828 0l-2.828 2.828-1.414-1.414 2.828-2.828A2 2 0 0112 8zm0-4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" /></svg>
);
const ExcellenceIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

// --- Placeholder Image URL for Director ---
const directorImageUrl = 'https://i.imgur.com/5V15N2L.png'; // A professional photo for the director

const DirectorPage: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  // --- MOCK DATA FOR DIRECTOR ---
  const leadershipPhilosophy = [
    { icon: <VisionIcon />, title: "Strategic Vision", description: "Driving the institution towards a future of innovation and global recognition." },
    { icon: <PartnershipIcon />, title: "Industry Integration", description: "Forging strong partnerships that bridge academic theory with real-world practice." },
    { icon: <ExcellenceIcon />, title: "Institutional Excellence", description: "Committing to the highest standards in governance, operations, and student outcomes." },
  ];

  const timelineData = [
    { year: "2008", event: "Oversaw a 40% growth in student enrollment as Head of Admissions." },
    { year: "2014", event: "Secured a $10M grant for the development of a new engineering faculty." },
    { year: "2018", event: "Led a successful international accreditation process for the institution." },
    { year: "2023", event: "Appointed as Director, tasked with leading the college's next 5-year strategic plan." },
  ];

  return (
    <div ref={targetRef} className="min-h-screen md:px-20 bg-slate-50 text-gray-800 antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-gradient-to-br from-blue-50/80 via-white to-gray-100 -z-10"></div>

      <main className="container mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="lg:col-span-2 flex justify-center" style={{ perspective: '1000px' }}>
            <motion.div
              className="relative rounded-2xl shadow-2xl shadow-blue-300/40"
              style={{ transformStyle: 'preserve-3d', y: imageY }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <motion.img src={directorImageUrl} alt="Director's Portrait" className="rounded-2xl w-full max-w-sm lg:max-w-none" style={{ transform: 'translateZ(25px)' }}/>
              <motion.div className="absolute top-0 left-0 w-full h-full rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%)', transform: 'translateZ(40px)' }}/>
            </motion.div>
          </motion.div>

          <motion.div className="lg:col-span-3">
            <motion.h2 className="text-base font-bold uppercase tracking-widest text-blue-600">
              A Message from the Director
            </motion.h2>
            <motion.h1 className="text-4xl md:text-6xl font-black my-3 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              Mr. Samuel Chen
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              "It is an honor to lead this esteemed institution. My focus is on steering our college towards a future defined by strategic growth, robust industry partnerships, and a commitment to excellence in every facet of our community."
            </motion.p>
            <motion.div className="mt-8 border-l-4 border-blue-500 pl-6" >
              <p className="font-serif italic text-gray-700">
                "Our vision is to not only educate but to innovate, creating a launchpad for the leaders and thinkers of tomorrow."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      <div className="container mx-auto px-6 py-16 lg:py-24 space-y-24">
        <motion.section  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Strategic Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "2000px" }}>
            {leadershipPhilosophy.map((item, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center" whileHover={{ y: -10, scale: 1.05, rotateX: 10, boxShadow: "0px 20px 30px rgba(20, 184, 166, 0.2)" }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                <div className="mx-auto bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Career Journey</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200"></div>
            {timelineData.map((item, index) => (
              <motion.div key={index} className="relative pl-12 mb-12" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
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

export default DirectorPage;