import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
     const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/image3.jpeg",
  ];

  return (
    <div>
        <div className="relative w-full h-screen overflow-hidden">
        {/* Swiper Background Slider */}
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="w-full h-screen absolute inset-0 z-0"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-screen overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-screen object-cover transform scale-105 transition-transform duration-[6000ms] ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-700/50 backdrop-blur-[2px] z-10" />

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 z-20 flex flex-col items-center mt-36 px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-4xl border border-white/10 ring-1 ring-white/20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-cinzel leading-tight tracking-wide text-white mb-5 drop-shadow-lg">
              Excellence in{" "}
              <span className="bg-gradient-to-r from-blue-200 to-cyan-300 text-transparent bg-clip-text underline decoration-blue-100/60 underline-offset-8">
                Education
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 text-blue-100/90 leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
              Riphah International College & University Kot Momin – Shaping
              future leaders through quality education in Intermediate and
              Associate Degree Programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Apply Now Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Link
                  to="/admissions"
                  className="bg-gradient-to-r from-white to-blue-100 text-blue-800 px-8 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-blue-50 hover:to-blue-200 transition-all duration-300 flex items-center justify-center gap-2 text-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* View Programs Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Link
                  to="/programs"
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-800 shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-md"
                >
                  <span>View Programs</span>
                  <BookOpen className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
