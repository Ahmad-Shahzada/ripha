import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Phone,
  Mail,
  ChevronDown,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// Define types for our navigation items for better code quality
interface SubNavItem {
  icon: any;
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: SubNavItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation data structure to support dropdowns
  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    {
      name: "Our Team",
      href: "#",
      children: [
        {
          name: "Principal",
          href: "/principal-detail",
          icon: User,
        },
        {
          name: "Director",
          href: "/director-detail",
          icon: Briefcase,
        },
        {
          name: "Professors",
          href: "/faculty",
          icon: GraduationCap,
        },
      ],
    },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <motion.header
      // ... (header motion props are unchanged)
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-xl border-b border-gray-200"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      {/* Top Info Bar is unchanged */}
      <motion.div className="bg-blue-900 text-white py-2 text-sm px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+92-310-6681075</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Coordinator.kotmomin@ric.edu.pk</span>
            </div>
          </div>
          <div className="hidden md:block font-medium animate-pulse">
            Admissions Open 2025-26 —{" "}
            <Link to="/admissions" className="underline text-blue-200">
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Nav */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo is unchanged */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 5 }}
                className="bg-blue-600 p-2 rounded-xl shadow-lg"
              >
                <img
                  src="/images/ric-logo.png"
                  className="w-7"
                  alt="RIC Logo"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  RIC
                </h1>
                <p className="text-xs text-gray-500">
                  Riphah International College
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.name)
                  }
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition duration-300 ${
                      (location.pathname.startsWith(item.href) &&
                        item.href !== "/") ||
                      location.pathname === item.href
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  <AnimatePresence>
                    {item.children && openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-3 w-72 bg-white backdrop-blur-xl rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)] ring-1 ring-gray-200 p-3 border border-gray-100"
                      >
                        {item.children.map((child, idx) => {
                          const Icon = child.icon;
                          return (
                            <motion.div
                              key={child.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 
                         hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
                         hover:text-gray-900 transition-all duration-300 group"
                              >
                                {/* Icon with 3D effect */}
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white shadow-[10px_10px_10px_rgba(0,0,0,0.1),-10px_-10px_10px_rgba(255,255,255,0.8)] transition-transform duration-300">
                                  <Icon className="h-5 w-5 text-blue-600 group-hover:text-purple-600 transition-colors" />
                                </span>

                                {/* Text */}
                                <span className="relative z-10">
                                  {child.name}
                                </span>

                                {/* Glow effect on hover */}
                                <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-400/40 group-hover:shadow-[0_0_15px_3px_rgba(59,130,246,0.3)] transition-all duration-300"></span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Search + Apply is unchanged */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 text-gray-500 hover:text-blue-600 transition"
              >
                <Search className="h-5 w-5" />
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/admissions"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle is unchanged */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenMobileSubMenu(
                              openMobileSubMenu === item.name ? null : item.name
                            )
                          }
                          className="w-full flex justify-between items-center text-base font-medium py-2 text-gray-700 hover:text-blue-600"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openMobileSubMenu === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileSubMenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-base font-medium py-2 text-gray-600 hover:text-blue-600"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-base font-medium py-2 ${
                          location.pathname === item.href
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    to="/admissions"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-center bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
