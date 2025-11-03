import React, { useState } from "react";
import {
  Calendar,
  User,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All News", color: "bg-gray-100 text-gray-700" },
    {
      id: "admissions",
      name: "Admissions",
      color: "bg-green-100 text-green-700",
    },
    { id: "academic", name: "Academic", color: "bg-blue-100 text-blue-700" },
    { id: "events", name: "Events", color: "bg-purple-100 text-purple-700" },
    { id: "results", name: "Results", color: "bg-orange-100 text-orange-700" },
    {
      id: "achievements",
      name: "Achievements",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Admissions Open for Session 2025",
      excerpt:
        "Riphah International College announces admissions for Intermediate and ADP programs. Early bird discount available.",
      content:
        "We are excited to announce that admissions are now open for the academic session 2024-25. Students can apply for various programs including FSc Pre-Medical, Pre-Engineering, ICS, ICom, FA, and ADP programs.",
      category: "admissions",
      date: "2025-09-15",
      author: "Admissions Office",
      image:
        "/public/images/ric-4.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "RIC Students Win Inter-College Science Competition",
      excerpt:
        "Our science students secured first position in the regional science competition held at University of Punjab.",
      content:
        "Students from RIC have made us proud by winning the inter-college science competition. The team, led by Sarah Ahmed from FSc Pre-Medical, presented an innovative project on renewable energy.",
      category: "achievements",
      date: "2024-01-10",
      author: "Science Department",
      image:
        "/images/ric-6.png",
      featured: false,
    },
    {
      id: 3,
      title: "Annual Sports Day 2024 Scheduled",
      excerpt:
        "The annual sports day will be held on February 20, 2024. Students from all programs are encouraged to participate.",
      content:
        "RIC is organizing its annual sports day with various competitions including cricket, football, basketball, and track events. Medals and trophies will be awarded to winners.",
      category: "events",
      date: "2025-9-10",
      author: "Sports Committee",
      image:
        "/images/ric-7.png",
      featured: false,
    },
    {
      id: 4,
      title: "Mid-Term Examination Schedule Released",
      excerpt:
        "Mid-term examinations for all programs will commence from March 1, 2024. Students are advised to prepare accordingly.",
      content:
        "The examination department has released the schedule for mid-term examinations. All students are required to carry their admit cards and follow the examination guidelines.",
      category: "academic",
      date: "2024-01-05",
      author: "Examination Department",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
    },
    {
      id: 5,
      title: "New Computer Lab Inaugurated",
      excerpt:
        "A state-of-the-art computer lab with 50 new computers has been inaugurated to enhance IT education.",
      content:
        "RIC has installed a new computer lab equipped with latest hardware and software to provide students with hands-on experience in computer programming and applications.",
      category: "academic",
      date: "2024-01-03",
      author: "IT Department",
      image:
        "/images/ric-5.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Outstanding Results in Board Examinations",
      excerpt:
        "RIC students achieved 95% pass rate in intermediate examinations with 40% students securing A+ grades.",
      content:
        "We are proud to announce that our students have achieved exceptional results in the recent board examinations. The hard work of students and faculty has paid off.",
      category: "results",
      // date: "2025-12-28",
      author: "Academic Office",
      image:
        "/images/ric-1.jpg",
      featured: true,
    },
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter((article) => article.featured);
  // --- Animation Variants ---

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each card will animate 0.2s after the previous one
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20"
            animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -bottom-20 -right-10"
            animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="text-5xl font-extrabold tracking-tighter mb-4"
              style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
            >
              News & Announcements
            </h1>
            <p className="text-xl  text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, events, and announcements from
              Riphah International College
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Featured News & Updates
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Stay informed with the latest stories, achievements, and events
              from our community.
            </p>
          </motion.div>

          {/* This perspective wrapper enables the 3D effect on children */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            style={{ perspective: "1200px" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredNews.map((article) => (
              <motion.div
                key={article.id}
                className="relative rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-blue-100/50"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-fill"
                    style={{ transform: "translateZ(20px)" }} // Pushes image forward slightly
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        categories.find((cat) => cat.id === article.category)
                          ?.color
                      }`}
                    >
                      {
                        categories.find((cat) => cat.id === article.category)
                          ?.name
                      }
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="border-t border-gray-200 pt-5 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-gradient-to-r from-gray-50 to-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search latest news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium shadow-sm 
                        transition-all duration-200 ease-in-out transform hover:scale-105
                        ${
                          selectedCategory === category.id
                            ? "bg-blue-600 text-white shadow-md"
                            : `${category.color} hover:opacity-90`
                        }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Latest News
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest headlines and trending stories.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                     transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
