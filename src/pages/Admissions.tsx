import React, { useState } from "react";
import {
  Calendar,
  ArrowRight,
  Download,
  CheckCircle,
  CheckCircleIcon,
} from "lucide-react";
import { ListChecks, GraduationCap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import ApplicationForm from "./component/ApplicationForm";

const Admissions: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    lastQualification: "",
    marks: "",
    program: "",
  });

  const admissionProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit completed application form with required documents",
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Academic documents and certificates verification",
    },
    {
      step: 3,
      title: "Merit List",
      description:
        "Merit list compilation based on previous academic performance",
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Pay admission and first semester fees",
    },
    {
      step: 5,
      title: "Enrollment",
      description: "Complete enrollment process and receive student ID",
    },
  ];

  const feeStructure = {
    intermediate: {
      admission: 5000,
      monthly: 3000,
      annual: 36000,
      security: 2000,
      other: 3000,
    },
    adp: {
      admission: 8000,
      monthly: 5000,
      annual: 60000,
      security: 3000,
      other: 5000,
    },
  };

  const eligibilityRequirements = {
    "FSc Pre-Medical": "Minimum 60% marks in Matric with Science subjects",
    "FSc Pre-Engineering": "Minimum 60% marks in Matric with Science subjects",
    ICS: "Minimum 55% marks in Matric with Mathematics",
    ICom: "Minimum 50% marks in Matric (any group)",
    FA: "Minimum 50% marks in Matric (any group)",
    "ADP Programs": "Minimum 50% marks in Intermediate/A-Level",
  };
  const timelineEvents = [
    {
      date: "March 1, 2026",
      title: "Application Start",
      description: "The admission portal opens for all programs.",
      Icon: Calendar,
      color: "blue",
    },
    {
      date: "July 31, 2026",
      title: "Application Deadline",
      description: "Final day for submission of all applications.",
      Icon: CheckCircle,
      color: "green",
    },
    {
      date: "August 15, 2026",
      title: "Merit List Display",
      description: "The first list of selected candidates will be announced.",
      Icon: ListChecks,
      color: "purple",
    },
    {
      date: "September 1, 2026",
      title: "Classes Begin",
      description: "Orientation and the official start of the academic year.",
      Icon: GraduationCap,
      color: "orange",
    },
  ];

  // Helper function to format the date
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return { day, month, year };
  };

  const colorVariants = {
    blue: {
      bg: "bg-blue-600",
      border: "border-blue-600",
      shadow: "shadow-blue-600/30",
      text: "text-blue-600",
    },
    green: {
      bg: "bg-green-500",
      border: "border-green-500",
      shadow: "shadow-green-500/30",
      text: "text-green-400",
    },
    purple: {
      bg: "bg-purple-500",
      border: "border-purple-500",
      shadow: "shadow-purple-500/30",
      text: "text-purple-400",
    },
    orange: {
      bg: "bg-orange-500",
      border: "border-orange-500",
      shadow: "shadow-orange-500/30",
      text: "text-orange-400",
    },
  };

  const requiredDocuments = [
    "Completed application form",
    "Copy of CNIC/B-Form",
    "Academic transcripts/certificates",
    "Character certificate",
    "Recent passport-size photographs",
    "Medical certificate",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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
              Admissions 2024-25
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Join RIC and start your journey towards academic excellence and
              professional success
            </p>
          </motion.div>
          <motion.div
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="h-6 w-6 text-white drop-shadow" />
            <span className="text-white font-bold tracking-wide text-lg">
              Admissions Now Open!
            </span>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-lora drop-shadow-lg">
              Admission <span className="text-blue-600">Timeline</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl sm:max-w-4xl mx-auto drop-shadow-md">
              Stay on track with our academic calendar. Here are the key dates
              for the upcoming admission cycle.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Vertical Line (hidden on small screens) */}
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 h-[calc(100%-2rem)] w-1 bg-blue-500 rounded-full"
              aria-hidden="true"
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16">
              {timelineEvents.map((event, index) => {
                const { day, month, year } = formatDate(event.date);
                const isOdd = index % 2 !== 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row md:items-center ${
                      isOdd ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        isOdd ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="group backdrop-blur-sm p-6 rounded-2xl border shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          {/* Date Box */}
                          <motion.div
                            className="text-center flex-shrink-0 w-20 h-20 rounded-xl border-2 flex flex-col justify-center items-center bg-white"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                              {day}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold -mt-1">
                              {month} '{year.toString().slice(-2)}
                            </span>
                          </motion.div>

                          {/* Title + Description */}
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                              {event.title}
                            </h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-700">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot and Icon */}
                    <motion.div
                      className={`hidden md:flex absolute left-[48%] -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full shadow-lg bg-blue-600`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 12,
                      }}
                      viewport={{ once: true }}
                    >
                      <event.Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-lora tracking-tight">
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to secure your admission at{" "}
              <span className="font-semibold text-blue-600">RIC</span>
            </p>
          </motion.div>

          {/* Process Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {admissionProcess.map((item, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                variants={itemVariants}
              >
                {/* Step Card */}
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center group h-full flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                >
                  {/* Step Number */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6 font-extrabold text-lg shadow-md group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    {item.step}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>

                {/* Connector Arrow */}
                {index < admissionProcess.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="text-blue-400 h-7 w-7 opacity-70" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Column 1: Eligibility Requirements */}
            <motion.div
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="text-center lg:text-left mb-10">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold text-slate-900 font-lora"
                >
                  Eligibility Requirements
                </motion.h2>
                <motion.div
                  variants={itemVariants}
                  className="mt-3 h-1.5 w-24 rounded-full bg-blue-600 mx-auto lg:mx-0"
                />
              </div>

              <motion.div className="space-y-6" variants={containerVariants}>
                {Object.entries(eligibilityRequirements).map(
                  ([program, requirement], index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50 hover:-translate-y-2"
                    >
                      <h4 className="font-bold text-lg text-blue-600 mb-2">
                        {program}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {requirement}
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Column 2: Required Documents */}
            <motion.div
              className="flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="text-center lg:text-left mb-10">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl font-bold text-slate-900 font-lora"
                >
                  Required Documents
                </motion.h2>
                <motion.div
                  variants={itemVariants}
                  className="mt-3 h-1.5 w-24 rounded-full bg-blue-600 mx-auto lg:mx-0"
                />
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg h-full"
              >
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {requiredDocuments.map((doc, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircleIcon className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{doc}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-4 font-lora"
            >
              Fee Structure
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Transparent and affordable pricing for your future.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Intermediate Programs Card */}
            <motion.div
              variants={itemVariants}
              className="group [perspective:1000px]"
            >
              <div className="bg-white rounded-xl shadow-lg h-full p-8 transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-blue-400 group-hover:[transform:rotateY(10deg)]">
                <div className="transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:translateZ(40px)]">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center transition-all duration-300 group-hover:text-blue-600">
                    Intermediate Programs
                  </h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">
                        Admission Fee
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs.{" "}
                        {feeStructure.intermediate.admission.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">Monthly Fee</span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.intermediate.monthly.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">Annual Fee</span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.intermediate.annual.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">
                        Security Deposit
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs.{" "}
                        {feeStructure.intermediate.security.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg text-gray-600">
                        Other Charges
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.intermediate.other.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ADP Programs Card */}
            <motion.div
              variants={itemVariants}
              className="group [perspective:1000px]"
            >
              <div className="bg-white rounded-xl shadow-lg h-full p-8 transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-blue-400 group-hover:[transform:rotateY(-10deg)]">
                <div className="transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:translateZ(40px)]">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center transition-all duration-300 group-hover:text-blue-600">
                    ADP Programs
                  </h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">
                        Admission Fee
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.adp.admission.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">Monthly Fee</span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.adp.monthly.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">Annual Fee</span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.adp.annual.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b-2 border-dashed border-gray-200">
                      <span className="text-lg text-gray-600">
                        Security Deposit
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.adp.security.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg text-gray-600">
                        Other Charges
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        Rs. {feeStructure.adp.other.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div>
        <ApplicationForm />
      </div>

      {/* Download Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight font-lora">
            Download Forms & Documents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <button className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-out flex items-center space-x-5 group">
              <Download className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  Application Form
                </h3>
                <p className="text-gray-600 text-sm">
                  Download printable application form
                </p>
              </div>
            </button>

            {/* Card 2 */}
            <button className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-out flex items-center space-x-5 group">
              <Download className="h-10 w-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">Prospectus</h3>
                <p className="text-gray-600 text-sm">
                  Complete college information
                </p>
              </div>
            </button>

            {/* Card 3 */}
            <button className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 ease-out flex items-center space-x-5 group">
              <Download className="h-10 w-10 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  Fee Structure
                </h3>
                <p className="text-gray-600 text-sm">
                  Detailed fee information
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
