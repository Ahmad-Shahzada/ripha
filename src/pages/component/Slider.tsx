import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CampusStatsProps {}

const CampusStats: React.FC<CampusStatsProps> = () => {
  const sliderImages: string[] = [
    "/images/slider-2.webp",
    "/images/slider-3.webp",
    "/images/slider-1.webp",
  ];

  // Motion Variants (typed correctly)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:mb-20">
        {/* Left - Image Slider */}
        <motion.div
          variants={fadeUpVariant}
          className="w-full md:w-[45%]"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="rounded-lg shadow-lg"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right - Text and Stats */}
        <motion.div
          variants={fadeUpVariant}
          className="w-full md:w-[60%] md:pl-10"
        >
          {/* Logo */}
          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center mb-5"
          >
            <img src="/images/logo2.png" className="w-28 h-28" alt="RIC Logo" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariant}
            className="text-2xl sm:text-3xl text-center font-semibold text-gray-800 mb-6 leading-relaxed"
          >
            <span className="text-blue-700">RIC </span> prepares students with
            the transformative experience and helps them become well-rounded
            leaders who make a positive impact on the world.
          </motion.h2>

          {/* Stat Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-lg text-center shadow-sm cursor-pointer transition-transform"
            >
              <span className="text-3xl md:text-4xl font-bold text-blue-700">
                10+
              </span>
              <p className="mt-2 text-gray-600 font-medium">PROGRAMS OFFERED</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-6 rounded-lg text-center shadow-sm cursor-pointer transition-transform"
            >
              <span className="text-3xl md:text-4xl font-bold text-green-700">
                50+
              </span>
              <p className="mt-2 text-gray-600 font-medium">
                LEADERSHIP WORKSHOPS
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 p-6 rounded-lg text-center shadow-sm cursor-pointer transition-transform"
            >
              <span className="text-3xl md:text-4xl font-bold text-purple-700">
                5,000+
              </span>
              <p className="mt-2 text-gray-600 font-medium">
                ALUMNI MAKING A DIFFERENCE
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CampusStats;
