import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variants for animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  }),
};

const Moments: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Classroom",
      category: "academics",
      description: "State-of-the-art classroom with modern teaching facilities",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      category: "events",
      description: "Annual graduation ceremony celebrating student achievements",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sports Day",
      category: "sports",
      description: "Students participating in annual sports day activities",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cultural Performance",
      category: "cultural",
      description: "Students performing traditional dance at cultural festival",
    },
  ];

  const openModal = (imageId: number) => setSelectedImage(imageId);
  const closeModal = () => setSelectedImage(null);

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null;

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* Header */}
      <section className="py-12 text-center">
        <motion.h1
          className="text-4xl font-lora md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Life at RIC
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Experience vibrant campus life through moments that define our spirit.
        </motion.p>
      </section>

      {/* Swiper Gallery */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            spaceBetween={24}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {galleryImages.map((image, i) => (
              <SwiperSlide key={image.id}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(image.id)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  // variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Image */}
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Eye className="text-white h-12 w-12 transform opacity-80 group-hover:scale-110 transition-transform" />
                  </motion.div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-3">
                    <h3 className="text-white font-semibold text-lg truncate">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="swiper-button-prev-custom absolute top-1/2 md:left-32 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/90 p-2 shadow-lg hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="swiper-button-next-custom absolute top-1/2 md:right-32 right-4 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-white/90 p-2 shadow-lg hover:bg-white"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </motion.div>
        </div>
      </section>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Image */}
              <motion.img
                src={selectedImageData.url}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImageData.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {selectedImageData.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Moments;
