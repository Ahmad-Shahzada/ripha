import React, { useEffect } from "react";
import {
  Users,
  Target,
  Eye,
  Award,
  BookOpen,
  Globe,
  Calendar,
  GraduationCap,
  School,
  UserCheck,
  ArrowRight,
  Library,
  FlaskConical,
  Dna,
} from "lucide-react";
import { motion, animate, useInView, Variants } from "framer-motion";

// --- Reusable Components for Consistency ---

const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
  isWhiteText?: boolean;
}> = ({ title, subtitle, isWhiteText = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    viewport={{ once: true, amount: 0.5 }}
    className="text-center mb-16"
  >
    <h2
      className={`text-4xl font-lora md:text-5xl font-bold mb-4 tracking-tight ${
        isWhiteText ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
    <p
      className={`text-lg max-w-3xl mx-auto ${
        isWhiteText ? "text-blue-200" : "text-gray-600"
      }`}
    >
      {subtitle}
    </p>
    <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-6 rounded-full" />
  </motion.div>
);

function Counter({ to }: { to: number }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return <span ref={ref}>{count}</span>;
}

// --- Main About Page Component ---

const About: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
    hover: {
      y: -10,
      boxShadow: "0px 25px 40px -12px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // --- Data for Sections (Update with your college's info) ---
  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Commitment to the highest educational standards.",
    },
    {
      icon: Users,
      title: "Student-Centered",
      description: "Fostering individual growth and development.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for international opportunities.",
    },
    {
      icon: Award,
      title: "Integrity & Character",
      description: "Developing ethical and responsible citizens.",
    },
  ];

  const historyMilestones = [
    {
      year: "2009",
      event: "Founded with a vision to provide quality education in Kot Momin.",
    },
    {
      year: "2015",
      event: "Expanded campus with state-of-the-art science and computer labs.",
    },
    {
      year: "2020",
      event:
        "Launched university-affiliated programs, becoming a degree college.",
    },
    {
      year: "2024",
      event:
        "Awarded 'Center of Excellence' for innovation in teaching methodologies.",
    },
  ];

  const stats = [
    { icon: Calendar, value: 16, label: "Years of Excellence", suffix: "+" },
    {
      icon: GraduationCap,
      value: 5000,
      label: "Successful Alumni",
      suffix: "+",
    },
    { icon: School, value: 1000, label: "Current Students", suffix: "+" },
    { icon: UserCheck, value: 50, label: "Expert Faculty", suffix: "+" },
  ];

  const facilities = [
    {
      name: "Modern Science Labs",
      icon: FlaskConical,
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Extensive Library",
      icon: Library,
      image:
        "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Advanced Computer Labs",
      icon: Dna,
      image:
        "/images/ric-5.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 antialiased">
      {/* --- Hero Section --- */}
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
              className="text-5xl  md:text-6xl font-extrabold tracking-tighter mb-4"
              style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}
            >
              About RIC
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Forging Futures Through Excellence in Education for Over 16 Years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Mission & Vision Section --- */}
       <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Purpose</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            The driving force behind our commitment to education and student success.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* Mission */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white p-10 rounded-2xl border border-gray-200/60 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-blue-100 rounded-xl">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="ml-5 text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide quality education that empowers students with knowledge,
              skills, and values for success. We are committed to fostering an
              environment of excellence, innovation, and integrity.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group bg-white p-10 rounded-2xl border border-gray-200/60 shadow-sm"
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-amber-100 rounded-xl">
                <Eye className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="ml-5 text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the leading educational institution in the region, recognized
              for academic excellence and producing graduates who contribute
              meaningfully to society.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
      {/* --- Principal's Message Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-xl transform -rotate-3 z-0"></div>
              <img
                src="/images/ric.jpg"
                alt="Principal"
                className="rounded-xl w-full h-auto object-cover relative z-10 shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                A Message from Our Principal
              </h2>
              <p className="text-gray-500 mb-6 text-lg">
                Muhammad Irfan Shahzad Zargar
              </p>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed border-l-4 border-amber-400 pl-8">
                <p>
                  "Welcome to RIC, where education transcends textbooks. We are
                  dedicated to nurturing not just scholars, but leaders and
                  compassionate citizens. Our commitment is to provide an
                  environment where every student can discover their potential
                  and build a future they are proud of."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Core Values Section --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Guiding Principles"
            subtitle="The principles that guide our actions, decisions, and community culture."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200/60 shadow-md 
                     hover:shadow-2xl hover:shadow-blue-500/30 transform-gpu transition-all duration-300"
                style={{ perspective: "1000px" }}
              >
                <div className="inline-block p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 shadow-inner">
                  <value.icon className="h-12 w-12 text-blue-600 drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Timeline Section --- */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="A timeline of our growth, milestones, and achievements over the years."
          />
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {historyMilestones.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full border-2 border-blue-500">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div
                    className={`w-full pl-12 lg:pl-0 lg:w-1/2 ${
                      index % 2 === 0
                        ? "lg:pr-8 lg:text-right"
                        : "lg:pl-8 lg:ml-auto"
                    }`}
                  >
                    <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-blue-600 font-bold text-2xl mb-2">
                        {item.year}
                      </p>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEW: Explore Our Campus Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Explore Our Campus"
            subtitle="A modern, inspiring environment built to foster creativity, collaboration, and deep learning."
          />
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                variants={cardVariants}
                className={`group relative rounded-xl overflow-hidden shadow-lg ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <facility.icon className="h-10 w-10 text-amber-400 mb-3" />
                  <h3 className="text-3xl font-bold text-white">
                    {facility.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Statistics Section (Glassmorphism) --- */}
      <section className="py-24 relative bg-gray-900 bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-white">
          <SectionHeader
            title="RIC by the Numbers"
            subtitle="Our impact and growth, quantified."
            isWhiteText={true}
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg"
              >
                <stat.icon className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <div className="text-5xl font-extrabold mb-2">
                  <Counter to={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW: Call to Action Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeader
            title="Begin Your Journey at RIC"
            subtitle="Join a community of passionate learners and inspiring leaders. Your future starts here."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/admissions"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg"
            >
              Apply Now <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
