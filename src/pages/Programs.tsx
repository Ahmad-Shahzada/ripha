import React from "react";
import { BookOpen, Users, Clock, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Programs: React.FC = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };
  const intermediatePrograms = [
    {
      name: "FSc Pre-Medical",
      duration: "2 Years",
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "English",
        "Urdu",
      ],
      description:
        "Comprehensive program for students aspiring to pursue medical and health sciences careers.",
      students: "500+",
      career: "MBBS, BDS, Pharmacy, Physiotherapy, Nursing",
    },
    {
      name: "FSc Pre-Engineering",
      duration: "2 Years",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English",
        "Urdu",
      ],
      description:
        "Rigorous program preparing students for engineering and technology fields.",
      students: "450+",
      career: "Engineering, Architecture, Computer Science, Technology",
    },
    {
      name: "ICS (Computer Science)",
      duration: "2 Years",
      subjects: [
        "Physics",
        "Mathematics",
        "Computer Science",
        "Statistics",
        "English",
        "Urdu",
      ],
      description:
        "Specialized program focusing on computer science and information technology.",
      students: "300+",
      career: "Software Engineering, IT, Data Science, Web Development",
    },
    {
      name: "ICom (Commerce)",
      duration: "2 Years",
      subjects: [
        "Accounting",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
        "Urdu",
      ],
      description:
        "Business-oriented program for future entrepreneurs and commerce professionals.",
      students: "350+",
      career: "BBA, MBA, CA, Banking, Business Management",
    },
    {
      name: "FA (Arts)",
      duration: "2 Years",
      subjects: [
        "Psychology",
        "Sociology",
        "Economics",
        "History",
        "English",
        "Urdu",
      ],
      description:
        "Liberal arts program developing critical thinking and communication skills.",
      students: "250+",
      career: "Law, Journalism, Social Sciences, Literature, Teaching",
    },
  ];

  const adpPrograms = [
    {
      name: "ADP Computer Science",
      duration: "2 Years",
      credits: "60 Credit Hours",
      description:
        "Associate degree program in computer science with practical focus on programming and software development.",
      career: "Software Developer, System Analyst, Database Administrator",
    },
    {
      name: "ADP Business Administration",
      duration: "2 Years",
      credits: "60 Credit Hours",
      description:
        "Comprehensive business program covering management, marketing, finance, and entrepreneurship.",
      career: "Business Manager, Marketing Executive, Financial Analyst",
    },
    {
      name: "ADP Information Technology",
      duration: "2 Years",
      credits: "60 Credit Hours",
      description:
        "Technology-focused program preparing students for IT industry challenges.",
      career: "IT Support, Network Administrator, Web Developer",
    },
    {
      name: "ADP Commerce",
      duration: "2 Years",
      credits: "60 Credit Hours",
      description:
        "Commerce and accounting focused program for business and finance careers.",
      career: "Accountant, Auditor, Financial Consultant, Banking Officer",
    },
  ];
  const features = [
    {
      title: "Expert Faculty",
      description:
        "Learn from highly qualified and experienced teachers dedicated to your success.",
      Icon: BookOpen,
      iconBgColor: "bg-blue-100",
      iconTextColor: "text-blue-600",
    },
    {
      title: "Small Class Sizes",
      description:
        "Receive personalized attention and mentorship in an intimate learning environment.",
      Icon: Users,
      iconBgColor: "bg-green-100",
      iconTextColor: "text-green-600",
    },
    {
      title: "Modern Facilities",
      description:
        "Utilize our state-of-the-art labs, libraries, and campus resources.",
      Icon: Award,
      iconBgColor: "bg-purple-100",
      iconTextColor: "text-purple-600",
    },
    {
      title: "Flexible Schedule",
      description:
        "Balance your education with other commitments through our flexible timetables.",
      Icon: Clock,
      iconBgColor: "bg-orange-100",
      iconTextColor: "text-orange-600",
    },
  ];
  return (
    <div className="pb-16">
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
              className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4"
              style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
            >
              Academic Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive educational programs designed to prepare students
              for higher education and professional success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intermediate Programs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>{" "}
        {/* Subtle background pattern */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              className="font-lora text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Discover Our <span className="text-blue-600">Intermediate</span>{" "}
              Programs
            </motion.h2>

            <motion.p
              custom={1}
              variants={textVariants}
              className="mt-6 text-xl text-slate-700 max-w-4xl mx-auto"
            >
              Embark on a journey of academic excellence with our Higher
              Secondary Certificate (HSC) programs, meticulously designed to
              provide specialized tracks for seamless university preparation.
            </motion.p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 [perspective:1000px]">
            {" "}
            {/* Perspective for 3D effect */}
            {intermediatePrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-transparent hover:border-blue-300
                         transform transition-all duration-500
                         hover:rotate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200
                         [transform-style:preserve-3d] relative overflow-hidden" // Preserve 3D
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

                {/* Card Header */}
                <div className="p-8 flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 bg-blue-500 text-white rounded-full p-4 shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <BookOpen className="h-9 w-9" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {program.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-slate-600 mt-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-500" />
                        <span>{program.students}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-8 pb-8 flex-grow relative z-10">
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 text-lg mb-3">
                      Core Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {program.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium
                                   border border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-300
                                   transition-all duration-300"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-2">
                      Career Paths:
                    </h4>
                    <p className="text-slate-600 text-base">{program.career}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADP Programs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>{" "}
        {/* Optional: Subtle background pattern */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl font-lora font-bold text-slate-900 leading-tight"
            >
              Associate Degree <span className="text-blue-600">Programs</span>{" "}
              (ADP)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-xl text-slate-700 max-w-4xl mx-auto"
            >
              Our two-year degree programs are equivalent to the first two years
              of bachelor's studies, providing a fast track to your career and
              higher education.
            </motion.p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 [perspective:1000px]">
            {" "}
            {/* Perspective for 3D effect */}
            {adpPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border border-transparent hover:border-blue-300
                         transform transition-all duration-500
                         hover:rotate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200
                         [transform-style:preserve-3d] relative overflow-hidden" // Preserve 3D
              >
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>

                {/* Card Header */}
                <div className="p-8 flex items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 bg-blue-500 text-white rounded-full p-4 shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <BookOpen className="h-9 w-9" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {program.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-slate-600 mt-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        <span>{program.credits}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-8 pb-8 flex-grow relative z-10">
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-2">
                      Career Opportunities:
                    </h4>
                    <p className="text-slate-600 text-base">{program.career}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 relative isolate overflow-hidden">
        {/* Background Particles/Circles (Purely decorative, more advanced CSS/JS if truly animated) */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Heading */}
            <motion.h2
              className="text-5xl font-lora font-bold leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-blue-600">Our Programs?</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="mt-6 text-xl max-w-4xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              We provide an unparalleled educational experience by focusing on
              the core pillars that ensure student success and career readiness.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1200px] relative z-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-md border border-gray-700/50 p-5 rounded-3xl shadow-xl
                         transform transition-all duration-700 ease-out-back
                         hover:border-blue-500 hover:-translate-y-4 hover:rotate-z-1 hover:scale-[1.03]
                         [transform-style:preserve-3d] hover:shadow-2xl`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col items-center text-center [transform-style:preserve-3d] [transform:translateZ(20px)]">
                  {/* Icon Container */}
                  <div
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center
                              transform transition-transform duration-700
                              ${feature.iconBgColor} shadow-inner-xl group-hover:shadow-2xl group-hover:shadow-current-color/40`}
                  >
                    <div className="absolute inset-0 rounded-full bg-white opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <feature.Icon
                      className={`h-14 w-14 relative z-10 transition-all duration-500 group-hover:scale-110 ${feature.iconTextColor}`}
                    />
                  </div>

                  {/* Text Content */}
                  <h3
                    className="mt-8 text-2xl font-bold
                               transform transition-all duration-700 group-hover:text-blue-500 group-hover:[transform:translateZ(20px)]"
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-3 leading-relaxed
                              transform transition-all duration-700 group-hover:[transform:translateZ(10px)_scale(1.02)]"
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
