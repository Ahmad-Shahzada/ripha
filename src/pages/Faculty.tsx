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
      name: "Dr. Muhammad Ali Khan",
      position: "Principal",
      department: "administration",
      qualification: "Ph.D. in Education",
      experience: "20 years",
      email: "principal@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/7662888/pexels-photo-7662888.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Educational Leadership, Curriculum Development",
    },
    {
      name: "Prof. Sarah Ahmed",
      position: "Head of Sciences Department",
      department: "sciences",
      qualification: "M.Sc. Physics, B.Ed.",
      experience: "15 years",
      email: "sarah.ahmed@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Physics, Applied Sciences",
    },
    {
      name: "Mr. Hassan Raza",
      position: "Senior Lecturer",
      department: "mathematics",
      qualification: "M.Sc. Mathematics",
      experience: "12 years",
      email: "hassan.raza@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Pure Mathematics, Applied Mathematics",
    },
    {
      name: "Ms. Fatima Qureshi",
      position: "Computer Science Lecturer",
      department: "computer",
      qualification: "M.Sc. Computer Science",
      experience: "8 years",
      email: "fatima.qureshi@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Programming, Database Management",
    },
    {
      name: "Mr. Ahmed Malik",
      position: "Chemistry Lecturer",
      department: "sciences",
      qualification: "M.Sc. Chemistry",
      experience: "10 years",
      email: "ahmed.malik@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Organic Chemistry, Analytical Chemistry",
    },
    {
      name: "Dr. Ayesha Tariq",
      position: "Biology Lecturer",
      department: "sciences",
      qualification: "Ph.D. Biology",
      experience: "14 years",
      email: "ayesha.tariq@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Molecular Biology, Genetics",
    },
    {
      name: "Mr. Usman Sheikh",
      position: "Commerce Lecturer",
      department: "commerce",
      qualification: "MBA Finance",
      experience: "9 years",
      email: "usman.sheikh@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Accounting, Business Studies",
    },
    {
      name: "Ms. Zara Noor",
      position: "English Lecturer",
      department: "languages",
      qualification: "M.A. English Literature",
      experience: "11 years",
      email: "zara.noor@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "English Literature, Creative Writing",
    },
    {
      name: "Prof. Nasir Iqbal",
      position: "Economics Lecturer",
      department: "arts",
      qualification: "M.A. Economics",
      experience: "16 years",
      email: "nasir.iqbal@ric.edu.pk",
      phone: "+92-XXX-XXXXXXX",
      image:
        "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Microeconomics, Development Economics",
    },
  ];
  const sectionFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  const stats = [
    { end: 50, suffix: "+", label: "Faculty Members" },
    { end: 5, suffix: "+", label: "M-Phil Holders" },
    { end: 15, suffix: "+", label: "Years Avg Experience" },
    { end: 6, suffix: "", label: "Departments" },
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

      {/* Department Filter */}
      <section className="py-10 bg-gradient-to-r from-blue-50 via-white to-purple-50  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Our Faculty
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:scale-105"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 relative bg-gradient-to-r from-blue-50 via-white to-purple-50 overflow-hidden">
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
