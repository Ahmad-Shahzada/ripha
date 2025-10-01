import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      program: "FSc Pre-Medical",
      quote:
        "RIC provided me with excellent academic foundation and extracurricular opportunities. The faculty support helped me achieve my dreams of studying medicine.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Ahmad Shahzad",
      program: "ADP Computer Science",
      quote:
        "The practical approach to learning and modern computer labs at RIC prepared me well for my career in software development.",
      image: "/images/ahmad1.jpg",
    },
    {
      name: "Fatima Ali",
      program: "ICom",
      quote:
        "The business-oriented curriculum and entrepreneurship activities at RIC helped me start my own successful business.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-extrabold font-lora text-gray-900 mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful alumni and current students
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white/80 backdrop-blur-lg border border-gray-200/40 rounded-3xl shadow-xl p-8 
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
              group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-300/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-300/40 rounded-full blur-3xl"></div>
              </div>

              {/* User Info */}
              <div className="flex items-center mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white group-hover:ring-blue-200 transition"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonial.program}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4 space-x-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed text-lg relative z-10">
                “{testimonial.quote}”
              </p>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/40 transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
