import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Users,
  BookOpen,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "admissions", name: "Admissions", icon: Users },
    { id: "academic", name: "Academic", icon: BookOpen },
    { id: "fees", name: "Fees & Financial", icon: DollarSign },
  ];

  const faqData = [
    {
      id: 1,
      question:
        "What are the admission requirements for intermediate programs?",
      answer:
        "Students must have completed Matriculation (SSC) with minimum 50-60% marks depending on the program. For FSc Pre-Medical and Pre-Engineering, minimum 60% marks are required. For other programs like ICS, ICom, and FA, minimum 50-55% marks are sufficient.",
      category: "admissions",
    },
    {
      id: 2,
      question: "When do admissions open and close?",
      answer:
        "Admissions typically open in March and close in July. However, exact dates may vary each year. We recommend checking our website or contacting the admissions office for current dates.",
      category: "admissions",
    },
    {
      id: 3,
      question: "What documents are required for admission?",
      answer:
        "Required documents include: completed application form, copy of CNIC/B-Form, academic transcripts/certificates, character certificate, recent passport-size photographs, and medical certificate.",
      category: "admissions",
    },
    {
      id: 4,
      question: "Is there an entrance test for admission?",
      answer:
        "No, there is no entrance test. Admissions are based on merit calculated from previous academic performance. However, we may conduct interviews for certain programs.",
      category: "admissions",
    },
    {
      id: 5,
      question: "What is the fee structure for intermediate programs?",
      answer:
        "Intermediate programs have an admission fee of Rs. 5,000, monthly fee of Rs. 3,000, and annual fee of Rs. 36,000. Additional charges include security deposit of Rs. 2,000 and other charges of Rs. 3,000.",
      category: "fees",
    },
    {
      id: 6,
      question: "What is the fee structure for ADP programs?",
      answer:
        "ADP programs have an admission fee of Rs. 8,000, monthly fee of Rs. 5,000, and annual fee of Rs. 60,000. Additional charges include security deposit of Rs. 3,000 and other charges of Rs. 5,000.",
      category: "fees",
    },
    {
      id: 7,
      question: "Are there any scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships for top-performing students. Financial assistance is also available for deserving students from low-income families. Contact our finance office for more details.",
      category: "fees",
    },
    {
      id: 8,
      question: "Can I pay fees in installments?",
      answer:
        "Yes, fees can be paid in installments. Students can pay monthly fees or opt for semester-wise payment. However, admission fee must be paid at the time of admission.",
      category: "fees",
    },
    {
      id: 9,
      question: "What is the duration of intermediate programs?",
      answer:
        "All intermediate programs (FSc, FA, ICS, ICom) are 2-year programs. Students attend classes for 4 semesters over 2 academic years.",
      category: "academic",
    },
    {
      id: 10,
      question: "What is the duration of ADP programs?",
      answer:
        "Associate Degree Programs (ADP) are 2-year programs equivalent to the first two years of a bachelor's degree. Each program comprises 60 credit hours.",
      category: "academic",
    },
    {
      id: 11,
      question: "What are the class timings?",
      answer:
        "We offer both morning and evening classes. Morning classes are from 8:00 AM to 1:00 PM, and evening classes are from 2:00 PM to 7:00 PM. Students can choose their preferred timing.",
      category: "academic",
    },
    {
      id: 12,
      question: "How many students are there in each class?",
      answer:
        "We maintain small class sizes to ensure personalized attention. Typically, each class has 25-35 students, allowing for better interaction between students and teachers.",
      category: "academic",
    },
    {
      id: 13,
      question: "What facilities are available at the college?",
      answer:
        "RIC offers modern facilities including well-equipped laboratories, computer lab, library with 10,000+ books, sports complex, auditorium, cafeteria, and prayer room.",
      category: "academic",
    },
    {
      id: 14,
      question: "Are there any extracurricular activities?",
      answer:
        "Yes, we have various extracurricular activities including sports, cultural events, academic societies, science fairs, and community service projects. Students are encouraged to participate.",
      category: "academic",
    },
    {
      id: 15,
      question: "What is the examination system?",
      answer:
        "We follow the board examination system. Students appear for board examinations conducted by the Board of Intermediate and Secondary Education (BISE) for intermediate programs and university examinations for ADP programs.",
      category: "academic",
    },
    {
      id: 16,
      question: "Can I transfer from another college?",
      answer:
        "Yes, transfer students are accepted subject to availability of seats and fulfillment of admission criteria. Transfer students must provide original documents and NOC from their previous institution.",
      category: "admissions",
    },
    {
      id: 17,
      question: "What is the refund policy?",
      answer:
        "Refund policy varies depending on the timing of withdrawal. Students who withdraw before the semester starts may receive a partial refund. No refund is available after the semester begins.",
      category: "fees",
    },
    {
      id: 18,
      question: "Is hostel facility available?",
      answer:
        "Currently, we do not have hostel facilities. However, we can provide information about nearby accommodation options for outstation students.",
      category: "academic",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-28 overflow-hidden">
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl  text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about admissions, programs, fees,
              and college life at RIC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white hover:shadow-md transition"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105"
                }`}
              >
                <category.icon
                  className={`h-5 w-5 ${
                    selectedCategory === category.id
                      ? "text-white"
                      : "text-blue-600"
                  }`}
                />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 pt-5 text-left flex items-center justify-between rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-6">
                    {faq.question}
                  </h3>
                  {isOpen(faq.id) ? (
                    <ChevronUp className="h-6 w-6 text-blue-600 transition-transform duration-300 transform rotate-180" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500 transition-transform duration-300" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`px-6 pb-5 overflow-hidden transition-all duration-300 ${
                    isOpen(faq.id)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-md mt-8">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or selecting a different
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20  relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Decorative gradient blur circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4 drop-shadow-md">
            Still Have Questions?
          </h2>
          <p className="text-lg  mb-10 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
