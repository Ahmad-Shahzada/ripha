import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import Contactform from "./component/Contactform";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Kot Momin, Sargodha, Punjab, Pakistan",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+92-XXX-XXXXXXX",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ric.edu.pk",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 8:00 AM - 4:00 PM",
      color: "text-orange-600",
    },
  ];

  const departments = [
    {
      name: "Admissions Office",
      phone: "+92-XXX-XXXXXXX",
      email: "admissions@ric.edu.pk",
    },
    {
      name: "Academic Office",
      phone: "+92-XXX-XXXXXXX",
      email: "academic@ric.edu.pk",
    }
  ];

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
              Contact Us
            </h1>
            <p className="text-xl  text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any inquiries about admissions, programs,
              or general information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-md 
                     hover:shadow-xl transition-all duration-300 
                     transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 
                       rounded-full  
                       shadow-lg mb-4"
                >
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>

                {/* Title & Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
             <div>
              <Contactform/>
             </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-500 transform hover:-translate-y-2 p-6"
              >
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Find Us
                </h2>

                {/* Map Placeholder */}
                <div className="bg-gray-100 h-64 mb-6 flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.693015200544!2d73.02934614247685!3d32.181324445539026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392193070aed6e05%3A0x80e0dba076d17307!2sRipha%20International%20College%20Kotmomin%20Campus!5e0!3m2!1sen!2s!4v1759163443254!5m2!1sen!2s"
                      width="530"
                      height="250"
                     
                    ></iframe>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Department Contacts
                  </h3>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg 
                             bg-white shadow-sm hover:shadow-md transition duration-300"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {dept.name}
                          </h4>
                          <p className="text-sm text-gray-600">{dept.phone}</p>
                        </div>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
