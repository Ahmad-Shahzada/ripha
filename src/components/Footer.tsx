import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  // Social links data for easy management
  const socialLinks = [
    { Icon: Facebook, href: '#', name: 'Facebook', hoverColor: 'hover:text-blue-600' },
    { Icon: Twitter, href: '#', name: 'Twitter', hoverColor: 'hover:text-sky-500' },
    { Icon: Instagram, href: '#', name: 'Instagram', hoverColor: 'hover:text-pink-500' },
    { Icon: Youtube, href: '#', name: 'YouTube', hoverColor: 'hover:text-red-600' },
  ];

  // Quick links data
  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/programs', label: 'Programs' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/faculty', label: 'Faculty' },
    { to: '/campus-life', label: 'Campus Life' },
    { to: '/faq', label: 'FAQ' },
  ];
  
  // Programs data
  const programs = [
    { to: '/programs#pre-medical', label: 'FSc Pre-Medical' },
    { to: '/programs#pre-engineering', label: 'FSc Pre-Engineering' },
    { to: '/programs#ics', label: 'ICS' },
    { to: '/programs#icom', label: 'ICom' },
    { to: '/programs#fa', label: 'FA' },
    { to: '/programs#adp', label: 'ADP Programs' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* College Info & Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-3 mb-5">
              <div className="bg-blue-600 p-2 rounded-lg">
                <img src="/images/ric-logo.png" className='h-10 w-8' alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">RIC</h3>
                <p className="text-sm text-slate-400">Riphah International College</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              A leading institution in Kot Momin, dedicated to providing quality education through our Intermediate and Associate Degree Programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-blue-600 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-blue-600 pb-2 inline-block">Programs</h4>
            <ul className="space-y-3">
              {programs.map(program => (
                <li key={program.to}>
                  <Link to={program.to} className="flex items-center text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300">
                     <ArrowRight className="h-4 w-4 mr-2" />
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 border-b-2 border-blue-600 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Kot Momin, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+923001234567" className="text-slate-400 hover:text-blue-400 transition-colors">+92-310-6681075</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@ric.edu.pk" className="text-slate-400 hover:text-blue-400 transition-colors">Coordinator.kotmomin@ric.edu.pk</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-slate-500 text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} Riphah International College. All Rights Reserved.
          </p>
          <div className="flex space-x-2">
            {socialLinks.map(({ Icon, href, name, hoverColor }) => (
              <a 
                key={name}
                href={href} 
                aria-label={name}
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 ${hoverColor}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;