import React from 'react';
import { FaHotel, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'Rooms & Suites', href: '#rooms' },
        { label: 'Amenities', href: '#amenities' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Room Service', href: '#' },
        { label: 'Spa & Wellness', href: '#' },
        { label: 'Conference Halls', href: '#' },
        { label: 'Restaurant', href: '#' },
        { label: 'Concierge', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Booking Policies', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cancellation', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaHotel className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="font-bold text-xl text-[var(--color-text)]">
                LuxeStay
              </span>
            </div>
            <p className="text-[var(--color-muted)] mb-6 max-w-md">
              Experience luxury and comfort at LuxeStay. We provide world-class hospitality 
              with exceptional service and premium amenities for an unforgettable stay.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-[var(--color-muted)]">
                <FaMapMarkerAlt className="h-4 w-4" />
                <span className="text-sm">123 Luxury Avenue, Hotel District</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--color-muted)]">
                <FaPhone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-[var(--color-muted)]">
                <FaEnvelope className="h-4 w-4" />
                <span className="text-sm">info@luxestay.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[var(--color-background)] rounded-lg flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[var(--color-text)] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-background)] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[var(--color-muted)] text-sm">
            © 2025 LuxeStay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;