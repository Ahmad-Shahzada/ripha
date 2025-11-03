import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Pagination is imported
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variants for animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.1, ease: [0.42, 0, 0.58, 1] },
  }),
};

const Moments: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // --- FIXED ---
  // Added back titles/descriptions
  const galleryImages = [
    {
      id: 1,
      url: "/images/top.jpg",
      category: "academics",
    },
    {
      id: 2,
      url: "/images/ric-2.jpg",
      category: "events",
    },
    {
      id: 3,
      url: "/images/ric-3.jpg",
      category: "events",
    },
    {
      id: 4,
      url: "/images/top7.JPG",
      category: "cultural",
    },
    {
      id: 5,
      url: "/images/top5.JPG",
      category: "cultural",
    },
    {
      id: 6,
      url: "/images/top3.JPG",
      category: "cultural",
    },
    {
      id: 7,
      url: "/images/top4.JPG",
      category: "cultural",
    },
    {
      id: 8, // Fixed duplicate ID
      url: "/images/top2.JPG",
      category: "cultural",
    },
  ];

  const openModal = (imageId: number) => setSelectedImage(imageId);
  const closeModal = () => setSelectedImage(null);

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* Header */}
      <section className="py-12 text-center relative z-10">
        <motion.h1
          className="text-4xl font-lora md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight 
                 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent
                 [text-shadow:0_2px_4px_rgba(59,130,246,0.2)]"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Life at RIC
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A gallery of unforgettable moments. Discover the vibrant energy and
          spirit that defines life at RIC.
        </motion.p>
      </section>

      {/* Swiper Gallery */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            // --- FIXED ---
            // Added Pagination module
            modules={[Navigation, Pagination]}
            // --- FIXED ---
            // Added padding-bottom for pagination dots
            className="mySwiper py-16"
          >
            {galleryImages.map((image, i) => (
              <SwiperSlide key={image.id} style={{ perspective: "1000px" }}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_45px_-15px_rgba(59,130,246,0.35)] transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(image.id)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{
                    rotateY: 8,
                    rotateX: 2,
                    scale: 1.03,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  <motion.img
                    src={image.url}
                    className="w-full h-80 object-cover"
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Eye className="text-white h-12 w-12 transform opacity-80 group-hover:scale-110 group-hover:-translate-y-2 transition-transform" />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- UPDATED Custom Navigation Buttons --- */}
          <motion.div
            // --- FIX ---
            // Replaced transform classes with style={{ y: "-50%" }} to prevent animation conflicts
            style={{ y: "-50%" }}
            // --- DESIGN UPDATE ---
            // Defined hover animation in Framer Motion for a smooth color and scale transition
            className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 cursor-pointer rounded-full bg-white p-3 shadow-md"
            initial={{ scale: 1, backgroundColor: "#ffffff", color: "#1f2937" }} // bg-white, text-gray-800
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB", color: "#ffffff" }} // bg-blue-600, text-white
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.div>
          <motion.div
            // --- FIX ---
            style={{ y: "-50%" }}
            // --- DESIGN UPDATE ---
            className="swiper-button-next-custom absolute top-1/2 right-4 z-10 cursor-pointer rounded-full bg-white p-3 shadow-md"
            initial={{ scale: 1, backgroundColor: "#ffffff", color: "#1f2937" }}
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB", color: "#ffffff" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.div>
        </div>
      </section>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition-colors"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </motion.button>

            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                src={selectedImageData.url}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Moments;