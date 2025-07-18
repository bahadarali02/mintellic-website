'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDribbble, 
  FaTwitter,
  FaWhatsapp 
} from 'react-icons/fa';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', aria: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', aria: 'LinkedIn' },
  { icon: FaDribbble, href: 'https://dribbble.com', aria: 'Dribbble' },
  { icon: FaTwitter, href: 'https://twitter.com', aria: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-orange">Mintellic</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              We craft immersive digital experiences that tell your brand&apos;s story and drive measurable results.
            </p>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, aria }, index) => (
                <motion.a
                  key={`social-${index}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-orange transition-colors"
                  aria-label={aria}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <motion.li 
                  key={`quick-${index}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-orange transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a 
                  href="https://wa.me/1234567890" 
                  className="text-gray-400 hover:text-orange transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a 
                  href="mailto:hello@mintellic.com" 
                  className="text-gray-400 hover:text-orange transition-colors"
                >
                  hello@mintellic.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mintellic. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Crafted with passion by the Mintellic team
          </p>
        </div>
      </div>
    </footer>
  );
}