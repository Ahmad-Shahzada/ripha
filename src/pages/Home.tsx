import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Download,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ValuesSection from "./component/Values";
import CampusStats from "./component/Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Moments from "./component/Moments";
import Testimonials from "./component/Testimonials";
import StatsSection from "./component/StatsSection";
const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const sectionFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const Home: React.FC = () => {
  const stats = [
    { end: 50, suffix: "+", label: "Faculty Members" },
    { end: 5, suffix: "+", label: "M-Phil Holders" },
    { end: 15, suffix: "+", label: "Years Avg Experience" },
    { end: 6, suffix: "", label: "Departments" },
  ];

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/images.jpeg",
  ];

  const programs = [
    {
      name: "FSc Pre-Medical",
      description: "Medical and health sciences preparation",
      students: "500+",
    },
    {
      name: "FSc Pre-Engineering",
      description: "Engineering and technology track",
      students: "450+",
    },
    {
      name: "ICS",
      description: "Computer science fundamentals",
      students: "300+",
    },
    {
      name: "ICom",
      description: "Commerce and business studies",
      students: "350+",
    },
    {
      name: "ADP Programs",
      description: "Associate degree programs",
      students: "200+",
    },
  ];

  const announcements = [
    { title: "Admissions Open 2024-25", date: "2024-01-15", type: "admission" },
    { title: "Annual Sports Day", date: "2024-02-20", type: "event" },
    { title: "Mid-term Examinations", date: "2024-03-01", type: "exam" },
  ];
  const items = [
    { value: 15, suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Students Enrolled" },
    { value: 20, suffix: "+", label: "Qualified Faculty" },
    { value: 95, suffix: "%", label: "Success Rate" },
  ];

  return (
    <div>
      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700/60 backdrop-blur-[2px] z-10" />

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
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text underline decoration-blue-100/60 underline-offset-8">
               Ripha
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-10 text-blue-100/90 leading-relaxed drop-shadow-sm max-w-2xl mx-auto">
              Ripha International College & University Kot Momin – Shaping
              future leaders through quality education in Intermediate and
              Associate Degree Program.
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
      {/* Stats Section */}
      <StatsSection />

      <ValuesSection />
      <div className="bg-white">
        <CampusStats />
      </div>
      {/* Programs Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className=" md:text-5xl font-lora text-3xl  font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive educational programs designed to prepare students
              for higher education and professional careers.
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.15 }}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.98 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100"
                >
                  {/* Decorative gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0"
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 p-7 h-full flex flex-col">
                    <motion.div
                      className="flex justify-between items-start mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <BookOpen className="h-6 w-6 text-white" />
                      </motion.div>
                      <motion.span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-indigo-600 shadow-sm"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,255,255,1)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {program.students}+ students
                      </motion.span>
                    </motion.div>

                    <div className="flex-grow">
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-3 leading-tight"
                        whileHover={{
                          color: "#1e40af",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {program.name}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 mb-6 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {program.description}
                      </motion.p>
                    </div>

                    <div className="mt-auto">
                      <motion.div
                        whileHover={{
                          x: 5,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                          },
                        }}
                      >
                        <Link
                          to="/programs"
                          className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800"
                        >
                          <motion.span
                            className="relative"
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <span className="block">Discover program</span>
                            <motion.span
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600"
                              whileHover={{
                                width: "100%",
                                transition: { duration: 0.3 },
                              }}
                            />
                          </motion.span>
                          <ChevronRight className="h-5 w-5 ml-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0"
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <motion.section
        className="py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ────────── Decorative Glow Blobs ────────── */}
        <motion.div
          className="absolute top-[-100px] right-[-80px] w-[250px] h-[250px] bg-purple-600 rounded-full opacity-20 blur-3xl z-0"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-20 blur-3xl z-0"
          animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ────────── Content Wrapper ────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-lora">
              Our Faculty Excellence
            </h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto">
              Qualified educators committed to student success.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-indigo-600/40 hover:-translate-y-1 transition"
                custom={i}
                // variants={fadeSlideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-indigo-300 mb-2">
                  <CountUp
                    end={item.end}
                    duration={1.8}
                    enableScrollSpy
                    scrollSpyDelay={100}
                    suffix={item.suffix}
                  />
                </div>
                <div className="text-blue-100 text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <motion.div
            className="flex mt-16 justify-center items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/faculty">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(236, 72, 153, .5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-block text-white font-semibold px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-pink-400 opacity-20 blur-lg rounded-full" />
                <span className="relative z-10">See All Professors</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* campus moments  */}
      <div>
        <Moments />
        <Testimonials />
      </div>

      {/* News and Announcements */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Latest News */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  Latest News
                </h2>
                <Link
                  to="/news"
                  className="text-sm md:text-base font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                >
                  View All
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-6">
                {announcements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-start space-x-4 p-6 rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-lg hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-3.5 h-3.5 rounded-full shadow-inner ring-2 ring-white ${
                          item.type === "admission"
                            ? "bg-green-500"
                            : item.type === "exam"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                Quick Actions
              </h2>

              <div className="space-y-6">
                {/* Admission Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="block bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <Link to="/admissions">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Apply for Admission
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Start your application process today
                        </p>
                      </div>
                      <ArrowRight className="h-7 w-7 text-white" />
                    </div>
                  </Link>
                </motion.div>

                {/* Downloads */}
                <motion.div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    Downloads
                  </h3>
                  <div className="space-y-3">
                    {[
                      "College Prospectus",
                      "Admission Form",
                      "Fee Structure",
                    ].map((item, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Download className="h-5 w-5 text-blue-500" />
                        <span>{item}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
