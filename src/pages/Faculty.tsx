import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Mail,
  Phone,
  Award,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const Faculty: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const departments = [
    { id: "all", name: "All Faculty" },
    { id: "sciences", name: "Sciences" },
    { id: "mathematics", name: "Mathematics" },
    { id: "computer", name: "Computer Science" },
    { id: "commerce", name: "Commerce" },
    { id: "arts", name: "Arts & Humanities" },
    { id: "languages", name: "Languages" },
  ];

  const facultyMembers = [
    {
      name: "Khaliq Yar",
      position: "Lecturer in Pakistan Studies",
      department: "languages",
      qualification: "M.A Pakistan Studies",
      experience: "4 years",
      image: "/images/teacher-10.jpg",
      specialization:
        "History, Geography, and Political Development of Pakistan",
    },
    {
      name: "Kishwar Nazir",
      position: "Lecturer in Zoology",
      department: "Humanities",
      qualification: "MSc Zoology, B.Ed",
      experience: "7 years",
      image: "/images/teacher-1.jpg",
      specialization: "Biology, Ecology, and Wildlife Studies",
    },
    {
      name: "Toshiba Saifullah",
      position: "Lecturer in Information Technology",
      department: "Department of Computer Science and IT",
      qualification: "MSc Information Technology",
      experience: "6 years",
      image: "/images/teacher-2.jpg",
      specialization:
        "Software Development, Networking, and Information Systems",
    },
    {
      name: "Muhammad Safdar",
      position: "Lecturer in Mathematics",
      department: "Department of Mathematics",
      qualification: "MSc Mathematics",
      experience: "5 years",
      image: "/images/teacher-3.jpg",
      specialization: "Pure and Applied Mathematics, Mathematical Analysis",
    },
    {
      name: "Mutrib Rubab",
      position: "Lecturer in Botany",
      department: "Department of Biological Sciences",
      qualification: "MPhil Botany",
      experience: "8 years",
      image: "/images/teacher-4.jpg",
      specialization: "Plant Physiology, Ecology, and Environmental Biology",
    },
    {
      name: "Nasira Azam",
      position: "Lecturer in English",
      department: "Department of English Language and Literature",
      qualification: "M.A English",
      experience: "10 years",
      image: "/images/teacher-5.jpg",
      specialization:
        "English Literature, Linguistics, and Communication Skills",
    },
    {
      name: "Irfan Shahzad",
      position: "Lecturer in Urdu",
      department: "Department of Urdu",
      qualification: "M.A Urdu",
      experience: "2 years",
      image: "/images/teacher-6.jpg",
      specialization: "Urdu Literature and Linguistics",
    },
    {
      name: "Urwa Murtaza",
      position: "Lecturer in Islamic Studies",
      department: "Department of Islamic Studies",
      qualification: "M.A Islamiyat, B.Ed",
      experience: "5 years",
      image: "/images/teacher-7.jpg",
      specialization: "Qur’anic Studies, Hadith, and Islamic Ethics",
    },
    {
      name: "Umme Salma",
      position: "Lecturer in Commerce",
      department: "Department of Commerce",
      qualification: "MBA (Finance)",
      experience: "8 years",
      image: "/images/teacher-8.jpg",
      specialization: "Finance, Accounting, and Business Management",
    },
    {
      name: "Murawat Rubab",
      position: "Lecturer in Computer Science",
      department: "Department of Computer Science and IT",
      qualification: "MSc IT",
      experience: "4 years",
      image: "/images/teacher-9.jpg",
      specialization: "Programming, Database Systems, and Web Technologies",
    },
    {
      name: "Shahbaz Kazmi",
      position: "Lecturer in Physics",
      department: "Department of Physics",
      qualification: "MSc Physics",
      experience: "5 years",
      image: "/images/teacher-11.jpg",
      specialization: "Theoretical and Applied Physics",
    },
  ];
  const filteredFaculty =
    selectedDepartment === "all"
      ? facultyMembers
      : facultyMembers.filter(
          (member) => member.department === selectedDepartment
        );

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
              Our Faculty
            </h1>
            <p className="text-xl  text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated team of experienced educators committed to
              providing quality education and nurturing student success
            </p>
          </motion.div>
        </div>
      </section>

      <div className="text-center py-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-4">
          Faculty
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto rounded-full mb-3"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet our dedicated and experienced faculty members who inspire
          excellence in education.
        </p>
      </div>

      {/* Faculty Grid */}
      <section className="pb-20 relative bg-gradient-to-r from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 3,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }} // More prominent hover shadow
                className="relative bg-white/50 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 ease-in-out"
              >
                {/* Optional: Add a subtle inner shadow or border for depth */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none"></div>

                <div className="p-8">
                  {/* Profile */}
                  <div className="flex items-center mb-6">
                    <motion.img // Animate image on hover as well
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                      whileHover={{ scale: 1.1, rotate: 5 }} // Slight rotation and scale on image
                      transition={{ duration: 0.3 }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-md mt-1">
                        {member.position}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0" />
                      <span className="text-base">{member.qualification}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                      <span className="text-base">
                        {member.experience} Experience
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-6 w-6 text-purple-500 flex-shrink-0" />
                      <span className="text-base">{member.specialization}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
